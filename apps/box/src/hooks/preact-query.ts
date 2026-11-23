import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function getAuthorizeQueryKey(args: InferRequestType<typeof client.authorize.$get>) {
  return ['authorize', '/authorize', args] as const
}

export function getAuthorizeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.authorize.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthorizeQueryKey>
  >({
    queryKey: getAuthorizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorize.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authorize.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthorizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAuthorizeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authorize.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthorizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAuthorizeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOauth2TokenMutationKey() {
  return ['oauth2', '/oauth2/token', 'POST'] as const
}

export function getPostOauth2TokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth2.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2TokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth2.token.$post>) {
      return parseResponse(client.oauth2.token.$post(args, options))
    },
  })
}

export function usePostOauth2Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth2.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauth2TokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOauth2TokenRefreshMutationKey() {
  return ['oauth2', '/oauth2/token#refresh', 'POST'] as const
}

export function getPostOauth2TokenRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['token#refresh']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth2)['token#refresh']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2TokenRefreshMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.oauth2)['token#refresh']['$post']>) {
      return parseResponse(client.oauth2['token#refresh'].$post(args, options))
    },
  })
}

export function usePostOauth2TokenRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.oauth2)['token#refresh']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.oauth2)['token#refresh']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauth2TokenRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauth2RevokeMutationKey() {
  return ['oauth2', '/oauth2/revoke', 'POST'] as const
}

export function getPostOauth2RevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.revoke.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth2.revoke.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2RevokeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth2.revoke.$post>) {
      return parseResponse(client.oauth2.revoke.$post(args, options))
    },
  })
}

export function usePostOauth2Revoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.revoke.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth2.revoke.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauth2RevokeMutationOptions<TError, TOnMutateResult>(
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

export function getFilesFileIdQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['files', '/files/:file_id', keyArgs] as const
}

export function getFilesFileIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdQueryKey>
  >({
    queryKey: getFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFilesFileId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFilesFileIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFilesFileId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFilesFileIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutFilesFileIdMutationKey() {
  return ['files', '/files/:file_id', 'PUT'] as const
}

export function getPutFilesFileIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':file_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFilesFileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':file_id']['$put']>) {
      return parseResponse(client.files[':file_id'].$put(args, options))
    },
  })
}

export function usePutFilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.files)[':file_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFilesFileIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFilesFileIdMutationKey() {
  return ['files', '/files/:file_id', 'POST'] as const
}

export function getPostFilesFileIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':file_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesFileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':file_id']['$post']>) {
      return parseResponse(client.files[':file_id'].$post(args, options))
    },
  })
}

export function usePostFilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.files)[':file_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFilesFileIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFilesFileIdMutationKey() {
  return ['files', '/files/:file_id', 'DELETE'] as const
}

export function getDeleteFilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.files)[':file_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesFileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':file_id']['$delete']>) {
      return parseResponse(client.files[':file_id'].$delete(args, options))
    },
  })
}

export function useDeleteFilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.files)[':file_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFilesFileIdMutationOptions<TError, TOnMutateResult>(
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

export function getFilesFileIdAppItemAssociationsQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['app_item_associations']['$get']>,
) {
  return ['files', '/files/:file_id/app_item_associations', args] as const
}

export function getFilesFileIdAppItemAssociationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['app_item_associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['app_item_associations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['app_item_associations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdAppItemAssociationsQueryKey>
  >({
    queryKey: getFilesFileIdAppItemAssociationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].app_item_associations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFilesFileIdAppItemAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['app_item_associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['app_item_associations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.files)[':file_id']['app_item_associations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdAppItemAssociationsQueryKey>
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
      ...getFilesFileIdAppItemAssociationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFilesFileIdAppItemAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['app_item_associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['app_item_associations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.files)[':file_id']['app_item_associations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdAppItemAssociationsQueryKey>
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
      ...getFilesFileIdAppItemAssociationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFilesFileIdContentQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['content']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['files', '/files/:file_id/content', keyArgs] as const
}

export function getFilesFileIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdContentQueryKey>
  >({
    queryKey: getFilesFileIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFilesFileIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['content']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdContentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFilesFileIdContentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFilesFileIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['content']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdContentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFilesFileIdContentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFilesFileIdContentMutationKey() {
  return ['files', '/files/:file_id/content', 'POST'] as const
}

export function getPostFilesFileIdContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':file_id']['content']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesFileIdContentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)[':file_id']['content']['$post']>,
    ) {
      return parseResponse(client.files[':file_id'].content.$post(args, options))
    },
  })
}

export function usePostFilesFileIdContent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.files)[':file_id']['content']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFilesFileIdContentMutationOptions<TError, TOnMutateResult>(
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

export function getPostFilesContentMutationKey() {
  return ['files', '/files/content', 'POST'] as const
}

export function getPostFilesContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.content.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.files.content.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesContentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.files.content.$post>) {
      return parseResponse(client.files.content.$post(args, options))
    },
  })
}

export function usePostFilesContent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.content.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.files.content.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFilesContentMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsFilesContentMutationKey() {
  return ['files', '/files/content', 'OPTIONS'] as const
}

export function getOptionsFilesContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.content.$options>>>>
    >,
    TError,
    InferRequestType<typeof client.files.content.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsFilesContentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.files.content.$options>) {
      return parseResponse(client.files.content.$options(args, options))
    },
  })
}

export function useOptionsFilesContent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.files.content.$options>>>
          >
        >,
        TError,
        InferRequestType<typeof client.files.content.$options>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsFilesContentMutationOptions<TError, TOnMutateResult>(
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

export function getPostFilesUploadSessionsMutationKey() {
  return ['files', '/files/upload_sessions', 'POST'] as const
}

export function getPostFilesUploadSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.files.upload_sessions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.files.upload_sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesUploadSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.files.upload_sessions.$post>) {
      return parseResponse(client.files.upload_sessions.$post(args, options))
    },
  })
}

export function usePostFilesUploadSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.files.upload_sessions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.files.upload_sessions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFilesUploadSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostFilesFileIdUploadSessionsMutationKey() {
  return ['files', '/files/:file_id/upload_sessions', 'POST'] as const
}

export function getPostFilesFileIdUploadSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['upload_sessions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':file_id']['upload_sessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesFileIdUploadSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)[':file_id']['upload_sessions']['$post']>,
    ) {
      return parseResponse(client.files[':file_id'].upload_sessions.$post(args, options))
    },
  })
}

export function usePostFilesFileIdUploadSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['upload_sessions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.files)[':file_id']['upload_sessions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFilesFileIdUploadSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getFilesUploadSessionsUploadSessionIdQueryKey(
  args: InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>,
) {
  return ['files', '/files/upload_sessions/:upload_session_id', args] as const
}

export function getFilesUploadSessionsUploadSessionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesUploadSessionsUploadSessionIdQueryKey>
  >({
    queryKey: getFilesUploadSessionsUploadSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files.upload_sessions[':upload_session_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFilesUploadSessionsUploadSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesUploadSessionsUploadSessionIdQueryKey>
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
      ...getFilesUploadSessionsUploadSessionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFilesUploadSessionsUploadSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesUploadSessionsUploadSessionIdQueryKey>
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
      ...getFilesUploadSessionsUploadSessionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutFilesUploadSessionsUploadSessionIdMutationKey() {
  return ['files', '/files/upload_sessions/:upload_session_id', 'PUT'] as const
}

export function getPutFilesUploadSessionsUploadSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFilesUploadSessionsUploadSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$put']>,
    ) {
      return parseResponse(client.files.upload_sessions[':upload_session_id'].$put(args, options))
    },
  })
}

export function usePutFilesUploadSessionsUploadSessionId<
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
                ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFilesUploadSessionsUploadSessionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFilesUploadSessionsUploadSessionIdMutationKey() {
  return ['files', '/files/upload_sessions/:upload_session_id', 'DELETE'] as const
}

export function getDeleteFilesUploadSessionsUploadSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesUploadSessionsUploadSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files.upload_sessions)[':upload_session_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.files.upload_sessions[':upload_session_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteFilesUploadSessionsUploadSessionId<
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
                  ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFilesUploadSessionsUploadSessionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFilesUploadSessionsUploadSessionIdPartsQueryKey(
  args: InferRequestType<
    (typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']
  >,
) {
  return ['files', '/files/upload_sessions/:upload_session_id/parts', args] as const
}

export function getFilesUploadSessionsUploadSessionIdPartsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesUploadSessionsUploadSessionIdPartsQueryKey>
  >({
    queryKey: getFilesUploadSessionsUploadSessionIdPartsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files.upload_sessions[':upload_session_id'].parts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFilesUploadSessionsUploadSessionIdParts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFilesUploadSessionsUploadSessionIdPartsQueryKey>
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
      ...getFilesUploadSessionsUploadSessionIdPartsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFilesUploadSessionsUploadSessionIdParts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFilesUploadSessionsUploadSessionIdPartsQueryKey>
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
      ...getFilesUploadSessionsUploadSessionIdPartsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostFilesUploadSessionsUploadSessionIdPlanMutationKey() {
  return ['files', '/files/upload_sessions/:upload_session_id/plan', 'POST'] as const
}

export function getPostFilesUploadSessionsUploadSessionIdPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['plan']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesUploadSessionsUploadSessionIdPlanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files.upload_sessions)[':upload_session_id']['plan']['$post']
      >,
    ) {
      return parseResponse(
        client.files.upload_sessions[':upload_session_id'].plan.$post(args, options),
      )
    },
  })
}

export function usePostFilesUploadSessionsUploadSessionIdPlan<
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
                  (typeof client.files.upload_sessions)[':upload_session_id']['plan']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.files.upload_sessions)[':upload_session_id']['plan']['$post']
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
  const mutationDefaults = getPostFilesUploadSessionsUploadSessionIdPlanMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFilesUploadSessionsUploadSessionIdCommitMutationKey() {
  return ['files', '/files/upload_sessions/:upload_session_id/commit', 'POST'] as const
}

export function getPostFilesUploadSessionsUploadSessionIdCommitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.files.upload_sessions)[':upload_session_id']['commit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostFilesUploadSessionsUploadSessionIdCommitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files.upload_sessions)[':upload_session_id']['commit']['$post']
      >,
    ) {
      return parseResponse(
        client.files.upload_sessions[':upload_session_id'].commit.$post(args, options),
      )
    },
  })
}

export function usePostFilesUploadSessionsUploadSessionIdCommit<
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
                  (typeof client.files.upload_sessions)[':upload_session_id']['commit']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.files.upload_sessions)[':upload_session_id']['commit']['$post']
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
  const mutationDefaults = getPostFilesUploadSessionsUploadSessionIdCommitMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFilesFileIdCopyMutationKey() {
  return ['files', '/files/:file_id/copy', 'POST'] as const
}

export function getPostFilesFileIdCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['copy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':file_id']['copy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesFileIdCopyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':file_id']['copy']['$post']>) {
      return parseResponse(client.files[':file_id'].copy.$post(args, options))
    },
  })
}

export function usePostFilesFileIdCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['copy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.files)[':file_id']['copy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFilesFileIdCopyMutationOptions<TError, TOnMutateResult>(
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

export function getFilesFileIdThumbnailExtensionQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['thumbnail.{extension}']['$get']>,
) {
  return ['files', '/files/:file_id/thumbnail.{extension}', args] as const
}

export function getFilesFileIdThumbnailExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['thumbnail.{extension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['thumbnail.{extension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['thumbnail.{extension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdThumbnailExtensionQueryKey>
  >({
    queryKey: getFilesFileIdThumbnailExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id']['thumbnail.{extension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFilesFileIdThumbnailExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['thumbnail.{extension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['thumbnail.{extension}']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.files)[':file_id']['thumbnail.{extension}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdThumbnailExtensionQueryKey>
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
      ...getFilesFileIdThumbnailExtensionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFilesFileIdThumbnailExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['thumbnail.{extension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['thumbnail.{extension}']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.files)[':file_id']['thumbnail.{extension}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdThumbnailExtensionQueryKey>
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
      ...getFilesFileIdThumbnailExtensionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFilesFileIdCollaborationsQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['collaborations']['$get']>,
) {
  return ['files', '/files/:file_id/collaborations', args] as const
}

export function getFilesFileIdCollaborationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['collaborations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['collaborations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['collaborations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdCollaborationsQueryKey>
  >({
    queryKey: getFilesFileIdCollaborationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].collaborations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFilesFileIdCollaborations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['collaborations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['collaborations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['collaborations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdCollaborationsQueryKey>
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
      ...getFilesFileIdCollaborationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFilesFileIdCollaborations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['collaborations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['collaborations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['collaborations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdCollaborationsQueryKey>
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
      ...getFilesFileIdCollaborationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFilesFileIdCommentsQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['comments']['$get']>,
) {
  return ['files', '/files/:file_id/comments', args] as const
}

export function getFilesFileIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdCommentsQueryKey>
  >({
    queryKey: getFilesFileIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFilesFileIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['comments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFilesFileIdCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFilesFileIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['comments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFilesFileIdCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFilesFileIdTasksQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['tasks']['$get']>,
) {
  return ['files', '/files/:file_id/tasks', args] as const
}

export function getFilesFileIdTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['tasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdTasksQueryKey>
  >({
    queryKey: getFilesFileIdTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].tasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFilesFileIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['tasks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['tasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFilesFileIdTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFilesFileIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['tasks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['tasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFilesFileIdTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFilesFileIdTrashQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['trash']['$get']>,
) {
  return ['files', '/files/:file_id/trash', args] as const
}

export function getFilesFileIdTrashQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['trash']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['trash']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['trash']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdTrashQueryKey>
  >({
    queryKey: getFilesFileIdTrashQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].trash.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFilesFileIdTrash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['trash']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['trash']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['trash']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdTrashQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFilesFileIdTrashQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFilesFileIdTrash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['trash']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['trash']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['trash']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdTrashQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFilesFileIdTrashQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteFilesFileIdTrashMutationKey() {
  return ['files', '/files/:file_id/trash', 'DELETE'] as const
}

export function getDeleteFilesFileIdTrashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['trash']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.files)[':file_id']['trash']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesFileIdTrashMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)[':file_id']['trash']['$delete']>,
    ) {
      return parseResponse(client.files[':file_id'].trash.$delete(args, options))
    },
  })
}

export function useDeleteFilesFileIdTrash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['trash']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.files)[':file_id']['trash']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFilesFileIdTrashMutationOptions<TError, TOnMutateResult>(
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

export function getFilesFileIdVersionsQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['versions']['$get']>,
) {
  return ['files', '/files/:file_id/versions', args] as const
}

export function getFilesFileIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdVersionsQueryKey>
  >({
    queryKey: getFilesFileIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFilesFileIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFilesFileIdVersionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFilesFileIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFilesFileIdVersionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFilesFileIdVersionsFileVersionIdQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>,
) {
  return ['files', '/files/:file_id/versions/:file_version_id', args] as const
}

export function getFilesFileIdVersionsFileVersionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdVersionsFileVersionIdQueryKey>
  >({
    queryKey: getFilesFileIdVersionsFileVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].versions[':file_version_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFilesFileIdVersionsFileVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.files)[':file_id']['versions'][':file_version_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdVersionsFileVersionIdQueryKey>
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
      ...getFilesFileIdVersionsFileVersionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFilesFileIdVersionsFileVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.files)[':file_id']['versions'][':file_version_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdVersionsFileVersionIdQueryKey>
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
      ...getFilesFileIdVersionsFileVersionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutFilesFileIdVersionsFileVersionIdMutationKey() {
  return ['files', '/files/:file_id/versions/:file_version_id', 'PUT'] as const
}

export function getPutFilesFileIdVersionsFileVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFilesFileIdVersionsFileVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)[':file_id']['versions'][':file_version_id']['$put']
      >,
    ) {
      return parseResponse(
        client.files[':file_id'].versions[':file_version_id'].$put(args, options),
      )
    },
  })
}

export function usePutFilesFileIdVersionsFileVersionId<
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
                  (typeof client.files)[':file_id']['versions'][':file_version_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFilesFileIdVersionsFileVersionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFilesFileIdVersionsFileVersionIdMutationKey() {
  return ['files', '/files/:file_id/versions/:file_version_id', 'DELETE'] as const
}

export function getDeleteFilesFileIdVersionsFileVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesFileIdVersionsFileVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)[':file_id']['versions'][':file_version_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.files[':file_id'].versions[':file_version_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteFilesFileIdVersionsFileVersionId<
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
                    (typeof client.files)[':file_id']['versions'][':file_version_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.files)[':file_id']['versions'][':file_version_id']['$delete']
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
  const mutationDefaults = getDeleteFilesFileIdVersionsFileVersionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFilesFileIdVersionsCurrentMutationKey() {
  return ['files', '/files/:file_id/versions/current', 'POST'] as const
}

export function getPostFilesFileIdVersionsCurrentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['current']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':file_id']['versions']['current']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesFileIdVersionsCurrentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)[':file_id']['versions']['current']['$post']>,
    ) {
      return parseResponse(client.files[':file_id'].versions.current.$post(args, options))
    },
  })
}

export function usePostFilesFileIdVersionsCurrent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['current']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.files)[':file_id']['versions']['current']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFilesFileIdVersionsCurrentMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFilesFileIdMetadataQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['metadata']['$get']>,
) {
  return ['files', '/files/:file_id/metadata', args] as const
}

export function getFilesFileIdMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdMetadataQueryKey>
  >({
    queryKey: getFilesFileIdMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFilesFileIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['metadata']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['metadata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFilesFileIdMetadataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFilesFileIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['metadata']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['metadata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFilesFileIdMetadataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey(
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

export function getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey>
  >({
    queryKey: getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey>
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
      ...getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey>
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
      ...getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationKey() {
  return [
    'files',
    '/files/:file_id/metadata/enterprise/securityClassification-6VMVochwUWo',
    'PUT',
  ] as const
}

export function getPutFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$put']
      >,
    ) {
      return parseResponse(
        client.files[':file_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
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
                  (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$put']
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
    getPutFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationKey() {
  return [
    'files',
    '/files/:file_id/metadata/enterprise/securityClassification-6VMVochwUWo',
    'POST',
  ] as const
}

export function getPostFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$post']
      >,
    ) {
      return parseResponse(
        client.files[':file_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
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
                  (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$post']
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
    getPostFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationKey() {
  return [
    'files',
    '/files/:file_id/metadata/enterprise/securityClassification-6VMVochwUWo',
    'DELETE',
  ] as const
}

export function getDeleteFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$delete']
      >,
    ) {
      return parseResponse(
        client.files[':file_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
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
                    (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$delete']
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
    getDeleteFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFilesFileIdMetadataScopeTemplateKeyQueryKey(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$get']
  >,
) {
  return ['files', '/files/:file_id/metadata/:scope/:template_key', args] as const
}

export function getFilesFileIdMetadataScopeTemplateKeyQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFilesFileIdMetadataScopeTemplateKeyQueryKey>
  >({
    queryKey: getFilesFileIdMetadataScopeTemplateKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].metadata[':scope'][':template_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFilesFileIdMetadataScopeTemplateKey<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFilesFileIdMetadataScopeTemplateKeyQueryKey>
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
      ...getFilesFileIdMetadataScopeTemplateKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFilesFileIdMetadataScopeTemplateKey<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFilesFileIdMetadataScopeTemplateKeyQueryKey>
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
      ...getFilesFileIdMetadataScopeTemplateKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutFilesFileIdMetadataScopeTemplateKeyMutationKey() {
  return ['files', '/files/:file_id/metadata/:scope/:template_key', 'PUT'] as const
}

export function getPutFilesFileIdMetadataScopeTemplateKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutFilesFileIdMetadataScopeTemplateKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$put']
      >,
    ) {
      return parseResponse(
        client.files[':file_id'].metadata[':scope'][':template_key'].$put(args, options),
      )
    },
  })
}

export function usePutFilesFileIdMetadataScopeTemplateKey<
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
                  (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$put']
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
  const mutationDefaults = getPutFilesFileIdMetadataScopeTemplateKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFilesFileIdMetadataScopeTemplateKeyMutationKey() {
  return ['files', '/files/:file_id/metadata/:scope/:template_key', 'POST'] as const
}

export function getPostFilesFileIdMetadataScopeTemplateKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostFilesFileIdMetadataScopeTemplateKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$post']
      >,
    ) {
      return parseResponse(
        client.files[':file_id'].metadata[':scope'][':template_key'].$post(args, options),
      )
    },
  })
}

export function usePostFilesFileIdMetadataScopeTemplateKey<
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
                  (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$post']
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
  const mutationDefaults = getPostFilesFileIdMetadataScopeTemplateKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFilesFileIdMetadataScopeTemplateKeyMutationKey() {
  return ['files', '/files/:file_id/metadata/:scope/:template_key', 'DELETE'] as const
}

export function getDeleteFilesFileIdMetadataScopeTemplateKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesFileIdMetadataScopeTemplateKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$delete']
      >,
    ) {
      return parseResponse(
        client.files[':file_id'].metadata[':scope'][':template_key'].$delete(args, options),
      )
    },
  })
}

export function useDeleteFilesFileIdMetadataScopeTemplateKey<
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
                    (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$delete']
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
  const mutationDefaults = getDeleteFilesFileIdMetadataScopeTemplateKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFilesFileIdMetadataGlobalBoxSkillsCardsQueryKey(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$get']
  >,
) {
  return ['files', '/files/:file_id/metadata/global/boxSkillsCards', args] as const
}

export function getFilesFileIdMetadataGlobalBoxSkillsCardsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFilesFileIdMetadataGlobalBoxSkillsCardsQueryKey>
  >({
    queryKey: getFilesFileIdMetadataGlobalBoxSkillsCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].metadata.global.boxSkillsCards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFilesFileIdMetadataGlobalBoxSkillsCards<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFilesFileIdMetadataGlobalBoxSkillsCardsQueryKey>
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
      ...getFilesFileIdMetadataGlobalBoxSkillsCardsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFilesFileIdMetadataGlobalBoxSkillsCards<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFilesFileIdMetadataGlobalBoxSkillsCardsQueryKey>
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
      ...getFilesFileIdMetadataGlobalBoxSkillsCardsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutFilesFileIdMetadataGlobalBoxSkillsCardsMutationKey() {
  return ['files', '/files/:file_id/metadata/global/boxSkillsCards', 'PUT'] as const
}

export function getPutFilesFileIdMetadataGlobalBoxSkillsCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutFilesFileIdMetadataGlobalBoxSkillsCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$put']
      >,
    ) {
      return parseResponse(
        client.files[':file_id'].metadata.global.boxSkillsCards.$put(args, options),
      )
    },
  })
}

export function usePutFilesFileIdMetadataGlobalBoxSkillsCards<
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
                  (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$put']
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
  const mutationDefaults = getPutFilesFileIdMetadataGlobalBoxSkillsCardsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFilesFileIdMetadataGlobalBoxSkillsCardsMutationKey() {
  return ['files', '/files/:file_id/metadata/global/boxSkillsCards', 'POST'] as const
}

export function getPostFilesFileIdMetadataGlobalBoxSkillsCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostFilesFileIdMetadataGlobalBoxSkillsCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$post']
      >,
    ) {
      return parseResponse(
        client.files[':file_id'].metadata.global.boxSkillsCards.$post(args, options),
      )
    },
  })
}

export function usePostFilesFileIdMetadataGlobalBoxSkillsCards<
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
                  (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$post']
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
  const mutationDefaults = getPostFilesFileIdMetadataGlobalBoxSkillsCardsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFilesFileIdMetadataGlobalBoxSkillsCardsMutationKey() {
  return ['files', '/files/:file_id/metadata/global/boxSkillsCards', 'DELETE'] as const
}

export function getDeleteFilesFileIdMetadataGlobalBoxSkillsCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesFileIdMetadataGlobalBoxSkillsCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$delete']
      >,
    ) {
      return parseResponse(
        client.files[':file_id'].metadata.global.boxSkillsCards.$delete(args, options),
      )
    },
  })
}

export function useDeleteFilesFileIdMetadataGlobalBoxSkillsCards<
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
                    (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$delete']
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
  const mutationDefaults = getDeleteFilesFileIdMetadataGlobalBoxSkillsCardsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFilesFileIdWatermarkQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['watermark']['$get']>,
) {
  return ['files', '/files/:file_id/watermark', args] as const
}

export function getFilesFileIdWatermarkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['watermark']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['watermark']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['watermark']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdWatermarkQueryKey>
  >({
    queryKey: getFilesFileIdWatermarkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].watermark.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFilesFileIdWatermark<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['watermark']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['watermark']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['watermark']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdWatermarkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFilesFileIdWatermarkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFilesFileIdWatermark<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['watermark']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['watermark']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['watermark']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdWatermarkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFilesFileIdWatermarkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutFilesFileIdWatermarkMutationKey() {
  return ['files', '/files/:file_id/watermark', 'PUT'] as const
}

export function getPutFilesFileIdWatermarkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['watermark']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':file_id']['watermark']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFilesFileIdWatermarkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)[':file_id']['watermark']['$put']>,
    ) {
      return parseResponse(client.files[':file_id'].watermark.$put(args, options))
    },
  })
}

