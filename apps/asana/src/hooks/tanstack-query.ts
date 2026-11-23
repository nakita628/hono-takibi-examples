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

export function getAccessRequestsKey() {
  return ['access_requests'] as const
}

export function getAgentsKey() {
  return ['agents'] as const
}

export function getAllocationsKey() {
  return ['allocations'] as const
}

export function getAttachmentsKey() {
  return ['attachments'] as const
}

export function getBatchKey() {
  return ['batch'] as const
}

export function getBudgetsKey() {
  return ['budgets'] as const
}

export function getCustomFieldsKey() {
  return ['custom_fields'] as const
}

export function getCustomTypesKey() {
  return ['custom_types'] as const
}

export function getEnumOptionsKey() {
  return ['enum_options'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getExportsKey() {
  return ['exports'] as const
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

export function getMembershipsKey() {
  return ['memberships'] as const
}

export function getOooEntriesKey() {
  return ['ooo_entries'] as const
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

export function getProjectPortfolioSettingsKey() {
  return ['project_portfolio_settings'] as const
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

export function getRatesKey() {
  return ['rates'] as const
}

export function getReactionsKey() {
  return ['reactions'] as const
}

export function getRecordsKey() {
  return ['records'] as const
}

export function getRolesKey() {
  return ['roles'] as const
}

export function getRuleTriggersKey() {
  return ['rule_triggers'] as const
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

export function getTablesKey() {
  return ['tables'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTaskTemplatesKey() {
  return ['task_templates'] as const
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

export function getTimeTrackingCategoriesKey() {
  return ['time_tracking_categories'] as const
}

export function getTimeTrackingEntriesKey() {
  return ['time_tracking_entries'] as const
}

export function getTimesheetApprovalStatusesKey() {
  return ['timesheet_approval_statuses'] as const
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

export function getAccessRequestsQueryKey(
  args: InferRequestType<typeof client.access_requests.$get>,
) {
  return ['access_requests', '/access_requests', args] as const
}

export function getAccessRequestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.access_requests.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.access_requests.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.access_requests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccessRequestsQueryKey>
  >({
    queryKey: getAccessRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.access_requests.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccessRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.access_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.access_requests.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.access_requests.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccessRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccessRequestsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccessRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.access_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.access_requests.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.access_requests.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccessRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccessRequestsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAccessRequestsMutationKey() {
  return ['access_requests', '/access_requests', 'POST'] as const
}

export function getPostAccessRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.access_requests.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.access_requests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccessRequestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.access_requests.$post>) {
      return parseResponse(client.access_requests.$post(args, options))
    },
  })
}

export function usePostAccessRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.access_requests.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.access_requests.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccessRequestsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAccessRequestsAccessRequestGidApproveMutationKey() {
  return ['access_requests', '/access_requests/:access_request_gid/approve', 'POST'] as const
}

export function getPostAccessRequestsAccessRequestGidApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.access_requests)[':access_request_gid']['approve']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.access_requests)[':access_request_gid']['approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccessRequestsAccessRequestGidApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.access_requests)[':access_request_gid']['approve']['$post']
      >,
    ) {
      return parseResponse(
        client.access_requests[':access_request_gid'].approve.$post(args, options),
      )
    },
  })
}

export function usePostAccessRequestsAccessRequestGidApprove<
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
                  (typeof client.access_requests)[':access_request_gid']['approve']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.access_requests)[':access_request_gid']['approve']['$post']
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
  const mutationDefaults = getPostAccessRequestsAccessRequestGidApproveMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAccessRequestsAccessRequestGidRejectMutationKey() {
  return ['access_requests', '/access_requests/:access_request_gid/reject', 'POST'] as const
}

export function getPostAccessRequestsAccessRequestGidRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.access_requests)[':access_request_gid']['reject']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.access_requests)[':access_request_gid']['reject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccessRequestsAccessRequestGidRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.access_requests)[':access_request_gid']['reject']['$post']
      >,
    ) {
      return parseResponse(
        client.access_requests[':access_request_gid'].reject.$post(args, options),
      )
    },
  })
}

export function usePostAccessRequestsAccessRequestGidReject<
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
                  (typeof client.access_requests)[':access_request_gid']['reject']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.access_requests)[':access_request_gid']['reject']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccessRequestsAccessRequestGidRejectMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceGidAgentsQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['agents']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/agents', args] as const
}

export function getWorkspacesWorkspaceGidAgentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['agents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['agents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['agents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidAgentsQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidAgentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].agents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWorkspacesWorkspaceGidAgents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['agents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['agents']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['agents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidAgentsQueryKey>
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
      ...getWorkspacesWorkspaceGidAgentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGidAgents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['agents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['agents']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['agents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidAgentsQueryKey>
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
      ...getWorkspacesWorkspaceGidAgentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAgentsAgentGidQueryKey(
  args: InferRequestType<(typeof client.agents)[':agent_gid']['$get']>,
) {
  return ['agents', '/agents/:agent_gid', args] as const
}

export function getAgentsAgentGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents)[':agent_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_gid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsAgentGidQueryKey>
  >({
    queryKey: getAgentsAgentGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents[':agent_gid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAgentsAgentGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents)[':agent_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_gid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsAgentGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgentsAgentGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgentsAgentGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents)[':agent_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_gid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsAgentGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgentsAgentGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWorkspacesWorkspaceGidAiStudioRunsQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['ai_studio']['runs']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/ai_studio/runs', args] as const
}

export function getWorkspacesWorkspaceGidAiStudioRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['ai_studio']['runs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['ai_studio']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workspaces)[':workspace_gid']['ai_studio']['runs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidAiStudioRunsQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidAiStudioRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].ai_studio.runs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWorkspacesWorkspaceGidAiStudioRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['ai_studio']['runs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['ai_studio']['runs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workspaces)[':workspace_gid']['ai_studio']['runs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidAiStudioRunsQueryKey>
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
      ...getWorkspacesWorkspaceGidAiStudioRunsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGidAiStudioRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['ai_studio']['runs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['ai_studio']['runs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workspaces)[':workspace_gid']['ai_studio']['runs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidAiStudioRunsQueryKey>
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
      ...getWorkspacesWorkspaceGidAiStudioRunsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceGidAiStudioSeatsQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['ai_studio']['seats']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace_gid/ai_studio/seats', args] as const
}

export function getWorkspacesWorkspaceGidAiStudioSeatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['ai_studio']['seats']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['ai_studio']['seats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workspaces)[':workspace_gid']['ai_studio']['seats']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidAiStudioSeatsQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidAiStudioSeatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].ai_studio.seats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWorkspacesWorkspaceGidAiStudioSeats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['ai_studio']['seats']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['ai_studio']['seats']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workspaces)[':workspace_gid']['ai_studio']['seats']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidAiStudioSeatsQueryKey>
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
      ...getWorkspacesWorkspaceGidAiStudioSeatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGidAiStudioSeats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['ai_studio']['seats']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['ai_studio']['seats']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workspaces)[':workspace_gid']['ai_studio']['seats']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidAiStudioSeatsQueryKey>
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
      ...getWorkspacesWorkspaceGidAiStudioSeatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAllocationsAllocationGidQueryKey(
  args: InferRequestType<(typeof client.allocations)[':allocation_gid']['$get']>,
) {
  return ['allocations', '/allocations/:allocation_gid', args] as const
}

export function getAllocationsAllocationGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.allocations)[':allocation_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.allocations)[':allocation_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.allocations)[':allocation_gid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAllocationsAllocationGidQueryKey>
  >({
    queryKey: getAllocationsAllocationGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.allocations[':allocation_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAllocationsAllocationGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.allocations)[':allocation_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.allocations)[':allocation_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.allocations)[':allocation_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAllocationsAllocationGidQueryKey>
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
      ...getAllocationsAllocationGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAllocationsAllocationGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.allocations)[':allocation_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.allocations)[':allocation_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.allocations)[':allocation_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAllocationsAllocationGidQueryKey>
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
      ...getAllocationsAllocationGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAllocationsAllocationGidMutationKey() {
  return ['allocations', '/allocations/:allocation_gid', 'PUT'] as const
}

export function getPutAllocationsAllocationGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.allocations)[':allocation_gid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.allocations)[':allocation_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAllocationsAllocationGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.allocations)[':allocation_gid']['$put']>,
    ) {
      return parseResponse(client.allocations[':allocation_gid'].$put(args, options))
    },
  })
}

export function usePutAllocationsAllocationGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.allocations)[':allocation_gid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.allocations)[':allocation_gid']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAllocationsAllocationGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAllocationsAllocationGidMutationKey() {
  return ['allocations', '/allocations/:allocation_gid', 'DELETE'] as const
}

export function getDeleteAllocationsAllocationGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.allocations)[':allocation_gid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.allocations)[':allocation_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAllocationsAllocationGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.allocations)[':allocation_gid']['$delete']>,
    ) {
      return parseResponse(client.allocations[':allocation_gid'].$delete(args, options))
    },
  })
}

export function useDeleteAllocationsAllocationGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.allocations)[':allocation_gid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.allocations)[':allocation_gid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAllocationsAllocationGidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAllocationsQueryKey(args: InferRequestType<typeof client.allocations.$get>) {
  return ['allocations', '/allocations', args] as const
}

export function getAllocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.allocations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAllocationsQueryKey>
  >({
    queryKey: getAllocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.allocations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAllocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.allocations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAllocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAllocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAllocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.allocations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAllocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAllocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAllocationsMutationKey() {
  return ['allocations', '/allocations', 'POST'] as const
}

export function getPostAllocationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocations.$post>>>>>,
    TError,
    InferRequestType<typeof client.allocations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAllocationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.allocations.$post>) {
      return parseResponse(client.allocations.$post(args, options))
    },
  })
}

export function usePostAllocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.allocations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAllocationsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useAttachmentsAttachmentGid<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAttachmentsAttachmentGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAttachmentsAttachmentGid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAttachmentsAttachmentGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useDeleteAttachmentsAttachmentGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAttachmentsAttachmentGidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useAttachments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.attachments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAttachmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAttachments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.attachments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAttachmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostAttachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAttachmentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useWorkspacesWorkspaceGidAuditLogEvents<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspacesWorkspaceGidAuditLogEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGidAuditLogEvents<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspacesWorkspaceGidAuditLogEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$post>>>>>,
        TError,
        InferRequestType<typeof client.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBudgetsQueryKey(args: InferRequestType<typeof client.budgets.$get>) {
  return ['budgets', '/budgets', args] as const
}

export function getBudgetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.budgets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBudgetsQueryKey>
  >({
    queryKey: getBudgetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBudgets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.budgets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBudgetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBudgetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBudgets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.budgets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBudgetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBudgetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostBudgetsMutationKey() {
  return ['budgets', '/budgets', 'POST'] as const
}

export function getPostBudgetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$post>>>>>,
    TError,
    InferRequestType<typeof client.budgets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBudgetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.budgets.$post>) {
      return parseResponse(client.budgets.$post(args, options))
    },
  })
}

export function usePostBudgets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$post>>>>>,
        TError,
        InferRequestType<typeof client.budgets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBudgetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBudgetsBudgetGidQueryKey(
  args: InferRequestType<(typeof client.budgets)[':budget_gid']['$get']>,
) {
  return ['budgets', '/budgets/:budget_gid', args] as const
}

export function getBudgetsBudgetGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_gid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetGidQueryKey>
  >({
    queryKey: getBudgetsBudgetGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBudgetsBudgetGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBudgetsBudgetGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutBudgetsBudgetGidMutationKey() {
  return ['budgets', '/budgets/:budget_gid', 'PUT'] as const
}

export function getPutBudgetsBudgetGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_gid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.budgets)[':budget_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBudgetsBudgetGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.budgets)[':budget_gid']['$put']>) {
      return parseResponse(client.budgets[':budget_gid'].$put(args, options))
    },
  })
}

export function usePutBudgetsBudgetGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_gid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.budgets)[':budget_gid']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBudgetsBudgetGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteBudgetsBudgetGidMutationKey() {
  return ['budgets', '/budgets/:budget_gid', 'DELETE'] as const
}

export function getDeleteBudgetsBudgetGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_gid']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.budgets)[':budget_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBudgetsBudgetGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.budgets)[':budget_gid']['$delete']>) {
      return parseResponse(client.budgets[':budget_gid'].$delete(args, options))
    },
  })
}

export function useDeleteBudgetsBudgetGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_gid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.budgets)[':budget_gid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBudgetsBudgetGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useProjectsProjectGidCustomFieldSettings<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getProjectsProjectGidCustomFieldSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectGidCustomFieldSettings<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getProjectsProjectGidCustomFieldSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePortfoliosPortfolioGidCustomFieldSettings<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPortfoliosPortfolioGidCustomFieldSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePortfoliosPortfolioGidCustomFieldSettings<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPortfoliosPortfolioGidCustomFieldSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGoalsGoalGidCustomFieldSettingsQueryKey(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['custom_field_settings']['$get']>,
) {
  return ['goals', '/goals/:goal_gid/custom_field_settings', args] as const
}

export function getGoalsGoalGidCustomFieldSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.goals)[':goal_gid']['custom_field_settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['custom_field_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.goals)[':goal_gid']['custom_field_settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGoalsGoalGidCustomFieldSettingsQueryKey>
  >({
    queryKey: getGoalsGoalGidCustomFieldSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.goals[':goal_gid'].custom_field_settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGoalsGoalGidCustomFieldSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.goals)[':goal_gid']['custom_field_settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['custom_field_settings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.goals)[':goal_gid']['custom_field_settings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGoalsGoalGidCustomFieldSettingsQueryKey>
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
      ...getGoalsGoalGidCustomFieldSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGoalsGoalGidCustomFieldSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.goals)[':goal_gid']['custom_field_settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['custom_field_settings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.goals)[':goal_gid']['custom_field_settings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGoalsGoalGidCustomFieldSettingsQueryKey>
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
      ...getGoalsGoalGidCustomFieldSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamsTeamGidCustomFieldSettingsQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_gid']['custom_field_settings']['$get']>,
) {
  return ['teams', '/teams/:team_gid/custom_field_settings', args] as const
}

export function getTeamsTeamGidCustomFieldSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_gid']['custom_field_settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['custom_field_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_gid']['custom_field_settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamGidCustomFieldSettingsQueryKey>
  >({
    queryKey: getTeamsTeamGidCustomFieldSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_gid'].custom_field_settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamsTeamGidCustomFieldSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_gid']['custom_field_settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['custom_field_settings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.teams)[':team_gid']['custom_field_settings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamGidCustomFieldSettingsQueryKey>
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
      ...getTeamsTeamGidCustomFieldSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamsTeamGidCustomFieldSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_gid']['custom_field_settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['custom_field_settings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.teams)[':team_gid']['custom_field_settings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamGidCustomFieldSettingsQueryKey>
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
      ...getTeamsTeamGidCustomFieldSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostCustomFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomFieldsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useCustomFieldsCustomFieldGid<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCustomFieldsCustomFieldGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomFieldsCustomFieldGid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCustomFieldsCustomFieldGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutCustomFieldsCustomFieldGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCustomFieldsCustomFieldGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteCustomFieldsCustomFieldGid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCustomFieldsCustomFieldGidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useWorkspacesWorkspaceGidCustomFields<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspacesWorkspaceGidCustomFieldsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGidCustomFields<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspacesWorkspaceGidCustomFieldsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostCustomFieldsCustomFieldGidEnumOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomFieldsCustomFieldGidEnumOptionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostCustomFieldsCustomFieldGidEnumOptionsInsert<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomFieldsCustomFieldGidEnumOptionsInsertMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutEnumOptionsEnumOptionGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEnumOptionsEnumOptionGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCustomTypesQueryKey(args: InferRequestType<typeof client.custom_types.$get>) {
  return ['custom_types', '/custom_types', args] as const
}

export function getCustomTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_types.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.custom_types.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCustomTypesQueryKey>
  >({
    queryKey: getCustomTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.custom_types.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCustomTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.custom_types.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCustomTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCustomTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCustomTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.custom_types.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCustomTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCustomTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCustomTypesCustomTypeGidQueryKey(
  args: InferRequestType<(typeof client.custom_types)[':custom_type_gid']['$get']>,
) {
  return ['custom_types', '/custom_types/:custom_type_gid', args] as const
}

export function getCustomTypesCustomTypeGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.custom_types)[':custom_type_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.custom_types)[':custom_type_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.custom_types)[':custom_type_gid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomTypesCustomTypeGidQueryKey>
  >({
    queryKey: getCustomTypesCustomTypeGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.custom_types[':custom_type_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCustomTypesCustomTypeGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.custom_types)[':custom_type_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.custom_types)[':custom_type_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.custom_types)[':custom_type_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomTypesCustomTypeGidQueryKey>
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
      ...getCustomTypesCustomTypeGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomTypesCustomTypeGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.custom_types)[':custom_type_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.custom_types)[':custom_type_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.custom_types)[':custom_type_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomTypesCustomTypeGidQueryKey>
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
      ...getCustomTypesCustomTypeGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function getPostExportsGraphMutationKey() {
  return ['exports', '/exports/graph', 'POST'] as const
}

export function getPostExportsGraphMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.graph.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.exports.graph.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportsGraphMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.exports.graph.$post>) {
      return parseResponse(client.exports.graph.$post(args, options))
    },
  })
}

export function usePostExportsGraph<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.graph.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.exports.graph.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExportsGraphMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostExportsResourceMutationKey() {
  return ['exports', '/exports/resource', 'POST'] as const
}

export function getPostExportsResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.resource.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.exports.resource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportsResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.exports.resource.$post>) {
      return parseResponse(client.exports.resource.$post(args, options))
    },
  })
}

export function usePostExportsResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.exports.resource.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.exports.resource.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExportsResourceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useGoalRelationshipsGoalRelationshipGid<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGoalRelationshipsGoalRelationshipGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGoalRelationshipsGoalRelationshipGid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGoalRelationshipsGoalRelationshipGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutGoalRelationshipsGoalRelationshipGid<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGoalRelationshipsGoalRelationshipGidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useGoalRelationships<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goal_relationships.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.goal_relationships.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGoalRelationshipsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGoalRelationships<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goal_relationships.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.goal_relationships.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGoalRelationshipsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostGoalsGoalGidAddSupportingRelationship<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGoalsGoalGidAddSupportingRelationshipMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostGoalsGoalGidRemoveSupportingRelationship<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGoalsGoalGidRemoveSupportingRelationshipMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useGoalsGoalGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.goals)[':goal_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGoalsGoalGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGoalsGoalGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.goals)[':goal_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGoalsGoalGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePutGoalsGoalGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGoalsGoalGidMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteGoalsGoalGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGoalsGoalGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useGoals<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.goals.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGoalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGoalsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGoals<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.goals.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGoalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGoalsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostGoals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$post>>>>>,
        TError,
        InferRequestType<typeof client.goals.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGoalsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostGoalsGoalGidSetMetric<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGoalsGoalGidSetMetricMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostGoalsGoalGidSetMetricCurrentValue<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGoalsGoalGidSetMetricCurrentValueMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostGoalsGoalGidAddFollowers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGoalsGoalGidAddFollowersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostGoalsGoalGidRemoveFollowers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGoalsGoalGidRemoveFollowersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useGoalsGoalGidParentGoals<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGoalsGoalGidParentGoalsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGoalsGoalGidParentGoals<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGoalsGoalGidParentGoalsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGoalsGoalGidAddCustomFieldSettingMutationKey() {
  return ['goals', '/goals/:goal_gid/addCustomFieldSetting', 'POST'] as const
}

export function getPostGoalsGoalGidAddCustomFieldSettingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.goals)[':goal_gid']['addCustomFieldSetting']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.goals)[':goal_gid']['addCustomFieldSetting']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGoalsGoalGidAddCustomFieldSettingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.goals)[':goal_gid']['addCustomFieldSetting']['$post']>,
    ) {
      return parseResponse(client.goals[':goal_gid'].addCustomFieldSetting.$post(args, options))
    },
  })
}

export function usePostGoalsGoalGidAddCustomFieldSetting<
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
                ReturnType<(typeof client.goals)[':goal_gid']['addCustomFieldSetting']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.goals)[':goal_gid']['addCustomFieldSetting']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGoalsGoalGidAddCustomFieldSettingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGoalsGoalGidRemoveCustomFieldSettingMutationKey() {
  return ['goals', '/goals/:goal_gid/removeCustomFieldSetting', 'POST'] as const
}

export function getPostGoalsGoalGidRemoveCustomFieldSettingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.goals)[':goal_gid']['removeCustomFieldSetting']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.goals)[':goal_gid']['removeCustomFieldSetting']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGoalsGoalGidRemoveCustomFieldSettingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.goals)[':goal_gid']['removeCustomFieldSetting']['$post']
      >,
    ) {
      return parseResponse(client.goals[':goal_gid'].removeCustomFieldSetting.$post(args, options))
    },
  })
}

export function usePostGoalsGoalGidRemoveCustomFieldSetting<
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
                ReturnType<(typeof client.goals)[':goal_gid']['removeCustomFieldSetting']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.goals)[':goal_gid']['removeCustomFieldSetting']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGoalsGoalGidRemoveCustomFieldSettingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useJobsJobGid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_gid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs)[':job_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJobsJobGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJobsJobGid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_gid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs)[':job_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJobsJobGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMembershipsQueryKey(args: InferRequestType<typeof client.memberships.$get>) {
  return ['memberships', '/memberships', args] as const
}

export function getMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.memberships.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.memberships.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.memberships.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMembershipsQueryKey>
  >({
    queryKey: getMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.memberships.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMemberships<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.memberships.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.memberships.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.memberships.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMembershipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMembershipsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMemberships<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.memberships.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.memberships.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.memberships.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMembershipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMembershipsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMembershipsMutationKey() {
  return ['memberships', '/memberships', 'POST'] as const
}

export function getPostMembershipsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.memberships.$post>>>>>,
    TError,
    InferRequestType<typeof client.memberships.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMembershipsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.memberships.$post>) {
      return parseResponse(client.memberships.$post(args, options))
    },
  })
}

export function usePostMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.memberships.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.memberships.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembershipsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMembershipsMembershipGidQueryKey(
  args: InferRequestType<(typeof client.memberships)[':membership_gid']['$get']>,
) {
  return ['memberships', '/memberships/:membership_gid', args] as const
}

export function getMembershipsMembershipGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.memberships)[':membership_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.memberships)[':membership_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.memberships)[':membership_gid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembershipsMembershipGidQueryKey>
  >({
    queryKey: getMembershipsMembershipGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.memberships[':membership_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembershipsMembershipGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.memberships)[':membership_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.memberships)[':membership_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.memberships)[':membership_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembershipsMembershipGidQueryKey>
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
      ...getMembershipsMembershipGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMembershipsMembershipGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.memberships)[':membership_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.memberships)[':membership_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.memberships)[':membership_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembershipsMembershipGidQueryKey>
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
      ...getMembershipsMembershipGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMembershipsMembershipGidMutationKey() {
  return ['memberships', '/memberships/:membership_gid', 'PUT'] as const
}

export function getPutMembershipsMembershipGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.memberships)[':membership_gid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.memberships)[':membership_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembershipsMembershipGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.memberships)[':membership_gid']['$put']>,
    ) {
      return parseResponse(client.memberships[':membership_gid'].$put(args, options))
    },
  })
}

export function usePutMembershipsMembershipGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.memberships)[':membership_gid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.memberships)[':membership_gid']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMembershipsMembershipGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteMembershipsMembershipGidMutationKey() {
  return ['memberships', '/memberships/:membership_gid', 'DELETE'] as const
}

export function getDeleteMembershipsMembershipGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.memberships)[':membership_gid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.memberships)[':membership_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMembershipsMembershipGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.memberships)[':membership_gid']['$delete']>,
    ) {
      return parseResponse(client.memberships[':membership_gid'].$delete(args, options))
    },
  })
}

export function useDeleteMembershipsMembershipGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.memberships)[':membership_gid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.memberships)[':membership_gid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMembershipsMembershipGidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserGidNotificationsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_gid']['notifications']['$get']>,
) {
  return ['users', '/users/:user_gid/notifications', args] as const
}

export function getUsersUserGidNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_gid']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_gid']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_gid']['notifications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserGidNotificationsQueryKey>
  >({
    queryKey: getUsersUserGidNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_gid'].notifications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserGidNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_gid']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_gid']['notifications']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_gid']['notifications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserGidNotificationsQueryKey>
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
      ...getUsersUserGidNotificationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserGidNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_gid']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_gid']['notifications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_gid']['notifications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserGidNotificationsQueryKey>
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
      ...getUsersUserGidNotificationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUsersUserGidNotificationsMarkReadMutationKey() {
  return ['users', '/users/:user_gid/notifications/markRead', 'POST'] as const
}

export function getPostUsersUserGidNotificationsMarkReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':user_gid']['notifications']['markRead']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_gid']['notifications']['markRead']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserGidNotificationsMarkReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_gid']['notifications']['markRead']['$post']
      >,
    ) {
      return parseResponse(client.users[':user_gid'].notifications.markRead.$post(args, options))
    },
  })
}

export function usePostUsersUserGidNotificationsMarkRead<
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
                ReturnType<(typeof client.users)[':user_gid']['notifications']['markRead']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_gid']['notifications']['markRead']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserGidNotificationsMarkReadMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUsersUserGidNotificationsMarkUnreadMutationKey() {
  return ['users', '/users/:user_gid/notifications/markUnread', 'POST'] as const
}

export function getPostUsersUserGidNotificationsMarkUnreadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':user_gid']['notifications']['markUnread']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_gid']['notifications']['markUnread']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserGidNotificationsMarkUnreadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_gid']['notifications']['markUnread']['$post']
      >,
    ) {
      return parseResponse(client.users[':user_gid'].notifications.markUnread.$post(args, options))
    },
  })
}

export function usePostUsersUserGidNotificationsMarkUnread<
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
                  (typeof client.users)[':user_gid']['notifications']['markUnread']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':user_gid']['notifications']['markUnread']['$post']
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
  const mutationDefaults = getPostUsersUserGidNotificationsMarkUnreadMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOooEntriesOooEntryGidQueryKey(
  args: InferRequestType<(typeof client.ooo_entries)[':ooo_entry_gid']['$get']>,
) {
  return ['ooo_entries', '/ooo_entries/:ooo_entry_gid', args] as const
}

export function getOooEntriesOooEntryGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ooo_entries)[':ooo_entry_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ooo_entries)[':ooo_entry_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ooo_entries)[':ooo_entry_gid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOooEntriesOooEntryGidQueryKey>
  >({
    queryKey: getOooEntriesOooEntryGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ooo_entries[':ooo_entry_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOooEntriesOooEntryGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ooo_entries)[':ooo_entry_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ooo_entries)[':ooo_entry_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ooo_entries)[':ooo_entry_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOooEntriesOooEntryGidQueryKey>
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
      ...getOooEntriesOooEntryGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOooEntriesOooEntryGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ooo_entries)[':ooo_entry_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ooo_entries)[':ooo_entry_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ooo_entries)[':ooo_entry_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOooEntriesOooEntryGidQueryKey>
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
      ...getOooEntriesOooEntryGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOooEntriesOooEntryGidMutationKey() {
  return ['ooo_entries', '/ooo_entries/:ooo_entry_gid', 'PUT'] as const
}

export function getPutOooEntriesOooEntryGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ooo_entries)[':ooo_entry_gid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ooo_entries)[':ooo_entry_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOooEntriesOooEntryGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ooo_entries)[':ooo_entry_gid']['$put']>,
    ) {
      return parseResponse(client.ooo_entries[':ooo_entry_gid'].$put(args, options))
    },
  })
}

export function usePutOooEntriesOooEntryGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ooo_entries)[':ooo_entry_gid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ooo_entries)[':ooo_entry_gid']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOooEntriesOooEntryGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteOooEntriesOooEntryGidMutationKey() {
  return ['ooo_entries', '/ooo_entries/:ooo_entry_gid', 'DELETE'] as const
}

export function getDeleteOooEntriesOooEntryGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ooo_entries)[':ooo_entry_gid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ooo_entries)[':ooo_entry_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOooEntriesOooEntryGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ooo_entries)[':ooo_entry_gid']['$delete']>,
    ) {
      return parseResponse(client.ooo_entries[':ooo_entry_gid'].$delete(args, options))
    },
  })
}

export function useDeleteOooEntriesOooEntryGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ooo_entries)[':ooo_entry_gid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ooo_entries)[':ooo_entry_gid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOooEntriesOooEntryGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOooEntriesQueryKey(args: InferRequestType<typeof client.ooo_entries.$get>) {
  return ['ooo_entries', '/ooo_entries', args] as const
}

export function getOooEntriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ooo_entries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ooo_entries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ooo_entries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOooEntriesQueryKey>
  >({
    queryKey: getOooEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ooo_entries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOooEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ooo_entries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ooo_entries.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ooo_entries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOooEntriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOooEntriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOooEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ooo_entries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ooo_entries.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ooo_entries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOooEntriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOooEntriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOooEntriesMutationKey() {
  return ['ooo_entries', '/ooo_entries', 'POST'] as const
}

export function getPostOooEntriesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ooo_entries.$post>>>>>,
    TError,
    InferRequestType<typeof client.ooo_entries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOooEntriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ooo_entries.$post>) {
      return parseResponse(client.ooo_entries.$post(args, options))
    },
  })
}

export function usePostOooEntries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ooo_entries.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ooo_entries.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOooEntriesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostOrganizationExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationExportsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useOrganizationExportsOrganizationExportGid<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOrganizationExportsOrganizationExportGidQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationExportsOrganizationExportGid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOrganizationExportsOrganizationExportGidQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePortfolioMemberships<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolio_memberships.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.portfolio_memberships.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPortfolioMembershipsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePortfolioMemberships<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolio_memberships.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.portfolio_memberships.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPortfolioMembershipsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePortfolioMembershipsPortfolioMembershipGid<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPortfolioMembershipsPortfolioMembershipGidQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePortfolioMembershipsPortfolioMembershipGid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPortfolioMembershipsPortfolioMembershipGidQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePortfoliosPortfolioGidPortfolioMemberships<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPortfoliosPortfolioGidPortfolioMembershipsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePortfoliosPortfolioGidPortfolioMemberships<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPortfoliosPortfolioGidPortfolioMembershipsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePortfolios<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolios.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.portfolios.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPortfoliosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePortfolios<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolios.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.portfolios.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPortfoliosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostPortfolios<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortfoliosMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePortfoliosPortfolioGid<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPortfoliosPortfolioGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePortfoliosPortfolioGid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPortfoliosPortfolioGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutPortfoliosPortfolioGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPortfoliosPortfolioGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeletePortfoliosPortfolioGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePortfoliosPortfolioGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePortfoliosPortfolioGidItems<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPortfoliosPortfolioGidItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePortfoliosPortfolioGidItems<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPortfoliosPortfolioGidItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostPortfoliosPortfolioGidAddItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortfoliosPortfolioGidAddItemMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostPortfoliosPortfolioGidRemoveItem<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortfoliosPortfolioGidRemoveItemMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostPortfoliosPortfolioGidAddCustomFieldSetting<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortfoliosPortfolioGidAddCustomFieldSettingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostPortfoliosPortfolioGidRemoveCustomFieldSetting<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortfoliosPortfolioGidRemoveCustomFieldSettingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostPortfoliosPortfolioGidAddMembers<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortfoliosPortfolioGidAddMembersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostPortfoliosPortfolioGidRemoveMembers<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortfoliosPortfolioGidRemoveMembersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPortfoliosPortfolioGidDuplicateMutationKey() {
  return ['portfolios', '/portfolios/:portfolio_gid/duplicate', 'POST'] as const
}

export function getPostPortfoliosPortfolioGidDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolios)[':portfolio_gid']['duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfoliosPortfolioGidDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['duplicate']['$post']>,
    ) {
      return parseResponse(client.portfolios[':portfolio_gid'].duplicate.$post(args, options))
    },
  })
}

export function usePostPortfoliosPortfolioGidDuplicate<
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
                ReturnType<(typeof client.portfolios)[':portfolio_gid']['duplicate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.portfolios)[':portfolio_gid']['duplicate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortfoliosPortfolioGidDuplicateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useProjectBriefsProjectBriefGid<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getProjectBriefsProjectBriefGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectBriefsProjectBriefGid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getProjectBriefsProjectBriefGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutProjectBriefsProjectBriefGid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProjectBriefsProjectBriefGidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteProjectBriefsProjectBriefGid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectBriefsProjectBriefGidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostProjectsProjectGidProjectBriefs<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectGidProjectBriefsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useProjectMembershipsProjectMembershipGid<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getProjectMembershipsProjectMembershipGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectMembershipsProjectMembershipGid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getProjectMembershipsProjectMembershipGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useProjectsProjectGidProjectMemberships<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getProjectsProjectGidProjectMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectGidProjectMemberships<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getProjectsProjectGidProjectMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProjectPortfolioSettingsProjectPortfolioSettingGidQueryKey(
  args: InferRequestType<
    (typeof client.project_portfolio_settings)[':project_portfolio_setting_gid']['$get']
  >,
) {
  return [
    'project_portfolio_settings',
    '/project_portfolio_settings/:project_portfolio_setting_gid',
    args,
  ] as const
}

export function getProjectPortfolioSettingsProjectPortfolioSettingGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.project_portfolio_settings)[':project_portfolio_setting_gid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.project_portfolio_settings)[':project_portfolio_setting_gid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.project_portfolio_settings)[':project_portfolio_setting_gid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectPortfolioSettingsProjectPortfolioSettingGidQueryKey>
  >({
    queryKey: getProjectPortfolioSettingsProjectPortfolioSettingGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project_portfolio_settings[':project_portfolio_setting_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectPortfolioSettingsProjectPortfolioSettingGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.project_portfolio_settings)[':project_portfolio_setting_gid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.project_portfolio_settings)[':project_portfolio_setting_gid']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.project_portfolio_settings)[':project_portfolio_setting_gid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectPortfolioSettingsProjectPortfolioSettingGidQueryKey>
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
      ...getProjectPortfolioSettingsProjectPortfolioSettingGidQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectPortfolioSettingsProjectPortfolioSettingGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.project_portfolio_settings)[':project_portfolio_setting_gid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.project_portfolio_settings)[':project_portfolio_setting_gid']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.project_portfolio_settings)[':project_portfolio_setting_gid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectPortfolioSettingsProjectPortfolioSettingGidQueryKey>
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
      ...getProjectPortfolioSettingsProjectPortfolioSettingGidQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutProjectPortfolioSettingsProjectPortfolioSettingGidMutationKey() {
  return [
    'project_portfolio_settings',
    '/project_portfolio_settings/:project_portfolio_setting_gid',
    'PUT',
  ] as const
}

export function getPutProjectPortfolioSettingsProjectPortfolioSettingGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.project_portfolio_settings)[':project_portfolio_setting_gid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.project_portfolio_settings)[':project_portfolio_setting_gid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProjectPortfolioSettingsProjectPortfolioSettingGidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.project_portfolio_settings)[':project_portfolio_setting_gid']['$put']
      >,
    ) {
      return parseResponse(
        client.project_portfolio_settings[':project_portfolio_setting_gid'].$put(args, options),
      )
    },
  })
}

