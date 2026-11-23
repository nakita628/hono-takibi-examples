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

export function getMetadataQueryIndicesKey() {
  return ['metadata_query_indices'] as const
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

export function getAuthorizeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorize.$get>>,
) {
  return ['authorize', '/authorize', toValue(args)] as const
}

export function getAuthorizeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorize.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthorizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorize.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorize.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>
          >,
          ReturnType<typeof getAuthorizeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthorizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthorizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authorize.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCollaborationWhitelistEntriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.collaboration_whitelist_entries.$get>>,
) {
  return [
    'collaboration_whitelist_entries',
    '/collaboration_whitelist_entries',
    toValue(args),
  ] as const
}

export function getCollaborationWhitelistEntriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.collaboration_whitelist_entries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollaborationWhitelistEntriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collaboration_whitelist_entries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollaborationWhitelistEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.collaboration_whitelist_entries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.collaboration_whitelist_entries.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.collaboration_whitelist_entries.$get>>
              >
            >
          >,
          ReturnType<typeof getCollaborationWhitelistEntriesQueryKey>
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
          Awaited<ReturnType<typeof client.collaboration_whitelist_entries.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollaborationWhitelistEntriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollaborationWhitelistEntriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collaboration_whitelist_entries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$get']
    >
  >,
) {
  return [
    'collaboration_whitelist_entries',
    '/collaboration_whitelist_entries/:collaboration_whitelist_entry_id',
    toValue(args),
  ] as const
}

export function getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collaboration_whitelist_entries[':collaboration_whitelist_entry_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$get']
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
                    (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$get']
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
                    (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdQueryKey>
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
              (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.collaboration_whitelist_entries[':collaboration_whitelist_entry_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.collaboration_whitelist_exempt_targets.$get>
  >,
) {
  return [
    'collaboration_whitelist_exempt_targets',
    '/collaboration_whitelist_exempt_targets',
    toValue(args),
  ] as const
}

export function getCollaborationWhitelistExemptTargetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.collaboration_whitelist_exempt_targets.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollaborationWhitelistExemptTargetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collaboration_whitelist_exempt_targets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.collaboration_whitelist_exempt_targets.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.collaboration_whitelist_exempt_targets.$get>>
              >
            >
          >,
          ReturnType<typeof getCollaborationWhitelistExemptTargetsQueryKey>
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
          Awaited<ReturnType<typeof client.collaboration_whitelist_exempt_targets.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollaborationWhitelistExemptTargetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollaborationWhitelistExemptTargetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collaboration_whitelist_exempt_targets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$get']
    >
  >,
) {
  return [
    'collaboration_whitelist_exempt_targets',
    '/collaboration_whitelist_exempt_targets/:collaboration_whitelist_exempt_target_id',
    toValue(args),
  ] as const
}

export function getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collaboration_whitelist_exempt_targets[
          ':collaboration_whitelist_exempt_target_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$get']
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
                    (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$get']
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
                    (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.collaboration_whitelist_exempt_targets[
            ':collaboration_whitelist_exempt_target_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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

export function getCollaborationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.collaborations.$get>>,
) {
  return ['collaborations', '/collaborations', toValue(args)] as const
}

export function getCollaborationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.collaborations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollaborationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collaborations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollaborations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.collaborations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborations.$get>>>>
          >,
          ReturnType<typeof getCollaborationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCollaborationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollaborationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collaborations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.collaborations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.collaborations.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getCollaborationsCollaborationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collaborations)[':collaboration_id']['$get']>
  >,
) {
  return ['collaborations', '/collaborations/:collaboration_id', toValue(args)] as const
}

export function getCollaborationsCollaborationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collaborations)[':collaboration_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollaborationsCollaborationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collaborations[':collaboration_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collaborations)[':collaboration_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collaborations)[':collaboration_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCollaborationsCollaborationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.collaborations)[':collaboration_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollaborationsCollaborationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollaborationsCollaborationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collaborations[':collaboration_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.collaborations)[':collaboration_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.collaborations)[':collaboration_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getCollectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.collections.$get>>,
) {
  return ['collections', '/collections', toValue(args)] as const
}

export function getCollectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.collections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.collections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
          >,
          ReturnType<typeof getCollectionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCollectionsCollectionIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_id']['items']['$get']>
  >,
) {
  return ['collections', '/collections/:collection_id/items', toValue(args)] as const
}

export function getCollectionsCollectionIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_id']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_id']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection_id']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionIdItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.collections)[':collection_id']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.comments.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getCommentsCommentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':comment_id']['$get']>>,
) {
  return ['comments', '/comments/:comment_id', toValue(args)] as const
}

export function getCommentsCommentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':comment_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommentsCommentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comments[':comment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommentsCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':comment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':comment_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.comments)[':comment_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCommentsCommentIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':comment_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsCommentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommentsCommentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comments[':comment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getDevicePinnersDevicePinnerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.device_pinners)[':device_pinner_id']['$get']>
  >,
) {
  return ['device_pinners', '/device_pinners/:device_pinner_id', toValue(args)] as const
}

export function getDevicePinnersDevicePinnerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.device_pinners)[':device_pinner_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicePinnersDevicePinnerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.device_pinners[':device_pinner_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.device_pinners)[':device_pinner_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.device_pinners)[':device_pinner_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDevicePinnersDevicePinnerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.device_pinners)[':device_pinner_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicePinnersDevicePinnerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicePinnersDevicePinnerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.device_pinners[':device_pinner_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.device_pinners)[':device_pinner_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.device_pinners)[':device_pinner_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>
  >,
) {
  return ['enterprises', '/enterprises/:enterprise_id/device_pinners', toValue(args)] as const
}

export function getEnterprisesEnterpriseIdDevicePinnersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnterprisesEnterpriseIdDevicePinnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enterprises[':enterprise_id'].device_pinners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>
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
                    (typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']
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
                    (typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEnterprisesEnterpriseIdDevicePinnersQueryKey>
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
            ReturnType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesEnterpriseIdDevicePinnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnterprisesEnterpriseIdDevicePinnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enterprises[':enterprise_id'].device_pinners.$get(toValue(args), {
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$options>>>>
          >,
          TError,
          void,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getFileRequestsFileRequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.file_requests)[':file_request_id']['$get']>
  >,
) {
  return ['file_requests', '/file_requests/:file_request_id', toValue(args)] as const
}

export function getFileRequestsFileRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.file_requests)[':file_request_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileRequestsFileRequestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.file_requests[':file_request_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.file_requests)[':file_request_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFileRequestsFileRequestIdQueryKey>
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
          Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileRequestsFileRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileRequestsFileRequestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.file_requests[':file_request_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getFileVersionLegalHoldsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.file_version_legal_holds.$get>>,
) {
  return ['file_version_legal_holds', '/file_version_legal_holds', toValue(args)] as const
}

export function getFileVersionLegalHoldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.file_version_legal_holds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileVersionLegalHoldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.file_version_legal_holds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFileVersionLegalHolds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.file_version_legal_holds.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.file_version_legal_holds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.file_version_legal_holds.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.file_version_legal_holds.$get>>>
            >
          >,
          ReturnType<typeof getFileVersionLegalHoldsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.file_version_legal_holds.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileVersionLegalHoldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileVersionLegalHoldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.file_version_legal_holds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFileVersionLegalHoldsFileVersionLegalHoldIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.file_version_legal_holds)[':file_version_legal_hold_id']['$get']
    >
  >,
) {
  return [
    'file_version_legal_holds',
    '/file_version_legal_holds/:file_version_legal_hold_id',
    toValue(args),
  ] as const
}