export function usePutFilesFileIdWatermark<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['watermark']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.files)[':file_id']['watermark']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFilesFileIdWatermarkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteFilesFileIdWatermarkMutationKey() {
  return ['files', '/files/:file_id/watermark', 'DELETE'] as const
}

export function getDeleteFilesFileIdWatermarkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['watermark']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.files)[':file_id']['watermark']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesFileIdWatermarkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)[':file_id']['watermark']['$delete']>,
    ) {
      return parseResponse(client.files[':file_id'].watermark.$delete(args, options))
    },
  })
}

export function useDeleteFilesFileIdWatermark<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['watermark']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.files)[':file_id']['watermark']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFilesFileIdWatermarkMutationOptions<TError, TOnMutateResult>(
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

export function getFileRequestsFileRequestIdQueryKey(
  args: InferRequestType<(typeof client.file_requests)[':file_request_id']['$get']>,
) {
  return ['file_requests', '/file_requests/:file_request_id', args] as const
}

export function getFileRequestsFileRequestIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.file_requests)[':file_request_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileRequestsFileRequestIdQueryKey>
  >({
    queryKey: getFileRequestsFileRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.file_requests[':file_request_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFileRequestsFileRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.file_requests)[':file_request_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileRequestsFileRequestIdQueryKey>
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
      ...getFileRequestsFileRequestIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFileRequestsFileRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.file_requests)[':file_request_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileRequestsFileRequestIdQueryKey>
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
      ...getFileRequestsFileRequestIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutFileRequestsFileRequestIdMutationKey() {
  return ['file_requests', '/file_requests/:file_request_id', 'PUT'] as const
}

export function getPutFileRequestsFileRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.file_requests)[':file_request_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFileRequestsFileRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.file_requests)[':file_request_id']['$put']>,
    ) {
      return parseResponse(client.file_requests[':file_request_id'].$put(args, options))
    },
  })
}

export function usePutFileRequestsFileRequestId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.file_requests)[':file_request_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFileRequestsFileRequestIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteFileRequestsFileRequestIdMutationKey() {
  return ['file_requests', '/file_requests/:file_request_id', 'DELETE'] as const
}

export function getDeleteFileRequestsFileRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.file_requests)[':file_request_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFileRequestsFileRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.file_requests)[':file_request_id']['$delete']>,
    ) {
      return parseResponse(client.file_requests[':file_request_id'].$delete(args, options))
    },
  })
}

export function useDeleteFileRequestsFileRequestId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.file_requests)[':file_request_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFileRequestsFileRequestIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFileRequestsFileRequestIdCopyMutationKey() {
  return ['file_requests', '/file_requests/:file_request_id/copy', 'POST'] as const
}

export function getPostFileRequestsFileRequestIdCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['copy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.file_requests)[':file_request_id']['copy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFileRequestsFileRequestIdCopyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.file_requests)[':file_request_id']['copy']['$post']>,
    ) {
      return parseResponse(client.file_requests[':file_request_id'].copy.$post(args, options))
    },
  })
}

export function usePostFileRequestsFileRequestIdCopy<
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
                ReturnType<(typeof client.file_requests)[':file_request_id']['copy']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.file_requests)[':file_request_id']['copy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFileRequestsFileRequestIdCopyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFoldersFolderIdQueryKey(
  args: InferRequestType<(typeof client.folders)[':folder_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['folders', '/folders/:folder_id', keyArgs] as const
}

export function getFoldersFolderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdQueryKey>
  >({
    queryKey: getFoldersFolderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders[':folder_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFoldersFolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoldersFolderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoldersFolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoldersFolderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutFoldersFolderIdMutationKey() {
  return ['folders', '/folders/:folder_id', 'PUT'] as const
}

export function getPutFoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.folders)[':folder_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFoldersFolderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.folders)[':folder_id']['$put']>) {
      return parseResponse(client.folders[':folder_id'].$put(args, options))
    },
  })
}

export function usePutFoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.folders)[':folder_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFoldersFolderIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostFoldersFolderIdMutationKey() {
  return ['folders', '/folders/:folder_id', 'POST'] as const
}

export function getPostFoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.folders)[':folder_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFoldersFolderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.folders)[':folder_id']['$post']>) {
      return parseResponse(client.folders[':folder_id'].$post(args, options))
    },
  })
}

export function usePostFoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.folders)[':folder_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFoldersFolderIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteFoldersFolderIdMutationKey() {
  return ['folders', '/folders/:folder_id', 'DELETE'] as const
}

export function getDeleteFoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.folders)[':folder_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFoldersFolderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.folders)[':folder_id']['$delete']>) {
      return parseResponse(client.folders[':folder_id'].$delete(args, options))
    },
  })
}

export function useDeleteFoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.folders)[':folder_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFoldersFolderIdMutationOptions<TError, TOnMutateResult>(
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

export function getFoldersFolderIdAppItemAssociationsQueryKey(
  args: InferRequestType<(typeof client.folders)[':folder_id']['app_item_associations']['$get']>,
) {
  return ['folders', '/folders/:folder_id/app_item_associations', args] as const
}

export function getFoldersFolderIdAppItemAssociationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id']['app_item_associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['app_item_associations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.folders)[':folder_id']['app_item_associations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdAppItemAssociationsQueryKey>
  >({
    queryKey: getFoldersFolderIdAppItemAssociationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders[':folder_id'].app_item_associations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoldersFolderIdAppItemAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id']['app_item_associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['app_item_associations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.folders)[':folder_id']['app_item_associations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdAppItemAssociationsQueryKey>
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
      ...getFoldersFolderIdAppItemAssociationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoldersFolderIdAppItemAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id']['app_item_associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['app_item_associations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.folders)[':folder_id']['app_item_associations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdAppItemAssociationsQueryKey>
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
      ...getFoldersFolderIdAppItemAssociationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoldersFolderIdItemsQueryKey(
  args: InferRequestType<(typeof client.folders)[':folder_id']['items']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['folders', '/folders/:folder_id/items', keyArgs] as const
}

export function getFoldersFolderIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdItemsQueryKey>
  >({
    queryKey: getFoldersFolderIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders[':folder_id'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoldersFolderIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['items']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_id']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoldersFolderIdItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoldersFolderIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['items']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_id']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoldersFolderIdItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFoldersMutationKey() {
  return ['folders', '/folders', 'POST'] as const
}

export function getPostFoldersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$post>>>>>,
    TError,
    InferRequestType<typeof client.folders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFoldersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.folders.$post>) {
      return parseResponse(client.folders.$post(args, options))
    },
  })
}

export function usePostFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$post>>>>>,
        TError,
        InferRequestType<typeof client.folders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFoldersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFoldersFolderIdCopyMutationKey() {
  return ['folders', '/folders/:folder_id/copy', 'POST'] as const
}

export function getPostFoldersFolderIdCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id']['copy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.folders)[':folder_id']['copy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFoldersFolderIdCopyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.folders)[':folder_id']['copy']['$post']>,
    ) {
      return parseResponse(client.folders[':folder_id'].copy.$post(args, options))
    },
  })
}

export function usePostFoldersFolderIdCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_id']['copy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.folders)[':folder_id']['copy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFoldersFolderIdCopyMutationOptions<TError, TOnMutateResult>(
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

export function getFoldersFolderIdCollaborationsQueryKey(
  args: InferRequestType<(typeof client.folders)[':folder_id']['collaborations']['$get']>,
) {
  return ['folders', '/folders/:folder_id/collaborations', args] as const
}

export function getFoldersFolderIdCollaborationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id']['collaborations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['collaborations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id']['collaborations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdCollaborationsQueryKey>
  >({
    queryKey: getFoldersFolderIdCollaborationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders[':folder_id'].collaborations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoldersFolderIdCollaborations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id']['collaborations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['collaborations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_id']['collaborations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdCollaborationsQueryKey>
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
      ...getFoldersFolderIdCollaborationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoldersFolderIdCollaborations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id']['collaborations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['collaborations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_id']['collaborations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdCollaborationsQueryKey>
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
      ...getFoldersFolderIdCollaborationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoldersFolderIdTrashQueryKey(
  args: InferRequestType<(typeof client.folders)[':folder_id']['trash']['$get']>,
) {
  return ['folders', '/folders/:folder_id/trash', args] as const
}

export function getFoldersFolderIdTrashQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id']['trash']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['trash']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id']['trash']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdTrashQueryKey>
  >({
    queryKey: getFoldersFolderIdTrashQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders[':folder_id'].trash.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoldersFolderIdTrash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id']['trash']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['trash']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_id']['trash']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdTrashQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoldersFolderIdTrashQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoldersFolderIdTrash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id']['trash']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['trash']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_id']['trash']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdTrashQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoldersFolderIdTrashQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteFoldersFolderIdTrashMutationKey() {
  return ['folders', '/folders/:folder_id/trash', 'DELETE'] as const
}

export function getDeleteFoldersFolderIdTrashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['trash']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.folders)[':folder_id']['trash']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFoldersFolderIdTrashMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.folders)[':folder_id']['trash']['$delete']>,
    ) {
      return parseResponse(client.folders[':folder_id'].trash.$delete(args, options))
    },
  })
}

export function useDeleteFoldersFolderIdTrash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_id']['trash']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.folders)[':folder_id']['trash']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFoldersFolderIdTrashMutationOptions<TError, TOnMutateResult>(
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

export function getFoldersFolderIdMetadataQueryKey(
  args: InferRequestType<(typeof client.folders)[':folder_id']['metadata']['$get']>,
) {
  return ['folders', '/folders/:folder_id/metadata', args] as const
}

export function getFoldersFolderIdMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdMetadataQueryKey>
  >({
    queryKey: getFoldersFolderIdMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders[':folder_id'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoldersFolderIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['metadata']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_id']['metadata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdMetadataQueryKey>
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
      ...getFoldersFolderIdMetadataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoldersFolderIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['metadata']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_id']['metadata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdMetadataQueryKey>
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
      ...getFoldersFolderIdMetadataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey(
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

export function getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey>
  >({
    queryKey: getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders[':folder_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey
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
      ...getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey
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
      ...getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationKey() {
  return [
    'folders',
    '/folders/:folder_id/metadata/enterprise/securityClassification-6VMVochwUWo',
    'PUT',
  ] as const
}

export function getPutFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$put']
      >,
    ) {
      return parseResponse(
        client.folders[':folder_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
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
                  (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$put']
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
    getPutFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationKey() {
  return [
    'folders',
    '/folders/:folder_id/metadata/enterprise/securityClassification-6VMVochwUWo',
    'POST',
  ] as const
}

export function getPostFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$post']
      >,
    ) {
      return parseResponse(
        client.folders[':folder_id'].metadata.enterprise[
          'securityClassification-6VMVochwUWo'
        ].$post(args, options),
      )
    },
  })
}

export function usePostFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
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
                  (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$post']
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
    getPostFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationKey() {
  return [
    'folders',
    '/folders/:folder_id/metadata/enterprise/securityClassification-6VMVochwUWo',
    'DELETE',
  ] as const
}

export function getDeleteFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$delete']
      >,
    ) {
      return parseResponse(
        client.folders[':folder_id'].metadata.enterprise[
          'securityClassification-6VMVochwUWo'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
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
                    (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$delete']
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
    getDeleteFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFoldersFolderIdMetadataScopeTemplateKeyQueryKey(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$get']
  >,
) {
  return ['folders', '/folders/:folder_id/metadata/:scope/:template_key', args] as const
}

export function getFoldersFolderIdMetadataScopeTemplateKeyQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdMetadataScopeTemplateKeyQueryKey>
  >({
    queryKey: getFoldersFolderIdMetadataScopeTemplateKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders[':folder_id'].metadata[':scope'][':template_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoldersFolderIdMetadataScopeTemplateKey<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdMetadataScopeTemplateKeyQueryKey>
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
      ...getFoldersFolderIdMetadataScopeTemplateKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoldersFolderIdMetadataScopeTemplateKey<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdMetadataScopeTemplateKeyQueryKey>
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
      ...getFoldersFolderIdMetadataScopeTemplateKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutFoldersFolderIdMetadataScopeTemplateKeyMutationKey() {
  return ['folders', '/folders/:folder_id/metadata/:scope/:template_key', 'PUT'] as const
}

export function getPutFoldersFolderIdMetadataScopeTemplateKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutFoldersFolderIdMetadataScopeTemplateKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$put']
      >,
    ) {
      return parseResponse(
        client.folders[':folder_id'].metadata[':scope'][':template_key'].$put(args, options),
      )
    },
  })
}

export function usePutFoldersFolderIdMetadataScopeTemplateKey<
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
                  (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$put']
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
  const mutationDefaults = getPutFoldersFolderIdMetadataScopeTemplateKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFoldersFolderIdMetadataScopeTemplateKeyMutationKey() {
  return ['folders', '/folders/:folder_id/metadata/:scope/:template_key', 'POST'] as const
}

export function getPostFoldersFolderIdMetadataScopeTemplateKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostFoldersFolderIdMetadataScopeTemplateKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$post']
      >,
    ) {
      return parseResponse(
        client.folders[':folder_id'].metadata[':scope'][':template_key'].$post(args, options),
      )
    },
  })
}

export function usePostFoldersFolderIdMetadataScopeTemplateKey<
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
                  (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$post']
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
  const mutationDefaults = getPostFoldersFolderIdMetadataScopeTemplateKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFoldersFolderIdMetadataScopeTemplateKeyMutationKey() {
  return ['folders', '/folders/:folder_id/metadata/:scope/:template_key', 'DELETE'] as const
}

export function getDeleteFoldersFolderIdMetadataScopeTemplateKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteFoldersFolderIdMetadataScopeTemplateKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$delete']
      >,
    ) {
      return parseResponse(
        client.folders[':folder_id'].metadata[':scope'][':template_key'].$delete(args, options),
      )
    },
  })
}

export function useDeleteFoldersFolderIdMetadataScopeTemplateKey<
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
                    (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$delete']
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
  const mutationDefaults = getDeleteFoldersFolderIdMetadataScopeTemplateKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFoldersTrashItemsQueryKey(
  args: InferRequestType<typeof client.folders.trash.items.$get>,
) {
  return ['folders', '/folders/trash/items', args] as const
}

export function getFoldersTrashItemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.trash.items.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.folders.trash.items.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.trash.items.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersTrashItemsQueryKey>
  >({
    queryKey: getFoldersTrashItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders.trash.items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFoldersTrashItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.trash.items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.folders.trash.items.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.folders.trash.items.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersTrashItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoldersTrashItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoldersTrashItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.trash.items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.folders.trash.items.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.folders.trash.items.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersTrashItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoldersTrashItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoldersFolderIdWatermarkQueryKey(
  args: InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$get']>,
) {
  return ['folders', '/folders/:folder_id/watermark', args] as const
}

export function getFoldersFolderIdWatermarkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id']['watermark']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id']['watermark']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdWatermarkQueryKey>
  >({
    queryKey: getFoldersFolderIdWatermarkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders[':folder_id'].watermark.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoldersFolderIdWatermark<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id']['watermark']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_id']['watermark']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdWatermarkQueryKey>
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
      ...getFoldersFolderIdWatermarkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoldersFolderIdWatermark<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id']['watermark']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_id']['watermark']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdWatermarkQueryKey>
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
      ...getFoldersFolderIdWatermarkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutFoldersFolderIdWatermarkMutationKey() {
  return ['folders', '/folders/:folder_id/watermark', 'PUT'] as const
}

export function getPutFoldersFolderIdWatermarkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id']['watermark']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFoldersFolderIdWatermarkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$put']>,
    ) {
      return parseResponse(client.folders[':folder_id'].watermark.$put(args, options))
    },
  })
}

export function usePutFoldersFolderIdWatermark<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_id']['watermark']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFoldersFolderIdWatermarkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteFoldersFolderIdWatermarkMutationKey() {
  return ['folders', '/folders/:folder_id/watermark', 'DELETE'] as const
}

export function getDeleteFoldersFolderIdWatermarkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['watermark']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFoldersFolderIdWatermarkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$delete']>,
    ) {
      return parseResponse(client.folders[':folder_id'].watermark.$delete(args, options))
    },
  })
}

export function useDeleteFoldersFolderIdWatermark<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_id']['watermark']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFoldersFolderIdWatermarkMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFolderLocksQueryKey(args: InferRequestType<typeof client.folder_locks.$get>) {
  return ['folder_locks', '/folder_locks', args] as const
}

export function getFolderLocksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder_locks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.folder_locks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder_locks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFolderLocksQueryKey>
  >({
    queryKey: getFolderLocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folder_locks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFolderLocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder_locks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.folder_locks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder_locks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFolderLocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFolderLocksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFolderLocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder_locks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.folder_locks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder_locks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFolderLocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFolderLocksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFolderLocksMutationKey() {
  return ['folder_locks', '/folder_locks', 'POST'] as const
}

export function getPostFolderLocksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder_locks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.folder_locks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFolderLocksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.folder_locks.$post>) {
      return parseResponse(client.folder_locks.$post(args, options))
    },
  })
}