export function usePutProjectPortfolioSettingsProjectPortfolioSettingGid<
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
                  (typeof client.project_portfolio_settings)[':project_portfolio_setting_gid']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.project_portfolio_settings)[':project_portfolio_setting_gid']['$put']
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
  const mutationDefaults = getPutProjectPortfolioSettingsProjectPortfolioSettingGidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProjectsProjectGidProjectPortfolioSettingsQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_gid']['project_portfolio_settings']['$get']
  >,
) {
  return ['projects', '/projects/:project_gid/project_portfolio_settings', args] as const
}

export function getProjectsProjectGidProjectPortfolioSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_gid']['project_portfolio_settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_gid']['project_portfolio_settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_gid']['project_portfolio_settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectGidProjectPortfolioSettingsQueryKey>
  >({
    queryKey: getProjectsProjectGidProjectPortfolioSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_gid'].project_portfolio_settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectGidProjectPortfolioSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_gid']['project_portfolio_settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_gid']['project_portfolio_settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_gid']['project_portfolio_settings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectGidProjectPortfolioSettingsQueryKey>
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
      ...getProjectsProjectGidProjectPortfolioSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectGidProjectPortfolioSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_gid']['project_portfolio_settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_gid']['project_portfolio_settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_gid']['project_portfolio_settings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectGidProjectPortfolioSettingsQueryKey>
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
      ...getProjectsProjectGidProjectPortfolioSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPortfoliosPortfolioGidProjectPortfolioSettingsQueryKey(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['project_portfolio_settings']['$get']
  >,
) {
  return ['portfolios', '/portfolios/:portfolio_gid/project_portfolio_settings', args] as const
}

export function getPortfoliosPortfolioGidProjectPortfolioSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.portfolios)[':portfolio_gid']['project_portfolio_settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['project_portfolio_settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolios)[':portfolio_gid']['project_portfolio_settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPortfoliosPortfolioGidProjectPortfolioSettingsQueryKey>
  >({
    queryKey: getPortfoliosPortfolioGidProjectPortfolioSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.portfolios[':portfolio_gid'].project_portfolio_settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePortfoliosPortfolioGidProjectPortfolioSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.portfolios)[':portfolio_gid']['project_portfolio_settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['project_portfolio_settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.portfolios)[':portfolio_gid']['project_portfolio_settings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortfoliosPortfolioGidProjectPortfolioSettingsQueryKey>
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
      ...getPortfoliosPortfolioGidProjectPortfolioSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePortfoliosPortfolioGidProjectPortfolioSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.portfolios)[':portfolio_gid']['project_portfolio_settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['project_portfolio_settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.portfolios)[':portfolio_gid']['project_portfolio_settings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortfoliosPortfolioGidProjectPortfolioSettingsQueryKey>
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
      ...getPortfoliosPortfolioGidProjectPortfolioSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useProjectStatusesProjectStatusGid<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getProjectStatusesProjectStatusGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectStatusesProjectStatusGid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getProjectStatusesProjectStatusGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useDeleteProjectStatusesProjectStatusGid<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectStatusesProjectStatusGidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useProjectsProjectGidProjectStatuses<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getProjectsProjectGidProjectStatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectGidProjectStatuses<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getProjectsProjectGidProjectStatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostProjectsProjectGidProjectStatuses<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectGidProjectStatusesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useProjectTemplatesProjectTemplateGid<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getProjectTemplatesProjectTemplateGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectTemplatesProjectTemplateGid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getProjectTemplatesProjectTemplateGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteProjectTemplatesProjectTemplateGidMutationKey() {
  return ['project_templates', '/project_templates/:project_template_gid', 'DELETE'] as const
}

export function getDeleteProjectTemplatesProjectTemplateGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project_templates)[':project_template_gid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.project_templates)[':project_template_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectTemplatesProjectTemplateGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.project_templates)[':project_template_gid']['$delete']>,
    ) {
      return parseResponse(client.project_templates[':project_template_gid'].$delete(args, options))
    },
  })
}

export function useDeleteProjectTemplatesProjectTemplateGid<
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
                ReturnType<(typeof client.project_templates)[':project_template_gid']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.project_templates)[':project_template_gid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectTemplatesProjectTemplateGidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useProjectTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.project_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.project_templates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProjectTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProjectTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.project_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.project_templates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProjectTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTeamsTeamGidProjectTemplates<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTeamsTeamGidProjectTemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamsTeamGidProjectTemplates<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTeamsTeamGidProjectTemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostProjectTemplatesProjectTemplateGidInstantiateProject<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostProjectTemplatesProjectTemplateGidInstantiateProjectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.projects.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.projects.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useProjectsProjectGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProjectsProjectGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProjectsProjectGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProjectsProjectGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePutProjectsProjectGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProjectsProjectGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteProjectsProjectGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectsProjectGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostProjectsProjectGidDuplicate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectGidDuplicateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useTasksTaskGidProjects<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTasksTaskGidProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTasksTaskGidProjects<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTasksTaskGidProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTeamsTeamGidProjects<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsTeamGidProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsTeamGidProjects<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsTeamGidProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostTeamsTeamGidProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTeamsTeamGidProjectsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useWorkspacesWorkspaceGidProjects<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspacesWorkspaceGidProjectsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGidProjects<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspacesWorkspaceGidProjectsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostWorkspacesWorkspaceGidProjects<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkspacesWorkspaceGidProjectsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceGidProjectsSearchQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['projects']['search']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace_gid/projects/search', args] as const
}

export function getWorkspacesWorkspaceGidProjectsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['projects']['search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['projects']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workspaces)[':workspace_gid']['projects']['search']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidProjectsSearchQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidProjectsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].projects.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWorkspacesWorkspaceGidProjectsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['projects']['search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['projects']['search']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workspaces)[':workspace_gid']['projects']['search']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidProjectsSearchQueryKey>
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
      ...getWorkspacesWorkspaceGidProjectsSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGidProjectsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['projects']['search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['projects']['search']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workspaces)[':workspace_gid']['projects']['search']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidProjectsSearchQueryKey>
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
      ...getWorkspacesWorkspaceGidProjectsSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostProjectsProjectGidAddCustomFieldSetting<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectGidAddCustomFieldSettingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostProjectsProjectGidRemoveCustomFieldSetting<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectGidRemoveCustomFieldSettingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useProjectsProjectGidTaskCounts<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getProjectsProjectGidTaskCountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectGidTaskCounts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getProjectsProjectGidTaskCountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostProjectsProjectGidAddMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectGidAddMembersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostProjectsProjectGidRemoveMembers<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectGidRemoveMembersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostProjectsProjectGidAddFollowers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectGidAddFollowersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostProjectsProjectGidRemoveFollowers<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectGidRemoveFollowersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostProjectsProjectGidSaveAsTemplate<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectGidSaveAsTemplateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostProjectsProjectGidRollupMutationKey() {
  return ['projects', '/projects/:project_gid/rollup', 'POST'] as const
}

export function getPostProjectsProjectGidRollupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['rollup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_gid']['rollup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectGidRollupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_gid']['rollup']['$post']>,
    ) {
      return parseResponse(client.projects[':project_gid'].rollup.$post(args, options))
    },
  })
}

export function usePostProjectsProjectGidRollup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_gid']['rollup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_gid']['rollup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectGidRollupMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRatesQueryKey(args: InferRequestType<typeof client.rates.$get>) {
  return ['rates', '/rates', args] as const
}

export function getRatesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rates.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRatesQueryKey>
  >({
    queryKey: getRatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRates<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rates.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rates.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRates<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rates.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rates.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRatesMutationKey() {
  return ['rates', '/rates', 'POST'] as const
}

export function getPostRatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rates.$post>>>>>,
    TError,
    InferRequestType<typeof client.rates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rates.$post>) {
      return parseResponse(client.rates.$post(args, options))
    },
  })
}

export function usePostRates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rates.$post>>>>>,
        TError,
        InferRequestType<typeof client.rates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRatesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRatesRateGidQueryKey(
  args: InferRequestType<(typeof client.rates)[':rate_gid']['$get']>,
) {
  return ['rates', '/rates/:rate_gid', args] as const
}

export function getRatesRateGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rates)[':rate_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rates)[':rate_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rates)[':rate_gid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRatesRateGidQueryKey>
  >({
    queryKey: getRatesRateGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rates[':rate_gid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRatesRateGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rates)[':rate_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rates)[':rate_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rates)[':rate_gid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRatesRateGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRatesRateGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRatesRateGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rates)[':rate_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rates)[':rate_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rates)[':rate_gid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRatesRateGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRatesRateGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutRatesRateGidMutationKey() {
  return ['rates', '/rates/:rate_gid', 'PUT'] as const
}

export function getPutRatesRateGidMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rates)[':rate_gid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.rates)[':rate_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRatesRateGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rates)[':rate_gid']['$put']>) {
      return parseResponse(client.rates[':rate_gid'].$put(args, options))
    },
  })
}

export function usePutRatesRateGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rates)[':rate_gid']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.rates)[':rate_gid']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRatesRateGidMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRatesRateGidMutationKey() {
  return ['rates', '/rates/:rate_gid', 'DELETE'] as const
}

export function getDeleteRatesRateGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rates)[':rate_gid']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.rates)[':rate_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRatesRateGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rates)[':rate_gid']['$delete']>) {
      return parseResponse(client.rates[':rate_gid'].$delete(args, options))
    },
  })
}

export function useDeleteRatesRateGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rates)[':rate_gid']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.rates)[':rate_gid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRatesRateGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getReactionsQueryKey(args: InferRequestType<typeof client.reactions.$get>) {
  return ['reactions', '/reactions', args] as const
}

export function getReactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reactions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reactions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reactions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReactionsQueryKey>
  >({
    queryKey: getReactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reactions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reactions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReactionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reactions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reactions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReactionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTablesTableGidRecordsQueryKey(
  args: InferRequestType<(typeof client.tables)[':table_gid']['records']['$get']>,
) {
  return ['tables', '/tables/:table_gid/records', args] as const
}

export function getTablesTableGidRecordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tables)[':table_gid']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':table_gid']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tables)[':table_gid']['records']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesTableGidRecordsQueryKey>
  >({
    queryKey: getTablesTableGidRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tables[':table_gid'].records.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTablesTableGidRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tables)[':table_gid']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':table_gid']['records']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tables)[':table_gid']['records']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesTableGidRecordsQueryKey>
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
      ...getTablesTableGidRecordsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTablesTableGidRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tables)[':table_gid']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':table_gid']['records']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tables)[':table_gid']['records']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesTableGidRecordsQueryKey>
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
      ...getTablesTableGidRecordsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceGidRecordsSearchQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['records']['search']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/records/search', args] as const
}

export function getWorkspacesWorkspaceGidRecordsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['records']['search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['records']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workspaces)[':workspace_gid']['records']['search']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidRecordsSearchQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidRecordsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].records.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWorkspacesWorkspaceGidRecordsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['records']['search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['records']['search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workspaces)[':workspace_gid']['records']['search']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidRecordsSearchQueryKey>
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
      ...getWorkspacesWorkspaceGidRecordsSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGidRecordsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['records']['search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['records']['search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workspaces)[':workspace_gid']['records']['search']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidRecordsSearchQueryKey>
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
      ...getWorkspacesWorkspaceGidRecordsSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRecordsMutationKey() {
  return ['records', '/records', 'POST'] as const
}

export function getPostRecordsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$post>>>>>,
    TError,
    InferRequestType<typeof client.records.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecordsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.records.$post>) {
      return parseResponse(client.records.$post(args, options))
    },
  })
}

export function usePostRecords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$post>>>>>,
        TError,
        InferRequestType<typeof client.records.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRecordsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRecordsRecordGidQueryKey(
  args: InferRequestType<(typeof client.records)[':record_gid']['$get']>,
) {
  return ['records', '/records/:record_gid', args] as const
}

export function getRecordsRecordGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':record_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.records)[':record_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':record_gid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecordsRecordGidQueryKey>
  >({
    queryKey: getRecordsRecordGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.records[':record_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecordsRecordGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':record_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.records)[':record_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.records)[':record_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecordsRecordGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecordsRecordGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecordsRecordGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':record_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.records)[':record_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.records)[':record_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecordsRecordGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecordsRecordGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutRecordsRecordGidMutationKey() {
  return ['records', '/records/:record_gid', 'PUT'] as const
}

export function getPutRecordsRecordGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':record_gid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.records)[':record_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRecordsRecordGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.records)[':record_gid']['$put']>) {
      return parseResponse(client.records[':record_gid'].$put(args, options))
    },
  })
}

export function usePutRecordsRecordGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.records)[':record_gid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.records)[':record_gid']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRecordsRecordGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRecordsRecordGidMutationKey() {
  return ['records', '/records/:record_gid', 'DELETE'] as const
}

export function getDeleteRecordsRecordGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':record_gid']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.records)[':record_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRecordsRecordGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.records)[':record_gid']['$delete']>) {
      return parseResponse(client.records[':record_gid'].$delete(args, options))
    },
  })
}

export function useDeleteRecordsRecordGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.records)[':record_gid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.records)[':record_gid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRecordsRecordGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRolesQueryKey(args: InferRequestType<typeof client.roles.$get>) {
  return ['roles', '/roles', args] as const
}

export function getRolesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.roles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRolesQueryKey>
  >({
    queryKey: getRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.roles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRoles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.roles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRolesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRoles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.roles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRolesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRolesMutationKey() {
  return ['roles', '/roles', 'POST'] as const
}

export function getPostRolesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$post>>>>>,
    TError,
    InferRequestType<typeof client.roles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRolesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.roles.$post>) {
      return parseResponse(client.roles.$post(args, options))
    },
  })
}

export function usePostRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$post>>>>>,
        TError,
        InferRequestType<typeof client.roles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRolesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRolesRoleGidQueryKey(
  args: InferRequestType<(typeof client.roles)[':role_gid']['$get']>,
) {
  return ['roles', '/roles/:role_gid', args] as const
}

export function getRolesRoleGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.roles)[':role_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_gid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRolesRoleGidQueryKey>
  >({
    queryKey: getRolesRoleGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.roles[':role_gid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRolesRoleGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.roles)[':role_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_gid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRolesRoleGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRolesRoleGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRolesRoleGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.roles)[':role_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_gid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRolesRoleGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRolesRoleGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutRolesRoleGidMutationKey() {
  return ['roles', '/roles/:role_gid', 'PUT'] as const
}

export function getPutRolesRoleGidMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_gid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.roles)[':role_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRolesRoleGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.roles)[':role_gid']['$put']>) {
      return parseResponse(client.roles[':role_gid'].$put(args, options))
    },
  })
}

export function usePutRolesRoleGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_gid']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.roles)[':role_gid']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRolesRoleGidMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRolesRoleGidMutationKey() {
  return ['roles', '/roles/:role_gid', 'DELETE'] as const
}

export function getDeleteRolesRoleGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_gid']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.roles)[':role_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRolesRoleGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.roles)[':role_gid']['$delete']>) {
      return parseResponse(client.roles[':role_gid'].$delete(args, options))
    },
  })
}

export function useDeleteRolesRoleGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_gid']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.roles)[':role_gid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRolesRoleGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRuleTriggersRuleTriggerGidRunMutationKey() {
  return ['rule_triggers', '/rule_triggers/:rule_trigger_gid/run', 'POST'] as const
}

export function getPostRuleTriggersRuleTriggerGidRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rule_triggers)[':rule_trigger_gid']['run']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.rule_triggers)[':rule_trigger_gid']['run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRuleTriggersRuleTriggerGidRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.rule_triggers)[':rule_trigger_gid']['run']['$post']>,
    ) {
      return parseResponse(client.rule_triggers[':rule_trigger_gid'].run.$post(args, options))
    },
  })
}

export function usePostRuleTriggersRuleTriggerGidRun<
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
                ReturnType<(typeof client.rule_triggers)[':rule_trigger_gid']['run']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.rule_triggers)[':rule_trigger_gid']['run']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRuleTriggersRuleTriggerGidRunMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useSectionsSectionGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':section_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':section_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSectionsSectionGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSectionsSectionGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':section_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':section_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSectionsSectionGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePutSectionsSectionGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSectionsSectionGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteSectionsSectionGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSectionsSectionGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useProjectsProjectGidSections<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getProjectsProjectGidSectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectGidSections<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getProjectsProjectGidSectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostProjectsProjectGidSections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectGidSectionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostSectionsSectionGidAddTask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSectionsSectionGidAddTaskMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostProjectsProjectGidSectionsInsert<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectGidSectionsInsertMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStatusUpdatesStatusUpdateGidQueryKey(
  args: InferRequestType<(typeof client.status_updates)[':status_update_gid']['$get']>,
) {
  return ['status_updates', '/status_updates/:status_update_gid', args] as const
}

export function getStatusUpdatesStatusUpdateGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.status_updates)[':status_update_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.status_updates)[':status_update_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.status_updates)[':status_update_gid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatusUpdatesStatusUpdateGidQueryKey>
  >({
    queryKey: getStatusUpdatesStatusUpdateGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.status_updates[':status_update_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStatusUpdatesStatusUpdateGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.status_updates)[':status_update_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.status_updates)[':status_update_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.status_updates)[':status_update_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatusUpdatesStatusUpdateGidQueryKey>
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
      ...getStatusUpdatesStatusUpdateGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatusUpdatesStatusUpdateGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.status_updates)[':status_update_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.status_updates)[':status_update_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.status_updates)[':status_update_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatusUpdatesStatusUpdateGidQueryKey>
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
      ...getStatusUpdatesStatusUpdateGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteStatusUpdatesStatusUpdateGidMutationKey() {
  return ['status_updates', '/status_updates/:status_update_gid', 'DELETE'] as const
}

export function getDeleteStatusUpdatesStatusUpdateGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.status_updates)[':status_update_gid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.status_updates)[':status_update_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStatusUpdatesStatusUpdateGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.status_updates)[':status_update_gid']['$delete']>,
    ) {
      return parseResponse(client.status_updates[':status_update_gid'].$delete(args, options))
    },
  })
}

export function useDeleteStatusUpdatesStatusUpdateGid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.status_updates)[':status_update_gid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.status_updates)[':status_update_gid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteStatusUpdatesStatusUpdateGidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useStatusUpdates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_updates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.status_updates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatusUpdatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatusUpdates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_updates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.status_updates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatusUpdatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostStatusUpdates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStatusUpdatesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useStoriesStoryGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stories)[':story_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoriesStoryGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoriesStoryGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stories)[':story_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoriesStoryGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePutStoriesStoryGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutStoriesStoryGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteStoriesStoryGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteStoriesStoryGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useTasksTaskGidStories<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTasksTaskGidStoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTasksTaskGidStories<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTasksTaskGidStoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostTasksTaskGidStories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskGidStoriesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRecordsRecordGidStoriesQueryKey(
  args: InferRequestType<(typeof client.records)[':record_gid']['stories']['$get']>,
) {
  return ['records', '/records/:record_gid/stories', args] as const
}

export function getRecordsRecordGidStoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.records)[':record_gid']['stories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.records)[':record_gid']['stories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.records)[':record_gid']['stories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecordsRecordGidStoriesQueryKey>
  >({
    queryKey: getRecordsRecordGidStoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.records[':record_gid'].stories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecordsRecordGidStories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.records)[':record_gid']['stories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.records)[':record_gid']['stories']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.records)[':record_gid']['stories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecordsRecordGidStoriesQueryKey>
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
      ...getRecordsRecordGidStoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecordsRecordGidStories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.records)[':record_gid']['stories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.records)[':record_gid']['stories']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.records)[':record_gid']['stories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecordsRecordGidStoriesQueryKey>
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
      ...getRecordsRecordGidStoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRecordsRecordGidStoriesMutationKey() {
  return ['records', '/records/:record_gid/stories', 'POST'] as const
}

export function getPostRecordsRecordGidStoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.records)[':record_gid']['stories']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.records)[':record_gid']['stories']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRecordsRecordGidStoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.records)[':record_gid']['stories']['$post']>,
    ) {
      return parseResponse(client.records[':record_gid'].stories.$post(args, options))
    },
  })
}

export function usePostRecordsRecordGidStories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.records)[':record_gid']['stories']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.records)[':record_gid']['stories']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRecordsRecordGidStoriesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGoalsGoalGidStoriesQueryKey(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['stories']['$get']>,
) {
  return ['goals', '/goals/:goal_gid/stories', args] as const
}

export function getGoalsGoalGidStoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.goals)[':goal_gid']['stories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['stories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.goals)[':goal_gid']['stories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGoalsGoalGidStoriesQueryKey>
  >({
    queryKey: getGoalsGoalGidStoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.goals[':goal_gid'].stories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGoalsGoalGidStories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.goals)[':goal_gid']['stories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['stories']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.goals)[':goal_gid']['stories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGoalsGoalGidStoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGoalsGoalGidStoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGoalsGoalGidStories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.goals)[':goal_gid']['stories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['stories']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.goals)[':goal_gid']['stories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGoalsGoalGidStoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGoalsGoalGidStoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostGoalsGoalGidStoriesMutationKey() {
  return ['goals', '/goals/:goal_gid/stories', 'POST'] as const
}

export function getPostGoalsGoalGidStoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.goals)[':goal_gid']['stories']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.goals)[':goal_gid']['stories']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGoalsGoalGidStoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.goals)[':goal_gid']['stories']['$post']>,
    ) {
      return parseResponse(client.goals[':goal_gid'].stories.$post(args, options))
    },
  })
}

export function usePostGoalsGoalGidStories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.goals)[':goal_gid']['stories']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.goals)[':goal_gid']['stories']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGoalsGoalGidStoriesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceGidTablesQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tables']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/tables', args] as const
}

export function getWorkspacesWorkspaceGidTablesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tables']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tables']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidTablesQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidTablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].tables.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWorkspacesWorkspaceGidTables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tables']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tables']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidTablesQueryKey>
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
      ...getWorkspacesWorkspaceGidTablesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGidTables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tables']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tables']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidTablesQueryKey>
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
      ...getWorkspacesWorkspaceGidTablesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTablesMutationKey() {
  return ['tables', '/tables', 'POST'] as const
}

export function getPostTablesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$post>>>>>,
    TError,
    InferRequestType<typeof client.tables.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTablesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tables.$post>) {
      return parseResponse(client.tables.$post(args, options))
    },
  })
}

export function usePostTables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$post>>>>>,
        TError,
        InferRequestType<typeof client.tables.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTablesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTablesTableGidQueryKey(
  args: InferRequestType<(typeof client.tables)[':table_gid']['$get']>,
) {
  return ['tables', '/tables/:table_gid', args] as const
}

export function getTablesTableGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':table_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':table_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':table_gid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesTableGidQueryKey>
  >({
    queryKey: getTablesTableGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tables[':table_gid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTablesTableGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':table_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':table_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':table_gid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesTableGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTablesTableGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTablesTableGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':table_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':table_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':table_gid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesTableGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTablesTableGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTablesTableGidMutationKey() {
  return ['tables', '/tables/:table_gid', 'PUT'] as const
}

export function getPutTablesTableGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':table_gid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tables)[':table_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTablesTableGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tables)[':table_gid']['$put']>) {
      return parseResponse(client.tables[':table_gid'].$put(args, options))
    },
  })
}

export function usePutTablesTableGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':table_gid']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tables)[':table_gid']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTablesTableGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTablesTableGidMutationKey() {
  return ['tables', '/tables/:table_gid', 'DELETE'] as const
}

export function getDeleteTablesTableGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':table_gid']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tables)[':table_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTablesTableGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tables)[':table_gid']['$delete']>) {
      return parseResponse(client.tables[':table_gid'].$delete(args, options))
    },
  })
}

export function useDeleteTablesTableGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tables)[':table_gid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tables)[':table_gid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTablesTableGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTablesTableGidAddCustomFieldSettingMutationKey() {
  return ['tables', '/tables/:table_gid/addCustomFieldSetting', 'POST'] as const
}

export function getPostTablesTableGidAddCustomFieldSettingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tables)[':table_gid']['addCustomFieldSetting']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tables)[':table_gid']['addCustomFieldSetting']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTablesTableGidAddCustomFieldSettingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tables)[':table_gid']['addCustomFieldSetting']['$post']
      >,
    ) {
      return parseResponse(client.tables[':table_gid'].addCustomFieldSetting.$post(args, options))
    },
  })
}

export function usePostTablesTableGidAddCustomFieldSetting<
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
                ReturnType<(typeof client.tables)[':table_gid']['addCustomFieldSetting']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tables)[':table_gid']['addCustomFieldSetting']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTablesTableGidAddCustomFieldSettingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTablesTableGidRemoveCustomFieldSettingMutationKey() {
  return ['tables', '/tables/:table_gid/removeCustomFieldSetting', 'POST'] as const
}

export function getPostTablesTableGidRemoveCustomFieldSettingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tables)[':table_gid']['removeCustomFieldSetting']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tables)[':table_gid']['removeCustomFieldSetting']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTablesTableGidRemoveCustomFieldSettingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tables)[':table_gid']['removeCustomFieldSetting']['$post']
      >,
    ) {
      return parseResponse(
        client.tables[':table_gid'].removeCustomFieldSetting.$post(args, options),
      )
    },
  })
}

export function usePostTablesTableGidRemoveCustomFieldSetting<
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
                  (typeof client.tables)[':table_gid']['removeCustomFieldSetting']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tables)[':table_gid']['removeCustomFieldSetting']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTablesTableGidRemoveCustomFieldSettingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTablesTableGidGetCustomFieldSettingsQueryKey(
  args: InferRequestType<(typeof client.tables)[':table_gid']['getCustomFieldSettings']['$get']>,
) {
  return ['tables', '/tables/:table_gid/getCustomFieldSettings', args] as const
}

export function getTablesTableGidGetCustomFieldSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tables)[':table_gid']['getCustomFieldSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':table_gid']['getCustomFieldSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tables)[':table_gid']['getCustomFieldSettings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesTableGidGetCustomFieldSettingsQueryKey>
  >({
    queryKey: getTablesTableGidGetCustomFieldSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tables[':table_gid'].getCustomFieldSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTablesTableGidGetCustomFieldSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tables)[':table_gid']['getCustomFieldSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':table_gid']['getCustomFieldSettings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tables)[':table_gid']['getCustomFieldSettings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesTableGidGetCustomFieldSettingsQueryKey>
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
      ...getTablesTableGidGetCustomFieldSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTablesTableGidGetCustomFieldSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tables)[':table_gid']['getCustomFieldSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':table_gid']['getCustomFieldSettings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tables)[':table_gid']['getCustomFieldSettings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesTableGidGetCustomFieldSettingsQueryKey>
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
      ...getTablesTableGidGetCustomFieldSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTablesTableGidCustomFieldSettingsQueryKey(
  args: InferRequestType<(typeof client.tables)[':table_gid']['custom_field_settings']['$get']>,
) {
  return ['tables', '/tables/:table_gid/custom_field_settings', args] as const
}

export function getTablesTableGidCustomFieldSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tables)[':table_gid']['custom_field_settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':table_gid']['custom_field_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tables)[':table_gid']['custom_field_settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesTableGidCustomFieldSettingsQueryKey>
  >({
    queryKey: getTablesTableGidCustomFieldSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tables[':table_gid'].custom_field_settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTablesTableGidCustomFieldSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tables)[':table_gid']['custom_field_settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':table_gid']['custom_field_settings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tables)[':table_gid']['custom_field_settings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesTableGidCustomFieldSettingsQueryKey>
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
      ...getTablesTableGidCustomFieldSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTablesTableGidCustomFieldSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tables)[':table_gid']['custom_field_settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':table_gid']['custom_field_settings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tables)[':table_gid']['custom_field_settings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesTableGidCustomFieldSettingsQueryKey>
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
      ...getTablesTableGidCustomFieldSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
        TError,
        InferRequestType<typeof client.tags.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useTagsTagGid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tag_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsTagGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsTagGid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tag_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsTagGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePutTagsTagGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTagsTagGidMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteTagsTagGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsTagGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useTasksTaskGidTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTasksTaskGidTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTasksTaskGidTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTasksTaskGidTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useWorkspacesWorkspaceGidTags<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspacesWorkspaceGidTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGidTags<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspacesWorkspaceGidTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostWorkspacesWorkspaceGidTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkspacesWorkspaceGidTagsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTaskTemplatesQueryKey(
  args: InferRequestType<typeof client.task_templates.$get>,
) {
  return ['task_templates', '/task_templates', args] as const
}

export function getTaskTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.task_templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaskTemplatesQueryKey>
  >({
    queryKey: getTaskTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTaskTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_templates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTaskTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTaskTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTaskTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_templates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTaskTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTaskTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTaskTemplatesTaskTemplateGidQueryKey(
  args: InferRequestType<(typeof client.task_templates)[':task_template_gid']['$get']>,
) {
  return ['task_templates', '/task_templates/:task_template_gid', args] as const
}

export function getTaskTemplatesTaskTemplateGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_templates)[':task_template_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_templates)[':task_template_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_templates)[':task_template_gid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskTemplatesTaskTemplateGidQueryKey>
  >({
    queryKey: getTaskTemplatesTaskTemplateGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_templates[':task_template_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTaskTemplatesTaskTemplateGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_templates)[':task_template_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_templates)[':task_template_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_templates)[':task_template_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskTemplatesTaskTemplateGidQueryKey>
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
      ...getTaskTemplatesTaskTemplateGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTaskTemplatesTaskTemplateGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_templates)[':task_template_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_templates)[':task_template_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_templates)[':task_template_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskTemplatesTaskTemplateGidQueryKey>
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
      ...getTaskTemplatesTaskTemplateGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteTaskTemplatesTaskTemplateGidMutationKey() {
  return ['task_templates', '/task_templates/:task_template_gid', 'DELETE'] as const
}

export function getDeleteTaskTemplatesTaskTemplateGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_templates)[':task_template_gid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.task_templates)[':task_template_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTaskTemplatesTaskTemplateGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.task_templates)[':task_template_gid']['$delete']>,
    ) {
      return parseResponse(client.task_templates[':task_template_gid'].$delete(args, options))
    },
  })
}

export function useDeleteTaskTemplatesTaskTemplateGid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_templates)[':task_template_gid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.task_templates)[':task_template_gid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTaskTemplatesTaskTemplateGidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTaskTemplatesTaskTemplateGidInstantiateTaskMutationKey() {
  return ['task_templates', '/task_templates/:task_template_gid/instantiateTask', 'POST'] as const
}

export function getPostTaskTemplatesTaskTemplateGidInstantiateTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.task_templates)[':task_template_gid']['instantiateTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.task_templates)[':task_template_gid']['instantiateTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTaskTemplatesTaskTemplateGidInstantiateTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.task_templates)[':task_template_gid']['instantiateTask']['$post']
      >,
    ) {
      return parseResponse(
        client.task_templates[':task_template_gid'].instantiateTask.$post(args, options),
      )
    },
  })
}

export function usePostTaskTemplatesTaskTemplateGidInstantiateTask<
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
                  (typeof client.task_templates)[':task_template_gid']['instantiateTask']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.task_templates)[':task_template_gid']['instantiateTask']['$post']
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
  const mutationDefaults = getPostTaskTemplatesTaskTemplateGidInstantiateTaskMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useTasks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTasks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useTasksTaskGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTasksTaskGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTasksTaskGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTasksTaskGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePutTasksTaskGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTasksTaskGidMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteTasksTaskGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTasksTaskGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostTasksTaskGidDuplicate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskGidDuplicateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useProjectsProjectGidTasks<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getProjectsProjectGidTasksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectGidTasks<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getProjectsProjectGidTasksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSectionsSectionGidTasks<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSectionsSectionGidTasksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSectionsSectionGidTasks<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSectionsSectionGidTasksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTagsTagGidTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tag_gid']['tasks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsTagGidTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsTagGidTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tag_gid']['tasks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsTagGidTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUserTaskListsUserTaskListGidTasks<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserTaskListsUserTaskListGidTasksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserTaskListsUserTaskListGidTasks<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserTaskListsUserTaskListGidTasksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTasksTaskGidSubtasks<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTasksTaskGidSubtasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTasksTaskGidSubtasks<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTasksTaskGidSubtasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostTasksTaskGidSubtasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskGidSubtasksMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostTasksTaskGidSetParent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskGidSetParentMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useTasksTaskGidDependencies<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTasksTaskGidDependenciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTasksTaskGidDependencies<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTasksTaskGidDependenciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostTasksTaskGidAddDependencies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskGidAddDependenciesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostTasksTaskGidRemoveDependencies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskGidRemoveDependenciesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useTasksTaskGidDependents<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTasksTaskGidDependentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTasksTaskGidDependents<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTasksTaskGidDependentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostTasksTaskGidAddDependents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskGidAddDependentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostTasksTaskGidRemoveDependents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskGidRemoveDependentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostTasksTaskGidAddProject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskGidAddProjectMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostTasksTaskGidRemoveProject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskGidRemoveProjectMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostTasksTaskGidAddTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskGidAddTagMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostTasksTaskGidRemoveTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskGidRemoveTagMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostTasksTaskGidAddFollowers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskGidAddFollowersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostTasksTaskGidRemoveFollowers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskGidRemoveFollowersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTasksTaskGidRollupMutationKey() {
  return ['tasks', '/tasks/:task_gid/rollup', 'POST'] as const
}

export function getPostTasksTaskGidRollupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['rollup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_gid']['rollup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskGidRollupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':task_gid']['rollup']['$post']>,
    ) {
      return parseResponse(client.tasks[':task_gid'].rollup.$post(args, options))
    },
  })
}

export function usePostTasksTaskGidRollup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['rollup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_gid']['rollup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskGidRollupMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceGidTasksCustomIdCustomIdQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['tasks']['custom_id'][':custom_id']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace_gid/tasks/custom_id/:custom_id', args] as const
}

export function getWorkspacesWorkspaceGidTasksCustomIdCustomIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace_gid']['tasks']['custom_id'][':custom_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['tasks']['custom_id'][':custom_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspace_gid']['tasks']['custom_id'][':custom_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidTasksCustomIdCustomIdQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidTasksCustomIdCustomIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].tasks.custom_id[':custom_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWorkspacesWorkspaceGidTasksCustomIdCustomId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace_gid']['tasks']['custom_id'][':custom_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['tasks']['custom_id'][':custom_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workspaces)[':workspace_gid']['tasks']['custom_id'][':custom_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidTasksCustomIdCustomIdQueryKey>
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
      ...getWorkspacesWorkspaceGidTasksCustomIdCustomIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGidTasksCustomIdCustomId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace_gid']['tasks']['custom_id'][':custom_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['tasks']['custom_id'][':custom_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workspaces)[':workspace_gid']['tasks']['custom_id'][':custom_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidTasksCustomIdCustomIdQueryKey>
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
      ...getWorkspacesWorkspaceGidTasksCustomIdCustomIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useWorkspacesWorkspaceGidTasksSearch<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspacesWorkspaceGidTasksSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGidTasksSearch<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspacesWorkspaceGidTasksSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTeamMembershipsTeamMembershipGid<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTeamMembershipsTeamMembershipGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamMembershipsTeamMembershipGid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTeamMembershipsTeamMembershipGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTeamMemberships<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.team_memberships.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamMembershipsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamMemberships<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.team_memberships.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamMembershipsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTeamsTeamGidTeamMemberships<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTeamsTeamGidTeamMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamsTeamGidTeamMemberships<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTeamsTeamGidTeamMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersUserGidTeamMemberships<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserGidTeamMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserGidTeamMemberships<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserGidTeamMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostTeams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$post>>>>>,
        TError,
        InferRequestType<typeof client.teams.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTeamsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useTeamsTeamGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsTeamGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsTeamGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsTeamGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTeamsTeamGidMutationKey() {
  return ['teams', '/teams/:team_gid', 'PUT'] as const
}

export function getPutTeamsTeamGidMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_gid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':team_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTeamsTeamGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.teams)[':team_gid']['$put']>) {
      return parseResponse(client.teams[':team_gid'].$put(args, options))
    },
  })
}

export function usePutTeamsTeamGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_gid']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.teams)[':team_gid']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTeamsTeamGidMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useWorkspacesWorkspaceGidTeams<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspacesWorkspaceGidTeamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGidTeams<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspacesWorkspaceGidTeamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersUserGidTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_gid']['teams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_gid']['teams']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserGidTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserGidTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_gid']['teams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_gid']['teams']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserGidTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostTeamsTeamGidAddUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTeamsTeamGidAddUserMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTeamsTeamGidRemoveUserMutationKey() {
  return ['teams', '/teams/:team_gid/removeUser', 'POST'] as const
}

export function getPostTeamsTeamGidRemoveUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_gid']['removeUser']['$post']>>
        >
      >
    >,
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

export function usePostTeamsTeamGidRemoveUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_gid']['removeUser']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.teams)[':team_gid']['removeUser']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTeamsTeamGidRemoveUserMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useTimePeriodsTimePeriodGid<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTimePeriodsTimePeriodGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTimePeriodsTimePeriodGid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTimePeriodsTimePeriodGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTimePeriods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_periods.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.time_periods.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTimePeriodsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTimePeriods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_periods.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.time_periods.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTimePeriodsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTimeTrackingCategoriesTimeTrackingCategoryGidQueryKey(
  args: InferRequestType<
    (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$get']
  >,
) {
  return [
    'time_tracking_categories',
    '/time_tracking_categories/:time_tracking_category_gid',
    args,
  ] as const
}

export function getTimeTrackingCategoriesTimeTrackingCategoryGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimeTrackingCategoriesTimeTrackingCategoryGidQueryKey>
  >({
    queryKey: getTimeTrackingCategoriesTimeTrackingCategoryGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.time_tracking_categories[':time_tracking_category_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTimeTrackingCategoriesTimeTrackingCategoryGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimeTrackingCategoriesTimeTrackingCategoryGidQueryKey>
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
      ...getTimeTrackingCategoriesTimeTrackingCategoryGidQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTimeTrackingCategoriesTimeTrackingCategoryGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimeTrackingCategoriesTimeTrackingCategoryGidQueryKey>
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
      ...getTimeTrackingCategoriesTimeTrackingCategoryGidQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTimeTrackingCategoriesTimeTrackingCategoryGidMutationKey() {
  return [
    'time_tracking_categories',
    '/time_tracking_categories/:time_tracking_category_gid',
    'PUT',
  ] as const
}

export function getPutTimeTrackingCategoriesTimeTrackingCategoryGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutTimeTrackingCategoriesTimeTrackingCategoryGidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$put']
      >,
    ) {
      return parseResponse(
        client.time_tracking_categories[':time_tracking_category_gid'].$put(args, options),
      )
    },
  })
}

export function usePutTimeTrackingCategoriesTimeTrackingCategoryGid<
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
                  (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$put']
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
  const mutationDefaults = getPutTimeTrackingCategoriesTimeTrackingCategoryGidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTimeTrackingCategoriesTimeTrackingCategoryGidMutationKey() {
  return [
    'time_tracking_categories',
    '/time_tracking_categories/:time_tracking_category_gid',
    'DELETE',
  ] as const
}

export function getDeleteTimeTrackingCategoriesTimeTrackingCategoryGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTimeTrackingCategoriesTimeTrackingCategoryGidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$delete']
      >,
    ) {
      return parseResponse(
        client.time_tracking_categories[':time_tracking_category_gid'].$delete(args, options),
      )
    },
  })
}

export function useDeleteTimeTrackingCategoriesTimeTrackingCategoryGid<
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
                  (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$delete']
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
  const mutationDefaults = getDeleteTimeTrackingCategoriesTimeTrackingCategoryGidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntriesQueryKey(
  args: InferRequestType<
    (typeof client.time_tracking_categories)[':time_tracking_category_gid']['time_tracking_entries']['$get']
  >,
) {
  return [
    'time_tracking_categories',
    '/time_tracking_categories/:time_tracking_category_gid/time_tracking_entries',
    args,
  ] as const
}

export function getTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.time_tracking_categories)[':time_tracking_category_gid']['time_tracking_entries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.time_tracking_categories)[':time_tracking_category_gid']['time_tracking_entries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.time_tracking_categories)[':time_tracking_category_gid']['time_tracking_entries']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntriesQueryKey>
  >({
    queryKey: getTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.time_tracking_categories[':time_tracking_category_gid'].time_tracking_entries.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.time_tracking_categories)[':time_tracking_category_gid']['time_tracking_entries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.time_tracking_categories)[':time_tracking_category_gid']['time_tracking_entries']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.time_tracking_categories)[':time_tracking_category_gid']['time_tracking_entries']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntriesQueryKey
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
      ...getTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntriesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.time_tracking_categories)[':time_tracking_category_gid']['time_tracking_entries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.time_tracking_categories)[':time_tracking_category_gid']['time_tracking_entries']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.time_tracking_categories)[':time_tracking_category_gid']['time_tracking_entries']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntriesQueryKey
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
      ...getTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntriesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTimeTrackingCategoriesQueryKey(
  args: InferRequestType<typeof client.time_tracking_categories.$get>,
) {
  return ['time_tracking_categories', '/time_tracking_categories', args] as const
}

export function getTimeTrackingCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.time_tracking_categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.time_tracking_categories.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.time_tracking_categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimeTrackingCategoriesQueryKey>
  >({
    queryKey: getTimeTrackingCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.time_tracking_categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTimeTrackingCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.time_tracking_categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.time_tracking_categories.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.time_tracking_categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimeTrackingCategoriesQueryKey>
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
      ...getTimeTrackingCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTimeTrackingCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.time_tracking_categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.time_tracking_categories.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.time_tracking_categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimeTrackingCategoriesQueryKey>
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
      ...getTimeTrackingCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTimeTrackingCategoriesMutationKey() {
  return ['time_tracking_categories', '/time_tracking_categories', 'POST'] as const
}

export function getPostTimeTrackingCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.time_tracking_categories.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.time_tracking_categories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTimeTrackingCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.time_tracking_categories.$post>) {
      return parseResponse(client.time_tracking_categories.$post(args, options))
    },
  })
}

export function usePostTimeTrackingCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.time_tracking_categories.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.time_tracking_categories.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTimeTrackingCategoriesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTasksTaskGidTimeTrackingEntriesQueryKey(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['time_tracking_entries']['$get']>,
) {
  return ['tasks', '/tasks/:task_gid/time_tracking_entries', args] as const
}

export function getTasksTaskGidTimeTrackingEntriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':task_gid']['time_tracking_entries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['time_tracking_entries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['time_tracking_entries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskGidTimeTrackingEntriesQueryKey>
  >({
    queryKey: getTasksTaskGidTimeTrackingEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':task_gid'].time_tracking_entries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTasksTaskGidTimeTrackingEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':task_gid']['time_tracking_entries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['time_tracking_entries']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tasks)[':task_gid']['time_tracking_entries']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskGidTimeTrackingEntriesQueryKey>
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
      ...getTasksTaskGidTimeTrackingEntriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTasksTaskGidTimeTrackingEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':task_gid']['time_tracking_entries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['time_tracking_entries']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tasks)[':task_gid']['time_tracking_entries']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskGidTimeTrackingEntriesQueryKey>
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
      ...getTasksTaskGidTimeTrackingEntriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTasksTaskGidTimeTrackingEntriesMutationKey() {
  return ['tasks', '/tasks/:task_gid/time_tracking_entries', 'POST'] as const
}

export function getPostTasksTaskGidTimeTrackingEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['time_tracking_entries']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_gid']['time_tracking_entries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskGidTimeTrackingEntriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':task_gid']['time_tracking_entries']['$post']>,
    ) {
      return parseResponse(client.tasks[':task_gid'].time_tracking_entries.$post(args, options))
    },
  })
}

export function usePostTasksTaskGidTimeTrackingEntries<
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
                ReturnType<(typeof client.tasks)[':task_gid']['time_tracking_entries']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_gid']['time_tracking_entries']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskGidTimeTrackingEntriesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTimeTrackingEntriesTimeTrackingEntryGidQueryKey(
  args: InferRequestType<(typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$get']>,
) {
  return ['time_tracking_entries', '/time_tracking_entries/:time_tracking_entry_gid', args] as const
}