export function getFileVersionLegalHoldsFileVersionLegalHoldIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.file_version_legal_holds)[':file_version_legal_hold_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileVersionLegalHoldsFileVersionLegalHoldIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.file_version_legal_holds[':file_version_legal_hold_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.file_version_legal_holds)[':file_version_legal_hold_id']['$get']
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
                    (typeof client.file_version_legal_holds)[':file_version_legal_hold_id']['$get']
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
                    (typeof client.file_version_legal_holds)[':file_version_legal_hold_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFileVersionLegalHoldsFileVersionLegalHoldIdQueryKey>
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
              (typeof client.file_version_legal_holds)[':file_version_legal_hold_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileVersionLegalHoldsFileVersionLegalHoldIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileVersionLegalHoldsFileVersionLegalHoldIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.file_version_legal_holds[':file_version_legal_hold_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFileVersionRetentionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.file_version_retentions.$get>>,
) {
  return ['file_version_retentions', '/file_version_retentions', toValue(args)] as const
}

export function getFileVersionRetentionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.file_version_retentions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileVersionRetentionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.file_version_retentions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFileVersionRetentions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.file_version_retentions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.file_version_retentions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.file_version_retentions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.file_version_retentions.$get>>>
            >
          >,
          ReturnType<typeof getFileVersionRetentionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.file_version_retentions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileVersionRetentionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileVersionRetentionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.file_version_retentions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFileVersionRetentionsFileVersionRetentionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.file_version_retentions)[':file_version_retention_id']['$get']>
  >,
) {
  return [
    'file_version_retentions',
    '/file_version_retentions/:file_version_retention_id',
    toValue(args),
  ] as const
}

export function getFileVersionRetentionsFileVersionRetentionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.file_version_retentions)[':file_version_retention_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileVersionRetentionsFileVersionRetentionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.file_version_retentions[':file_version_retention_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.file_version_retentions)[':file_version_retention_id']['$get']>
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
                    (typeof client.file_version_retentions)[':file_version_retention_id']['$get']
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
                    (typeof client.file_version_retentions)[':file_version_retention_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFileVersionRetentionsFileVersionRetentionIdQueryKey>
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
              (typeof client.file_version_retentions)[':file_version_retention_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileVersionRetentionsFileVersionRetentionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileVersionRetentionsFileVersionRetentionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.file_version_retentions[':file_version_retention_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.content.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.files.content.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getFilesUploadSessionsUploadSessionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>
  >,
) {
  return ['files', '/files/upload_sessions/:upload_session_id', toValue(args)] as const
}

export function getFilesUploadSessionsUploadSessionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesUploadSessionsUploadSessionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files.upload_sessions[':upload_session_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFilesUploadSessionsUploadSessionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesUploadSessionsUploadSessionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesUploadSessionsUploadSessionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files.upload_sessions[':upload_session_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.files.upload_sessions)[':upload_session_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getFilesUploadSessionsUploadSessionIdPartsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']>
  >,
) {
  return ['files', '/files/upload_sessions/:upload_session_id/parts', toValue(args)] as const
}

export function getFilesUploadSessionsUploadSessionIdPartsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesUploadSessionsUploadSessionIdPartsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files.upload_sessions[':upload_session_id'].parts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']>
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
                    (typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']
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
                    (typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFilesUploadSessionsUploadSessionIdPartsQueryKey>
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
            ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesUploadSessionsUploadSessionIdPartsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesUploadSessionsUploadSessionIdPartsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files.upload_sessions[':upload_session_id'].parts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilesFileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['files', '/files/:file_id', keyArgs] as const
}

export function getFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
            >
          >,
          ReturnType<typeof getFilesFileIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getFilesFileIdGetSharedLinkQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':file_id#get_shared_link']['$get']>
  >,
) {
  return ['files', '/files/:file_id#get_shared_link', toValue(args)] as const
}

export function getFilesFileIdGetSharedLinkQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':file_id#get_shared_link']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdGetSharedLinkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id#get_shared_link'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':file_id#get_shared_link']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id#get_shared_link']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdGetSharedLinkQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':file_id#get_shared_link']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdGetSharedLinkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdGetSharedLinkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id#get_shared_link'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getFilesFileIdCollaborationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':file_id']['collaborations']['$get']>
  >,
) {
  return ['files', '/files/:file_id/collaborations', toValue(args)] as const
}

export function getFilesFileIdCollaborationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':file_id']['collaborations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdCollaborationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].collaborations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':file_id']['collaborations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['collaborations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdCollaborationsQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':file_id']['collaborations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdCollaborationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdCollaborationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].collaborations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilesFileIdCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['comments']['$get']>>,
) {
  return ['files', '/files/:file_id/comments', toValue(args)] as const
}

export function getFilesFileIdCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['comments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['comments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdCommentsQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':file_id']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilesFileIdContentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['content']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['files', '/files/:file_id/content', keyArgs] as const
}

export function getFilesFileIdContentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['content']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['content']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdContentQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getFilesFileIdMetadataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['metadata']['$get']>>,
) {
  return ['files', '/files/:file_id/metadata', toValue(args)] as const
}

export function getFilesFileIdMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['metadata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['metadata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdMetadataQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':file_id']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
    >
  >,
) {
  return [
    'files',
    '/files/:file_id/metadata/enterprise/securityClassification-6VMVochwUWo',
    toValue(args),
  ] as const
}

export function getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
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
                    (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
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
                    (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey
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
              (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
      Extract<
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

export function getFilesFileIdMetadataGlobalBoxSkillsCardsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$get']
    >
  >,
) {
  return ['files', '/files/:file_id/metadata/global/boxSkillsCards', toValue(args)] as const
}

export function getFilesFileIdMetadataGlobalBoxSkillsCardsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdMetadataGlobalBoxSkillsCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].metadata.global.boxSkillsCards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$get']
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
                    (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$get']
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
                    (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFilesFileIdMetadataGlobalBoxSkillsCardsQueryKey>
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
              (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdMetadataGlobalBoxSkillsCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdMetadataGlobalBoxSkillsCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].metadata.global.boxSkillsCards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getFilesFileIdMetadataScopeTemplateKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$get']
    >
  >,
) {
  return ['files', '/files/:file_id/metadata/:scope/:template_key', toValue(args)] as const
}

export function getFilesFileIdMetadataScopeTemplateKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdMetadataScopeTemplateKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].metadata[':scope'][':template_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$get']
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
                    (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$get']
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
                    (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFilesFileIdMetadataScopeTemplateKeyQueryKey>
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
              (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdMetadataScopeTemplateKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdMetadataScopeTemplateKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].metadata[':scope'][':template_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getFilesFileIdTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['tasks']['$get']>>,
) {
  return ['files', '/files/:file_id/tasks', toValue(args)] as const
}

export function getFilesFileIdTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['tasks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].tasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['tasks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['tasks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdTasksQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':file_id']['tasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilesFileIdThumbnailExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':file_id']['thumbnail.{extension}']['$get']>
  >,
) {
  return ['files', '/files/:file_id/thumbnail.{extension}', toValue(args)] as const
}

export function getFilesFileIdThumbnailExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':file_id']['thumbnail.{extension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdThumbnailExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id']['thumbnail.{extension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':file_id']['thumbnail.{extension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.files)[':file_id']['thumbnail.{extension}']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFilesFileIdThumbnailExtensionQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':file_id']['thumbnail.{extension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdThumbnailExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdThumbnailExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id']['thumbnail.{extension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilesFileIdTrashQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['trash']['$get']>>,
) {
  return ['files', '/files/:file_id/trash', toValue(args)] as const
}

export function getFilesFileIdTrashQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['trash']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdTrashQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].trash.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileIdTrash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['trash']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['trash']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['trash']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdTrashQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':file_id']['trash']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdTrashQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdTrashQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].trash.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getFilesFileIdVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['versions']['$get']>>,
) {
  return ['files', '/files/:file_id/versions', toValue(args)] as const
}