export function usePostFolderLocks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder_locks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.folder_locks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFolderLocksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFolderLocksFolderLockIdMutationKey() {
  return ['folder_locks', '/folder_locks/:folder_lock_id', 'DELETE'] as const
}

export function getDeleteFolderLocksFolderLockIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folder_locks)[':folder_lock_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.folder_locks)[':folder_lock_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFolderLocksFolderLockIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.folder_locks)[':folder_lock_id']['$delete']>,
    ) {
      return parseResponse(client.folder_locks[':folder_lock_id'].$delete(args, options))
    },
  })
}

export function useDeleteFolderLocksFolderLockId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folder_locks)[':folder_lock_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.folder_locks)[':folder_lock_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFolderLocksFolderLockIdMutationOptions<TError, TOnMutateResult>(
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

export function getMetadataTemplatesQueryKey(
  args: InferRequestType<typeof client.metadata_templates.$get>,
) {
  return ['metadata_templates', '/metadata_templates', args] as const
}

export function getMetadataTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metadata_templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataTemplatesQueryKey>
  >({
    queryKey: getMetadataTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata_templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMetadataTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metadata_templates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetadataTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetadataTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metadata_templates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetadataTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaQueryKey() {
  return [
    'metadata_templates',
    '/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema',
  ] as const
}

export function getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaQueryKey>
  >({
    queryKey: getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata_templates.enterprise['securityClassification-6VMVochwUWo'].schema.$get(
          undefined,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchema<
  TData = Awaited<
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
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaQueryKey
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
      ...getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaQueryOptions<
        TData,
        TError
      >(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchema<
  TData = Awaited<
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
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaQueryKey
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
      ...getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaQueryOptions<
        TData,
        TError
      >(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddMutationKey() {
  return [
    'metadata_templates',
    '/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#add',
    'PUT',
  ] as const
}

export function getPutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#add']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#add']['$put']
      >,
    ) {
      return parseResponse(
        client.metadata_templates.enterprise['securityClassification-6VMVochwUWo'][
          'schema#add'
        ].$put(args, options),
      )
    },
  })
}

export function usePutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAdd<
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
                  (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#add']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#add']['$put']
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
    getPutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdateMutationKey() {
  return [
    'metadata_templates',
    '/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#update',
    'PUT',
  ] as const
}

export function getPutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#update']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#update']['$put']
      >,
    ) {
      return parseResponse(
        client.metadata_templates.enterprise['securityClassification-6VMVochwUWo'][
          'schema#update'
        ].$put(args, options),
      )
    },
  })
}

export function usePutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdate<
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
                  (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#update']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#update']['$put']
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
    getPutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMetadataTemplatesScopeTemplateKeySchemaQueryKey(
  args: InferRequestType<
    (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$get']
  >,
) {
  return ['metadata_templates', '/metadata_templates/:scope/:template_key/schema', args] as const
}

export function getMetadataTemplatesScopeTemplateKeySchemaQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMetadataTemplatesScopeTemplateKeySchemaQueryKey>
  >({
    queryKey: getMetadataTemplatesScopeTemplateKeySchemaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata_templates[':scope'][':template_key'].schema.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMetadataTemplatesScopeTemplateKeySchema<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMetadataTemplatesScopeTemplateKeySchemaQueryKey>
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
      ...getMetadataTemplatesScopeTemplateKeySchemaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMetadataTemplatesScopeTemplateKeySchema<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMetadataTemplatesScopeTemplateKeySchemaQueryKey>
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
      ...getMetadataTemplatesScopeTemplateKeySchemaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMetadataTemplatesScopeTemplateKeySchemaMutationKey() {
  return ['metadata_templates', '/metadata_templates/:scope/:template_key/schema', 'PUT'] as const
}

export function getPutMetadataTemplatesScopeTemplateKeySchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMetadataTemplatesScopeTemplateKeySchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$put']
      >,
    ) {
      return parseResponse(
        client.metadata_templates[':scope'][':template_key'].schema.$put(args, options),
      )
    },
  })
}

export function usePutMetadataTemplatesScopeTemplateKeySchema<
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
                  (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$put']
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
  const mutationDefaults = getPutMetadataTemplatesScopeTemplateKeySchemaMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteMetadataTemplatesScopeTemplateKeySchemaMutationKey() {
  return [
    'metadata_templates',
    '/metadata_templates/:scope/:template_key/schema',
    'DELETE',
  ] as const
}

export function getDeleteMetadataTemplatesScopeTemplateKeySchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMetadataTemplatesScopeTemplateKeySchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$delete']
      >,
    ) {
      return parseResponse(
        client.metadata_templates[':scope'][':template_key'].schema.$delete(args, options),
      )
    },
  })
}

export function useDeleteMetadataTemplatesScopeTemplateKeySchema<
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
                    (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$delete']
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
  const mutationDefaults = getDeleteMetadataTemplatesScopeTemplateKeySchemaMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMetadataTemplatesTemplateIdQueryKey(
  args: InferRequestType<(typeof client.metadata_templates)[':template_id']['$get']>,
) {
  return ['metadata_templates', '/metadata_templates/:template_id', args] as const
}

export function getMetadataTemplatesTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata_templates)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metadata_templates)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata_templates)[':template_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataTemplatesTemplateIdQueryKey>
  >({
    queryKey: getMetadataTemplatesTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata_templates[':template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMetadataTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata_templates)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metadata_templates)[':template_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metadata_templates)[':template_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataTemplatesTemplateIdQueryKey>
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
      ...getMetadataTemplatesTemplateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMetadataTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata_templates)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metadata_templates)[':template_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metadata_templates)[':template_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataTemplatesTemplateIdQueryKey>
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
      ...getMetadataTemplatesTemplateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMetadataTemplatesGlobalQueryKey(
  args: InferRequestType<typeof client.metadata_templates.global.$get>,
) {
  return ['metadata_templates', '/metadata_templates/global', args] as const
}

export function getMetadataTemplatesGlobalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.global.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metadata_templates.global.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.global.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataTemplatesGlobalQueryKey>
  >({
    queryKey: getMetadataTemplatesGlobalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata_templates.global.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMetadataTemplatesGlobal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.global.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metadata_templates.global.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.global.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataTemplatesGlobalQueryKey>
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
      ...getMetadataTemplatesGlobalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMetadataTemplatesGlobal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.global.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metadata_templates.global.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.global.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataTemplatesGlobalQueryKey>
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
      ...getMetadataTemplatesGlobalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMetadataTemplatesEnterpriseQueryKey(
  args: InferRequestType<typeof client.metadata_templates.enterprise.$get>,
) {
  return ['metadata_templates', '/metadata_templates/enterprise', args] as const
}

export function getMetadataTemplatesEnterpriseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.enterprise.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metadata_templates.enterprise.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.enterprise.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataTemplatesEnterpriseQueryKey>
  >({
    queryKey: getMetadataTemplatesEnterpriseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata_templates.enterprise.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMetadataTemplatesEnterprise<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.enterprise.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metadata_templates.enterprise.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.metadata_templates.enterprise.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataTemplatesEnterpriseQueryKey>
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
      ...getMetadataTemplatesEnterpriseQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMetadataTemplatesEnterprise<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.enterprise.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metadata_templates.enterprise.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.metadata_templates.enterprise.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataTemplatesEnterpriseQueryKey>
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
      ...getMetadataTemplatesEnterpriseQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMetadataTemplatesSchemaMutationKey() {
  return ['metadata_templates', '/metadata_templates/schema', 'POST'] as const
}

export function getPostMetadataTemplatesSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.schema.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.metadata_templates.schema.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataTemplatesSchemaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.metadata_templates.schema.$post>) {
      return parseResponse(client.metadata_templates.schema.$post(args, options))
    },
  })
}

export function usePostMetadataTemplatesSchema<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.schema.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.metadata_templates.schema.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetadataTemplatesSchemaMutationOptions<TError, TOnMutateResult>(
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

export function getPostMetadataTemplatesSchemaClassificationsMutationKey() {
  return ['metadata_templates', '/metadata_templates/schema#classifications', 'POST'] as const
}

export function getPostMetadataTemplatesSchemaClassificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata_templates)['schema#classifications']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.metadata_templates)['schema#classifications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataTemplatesSchemaClassificationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.metadata_templates)['schema#classifications']['$post']>,
    ) {
      return parseResponse(client.metadata_templates['schema#classifications'].$post(args, options))
    },
  })
}

export function usePostMetadataTemplatesSchemaClassifications<
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
                ReturnType<(typeof client.metadata_templates)['schema#classifications']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.metadata_templates)['schema#classifications']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetadataTemplatesSchemaClassificationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMetadataCascadePoliciesQueryKey(
  args: InferRequestType<typeof client.metadata_cascade_policies.$get>,
) {
  return ['metadata_cascade_policies', '/metadata_cascade_policies', args] as const
}

export function getMetadataCascadePoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metadata_cascade_policies.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metadata_cascade_policies.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata_cascade_policies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataCascadePoliciesQueryKey>
  >({
    queryKey: getMetadataCascadePoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata_cascade_policies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMetadataCascadePolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metadata_cascade_policies.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metadata_cascade_policies.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metadata_cascade_policies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataCascadePoliciesQueryKey>
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
      ...getMetadataCascadePoliciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMetadataCascadePolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metadata_cascade_policies.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metadata_cascade_policies.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metadata_cascade_policies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataCascadePoliciesQueryKey>
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
      ...getMetadataCascadePoliciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMetadataCascadePoliciesMutationKey() {
  return ['metadata_cascade_policies', '/metadata_cascade_policies', 'POST'] as const
}

export function getPostMetadataCascadePoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata_cascade_policies.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.metadata_cascade_policies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataCascadePoliciesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.metadata_cascade_policies.$post>) {
      return parseResponse(client.metadata_cascade_policies.$post(args, options))
    },
  })
}

export function usePostMetadataCascadePolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metadata_cascade_policies.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.metadata_cascade_policies.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetadataCascadePoliciesMutationOptions<TError, TOnMutateResult>(
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

export function getMetadataCascadePoliciesMetadataCascadePolicyIdQueryKey(
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

export function getMetadataCascadePoliciesMetadataCascadePolicyIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMetadataCascadePoliciesMetadataCascadePolicyIdQueryKey>
  >({
    queryKey: getMetadataCascadePoliciesMetadataCascadePolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata_cascade_policies[':metadata_cascade_policy_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMetadataCascadePoliciesMetadataCascadePolicyId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMetadataCascadePoliciesMetadataCascadePolicyIdQueryKey>
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
      ...getMetadataCascadePoliciesMetadataCascadePolicyIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMetadataCascadePoliciesMetadataCascadePolicyId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMetadataCascadePoliciesMetadataCascadePolicyIdQueryKey>
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
      ...getMetadataCascadePoliciesMetadataCascadePolicyIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMetadataCascadePoliciesMetadataCascadePolicyIdMutationKey() {
  return [
    'metadata_cascade_policies',
    '/metadata_cascade_policies/:metadata_cascade_policy_id',
    'DELETE',
  ] as const
}

export function getDeleteMetadataCascadePoliciesMetadataCascadePolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMetadataCascadePoliciesMetadataCascadePolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.metadata_cascade_policies[':metadata_cascade_policy_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMetadataCascadePoliciesMetadataCascadePolicyId<
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
                    (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$delete']
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
  const mutationDefaults = getDeleteMetadataCascadePoliciesMetadataCascadePolicyIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMetadataCascadePoliciesMetadataCascadePolicyIdApplyMutationKey() {
  return [
    'metadata_cascade_policies',
    '/metadata_cascade_policies/:metadata_cascade_policy_id/apply',
    'POST',
  ] as const
}

export function getPostMetadataCascadePoliciesMetadataCascadePolicyIdApplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['apply']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataCascadePoliciesMetadataCascadePolicyIdApplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['apply']['$post']
      >,
    ) {
      return parseResponse(
        client.metadata_cascade_policies[':metadata_cascade_policy_id'].apply.$post(args, options),
      )
    },
  })
}

export function usePostMetadataCascadePoliciesMetadataCascadePolicyIdApply<
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
                  (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['apply']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['apply']['$post']
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
    getPostMetadataCascadePoliciesMetadataCascadePolicyIdApplyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMetadataQueriesExecuteReadMutationKey() {
  return ['metadata_queries', '/metadata_queries/execute_read', 'POST'] as const
}

export function getPostMetadataQueriesExecuteReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata_queries.execute_read.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.metadata_queries.execute_read.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataQueriesExecuteReadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.metadata_queries.execute_read.$post>) {
      return parseResponse(client.metadata_queries.execute_read.$post(args, options))
    },
  })
}

export function usePostMetadataQueriesExecuteRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.metadata_queries.execute_read.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.metadata_queries.execute_read.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetadataQueriesExecuteReadMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCommentsCommentIdQueryKey(
  args: InferRequestType<(typeof client.comments)[':comment_id']['$get']>,
) {
  return ['comments', '/comments/:comment_id', args] as const
}

export function getCommentsCommentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':comment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':comment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':comment_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsCommentIdQueryKey>
  >({
    queryKey: getCommentsCommentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comments[':comment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCommentsCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':comment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':comment_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.comments)[':comment_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsCommentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCommentsCommentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCommentsCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':comment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':comment_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.comments)[':comment_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsCommentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCommentsCommentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutCommentsCommentIdMutationKey() {
  return ['comments', '/comments/:comment_id', 'PUT'] as const
}

export function getPutCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':comment_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.comments)[':comment_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCommentsCommentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.comments)[':comment_id']['$put']>) {
      return parseResponse(client.comments[':comment_id'].$put(args, options))
    },
  })
}

export function usePutCommentsCommentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.comments)[':comment_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.comments)[':comment_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCommentsCommentIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCommentsCommentIdMutationKey() {
  return ['comments', '/comments/:comment_id', 'DELETE'] as const
}

export function getDeleteCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':comment_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.comments)[':comment_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCommentsCommentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.comments)[':comment_id']['$delete']>) {
      return parseResponse(client.comments[':comment_id'].$delete(args, options))
    },
  })
}

export function useDeleteCommentsCommentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.comments)[':comment_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.comments)[':comment_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCommentsCommentIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostCommentsMutationKey() {
  return ['comments', '/comments', 'POST'] as const
}

export function getPostCommentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$post>>>>>,
    TError,
    InferRequestType<typeof client.comments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCommentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.comments.$post>) {
      return parseResponse(client.comments.$post(args, options))
    },
  })
}

export function usePostComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.comments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCommentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCollaborationsCollaborationIdQueryKey(
  args: InferRequestType<(typeof client.collaborations)[':collaboration_id']['$get']>,
) {
  return ['collaborations', '/collaborations/:collaboration_id', args] as const
}

export function getCollaborationsCollaborationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collaborations)[':collaboration_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collaborations)[':collaboration_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collaborations)[':collaboration_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollaborationsCollaborationIdQueryKey>
  >({
    queryKey: getCollaborationsCollaborationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collaborations[':collaboration_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCollaborationsCollaborationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collaborations)[':collaboration_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collaborations)[':collaboration_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collaborations)[':collaboration_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollaborationsCollaborationIdQueryKey>
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
      ...getCollaborationsCollaborationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollaborationsCollaborationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collaborations)[':collaboration_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collaborations)[':collaboration_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collaborations)[':collaboration_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollaborationsCollaborationIdQueryKey>
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
      ...getCollaborationsCollaborationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutCollaborationsCollaborationIdMutationKey() {
  return ['collaborations', '/collaborations/:collaboration_id', 'PUT'] as const
}

export function getPutCollaborationsCollaborationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collaborations)[':collaboration_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.collaborations)[':collaboration_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCollaborationsCollaborationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collaborations)[':collaboration_id']['$put']>,
    ) {
      return parseResponse(client.collaborations[':collaboration_id'].$put(args, options))
    },
  })
}

export function usePutCollaborationsCollaborationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collaborations)[':collaboration_id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.collaborations)[':collaboration_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCollaborationsCollaborationIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCollaborationsCollaborationIdMutationKey() {
  return ['collaborations', '/collaborations/:collaboration_id', 'DELETE'] as const
}

export function getDeleteCollaborationsCollaborationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collaborations)[':collaboration_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.collaborations)[':collaboration_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollaborationsCollaborationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collaborations)[':collaboration_id']['$delete']>,
    ) {
      return parseResponse(client.collaborations[':collaboration_id'].$delete(args, options))
    },
  })
}

export function useDeleteCollaborationsCollaborationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collaborations)[':collaboration_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.collaborations)[':collaboration_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCollaborationsCollaborationIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCollaborationsQueryKey(
  args: InferRequestType<typeof client.collaborations.$get>,
) {
  return ['collaborations', '/collaborations', args] as const
}

export function getCollaborationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.collaborations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCollaborationsQueryKey>
  >({
    queryKey: getCollaborationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collaborations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCollaborations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.collaborations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCollaborationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCollaborationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCollaborations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.collaborations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCollaborationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCollaborationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCollaborationsMutationKey() {
  return ['collaborations', '/collaborations', 'POST'] as const
}

export function getPostCollaborationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.collaborations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollaborationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.collaborations.$post>) {
      return parseResponse(client.collaborations.$post(args, options))
    },
  })
}

export function usePostCollaborations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.collaborations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCollaborationsMutationOptions<TError, TOnMutateResult>(
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

export function getSearchQueryKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function getSearchQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >({
    queryKey: getSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$post>>>>>,
        TError,
        InferRequestType<typeof client.tasks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTasksTaskIdQueryKey(
  args: InferRequestType<(typeof client.tasks)[':task_id']['$get']>,
) {
  return ['tasks', '/tasks/:task_id', args] as const
}

export function getTasksTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIdQueryKey>
  >({
    queryKey: getTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':task_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTasksTaskId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$get']>>>
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTasksTaskIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTasksTaskId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$get']>>>
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTasksTaskIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTasksTaskIdMutationKey() {
  return ['tasks', '/tasks/:task_id', 'PUT'] as const
}

export function getPutTasksTaskIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTasksTaskIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':task_id']['$put']>) {
      return parseResponse(client.tasks[':task_id'].$put(args, options))
    },
  })
}

export function usePutTasksTaskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTasksTaskIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTasksTaskIdMutationKey() {
  return ['tasks', '/tasks/:task_id', 'DELETE'] as const
}

export function getDeleteTasksTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tasks)[':task_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTasksTaskIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':task_id']['$delete']>) {
      return parseResponse(client.tasks[':task_id'].$delete(args, options))
    },
  })
}

export function useDeleteTasksTaskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':task_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tasks)[':task_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTasksTaskIdMutationOptions<TError, TOnMutateResult>(
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

export function getTasksTaskIdAssignmentsQueryKey(
  args: InferRequestType<(typeof client.tasks)[':task_id']['assignments']['$get']>,
) {
  return ['tasks', '/tasks/:task_id/assignments', args] as const
}

export function getTasksTaskIdAssignmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':task_id']['assignments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_id']['assignments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_id']['assignments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIdAssignmentsQueryKey>
  >({
    queryKey: getTasksTaskIdAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':task_id'].assignments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTasksTaskIdAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':task_id']['assignments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_id']['assignments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_id']['assignments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskIdAssignmentsQueryKey>
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
      ...getTasksTaskIdAssignmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTasksTaskIdAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':task_id']['assignments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_id']['assignments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_id']['assignments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskIdAssignmentsQueryKey>
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
      ...getTasksTaskIdAssignmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTaskAssignmentsMutationKey() {
  return ['task_assignments', '/task_assignments', 'POST'] as const
}

export function getPostTaskAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_assignments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.task_assignments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTaskAssignmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.task_assignments.$post>) {
      return parseResponse(client.task_assignments.$post(args, options))
    },
  })
}

export function usePostTaskAssignments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_assignments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.task_assignments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTaskAssignmentsMutationOptions<TError, TOnMutateResult>(
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

export function getTaskAssignmentsTaskAssignmentIdQueryKey(
  args: InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$get']>,
) {
  return ['task_assignments', '/task_assignments/:task_assignment_id', args] as const
}

export function getTaskAssignmentsTaskAssignmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_assignments)[':task_assignment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_assignments)[':task_assignment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskAssignmentsTaskAssignmentIdQueryKey>
  >({
    queryKey: getTaskAssignmentsTaskAssignmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_assignments[':task_assignment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTaskAssignmentsTaskAssignmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_assignments)[':task_assignment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_assignments)[':task_assignment_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskAssignmentsTaskAssignmentIdQueryKey>
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
      ...getTaskAssignmentsTaskAssignmentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTaskAssignmentsTaskAssignmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_assignments)[':task_assignment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_assignments)[':task_assignment_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskAssignmentsTaskAssignmentIdQueryKey>
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
      ...getTaskAssignmentsTaskAssignmentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTaskAssignmentsTaskAssignmentIdMutationKey() {
  return ['task_assignments', '/task_assignments/:task_assignment_id', 'PUT'] as const
}

export function getPutTaskAssignmentsTaskAssignmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_assignments)[':task_assignment_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTaskAssignmentsTaskAssignmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$put']>,
    ) {
      return parseResponse(client.task_assignments[':task_assignment_id'].$put(args, options))
    },
  })
}

export function usePutTaskAssignmentsTaskAssignmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_assignments)[':task_assignment_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTaskAssignmentsTaskAssignmentIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTaskAssignmentsTaskAssignmentIdMutationKey() {
  return ['task_assignments', '/task_assignments/:task_assignment_id', 'DELETE'] as const
}

export function getDeleteTaskAssignmentsTaskAssignmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_assignments)[':task_assignment_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTaskAssignmentsTaskAssignmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$delete']>,
    ) {
      return parseResponse(client.task_assignments[':task_assignment_id'].$delete(args, options))
    },
  })
}

export function useDeleteTaskAssignmentsTaskAssignmentId<
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
                  ReturnType<(typeof client.task_assignments)[':task_assignment_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTaskAssignmentsTaskAssignmentIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSharedItemsQueryKey(args: InferRequestType<typeof client.shared_items.$get>) {
  const { header: _, ...keyArgs } = args
  return ['shared_items', '/shared_items', keyArgs] as const
}

export function getSharedItemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_items.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.shared_items.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_items.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSharedItemsQueryKey>
  >({
    queryKey: getSharedItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shared_items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSharedItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shared_items.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_items.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSharedItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shared_items.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_items.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSharedItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFilesFileIdGetSharedLinkQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id#get_shared_link']['$get']>,
) {
  return ['files', '/files/:file_id#get_shared_link', args] as const
}

export function getFilesFileIdGetSharedLinkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id#get_shared_link']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id#get_shared_link']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id#get_shared_link']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdGetSharedLinkQueryKey>
  >({
    queryKey: getFilesFileIdGetSharedLinkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id#get_shared_link'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFilesFileIdGetSharedLink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id#get_shared_link']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id#get_shared_link']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id#get_shared_link']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdGetSharedLinkQueryKey>
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
      ...getFilesFileIdGetSharedLinkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFilesFileIdGetSharedLink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id#get_shared_link']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id#get_shared_link']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id#get_shared_link']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdGetSharedLinkQueryKey>
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
      ...getFilesFileIdGetSharedLinkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutFilesFileIdAddSharedLinkMutationKey() {
  return ['files', '/files/:file_id#add_shared_link', 'PUT'] as const
}

export function getPutFilesFileIdAddSharedLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id#add_shared_link']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':file_id#add_shared_link']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFilesFileIdAddSharedLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)[':file_id#add_shared_link']['$put']>,
    ) {
      return parseResponse(client.files[':file_id#add_shared_link'].$put(args, options))
    },
  })
}

export function usePutFilesFileIdAddSharedLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id#add_shared_link']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.files)[':file_id#add_shared_link']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFilesFileIdAddSharedLinkMutationOptions<TError, TOnMutateResult>(
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

export function getPutFilesFileIdUpdateSharedLinkMutationKey() {
  return ['files', '/files/:file_id#update_shared_link', 'PUT'] as const
}

export function getPutFilesFileIdUpdateSharedLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id#update_shared_link']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':file_id#update_shared_link']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFilesFileIdUpdateSharedLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)[':file_id#update_shared_link']['$put']>,
    ) {
      return parseResponse(client.files[':file_id#update_shared_link'].$put(args, options))
    },
  })
}

export function usePutFilesFileIdUpdateSharedLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id#update_shared_link']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.files)[':file_id#update_shared_link']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFilesFileIdUpdateSharedLinkMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutFilesFileIdRemoveSharedLinkMutationKey() {
  return ['files', '/files/:file_id#remove_shared_link', 'PUT'] as const
}

export function getPutFilesFileIdRemoveSharedLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id#remove_shared_link']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':file_id#remove_shared_link']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFilesFileIdRemoveSharedLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)[':file_id#remove_shared_link']['$put']>,
    ) {
      return parseResponse(client.files[':file_id#remove_shared_link'].$put(args, options))
    },
  })
}

export function usePutFilesFileIdRemoveSharedLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id#remove_shared_link']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.files)[':file_id#remove_shared_link']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFilesFileIdRemoveSharedLinkMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSharedItemsFoldersQueryKey(
  args: InferRequestType<(typeof client)['shared_items#folders']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shared_items#folders', '/shared_items#folders', keyArgs] as const
}

export function getSharedItemsFoldersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#folders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['shared_items#folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#folders']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedItemsFoldersQueryKey>
  >({
    queryKey: getSharedItemsFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['shared_items#folders'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedItemsFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#folders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['shared_items#folders']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['shared_items#folders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedItemsFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedItemsFoldersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedItemsFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#folders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['shared_items#folders']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['shared_items#folders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedItemsFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedItemsFoldersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoldersFolderIdGetSharedLinkQueryKey(
  args: InferRequestType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>,
) {
  return ['folders', '/folders/:folder_id#get_shared_link', args] as const
}

export function getFoldersFolderIdGetSharedLinkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdGetSharedLinkQueryKey>
  >({
    queryKey: getFoldersFolderIdGetSharedLinkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders[':folder_id#get_shared_link'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoldersFolderIdGetSharedLink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdGetSharedLinkQueryKey>
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
      ...getFoldersFolderIdGetSharedLinkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoldersFolderIdGetSharedLink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdGetSharedLinkQueryKey>
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
      ...getFoldersFolderIdGetSharedLinkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutFoldersFolderIdAddSharedLinkMutationKey() {
  return ['folders', '/folders/:folder_id#add_shared_link', 'PUT'] as const
}

export function getPutFoldersFolderIdAddSharedLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id#add_shared_link']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.folders)[':folder_id#add_shared_link']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFoldersFolderIdAddSharedLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.folders)[':folder_id#add_shared_link']['$put']>,
    ) {
      return parseResponse(client.folders[':folder_id#add_shared_link'].$put(args, options))
    },
  })
}

export function usePutFoldersFolderIdAddSharedLink<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_id#add_shared_link']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.folders)[':folder_id#add_shared_link']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFoldersFolderIdAddSharedLinkMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutFoldersFolderIdUpdateSharedLinkMutationKey() {
  return ['folders', '/folders/:folder_id#update_shared_link', 'PUT'] as const
}

export function getPutFoldersFolderIdUpdateSharedLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id#update_shared_link']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.folders)[':folder_id#update_shared_link']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFoldersFolderIdUpdateSharedLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.folders)[':folder_id#update_shared_link']['$put']>,
    ) {
      return parseResponse(client.folders[':folder_id#update_shared_link'].$put(args, options))
    },
  })
}

export function usePutFoldersFolderIdUpdateSharedLink<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_id#update_shared_link']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.folders)[':folder_id#update_shared_link']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFoldersFolderIdUpdateSharedLinkMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutFoldersFolderIdRemoveSharedLinkMutationKey() {
  return ['folders', '/folders/:folder_id#remove_shared_link', 'PUT'] as const
}

export function getPutFoldersFolderIdRemoveSharedLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id#remove_shared_link']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.folders)[':folder_id#remove_shared_link']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFoldersFolderIdRemoveSharedLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.folders)[':folder_id#remove_shared_link']['$put']>,
    ) {
      return parseResponse(client.folders[':folder_id#remove_shared_link'].$put(args, options))
    },
  })
}

export function usePutFoldersFolderIdRemoveSharedLink<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_id#remove_shared_link']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.folders)[':folder_id#remove_shared_link']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFoldersFolderIdRemoveSharedLinkMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWebLinksMutationKey() {
  return ['web_links', '/web_links', 'POST'] as const
}

export function getPostWebLinksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.web_links.$post>>>>>,
    TError,
    InferRequestType<typeof client.web_links.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebLinksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.web_links.$post>) {
      return parseResponse(client.web_links.$post(args, options))
    },
  })
}

export function usePostWebLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.web_links.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.web_links.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebLinksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebLinksWebLinkIdQueryKey(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['web_links', '/web_links/:web_link_id', keyArgs] as const
}

export function getWebLinksWebLinkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebLinksWebLinkIdQueryKey>
  >({
    queryKey: getWebLinksWebLinkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.web_links[':web_link_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWebLinksWebLinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebLinksWebLinkIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebLinksWebLinkIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebLinksWebLinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebLinksWebLinkIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebLinksWebLinkIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutWebLinksWebLinkIdMutationKey() {
  return ['web_links', '/web_links/:web_link_id', 'PUT'] as const
}

export function getPutWebLinksWebLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.web_links)[':web_link_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebLinksWebLinkIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.web_links)[':web_link_id']['$put']>) {
      return parseResponse(client.web_links[':web_link_id'].$put(args, options))
    },
  })
}

export function usePutWebLinksWebLinkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.web_links)[':web_link_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWebLinksWebLinkIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostWebLinksWebLinkIdMutationKey() {
  return ['web_links', '/web_links/:web_link_id', 'POST'] as const
}

export function getPostWebLinksWebLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.web_links)[':web_link_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebLinksWebLinkIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.web_links)[':web_link_id']['$post']>) {
      return parseResponse(client.web_links[':web_link_id'].$post(args, options))
    },
  })
}

export function usePostWebLinksWebLinkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.web_links)[':web_link_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebLinksWebLinkIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWebLinksWebLinkIdMutationKey() {
  return ['web_links', '/web_links/:web_link_id', 'DELETE'] as const
}

export function getDeleteWebLinksWebLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.web_links)[':web_link_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebLinksWebLinkIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.web_links)[':web_link_id']['$delete']>) {
      return parseResponse(client.web_links[':web_link_id'].$delete(args, options))
    },
  })
}

export function useDeleteWebLinksWebLinkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.web_links)[':web_link_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebLinksWebLinkIdMutationOptions<TError, TOnMutateResult>(
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

export function getWebLinksWebLinkIdTrashQueryKey(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['trash']['$get']>,
) {
  return ['web_links', '/web_links/:web_link_id/trash', args] as const
}

export function getWebLinksWebLinkIdTrashQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['trash']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['trash']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['trash']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebLinksWebLinkIdTrashQueryKey>
  >({
    queryKey: getWebLinksWebLinkIdTrashQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.web_links[':web_link_id'].trash.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWebLinksWebLinkIdTrash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['trash']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['trash']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['trash']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebLinksWebLinkIdTrashQueryKey>
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
      ...getWebLinksWebLinkIdTrashQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWebLinksWebLinkIdTrash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['trash']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['trash']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['trash']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebLinksWebLinkIdTrashQueryKey>
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
      ...getWebLinksWebLinkIdTrashQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteWebLinksWebLinkIdTrashMutationKey() {
  return ['web_links', '/web_links/:web_link_id/trash', 'DELETE'] as const
}

export function getDeleteWebLinksWebLinkIdTrashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['trash']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.web_links)[':web_link_id']['trash']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebLinksWebLinkIdTrashMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.web_links)[':web_link_id']['trash']['$delete']>,
    ) {
      return parseResponse(client.web_links[':web_link_id'].trash.$delete(args, options))
    },
  })
}

export function useDeleteWebLinksWebLinkIdTrash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['trash']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.web_links)[':web_link_id']['trash']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebLinksWebLinkIdTrashMutationOptions<TError, TOnMutateResult>(
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

export function getSharedItemsWebLinksQueryKey(
  args: InferRequestType<(typeof client)['shared_items#web_links']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shared_items#web_links', '/shared_items#web_links', keyArgs] as const
}

export function getSharedItemsWebLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#web_links']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['shared_items#web_links']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#web_links']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedItemsWebLinksQueryKey>
  >({
    queryKey: getSharedItemsWebLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['shared_items#web_links'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedItemsWebLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#web_links']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['shared_items#web_links']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['shared_items#web_links']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedItemsWebLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedItemsWebLinksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedItemsWebLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#web_links']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['shared_items#web_links']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['shared_items#web_links']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedItemsWebLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedItemsWebLinksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWebLinksWebLinkIdGetSharedLinkQueryKey(
  args: InferRequestType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>,
) {
  return ['web_links', '/web_links/:web_link_id#get_shared_link', args] as const
}

export function getWebLinksWebLinkIdGetSharedLinkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebLinksWebLinkIdGetSharedLinkQueryKey>
  >({
    queryKey: getWebLinksWebLinkIdGetSharedLinkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.web_links[':web_link_id#get_shared_link'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWebLinksWebLinkIdGetSharedLink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebLinksWebLinkIdGetSharedLinkQueryKey>
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
      ...getWebLinksWebLinkIdGetSharedLinkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWebLinksWebLinkIdGetSharedLink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebLinksWebLinkIdGetSharedLinkQueryKey>
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
      ...getWebLinksWebLinkIdGetSharedLinkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWebLinksWebLinkIdAddSharedLinkMutationKey() {
  return ['web_links', '/web_links/:web_link_id#add_shared_link', 'PUT'] as const
}

export function getPutWebLinksWebLinkIdAddSharedLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.web_links)[':web_link_id#add_shared_link']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.web_links)[':web_link_id#add_shared_link']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebLinksWebLinkIdAddSharedLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.web_links)[':web_link_id#add_shared_link']['$put']>,
    ) {
      return parseResponse(client.web_links[':web_link_id#add_shared_link'].$put(args, options))
    },
  })
}

export function usePutWebLinksWebLinkIdAddSharedLink<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.web_links)[':web_link_id#add_shared_link']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.web_links)[':web_link_id#add_shared_link']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWebLinksWebLinkIdAddSharedLinkMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutWebLinksWebLinkIdUpdateSharedLinkMutationKey() {
  return ['web_links', '/web_links/:web_link_id#update_shared_link', 'PUT'] as const
}

export function getPutWebLinksWebLinkIdUpdateSharedLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.web_links)[':web_link_id#update_shared_link']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.web_links)[':web_link_id#update_shared_link']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebLinksWebLinkIdUpdateSharedLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.web_links)[':web_link_id#update_shared_link']['$put']>,
    ) {
      return parseResponse(client.web_links[':web_link_id#update_shared_link'].$put(args, options))
    },
  })
}

export function usePutWebLinksWebLinkIdUpdateSharedLink<
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
                ReturnType<(typeof client.web_links)[':web_link_id#update_shared_link']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.web_links)[':web_link_id#update_shared_link']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWebLinksWebLinkIdUpdateSharedLinkMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutWebLinksWebLinkIdRemoveSharedLinkMutationKey() {
  return ['web_links', '/web_links/:web_link_id#remove_shared_link', 'PUT'] as const
}

export function getPutWebLinksWebLinkIdRemoveSharedLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.web_links)[':web_link_id#remove_shared_link']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.web_links)[':web_link_id#remove_shared_link']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebLinksWebLinkIdRemoveSharedLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.web_links)[':web_link_id#remove_shared_link']['$put']>,
    ) {
      return parseResponse(client.web_links[':web_link_id#remove_shared_link'].$put(args, options))
    },
  })
}

export function usePutWebLinksWebLinkIdRemoveSharedLink<
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
                ReturnType<(typeof client.web_links)[':web_link_id#remove_shared_link']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.web_links)[':web_link_id#remove_shared_link']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWebLinksWebLinkIdRemoveSharedLinkMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSharedItemsAppItemsQueryKey(
  args: InferRequestType<(typeof client)['shared_items#app_items']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shared_items#app_items', '/shared_items#app_items', keyArgs] as const
}

export function getSharedItemsAppItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#app_items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['shared_items#app_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#app_items']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedItemsAppItemsQueryKey>
  >({
    queryKey: getSharedItemsAppItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['shared_items#app_items'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedItemsAppItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#app_items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['shared_items#app_items']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['shared_items#app_items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedItemsAppItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedItemsAppItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedItemsAppItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#app_items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['shared_items#app_items']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['shared_items#app_items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedItemsAppItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedItemsAppItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
        TError,
        InferRequestType<typeof client.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersMeQueryKey(args: InferRequestType<typeof client.users.me.$get>) {
  return ['users', '/users/me', args] as const
}

export function getUsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.me.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >({
    queryKey: getUsersMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.me.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.me.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsersTerminateSessionsMutationKey() {
  return ['users', '/users/terminate_sessions', 'POST'] as const
}

export function getPostUsersTerminateSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.terminate_sessions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users.terminate_sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersTerminateSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.terminate_sessions.$post>) {
      return parseResponse(client.users.terminate_sessions.$post(args, options))
    },
  })
}

export function usePostUsersTerminateSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users.terminate_sessions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.users.terminate_sessions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersTerminateSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
) {
  return ['users', '/users/:user_id', args] as const
}

export function getUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >({
    queryKey: getUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutUsersUserIdMutationKey() {
  return ['users', '/users/:user_id', 'PUT'] as const
}

export function getPutUsersUserIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['$put']>) {
      return parseResponse(client.users[':user_id'].$put(args, options))
    },
  })
}

export function usePutUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUsersUserIdMutationKey() {
  return ['users', '/users/:user_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['$delete']>) {
      return parseResponse(client.users[':user_id'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdAvatarQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['avatar']['$get']>,
) {
  return ['users', '/users/:user_id/avatar', args] as const
}

export function getUsersUserIdAvatarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['avatar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAvatarQueryKey>
  >({
    queryKey: getUsersUserIdAvatarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].avatar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdAvatar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['avatar']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAvatarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdAvatarQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserIdAvatar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['avatar']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAvatarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdAvatarQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsersUserIdAvatarMutationKey() {
  return ['users', '/users/:user_id/avatar', 'POST'] as const
}

export function getPostUsersUserIdAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['avatar']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdAvatarMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['avatar']['$post']>) {
      return parseResponse(client.users[':user_id'].avatar.$post(args, options))
    },
  })
}

export function usePostUsersUserIdAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['avatar']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdAvatarMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersUserIdAvatarMutationKey() {
  return ['users', '/users/:user_id/avatar', 'DELETE'] as const
}

export function getDeleteUsersUserIdAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['avatar']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdAvatarMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['avatar']['$delete']>,
    ) {
      return parseResponse(client.users[':user_id'].avatar.$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['avatar']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdAvatarMutationOptions<TError, TOnMutateResult>(
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

export function getPutUsersUserIdFolders0MutationKey() {
  return ['users', '/users/:user_id/folders/0', 'PUT'] as const
}

export function getPutUsersUserIdFolders0MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['folders']['0']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['folders']['0']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdFolders0MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['folders']['0']['$put']>,
    ) {
      return parseResponse(client.users[':user_id'].folders['0'].$put(args, options))
    },
  })
}

export function usePutUsersUserIdFolders0<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['folders']['0']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['folders']['0']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserIdFolders0MutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdEmailAliasesQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['email_aliases']['$get']>,
) {
  return ['users', '/users/:user_id/email_aliases', args] as const
}

export function getUsersUserIdEmailAliasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['email_aliases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['email_aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['email_aliases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdEmailAliasesQueryKey>
  >({
    queryKey: getUsersUserIdEmailAliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].email_aliases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdEmailAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['email_aliases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['email_aliases']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['email_aliases']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdEmailAliasesQueryKey>
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
      ...getUsersUserIdEmailAliasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdEmailAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['email_aliases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['email_aliases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['email_aliases']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdEmailAliasesQueryKey>
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
      ...getUsersUserIdEmailAliasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUsersUserIdEmailAliasesMutationKey() {
  return ['users', '/users/:user_id/email_aliases', 'POST'] as const
}

export function getPostUsersUserIdEmailAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['email_aliases']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['email_aliases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdEmailAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['email_aliases']['$post']>,
    ) {
      return parseResponse(client.users[':user_id'].email_aliases.$post(args, options))
    },
  })
}

export function usePostUsersUserIdEmailAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['email_aliases']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['email_aliases']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdEmailAliasesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersUserIdEmailAliasesEmailAliasIdMutationKey() {
  return ['users', '/users/:user_id/email_aliases/:email_alias_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdEmailAliasesEmailAliasIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.users)[':user_id']['email_aliases'][':email_alias_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdEmailAliasesEmailAliasIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['email_aliases'][':email_alias_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].email_aliases[':email_alias_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersUserIdEmailAliasesEmailAliasId<
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
                    (typeof client.users)[':user_id']['email_aliases'][':email_alias_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['email_aliases'][':email_alias_id']['$delete']
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
  const mutationDefaults = getDeleteUsersUserIdEmailAliasesEmailAliasIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIdMembershipsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['memberships']['$get']>,
) {
  return ['users', '/users/:user_id/memberships', args] as const
}

export function getUsersUserIdMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdMembershipsQueryKey>
  >({
    queryKey: getUsersUserIdMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['memberships']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['memberships']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdMembershipsQueryKey>
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
      ...getUsersUserIdMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['memberships']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['memberships']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdMembershipsQueryKey>
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
      ...getUsersUserIdMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostInvitesMutationKey() {
  return ['invites', '/invites', 'POST'] as const
}

export function getPostInvitesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invites.$post>>>>>,
    TError,
    InferRequestType<typeof client.invites.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invites.$post>) {
      return parseResponse(client.invites.$post(args, options))
    },
  })
}

export function usePostInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invites.$post>>>>>,
        TError,
        InferRequestType<typeof client.invites.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInvitesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInvitesInviteIdQueryKey(
  args: InferRequestType<(typeof client.invites)[':invite_id']['$get']>,
) {
  return ['invites', '/invites/:invite_id', args] as const
}

export function getInvitesInviteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':invite_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.invites)[':invite_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':invite_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvitesInviteIdQueryKey>
  >({
    queryKey: getInvitesInviteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invites[':invite_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInvitesInviteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':invite_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.invites)[':invite_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':invite_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvitesInviteIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInvitesInviteIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInvitesInviteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':invite_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.invites)[':invite_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':invite_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvitesInviteIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInvitesInviteIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsQueryKey(args: InferRequestType<typeof client.groups.$get>) {
  return ['groups', '/groups', args] as const
}

export function getGroupsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >({
    queryKey: getGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostGroupsMutationKey() {
  return ['groups', '/groups', 'POST'] as const
}

export function getPostGroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
    TError,
    InferRequestType<typeof client.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.groups.$post>) {
      return parseResponse(client.groups.$post(args, options))
    },
  })
}

export function usePostGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
        TError,
        InferRequestType<typeof client.groups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGroupsTerminateSessionsMutationKey() {
  return ['groups', '/groups/terminate_sessions', 'POST'] as const
}

export function getPostGroupsTerminateSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.groups.terminate_sessions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.groups.terminate_sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsTerminateSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.groups.terminate_sessions.$post>) {
      return parseResponse(client.groups.terminate_sessions.$post(args, options))
    },
  })
}