export function getTimeTrackingEntriesTimeTrackingEntryGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimeTrackingEntriesTimeTrackingEntryGidQueryKey>
  >({
    queryKey: getTimeTrackingEntriesTimeTrackingEntryGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.time_tracking_entries[':time_tracking_entry_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTimeTrackingEntriesTimeTrackingEntryGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimeTrackingEntriesTimeTrackingEntryGidQueryKey>
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
      ...getTimeTrackingEntriesTimeTrackingEntryGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTimeTrackingEntriesTimeTrackingEntryGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimeTrackingEntriesTimeTrackingEntryGidQueryKey>
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
      ...getTimeTrackingEntriesTimeTrackingEntryGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTimeTrackingEntriesTimeTrackingEntryGidMutationKey() {
  return [
    'time_tracking_entries',
    '/time_tracking_entries/:time_tracking_entry_gid',
    'PUT',
  ] as const
}

export function getPutTimeTrackingEntriesTimeTrackingEntryGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTimeTrackingEntriesTimeTrackingEntryGidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$put']
      >,
    ) {
      return parseResponse(
        client.time_tracking_entries[':time_tracking_entry_gid'].$put(args, options),
      )
    },
  })
}

export function usePutTimeTrackingEntriesTimeTrackingEntryGid<
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
                  (typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTimeTrackingEntriesTimeTrackingEntryGidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTimeTrackingEntriesTimeTrackingEntryGidMutationKey() {
  return [
    'time_tracking_entries',
    '/time_tracking_entries/:time_tracking_entry_gid',
    'DELETE',
  ] as const
}

export function getDeleteTimeTrackingEntriesTimeTrackingEntryGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTimeTrackingEntriesTimeTrackingEntryGidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$delete']
      >,
    ) {
      return parseResponse(
        client.time_tracking_entries[':time_tracking_entry_gid'].$delete(args, options),
      )
    },
  })
}

export function useDeleteTimeTrackingEntriesTimeTrackingEntryGid<
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
                  (typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$delete']
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
  const mutationDefaults = getDeleteTimeTrackingEntriesTimeTrackingEntryGidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTimeTrackingEntriesQueryKey(
  args: InferRequestType<typeof client.time_tracking_entries.$get>,
) {
  return ['time_tracking_entries', '/time_tracking_entries', args] as const
}

export function getTimeTrackingEntriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_tracking_entries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.time_tracking_entries.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.time_tracking_entries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimeTrackingEntriesQueryKey>
  >({
    queryKey: getTimeTrackingEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.time_tracking_entries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTimeTrackingEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_tracking_entries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.time_tracking_entries.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.time_tracking_entries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimeTrackingEntriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTimeTrackingEntriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTimeTrackingEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_tracking_entries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.time_tracking_entries.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.time_tracking_entries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimeTrackingEntriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTimeTrackingEntriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTimesheetApprovalStatusesTimesheetApprovalStatusGidQueryKey(
  args: InferRequestType<
    (typeof client.timesheet_approval_statuses)[':timesheet_approval_status_gid']['$get']
  >,
) {
  return [
    'timesheet_approval_statuses',
    '/timesheet_approval_statuses/:timesheet_approval_status_gid',
    args,
  ] as const
}

export function getTimesheetApprovalStatusesTimesheetApprovalStatusGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.timesheet_approval_statuses)[':timesheet_approval_status_gid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.timesheet_approval_statuses)[':timesheet_approval_status_gid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.timesheet_approval_statuses)[':timesheet_approval_status_gid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimesheetApprovalStatusesTimesheetApprovalStatusGidQueryKey>
  >({
    queryKey: getTimesheetApprovalStatusesTimesheetApprovalStatusGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.timesheet_approval_statuses[':timesheet_approval_status_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTimesheetApprovalStatusesTimesheetApprovalStatusGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.timesheet_approval_statuses)[':timesheet_approval_status_gid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.timesheet_approval_statuses)[':timesheet_approval_status_gid']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.timesheet_approval_statuses)[':timesheet_approval_status_gid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimesheetApprovalStatusesTimesheetApprovalStatusGidQueryKey>
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
      ...getTimesheetApprovalStatusesTimesheetApprovalStatusGidQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTimesheetApprovalStatusesTimesheetApprovalStatusGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.timesheet_approval_statuses)[':timesheet_approval_status_gid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.timesheet_approval_statuses)[':timesheet_approval_status_gid']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.timesheet_approval_statuses)[':timesheet_approval_status_gid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimesheetApprovalStatusesTimesheetApprovalStatusGidQueryKey>
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
      ...getTimesheetApprovalStatusesTimesheetApprovalStatusGidQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTimesheetApprovalStatusesTimesheetApprovalStatusGidMutationKey() {
  return [
    'timesheet_approval_statuses',
    '/timesheet_approval_statuses/:timesheet_approval_status_gid',
    'PUT',
  ] as const
}

export function getPutTimesheetApprovalStatusesTimesheetApprovalStatusGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.timesheet_approval_statuses)[':timesheet_approval_status_gid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.timesheet_approval_statuses)[':timesheet_approval_status_gid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutTimesheetApprovalStatusesTimesheetApprovalStatusGidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.timesheet_approval_statuses)[':timesheet_approval_status_gid']['$put']
      >,
    ) {
      return parseResponse(
        client.timesheet_approval_statuses[':timesheet_approval_status_gid'].$put(args, options),
      )
    },
  })
}

export function usePutTimesheetApprovalStatusesTimesheetApprovalStatusGid<
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
                  (typeof client.timesheet_approval_statuses)[':timesheet_approval_status_gid']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.timesheet_approval_statuses)[':timesheet_approval_status_gid']['$put']
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
  const mutationDefaults = getPutTimesheetApprovalStatusesTimesheetApprovalStatusGidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTimesheetApprovalStatusesQueryKey(
  args: InferRequestType<typeof client.timesheet_approval_statuses.$get>,
) {
  return ['timesheet_approval_statuses', '/timesheet_approval_statuses', args] as const
}

export function getTimesheetApprovalStatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.timesheet_approval_statuses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.timesheet_approval_statuses.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.timesheet_approval_statuses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimesheetApprovalStatusesQueryKey>
  >({
    queryKey: getTimesheetApprovalStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.timesheet_approval_statuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTimesheetApprovalStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.timesheet_approval_statuses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.timesheet_approval_statuses.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.timesheet_approval_statuses.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimesheetApprovalStatusesQueryKey>
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
      ...getTimesheetApprovalStatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTimesheetApprovalStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.timesheet_approval_statuses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.timesheet_approval_statuses.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.timesheet_approval_statuses.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimesheetApprovalStatusesQueryKey>
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
      ...getTimesheetApprovalStatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTimesheetApprovalStatusesMutationKey() {
  return ['timesheet_approval_statuses', '/timesheet_approval_statuses', 'POST'] as const
}

export function getPostTimesheetApprovalStatusesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.timesheet_approval_statuses.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.timesheet_approval_statuses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTimesheetApprovalStatusesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.timesheet_approval_statuses.$post>) {
      return parseResponse(client.timesheet_approval_statuses.$post(args, options))
    },
  })
}

export function usePostTimesheetApprovalStatuses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.timesheet_approval_statuses.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.timesheet_approval_statuses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTimesheetApprovalStatusesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useWorkspacesWorkspaceGidTypeahead<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspacesWorkspaceGidTypeaheadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGidTypeahead<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspacesWorkspaceGidTypeaheadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUserTaskListsUserTaskListGid<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserTaskListsUserTaskListGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserTaskListsUserTaskListGid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserTaskListsUserTaskListGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersUserGidUserTaskList<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserGidUserTaskListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserGidUserTaskList<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserGidUserTaskListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
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

export function useUsersUserGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutUsersUserGidMutationKey() {
  return ['users', '/users/:user_gid', 'PUT'] as const
}

export function getPutUsersUserGidMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_gid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_gid']['$put']>) {
      return parseResponse(client.users[':user_gid'].$put(args, options))
    },
  })
}

export function usePutUsersUserGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_gid']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_gid']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserGidMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useUsersUserGidFavorites<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserGidFavoritesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserGidFavorites<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserGidFavoritesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTeamsTeamGidUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_gid']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['users']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsTeamGidUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsTeamGidUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_gid']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['users']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsTeamGidUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useWorkspacesWorkspaceGidUsers<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspacesWorkspaceGidUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGidUsers<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspacesWorkspaceGidUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceGidUsersUserGidQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['users'][':user_gid']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace_gid/users/:user_gid', args] as const
}

export function getWorkspacesWorkspaceGidUsersUserGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['users'][':user_gid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['users'][':user_gid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workspaces)[':workspace_gid']['users'][':user_gid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidUsersUserGidQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidUsersUserGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].users[':user_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWorkspacesWorkspaceGidUsersUserGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['users'][':user_gid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['users'][':user_gid']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workspaces)[':workspace_gid']['users'][':user_gid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidUsersUserGidQueryKey>
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
      ...getWorkspacesWorkspaceGidUsersUserGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGidUsersUserGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['users'][':user_gid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['users'][':user_gid']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workspaces)[':workspace_gid']['users'][':user_gid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidUsersUserGidQueryKey>
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
      ...getWorkspacesWorkspaceGidUsersUserGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWorkspacesWorkspaceGidUsersUserGidMutationKey() {
  return ['workspaces', '/workspaces/:workspace_gid/users/:user_gid', 'PUT'] as const
}

export function getPutWorkspacesWorkspaceGidUsersUserGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workspaces)[':workspace_gid']['users'][':user_gid']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspace_gid']['users'][':user_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWorkspacesWorkspaceGidUsersUserGidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspace_gid']['users'][':user_gid']['$put']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspace_gid'].users[':user_gid'].$put(args, options),
      )
    },
  })
}

export function usePutWorkspacesWorkspaceGidUsersUserGid<
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
                  (typeof client.workspaces)[':workspace_gid']['users'][':user_gid']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.workspaces)[':workspace_gid']['users'][':user_gid']['$put']
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
  const mutationDefaults = getPutWorkspacesWorkspaceGidUsersUserGidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
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

export function useWebhooksWebhookGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_gid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhooksWebhookGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhooksWebhookGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_gid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhooksWebhookGidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePutWebhooksWebhookGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWebhooksWebhookGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteWebhooksWebhookGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebhooksWebhookGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useWorkspaceMembershipsWorkspaceMembershipGid<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspaceMembershipsWorkspaceMembershipGidQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspaceMembershipsWorkspaceMembershipGid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspaceMembershipsWorkspaceMembershipGidQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersUserGidWorkspaceMemberships<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserGidWorkspaceMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserGidWorkspaceMemberships<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserGidWorkspaceMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useWorkspacesWorkspaceGidWorkspaceMemberships<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspacesWorkspaceGidWorkspaceMembershipsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGidWorkspaceMemberships<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspacesWorkspaceGidWorkspaceMembershipsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useWorkspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.workspaces.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWorkspacesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWorkspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.workspaces.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWorkspacesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useWorkspacesWorkspaceGid<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspacesWorkspaceGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspacesWorkspaceGidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutWorkspacesWorkspaceGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWorkspacesWorkspaceGidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostWorkspacesWorkspaceGidAddUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkspacesWorkspaceGidAddUserMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWorkspacesWorkspaceGidRemoveUserMutationKey() {
  return ['workspaces', '/workspaces/:workspace_gid/removeUser', 'POST'] as const
}

export function getPostWorkspacesWorkspaceGidRemoveUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['removeUser']['$post']>>
        >
      >
    >,
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

export function usePostWorkspacesWorkspaceGidRemoveUser<
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
                ReturnType<(typeof client.workspaces)[':workspace_gid']['removeUser']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workspaces)[':workspace_gid']['removeUser']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkspacesWorkspaceGidRemoveUserMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceGidEventsQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['events']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/events', args] as const
}

export function getWorkspacesWorkspaceGidEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidEventsQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWorkspacesWorkspaceGidEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['events']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidEventsQueryKey>
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
      ...getWorkspacesWorkspaceGidEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceGidEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidEventsQueryKey>
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
      ...getWorkspacesWorkspaceGidEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