export function getFilesFileIdVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['versions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['versions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.files)[':file_id']['versions']['current']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.files)[':file_id']['versions']['current']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getFilesFileIdVersionsFileVersionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>
  >,
) {
  return ['files', '/files/:file_id/versions/:file_version_id', toValue(args)] as const
}

export function getFilesFileIdVersionsFileVersionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdVersionsFileVersionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].versions[':file_version_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>
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
                    (typeof client.files)[':file_id']['versions'][':file_version_id']['$get']
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
                    (typeof client.files)[':file_id']['versions'][':file_version_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFilesFileIdVersionsFileVersionIdQueryKey>
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
            ReturnType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdVersionsFileVersionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdVersionsFileVersionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].versions[':file_version_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.files)[':file_id']['versions'][':file_version_id']['$put']
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getFilesFileIdWatermarkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['watermark']['$get']>>,
) {
  return ['files', '/files/:file_id/watermark', toValue(args)] as const
}

export function getFilesFileIdWatermarkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['watermark']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdWatermarkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].watermark.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['watermark']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['watermark']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdWatermarkQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':file_id']['watermark']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdWatermarkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdWatermarkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].watermark.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getFolderLocksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.folder_locks.$get>>,
) {
  return ['folder_locks', '/folder_locks', toValue(args)] as const
}

export function getFolderLocksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.folder_locks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFolderLocksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folder_locks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFolderLocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder_locks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.folder_locks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder_locks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder_locks.$get>>>>
          >,
          ReturnType<typeof getFolderLocksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder_locks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFolderLocksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFolderLocksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.folder_locks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder_locks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.folder_locks.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.folders.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getFoldersTrashItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.folders.trash.items.$get>>,
) {
  return ['folders', '/folders/trash/items', toValue(args)] as const
}

export function getFoldersTrashItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.folders.trash.items.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoldersTrashItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folders.trash.items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoldersTrashItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.trash.items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.folders.trash.items.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.folders.trash.items.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.folders.trash.items.$get>>>
            >
          >,
          ReturnType<typeof getFoldersTrashItemsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.trash.items.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersTrashItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoldersTrashItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.folders.trash.items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoldersFolderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.folders)[':folder_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['folders', '/folders/:folder_id', keyArgs] as const
}

export function getFoldersFolderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.folders)[':folder_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoldersFolderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folders[':folder_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoldersFolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.folders)[':folder_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoldersFolderIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoldersFolderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.folders[':folder_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.folders)[':folder_id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getFoldersFolderIdGetSharedLinkQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>
  >,
) {
  return ['folders', '/folders/:folder_id#get_shared_link', toValue(args)] as const
}

export function getFoldersFolderIdGetSharedLinkQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoldersFolderIdGetSharedLinkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folders[':folder_id#get_shared_link'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoldersFolderIdGetSharedLinkQueryKey>
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
          Awaited<ReturnType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdGetSharedLinkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoldersFolderIdGetSharedLinkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.folders[':folder_id#get_shared_link'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.folders)[':folder_id#remove_shared_link']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.folders)[':folder_id#remove_shared_link']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.folders)[':folder_id#update_shared_link']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.folders)[':folder_id#update_shared_link']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getFoldersFolderIdCollaborationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.folders)[':folder_id']['collaborations']['$get']>
  >,
) {
  return ['folders', '/folders/:folder_id/collaborations', toValue(args)] as const
}

export function getFoldersFolderIdCollaborationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.folders)[':folder_id']['collaborations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoldersFolderIdCollaborationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folders[':folder_id'].collaborations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.folders)[':folder_id']['collaborations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_id']['collaborations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoldersFolderIdCollaborationsQueryKey>
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
          Awaited<ReturnType<(typeof client.folders)[':folder_id']['collaborations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdCollaborationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoldersFolderIdCollaborationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.folders[':folder_id'].collaborations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getFoldersFolderIdItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.folders)[':folder_id']['items']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['folders', '/folders/:folder_id/items', keyArgs] as const
}

export function getFoldersFolderIdItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.folders)[':folder_id']['items']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoldersFolderIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folders[':folder_id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.folders)[':folder_id']['items']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_id']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoldersFolderIdItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.folders)[':folder_id']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoldersFolderIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.folders[':folder_id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoldersFolderIdMetadataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.folders)[':folder_id']['metadata']['$get']>
  >,
) {
  return ['folders', '/folders/:folder_id/metadata', toValue(args)] as const
}

export function getFoldersFolderIdMetadataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.folders)[':folder_id']['metadata']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoldersFolderIdMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folders[':folder_id'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.folders)[':folder_id']['metadata']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_id']['metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoldersFolderIdMetadataQueryKey>
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
          Awaited<ReturnType<(typeof client.folders)[':folder_id']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoldersFolderIdMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.folders[':folder_id'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
    >
  >,
) {
  return [
    'folders',
    '/folders/:folder_id/metadata/enterprise/securityClassification-6VMVochwUWo',
    toValue(args),
  ] as const
}