export function usePostGroupsTerminateSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.groups.terminate_sessions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.groups.terminate_sessions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupsTerminateSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
) {
  return ['groups', '/groups/:group_id', args] as const
}

export function getGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdQueryKey>
  >({
    queryKey: getGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':group_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutGroupsGroupIdMutationKey() {
  return ['groups', '/groups/:group_id', 'PUT'] as const
}

export function getPutGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':group_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':group_id']['$put']>) {
      return parseResponse(client.groups[':group_id'].$put(args, options))
    },
  })
}

export function usePutGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':group_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGroupsGroupIdMutationKey() {
  return ['groups', '/groups/:group_id', 'DELETE'] as const
}

export function getDeleteGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.groups)[':group_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':group_id']['$delete']>) {
      return parseResponse(client.groups[':group_id'].$delete(args, options))
    },
  })
}

export function useDeleteGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':group_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.groups)[':group_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsGroupIdMembershipsQueryKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>,
) {
  return ['groups', '/groups/:group_id/memberships', args] as const
}

export function getGroupsGroupIdMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdMembershipsQueryKey>
  >({
    queryKey: getGroupsGroupIdMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':group_id'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupsGroupIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdMembershipsQueryKey>
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
      ...getGroupsGroupIdMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGroupsGroupIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdMembershipsQueryKey>
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
      ...getGroupsGroupIdMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGroupsGroupIdCollaborationsQueryKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['collaborations']['$get']>,
) {
  return ['groups', '/groups/:group_id/collaborations', args] as const
}

export function getGroupsGroupIdCollaborationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['collaborations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['collaborations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['collaborations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdCollaborationsQueryKey>
  >({
    queryKey: getGroupsGroupIdCollaborationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':group_id'].collaborations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupsGroupIdCollaborations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['collaborations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['collaborations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':group_id']['collaborations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdCollaborationsQueryKey>
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
      ...getGroupsGroupIdCollaborationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGroupsGroupIdCollaborations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['collaborations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['collaborations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':group_id']['collaborations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdCollaborationsQueryKey>
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
      ...getGroupsGroupIdCollaborationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGroupMembershipsMutationKey() {
  return ['group_memberships', '/group_memberships', 'POST'] as const
}

export function getPostGroupMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group_memberships.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.group_memberships.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupMembershipsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.group_memberships.$post>) {
      return parseResponse(client.group_memberships.$post(args, options))
    },
  })
}

export function usePostGroupMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.group_memberships.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.group_memberships.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupMembershipsMutationOptions<TError, TOnMutateResult>(
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

export function getGroupMembershipsGroupMembershipIdQueryKey(
  args: InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$get']>,
) {
  return ['group_memberships', '/group_memberships/:group_membership_id', args] as const
}

export function getGroupMembershipsGroupMembershipIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.group_memberships)[':group_membership_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.group_memberships)[':group_membership_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupMembershipsGroupMembershipIdQueryKey>
  >({
    queryKey: getGroupMembershipsGroupMembershipIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.group_memberships[':group_membership_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupMembershipsGroupMembershipId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.group_memberships)[':group_membership_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group_memberships)[':group_membership_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupMembershipsGroupMembershipIdQueryKey>
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
      ...getGroupMembershipsGroupMembershipIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGroupMembershipsGroupMembershipId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.group_memberships)[':group_membership_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group_memberships)[':group_membership_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupMembershipsGroupMembershipIdQueryKey>
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
      ...getGroupMembershipsGroupMembershipIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGroupMembershipsGroupMembershipIdMutationKey() {
  return ['group_memberships', '/group_memberships/:group_membership_id', 'PUT'] as const
}

export function getPutGroupMembershipsGroupMembershipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.group_memberships)[':group_membership_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupMembershipsGroupMembershipIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$put']>,
    ) {
      return parseResponse(client.group_memberships[':group_membership_id'].$put(args, options))
    },
  })
}

export function usePutGroupMembershipsGroupMembershipId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group_memberships)[':group_membership_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGroupMembershipsGroupMembershipIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteGroupMembershipsGroupMembershipIdMutationKey() {
  return ['group_memberships', '/group_memberships/:group_membership_id', 'DELETE'] as const
}

export function getDeleteGroupMembershipsGroupMembershipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupMembershipsGroupMembershipIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$delete']>,
    ) {
      return parseResponse(client.group_memberships[':group_membership_id'].$delete(args, options))
    },
  })
}

export function useDeleteGroupMembershipsGroupMembershipId<
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
                  ReturnType<(typeof client.group_memberships)[':group_membership_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupMembershipsGroupMembershipIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhook_id', args] as const
}

export function getWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdQueryKey>
  >({
    queryKey: getWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':webhook_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhooksWebhookIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhooksWebhookIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id', 'PUT'] as const
}

export function getPutWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$put']>) {
      return parseResponse(client.webhooks[':webhook_id'].$put(args, options))
    },
  })
}

export function usePutWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':webhook_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id', 'DELETE'] as const
}

export function getDeleteWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>) {
      return parseResponse(client.webhooks[':webhook_id'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>,
        TOnMutateResult
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

export function getPutSkillInvocationsSkillIdMutationKey() {
  return ['skill_invocations', '/skill_invocations/:skill_id', 'PUT'] as const
}

export function getPutSkillInvocationsSkillIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.skill_invocations)[':skill_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.skill_invocations)[':skill_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSkillInvocationsSkillIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.skill_invocations)[':skill_id']['$put']>,
    ) {
      return parseResponse(client.skill_invocations[':skill_id'].$put(args, options))
    },
  })
}

export function usePutSkillInvocationsSkillId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.skill_invocations)[':skill_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.skill_invocations)[':skill_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSkillInvocationsSkillIdMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsEventsMutationKey() {
  return ['events', '/events', 'OPTIONS'] as const
}

export function getOptionsEventsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$options>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsEventsMutationKey(),
    async mutationFn() {
      return parseResponse(client.events.$options(undefined, options))
    },
  })
}

export function useOptionsEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$options>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsEventsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCollectionsQueryKey(args: InferRequestType<typeof client.collections.$get>) {
  return ['collections', '/collections', args] as const
}

export function getCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.collections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCollectionsQueryKey>
  >({
    queryKey: getCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.collections.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCollectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.collections.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCollectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCollectionsCollectionIdItemsQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection_id']['items']['$get']>,
) {
  return ['collections', '/collections/:collection_id/items', args] as const
}

export function getCollectionsCollectionIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_id']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdItemsQueryKey>
  >({
    queryKey: getCollectionsCollectionIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_id'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCollectionsCollectionIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['items']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collection_id']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionIdItemsQueryKey>
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
      ...getCollectionsCollectionIdItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollectionsCollectionIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['items']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collection_id']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionIdItemsQueryKey>
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
      ...getCollectionsCollectionIdItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCollectionsCollectionIdQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection_id']['$get']>,
) {
  return ['collections', '/collections/:collection_id', args] as const
}

export function getCollectionsCollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdQueryKey>
  >({
    queryKey: getCollectionsCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCollectionsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionIdQueryKey>
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
      ...getCollectionsCollectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollectionsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionIdQueryKey>
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
      ...getCollectionsCollectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecentItemsQueryKey(args: InferRequestType<typeof client.recent_items.$get>) {
  return ['recent_items', '/recent_items', args] as const
}

export function getRecentItemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recent_items.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recent_items.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recent_items.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRecentItemsQueryKey>
  >({
    queryKey: getRecentItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recent_items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecentItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recent_items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recent_items.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recent_items.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRecentItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecentItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecentItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recent_items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recent_items.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recent_items.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRecentItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecentItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRetentionPoliciesQueryKey(
  args: InferRequestType<typeof client.retention_policies.$get>,
) {
  return ['retention_policies', '/retention_policies', args] as const
}

export function getRetentionPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retention_policies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.retention_policies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retention_policies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRetentionPoliciesQueryKey>
  >({
    queryKey: getRetentionPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.retention_policies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRetentionPolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retention_policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.retention_policies.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.retention_policies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRetentionPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRetentionPoliciesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRetentionPolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retention_policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.retention_policies.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.retention_policies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRetentionPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRetentionPoliciesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRetentionPoliciesMutationKey() {
  return ['retention_policies', '/retention_policies', 'POST'] as const
}

export function getPostRetentionPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retention_policies.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.retention_policies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRetentionPoliciesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.retention_policies.$post>) {
      return parseResponse(client.retention_policies.$post(args, options))
    },
  })
}

export function usePostRetentionPolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.retention_policies.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.retention_policies.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRetentionPoliciesMutationOptions<TError, TOnMutateResult>(
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

export function getRetentionPoliciesRetentionPolicyIdQueryKey(
  args: InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$get']>,
) {
  return ['retention_policies', '/retention_policies/:retention_policy_id', args] as const
}

export function getRetentionPoliciesRetentionPolicyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.retention_policies)[':retention_policy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.retention_policies)[':retention_policy_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRetentionPoliciesRetentionPolicyIdQueryKey>
  >({
    queryKey: getRetentionPoliciesRetentionPolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.retention_policies[':retention_policy_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRetentionPoliciesRetentionPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.retention_policies)[':retention_policy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.retention_policies)[':retention_policy_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRetentionPoliciesRetentionPolicyIdQueryKey>
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
      ...getRetentionPoliciesRetentionPolicyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRetentionPoliciesRetentionPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.retention_policies)[':retention_policy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.retention_policies)[':retention_policy_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRetentionPoliciesRetentionPolicyIdQueryKey>
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
      ...getRetentionPoliciesRetentionPolicyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutRetentionPoliciesRetentionPolicyIdMutationKey() {
  return ['retention_policies', '/retention_policies/:retention_policy_id', 'PUT'] as const
}

export function getPutRetentionPoliciesRetentionPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.retention_policies)[':retention_policy_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRetentionPoliciesRetentionPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$put']>,
    ) {
      return parseResponse(client.retention_policies[':retention_policy_id'].$put(args, options))
    },
  })
}

export function usePutRetentionPoliciesRetentionPolicyId<
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
                ReturnType<(typeof client.retention_policies)[':retention_policy_id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRetentionPoliciesRetentionPolicyIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRetentionPoliciesRetentionPolicyIdMutationKey() {
  return ['retention_policies', '/retention_policies/:retention_policy_id', 'DELETE'] as const
}

export function getDeleteRetentionPoliciesRetentionPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRetentionPoliciesRetentionPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$delete']>,
    ) {
      return parseResponse(client.retention_policies[':retention_policy_id'].$delete(args, options))
    },
  })
}

export function useDeleteRetentionPoliciesRetentionPolicyId<
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
                  ReturnType<(typeof client.retention_policies)[':retention_policy_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRetentionPoliciesRetentionPolicyIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRetentionPoliciesRetentionPolicyIdAssignmentsQueryKey(
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

export function getRetentionPoliciesRetentionPolicyIdAssignmentsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.retention_policies)[':retention_policy_id']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getRetentionPoliciesRetentionPolicyIdAssignmentsQueryKey>
  >({
    queryKey: getRetentionPoliciesRetentionPolicyIdAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.retention_policies[':retention_policy_id'].assignments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRetentionPoliciesRetentionPolicyIdAssignments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.retention_policies)[':retention_policy_id']['assignments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getRetentionPoliciesRetentionPolicyIdAssignmentsQueryKey>
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
      ...getRetentionPoliciesRetentionPolicyIdAssignmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRetentionPoliciesRetentionPolicyIdAssignments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.retention_policies)[':retention_policy_id']['assignments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getRetentionPoliciesRetentionPolicyIdAssignmentsQueryKey>
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
      ...getRetentionPoliciesRetentionPolicyIdAssignmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRetentionPolicyAssignmentsMutationKey() {
  return ['retention_policy_assignments', '/retention_policy_assignments', 'POST'] as const
}

export function getPostRetentionPolicyAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.retention_policy_assignments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.retention_policy_assignments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRetentionPolicyAssignmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.retention_policy_assignments.$post>) {
      return parseResponse(client.retention_policy_assignments.$post(args, options))
    },
  })
}