export function getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folders[':folder_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
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
                    (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
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
                    (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey
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
              (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.folders[':folder_id'].metadata.enterprise[
            'securityClassification-6VMVochwUWo'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$get']
    >
  >,
) {
  return ['folders', '/folders/:folder_id/metadata/:scope/:template_key', toValue(args)] as const
}

export function getFoldersFolderIdMetadataScopeTemplateKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoldersFolderIdMetadataScopeTemplateKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folders[':folder_id'].metadata[':scope'][':template_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$get']
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
                    (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$get']
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
                    (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFoldersFolderIdMetadataScopeTemplateKeyQueryKey>
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
              (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdMetadataScopeTemplateKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoldersFolderIdMetadataScopeTemplateKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.folders[':folder_id'].metadata[':scope'][':template_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getFoldersFolderIdTrashQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.folders)[':folder_id']['trash']['$get']>>,
) {
  return ['folders', '/folders/:folder_id/trash', toValue(args)] as const
}

export function getFoldersFolderIdTrashQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.folders)[':folder_id']['trash']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoldersFolderIdTrashQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folders[':folder_id'].trash.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.folders)[':folder_id']['trash']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_id']['trash']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoldersFolderIdTrashQueryKey>
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
          Awaited<ReturnType<(typeof client.folders)[':folder_id']['trash']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdTrashQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoldersFolderIdTrashQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.folders[':folder_id'].trash.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getFoldersFolderIdWatermarkQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$get']>
  >,
) {
  return ['folders', '/folders/:folder_id/watermark', toValue(args)] as const
}

export function getFoldersFolderIdWatermarkQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoldersFolderIdWatermarkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folders[':folder_id'].watermark.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_id']['watermark']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoldersFolderIdWatermarkQueryKey>
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
          Awaited<ReturnType<(typeof client.folders)[':folder_id']['watermark']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdWatermarkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoldersFolderIdWatermarkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.folders[':folder_id'].watermark.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$get']>
  >,
) {
  return ['group_memberships', '/group_memberships/:group_membership_id', toValue(args)] as const
}

export function getGroupMembershipsGroupMembershipIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupMembershipsGroupMembershipIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.group_memberships[':group_membership_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.group_memberships)[':group_membership_id']['$get']>
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
                  ReturnType<(typeof client.group_memberships)[':group_membership_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGroupMembershipsGroupMembershipIdQueryKey>
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
          Awaited<ReturnType<(typeof client.group_memberships)[':group_membership_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupMembershipsGroupMembershipIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupMembershipsGroupMembershipIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.group_memberships[':group_membership_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.group_memberships)[':group_membership_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
) {
  return ['groups', '/groups', toValue(args)] as const
}

export function getGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          ReturnType<typeof getGroupsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.groups.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.groups.terminate_sessions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.groups.terminate_sessions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':group_id']['$get']>>,
) {
  return ['groups', '/groups/:group_id', toValue(args)] as const
}

export function getGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':group_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':group_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':group_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
            >
          >,
          ReturnType<typeof getGroupsGroupIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':group_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getGroupsGroupIdCollaborationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':group_id']['collaborations']['$get']>
  >,
) {
  return ['groups', '/groups/:group_id/collaborations', toValue(args)] as const
}

export function getGroupsGroupIdCollaborationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':group_id']['collaborations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdCollaborationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':group_id'].collaborations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':group_id']['collaborations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':group_id']['collaborations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdCollaborationsQueryKey>
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
          Awaited<ReturnType<(typeof client.groups)[':group_id']['collaborations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdCollaborationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdCollaborationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':group_id'].collaborations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsGroupIdMembershipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>
  >,
) {
  return ['groups', '/groups/:group_id/memberships', toValue(args)] as const
}

export function getGroupsGroupIdMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':group_id'].memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdMembershipsQueryKey>
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
          Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':group_id'].memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invites.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.invites.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invites)[':invite_id']['$get']>>,
) {
  return ['invites', '/invites/:invite_id', toValue(args)] as const
}

export function getInvitesInviteIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invites)[':invite_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvitesInviteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invites[':invite_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvitesInviteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':invite_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invites)[':invite_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invites)[':invite_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invites)[':invite_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInvitesInviteIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':invite_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvitesInviteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvitesInviteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invites[':invite_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLegalHoldPoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.legal_hold_policies.$get>>,
) {
  return ['legal_hold_policies', '/legal_hold_policies', toValue(args)] as const
}

export function getLegalHoldPoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.legal_hold_policies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLegalHoldPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.legal_hold_policies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLegalHoldPolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.legal_hold_policies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policies.$get>>>
            >
          >,
          ReturnType<typeof getLegalHoldPoliciesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLegalHoldPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLegalHoldPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.legal_hold_policies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>
  >,
) {
  return [
    'legal_hold_policies',
    '/legal_hold_policies/:legal_hold_policy_id',
    toValue(args),
  ] as const
}

export function getLegalHoldPoliciesLegalHoldPolicyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLegalHoldPoliciesLegalHoldPolicyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.legal_hold_policies[':legal_hold_policy_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLegalHoldPoliciesLegalHoldPolicyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalHoldPoliciesLegalHoldPolicyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLegalHoldPoliciesLegalHoldPolicyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.legal_hold_policies[':legal_hold_policy_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.legal_hold_policies)[':legal_hold_policy_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.legal_hold_policy_assignments.$get>>,
) {
  return ['legal_hold_policy_assignments', '/legal_hold_policy_assignments', toValue(args)] as const
}

export function getLegalHoldPolicyAssignmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.legal_hold_policy_assignments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLegalHoldPolicyAssignmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.legal_hold_policy_assignments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLegalHoldPolicyAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policy_assignments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.legal_hold_policy_assignments.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.legal_hold_policy_assignments.$get>>
              >
            >
          >,
          ReturnType<typeof getLegalHoldPolicyAssignmentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policy_assignments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalHoldPolicyAssignmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLegalHoldPolicyAssignmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.legal_hold_policy_assignments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$get']
    >
  >,
) {
  return [
    'legal_hold_policy_assignments',
    '/legal_hold_policy_assignments/:legal_hold_policy_assignment_id',
    toValue(args),
  ] as const
}

export function getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.legal_hold_policy_assignments[':legal_hold_policy_assignment_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$get']
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
                    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$get']
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
                    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdQueryKey>
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
              (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.legal_hold_policy_assignments[':legal_hold_policy_assignment_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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

export function getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['file_versions_on_hold']['$get']
    >
  >,
) {
  return [
    'legal_hold_policy_assignments',
    '/legal_hold_policy_assignments/:legal_hold_policy_assignment_id/file_versions_on_hold',
    toValue(args),
  ] as const
}

export function getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['file_versions_on_hold']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.legal_hold_policy_assignments[
          ':legal_hold_policy_assignment_id'
        ].file_versions_on_hold.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['file_versions_on_hold']['$get']
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
                    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['file_versions_on_hold']['$get']
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
                    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['file_versions_on_hold']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.legal_hold_policy_assignments[
            ':legal_hold_policy_assignment_id'
          ].file_versions_on_hold.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['files_on_hold']['$get']
    >
  >,
) {
  return [
    'legal_hold_policy_assignments',
    '/legal_hold_policy_assignments/:legal_hold_policy_assignment_id/files_on_hold',
    toValue(args),
  ] as const
}

export function getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['files_on_hold']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.legal_hold_policy_assignments[':legal_hold_policy_assignment_id'].files_on_hold.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['files_on_hold']['$get']
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
                    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['files_on_hold']['$get']
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
                    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['files_on_hold']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldQueryKey
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
              (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['files_on_hold']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.legal_hold_policy_assignments[
            ':legal_hold_policy_assignment_id'
          ].files_on_hold.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetadataCascadePoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata_cascade_policies.$get>>,
) {
  return ['metadata_cascade_policies', '/metadata_cascade_policies', toValue(args)] as const
}

export function getMetadataCascadePoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata_cascade_policies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetadataCascadePoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata_cascade_policies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetadataCascadePolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metadata_cascade_policies.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata_cascade_policies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metadata_cascade_policies.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metadata_cascade_policies.$get>>
              >
            >
          >,
          ReturnType<typeof getMetadataCascadePoliciesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata_cascade_policies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataCascadePoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetadataCascadePoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata_cascade_policies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metadata_cascade_policies.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.metadata_cascade_policies.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$get']
    >
  >,
) {
  return [
    'metadata_cascade_policies',
    '/metadata_cascade_policies/:metadata_cascade_policy_id',
    toValue(args),
  ] as const
}

export function getMetadataCascadePoliciesMetadataCascadePolicyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetadataCascadePoliciesMetadataCascadePolicyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata_cascade_policies[':metadata_cascade_policy_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$get']
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
                    (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$get']
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
                    (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMetadataCascadePoliciesMetadataCascadePolicyIdQueryKey>
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
              (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataCascadePoliciesMetadataCascadePolicyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetadataCascadePoliciesMetadataCascadePolicyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata_cascade_policies[':metadata_cascade_policy_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getMetadataQueryIndicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata_query_indices.$get>>,
) {
  return ['metadata_query_indices', '/metadata_query_indices', toValue(args)] as const
}

export function getMetadataQueryIndicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata_query_indices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetadataQueryIndicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata_query_indices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetadataQueryIndices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata_query_indices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata_query_indices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata_query_indices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata_query_indices.$get>>>
            >
          >,
          ReturnType<typeof getMetadataQueryIndicesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata_query_indices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataQueryIndicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetadataQueryIndicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata_query_indices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetadataTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata_templates.$get>>,
) {
  return ['metadata_templates', '/metadata_templates', toValue(args)] as const
}

export function getMetadataTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata_templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetadataTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata_templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetadataTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata_templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.$get>>>
            >
          >,
          ReturnType<typeof getMetadataTemplatesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetadataTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata_templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetadataTemplatesEnterpriseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata_templates.enterprise.$get>>,
) {
  return ['metadata_templates', '/metadata_templates/enterprise', toValue(args)] as const
}

export function getMetadataTemplatesEnterpriseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata_templates.enterprise.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetadataTemplatesEnterpriseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata_templates.enterprise.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetadataTemplatesEnterprise<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.enterprise.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata_templates.enterprise.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metadata_templates.enterprise.$get>>
              >
            >
          >,
          ReturnType<typeof getMetadataTemplatesEnterpriseQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.enterprise.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataTemplatesEnterpriseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetadataTemplatesEnterpriseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata_templates.enterprise.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaQueryKey() {
  return [
    'metadata_templates',
    '/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema',
  ] as const
}

export function getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata_templates.enterprise['securityClassification-6VMVochwUWo'].schema.$get(
          undefined,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
      Extract<
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
          ReturnType<
            typeof getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaQueryKey
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
              (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata_templates.enterprise['securityClassification-6VMVochwUWo'].schema.$get(
            undefined,
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaMutationKey() {
  return [
    'metadata_templates',
    '/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema',
    'DELETE',
  ] as const
}

export function getDeleteMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.metadata_templates.enterprise['securityClassification-6VMVochwUWo'].schema.$delete(
          undefined,
          options,
        ),
      )
    },
  })
}

export function useDeleteMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchema<
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
                      (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >,
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
    getDeleteMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
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
      Extract<
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

export function getPutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaDeleteMutationKey() {
  return [
    'metadata_templates',
    '/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#delete',
    'PUT',
  ] as const
}

export function getPutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#delete']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#delete']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#delete']['$put']
      >,
    ) {
      return parseResponse(
        client.metadata_templates.enterprise['securityClassification-6VMVochwUWo'][
          'schema#delete'
        ].$put(args, options),
      )
    },
  })
}

export function usePutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaDelete<
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
                    (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#delete']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#delete']['$put']
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
    getPutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
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
      Extract<
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

export function getMetadataTemplatesGlobalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata_templates.global.$get>>,
) {
  return ['metadata_templates', '/metadata_templates/global', toValue(args)] as const
}

export function getMetadataTemplatesGlobalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata_templates.global.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetadataTemplatesGlobalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata_templates.global.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetadataTemplatesGlobal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.global.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata_templates.global.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metadata_templates.global.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metadata_templates.global.$get>>
              >
            >
          >,
          ReturnType<typeof getMetadataTemplatesGlobalQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.global.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataTemplatesGlobalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetadataTemplatesGlobalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata_templates.global.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metadata_templates.schema.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.metadata_templates.schema.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getMetadataTemplatesScopeTemplateKeySchemaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$get']
    >
  >,
) {
  return [
    'metadata_templates',
    '/metadata_templates/:scope/:template_key/schema',
    toValue(args),
  ] as const
}

export function getMetadataTemplatesScopeTemplateKeySchemaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetadataTemplatesScopeTemplateKeySchemaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata_templates[':scope'][':template_key'].schema.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$get']
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
                    (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$get']
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
                    (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMetadataTemplatesScopeTemplateKeySchemaQueryKey>
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
              (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataTemplatesScopeTemplateKeySchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetadataTemplatesScopeTemplateKeySchemaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata_templates[':scope'][':template_key'].schema.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metadata_templates)[':template_id']['$get']>
  >,
) {
  return ['metadata_templates', '/metadata_templates/:template_id', toValue(args)] as const
}

export function getMetadataTemplatesTemplateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metadata_templates)[':template_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetadataTemplatesTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata_templates[':template_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metadata_templates)[':template_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metadata_templates)[':template_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetadataTemplatesTemplateIdQueryKey>
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
          Awaited<ReturnType<(typeof client.metadata_templates)[':template_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataTemplatesTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetadataTemplatesTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata_templates[':template_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.revoke.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth2.revoke.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth2.token.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getRecentItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recent_items.$get>>,
) {
  return ['recent_items', '/recent_items', toValue(args)] as const
}

export function getRecentItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recent_items.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecentItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recent_items.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRecentItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recent_items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recent_items.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recent_items.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recent_items.$get>>>>
          >,
          ReturnType<typeof getRecentItemsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recent_items.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRecentItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecentItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recent_items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRetentionPoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.retention_policies.$get>>,
) {
  return ['retention_policies', '/retention_policies', toValue(args)] as const
}

export function getRetentionPoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.retention_policies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRetentionPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.retention_policies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRetentionPolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retention_policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.retention_policies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.retention_policies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.retention_policies.$get>>>
            >
          >,
          ReturnType<typeof getRetentionPoliciesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retention_policies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRetentionPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRetentionPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.retention_policies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$get']>
  >,
) {
  return ['retention_policies', '/retention_policies/:retention_policy_id', toValue(args)] as const
}

export function getRetentionPoliciesRetentionPolicyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRetentionPoliciesRetentionPolicyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.retention_policies[':retention_policy_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.retention_policies)[':retention_policy_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRetentionPoliciesRetentionPolicyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.retention_policies)[':retention_policy_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRetentionPoliciesRetentionPolicyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRetentionPoliciesRetentionPolicyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.retention_policies[':retention_policy_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.retention_policies)[':retention_policy_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.retention_policies)[':retention_policy_id']['assignments']['$get']
    >
  >,
) {
  return [
    'retention_policies',
    '/retention_policies/:retention_policy_id/assignments',
    toValue(args),
  ] as const
}