export function usePostRetentionPolicyAssignments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.retention_policy_assignments.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.retention_policy_assignments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRetentionPolicyAssignmentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdQueryKey(
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

export function getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdQueryKey>
  >({
    queryKey: getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.retention_policy_assignments[':retention_policy_assignment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRetentionPolicyAssignmentsRetentionPolicyAssignmentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdQueryKey>
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
      ...getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRetentionPolicyAssignmentsRetentionPolicyAssignmentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdQueryKey>
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
      ...getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteRetentionPolicyAssignmentsRetentionPolicyAssignmentIdMutationKey() {
  return [
    'retention_policy_assignments',
    '/retention_policy_assignments/:retention_policy_assignment_id',
    'DELETE',
  ] as const
}

export function getDeleteRetentionPolicyAssignmentsRetentionPolicyAssignmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRetentionPolicyAssignmentsRetentionPolicyAssignmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.retention_policy_assignments[':retention_policy_assignment_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteRetentionPolicyAssignmentsRetentionPolicyAssignmentId<
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
                    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$delete']
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
    getDeleteRetentionPolicyAssignmentsRetentionPolicyAssignmentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionQueryKey(
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

export function getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['files_under_retention']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionQueryKey
    >
  >({
    queryKey:
      getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.retention_policy_assignments[
          ':retention_policy_assignment_id'
        ].files_under_retention.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetention<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['files_under_retention']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionQueryKey
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
      ...getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetention<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['files_under_retention']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionQueryKey
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
      ...getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionQueryKey(
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

export function getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['file_versions_under_retention']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionQueryKey
    >
  >({
    queryKey:
      getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.retention_policy_assignments[
          ':retention_policy_assignment_id'
        ].file_versions_under_retention.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetention<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['file_versions_under_retention']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionQueryKey
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
      ...getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetention<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['file_versions_under_retention']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionQueryKey
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
      ...getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLegalHoldPoliciesQueryKey(
  args: InferRequestType<typeof client.legal_hold_policies.$get>,
) {
  return ['legal_hold_policies', '/legal_hold_policies', args] as const
}

export function getLegalHoldPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.legal_hold_policies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLegalHoldPoliciesQueryKey>
  >({
    queryKey: getLegalHoldPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.legal_hold_policies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLegalHoldPolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.legal_hold_policies.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalHoldPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLegalHoldPoliciesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLegalHoldPolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.legal_hold_policies.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalHoldPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLegalHoldPoliciesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLegalHoldPoliciesMutationKey() {
  return ['legal_hold_policies', '/legal_hold_policies', 'POST'] as const
}

export function getPostLegalHoldPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policies.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.legal_hold_policies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLegalHoldPoliciesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.legal_hold_policies.$post>) {
      return parseResponse(client.legal_hold_policies.$post(args, options))
    },
  })
}

export function usePostLegalHoldPolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policies.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.legal_hold_policies.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLegalHoldPoliciesMutationOptions<TError, TOnMutateResult>(
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

export function getLegalHoldPoliciesLegalHoldPolicyIdQueryKey(
  args: InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>,
) {
  return ['legal_hold_policies', '/legal_hold_policies/:legal_hold_policy_id', args] as const
}

export function getLegalHoldPoliciesLegalHoldPolicyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalHoldPoliciesLegalHoldPolicyIdQueryKey>
  >({
    queryKey: getLegalHoldPoliciesLegalHoldPolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.legal_hold_policies[':legal_hold_policy_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLegalHoldPoliciesLegalHoldPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalHoldPoliciesLegalHoldPolicyIdQueryKey>
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
      ...getLegalHoldPoliciesLegalHoldPolicyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLegalHoldPoliciesLegalHoldPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalHoldPoliciesLegalHoldPolicyIdQueryKey>
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
      ...getLegalHoldPoliciesLegalHoldPolicyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutLegalHoldPoliciesLegalHoldPolicyIdMutationKey() {
  return ['legal_hold_policies', '/legal_hold_policies/:legal_hold_policy_id', 'PUT'] as const
}

export function getPutLegalHoldPoliciesLegalHoldPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLegalHoldPoliciesLegalHoldPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$put']>,
    ) {
      return parseResponse(client.legal_hold_policies[':legal_hold_policy_id'].$put(args, options))
    },
  })
}

export function usePutLegalHoldPoliciesLegalHoldPolicyId<
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
                ReturnType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLegalHoldPoliciesLegalHoldPolicyIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteLegalHoldPoliciesLegalHoldPolicyIdMutationKey() {
  return ['legal_hold_policies', '/legal_hold_policies/:legal_hold_policy_id', 'DELETE'] as const
}

export function getDeleteLegalHoldPoliciesLegalHoldPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLegalHoldPoliciesLegalHoldPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legal_hold_policies)[':legal_hold_policy_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.legal_hold_policies[':legal_hold_policy_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLegalHoldPoliciesLegalHoldPolicyId<
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
                ReturnType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLegalHoldPoliciesLegalHoldPolicyIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLegalHoldPolicyAssignmentsQueryKey(
  args: InferRequestType<typeof client.legal_hold_policy_assignments.$get>,
) {
  return ['legal_hold_policy_assignments', '/legal_hold_policy_assignments', args] as const
}

export function getLegalHoldPolicyAssignmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policy_assignments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.legal_hold_policy_assignments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policy_assignments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalHoldPolicyAssignmentsQueryKey>
  >({
    queryKey: getLegalHoldPolicyAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.legal_hold_policy_assignments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLegalHoldPolicyAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policy_assignments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.legal_hold_policy_assignments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.legal_hold_policy_assignments.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalHoldPolicyAssignmentsQueryKey>
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
      ...getLegalHoldPolicyAssignmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLegalHoldPolicyAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policy_assignments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.legal_hold_policy_assignments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.legal_hold_policy_assignments.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalHoldPolicyAssignmentsQueryKey>
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
      ...getLegalHoldPolicyAssignmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLegalHoldPolicyAssignmentsMutationKey() {
  return ['legal_hold_policy_assignments', '/legal_hold_policy_assignments', 'POST'] as const
}

export function getPostLegalHoldPolicyAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policy_assignments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.legal_hold_policy_assignments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLegalHoldPolicyAssignmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.legal_hold_policy_assignments.$post>) {
      return parseResponse(client.legal_hold_policy_assignments.$post(args, options))
    },
  })
}

export function usePostLegalHoldPolicyAssignments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.legal_hold_policy_assignments.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.legal_hold_policy_assignments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLegalHoldPolicyAssignmentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdQueryKey(
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

export function getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdQueryKey>
  >({
    queryKey: getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.legal_hold_policy_assignments[':legal_hold_policy_assignment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdQueryKey>
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
      ...getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdQueryKey>
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
      ...getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdMutationKey() {
  return [
    'legal_hold_policy_assignments',
    '/legal_hold_policy_assignments/:legal_hold_policy_assignment_id',
    'DELETE',
  ] as const
}

export function getDeleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.legal_hold_policy_assignments[':legal_hold_policy_assignment_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentId<
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
                  (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$delete']
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
    getDeleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldQueryKey(
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

export function getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['files_on_hold']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldQueryKey>
  >({
    queryKey: getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.legal_hold_policy_assignments[':legal_hold_policy_assignment_id'].files_on_hold.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHold<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['files_on_hold']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldQueryKey
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
      ...getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHold<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['files_on_hold']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldQueryKey
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
      ...getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFileVersionRetentionsQueryKey(
  args: InferRequestType<typeof client.file_version_retentions.$get>,
) {
  return ['file_version_retentions', '/file_version_retentions', args] as const
}

export function getFileVersionRetentionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.file_version_retentions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.file_version_retentions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.file_version_retentions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileVersionRetentionsQueryKey>
  >({
    queryKey: getFileVersionRetentionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.file_version_retentions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFileVersionRetentions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.file_version_retentions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.file_version_retentions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.file_version_retentions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileVersionRetentionsQueryKey>
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
      ...getFileVersionRetentionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFileVersionRetentions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.file_version_retentions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.file_version_retentions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.file_version_retentions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileVersionRetentionsQueryKey>
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
      ...getFileVersionRetentionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldQueryKey(
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

export function getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['file_versions_on_hold']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldQueryKey
    >
  >({
    queryKey:
      getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.legal_hold_policy_assignments[
          ':legal_hold_policy_assignment_id'
        ].file_versions_on_hold.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHold<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['file_versions_on_hold']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldQueryKey
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
      ...getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHold<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['file_versions_on_hold']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldQueryKey
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
      ...getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFileVersionRetentionsFileVersionRetentionIdQueryKey(
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

export function getFileVersionRetentionsFileVersionRetentionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.file_version_retentions)[':file_version_retention_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.file_version_retentions)[':file_version_retention_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFileVersionRetentionsFileVersionRetentionIdQueryKey>
  >({
    queryKey: getFileVersionRetentionsFileVersionRetentionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.file_version_retentions[':file_version_retention_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFileVersionRetentionsFileVersionRetentionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.file_version_retentions)[':file_version_retention_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.file_version_retentions)[':file_version_retention_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFileVersionRetentionsFileVersionRetentionIdQueryKey>
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
      ...getFileVersionRetentionsFileVersionRetentionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFileVersionRetentionsFileVersionRetentionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.file_version_retentions)[':file_version_retention_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.file_version_retentions)[':file_version_retention_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFileVersionRetentionsFileVersionRetentionIdQueryKey>
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
      ...getFileVersionRetentionsFileVersionRetentionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFileVersionLegalHoldsFileVersionLegalHoldIdQueryKey(
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

export function getFileVersionLegalHoldsFileVersionLegalHoldIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.file_version_legal_holds)[':file_version_legal_hold_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFileVersionLegalHoldsFileVersionLegalHoldIdQueryKey>
  >({
    queryKey: getFileVersionLegalHoldsFileVersionLegalHoldIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.file_version_legal_holds[':file_version_legal_hold_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFileVersionLegalHoldsFileVersionLegalHoldId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.file_version_legal_holds)[':file_version_legal_hold_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFileVersionLegalHoldsFileVersionLegalHoldIdQueryKey>
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
      ...getFileVersionLegalHoldsFileVersionLegalHoldIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFileVersionLegalHoldsFileVersionLegalHoldId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.file_version_legal_holds)[':file_version_legal_hold_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFileVersionLegalHoldsFileVersionLegalHoldIdQueryKey>
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
      ...getFileVersionLegalHoldsFileVersionLegalHoldIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFileVersionLegalHoldsQueryKey(
  args: InferRequestType<typeof client.file_version_legal_holds.$get>,
) {
  return ['file_version_legal_holds', '/file_version_legal_holds', args] as const
}

export function getFileVersionLegalHoldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.file_version_legal_holds.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.file_version_legal_holds.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.file_version_legal_holds.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileVersionLegalHoldsQueryKey>
  >({
    queryKey: getFileVersionLegalHoldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.file_version_legal_holds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFileVersionLegalHolds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.file_version_legal_holds.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.file_version_legal_holds.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.file_version_legal_holds.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileVersionLegalHoldsQueryKey>
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
      ...getFileVersionLegalHoldsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFileVersionLegalHolds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.file_version_legal_holds.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.file_version_legal_holds.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.file_version_legal_holds.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileVersionLegalHoldsQueryKey>
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
      ...getFileVersionLegalHoldsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShieldInformationBarriersShieldInformationBarrierIdQueryKey(
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

export function getShieldInformationBarriersShieldInformationBarrierIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shield_information_barriers)[':shield_information_barrier_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getShieldInformationBarriersShieldInformationBarrierIdQueryKey>
  >({
    queryKey: getShieldInformationBarriersShieldInformationBarrierIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shield_information_barriers[':shield_information_barrier_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShieldInformationBarriersShieldInformationBarrierId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shield_information_barriers)[':shield_information_barrier_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShieldInformationBarriersShieldInformationBarrierIdQueryKey>
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
      ...getShieldInformationBarriersShieldInformationBarrierIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShieldInformationBarriersShieldInformationBarrierId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shield_information_barriers)[':shield_information_barrier_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShieldInformationBarriersShieldInformationBarrierIdQueryKey>
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
      ...getShieldInformationBarriersShieldInformationBarrierIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostShieldInformationBarriersChangeStatusMutationKey() {
  return [
    'shield_information_barriers',
    '/shield_information_barriers/change_status',
    'POST',
  ] as const
}

export function getPostShieldInformationBarriersChangeStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.shield_information_barriers.change_status.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.shield_information_barriers.change_status.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShieldInformationBarriersChangeStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.shield_information_barriers.change_status.$post>,
    ) {
      return parseResponse(client.shield_information_barriers.change_status.$post(args, options))
    },
  })
}

export function usePostShieldInformationBarriersChangeStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shield_information_barriers.change_status.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.shield_information_barriers.change_status.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShieldInformationBarriersChangeStatusMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getShieldInformationBarriersQueryKey(
  args: InferRequestType<typeof client.shield_information_barriers.$get>,
) {
  return ['shield_information_barriers', '/shield_information_barriers', args] as const
}

export function getShieldInformationBarriersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shield_information_barriers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shield_information_barriers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shield_information_barriers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShieldInformationBarriersQueryKey>
  >({
    queryKey: getShieldInformationBarriersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shield_information_barriers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShieldInformationBarriers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shield_information_barriers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shield_information_barriers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shield_information_barriers.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShieldInformationBarriersQueryKey>
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
      ...getShieldInformationBarriersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShieldInformationBarriers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shield_information_barriers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shield_information_barriers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shield_information_barriers.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShieldInformationBarriersQueryKey>
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
      ...getShieldInformationBarriersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostShieldInformationBarriersMutationKey() {
  return ['shield_information_barriers', '/shield_information_barriers', 'POST'] as const
}

export function getPostShieldInformationBarriersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shield_information_barriers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.shield_information_barriers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShieldInformationBarriersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shield_information_barriers.$post>) {
      return parseResponse(client.shield_information_barriers.$post(args, options))
    },
  })
}

export function usePostShieldInformationBarriers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shield_information_barriers.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.shield_information_barriers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShieldInformationBarriersMutationOptions<TError, TOnMutateResult>(
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

export function getShieldInformationBarrierReportsQueryKey(
  args: InferRequestType<typeof client.shield_information_barrier_reports.$get>,
) {
  return [
    'shield_information_barrier_reports',
    '/shield_information_barrier_reports',
    args,
  ] as const
}

export function getShieldInformationBarrierReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.shield_information_barrier_reports.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shield_information_barrier_reports.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.shield_information_barrier_reports.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShieldInformationBarrierReportsQueryKey>
  >({
    queryKey: getShieldInformationBarrierReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shield_information_barrier_reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShieldInformationBarrierReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.shield_information_barrier_reports.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shield_information_barrier_reports.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shield_information_barrier_reports.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShieldInformationBarrierReportsQueryKey>
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
      ...getShieldInformationBarrierReportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShieldInformationBarrierReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.shield_information_barrier_reports.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shield_information_barrier_reports.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shield_information_barrier_reports.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShieldInformationBarrierReportsQueryKey>
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
      ...getShieldInformationBarrierReportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostShieldInformationBarrierReportsMutationKey() {
  return [
    'shield_information_barrier_reports',
    '/shield_information_barrier_reports',
    'POST',
  ] as const
}

export function getPostShieldInformationBarrierReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.shield_information_barrier_reports.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.shield_information_barrier_reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShieldInformationBarrierReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.shield_information_barrier_reports.$post>,
    ) {
      return parseResponse(client.shield_information_barrier_reports.$post(args, options))
    },
  })
}

export function usePostShieldInformationBarrierReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shield_information_barrier_reports.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.shield_information_barrier_reports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShieldInformationBarrierReportsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getShieldInformationBarrierReportsShieldInformationBarrierReportIdQueryKey(
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

export function getShieldInformationBarrierReportsShieldInformationBarrierReportIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_reports)[':shield_information_barrier_report_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getShieldInformationBarrierReportsShieldInformationBarrierReportIdQueryKey>
  >({
    queryKey: getShieldInformationBarrierReportsShieldInformationBarrierReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shield_information_barrier_reports[':shield_information_barrier_report_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useShieldInformationBarrierReportsShieldInformationBarrierReportId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_reports)[':shield_information_barrier_report_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getShieldInformationBarrierReportsShieldInformationBarrierReportIdQueryKey
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
      ...getShieldInformationBarrierReportsShieldInformationBarrierReportIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShieldInformationBarrierReportsShieldInformationBarrierReportId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_reports)[':shield_information_barrier_report_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getShieldInformationBarrierReportsShieldInformationBarrierReportIdQueryKey
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
      ...getShieldInformationBarrierReportsShieldInformationBarrierReportIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdQueryKey(
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

export function getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdQueryKey>
  >({
    queryKey: getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shield_information_barrier_segments[':shield_information_barrier_segment_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useShieldInformationBarrierSegmentsShieldInformationBarrierSegmentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdQueryKey
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
      ...getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShieldInformationBarrierSegmentsShieldInformationBarrierSegmentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdQueryKey
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
      ...getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdMutationKey() {
  return [
    'shield_information_barrier_segments',
    '/shield_information_barrier_segments/:shield_information_barrier_segment_id',
    'PUT',
  ] as const
}

export function getPutShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$put']
      >,
    ) {
      return parseResponse(
        client.shield_information_barrier_segments[':shield_information_barrier_segment_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutShieldInformationBarrierSegmentsShieldInformationBarrierSegmentId<
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
                  (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$put']
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
    getPutShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdMutationKey() {
  return [
    'shield_information_barrier_segments',
    '/shield_information_barrier_segments/:shield_information_barrier_segment_id',
    'DELETE',
  ] as const
}

export function getDeleteShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.shield_information_barrier_segments[
          ':shield_information_barrier_segment_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteShieldInformationBarrierSegmentsShieldInformationBarrierSegmentId<
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
                    (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$delete']
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
    getDeleteShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getShieldInformationBarrierSegmentsQueryKey(
  args: InferRequestType<typeof client.shield_information_barrier_segments.$get>,
) {
  return [
    'shield_information_barrier_segments',
    '/shield_information_barrier_segments',
    args,
  ] as const
}

export function getShieldInformationBarrierSegmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.shield_information_barrier_segments.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shield_information_barrier_segments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.shield_information_barrier_segments.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShieldInformationBarrierSegmentsQueryKey>
  >({
    queryKey: getShieldInformationBarrierSegmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shield_information_barrier_segments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShieldInformationBarrierSegments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.shield_information_barrier_segments.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shield_information_barrier_segments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shield_information_barrier_segments.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShieldInformationBarrierSegmentsQueryKey>
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
      ...getShieldInformationBarrierSegmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShieldInformationBarrierSegments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.shield_information_barrier_segments.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shield_information_barrier_segments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shield_information_barrier_segments.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShieldInformationBarrierSegmentsQueryKey>
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
      ...getShieldInformationBarrierSegmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostShieldInformationBarrierSegmentsMutationKey() {
  return [
    'shield_information_barrier_segments',
    '/shield_information_barrier_segments',
    'POST',
  ] as const
}

export function getPostShieldInformationBarrierSegmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.shield_information_barrier_segments.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.shield_information_barrier_segments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShieldInformationBarrierSegmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.shield_information_barrier_segments.$post>,
    ) {
      return parseResponse(client.shield_information_barrier_segments.$post(args, options))
    },
  })
}

export function usePostShieldInformationBarrierSegments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shield_information_barrier_segments.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.shield_information_barrier_segments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShieldInformationBarrierSegmentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdQueryKey(
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

export function getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdQueryKey
    >
  >({
    queryKey:
      getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.shield_information_barrier_segment_members[
          ':shield_information_barrier_segment_member_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdQueryKey
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
      ...getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdQueryKey
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
      ...getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdMutationKey() {
  return [
    'shield_information_barrier_segment_members',
    '/shield_information_barrier_segment_members/:shield_information_barrier_segment_member_id',
    'DELETE',
  ] as const
}

export function getDeleteShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.shield_information_barrier_segment_members[
          ':shield_information_barrier_segment_member_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberId<
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
                    (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$delete']
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
    getDeleteShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getShieldInformationBarrierSegmentMembersQueryKey(
  args: InferRequestType<typeof client.shield_information_barrier_segment_members.$get>,
) {
  return [
    'shield_information_barrier_segment_members',
    '/shield_information_barrier_segment_members',
    args,
  ] as const
}

export function getShieldInformationBarrierSegmentMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.shield_information_barrier_segment_members.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shield_information_barrier_segment_members.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.shield_information_barrier_segment_members.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShieldInformationBarrierSegmentMembersQueryKey>
  >({
    queryKey: getShieldInformationBarrierSegmentMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shield_information_barrier_segment_members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShieldInformationBarrierSegmentMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.shield_information_barrier_segment_members.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shield_information_barrier_segment_members.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shield_information_barrier_segment_members.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShieldInformationBarrierSegmentMembersQueryKey>
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
      ...getShieldInformationBarrierSegmentMembersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShieldInformationBarrierSegmentMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.shield_information_barrier_segment_members.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shield_information_barrier_segment_members.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shield_information_barrier_segment_members.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShieldInformationBarrierSegmentMembersQueryKey>
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
      ...getShieldInformationBarrierSegmentMembersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostShieldInformationBarrierSegmentMembersMutationKey() {
  return [
    'shield_information_barrier_segment_members',
    '/shield_information_barrier_segment_members',
    'POST',
  ] as const
}

export function getPostShieldInformationBarrierSegmentMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.shield_information_barrier_segment_members.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.shield_information_barrier_segment_members.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShieldInformationBarrierSegmentMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.shield_information_barrier_segment_members.$post>,
    ) {
      return parseResponse(client.shield_information_barrier_segment_members.$post(args, options))
    },
  })
}

export function usePostShieldInformationBarrierSegmentMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shield_information_barrier_segment_members.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.shield_information_barrier_segment_members.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShieldInformationBarrierSegmentMembersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdQueryKey(
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

export function getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdQueryKey
    >
  >({
    queryKey:
      getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.shield_information_barrier_segment_restrictions[
          ':shield_information_barrier_segment_restriction_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdQueryKey
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
      ...getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdQueryKey
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
      ...getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdMutationKey() {
  return [
    'shield_information_barrier_segment_restrictions',
    '/shield_information_barrier_segment_restrictions/:shield_information_barrier_segment_restriction_id',
    'DELETE',
  ] as const
}

export function getDeleteShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.shield_information_barrier_segment_restrictions[
          ':shield_information_barrier_segment_restriction_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionId<
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
                    (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$delete']
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
    getDeleteShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getShieldInformationBarrierSegmentRestrictionsQueryKey(
  args: InferRequestType<typeof client.shield_information_barrier_segment_restrictions.$get>,
) {
  return [
    'shield_information_barrier_segment_restrictions',
    '/shield_information_barrier_segment_restrictions',
    args,
  ] as const
}

export function getShieldInformationBarrierSegmentRestrictionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.shield_information_barrier_segment_restrictions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shield_information_barrier_segment_restrictions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.shield_information_barrier_segment_restrictions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShieldInformationBarrierSegmentRestrictionsQueryKey>
  >({
    queryKey: getShieldInformationBarrierSegmentRestrictionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shield_information_barrier_segment_restrictions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShieldInformationBarrierSegmentRestrictions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.shield_information_barrier_segment_restrictions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shield_information_barrier_segment_restrictions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.shield_information_barrier_segment_restrictions.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShieldInformationBarrierSegmentRestrictionsQueryKey>
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
      ...getShieldInformationBarrierSegmentRestrictionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShieldInformationBarrierSegmentRestrictions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.shield_information_barrier_segment_restrictions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shield_information_barrier_segment_restrictions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.shield_information_barrier_segment_restrictions.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShieldInformationBarrierSegmentRestrictionsQueryKey>
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
      ...getShieldInformationBarrierSegmentRestrictionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostShieldInformationBarrierSegmentRestrictionsMutationKey() {
  return [
    'shield_information_barrier_segment_restrictions',
    '/shield_information_barrier_segment_restrictions',
    'POST',
  ] as const
}

export function getPostShieldInformationBarrierSegmentRestrictionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.shield_information_barrier_segment_restrictions.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.shield_information_barrier_segment_restrictions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShieldInformationBarrierSegmentRestrictionsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.shield_information_barrier_segment_restrictions.$post>,
    ) {
      return parseResponse(
        client.shield_information_barrier_segment_restrictions.$post(args, options),
      )
    },
  })
}

export function usePostShieldInformationBarrierSegmentRestrictions<
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
                ReturnType<typeof client.shield_information_barrier_segment_restrictions.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.shield_information_barrier_segment_restrictions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShieldInformationBarrierSegmentRestrictionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDevicePinnersDevicePinnerIdQueryKey(
  args: InferRequestType<(typeof client.device_pinners)[':device_pinner_id']['$get']>,
) {
  return ['device_pinners', '/device_pinners/:device_pinner_id', args] as const
}

export function getDevicePinnersDevicePinnerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.device_pinners)[':device_pinner_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.device_pinners)[':device_pinner_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.device_pinners)[':device_pinner_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicePinnersDevicePinnerIdQueryKey>
  >({
    queryKey: getDevicePinnersDevicePinnerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.device_pinners[':device_pinner_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDevicePinnersDevicePinnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.device_pinners)[':device_pinner_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.device_pinners)[':device_pinner_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.device_pinners)[':device_pinner_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDevicePinnersDevicePinnerIdQueryKey>
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
      ...getDevicePinnersDevicePinnerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDevicePinnersDevicePinnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.device_pinners)[':device_pinner_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.device_pinners)[':device_pinner_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.device_pinners)[':device_pinner_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDevicePinnersDevicePinnerIdQueryKey>
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
      ...getDevicePinnersDevicePinnerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteDevicePinnersDevicePinnerIdMutationKey() {
  return ['device_pinners', '/device_pinners/:device_pinner_id', 'DELETE'] as const
}

export function getDeleteDevicePinnersDevicePinnerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.device_pinners)[':device_pinner_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.device_pinners)[':device_pinner_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDevicePinnersDevicePinnerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.device_pinners)[':device_pinner_id']['$delete']>,
    ) {
      return parseResponse(client.device_pinners[':device_pinner_id'].$delete(args, options))
    },
  })
}

export function useDeleteDevicePinnersDevicePinnerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.device_pinners)[':device_pinner_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.device_pinners)[':device_pinner_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDevicePinnersDevicePinnerIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEnterprisesEnterpriseIdDevicePinnersQueryKey(
  args: InferRequestType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>,
) {
  return ['enterprises', '/enterprises/:enterprise_id/device_pinners', args] as const
}

export function getEnterprisesEnterpriseIdDevicePinnersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesEnterpriseIdDevicePinnersQueryKey>
  >({
    queryKey: getEnterprisesEnterpriseIdDevicePinnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprises[':enterprise_id'].device_pinners.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEnterprisesEnterpriseIdDevicePinners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesEnterpriseIdDevicePinnersQueryKey>
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
      ...getEnterprisesEnterpriseIdDevicePinnersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEnterprisesEnterpriseIdDevicePinners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesEnterpriseIdDevicePinnersQueryKey>
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
      ...getEnterprisesEnterpriseIdDevicePinnersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTermsOfServicesQueryKey(
  args: InferRequestType<typeof client.terms_of_services.$get>,
) {
  return ['terms_of_services', '/terms_of_services', args] as const
}

export function getTermsOfServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_services.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.terms_of_services.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_services.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTermsOfServicesQueryKey>
  >({
    queryKey: getTermsOfServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.terms_of_services.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTermsOfServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.terms_of_services.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_services.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTermsOfServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTermsOfServicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTermsOfServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.terms_of_services.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_services.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTermsOfServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTermsOfServicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTermsOfServicesMutationKey() {
  return ['terms_of_services', '/terms_of_services', 'POST'] as const
}

export function getPostTermsOfServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_services.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.terms_of_services.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTermsOfServicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.terms_of_services.$post>) {
      return parseResponse(client.terms_of_services.$post(args, options))
    },
  })
}

export function usePostTermsOfServices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_services.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.terms_of_services.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTermsOfServicesMutationOptions<TError, TOnMutateResult>(
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

export function getTermsOfServicesTermsOfServiceIdQueryKey(
  args: InferRequestType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>,
) {
  return ['terms_of_services', '/terms_of_services/:terms_of_service_id', args] as const
}

export function getTermsOfServicesTermsOfServiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTermsOfServicesTermsOfServiceIdQueryKey>
  >({
    queryKey: getTermsOfServicesTermsOfServiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.terms_of_services[':terms_of_service_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTermsOfServicesTermsOfServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTermsOfServicesTermsOfServiceIdQueryKey>
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
      ...getTermsOfServicesTermsOfServiceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTermsOfServicesTermsOfServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTermsOfServicesTermsOfServiceIdQueryKey>
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
      ...getTermsOfServicesTermsOfServiceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTermsOfServicesTermsOfServiceIdMutationKey() {
  return ['terms_of_services', '/terms_of_services/:terms_of_service_id', 'PUT'] as const
}

export function getPutTermsOfServicesTermsOfServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.terms_of_services)[':terms_of_service_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.terms_of_services)[':terms_of_service_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTermsOfServicesTermsOfServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.terms_of_services)[':terms_of_service_id']['$put']>,
    ) {
      return parseResponse(client.terms_of_services[':terms_of_service_id'].$put(args, options))
    },
  })
}

export function usePutTermsOfServicesTermsOfServiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.terms_of_services)[':terms_of_service_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.terms_of_services)[':terms_of_service_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTermsOfServicesTermsOfServiceIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTermsOfServiceUserStatusesQueryKey(
  args: InferRequestType<typeof client.terms_of_service_user_statuses.$get>,
) {
  return ['terms_of_service_user_statuses', '/terms_of_service_user_statuses', args] as const
}

export function getTermsOfServiceUserStatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_service_user_statuses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.terms_of_service_user_statuses.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_service_user_statuses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTermsOfServiceUserStatusesQueryKey>
  >({
    queryKey: getTermsOfServiceUserStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.terms_of_service_user_statuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTermsOfServiceUserStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_service_user_statuses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.terms_of_service_user_statuses.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.terms_of_service_user_statuses.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTermsOfServiceUserStatusesQueryKey>
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
      ...getTermsOfServiceUserStatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTermsOfServiceUserStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_service_user_statuses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.terms_of_service_user_statuses.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.terms_of_service_user_statuses.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTermsOfServiceUserStatusesQueryKey>
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
      ...getTermsOfServiceUserStatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTermsOfServiceUserStatusesMutationKey() {
  return ['terms_of_service_user_statuses', '/terms_of_service_user_statuses', 'POST'] as const
}

export function getPostTermsOfServiceUserStatusesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.terms_of_service_user_statuses.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.terms_of_service_user_statuses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTermsOfServiceUserStatusesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.terms_of_service_user_statuses.$post>) {
      return parseResponse(client.terms_of_service_user_statuses.$post(args, options))
    },
  })
}

export function usePostTermsOfServiceUserStatuses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.terms_of_service_user_statuses.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.terms_of_service_user_statuses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTermsOfServiceUserStatusesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutTermsOfServiceUserStatusesTermsOfServiceUserStatusIdMutationKey() {
  return [
    'terms_of_service_user_statuses',
    '/terms_of_service_user_statuses/:terms_of_service_user_status_id',
    'PUT',
  ] as const
}

export function getPutTermsOfServiceUserStatusesTermsOfServiceUserStatusIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.terms_of_service_user_statuses)[':terms_of_service_user_status_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutTermsOfServiceUserStatusesTermsOfServiceUserStatusIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.terms_of_service_user_statuses)[':terms_of_service_user_status_id']['$put']
      >,
    ) {
      return parseResponse(
        client.terms_of_service_user_statuses[':terms_of_service_user_status_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutTermsOfServiceUserStatusesTermsOfServiceUserStatusId<
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
                  (typeof client.terms_of_service_user_statuses)[':terms_of_service_user_status_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.terms_of_service_user_statuses)[':terms_of_service_user_status_id']['$put']
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
    getPutTermsOfServiceUserStatusesTermsOfServiceUserStatusIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCollaborationWhitelistEntriesQueryKey(
  args: InferRequestType<typeof client.collaboration_whitelist_entries.$get>,
) {
  return ['collaboration_whitelist_entries', '/collaboration_whitelist_entries', args] as const
}

export function getCollaborationWhitelistEntriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.collaboration_whitelist_entries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.collaboration_whitelist_entries.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.collaboration_whitelist_entries.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollaborationWhitelistEntriesQueryKey>
  >({
    queryKey: getCollaborationWhitelistEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collaboration_whitelist_entries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCollaborationWhitelistEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.collaboration_whitelist_entries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.collaboration_whitelist_entries.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.collaboration_whitelist_entries.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollaborationWhitelistEntriesQueryKey>
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
      ...getCollaborationWhitelistEntriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollaborationWhitelistEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.collaboration_whitelist_entries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.collaboration_whitelist_entries.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.collaboration_whitelist_entries.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollaborationWhitelistEntriesQueryKey>
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
      ...getCollaborationWhitelistEntriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCollaborationWhitelistEntriesMutationKey() {
  return ['collaboration_whitelist_entries', '/collaboration_whitelist_entries', 'POST'] as const
}

export function getPostCollaborationWhitelistEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.collaboration_whitelist_entries.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.collaboration_whitelist_entries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollaborationWhitelistEntriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.collaboration_whitelist_entries.$post>) {
      return parseResponse(client.collaboration_whitelist_entries.$post(args, options))
    },
  })
}

export function usePostCollaborationWhitelistEntries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.collaboration_whitelist_entries.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.collaboration_whitelist_entries.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCollaborationWhitelistEntriesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdQueryKey(
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

export function getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdQueryKey>
  >({
    queryKey: getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collaboration_whitelist_entries[':collaboration_whitelist_entry_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCollaborationWhitelistEntriesCollaborationWhitelistEntryId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdQueryKey>
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
      ...getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollaborationWhitelistEntriesCollaborationWhitelistEntryId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdQueryKey>
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
      ...getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCollaborationWhitelistEntriesCollaborationWhitelistEntryIdMutationKey() {
  return [
    'collaboration_whitelist_entries',
    '/collaboration_whitelist_entries/:collaboration_whitelist_entry_id',
    'DELETE',
  ] as const
}

export function getDeleteCollaborationWhitelistEntriesCollaborationWhitelistEntryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollaborationWhitelistEntriesCollaborationWhitelistEntryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.collaboration_whitelist_entries[':collaboration_whitelist_entry_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteCollaborationWhitelistEntriesCollaborationWhitelistEntryId<
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
                    (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$delete']
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
    getDeleteCollaborationWhitelistEntriesCollaborationWhitelistEntryIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCollaborationWhitelistExemptTargetsQueryKey(
  args: InferRequestType<typeof client.collaboration_whitelist_exempt_targets.$get>,
) {
  return [
    'collaboration_whitelist_exempt_targets',
    '/collaboration_whitelist_exempt_targets',
    args,
  ] as const
}

export function getCollaborationWhitelistExemptTargetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.collaboration_whitelist_exempt_targets.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.collaboration_whitelist_exempt_targets.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.collaboration_whitelist_exempt_targets.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollaborationWhitelistExemptTargetsQueryKey>
  >({
    queryKey: getCollaborationWhitelistExemptTargetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collaboration_whitelist_exempt_targets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCollaborationWhitelistExemptTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.collaboration_whitelist_exempt_targets.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.collaboration_whitelist_exempt_targets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.collaboration_whitelist_exempt_targets.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollaborationWhitelistExemptTargetsQueryKey>
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
      ...getCollaborationWhitelistExemptTargetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollaborationWhitelistExemptTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.collaboration_whitelist_exempt_targets.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.collaboration_whitelist_exempt_targets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.collaboration_whitelist_exempt_targets.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollaborationWhitelistExemptTargetsQueryKey>
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
      ...getCollaborationWhitelistExemptTargetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCollaborationWhitelistExemptTargetsMutationKey() {
  return [
    'collaboration_whitelist_exempt_targets',
    '/collaboration_whitelist_exempt_targets',
    'POST',
  ] as const
}

export function getPostCollaborationWhitelistExemptTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.collaboration_whitelist_exempt_targets.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.collaboration_whitelist_exempt_targets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollaborationWhitelistExemptTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.collaboration_whitelist_exempt_targets.$post>,
    ) {
      return parseResponse(client.collaboration_whitelist_exempt_targets.$post(args, options))
    },
  })
}

export function usePostCollaborationWhitelistExemptTargets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.collaboration_whitelist_exempt_targets.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.collaboration_whitelist_exempt_targets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCollaborationWhitelistExemptTargetsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdQueryKey(
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

export function getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdQueryKey
    >
  >({
    queryKey:
      getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collaboration_whitelist_exempt_targets[
          ':collaboration_whitelist_exempt_target_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdQueryKey
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
      ...getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdQueryKey
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
      ...getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdMutationKey() {
  return [
    'collaboration_whitelist_exempt_targets',
    '/collaboration_whitelist_exempt_targets/:collaboration_whitelist_exempt_target_id',
    'DELETE',
  ] as const
}

export function getDeleteCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.collaboration_whitelist_exempt_targets[
          ':collaboration_whitelist_exempt_target_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetId<
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
                    (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$delete']
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
    getDeleteCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStoragePoliciesQueryKey(
  args: InferRequestType<typeof client.storage_policies.$get>,
) {
  return ['storage_policies', '/storage_policies', args] as const
}

export function getStoragePoliciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage_policies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.storage_policies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage_policies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoragePoliciesQueryKey>
  >({
    queryKey: getStoragePoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.storage_policies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStoragePolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage_policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.storage_policies.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage_policies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStoragePoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoragePoliciesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoragePolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage_policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.storage_policies.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage_policies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStoragePoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoragePoliciesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoragePoliciesStoragePolicyIdQueryKey(
  args: InferRequestType<(typeof client.storage_policies)[':storage_policy_id']['$get']>,
) {
  return ['storage_policies', '/storage_policies/:storage_policy_id', args] as const
}

export function getStoragePoliciesStoragePolicyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.storage_policies)[':storage_policy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.storage_policies)[':storage_policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.storage_policies)[':storage_policy_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoragePoliciesStoragePolicyIdQueryKey>
  >({
    queryKey: getStoragePoliciesStoragePolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.storage_policies[':storage_policy_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoragePoliciesStoragePolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.storage_policies)[':storage_policy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.storage_policies)[':storage_policy_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.storage_policies)[':storage_policy_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoragePoliciesStoragePolicyIdQueryKey>
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
      ...getStoragePoliciesStoragePolicyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStoragePoliciesStoragePolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.storage_policies)[':storage_policy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.storage_policies)[':storage_policy_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.storage_policies)[':storage_policy_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoragePoliciesStoragePolicyIdQueryKey>
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
      ...getStoragePoliciesStoragePolicyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStoragePolicyAssignmentsQueryKey(
  args: InferRequestType<typeof client.storage_policy_assignments.$get>,
) {
  return ['storage_policy_assignments', '/storage_policy_assignments', args] as const
}

export function getStoragePolicyAssignmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.storage_policy_assignments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.storage_policy_assignments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.storage_policy_assignments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoragePolicyAssignmentsQueryKey>
  >({
    queryKey: getStoragePolicyAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.storage_policy_assignments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoragePolicyAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.storage_policy_assignments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.storage_policy_assignments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.storage_policy_assignments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoragePolicyAssignmentsQueryKey>
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
      ...getStoragePolicyAssignmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStoragePolicyAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.storage_policy_assignments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.storage_policy_assignments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.storage_policy_assignments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoragePolicyAssignmentsQueryKey>
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
      ...getStoragePolicyAssignmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostStoragePolicyAssignmentsMutationKey() {
  return ['storage_policy_assignments', '/storage_policy_assignments', 'POST'] as const
}

export function getPostStoragePolicyAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.storage_policy_assignments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.storage_policy_assignments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStoragePolicyAssignmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.storage_policy_assignments.$post>) {
      return parseResponse(client.storage_policy_assignments.$post(args, options))
    },
  })
}

export function usePostStoragePolicyAssignments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.storage_policy_assignments.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.storage_policy_assignments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoragePolicyAssignmentsMutationOptions<TError, TOnMutateResult>(
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

export function getStoragePolicyAssignmentsStoragePolicyAssignmentIdQueryKey(
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

export function getStoragePolicyAssignmentsStoragePolicyAssignmentIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getStoragePolicyAssignmentsStoragePolicyAssignmentIdQueryKey>
  >({
    queryKey: getStoragePolicyAssignmentsStoragePolicyAssignmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.storage_policy_assignments[':storage_policy_assignment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoragePolicyAssignmentsStoragePolicyAssignmentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getStoragePolicyAssignmentsStoragePolicyAssignmentIdQueryKey>
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
      ...getStoragePolicyAssignmentsStoragePolicyAssignmentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStoragePolicyAssignmentsStoragePolicyAssignmentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getStoragePolicyAssignmentsStoragePolicyAssignmentIdQueryKey>
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
      ...getStoragePolicyAssignmentsStoragePolicyAssignmentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutStoragePolicyAssignmentsStoragePolicyAssignmentIdMutationKey() {
  return [
    'storage_policy_assignments',
    '/storage_policy_assignments/:storage_policy_assignment_id',
    'PUT',
  ] as const
}

export function getPutStoragePolicyAssignmentsStoragePolicyAssignmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutStoragePolicyAssignmentsStoragePolicyAssignmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$put']
      >,
    ) {
      return parseResponse(
        client.storage_policy_assignments[':storage_policy_assignment_id'].$put(args, options),
      )
    },
  })
}

export function usePutStoragePolicyAssignmentsStoragePolicyAssignmentId<
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
                  (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$put']
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
  const mutationDefaults = getPutStoragePolicyAssignmentsStoragePolicyAssignmentIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteStoragePolicyAssignmentsStoragePolicyAssignmentIdMutationKey() {
  return [
    'storage_policy_assignments',
    '/storage_policy_assignments/:storage_policy_assignment_id',
    'DELETE',
  ] as const
}

export function getDeleteStoragePolicyAssignmentsStoragePolicyAssignmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteStoragePolicyAssignmentsStoragePolicyAssignmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.storage_policy_assignments[':storage_policy_assignment_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteStoragePolicyAssignmentsStoragePolicyAssignmentId<
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
                    (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$delete']
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
    getDeleteStoragePolicyAssignmentsStoragePolicyAssignmentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostZipDownloadsMutationKey() {
  return ['zip_downloads', '/zip_downloads', 'POST'] as const
}

export function getPostZipDownloadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zip_downloads.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.zip_downloads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostZipDownloadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.zip_downloads.$post>) {
      return parseResponse(client.zip_downloads.$post(args, options))
    },
  })
}

export function usePostZipDownloads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zip_downloads.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.zip_downloads.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostZipDownloadsMutationOptions<TError, TOnMutateResult>(
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

export function getZipDownloadsZipDownloadIdContentQueryKey(
  args: InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>,
) {
  return ['zip_downloads', '/zip_downloads/:zip_download_id/content', args] as const
}

export function getZipDownloadsZipDownloadIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getZipDownloadsZipDownloadIdContentQueryKey>
  >({
    queryKey: getZipDownloadsZipDownloadIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.zip_downloads[':zip_download_id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useZipDownloadsZipDownloadIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getZipDownloadsZipDownloadIdContentQueryKey>
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
      ...getZipDownloadsZipDownloadIdContentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseZipDownloadsZipDownloadIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getZipDownloadsZipDownloadIdContentQueryKey>
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
      ...getZipDownloadsZipDownloadIdContentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getZipDownloadsZipDownloadIdStatusQueryKey(
  args: InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>,
) {
  return ['zip_downloads', '/zip_downloads/:zip_download_id/status', args] as const
}

export function getZipDownloadsZipDownloadIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getZipDownloadsZipDownloadIdStatusQueryKey>
  >({
    queryKey: getZipDownloadsZipDownloadIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.zip_downloads[':zip_download_id'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useZipDownloadsZipDownloadIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getZipDownloadsZipDownloadIdStatusQueryKey>
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
      ...getZipDownloadsZipDownloadIdStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseZipDownloadsZipDownloadIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getZipDownloadsZipDownloadIdStatusQueryKey>
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
      ...getZipDownloadsZipDownloadIdStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSignRequestsSignRequestIdCancelMutationKey() {
  return ['sign_requests', '/sign_requests/:sign_request_id/cancel', 'POST'] as const
}

export function getPostSignRequestsSignRequestIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sign_requests)[':sign_request_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sign_requests)[':sign_request_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSignRequestsSignRequestIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sign_requests)[':sign_request_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.sign_requests[':sign_request_id'].cancel.$post(args, options))
    },
  })
}

export function usePostSignRequestsSignRequestIdCancel<
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
                ReturnType<(typeof client.sign_requests)[':sign_request_id']['cancel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sign_requests)[':sign_request_id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSignRequestsSignRequestIdCancelMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSignRequestsSignRequestIdResendMutationKey() {
  return ['sign_requests', '/sign_requests/:sign_request_id/resend', 'POST'] as const
}

export function getPostSignRequestsSignRequestIdResendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sign_requests)[':sign_request_id']['resend']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sign_requests)[':sign_request_id']['resend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSignRequestsSignRequestIdResendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sign_requests)[':sign_request_id']['resend']['$post']>,
    ) {
      return parseResponse(client.sign_requests[':sign_request_id'].resend.$post(args, options))
    },
  })
}

export function usePostSignRequestsSignRequestIdResend<
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
                ReturnType<(typeof client.sign_requests)[':sign_request_id']['resend']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sign_requests)[':sign_request_id']['resend']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSignRequestsSignRequestIdResendMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSignRequestsSignRequestIdQueryKey(
  args: InferRequestType<(typeof client.sign_requests)[':sign_request_id']['$get']>,
) {
  return ['sign_requests', '/sign_requests/:sign_request_id', args] as const
}

export function getSignRequestsSignRequestIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sign_requests)[':sign_request_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sign_requests)[':sign_request_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sign_requests)[':sign_request_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSignRequestsSignRequestIdQueryKey>
  >({
    queryKey: getSignRequestsSignRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sign_requests[':sign_request_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSignRequestsSignRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sign_requests)[':sign_request_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sign_requests)[':sign_request_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sign_requests)[':sign_request_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSignRequestsSignRequestIdQueryKey>
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
      ...getSignRequestsSignRequestIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSignRequestsSignRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sign_requests)[':sign_request_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sign_requests)[':sign_request_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sign_requests)[':sign_request_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSignRequestsSignRequestIdQueryKey>
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
      ...getSignRequestsSignRequestIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSignRequestsQueryKey(args: InferRequestType<typeof client.sign_requests.$get>) {
  return ['sign_requests', '/sign_requests', args] as const
}

export function getSignRequestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_requests.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sign_requests.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_requests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSignRequestsQueryKey>
  >({
    queryKey: getSignRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sign_requests.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSignRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sign_requests.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_requests.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSignRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSignRequestsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSignRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sign_requests.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_requests.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSignRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSignRequestsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSignRequestsMutationKey() {
  return ['sign_requests', '/sign_requests', 'POST'] as const
}

export function getPostSignRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_requests.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sign_requests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignRequestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sign_requests.$post>) {
      return parseResponse(client.sign_requests.$post(args, options))
    },
  })
}

export function usePostSignRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_requests.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sign_requests.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSignRequestsMutationOptions<TError, TOnMutateResult>(
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

export function useWorkflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.workflows.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWorkflowsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWorkflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.workflows.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWorkflowsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostWorkflowsWorkflowIdStartMutationKey() {
  return ['workflows', '/workflows/:workflow_id/start', 'POST'] as const
}

export function getPostWorkflowsWorkflowIdStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['start']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.workflows)[':workflow_id']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkflowsWorkflowIdStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workflows)[':workflow_id']['start']['$post']>,
    ) {
      return parseResponse(client.workflows[':workflow_id'].start.$post(args, options))
    },
  })
}

export function usePostWorkflowsWorkflowIdStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['start']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.workflows)[':workflow_id']['start']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkflowsWorkflowIdStartMutationOptions<TError, TOnMutateResult>(
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

export function getSignTemplatesQueryKey(
  args: InferRequestType<typeof client.sign_templates.$get>,
) {
  return ['sign_templates', '/sign_templates', args] as const
}

export function getSignTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sign_templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSignTemplatesQueryKey>
  >({
    queryKey: getSignTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sign_templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSignTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sign_templates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSignTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSignTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSignTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sign_templates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSignTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSignTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSignTemplatesTemplateIdQueryKey(
  args: InferRequestType<(typeof client.sign_templates)[':template_id']['$get']>,
) {
  return ['sign_templates', '/sign_templates/:template_id', args] as const
}

export function getSignTemplatesTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sign_templates)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sign_templates)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sign_templates)[':template_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSignTemplatesTemplateIdQueryKey>
  >({
    queryKey: getSignTemplatesTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sign_templates[':template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSignTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sign_templates)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sign_templates)[':template_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sign_templates)[':template_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSignTemplatesTemplateIdQueryKey>
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
      ...getSignTemplatesTemplateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSignTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sign_templates)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sign_templates)[':template_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sign_templates)[':template_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSignTemplatesTemplateIdQueryKey>
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
      ...getSignTemplatesTemplateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getIntegrationMappingsSlackQueryKey(
  args: InferRequestType<typeof client.integration_mappings.slack.$get>,
) {
  return ['integration_mappings', '/integration_mappings/slack', args] as const
}

export function getIntegrationMappingsSlackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.slack.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.integration_mappings.slack.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.slack.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationMappingsSlackQueryKey>
  >({
    queryKey: getIntegrationMappingsSlackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integration_mappings.slack.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntegrationMappingsSlack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.slack.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.integration_mappings.slack.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.slack.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationMappingsSlackQueryKey>
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
      ...getIntegrationMappingsSlackQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntegrationMappingsSlack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.slack.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.integration_mappings.slack.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.slack.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationMappingsSlackQueryKey>
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
      ...getIntegrationMappingsSlackQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostIntegrationMappingsSlackMutationKey() {
  return ['integration_mappings', '/integration_mappings/slack', 'POST'] as const
}

export function getPostIntegrationMappingsSlackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.slack.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.integration_mappings.slack.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegrationMappingsSlackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.integration_mappings.slack.$post>) {
      return parseResponse(client.integration_mappings.slack.$post(args, options))
    },
  })
}

export function usePostIntegrationMappingsSlack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.integration_mappings.slack.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.integration_mappings.slack.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIntegrationMappingsSlackMutationOptions<TError, TOnMutateResult>(
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

export function getPutIntegrationMappingsSlackIntegrationMappingIdMutationKey() {
  return [
    'integration_mappings',
    '/integration_mappings/slack/:integration_mapping_id',
    'PUT',
  ] as const
}

export function getPutIntegrationMappingsSlackIntegrationMappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.integration_mappings.slack)[':integration_mapping_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIntegrationMappingsSlackIntegrationMappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.integration_mappings.slack)[':integration_mapping_id']['$put']
      >,
    ) {
      return parseResponse(
        client.integration_mappings.slack[':integration_mapping_id'].$put(args, options),
      )
    },
  })
}

export function usePutIntegrationMappingsSlackIntegrationMappingId<
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
                  (typeof client.integration_mappings.slack)[':integration_mapping_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.integration_mappings.slack)[':integration_mapping_id']['$put']
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
  const mutationDefaults = getPutIntegrationMappingsSlackIntegrationMappingIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteIntegrationMappingsSlackIntegrationMappingIdMutationKey() {
  return [
    'integration_mappings',
    '/integration_mappings/slack/:integration_mapping_id',
    'DELETE',
  ] as const
}

export function getDeleteIntegrationMappingsSlackIntegrationMappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.integration_mappings.slack)[':integration_mapping_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIntegrationMappingsSlackIntegrationMappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.integration_mappings.slack)[':integration_mapping_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.integration_mappings.slack[':integration_mapping_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIntegrationMappingsSlackIntegrationMappingId<
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
                    (typeof client.integration_mappings.slack)[':integration_mapping_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.integration_mappings.slack)[':integration_mapping_id']['$delete']
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
  const mutationDefaults = getDeleteIntegrationMappingsSlackIntegrationMappingIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIntegrationMappingsTeamsQueryKey(
  args: InferRequestType<typeof client.integration_mappings.teams.$get>,
) {
  return ['integration_mappings', '/integration_mappings/teams', args] as const
}

export function getIntegrationMappingsTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.teams.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.integration_mappings.teams.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.teams.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationMappingsTeamsQueryKey>
  >({
    queryKey: getIntegrationMappingsTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integration_mappings.teams.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntegrationMappingsTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.teams.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.integration_mappings.teams.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.teams.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationMappingsTeamsQueryKey>
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
      ...getIntegrationMappingsTeamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntegrationMappingsTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.teams.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.integration_mappings.teams.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.teams.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationMappingsTeamsQueryKey>
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
      ...getIntegrationMappingsTeamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostIntegrationMappingsTeamsMutationKey() {
  return ['integration_mappings', '/integration_mappings/teams', 'POST'] as const
}

export function getPostIntegrationMappingsTeamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.teams.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.integration_mappings.teams.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegrationMappingsTeamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.integration_mappings.teams.$post>) {
      return parseResponse(client.integration_mappings.teams.$post(args, options))
    },
  })
}

export function usePostIntegrationMappingsTeams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.integration_mappings.teams.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.integration_mappings.teams.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIntegrationMappingsTeamsMutationOptions<TError, TOnMutateResult>(
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

export function getPutIntegrationMappingsTeamsIntegrationMappingIdMutationKey() {
  return [
    'integration_mappings',
    '/integration_mappings/teams/:integration_mapping_id',
    'PUT',
  ] as const
}

export function getPutIntegrationMappingsTeamsIntegrationMappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.integration_mappings.teams)[':integration_mapping_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIntegrationMappingsTeamsIntegrationMappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.integration_mappings.teams)[':integration_mapping_id']['$put']
      >,
    ) {
      return parseResponse(
        client.integration_mappings.teams[':integration_mapping_id'].$put(args, options),
      )
    },
  })
}

export function usePutIntegrationMappingsTeamsIntegrationMappingId<
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
                  (typeof client.integration_mappings.teams)[':integration_mapping_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.integration_mappings.teams)[':integration_mapping_id']['$put']
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
  const mutationDefaults = getPutIntegrationMappingsTeamsIntegrationMappingIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteIntegrationMappingsTeamsIntegrationMappingIdMutationKey() {
  return [
    'integration_mappings',
    '/integration_mappings/teams/:integration_mapping_id',
    'DELETE',
  ] as const
}

export function getDeleteIntegrationMappingsTeamsIntegrationMappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.integration_mappings.teams)[':integration_mapping_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIntegrationMappingsTeamsIntegrationMappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.integration_mappings.teams)[':integration_mapping_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.integration_mappings.teams[':integration_mapping_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIntegrationMappingsTeamsIntegrationMappingId<
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
                    (typeof client.integration_mappings.teams)[':integration_mapping_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.integration_mappings.teams)[':integration_mapping_id']['$delete']
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
  const mutationDefaults = getDeleteIntegrationMappingsTeamsIntegrationMappingIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAiAskMutationKey() {
  return ['ai', '/ai/ask', 'POST'] as const
}

export function getPostAiAskMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.ask.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.ai.ask.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAiAskMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ai.ask.$post>) {
      return parseResponse(client.ai.ask.$post(args, options))
    },
  })
}

export function usePostAiAsk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.ask.$post>>>>>
        | undefined,
        TError,
        InferRequestType<typeof client.ai.ask.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAiAskMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAiTextGenMutationKey() {
  return ['ai', '/ai/text_gen', 'POST'] as const
}

export function getPostAiTextGenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.text_gen.$post>>>>>,
    TError,
    InferRequestType<typeof client.ai.text_gen.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAiTextGenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ai.text_gen.$post>) {
      return parseResponse(client.ai.text_gen.$post(args, options))
    },
  })
}

export function usePostAiTextGen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.text_gen.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ai.text_gen.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAiTextGenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAiAgentDefaultQueryKey(
  args: InferRequestType<typeof client.ai_agent_default.$get>,
) {
  return ['ai_agent_default', '/ai_agent_default', args] as const
}

export function getAiAgentDefaultQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agent_default.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ai_agent_default.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agent_default.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAiAgentDefaultQueryKey>
  >({
    queryKey: getAiAgentDefaultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ai_agent_default.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAiAgentDefault<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agent_default.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ai_agent_default.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agent_default.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAiAgentDefaultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAiAgentDefaultQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAiAgentDefault<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agent_default.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ai_agent_default.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agent_default.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAiAgentDefaultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAiAgentDefaultQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAiExtractMutationKey() {
  return ['ai', '/ai/extract', 'POST'] as const
}

export function getPostAiExtractMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.extract.$post>>>>>,
    TError,
    InferRequestType<typeof client.ai.extract.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAiExtractMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ai.extract.$post>) {
      return parseResponse(client.ai.extract.$post(args, options))
    },
  })
}

export function usePostAiExtract<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.extract.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ai.extract.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAiExtractMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAiExtractStructuredMutationKey() {
  return ['ai', '/ai/extract_structured', 'POST'] as const
}

export function getPostAiExtractStructuredMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ai.extract_structured.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ai.extract_structured.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAiExtractStructuredMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ai.extract_structured.$post>) {
      return parseResponse(client.ai.extract_structured.$post(args, options))
    },
  })
}

export function usePostAiExtractStructured<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ai.extract_structured.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ai.extract_structured.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAiExtractStructuredMutationOptions<TError, TOnMutateResult>(
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

export function getAiAgentsQueryKey(args: InferRequestType<typeof client.ai_agents.$get>) {
  return ['ai_agents', '/ai_agents', args] as const
}

export function getAiAgentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ai_agents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAiAgentsQueryKey>
  >({
    queryKey: getAiAgentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ai_agents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAiAgents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ai_agents.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAiAgentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAiAgentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAiAgents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ai_agents.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAiAgentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAiAgentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAiAgentsMutationKey() {
  return ['ai_agents', '/ai_agents', 'POST'] as const
}

export function getPostAiAgentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agents.$post>>>>>,
    TError,
    InferRequestType<typeof client.ai_agents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAiAgentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ai_agents.$post>) {
      return parseResponse(client.ai_agents.$post(args, options))
    },
  })
}

export function usePostAiAgents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agents.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ai_agents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAiAgentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAiAgentsAgentIdQueryKey(
  args: InferRequestType<(typeof client.ai_agents)[':agent_id']['$get']>,
) {
  return ['ai_agents', '/ai_agents/:agent_id', args] as const
}

export function getAiAgentsAgentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ai_agents)[':agent_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ai_agents)[':agent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ai_agents)[':agent_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAiAgentsAgentIdQueryKey>
  >({
    queryKey: getAiAgentsAgentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ai_agents[':agent_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAiAgentsAgentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ai_agents)[':agent_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ai_agents)[':agent_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ai_agents)[':agent_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAiAgentsAgentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAiAgentsAgentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAiAgentsAgentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ai_agents)[':agent_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ai_agents)[':agent_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ai_agents)[':agent_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAiAgentsAgentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAiAgentsAgentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAiAgentsAgentIdMutationKey() {
  return ['ai_agents', '/ai_agents/:agent_id', 'PUT'] as const
}

export function getPutAiAgentsAgentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ai_agents)[':agent_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ai_agents)[':agent_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAiAgentsAgentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ai_agents)[':agent_id']['$put']>) {
      return parseResponse(client.ai_agents[':agent_id'].$put(args, options))
    },
  })
}

export function usePutAiAgentsAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ai_agents)[':agent_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ai_agents)[':agent_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAiAgentsAgentIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAiAgentsAgentIdMutationKey() {
  return ['ai_agents', '/ai_agents/:agent_id', 'DELETE'] as const
}

export function getDeleteAiAgentsAgentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai_agents)[':agent_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ai_agents)[':agent_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAiAgentsAgentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ai_agents)[':agent_id']['$delete']>) {
      return parseResponse(client.ai_agents[':agent_id'].$delete(args, options))
    },
  })
}

export function useDeleteAiAgentsAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai_agents)[':agent_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.ai_agents)[':agent_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAiAgentsAgentIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostMetadataTaxonomiesMutationKey() {
  return ['metadata_taxonomies', '/metadata_taxonomies', 'POST'] as const
}

export function getPostMetadataTaxonomiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata_taxonomies.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.metadata_taxonomies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataTaxonomiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.metadata_taxonomies.$post>) {
      return parseResponse(client.metadata_taxonomies.$post(args, options))
    },
  })
}

export function usePostMetadataTaxonomies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metadata_taxonomies.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.metadata_taxonomies.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetadataTaxonomiesMutationOptions<TError, TOnMutateResult>(
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

export function getMetadataTaxonomiesNamespaceQueryKey(
  args: InferRequestType<(typeof client.metadata_taxonomies)[':namespace']['$get']>,
) {
  return ['metadata_taxonomies', '/metadata_taxonomies/:namespace', args] as const
}

export function getMetadataTaxonomiesNamespaceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata_taxonomies)[':namespace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metadata_taxonomies)[':namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata_taxonomies)[':namespace']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataTaxonomiesNamespaceQueryKey>
  >({
    queryKey: getMetadataTaxonomiesNamespaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata_taxonomies[':namespace'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMetadataTaxonomiesNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata_taxonomies)[':namespace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metadata_taxonomies)[':namespace']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metadata_taxonomies)[':namespace']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataTaxonomiesNamespaceQueryKey>
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
      ...getMetadataTaxonomiesNamespaceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMetadataTaxonomiesNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata_taxonomies)[':namespace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metadata_taxonomies)[':namespace']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metadata_taxonomies)[':namespace']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataTaxonomiesNamespaceQueryKey>
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
      ...getMetadataTaxonomiesNamespaceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMetadataTaxonomiesNamespaceTaxonomyKeyQueryKey(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$get']
  >,
) {
  return ['metadata_taxonomies', '/metadata_taxonomies/:namespace/:taxonomy_key', args] as const
}

export function getMetadataTaxonomiesNamespaceTaxonomyKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataTaxonomiesNamespaceTaxonomyKeyQueryKey>
  >({
    queryKey: getMetadataTaxonomiesNamespaceTaxonomyKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata_taxonomies[':namespace'][':taxonomy_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMetadataTaxonomiesNamespaceTaxonomyKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataTaxonomiesNamespaceTaxonomyKeyQueryKey>
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
      ...getMetadataTaxonomiesNamespaceTaxonomyKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMetadataTaxonomiesNamespaceTaxonomyKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataTaxonomiesNamespaceTaxonomyKeyQueryKey>
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
      ...getMetadataTaxonomiesNamespaceTaxonomyKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMetadataTaxonomiesNamespaceTaxonomyKeyMutationKey() {
  return ['metadata_taxonomies', '/metadata_taxonomies/:namespace/:taxonomy_key', 'DELETE'] as const
}

export function getDeleteMetadataTaxonomiesNamespaceTaxonomyKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMetadataTaxonomiesNamespaceTaxonomyKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$delete']
      >,
    ) {
      return parseResponse(
        client.metadata_taxonomies[':namespace'][':taxonomy_key'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMetadataTaxonomiesNamespaceTaxonomyKey<
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
                    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$delete']
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
  const mutationDefaults = getDeleteMetadataTaxonomiesNamespaceTaxonomyKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchMetadataTaxonomiesNamespaceTaxonomyKeyMutationKey() {
  return ['metadata_taxonomies', '/metadata_taxonomies/:namespace/:taxonomy_key', 'PATCH'] as const
}

export function getPatchMetadataTaxonomiesNamespaceTaxonomyKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMetadataTaxonomiesNamespaceTaxonomyKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$patch']
      >,
    ) {
      return parseResponse(
        client.metadata_taxonomies[':namespace'][':taxonomy_key'].$patch(args, options),
      )
    },
  })
}

export function usePatchMetadataTaxonomiesNamespaceTaxonomyKey<
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
                  (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$patch']
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
  const mutationDefaults = getPatchMetadataTaxonomiesNamespaceTaxonomyKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsMutationKey() {
  return [
    'metadata_taxonomies',
    '/metadata_taxonomies/:namespace/:taxonomy_key/levels',
    'POST',
  ] as const
}

export function getPostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels']['$post']
      >,
    ) {
      return parseResponse(
        client.metadata_taxonomies[':namespace'][':taxonomy_key'].levels.$post(args, options),
      )
    },
  })
}

export function usePostMetadataTaxonomiesNamespaceTaxonomyKeyLevels<
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
                  (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels']['$post']
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
  const mutationDefaults = getPostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchMetadataTaxonomiesNamespaceTaxonomyKeyLevelsLevelIndexMutationKey() {
  return [
    'metadata_taxonomies',
    '/metadata_taxonomies/:namespace/:taxonomy_key/levels/:level_index',
    'PATCH',
  ] as const
}

export function getPatchMetadataTaxonomiesNamespaceTaxonomyKeyLevelsLevelIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels'][':level_index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMetadataTaxonomiesNamespaceTaxonomyKeyLevelsLevelIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels'][':level_index']['$patch']
      >,
    ) {
      return parseResponse(
        client.metadata_taxonomies[':namespace'][':taxonomy_key'].levels[':level_index'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchMetadataTaxonomiesNamespaceTaxonomyKeyLevelsLevelIndex<
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
                  (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels'][':level_index']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels'][':level_index']['$patch']
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
    getPatchMetadataTaxonomiesNamespaceTaxonomyKeyLevelsLevelIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsAppendMutationKey() {
  return [
    'metadata_taxonomies',
    '/metadata_taxonomies/:namespace/:taxonomy_key/levels:append',
    'POST',
  ] as const
}

export function getPostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsAppendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels:append']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsAppendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels:append']['$post']
      >,
    ) {
      return parseResponse(
        client.metadata_taxonomies[':namespace'][':taxonomy_key']['levels:append'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsAppend<
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
                  (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels:append']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels:append']['$post']
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
  const mutationDefaults = getPostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsAppendMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsTrimMutationKey() {
  return [
    'metadata_taxonomies',
    '/metadata_taxonomies/:namespace/:taxonomy_key/levels:trim',
    'POST',
  ] as const
}

export function getPostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsTrimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels:trim']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsTrimMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels:trim']['$post']
      >,
    ) {
      return parseResponse(
        client.metadata_taxonomies[':namespace'][':taxonomy_key']['levels:trim'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsTrim<
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
                  (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels:trim']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels:trim']['$post']
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
  const mutationDefaults = getPostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsTrimMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMetadataTaxonomiesNamespaceTaxonomyKeyNodesQueryKey(
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

export function getMetadataTaxonomiesNamespaceTaxonomyKeyNodesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMetadataTaxonomiesNamespaceTaxonomyKeyNodesQueryKey>
  >({
    queryKey: getMetadataTaxonomiesNamespaceTaxonomyKeyNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata_taxonomies[':namespace'][':taxonomy_key'].nodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMetadataTaxonomiesNamespaceTaxonomyKeyNodes<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMetadataTaxonomiesNamespaceTaxonomyKeyNodesQueryKey>
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
      ...getMetadataTaxonomiesNamespaceTaxonomyKeyNodesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMetadataTaxonomiesNamespaceTaxonomyKeyNodes<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMetadataTaxonomiesNamespaceTaxonomyKeyNodesQueryKey>
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
      ...getMetadataTaxonomiesNamespaceTaxonomyKeyNodesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMetadataTaxonomiesNamespaceTaxonomyKeyNodesMutationKey() {
  return [
    'metadata_taxonomies',
    '/metadata_taxonomies/:namespace/:taxonomy_key/nodes',
    'POST',
  ] as const
}

export function getPostMetadataTaxonomiesNamespaceTaxonomyKeyNodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataTaxonomiesNamespaceTaxonomyKeyNodesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes']['$post']
      >,
    ) {
      return parseResponse(
        client.metadata_taxonomies[':namespace'][':taxonomy_key'].nodes.$post(args, options),
      )
    },
  })
}

export function usePostMetadataTaxonomiesNamespaceTaxonomyKeyNodes<
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
                  (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes']['$post']
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
  const mutationDefaults = getPostMetadataTaxonomiesNamespaceTaxonomyKeyNodesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdQueryKey(
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

export function getMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdQueryKey>
  >({
    queryKey: getMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata_taxonomies[':namespace'][':taxonomy_key'].nodes[':node_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdQueryKey>
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
      ...getMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdQueryKey>
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
      ...getMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdMutationKey() {
  return [
    'metadata_taxonomies',
    '/metadata_taxonomies/:namespace/:taxonomy_key/nodes/:node_id',
    'DELETE',
  ] as const
}

export function getDeleteMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.metadata_taxonomies[':namespace'][':taxonomy_key'].nodes[':node_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeId<
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
                    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$delete']
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
    getDeleteMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdMutationKey() {
  return [
    'metadata_taxonomies',
    '/metadata_taxonomies/:namespace/:taxonomy_key/nodes/:node_id',
    'PATCH',
  ] as const
}

export function getPatchMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.metadata_taxonomies[':namespace'][':taxonomy_key'].nodes[':node_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeId<
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
                  (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$patch']
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
  const mutationDefaults = getPatchMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsQueryKey(
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

export function getMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metadata_templates)[':namespace'][':template_key']['fields'][':field_key']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsQueryKey>
  >({
    queryKey: getMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata_templates[':namespace'][':template_key'].fields[':field_key'].options.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metadata_templates)[':namespace'][':template_key']['fields'][':field_key']['options']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsQueryKey>
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
      ...getMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metadata_templates)[':namespace'][':template_key']['fields'][':field_key']['options']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsQueryKey>
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
      ...getMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