export function getRetentionPoliciesRetentionPolicyIdAssignmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.retention_policies)[':retention_policy_id']['assignments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRetentionPoliciesRetentionPolicyIdAssignmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.retention_policies[':retention_policy_id'].assignments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.retention_policies)[':retention_policy_id']['assignments']['$get']
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
                    (typeof client.retention_policies)[':retention_policy_id']['assignments']['$get']
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
                    (typeof client.retention_policies)[':retention_policy_id']['assignments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRetentionPoliciesRetentionPolicyIdAssignmentsQueryKey>
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
              (typeof client.retention_policies)[':retention_policy_id']['assignments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRetentionPoliciesRetentionPolicyIdAssignmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRetentionPoliciesRetentionPolicyIdAssignmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.retention_policies[':retention_policy_id'].assignments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$get']
    >
  >,
) {
  return [
    'retention_policy_assignments',
    '/retention_policy_assignments/:retention_policy_assignment_id',
    toValue(args),
  ] as const
}

export function getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.retention_policy_assignments[':retention_policy_assignment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$get']
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
                    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$get']
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
                    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdQueryKey>
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
              (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.retention_policy_assignments[':retention_policy_assignment_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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

export function getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['file_versions_under_retention']['$get']
    >
  >,
) {
  return [
    'retention_policy_assignments',
    '/retention_policy_assignments/:retention_policy_assignment_id/file_versions_under_retention',
    toValue(args),
  ] as const
}

export function getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['file_versions_under_retention']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.retention_policy_assignments[
          ':retention_policy_assignment_id'
        ].file_versions_under_retention.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['file_versions_under_retention']['$get']
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
                    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['file_versions_under_retention']['$get']
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
                    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['file_versions_under_retention']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.retention_policy_assignments[
            ':retention_policy_assignment_id'
          ].file_versions_under_retention.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['files_under_retention']['$get']
    >
  >,
) {
  return [
    'retention_policy_assignments',
    '/retention_policy_assignments/:retention_policy_assignment_id/files_under_retention',
    toValue(args),
  ] as const
}

export function getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['files_under_retention']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.retention_policy_assignments[
          ':retention_policy_assignment_id'
        ].files_under_retention.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['files_under_retention']['$get']
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
                    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['files_under_retention']['$get']
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
                    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['files_under_retention']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.retention_policy_assignments[
            ':retention_policy_assignment_id'
          ].files_under_retention.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
) {
  return ['search', '/search', toValue(args)] as const
}

export function getSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          ReturnType<typeof getSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shared_items.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shared_items', '/shared_items', keyArgs] as const
}

export function getSharedItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shared_items.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shared_items.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSharedItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shared_items.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_items.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_items.$get>>>>
          >,
          ReturnType<typeof getSharedItemsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_items.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSharedItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shared_items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedItemsFoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shared_items#folders']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shared_items#folders', '/shared_items#folders', keyArgs] as const
}

export function getSharedItemsFoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shared_items#folders']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedItemsFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['shared_items#folders'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedItemsFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#folders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shared_items#folders']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['shared_items#folders']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedItemsFoldersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#folders']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedItemsFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedItemsFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['shared_items#folders'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedItemsWebLinksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shared_items#web_links']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shared_items#web_links', '/shared_items#web_links', keyArgs] as const
}

export function getSharedItemsWebLinksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shared_items#web_links']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedItemsWebLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['shared_items#web_links'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedItemsWebLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#web_links']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shared_items#web_links']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['shared_items#web_links']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedItemsWebLinksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#web_links']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedItemsWebLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedItemsWebLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['shared_items#web_links'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShieldInformationBarrierReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shield_information_barrier_reports.$get>>,
) {
  return [
    'shield_information_barrier_reports',
    '/shield_information_barrier_reports',
    toValue(args),
  ] as const
}

export function getShieldInformationBarrierReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shield_information_barrier_reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShieldInformationBarrierReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shield_information_barrier_reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.shield_information_barrier_reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.shield_information_barrier_reports.$get>>
              >
            >
          >,
          ReturnType<typeof getShieldInformationBarrierReportsQueryKey>
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
          Awaited<ReturnType<typeof client.shield_information_barrier_reports.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShieldInformationBarrierReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShieldInformationBarrierReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shield_information_barrier_reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shield_information_barrier_reports)[':shield_information_barrier_report_id']['$get']
    >
  >,
) {
  return [
    'shield_information_barrier_reports',
    '/shield_information_barrier_reports/:shield_information_barrier_report_id',
    toValue(args),
  ] as const
}

export function getShieldInformationBarrierReportsShieldInformationBarrierReportIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shield_information_barrier_reports)[':shield_information_barrier_report_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getShieldInformationBarrierReportsShieldInformationBarrierReportIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shield_information_barrier_reports[':shield_information_barrier_report_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shield_information_barrier_reports)[':shield_information_barrier_report_id']['$get']
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
                    (typeof client.shield_information_barrier_reports)[':shield_information_barrier_report_id']['$get']
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
                    (typeof client.shield_information_barrier_reports)[':shield_information_barrier_report_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getShieldInformationBarrierReportsShieldInformationBarrierReportIdQueryKey
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
              (typeof client.shield_information_barrier_reports)[':shield_information_barrier_report_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShieldInformationBarrierReportsShieldInformationBarrierReportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getShieldInformationBarrierReportsShieldInformationBarrierReportIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.shield_information_barrier_reports[':shield_information_barrier_report_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getShieldInformationBarrierSegmentMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.shield_information_barrier_segment_members.$get>
  >,
) {
  return [
    'shield_information_barrier_segment_members',
    '/shield_information_barrier_segment_members',
    toValue(args),
  ] as const
}

export function getShieldInformationBarrierSegmentMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.shield_information_barrier_segment_members.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShieldInformationBarrierSegmentMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shield_information_barrier_segment_members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.shield_information_barrier_segment_members.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.shield_information_barrier_segment_members.$get>>
              >
            >
          >,
          ReturnType<typeof getShieldInformationBarrierSegmentMembersQueryKey>
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
          Awaited<ReturnType<typeof client.shield_information_barrier_segment_members.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShieldInformationBarrierSegmentMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShieldInformationBarrierSegmentMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shield_information_barrier_segment_members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$get']
    >
  >,
) {
  return [
    'shield_information_barrier_segment_members',
    '/shield_information_barrier_segment_members/:shield_information_barrier_segment_member_id',
    toValue(args),
  ] as const
}

export function getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shield_information_barrier_segment_members[
          ':shield_information_barrier_segment_member_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$get']
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
                    (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$get']
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
                    (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.shield_information_barrier_segment_members[
            ':shield_information_barrier_segment_member_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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

export function getShieldInformationBarrierSegmentRestrictionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.shield_information_barrier_segment_restrictions.$get>
  >,
) {
  return [
    'shield_information_barrier_segment_restrictions',
    '/shield_information_barrier_segment_restrictions',
    toValue(args),
  ] as const
}

export function getShieldInformationBarrierSegmentRestrictionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.shield_information_barrier_segment_restrictions.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShieldInformationBarrierSegmentRestrictionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shield_information_barrier_segment_restrictions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.shield_information_barrier_segment_restrictions.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.shield_information_barrier_segment_restrictions.$get>
                >
              >
            >
          >,
          ReturnType<typeof getShieldInformationBarrierSegmentRestrictionsQueryKey>
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
          Awaited<ReturnType<typeof client.shield_information_barrier_segment_restrictions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShieldInformationBarrierSegmentRestrictionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShieldInformationBarrierSegmentRestrictionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shield_information_barrier_segment_restrictions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$get']
    >
  >,
) {
  return [
    'shield_information_barrier_segment_restrictions',
    '/shield_information_barrier_segment_restrictions/:shield_information_barrier_segment_restriction_id',
    toValue(args),
  ] as const
}

export function getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shield_information_barrier_segment_restrictions[
          ':shield_information_barrier_segment_restriction_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$get']
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
                    (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$get']
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
                    (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.shield_information_barrier_segment_restrictions[
            ':shield_information_barrier_segment_restriction_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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

export function getShieldInformationBarrierSegmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shield_information_barrier_segments.$get>>,
) {
  return [
    'shield_information_barrier_segments',
    '/shield_information_barrier_segments',
    toValue(args),
  ] as const
}

export function getShieldInformationBarrierSegmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shield_information_barrier_segments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShieldInformationBarrierSegmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shield_information_barrier_segments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.shield_information_barrier_segments.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.shield_information_barrier_segments.$get>>
              >
            >
          >,
          ReturnType<typeof getShieldInformationBarrierSegmentsQueryKey>
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
          Awaited<ReturnType<typeof client.shield_information_barrier_segments.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShieldInformationBarrierSegmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShieldInformationBarrierSegmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shield_information_barrier_segments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$get']
    >
  >,
) {
  return [
    'shield_information_barrier_segments',
    '/shield_information_barrier_segments/:shield_information_barrier_segment_id',
    toValue(args),
  ] as const
}

export function getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shield_information_barrier_segments[':shield_information_barrier_segment_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$get']
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
                    (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$get']
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
                    (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdQueryKey
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
              (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.shield_information_barrier_segments[':shield_information_barrier_segment_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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

export function getShieldInformationBarriersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shield_information_barriers.$get>>,
) {
  return ['shield_information_barriers', '/shield_information_barriers', toValue(args)] as const
}

export function getShieldInformationBarriersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shield_information_barriers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShieldInformationBarriersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shield_information_barriers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShieldInformationBarriers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shield_information_barriers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shield_information_barriers.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.shield_information_barriers.$get>>
              >
            >
          >,
          ReturnType<typeof getShieldInformationBarriersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.shield_information_barriers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShieldInformationBarriersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShieldInformationBarriersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shield_information_barriers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getShieldInformationBarriersShieldInformationBarrierIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shield_information_barriers)[':shield_information_barrier_id']['$get']
    >
  >,
) {
  return [
    'shield_information_barriers',
    '/shield_information_barriers/:shield_information_barrier_id',
    toValue(args),
  ] as const
}

export function getShieldInformationBarriersShieldInformationBarrierIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shield_information_barriers)[':shield_information_barrier_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShieldInformationBarriersShieldInformationBarrierIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shield_information_barriers[':shield_information_barrier_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shield_information_barriers)[':shield_information_barrier_id']['$get']
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
                    (typeof client.shield_information_barriers)[':shield_information_barrier_id']['$get']
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
                    (typeof client.shield_information_barriers)[':shield_information_barrier_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getShieldInformationBarriersShieldInformationBarrierIdQueryKey>
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
              (typeof client.shield_information_barriers)[':shield_information_barrier_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShieldInformationBarriersShieldInformationBarrierIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getShieldInformationBarriersShieldInformationBarrierIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.shield_information_barriers[':shield_information_barrier_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSignRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sign_requests.$get>>,
) {
  return ['sign_requests', '/sign_requests', toValue(args)] as const
}

export function getSignRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sign_requests.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSignRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sign_requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSignRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sign_requests.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_requests.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_requests.$get>>>>
          >,
          ReturnType<typeof getSignRequestsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_requests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSignRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSignRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sign_requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_requests.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sign_requests.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getSignRequestsSignRequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sign_requests)[':sign_request_id']['$get']>
  >,
) {
  return ['sign_requests', '/sign_requests/:sign_request_id', toValue(args)] as const
}

export function getSignRequestsSignRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sign_requests)[':sign_request_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSignRequestsSignRequestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sign_requests[':sign_request_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sign_requests)[':sign_request_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sign_requests)[':sign_request_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSignRequestsSignRequestIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sign_requests)[':sign_request_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSignRequestsSignRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSignRequestsSignRequestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sign_requests[':sign_request_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getStoragePoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.storage_policies.$get>>,
) {
  return ['storage_policies', '/storage_policies', toValue(args)] as const
}

export function getStoragePoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.storage_policies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoragePoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.storage_policies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoragePolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage_policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.storage_policies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.storage_policies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.storage_policies.$get>>>
            >
          >,
          ReturnType<typeof getStoragePoliciesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage_policies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoragePoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoragePoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.storage_policies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoragePoliciesStoragePolicyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.storage_policies)[':storage_policy_id']['$get']>
  >,
) {
  return ['storage_policies', '/storage_policies/:storage_policy_id', toValue(args)] as const
}

export function getStoragePoliciesStoragePolicyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.storage_policies)[':storage_policy_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoragePoliciesStoragePolicyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.storage_policies[':storage_policy_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.storage_policies)[':storage_policy_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.storage_policies)[':storage_policy_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoragePoliciesStoragePolicyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.storage_policies)[':storage_policy_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoragePoliciesStoragePolicyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoragePoliciesStoragePolicyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.storage_policies[':storage_policy_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoragePolicyAssignmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.storage_policy_assignments.$get>>,
) {
  return ['storage_policy_assignments', '/storage_policy_assignments', toValue(args)] as const
}

export function getStoragePolicyAssignmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.storage_policy_assignments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoragePolicyAssignmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.storage_policy_assignments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoragePolicyAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.storage_policy_assignments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.storage_policy_assignments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.storage_policy_assignments.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.storage_policy_assignments.$get>>
              >
            >
          >,
          ReturnType<typeof getStoragePolicyAssignmentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.storage_policy_assignments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoragePolicyAssignmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoragePolicyAssignmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.storage_policy_assignments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$get']
    >
  >,
) {
  return [
    'storage_policy_assignments',
    '/storage_policy_assignments/:storage_policy_assignment_id',
    toValue(args),
  ] as const
}

export function getStoragePolicyAssignmentsStoragePolicyAssignmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoragePolicyAssignmentsStoragePolicyAssignmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.storage_policy_assignments[':storage_policy_assignment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$get']
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
                    (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$get']
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
                    (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStoragePolicyAssignmentsStoragePolicyAssignmentIdQueryKey>
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
              (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoragePolicyAssignmentsStoragePolicyAssignmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoragePolicyAssignmentsStoragePolicyAssignmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.storage_policy_assignments[':storage_policy_assignment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$get']>
  >,
) {
  return ['task_assignments', '/task_assignments/:task_assignment_id', toValue(args)] as const
}

export function getTaskAssignmentsTaskAssignmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskAssignmentsTaskAssignmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task_assignments[':task_assignment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.task_assignments)[':task_assignment_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTaskAssignmentsTaskAssignmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.task_assignments)[':task_assignment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskAssignmentsTaskAssignmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskAssignmentsTaskAssignmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task_assignments[':task_assignment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$post>>>>>,
          TError,
          InferRequestType<typeof client.tasks.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':task_id']['$get']>>,
) {
  return ['tasks', '/tasks/:task_id', toValue(args)] as const
}

export function getTasksTaskIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':task_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':task_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksTaskId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':task_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$get']>>>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$get']>>>
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
          client.tasks[':task_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':task_id']['assignments']['$get']>
  >,
) {
  return ['tasks', '/tasks/:task_id/assignments', toValue(args)] as const
}

export function getTasksTaskIdAssignmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':task_id']['assignments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksTaskIdAssignmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':task_id'].assignments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':task_id']['assignments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':task_id']['assignments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksTaskIdAssignmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.tasks)[':task_id']['assignments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIdAssignmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksTaskIdAssignmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':task_id'].assignments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTermsOfServiceUserStatusesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.terms_of_service_user_statuses.$get>>,
) {
  return [
    'terms_of_service_user_statuses',
    '/terms_of_service_user_statuses',
    toValue(args),
  ] as const
}

export function getTermsOfServiceUserStatusesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.terms_of_service_user_statuses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTermsOfServiceUserStatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.terms_of_service_user_statuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTermsOfServiceUserStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_service_user_statuses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.terms_of_service_user_statuses.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.terms_of_service_user_statuses.$get>>
              >
            >
          >,
          ReturnType<typeof getTermsOfServiceUserStatusesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_service_user_statuses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTermsOfServiceUserStatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTermsOfServiceUserStatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.terms_of_service_user_statuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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

export function getTermsOfServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.terms_of_services.$get>>,
) {
  return ['terms_of_services', '/terms_of_services', toValue(args)] as const
}

export function getTermsOfServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.terms_of_services.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTermsOfServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.terms_of_services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTermsOfServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.terms_of_services.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_services.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_services.$get>>>
            >
          >,
          ReturnType<typeof getTermsOfServicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_services.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTermsOfServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTermsOfServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.terms_of_services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>
  >,
) {
  return ['terms_of_services', '/terms_of_services/:terms_of_service_id', toValue(args)] as const
}

export function getTermsOfServicesTermsOfServiceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTermsOfServicesTermsOfServiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.terms_of_services[':terms_of_service_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>
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
                  ReturnType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTermsOfServicesTermsOfServiceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTermsOfServicesTermsOfServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTermsOfServicesTermsOfServiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.terms_of_services[':terms_of_service_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.terms_of_services)[':terms_of_service_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.terms_of_services)[':terms_of_service_id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
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
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getUsersMeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.$get>>,
) {
  return ['users', '/users/me', toValue(args)] as const
}

export function getUsersMeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersMeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          ReturnType<typeof getUsersMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersMeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.users.terminate_sessions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.users.terminate_sessions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
) {
  return ['users', '/users/:user_id', toValue(args)] as const
}

export function getUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['avatar']['$get']>>,
) {
  return ['users', '/users/:user_id/avatar', toValue(args)] as const
}

export function getUsersUserIdAvatarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['avatar']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdAvatarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].avatar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdAvatar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['avatar']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdAvatarQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAvatarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdAvatarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].avatar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getUsersUserIdEmailAliasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['email_aliases']['$get']>
  >,
) {
  return ['users', '/users/:user_id/email_aliases', toValue(args)] as const
}

export function getUsersUserIdEmailAliasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['email_aliases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdEmailAliasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].email_aliases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['email_aliases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['email_aliases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdEmailAliasesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['email_aliases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdEmailAliasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdEmailAliasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].email_aliases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getUsersUserIdMembershipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['memberships']['$get']>
  >,
) {
  return ['users', '/users/:user_id/memberships', toValue(args)] as const
}

export function getUsersUserIdMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['memberships']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['memberships']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['memberships']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdMembershipsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.web_links.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.web_links.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.web_links)[':web_link_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['web_links', '/web_links/:web_link_id', keyArgs] as const
}

export function getWebLinksWebLinkIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.web_links)[':web_link_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebLinksWebLinkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.web_links[':web_link_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebLinksWebLinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.web_links)[':web_link_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebLinksWebLinkIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebLinksWebLinkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebLinksWebLinkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.web_links[':web_link_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.web_links)[':web_link_id#add_shared_link']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.web_links)[':web_link_id#add_shared_link']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getWebLinksWebLinkIdGetSharedLinkQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>
  >,
) {
  return ['web_links', '/web_links/:web_link_id#get_shared_link', toValue(args)] as const
}

export function getWebLinksWebLinkIdGetSharedLinkQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebLinksWebLinkIdGetSharedLinkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.web_links[':web_link_id#get_shared_link'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>
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
                  ReturnType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWebLinksWebLinkIdGetSharedLinkQueryKey>
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
          Awaited<ReturnType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebLinksWebLinkIdGetSharedLinkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebLinksWebLinkIdGetSharedLinkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.web_links[':web_link_id#get_shared_link'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getWebLinksWebLinkIdTrashQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.web_links)[':web_link_id']['trash']['$get']>
  >,
) {
  return ['web_links', '/web_links/:web_link_id/trash', toValue(args)] as const
}

export function getWebLinksWebLinkIdTrashQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.web_links)[':web_link_id']['trash']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebLinksWebLinkIdTrashQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.web_links[':web_link_id'].trash.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.web_links)[':web_link_id']['trash']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['trash']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebLinksWebLinkIdTrashQueryKey>
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
          Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['trash']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebLinksWebLinkIdTrashQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebLinksWebLinkIdTrashQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.web_links[':web_link_id'].trash.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>>,
) {
  return ['webhooks', '/webhooks/:webhook_id', toValue(args)] as const
}

export function getWebhooksWebhookIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhook_id'].$get(toValue(args), {
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
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
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
          client.webhooks[':webhook_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zip_downloads.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.zip_downloads.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>
  >,
) {
  return ['zip_downloads', '/zip_downloads/:zip_download_id/content', toValue(args)] as const
}

export function getZipDownloadsZipDownloadIdContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZipDownloadsZipDownloadIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zip_downloads[':zip_download_id'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getZipDownloadsZipDownloadIdContentQueryKey>
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
          Awaited<ReturnType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getZipDownloadsZipDownloadIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZipDownloadsZipDownloadIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zip_downloads[':zip_download_id'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getZipDownloadsZipDownloadIdStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>
  >,
) {
  return ['zip_downloads', '/zip_downloads/:zip_download_id/status', toValue(args)] as const
}

export function getZipDownloadsZipDownloadIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZipDownloadsZipDownloadIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zip_downloads[':zip_download_id'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getZipDownloadsZipDownloadIdStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getZipDownloadsZipDownloadIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZipDownloadsZipDownloadIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zip_downloads[':zip_download_id'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
