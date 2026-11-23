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

export function getAdminsKey() {
  return ['admins'] as const
}

export function getAiKey() {
  return ['ai'] as const
}

export function getArticlesKey() {
  return ['articles'] as const
}

export function getAudiencesKey() {
  return ['audiences'] as const
}

export function getAwayStatusReasonsKey() {
  return ['away_status_reasons'] as const
}

export function getBrandsKey() {
  return ['brands'] as const
}

export function getCallsKey() {
  return ['calls'] as const
}

export function getCompaniesKey() {
  return ['companies'] as const
}

export function getContactsKey() {
  return ['contacts'] as const
}

export function getContentKey() {
  return ['content'] as const
}

export function getContentSnippetsKey() {
  return ['content_snippets'] as const
}

export function getConversationsKey() {
  return ['conversations'] as const
}

export function getCustomObjectInstancesKey() {
  return ['custom_object_instances'] as const
}

export function getDataAttributesKey() {
  return ['data_attributes'] as const
}

export function getDataConnectorsKey() {
  return ['data_connectors'] as const
}

export function getDownloadKey() {
  return ['download'] as const
}

export function getDynamicContentsKey() {
  return ['dynamic_contents'] as const
}

export function getEmailsKey() {
  return ['emails'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getExportKey() {
  return ['export'] as const
}

export function getFinKey() {
  return ['fin'] as const
}

export function getFinVoiceKey() {
  return ['fin_voice'] as const
}

export function getFoldersKey() {
  return ['folders'] as const
}

export function getHelpCenterKey() {
  return ['help_center'] as const
}

export function getInternalArticlesKey() {
  return ['internal_articles'] as const
}

export function getIpAllowlistKey() {
  return ['ip_allowlist'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getMacrosKey() {
  return ['macros'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getMessagesKey() {
  return ['messages'] as const
}

export function getNewsKey() {
  return ['news'] as const
}

export function getNotesKey() {
  return ['notes'] as const
}

export function getOfficeHoursSchedulesKey() {
  return ['office_hours_schedules'] as const
}

export function getPhoneCallRedirectsKey() {
  return ['phone_call_redirects'] as const
}

export function getSegmentsKey() {
  return ['segments'] as const
}

export function getSubscriptionTypesKey() {
  return ['subscription_types'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getTicketStatesKey() {
  return ['ticket_states'] as const
}

export function getTicketTypesKey() {
  return ['ticket_types'] as const
}

export function getTicketsKey() {
  return ['tickets'] as const
}

export function getVisitorsKey() {
  return ['visitors'] as const
}

export function getMeQueryKey(args: InferRequestType<typeof client.me.$get>) {
  const { header: _, ...keyArgs } = args
  return ['me', '/me', keyArgs] as const
}

export function getMeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >({
    queryKey: getMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(client.me.$get(args, { ...options, init: { ...options?.init, signal } }))
    },
  })
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMacrosIdQueryKey(args: InferRequestType<(typeof client.macros)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['macros', '/macros/:id', keyArgs] as const
}

export function getMacrosIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macros)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.macros)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macros)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMacrosIdQueryKey>
  >({
    queryKey: getMacrosIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.macros[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMacrosId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macros)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.macros)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.macros)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMacrosIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMacrosIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMacrosId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macros)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.macros)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.macros)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMacrosIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMacrosIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMacrosQueryKey(args: InferRequestType<typeof client.macros.$get>) {
  const { header: _, ...keyArgs } = args
  return ['macros', '/macros', keyArgs] as const
}

export function getMacrosQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macros.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.macros.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macros.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMacrosQueryKey>
  >({
    queryKey: getMacrosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.macros.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMacros<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macros.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.macros.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macros.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMacrosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMacrosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMacros<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macros.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.macros.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macros.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMacrosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMacrosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAdminsAdminIdAwayMutationKey() {
  return ['admins', '/admins/:admin_id/away', 'PUT'] as const
}

export function getPutAdminsAdminIdAwayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admins)[':admin_id']['away']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admins)[':admin_id']['away']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminsAdminIdAwayMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admins)[':admin_id']['away']['$put']>) {
      return parseResponse(client.admins[':admin_id'].away.$put(args, options))
    },
  })
}

export function usePutAdminsAdminIdAway<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admins)[':admin_id']['away']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admins)[':admin_id']['away']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminsAdminIdAwayMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdminsActivityLogsQueryKey(
  args: InferRequestType<typeof client.admins.activity_logs.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['admins', '/admins/activity_logs', keyArgs] as const
}

export function getAdminsActivityLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_logs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.admins.activity_logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminsActivityLogsQueryKey>
  >({
    queryKey: getAdminsActivityLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admins.activity_logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdminsActivityLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admins.activity_logs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_logs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminsActivityLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminsActivityLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminsActivityLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admins.activity_logs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_logs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminsActivityLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminsActivityLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAdminsActivityLogsSearchMutationKey() {
  return ['admins', '/admins/activity_logs/search', 'POST'] as const
}

export function getPostAdminsActivityLogsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_logs.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admins.activity_logs.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminsActivityLogsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admins.activity_logs.search.$post>) {
      return parseResponse(client.admins.activity_logs.search.$post(args, options))
    },
  })
}

export function usePostAdminsActivityLogsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admins.activity_logs.search.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admins.activity_logs.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminsActivityLogsSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdminsActivityLogEventTypesQueryKey(
  args: InferRequestType<typeof client.admins.activity_log_event_types.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['admins', '/admins/activity_log_event_types', keyArgs] as const
}

export function getAdminsActivityLogEventTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_log_event_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admins.activity_log_event_types.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admins.activity_log_event_types.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminsActivityLogEventTypesQueryKey>
  >({
    queryKey: getAdminsActivityLogEventTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admins.activity_log_event_types.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminsActivityLogEventTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_log_event_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admins.activity_log_event_types.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admins.activity_log_event_types.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminsActivityLogEventTypesQueryKey>
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
      ...getAdminsActivityLogEventTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdminsActivityLogEventTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_log_event_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admins.activity_log_event_types.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admins.activity_log_event_types.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminsActivityLogEventTypesQueryKey>
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
      ...getAdminsActivityLogEventTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAdminsQueryKey(args: InferRequestType<typeof client.admins.$get>) {
  const { header: _, ...keyArgs } = args
  return ['admins', '/admins', keyArgs] as const
}

export function getAdminsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.admins.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminsQueryKey>
  >({
    queryKey: getAdminsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admins.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdmins<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admins.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAdminsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdmins<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admins.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAdminsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdQueryKey(
  args: InferRequestType<
    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'office_hours_schedules',
    '/office_hours_schedules/:office_hours_schedule_id/office_hours_exceptions/:id',
    keyArgs,
  ] as const
}

export function getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdQueryKey>
  >({
    queryKey: getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions[
          ':id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdQueryKey
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
      ...getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdQueryKey
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
      ...getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdMutationKey() {
  return [
    'office_hours_schedules',
    '/office_hours_schedules/:office_hours_schedule_id/office_hours_exceptions/:id',
    'PUT',
  ] as const
}

export function getPutOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions[
          ':id'
        ].$put(args, options),
      )
    },
  })
}

export function usePutOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsId<
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
                  (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$put']
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
    getPutOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdMutationKey() {
  return [
    'office_hours_schedules',
    '/office_hours_schedules/:office_hours_schedule_id/office_hours_exceptions/:id',
    'DELETE',
  ] as const
}

export function getDeleteOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions[
          ':id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsId<
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
                  (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$delete']
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
    getDeleteOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsQueryKey(
  args: InferRequestType<
    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'office_hours_schedules',
    '/office_hours_schedules/:office_hours_schedule_id/office_hours_exceptions',
    keyArgs,
  ] as const
}

export function getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsQueryKey>
  >({
    queryKey: getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsQueryKey>
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
      ...getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsQueryKey>
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
      ...getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsMutationKey() {
  return [
    'office_hours_schedules',
    '/office_hours_schedules/:office_hours_schedule_id/office_hours_exceptions',
    'POST',
  ] as const
}

export function getPostOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$post']
      >,
    ) {
      return parseResponse(
        client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptions<
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
                  (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$post']
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
    getPostOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOfficeHoursSchedulesIdQueryKey(
  args: InferRequestType<(typeof client.office_hours_schedules)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['office_hours_schedules', '/office_hours_schedules/:id', keyArgs] as const
}

export function getOfficeHoursSchedulesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.office_hours_schedules)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.office_hours_schedules)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.office_hours_schedules)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfficeHoursSchedulesIdQueryKey>
  >({
    queryKey: getOfficeHoursSchedulesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.office_hours_schedules[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOfficeHoursSchedulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.office_hours_schedules)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.office_hours_schedules)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.office_hours_schedules)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOfficeHoursSchedulesIdQueryKey>
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
      ...getOfficeHoursSchedulesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfficeHoursSchedulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.office_hours_schedules)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.office_hours_schedules)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.office_hours_schedules)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOfficeHoursSchedulesIdQueryKey>
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
      ...getOfficeHoursSchedulesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOfficeHoursSchedulesIdMutationKey() {
  return ['office_hours_schedules', '/office_hours_schedules/:id', 'PUT'] as const
}

export function getPutOfficeHoursSchedulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.office_hours_schedules)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.office_hours_schedules)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOfficeHoursSchedulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.office_hours_schedules)[':id']['$put']>,
    ) {
      return parseResponse(client.office_hours_schedules[':id'].$put(args, options))
    },
  })
}

export function usePutOfficeHoursSchedulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.office_hours_schedules)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.office_hours_schedules)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOfficeHoursSchedulesIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteOfficeHoursSchedulesIdMutationKey() {
  return ['office_hours_schedules', '/office_hours_schedules/:id', 'DELETE'] as const
}

export function getDeleteOfficeHoursSchedulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.office_hours_schedules)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.office_hours_schedules)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOfficeHoursSchedulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.office_hours_schedules)[':id']['$delete']>,
    ) {
      return parseResponse(client.office_hours_schedules[':id'].$delete(args, options))
    },
  })
}

export function useDeleteOfficeHoursSchedulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.office_hours_schedules)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.office_hours_schedules)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOfficeHoursSchedulesIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOfficeHoursSchedulesQueryKey(
  args: InferRequestType<typeof client.office_hours_schedules.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['office_hours_schedules', '/office_hours_schedules', keyArgs] as const
}

export function getOfficeHoursSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.office_hours_schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.office_hours_schedules.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.office_hours_schedules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfficeHoursSchedulesQueryKey>
  >({
    queryKey: getOfficeHoursSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.office_hours_schedules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOfficeHoursSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.office_hours_schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.office_hours_schedules.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.office_hours_schedules.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOfficeHoursSchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOfficeHoursSchedulesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOfficeHoursSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.office_hours_schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.office_hours_schedules.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.office_hours_schedules.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOfficeHoursSchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOfficeHoursSchedulesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOfficeHoursSchedulesMutationKey() {
  return ['office_hours_schedules', '/office_hours_schedules', 'POST'] as const
}

export function getPostOfficeHoursSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.office_hours_schedules.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.office_hours_schedules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOfficeHoursSchedulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.office_hours_schedules.$post>) {
      return parseResponse(client.office_hours_schedules.$post(args, options))
    },
  })
}

export function usePostOfficeHoursSchedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.office_hours_schedules.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.office_hours_schedules.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOfficeHoursSchedulesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdminsAdminIdQueryKey(
  args: InferRequestType<(typeof client.admins)[':admin_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['admins', '/admins/:admin_id', keyArgs] as const
}

export function getAdminsAdminIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admins)[':admin_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admins)[':admin_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admins)[':admin_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminsAdminIdQueryKey>
  >({
    queryKey: getAdminsAdminIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admins[':admin_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdminsAdminId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admins)[':admin_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admins)[':admin_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admins)[':admin_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminsAdminIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminsAdminIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminsAdminId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admins)[':admin_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admins)[':admin_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admins)[':admin_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminsAdminIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminsAdminIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteAdminsRemoveMutationKey() {
  return ['admins', '/admins/remove', 'DELETE'] as const
}

export function getDeleteAdminsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.remove.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.admins.remove.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminsRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admins.remove.$delete>) {
      return parseResponse(client.admins.remove.$delete(args, options))
    },
  })
}

export function useDeleteAdminsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.remove.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.admins.remove.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminsRemoveMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAiContentImportSourcesQueryKey(
  args: InferRequestType<typeof client.ai.content_import_sources.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['ai', '/ai/content_import_sources', keyArgs] as const
}

export function getAiContentImportSourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.ai.content_import_sources.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ai.content_import_sources.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ai.content_import_sources.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAiContentImportSourcesQueryKey>
  >({
    queryKey: getAiContentImportSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ai.content_import_sources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAiContentImportSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.ai.content_import_sources.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ai.content_import_sources.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ai.content_import_sources.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAiContentImportSourcesQueryKey>
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
      ...getAiContentImportSourcesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAiContentImportSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.ai.content_import_sources.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ai.content_import_sources.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ai.content_import_sources.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAiContentImportSourcesQueryKey>
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
      ...getAiContentImportSourcesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAiContentImportSourcesMutationKey() {
  return ['ai', '/ai/content_import_sources', 'POST'] as const
}

export function getPostAiContentImportSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ai.content_import_sources.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ai.content_import_sources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAiContentImportSourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ai.content_import_sources.$post>) {
      return parseResponse(client.ai.content_import_sources.$post(args, options))
    },
  })
}

export function usePostAiContentImportSources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ai.content_import_sources.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ai.content_import_sources.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAiContentImportSourcesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAiContentImportSourcesSourceIdQueryKey(
  args: InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ai', '/ai/content_import_sources/:source_id', keyArgs] as const
}

export function getAiContentImportSourcesSourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ai.content_import_sources)[':source_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ai.content_import_sources)[':source_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAiContentImportSourcesSourceIdQueryKey>
  >({
    queryKey: getAiContentImportSourcesSourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ai.content_import_sources[':source_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAiContentImportSourcesSourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ai.content_import_sources)[':source_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ai.content_import_sources)[':source_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAiContentImportSourcesSourceIdQueryKey>
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
      ...getAiContentImportSourcesSourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAiContentImportSourcesSourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ai.content_import_sources)[':source_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ai.content_import_sources)[':source_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAiContentImportSourcesSourceIdQueryKey>
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
      ...getAiContentImportSourcesSourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAiContentImportSourcesSourceIdMutationKey() {
  return ['ai', '/ai/content_import_sources/:source_id', 'PUT'] as const
}

export function getPutAiContentImportSourcesSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ai.content_import_sources)[':source_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAiContentImportSourcesSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$put']>,
    ) {
      return parseResponse(client.ai.content_import_sources[':source_id'].$put(args, options))
    },
  })
}

export function usePutAiContentImportSourcesSourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ai.content_import_sources)[':source_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAiContentImportSourcesSourceIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAiContentImportSourcesSourceIdMutationKey() {
  return ['ai', '/ai/content_import_sources/:source_id', 'DELETE'] as const
}

export function getDeleteAiContentImportSourcesSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.content_import_sources)[':source_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAiContentImportSourcesSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$delete']>,
    ) {
      return parseResponse(client.ai.content_import_sources[':source_id'].$delete(args, options))
    },
  })
}

export function useDeleteAiContentImportSourcesSourceId<
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
                  ReturnType<(typeof client.ai.content_import_sources)[':source_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAiContentImportSourcesSourceIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAiExternalPagesQueryKey(
  args: InferRequestType<typeof client.ai.external_pages.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['ai', '/ai/external_pages', keyArgs] as const
}

export function getAiExternalPagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.external_pages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ai.external_pages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.external_pages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAiExternalPagesQueryKey>
  >({
    queryKey: getAiExternalPagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ai.external_pages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAiExternalPages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.external_pages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ai.external_pages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ai.external_pages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAiExternalPagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAiExternalPagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAiExternalPages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.external_pages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ai.external_pages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ai.external_pages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAiExternalPagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAiExternalPagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAiExternalPagesMutationKey() {
  return ['ai', '/ai/external_pages', 'POST'] as const
}

export function getPostAiExternalPagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.external_pages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ai.external_pages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAiExternalPagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ai.external_pages.$post>) {
      return parseResponse(client.ai.external_pages.$post(args, options))
    },
  })
}

export function usePostAiExternalPages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ai.external_pages.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ai.external_pages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAiExternalPagesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAiExternalPagesPageIdQueryKey(
  args: InferRequestType<(typeof client.ai.external_pages)[':page_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ai', '/ai/external_pages/:page_id', keyArgs] as const
}

export function getAiExternalPagesPageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ai.external_pages)[':page_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ai.external_pages)[':page_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ai.external_pages)[':page_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAiExternalPagesPageIdQueryKey>
  >({
    queryKey: getAiExternalPagesPageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ai.external_pages[':page_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAiExternalPagesPageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ai.external_pages)[':page_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ai.external_pages)[':page_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ai.external_pages)[':page_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAiExternalPagesPageIdQueryKey>
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
      ...getAiExternalPagesPageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAiExternalPagesPageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ai.external_pages)[':page_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ai.external_pages)[':page_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ai.external_pages)[':page_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAiExternalPagesPageIdQueryKey>
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
      ...getAiExternalPagesPageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAiExternalPagesPageIdMutationKey() {
  return ['ai', '/ai/external_pages/:page_id', 'PUT'] as const
}

export function getPutAiExternalPagesPageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ai.external_pages)[':page_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ai.external_pages)[':page_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAiExternalPagesPageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ai.external_pages)[':page_id']['$put']>,
    ) {
      return parseResponse(client.ai.external_pages[':page_id'].$put(args, options))
    },
  })
}

export function usePutAiExternalPagesPageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ai.external_pages)[':page_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ai.external_pages)[':page_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAiExternalPagesPageIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAiExternalPagesPageIdMutationKey() {
  return ['ai', '/ai/external_pages/:page_id', 'DELETE'] as const
}

export function getDeleteAiExternalPagesPageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ai.external_pages)[':page_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ai.external_pages)[':page_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAiExternalPagesPageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ai.external_pages)[':page_id']['$delete']>,
    ) {
      return parseResponse(client.ai.external_pages[':page_id'].$delete(args, options))
    },
  })
}

export function useDeleteAiExternalPagesPageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ai.external_pages)[':page_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ai.external_pages)[':page_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAiExternalPagesPageIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAiExternalPagesExternalPageIdTagsMutationKey() {
  return ['ai', '/ai/external_pages/:external_page_id/tags', 'POST'] as const
}

export function getPostAiExternalPagesExternalPageIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ai.external_pages)[':external_page_id']['tags']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ai.external_pages)[':external_page_id']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAiExternalPagesExternalPageIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ai.external_pages)[':external_page_id']['tags']['$post']
      >,
    ) {
      return parseResponse(client.ai.external_pages[':external_page_id'].tags.$post(args, options))
    },
  })
}

export function usePostAiExternalPagesExternalPageIdTags<
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
                ReturnType<(typeof client.ai.external_pages)[':external_page_id']['tags']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ai.external_pages)[':external_page_id']['tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAiExternalPagesExternalPageIdTagsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAiExternalPagesExternalPageIdTagsIdMutationKey() {
  return ['ai', '/ai/external_pages/:external_page_id/tags/:id', 'DELETE'] as const
}

export function getDeleteAiExternalPagesExternalPageIdTagsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ai.external_pages)[':external_page_id']['tags'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ai.external_pages)[':external_page_id']['tags'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAiExternalPagesExternalPageIdTagsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ai.external_pages)[':external_page_id']['tags'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ai.external_pages[':external_page_id'].tags[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAiExternalPagesExternalPageIdTagsId<
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
                  (typeof client.ai.external_pages)[':external_page_id']['tags'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ai.external_pages)[':external_page_id']['tags'][':id']['$delete']
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
  const mutationDefaults = getDeleteAiExternalPagesExternalPageIdTagsIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getArticlesQueryKey(args: InferRequestType<typeof client.articles.$get>) {
  const { header: _, ...keyArgs } = args
  return ['articles', '/articles', keyArgs] as const
}

export function getArticlesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.articles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getArticlesQueryKey>
  >({
    queryKey: getArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.articles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useArticles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.articles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getArticlesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getArticlesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseArticles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.articles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getArticlesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getArticlesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostArticlesMutationKey() {
  return ['articles', '/articles', 'POST'] as const
}

export function getPostArticlesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$post>>>>>,
    TError,
    InferRequestType<typeof client.articles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostArticlesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.articles.$post>) {
      return parseResponse(client.articles.$post(args, options))
    },
  })
}

export function usePostArticles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.articles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostArticlesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getArticlesArticleIdQueryKey(
  args: InferRequestType<(typeof client.articles)[':article_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['articles', '/articles/:article_id', keyArgs] as const
}

export function getArticlesArticleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.articles)[':article_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesArticleIdQueryKey>
  >({
    queryKey: getArticlesArticleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.articles[':article_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useArticlesArticleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.articles)[':article_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArticlesArticleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getArticlesArticleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseArticlesArticleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.articles)[':article_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArticlesArticleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getArticlesArticleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutArticlesArticleIdMutationKey() {
  return ['articles', '/articles/:article_id', 'PUT'] as const
}

export function getPutArticlesArticleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.articles)[':article_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutArticlesArticleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.articles)[':article_id']['$put']>) {
      return parseResponse(client.articles[':article_id'].$put(args, options))
    },
  })
}

export function usePutArticlesArticleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.articles)[':article_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.articles)[':article_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutArticlesArticleIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteArticlesArticleIdMutationKey() {
  return ['articles', '/articles/:article_id', 'DELETE'] as const
}

export function getDeleteArticlesArticleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.articles)[':article_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.articles)[':article_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteArticlesArticleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.articles)[':article_id']['$delete']>) {
      return parseResponse(client.articles[':article_id'].$delete(args, options))
    },
  })
}

export function useDeleteArticlesArticleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.articles)[':article_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.articles)[':article_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteArticlesArticleIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getArticlesIdDraftQueryKey(
  args: InferRequestType<(typeof client.articles)[':id']['draft']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['articles', '/articles/:id/draft', keyArgs] as const
}

export function getArticlesIdDraftQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':id']['draft']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.articles)[':id']['draft']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':id']['draft']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesIdDraftQueryKey>
  >({
    queryKey: getArticlesIdDraftQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.articles[':id'].draft.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useArticlesIdDraft<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':id']['draft']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.articles)[':id']['draft']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.articles)[':id']['draft']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArticlesIdDraftQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getArticlesIdDraftQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseArticlesIdDraft<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':id']['draft']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.articles)[':id']['draft']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.articles)[':id']['draft']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArticlesIdDraftQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getArticlesIdDraftQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutArticlesIdDraftMutationKey() {
  return ['articles', '/articles/:id/draft', 'PUT'] as const
}

export function getPutArticlesIdDraftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':id']['draft']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.articles)[':id']['draft']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutArticlesIdDraftMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.articles)[':id']['draft']['$put']>) {
      return parseResponse(client.articles[':id'].draft.$put(args, options))
    },
  })
}

export function usePutArticlesIdDraft<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.articles)[':id']['draft']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.articles)[':id']['draft']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutArticlesIdDraftMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostArticlesIdDraftPublishMutationKey() {
  return ['articles', '/articles/:id/draft/publish', 'POST'] as const
}

export function getPostArticlesIdDraftPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.articles)[':id']['draft']['publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.articles)[':id']['draft']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostArticlesIdDraftPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.articles)[':id']['draft']['publish']['$post']>,
    ) {
      return parseResponse(client.articles[':id'].draft.publish.$post(args, options))
    },
  })
}

export function usePostArticlesIdDraftPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.articles)[':id']['draft']['publish']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.articles)[':id']['draft']['publish']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostArticlesIdDraftPublishMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostArticlesArticleIdTagsMutationKey() {
  return ['articles', '/articles/:article_id/tags', 'POST'] as const
}

export function getPostArticlesArticleIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.articles)[':article_id']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.articles)[':article_id']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostArticlesArticleIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.articles)[':article_id']['tags']['$post']>,
    ) {
      return parseResponse(client.articles[':article_id'].tags.$post(args, options))
    },
  })
}

export function usePostArticlesArticleIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.articles)[':article_id']['tags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.articles)[':article_id']['tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostArticlesArticleIdTagsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteArticlesArticleIdTagsIdMutationKey() {
  return ['articles', '/articles/:article_id/tags/:id', 'DELETE'] as const
}

export function getDeleteArticlesArticleIdTagsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.articles)[':article_id']['tags'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.articles)[':article_id']['tags'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteArticlesArticleIdTagsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.articles)[':article_id']['tags'][':id']['$delete']>,
    ) {
      return parseResponse(client.articles[':article_id'].tags[':id'].$delete(args, options))
    },
  })
}

export function useDeleteArticlesArticleIdTagsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.articles)[':article_id']['tags'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.articles)[':article_id']['tags'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteArticlesArticleIdTagsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getArticlesArticleIdVersionsQueryKey(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['articles', '/articles/:article_id/versions', keyArgs] as const
}

export function getArticlesArticleIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesArticleIdVersionsQueryKey>
  >({
    queryKey: getArticlesArticleIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.articles[':article_id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useArticlesArticleIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArticlesArticleIdVersionsQueryKey>
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
      ...getArticlesArticleIdVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseArticlesArticleIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArticlesArticleIdVersionsQueryKey>
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
      ...getArticlesArticleIdVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getArticlesArticleIdVersionsIdQueryKey(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['articles', '/articles/:article_id/versions/:id', keyArgs] as const
}

export function getArticlesArticleIdVersionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesArticleIdVersionsIdQueryKey>
  >({
    queryKey: getArticlesArticleIdVersionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.articles[':article_id'].versions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useArticlesArticleIdVersionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArticlesArticleIdVersionsIdQueryKey>
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
      ...getArticlesArticleIdVersionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseArticlesArticleIdVersionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArticlesArticleIdVersionsIdQueryKey>
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
      ...getArticlesArticleIdVersionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getArticlesSearchQueryKey(
  args: InferRequestType<typeof client.articles.search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['articles', '/articles/search', keyArgs] as const
}

export function getArticlesSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.articles.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesSearchQueryKey>
  >({
    queryKey: getArticlesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.articles.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useArticlesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.articles.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getArticlesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getArticlesSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseArticlesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.articles.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getArticlesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getArticlesSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAwayStatusReasonsQueryKey(
  args: InferRequestType<typeof client.away_status_reasons.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['away_status_reasons', '/away_status_reasons', keyArgs] as const
}

export function getAwayStatusReasonsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.away_status_reasons.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.away_status_reasons.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.away_status_reasons.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAwayStatusReasonsQueryKey>
  >({
    queryKey: getAwayStatusReasonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.away_status_reasons.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAwayStatusReasons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.away_status_reasons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.away_status_reasons.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.away_status_reasons.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAwayStatusReasonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAwayStatusReasonsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAwayStatusReasons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.away_status_reasons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.away_status_reasons.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.away_status_reasons.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAwayStatusReasonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAwayStatusReasonsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAudiencesQueryKey(args: InferRequestType<typeof client.audiences.$get>) {
  const { header: _, ...keyArgs } = args
  return ['audiences', '/audiences', keyArgs] as const
}

export function getAudiencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.audiences.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAudiencesQueryKey>
  >({
    queryKey: getAudiencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audiences.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAudiences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.audiences.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAudiencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAudiencesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAudiences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.audiences.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAudiencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAudiencesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAudiencesMutationKey() {
  return ['audiences', '/audiences', 'POST'] as const
}

export function getPostAudiencesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$post>>>>>,
    TError,
    InferRequestType<typeof client.audiences.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAudiencesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audiences.$post>) {
      return parseResponse(client.audiences.$post(args, options))
    },
  })
}

export function usePostAudiences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.audiences.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAudiencesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAudiencesIdQueryKey(
  args: InferRequestType<(typeof client.audiences)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audiences', '/audiences/:id', keyArgs] as const
}

export function getAudiencesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audiences)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudiencesIdQueryKey>
  >({
    queryKey: getAudiencesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audiences[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAudiencesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audiences)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAudiencesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAudiencesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAudiencesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audiences)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAudiencesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAudiencesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAudiencesIdMutationKey() {
  return ['audiences', '/audiences/:id', 'PUT'] as const
}

export function getPutAudiencesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.audiences)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAudiencesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.audiences)[':id']['$put']>) {
      return parseResponse(client.audiences[':id'].$put(args, options))
    },
  })
}

export function usePutAudiencesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.audiences)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAudiencesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAudiencesIdMutationKey() {
  return ['audiences', '/audiences/:id', 'DELETE'] as const
}

export function getDeleteAudiencesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.audiences)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAudiencesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.audiences)[':id']['$delete']>) {
      return parseResponse(client.audiences[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAudiencesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.audiences)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAudiencesIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostExportReportingDataEnqueueMutationKey() {
  return ['export', '/export/reporting_data/enqueue', 'POST'] as const
}

export function getPostExportReportingDataEnqueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.export.reporting_data.enqueue.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.export.reporting_data.enqueue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportReportingDataEnqueueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.export.reporting_data.enqueue.$post>) {
      return parseResponse(client.export.reporting_data.enqueue.$post(args, options))
    },
  })
}

export function usePostExportReportingDataEnqueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.export.reporting_data.enqueue.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.export.reporting_data.enqueue.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExportReportingDataEnqueueMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExportReportingDataJobIdentifierQueryKey(
  args: InferRequestType<(typeof client.export.reporting_data)[':job_identifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['export', '/export/reporting_data/:job_identifier', keyArgs] as const
}

export function getExportReportingDataJobIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.reporting_data)[':job_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.reporting_data)[':job_identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.export.reporting_data)[':job_identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportReportingDataJobIdentifierQueryKey>
  >({
    queryKey: getExportReportingDataJobIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.reporting_data[':job_identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExportReportingDataJobIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.reporting_data)[':job_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.reporting_data)[':job_identifier']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.export.reporting_data)[':job_identifier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportReportingDataJobIdentifierQueryKey>
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
      ...getExportReportingDataJobIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseExportReportingDataJobIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.reporting_data)[':job_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.reporting_data)[':job_identifier']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.export.reporting_data)[':job_identifier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportReportingDataJobIdentifierQueryKey>
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
      ...getExportReportingDataJobIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getExportReportingDataGetDatasetsQueryKey(
  args: InferRequestType<typeof client.export.reporting_data.get_datasets.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['export', '/export/reporting_data/get_datasets', keyArgs] as const
}

export function getExportReportingDataGetDatasetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.export.reporting_data.get_datasets.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.export.reporting_data.get_datasets.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.export.reporting_data.get_datasets.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportReportingDataGetDatasetsQueryKey>
  >({
    queryKey: getExportReportingDataGetDatasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.reporting_data.get_datasets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExportReportingDataGetDatasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.export.reporting_data.get_datasets.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.export.reporting_data.get_datasets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.export.reporting_data.get_datasets.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportReportingDataGetDatasetsQueryKey>
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
      ...getExportReportingDataGetDatasetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseExportReportingDataGetDatasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.export.reporting_data.get_datasets.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.export.reporting_data.get_datasets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.export.reporting_data.get_datasets.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportReportingDataGetDatasetsQueryKey>
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
      ...getExportReportingDataGetDatasetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDownloadReportingDataJobIdentifierQueryKey(
  args: InferRequestType<(typeof client.download.reporting_data)[':job_identifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['download', '/download/reporting_data/:job_identifier', keyArgs] as const
}

export function getDownloadReportingDataJobIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.download.reporting_data)[':job_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.download.reporting_data)[':job_identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.download.reporting_data)[':job_identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDownloadReportingDataJobIdentifierQueryKey>
  >({
    queryKey: getDownloadReportingDataJobIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.download.reporting_data[':job_identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDownloadReportingDataJobIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.download.reporting_data)[':job_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.download.reporting_data)[':job_identifier']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.download.reporting_data)[':job_identifier']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDownloadReportingDataJobIdentifierQueryKey>
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
      ...getDownloadReportingDataJobIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDownloadReportingDataJobIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.download.reporting_data)[':job_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.download.reporting_data)[':job_identifier']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.download.reporting_data)[':job_identifier']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDownloadReportingDataJobIdentifierQueryKey>
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
      ...getDownloadReportingDataJobIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostFinStartMutationKey() {
  return ['fin', '/fin/start', 'POST'] as const
}

export function getPostFinStartMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.start.$post>>>>>,
    TError,
    InferRequestType<typeof client.fin.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFinStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fin.start.$post>) {
      return parseResponse(client.fin.start.$post(args, options))
    },
  })
}

export function usePostFinStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.start.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.fin.start.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFinStartMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFinReplyMutationKey() {
  return ['fin', '/fin/reply', 'POST'] as const
}

export function getPostFinReplyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.reply.$post>>>>>,
    TError,
    InferRequestType<typeof client.fin.reply.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFinReplyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fin.reply.$post>) {
      return parseResponse(client.fin.reply.$post(args, options))
    },
  })
}

export function usePostFinReply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.reply.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.fin.reply.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFinReplyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFinCsatMutationKey() {
  return ['fin', '/fin/csat', 'POST'] as const
}

export function getPostFinCsatMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.csat.$post>>>>>,
    TError,
    InferRequestType<typeof client.fin.csat.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFinCsatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fin.csat.$post>) {
      return parseResponse(client.fin.csat.$post(args, options))
    },
  })
}

export function usePostFinCsat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.csat.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.fin.csat.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFinCsatMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFinCapabilitiesMutationKey() {
  return ['fin', '/fin/capabilities', 'POST'] as const
}

export function getPostFinCapabilitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.capabilities.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.fin.capabilities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFinCapabilitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fin.capabilities.$post>) {
      return parseResponse(client.fin.capabilities.$post(args, options))
    },
  })
}

export function usePostFinCapabilities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fin.capabilities.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.fin.capabilities.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFinCapabilitiesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFinAskMutationKey() {
  return ['fin', '/fin/ask', 'POST'] as const
}

export function getPostFinAskMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.ask.$post>>>>>,
    TError,
    InferRequestType<typeof client.fin.ask.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFinAskMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fin.ask.$post>) {
      return parseResponse(client.fin.ask.$post(args, options))
    },
  })
}

export function usePostFinAsk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.ask.$post>>>>>,
        TError,
        InferRequestType<typeof client.fin.ask.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFinAskMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFinProceduresProcedureIdRunMutationKey() {
  return ['fin', '/fin/procedures/:procedure_id/run', 'POST'] as const
}

export function getPostFinProceduresProcedureIdRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fin.procedures)[':procedure_id']['run']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.fin.procedures)[':procedure_id']['run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFinProceduresProcedureIdRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.fin.procedures)[':procedure_id']['run']['$post']>,
    ) {
      return parseResponse(client.fin.procedures[':procedure_id'].run.$post(args, options))
    },
  })
}

export function usePostFinProceduresProcedureIdRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fin.procedures)[':procedure_id']['run']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.fin.procedures)[':procedure_id']['run']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFinProceduresProcedureIdRunMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFinEscalateMutationKey() {
  return ['fin', '/fin/escalate', 'POST'] as const
}

export function getPostFinEscalateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.escalate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.fin.escalate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFinEscalateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fin.escalate.$post>) {
      return parseResponse(client.fin.escalate.$post(args, options))
    },
  })
}

export function usePostFinEscalate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.escalate.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.fin.escalate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFinEscalateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getHelpCenterHelpCentersHelpCenterIdRedirectsQueryKey(
  args: InferRequestType<
    (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['help_center', '/help_center/help_centers/:help_center_id/redirects', keyArgs] as const
}

export function getHelpCenterHelpCentersHelpCenterIdRedirectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHelpCenterHelpCentersHelpCenterIdRedirectsQueryKey>
  >({
    queryKey: getHelpCenterHelpCentersHelpCenterIdRedirectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.help_center.help_centers[':help_center_id'].redirects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHelpCenterHelpCentersHelpCenterIdRedirects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHelpCenterHelpCentersHelpCenterIdRedirectsQueryKey>
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
      ...getHelpCenterHelpCentersHelpCenterIdRedirectsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHelpCenterHelpCentersHelpCenterIdRedirects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHelpCenterHelpCentersHelpCenterIdRedirectsQueryKey>
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
      ...getHelpCenterHelpCentersHelpCenterIdRedirectsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostHelpCenterHelpCentersHelpCenterIdRedirectsMutationKey() {
  return ['help_center', '/help_center/help_centers/:help_center_id/redirects', 'POST'] as const
}

export function getPostHelpCenterHelpCentersHelpCenterIdRedirectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostHelpCenterHelpCentersHelpCenterIdRedirectsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$post']
      >,
    ) {
      return parseResponse(
        client.help_center.help_centers[':help_center_id'].redirects.$post(args, options),
      )
    },
  })
}

export function usePostHelpCenterHelpCentersHelpCenterIdRedirects<
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
                  (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$post']
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
  const mutationDefaults = getPostHelpCenterHelpCentersHelpCenterIdRedirectsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getHelpCenterHelpCentersHelpCenterIdRedirectsIdQueryKey(
  args: InferRequestType<
    (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'help_center',
    '/help_center/help_centers/:help_center_id/redirects/:id',
    keyArgs,
  ] as const
}

export function getHelpCenterHelpCentersHelpCenterIdRedirectsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHelpCenterHelpCentersHelpCenterIdRedirectsIdQueryKey>
  >({
    queryKey: getHelpCenterHelpCentersHelpCenterIdRedirectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.help_center.help_centers[':help_center_id'].redirects[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHelpCenterHelpCentersHelpCenterIdRedirectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHelpCenterHelpCentersHelpCenterIdRedirectsIdQueryKey>
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
      ...getHelpCenterHelpCentersHelpCenterIdRedirectsIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHelpCenterHelpCentersHelpCenterIdRedirectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHelpCenterHelpCentersHelpCenterIdRedirectsIdQueryKey>
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
      ...getHelpCenterHelpCentersHelpCenterIdRedirectsIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteHelpCenterHelpCentersHelpCenterIdRedirectsIdMutationKey() {
  return [
    'help_center',
    '/help_center/help_centers/:help_center_id/redirects/:id',
    'DELETE',
  ] as const
}

export function getDeleteHelpCenterHelpCentersHelpCenterIdRedirectsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteHelpCenterHelpCentersHelpCenterIdRedirectsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.help_center.help_centers[':help_center_id'].redirects[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteHelpCenterHelpCentersHelpCenterIdRedirectsId<
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
                  (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$delete']
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
  const mutationDefaults = getDeleteHelpCenterHelpCentersHelpCenterIdRedirectsIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getHelpCenterCollectionsQueryKey(
  args: InferRequestType<typeof client.help_center.collections.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['help_center', '/help_center/collections', keyArgs] as const
}

export function getHelpCenterCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.help_center.collections.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.help_center.collections.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.help_center.collections.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHelpCenterCollectionsQueryKey>
  >({
    queryKey: getHelpCenterCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.help_center.collections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHelpCenterCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.help_center.collections.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.help_center.collections.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.help_center.collections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHelpCenterCollectionsQueryKey>
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
      ...getHelpCenterCollectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHelpCenterCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.help_center.collections.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.help_center.collections.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.help_center.collections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHelpCenterCollectionsQueryKey>
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
      ...getHelpCenterCollectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostHelpCenterCollectionsMutationKey() {
  return ['help_center', '/help_center/collections', 'POST'] as const
}

export function getPostHelpCenterCollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.help_center.collections.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.help_center.collections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHelpCenterCollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.help_center.collections.$post>) {
      return parseResponse(client.help_center.collections.$post(args, options))
    },
  })
}

export function usePostHelpCenterCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.help_center.collections.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.help_center.collections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHelpCenterCollectionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getHelpCenterCollectionsCollectionIdQueryKey(
  args: InferRequestType<(typeof client.help_center.collections)[':collection_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['help_center', '/help_center/collections/:collection_id', keyArgs] as const
}

export function getHelpCenterCollectionsCollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.help_center.collections)[':collection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.help_center.collections)[':collection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.help_center.collections)[':collection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHelpCenterCollectionsCollectionIdQueryKey>
  >({
    queryKey: getHelpCenterCollectionsCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.help_center.collections[':collection_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHelpCenterCollectionsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.help_center.collections)[':collection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.help_center.collections)[':collection_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.help_center.collections)[':collection_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHelpCenterCollectionsCollectionIdQueryKey>
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
      ...getHelpCenterCollectionsCollectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHelpCenterCollectionsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.help_center.collections)[':collection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.help_center.collections)[':collection_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.help_center.collections)[':collection_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHelpCenterCollectionsCollectionIdQueryKey>
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
      ...getHelpCenterCollectionsCollectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutHelpCenterCollectionsCollectionIdMutationKey() {
  return ['help_center', '/help_center/collections/:collection_id', 'PUT'] as const
}

export function getPutHelpCenterCollectionsCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.help_center.collections)[':collection_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.help_center.collections)[':collection_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutHelpCenterCollectionsCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.help_center.collections)[':collection_id']['$put']>,
    ) {
      return parseResponse(client.help_center.collections[':collection_id'].$put(args, options))
    },
  })
}

export function usePutHelpCenterCollectionsCollectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.help_center.collections)[':collection_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.help_center.collections)[':collection_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutHelpCenterCollectionsCollectionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteHelpCenterCollectionsCollectionIdMutationKey() {
  return ['help_center', '/help_center/collections/:collection_id', 'DELETE'] as const
}

export function getDeleteHelpCenterCollectionsCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.help_center.collections)[':collection_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.help_center.collections)[':collection_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteHelpCenterCollectionsCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.help_center.collections)[':collection_id']['$delete']>,
    ) {
      return parseResponse(client.help_center.collections[':collection_id'].$delete(args, options))
    },
  })
}

export function useDeleteHelpCenterCollectionsCollectionId<
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
                ReturnType<(typeof client.help_center.collections)[':collection_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.help_center.collections)[':collection_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteHelpCenterCollectionsCollectionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getHelpCenterHelpCentersHelpCenterIdQueryKey(
  args: InferRequestType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['help_center', '/help_center/help_centers/:help_center_id', keyArgs] as const
}

export function getHelpCenterHelpCentersHelpCenterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHelpCenterHelpCentersHelpCenterIdQueryKey>
  >({
    queryKey: getHelpCenterHelpCentersHelpCenterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.help_center.help_centers[':help_center_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHelpCenterHelpCentersHelpCenterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHelpCenterHelpCentersHelpCenterIdQueryKey>
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
      ...getHelpCenterHelpCentersHelpCenterIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHelpCenterHelpCentersHelpCenterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHelpCenterHelpCentersHelpCenterIdQueryKey>
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
      ...getHelpCenterHelpCentersHelpCenterIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHelpCenterHelpCentersQueryKey(
  args: InferRequestType<typeof client.help_center.help_centers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['help_center', '/help_center/help_centers', keyArgs] as const
}

export function getHelpCenterHelpCentersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.help_center.help_centers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.help_center.help_centers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.help_center.help_centers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHelpCenterHelpCentersQueryKey>
  >({
    queryKey: getHelpCenterHelpCentersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.help_center.help_centers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHelpCenterHelpCenters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.help_center.help_centers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.help_center.help_centers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.help_center.help_centers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHelpCenterHelpCentersQueryKey>
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
      ...getHelpCenterHelpCentersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHelpCenterHelpCenters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.help_center.help_centers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.help_center.help_centers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.help_center.help_centers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHelpCenterHelpCentersQueryKey>
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
      ...getHelpCenterHelpCentersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInternalArticlesQueryKey(
  args: InferRequestType<typeof client.internal_articles.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['internal_articles', '/internal_articles', keyArgs] as const
}

export function getInternalArticlesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.internal_articles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInternalArticlesQueryKey>
  >({
    queryKey: getInternalArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.internal_articles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInternalArticles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.internal_articles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInternalArticlesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInternalArticlesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInternalArticles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.internal_articles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInternalArticlesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInternalArticlesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostInternalArticlesMutationKey() {
  return ['internal_articles', '/internal_articles', 'POST'] as const
}

export function getPostInternalArticlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.internal_articles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInternalArticlesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.internal_articles.$post>) {
      return parseResponse(client.internal_articles.$post(args, options))
    },
  })
}

export function usePostInternalArticles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.internal_articles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInternalArticlesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInternalArticlesInternalArticleIdQueryKey(
  args: InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['internal_articles', '/internal_articles/:internal_article_id', keyArgs] as const
}

export function getInternalArticlesInternalArticleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.internal_articles)[':internal_article_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.internal_articles)[':internal_article_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInternalArticlesInternalArticleIdQueryKey>
  >({
    queryKey: getInternalArticlesInternalArticleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.internal_articles[':internal_article_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInternalArticlesInternalArticleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.internal_articles)[':internal_article_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.internal_articles)[':internal_article_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInternalArticlesInternalArticleIdQueryKey>
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
      ...getInternalArticlesInternalArticleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInternalArticlesInternalArticleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.internal_articles)[':internal_article_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.internal_articles)[':internal_article_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInternalArticlesInternalArticleIdQueryKey>
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
      ...getInternalArticlesInternalArticleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutInternalArticlesInternalArticleIdMutationKey() {
  return ['internal_articles', '/internal_articles/:internal_article_id', 'PUT'] as const
}

export function getPutInternalArticlesInternalArticleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.internal_articles)[':internal_article_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInternalArticlesInternalArticleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$put']>,
    ) {
      return parseResponse(client.internal_articles[':internal_article_id'].$put(args, options))
    },
  })
}

export function usePutInternalArticlesInternalArticleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.internal_articles)[':internal_article_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInternalArticlesInternalArticleIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteInternalArticlesInternalArticleIdMutationKey() {
  return ['internal_articles', '/internal_articles/:internal_article_id', 'DELETE'] as const
}

export function getDeleteInternalArticlesInternalArticleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.internal_articles)[':internal_article_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInternalArticlesInternalArticleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$delete']>,
    ) {
      return parseResponse(client.internal_articles[':internal_article_id'].$delete(args, options))
    },
  })
}

export function useDeleteInternalArticlesInternalArticleId<
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
                ReturnType<(typeof client.internal_articles)[':internal_article_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteInternalArticlesInternalArticleIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostInternalArticlesInternalArticleIdTagsMutationKey() {
  return ['internal_articles', '/internal_articles/:internal_article_id/tags', 'POST'] as const
}

export function getPostInternalArticlesInternalArticleIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.internal_articles)[':internal_article_id']['tags']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.internal_articles)[':internal_article_id']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInternalArticlesInternalArticleIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.internal_articles)[':internal_article_id']['tags']['$post']
      >,
    ) {
      return parseResponse(
        client.internal_articles[':internal_article_id'].tags.$post(args, options),
      )
    },
  })
}

export function usePostInternalArticlesInternalArticleIdTags<
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
                  (typeof client.internal_articles)[':internal_article_id']['tags']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.internal_articles)[':internal_article_id']['tags']['$post']
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
  const mutationDefaults = getPostInternalArticlesInternalArticleIdTagsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteInternalArticlesInternalArticleIdTagsIdMutationKey() {
  return [
    'internal_articles',
    '/internal_articles/:internal_article_id/tags/:id',
    'DELETE',
  ] as const
}

export function getDeleteInternalArticlesInternalArticleIdTagsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.internal_articles)[':internal_article_id']['tags'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.internal_articles)[':internal_article_id']['tags'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteInternalArticlesInternalArticleIdTagsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.internal_articles)[':internal_article_id']['tags'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.internal_articles[':internal_article_id'].tags[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteInternalArticlesInternalArticleIdTagsId<
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
                  (typeof client.internal_articles)[':internal_article_id']['tags'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.internal_articles)[':internal_article_id']['tags'][':id']['$delete']
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
  const mutationDefaults = getDeleteInternalArticlesInternalArticleIdTagsIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInternalArticlesSearchQueryKey(
  args: InferRequestType<typeof client.internal_articles.search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['internal_articles', '/internal_articles/search', keyArgs] as const
}

export function getInternalArticlesSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.internal_articles.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInternalArticlesSearchQueryKey>
  >({
    queryKey: getInternalArticlesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.internal_articles.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInternalArticlesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.internal_articles.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInternalArticlesSearchQueryKey>
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
      ...getInternalArticlesSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInternalArticlesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.internal_articles.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInternalArticlesSearchQueryKey>
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
      ...getInternalArticlesSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoldersQueryKey(args: InferRequestType<typeof client.folders.$get>) {
  const { header: _, ...keyArgs } = args
  return ['folders', '/folders', keyArgs] as const
}

export function getFoldersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.folders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFoldersQueryKey>
  >({
    queryKey: getFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.folders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoldersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.folders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoldersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function getFoldersIdQueryKey(
  args: InferRequestType<(typeof client.folders)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['folders', '/folders/:id', keyArgs] as const
}

export function getFoldersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.folders)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersIdQueryKey>
  >({
    queryKey: getFoldersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFoldersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoldersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoldersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoldersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutFoldersIdMutationKey() {
  return ['folders', '/folders/:id', 'PUT'] as const
}

export function getPutFoldersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.folders)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFoldersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.folders)[':id']['$put']>) {
      return parseResponse(client.folders[':id'].$put(args, options))
    },
  })
}

export function usePutFoldersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.folders)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFoldersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFoldersIdMutationKey() {
  return ['folders', '/folders/:id', 'DELETE'] as const
}

export function getDeleteFoldersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.folders)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFoldersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.folders)[':id']['$delete']>) {
      return parseResponse(client.folders[':id'].$delete(args, options))
    },
  })
}

export function useDeleteFoldersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.folders)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFoldersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpAllowlistQueryKey(args: InferRequestType<typeof client.ip_allowlist.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ip_allowlist', '/ip_allowlist', keyArgs] as const
}

export function getIpAllowlistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allowlist.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ip_allowlist.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allowlist.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpAllowlistQueryKey>
  >({
    queryKey: getIpAllowlistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ip_allowlist.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIpAllowlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allowlist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ip_allowlist.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allowlist.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpAllowlistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIpAllowlistQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIpAllowlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allowlist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ip_allowlist.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allowlist.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpAllowlistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIpAllowlistQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutIpAllowlistMutationKey() {
  return ['ip_allowlist', '/ip_allowlist', 'PUT'] as const
}

export function getPutIpAllowlistMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allowlist.$put>>>>>,
    TError,
    InferRequestType<typeof client.ip_allowlist.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutIpAllowlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ip_allowlist.$put>) {
      return parseResponse(client.ip_allowlist.$put(args, options))
    },
  })
}

export function usePutIpAllowlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allowlist.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.ip_allowlist.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIpAllowlistMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCompaniesQueryKey(args: InferRequestType<typeof client.companies.$get>) {
  const { header: _, ...keyArgs } = args
  return ['companies', '/companies', keyArgs] as const
}

export function getCompaniesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.companies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCompaniesQueryKey>
  >({
    queryKey: getCompaniesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCompanies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.companies.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCompaniesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCompanies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.companies.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCompaniesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCompaniesMutationKey() {
  return ['companies', '/companies', 'POST'] as const
}

export function getPostCompaniesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$post>>>>>,
    TError,
    InferRequestType<typeof client.companies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.companies.$post>) {
      return parseResponse(client.companies.$post(args, options))
    },
  })
}

export function usePostCompanies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.companies.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdQueryKey(
  args: InferRequestType<(typeof client.companies)[':company_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['companies', '/companies/:company_id', keyArgs] as const
}

export function getCompaniesCompanyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':company_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':company_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':company_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdQueryKey>
  >({
    queryKey: getCompaniesCompanyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':company_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':company_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':company_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':company_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCompaniesCompanyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':company_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':company_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':company_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCompaniesCompanyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutCompaniesCompanyIdMutationKey() {
  return ['companies', '/companies/:company_id', 'PUT'] as const
}

export function getPutCompaniesCompanyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':company_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':company_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCompaniesCompanyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.companies)[':company_id']['$put']>) {
      return parseResponse(client.companies[':company_id'].$put(args, options))
    },
  })
}

export function usePutCompaniesCompanyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':company_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':company_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCompaniesCompanyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCompaniesCompanyIdMutationKey() {
  return ['companies', '/companies/:company_id', 'DELETE'] as const
}

export function getDeleteCompaniesCompanyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':company_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':company_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCompaniesCompanyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.companies)[':company_id']['$delete']>) {
      return parseResponse(client.companies[':company_id'].$delete(args, options))
    },
  })
}

export function useDeleteCompaniesCompanyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':company_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':company_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCompaniesCompanyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdContactsQueryKey(
  args: InferRequestType<(typeof client.companies)[':company_id']['contacts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['companies', '/companies/:company_id/contacts', keyArgs] as const
}

export function getCompaniesCompanyIdContactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':company_id']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':company_id']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':company_id']['contacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdContactsQueryKey>
  >({
    queryKey: getCompaniesCompanyIdContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':company_id'].contacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':company_id']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':company_id']['contacts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':company_id']['contacts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdContactsQueryKey>
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
      ...getCompaniesCompanyIdContactsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':company_id']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':company_id']['contacts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':company_id']['contacts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdContactsQueryKey>
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
      ...getCompaniesCompanyIdContactsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdSegmentsQueryKey(
  args: InferRequestType<(typeof client.companies)[':company_id']['segments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['companies', '/companies/:company_id/segments', keyArgs] as const
}

export function getCompaniesCompanyIdSegmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':company_id']['segments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':company_id']['segments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':company_id']['segments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdSegmentsQueryKey>
  >({
    queryKey: getCompaniesCompanyIdSegmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':company_id'].segments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdSegments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':company_id']['segments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':company_id']['segments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':company_id']['segments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdSegmentsQueryKey>
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
      ...getCompaniesCompanyIdSegmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdSegments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':company_id']['segments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':company_id']['segments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':company_id']['segments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdSegmentsQueryKey>
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
      ...getCompaniesCompanyIdSegmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdNotesQueryKey(
  args: InferRequestType<(typeof client.companies)[':company_id']['notes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['companies', '/companies/:company_id/notes', keyArgs] as const
}

export function getCompaniesCompanyIdNotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':company_id']['notes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':company_id']['notes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':company_id']['notes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdNotesQueryKey>
  >({
    queryKey: getCompaniesCompanyIdNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':company_id'].notes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':company_id']['notes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':company_id']['notes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':company_id']['notes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdNotesQueryKey>
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
      ...getCompaniesCompanyIdNotesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':company_id']['notes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':company_id']['notes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':company_id']['notes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdNotesQueryKey>
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
      ...getCompaniesCompanyIdNotesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCompaniesCompanyIdNotesMutationKey() {
  return ['companies', '/companies/:company_id/notes', 'POST'] as const
}

export function getPostCompaniesCompanyIdNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':company_id']['notes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':company_id']['notes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdNotesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.companies)[':company_id']['notes']['$post']>,
    ) {
      return parseResponse(client.companies[':company_id'].notes.$post(args, options))
    },
  })
}

export function usePostCompaniesCompanyIdNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':company_id']['notes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':company_id']['notes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdNotesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCompaniesSearchMutationKey() {
  return ['companies', '/companies/search', 'POST'] as const
}

export function getPostCompaniesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.companies.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.companies.search.$post>) {
      return parseResponse(client.companies.search.$post(args, options))
    },
  })
}

export function usePostCompaniesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.companies.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.companies.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCompaniesListMutationKey() {
  return ['companies', '/companies/list', 'POST'] as const
}

export function getPostCompaniesListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.companies.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.companies.list.$post>) {
      return parseResponse(client.companies.list.$post(args, options))
    },
  })
}

export function usePostCompaniesList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.companies.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesListMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCompaniesScrollQueryKey(
  args: InferRequestType<typeof client.companies.scroll.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['companies', '/companies/scroll', keyArgs] as const
}

export function getCompaniesScrollQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.scroll.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.companies.scroll.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.scroll.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesScrollQueryKey>
  >({
    queryKey: getCompaniesScrollQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies.scroll.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCompaniesScroll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.scroll.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.companies.scroll.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.scroll.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesScrollQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCompaniesScrollQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCompaniesScroll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.scroll.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.companies.scroll.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.scroll.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesScrollQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCompaniesScrollQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getContactsContactIdCompaniesQueryKey(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['companies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/:contact_id/companies', keyArgs] as const
}

export function getContactsContactIdCompaniesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['companies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['companies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['companies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIdCompaniesQueryKey>
  >({
    queryKey: getContactsContactIdCompaniesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':contact_id'].companies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactsContactIdCompanies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['companies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['companies']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['companies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIdCompaniesQueryKey>
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
      ...getContactsContactIdCompaniesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactsContactIdCompanies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['companies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['companies']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['companies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIdCompaniesQueryKey>
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
      ...getContactsContactIdCompaniesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostContactsContactIdCompaniesMutationKey() {
  return ['contacts', '/contacts/:contact_id/companies', 'POST'] as const
}

export function getPostContactsContactIdCompaniesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['companies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':contact_id']['companies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsContactIdCompaniesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contacts)[':contact_id']['companies']['$post']>,
    ) {
      return parseResponse(client.contacts[':contact_id'].companies.$post(args, options))
    },
  })
}

export function usePostContactsContactIdCompanies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['companies']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':contact_id']['companies']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsContactIdCompaniesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteContactsContactIdCompaniesCompanyIdMutationKey() {
  return ['contacts', '/contacts/:contact_id/companies/:company_id', 'DELETE'] as const
}

export function getDeleteContactsContactIdCompaniesCompanyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.contacts)[':contact_id']['companies'][':company_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.contacts)[':contact_id']['companies'][':company_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactsContactIdCompaniesCompanyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.contacts)[':contact_id']['companies'][':company_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.contacts[':contact_id'].companies[':company_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteContactsContactIdCompaniesCompanyId<
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
                  (typeof client.contacts)[':contact_id']['companies'][':company_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.contacts)[':contact_id']['companies'][':company_id']['$delete']
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
  const mutationDefaults = getDeleteContactsContactIdCompaniesCompanyIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactsContactIdNotesQueryKey(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['notes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/:contact_id/notes', keyArgs] as const
}

export function getContactsContactIdNotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['notes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['notes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['notes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIdNotesQueryKey>
  >({
    queryKey: getContactsContactIdNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':contact_id'].notes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactsContactIdNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['notes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['notes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['notes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIdNotesQueryKey>
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
      ...getContactsContactIdNotesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactsContactIdNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['notes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['notes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['notes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIdNotesQueryKey>
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
      ...getContactsContactIdNotesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostContactsContactIdNotesMutationKey() {
  return ['contacts', '/contacts/:contact_id/notes', 'POST'] as const
}

export function getPostContactsContactIdNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['notes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':contact_id']['notes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsContactIdNotesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contacts)[':contact_id']['notes']['$post']>,
    ) {
      return parseResponse(client.contacts[':contact_id'].notes.$post(args, options))
    },
  })
}

export function usePostContactsContactIdNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['notes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':contact_id']['notes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsContactIdNotesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactsContactIdSegmentsQueryKey(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/:contact_id/segments', keyArgs] as const
}

export function getContactsContactIdSegmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIdSegmentsQueryKey>
  >({
    queryKey: getContactsContactIdSegmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':contact_id'].segments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactsContactIdSegments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIdSegmentsQueryKey>
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
      ...getContactsContactIdSegmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactsContactIdSegments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIdSegmentsQueryKey>
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
      ...getContactsContactIdSegmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getContactsContactIdSubscriptionsQueryKey(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/:contact_id/subscriptions', keyArgs] as const
}

export function getContactsContactIdSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIdSubscriptionsQueryKey>
  >({
    queryKey: getContactsContactIdSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':contact_id'].subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactsContactIdSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIdSubscriptionsQueryKey>
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
      ...getContactsContactIdSubscriptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactsContactIdSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIdSubscriptionsQueryKey>
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
      ...getContactsContactIdSubscriptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostContactsContactIdSubscriptionsMutationKey() {
  return ['contacts', '/contacts/:contact_id/subscriptions', 'POST'] as const
}

export function getPostContactsContactIdSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['subscriptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':contact_id']['subscriptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsContactIdSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contacts)[':contact_id']['subscriptions']['$post']>,
    ) {
      return parseResponse(client.contacts[':contact_id'].subscriptions.$post(args, options))
    },
  })
}

export function usePostContactsContactIdSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['subscriptions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':contact_id']['subscriptions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsContactIdSubscriptionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteContactsContactIdSubscriptionsSubscriptionIdMutationKey() {
  return ['contacts', '/contacts/:contact_id/subscriptions/:subscription_id', 'DELETE'] as const
}

export function getDeleteContactsContactIdSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.contacts)[':contact_id']['subscriptions'][':subscription_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.contacts)[':contact_id']['subscriptions'][':subscription_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactsContactIdSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.contacts)[':contact_id']['subscriptions'][':subscription_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.contacts[':contact_id'].subscriptions[':subscription_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteContactsContactIdSubscriptionsSubscriptionId<
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
                  (typeof client.contacts)[':contact_id']['subscriptions'][':subscription_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.contacts)[':contact_id']['subscriptions'][':subscription_id']['$delete']
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
  const mutationDefaults = getDeleteContactsContactIdSubscriptionsSubscriptionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactsContactIdTagsQueryKey(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/:contact_id/tags', keyArgs] as const
}

export function getContactsContactIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIdTagsQueryKey>
  >({
    queryKey: getContactsContactIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':contact_id'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactsContactIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIdTagsQueryKey>
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
      ...getContactsContactIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactsContactIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIdTagsQueryKey>
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
      ...getContactsContactIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostContactsContactIdTagsMutationKey() {
  return ['contacts', '/contacts/:contact_id/tags', 'POST'] as const
}

export function getPostContactsContactIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':contact_id']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsContactIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contacts)[':contact_id']['tags']['$post']>,
    ) {
      return parseResponse(client.contacts[':contact_id'].tags.$post(args, options))
    },
  })
}

export function usePostContactsContactIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['tags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':contact_id']['tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsContactIdTagsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteContactsContactIdTagsTagIdMutationKey() {
  return ['contacts', '/contacts/:contact_id/tags/:tag_id', 'DELETE'] as const
}

export function getDeleteContactsContactIdTagsTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['tags'][':tag_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':contact_id']['tags'][':tag_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactsContactIdTagsTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contacts)[':contact_id']['tags'][':tag_id']['$delete']>,
    ) {
      return parseResponse(client.contacts[':contact_id'].tags[':tag_id'].$delete(args, options))
    },
  })
}

export function useDeleteContactsContactIdTagsTagId<
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
                ReturnType<(typeof client.contacts)[':contact_id']['tags'][':tag_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':contact_id']['tags'][':tag_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteContactsContactIdTagsTagIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactsDeletedQueryKey(
  args: InferRequestType<typeof client.contacts.deleted.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/deleted', keyArgs] as const
}

export function getContactsDeletedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.deleted.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.contacts.deleted.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.deleted.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsDeletedQueryKey>
  >({
    queryKey: getContactsDeletedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.deleted.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useContactsDeleted<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.deleted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contacts.deleted.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.deleted.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getContactsDeletedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContactsDeletedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContactsDeleted<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.deleted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contacts.deleted.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.deleted.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getContactsDeletedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContactsDeletedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getContactsContactIdQueryKey(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/:contact_id', keyArgs] as const
}

export function getContactsContactIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIdQueryKey>
  >({
    queryKey: getContactsContactIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':contact_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactsContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContactsContactIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContactsContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContactsContactIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutContactsContactIdMutationKey() {
  return ['contacts', '/contacts/:contact_id', 'PUT'] as const
}

export function getPutContactsContactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':contact_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutContactsContactIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contacts)[':contact_id']['$put']>) {
      return parseResponse(client.contacts[':contact_id'].$put(args, options))
    },
  })
}

export function usePutContactsContactId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':contact_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutContactsContactIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteContactsContactIdMutationKey() {
  return ['contacts', '/contacts/:contact_id', 'DELETE'] as const
}

export function getDeleteContactsContactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':contact_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactsContactIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contacts)[':contact_id']['$delete']>) {
      return parseResponse(client.contacts[':contact_id'].$delete(args, options))
    },
  })
}

export function useDeleteContactsContactId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':contact_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteContactsContactIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostContactsMergeMutationKey() {
  return ['contacts', '/contacts/merge', 'POST'] as const
}

export function getPostContactsMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.merge.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.contacts.merge.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsMergeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.merge.$post>) {
      return parseResponse(client.contacts.merge.$post(args, options))
    },
  })
}

export function usePostContactsMerge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.merge.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.contacts.merge.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsMergeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostContactsMergePreviewMutationKey() {
  return ['contacts', '/contacts/merge/preview', 'POST'] as const
}

export function getPostContactsMergePreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contacts.merge.preview.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.contacts.merge.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsMergePreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.merge.preview.$post>) {
      return parseResponse(client.contacts.merge.preview.$post(args, options))
    },
  })
}

export function usePostContactsMergePreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contacts.merge.preview.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.contacts.merge.preview.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsMergePreviewMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostContactsSearchMutationKey() {
  return ['contacts', '/contacts/search', 'POST'] as const
}

export function getPostContactsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.contacts.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.search.$post>) {
      return parseResponse(client.contacts.search.$post(args, options))
    },
  })
}

export function usePostContactsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.contacts.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactsActivitiesQueryKey(
  args: InferRequestType<typeof client.contacts.activities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/activities', keyArgs] as const
}

export function getContactsActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.activities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.contacts.activities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.activities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsActivitiesQueryKey>
  >({
    queryKey: getContactsActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.activities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useContactsActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contacts.activities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contacts.activities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContactsActivitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContactsActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contacts.activities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contacts.activities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContactsActivitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getContactsQueryKey(args: InferRequestType<typeof client.contacts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts', keyArgs] as const
}

export function getContactsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.contacts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContactsQueryKey>
  >({
    queryKey: getContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContactsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContactsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostContactsMutationKey() {
  return ['contacts', '/contacts', 'POST'] as const
}

export function getPostContactsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>>,
    TError,
    InferRequestType<typeof client.contacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.$post>) {
      return parseResponse(client.contacts.$post(args, options))
    },
  })
}

export function usePostContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.contacts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactsFindByExternalIdExternalIdQueryKey(
  args: InferRequestType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/find_by_external_id/:external_id', keyArgs] as const
}

export function getContactsFindByExternalIdExternalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsFindByExternalIdExternalIdQueryKey>
  >({
    queryKey: getContactsFindByExternalIdExternalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.find_by_external_id[':external_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactsFindByExternalIdExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsFindByExternalIdExternalIdQueryKey>
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
      ...getContactsFindByExternalIdExternalIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactsFindByExternalIdExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsFindByExternalIdExternalIdQueryKey>
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
      ...getContactsFindByExternalIdExternalIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostContactsContactIdArchiveMutationKey() {
  return ['contacts', '/contacts/:contact_id/archive', 'POST'] as const
}

export function getPostContactsContactIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['archive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':contact_id']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsContactIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contacts)[':contact_id']['archive']['$post']>,
    ) {
      return parseResponse(client.contacts[':contact_id'].archive.$post(args, options))
    },
  })
}

export function usePostContactsContactIdArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['archive']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':contact_id']['archive']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsContactIdArchiveMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostContactsContactIdUnarchiveMutationKey() {
  return ['contacts', '/contacts/:contact_id/unarchive', 'POST'] as const
}

export function getPostContactsContactIdUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['unarchive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':contact_id']['unarchive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsContactIdUnarchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contacts)[':contact_id']['unarchive']['$post']>,
    ) {
      return parseResponse(client.contacts[':contact_id'].unarchive.$post(args, options))
    },
  })
}

export function usePostContactsContactIdUnarchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['unarchive']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':contact_id']['unarchive']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsContactIdUnarchiveMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactsIdBannersQueryKey(
  args: InferRequestType<(typeof client.contacts)[':id']['banners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/:id/banners', keyArgs] as const
}

export function getContactsIdBannersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['banners']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':id']['banners']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':id']['banners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsIdBannersQueryKey>
  >({
    queryKey: getContactsIdBannersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':id'].banners.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactsIdBanners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['banners']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':id']['banners']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':id']['banners']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsIdBannersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContactsIdBannersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContactsIdBanners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['banners']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':id']['banners']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':id']['banners']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsIdBannersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContactsIdBannersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostContactsIdBannersViewIdDismissMutationKey() {
  return ['contacts', '/contacts/:id/banners/:view_id/dismiss', 'POST'] as const
}

export function getPostContactsIdBannersViewIdDismissMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.contacts)[':id']['banners'][':view_id']['dismiss']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':id']['banners'][':view_id']['dismiss']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsIdBannersViewIdDismissMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.contacts)[':id']['banners'][':view_id']['dismiss']['$post']
      >,
    ) {
      return parseResponse(client.contacts[':id'].banners[':view_id'].dismiss.$post(args, options))
    },
  })
}

export function usePostContactsIdBannersViewIdDismiss<
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
                  (typeof client.contacts)[':id']['banners'][':view_id']['dismiss']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.contacts)[':id']['banners'][':view_id']['dismiss']['$post']
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
  const mutationDefaults = getPostContactsIdBannersViewIdDismissMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostContactsContactIdBlockMutationKey() {
  return ['contacts', '/contacts/:contact_id/block', 'POST'] as const
}

export function getPostContactsContactIdBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['block']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':contact_id']['block']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsContactIdBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contacts)[':contact_id']['block']['$post']>,
    ) {
      return parseResponse(client.contacts[':contact_id'].block.$post(args, options))
    },
  })
}

export function usePostContactsContactIdBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['block']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':contact_id']['block']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsContactIdBlockMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactsIdMergeHistoriesQueryKey(
  args: InferRequestType<(typeof client.contacts)[':id']['merge_histories']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/:id/merge_histories', keyArgs] as const
}

export function getContactsIdMergeHistoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':id']['merge_histories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':id']['merge_histories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':id']['merge_histories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsIdMergeHistoriesQueryKey>
  >({
    queryKey: getContactsIdMergeHistoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':id'].merge_histories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactsIdMergeHistories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':id']['merge_histories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':id']['merge_histories']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':id']['merge_histories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsIdMergeHistoriesQueryKey>
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
      ...getContactsIdMergeHistoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactsIdMergeHistories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':id']['merge_histories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':id']['merge_histories']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':id']['merge_histories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsIdMergeHistoriesQueryKey>
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
      ...getContactsIdMergeHistoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutContactsBulkMutationKey() {
  return ['contacts', '/contacts/bulk', 'PUT'] as const
}

export function getPutContactsBulkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.bulk.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.contacts.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutContactsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.bulk.$put>) {
      return parseResponse(client.contacts.bulk.$put(args, options))
    },
  })
}

export function usePutContactsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.bulk.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.contacts.bulk.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutContactsBulkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostContactsBulkMutationKey() {
  return ['contacts', '/contacts/bulk', 'POST'] as const
}

export function getPostContactsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.bulk.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.contacts.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.bulk.$post>) {
      return parseResponse(client.contacts.bulk.$post(args, options))
    },
  })
}

export function usePostContactsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.bulk.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.contacts.bulk.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsBulkMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostContactsBulkDeleteMutationKey() {
  return ['contacts', '/contacts/bulk/delete', 'POST'] as const
}

export function getPostContactsBulkDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contacts.bulk.delete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.contacts.bulk.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsBulkDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.bulk.delete.$post>) {
      return parseResponse(client.contacts.bulk.delete.$post(args, options))
    },
  })
}

export function usePostContactsBulkDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contacts.bulk.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.contacts.bulk.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsBulkDeleteMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactsBulkIdQueryKey(
  args: InferRequestType<(typeof client.contacts.bulk)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/bulk/:id', keyArgs] as const
}

export function getContactsBulkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.bulk)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts.bulk)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.bulk)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsBulkIdQueryKey>
  >({
    queryKey: getContactsBulkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.bulk[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useContactsBulkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.bulk)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts.bulk)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.bulk)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsBulkIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContactsBulkIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContactsBulkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.bulk)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts.bulk)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.bulk)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsBulkIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContactsBulkIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostContentBulkActionsMutationKey() {
  return ['content', '/content/bulk_actions', 'POST'] as const
}

export function getPostContentBulkActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.content.bulk_actions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.content.bulk_actions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContentBulkActionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.content.bulk_actions.$post>) {
      return parseResponse(client.content.bulk_actions.$post(args, options))
    },
  })
}

export function usePostContentBulkActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.content.bulk_actions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.content.bulk_actions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContentBulkActionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContentSearchQueryKey(
  args: InferRequestType<typeof client.content.search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['content', '/content/search', keyArgs] as const
}

export function getContentSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.content.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContentSearchQueryKey>
  >({
    queryKey: getContentSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.content.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useContentSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.content.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getContentSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContentSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContentSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.content.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getContentSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContentSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getContentSnippetsQueryKey(
  args: InferRequestType<typeof client.content_snippets.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['content_snippets', '/content_snippets', keyArgs] as const
}

export function getContentSnippetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_snippets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.content_snippets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_snippets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContentSnippetsQueryKey>
  >({
    queryKey: getContentSnippetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.content_snippets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useContentSnippets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_snippets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.content_snippets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_snippets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getContentSnippetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContentSnippetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContentSnippets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_snippets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.content_snippets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_snippets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getContentSnippetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContentSnippetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostContentSnippetsMutationKey() {
  return ['content_snippets', '/content_snippets', 'POST'] as const
}

export function getPostContentSnippetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_snippets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.content_snippets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContentSnippetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.content_snippets.$post>) {
      return parseResponse(client.content_snippets.$post(args, options))
    },
  })
}

export function usePostContentSnippets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.content_snippets.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.content_snippets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContentSnippetsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContentSnippetsIdQueryKey(
  args: InferRequestType<(typeof client.content_snippets)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['content_snippets', '/content_snippets/:id', keyArgs] as const
}

export function getContentSnippetsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.content_snippets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.content_snippets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.content_snippets)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentSnippetsIdQueryKey>
  >({
    queryKey: getContentSnippetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.content_snippets[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContentSnippetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.content_snippets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.content_snippets)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.content_snippets)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentSnippetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContentSnippetsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContentSnippetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.content_snippets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.content_snippets)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.content_snippets)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentSnippetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContentSnippetsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutContentSnippetsIdMutationKey() {
  return ['content_snippets', '/content_snippets/:id', 'PUT'] as const
}

export function getPutContentSnippetsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.content_snippets)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.content_snippets)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutContentSnippetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.content_snippets)[':id']['$put']>) {
      return parseResponse(client.content_snippets[':id'].$put(args, options))
    },
  })
}

export function usePutContentSnippetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.content_snippets)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.content_snippets)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutContentSnippetsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteContentSnippetsIdMutationKey() {
  return ['content_snippets', '/content_snippets/:id', 'DELETE'] as const
}

export function getDeleteContentSnippetsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.content_snippets)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.content_snippets)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContentSnippetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.content_snippets)[':id']['$delete']>) {
      return parseResponse(client.content_snippets[':id'].$delete(args, options))
    },
  })
}

export function useDeleteContentSnippetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.content_snippets)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.content_snippets)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteContentSnippetsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostContentSnippetsContentSnippetIdTagsMutationKey() {
  return ['content_snippets', '/content_snippets/:content_snippet_id/tags', 'POST'] as const
}

export function getPostContentSnippetsContentSnippetIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.content_snippets)[':content_snippet_id']['tags']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.content_snippets)[':content_snippet_id']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContentSnippetsContentSnippetIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.content_snippets)[':content_snippet_id']['tags']['$post']
      >,
    ) {
      return parseResponse(client.content_snippets[':content_snippet_id'].tags.$post(args, options))
    },
  })
}

export function usePostContentSnippetsContentSnippetIdTags<
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
                ReturnType<(typeof client.content_snippets)[':content_snippet_id']['tags']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.content_snippets)[':content_snippet_id']['tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContentSnippetsContentSnippetIdTagsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteContentSnippetsContentSnippetIdTagsIdMutationKey() {
  return ['content_snippets', '/content_snippets/:content_snippet_id/tags/:id', 'DELETE'] as const
}

export function getDeleteContentSnippetsContentSnippetIdTagsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.content_snippets)[':content_snippet_id']['tags'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.content_snippets)[':content_snippet_id']['tags'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteContentSnippetsContentSnippetIdTagsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.content_snippets)[':content_snippet_id']['tags'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.content_snippets[':content_snippet_id'].tags[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteContentSnippetsContentSnippetIdTagsId<
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
                  (typeof client.content_snippets)[':content_snippet_id']['tags'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.content_snippets)[':content_snippet_id']['tags'][':id']['$delete']
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
  const mutationDefaults = getDeleteContentSnippetsContentSnippetIdTagsIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDynamicContentsQueryKey(
  args: InferRequestType<typeof client.dynamic_contents.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['dynamic_contents', '/dynamic_contents', keyArgs] as const
}

export function getDynamicContentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamic_contents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dynamic_contents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamic_contents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDynamicContentsQueryKey>
  >({
    queryKey: getDynamicContentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dynamic_contents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDynamicContents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamic_contents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dynamic_contents.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamic_contents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDynamicContentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDynamicContentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDynamicContents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamic_contents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dynamic_contents.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamic_contents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDynamicContentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDynamicContentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDynamicContentsMutationKey() {
  return ['dynamic_contents', '/dynamic_contents', 'POST'] as const
}

export function getPostDynamicContentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamic_contents.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dynamic_contents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDynamicContentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dynamic_contents.$post>) {
      return parseResponse(client.dynamic_contents.$post(args, options))
    },
  })
}

export function usePostDynamicContents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dynamic_contents.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dynamic_contents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDynamicContentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDynamicContentsIdQueryKey(
  args: InferRequestType<(typeof client.dynamic_contents)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dynamic_contents', '/dynamic_contents/:id', keyArgs] as const
}

export function getDynamicContentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dynamic_contents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDynamicContentsIdQueryKey>
  >({
    queryKey: getDynamicContentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dynamic_contents[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDynamicContentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dynamic_contents)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDynamicContentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDynamicContentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDynamicContentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dynamic_contents)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDynamicContentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDynamicContentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutDynamicContentsIdMutationKey() {
  return ['dynamic_contents', '/dynamic_contents/:id', 'PUT'] as const
}

export function getPutDynamicContentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.dynamic_contents)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDynamicContentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dynamic_contents)[':id']['$put']>) {
      return parseResponse(client.dynamic_contents[':id'].$put(args, options))
    },
  })
}

export function usePutDynamicContentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.dynamic_contents)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDynamicContentsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDynamicContentsIdMutationKey() {
  return ['dynamic_contents', '/dynamic_contents/:id', 'DELETE'] as const
}

export function getDeleteDynamicContentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dynamic_contents)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDynamicContentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dynamic_contents)[':id']['$delete']>) {
      return parseResponse(client.dynamic_contents[':id'].$delete(args, options))
    },
  })
}

export function useDeleteDynamicContentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.dynamic_contents)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDynamicContentsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConversationsConversationIdTagsMutationKey() {
  return ['conversations', '/conversations/:conversation_id/tags', 'POST'] as const
}

export function getPostConversationsConversationIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':conversation_id']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConversationIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':conversation_id']['tags']['$post']>,
    ) {
      return parseResponse(client.conversations[':conversation_id'].tags.$post(args, options))
    },
  })
}

export function usePostConversationsConversationIdTags<
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
                ReturnType<(typeof client.conversations)[':conversation_id']['tags']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conversations)[':conversation_id']['tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsConversationIdTagsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteConversationsConversationIdTagsTagIdMutationKey() {
  return ['conversations', '/conversations/:conversation_id/tags/:tag_id', 'DELETE'] as const
}

export function getDeleteConversationsConversationIdTagsTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)[':conversation_id']['tags'][':tag_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.conversations)[':conversation_id']['tags'][':tag_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsConversationIdTagsTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)[':conversation_id']['tags'][':tag_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.conversations[':conversation_id'].tags[':tag_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteConversationsConversationIdTagsTagId<
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
                  (typeof client.conversations)[':conversation_id']['tags'][':tag_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.conversations)[':conversation_id']['tags'][':tag_id']['$delete']
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
  const mutationDefaults = getDeleteConversationsConversationIdTagsTagIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConversationsQueryKey(args: InferRequestType<typeof client.conversations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['conversations', '/conversations', keyArgs] as const
}

export function getConversationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.conversations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsQueryKey>
  >({
    queryKey: getConversationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConversations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConversationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConversations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConversationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostConversationsMutationKey() {
  return ['conversations', '/conversations', 'POST'] as const
}

export function getPostConversationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.conversations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.$post>) {
      return parseResponse(client.conversations.$post(args, options))
    },
  })
}

export function usePostConversations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.conversations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConversationsConversationIdQueryKey(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['conversations', '/conversations/:conversation_id', keyArgs] as const
}

export function getConversationsConversationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversationIdQueryKey>
  >({
    queryKey: getConversationsConversationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations[':conversation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsConversationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversationIdQueryKey>
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
      ...getConversationsConversationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConversationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversationIdQueryKey>
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
      ...getConversationsConversationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutConversationsConversationIdMutationKey() {
  return ['conversations', '/conversations/:conversation_id', 'PUT'] as const
}

export function getPutConversationsConversationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':conversation_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConversationsConversationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':conversation_id']['$put']>,
    ) {
      return parseResponse(client.conversations[':conversation_id'].$put(args, options))
    },
  })
}

export function usePutConversationsConversationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conversations)[':conversation_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutConversationsConversationIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteConversationsConversationIdMutationKey() {
  return ['conversations', '/conversations/:conversation_id', 'DELETE'] as const
}

export function getDeleteConversationsConversationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsConversationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']>,
    ) {
      return parseResponse(client.conversations[':conversation_id'].$delete(args, options))
    },
  })
}

export function useDeleteConversationsConversationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConversationsConversationIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConversationsSearchMutationKey() {
  return ['conversations', '/conversations/search', 'POST'] as const
}

export function getPostConversationsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.conversations.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.search.$post>) {
      return parseResponse(client.conversations.search.$post(args, options))
    },
  })
}

export function usePostConversationsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.conversations.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConversationsConversationIdReplyMutationKey() {
  return ['conversations', '/conversations/:conversation_id/reply', 'POST'] as const
}

export function getPostConversationsConversationIdReplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['reply']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':conversation_id']['reply']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConversationIdReplyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':conversation_id']['reply']['$post']>,
    ) {
      return parseResponse(client.conversations[':conversation_id'].reply.$post(args, options))
    },
  })
}

export function usePostConversationsConversationIdReply<
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
                ReturnType<(typeof client.conversations)[':conversation_id']['reply']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conversations)[':conversation_id']['reply']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsConversationIdReplyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConversationsConversationIdPartsMutationKey() {
  return ['conversations', '/conversations/:conversation_id/parts', 'POST'] as const
}

export function getPostConversationsConversationIdPartsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['parts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':conversation_id']['parts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConversationIdPartsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':conversation_id']['parts']['$post']>,
    ) {
      return parseResponse(client.conversations[':conversation_id'].parts.$post(args, options))
    },
  })
}

export function usePostConversationsConversationIdParts<
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
                ReturnType<(typeof client.conversations)[':conversation_id']['parts']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conversations)[':conversation_id']['parts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsConversationIdPartsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConversationsConversationIdCustomersMutationKey() {
  return ['conversations', '/conversations/:conversation_id/customers', 'POST'] as const
}

export function getPostConversationsConversationIdCustomersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conversations)[':conversation_id']['customers']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':conversation_id']['customers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConversationIdCustomersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)[':conversation_id']['customers']['$post']
      >,
    ) {
      return parseResponse(client.conversations[':conversation_id'].customers.$post(args, options))
    },
  })
}

export function usePostConversationsConversationIdCustomers<
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
                ReturnType<(typeof client.conversations)[':conversation_id']['customers']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conversations)[':conversation_id']['customers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsConversationIdCustomersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteConversationsConversationIdCustomersContactIdMutationKey() {
  return [
    'conversations',
    '/conversations/:conversation_id/customers/:contact_id',
    'DELETE',
  ] as const
}

export function getDeleteConversationsConversationIdCustomersContactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)[':conversation_id']['customers'][':contact_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.conversations)[':conversation_id']['customers'][':contact_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsConversationIdCustomersContactIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)[':conversation_id']['customers'][':contact_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.conversations[':conversation_id'].customers[':contact_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteConversationsConversationIdCustomersContactId<
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
                  (typeof client.conversations)[':conversation_id']['customers'][':contact_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.conversations)[':conversation_id']['customers'][':contact_id']['$delete']
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
  const mutationDefaults = getDeleteConversationsConversationIdCustomersContactIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConversationsIdHandlingEventsQueryKey(
  args: InferRequestType<(typeof client.conversations)[':id']['handling_events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['conversations', '/conversations/:id/handling_events', keyArgs] as const
}

export function getConversationsIdHandlingEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':id']['handling_events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':id']['handling_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':id']['handling_events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsIdHandlingEventsQueryKey>
  >({
    queryKey: getConversationsIdHandlingEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations[':id'].handling_events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsIdHandlingEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':id']['handling_events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':id']['handling_events']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversations)[':id']['handling_events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsIdHandlingEventsQueryKey>
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
      ...getConversationsIdHandlingEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsIdHandlingEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':id']['handling_events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':id']['handling_events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversations)[':id']['handling_events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsIdHandlingEventsQueryKey>
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
      ...getConversationsIdHandlingEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConversationsIdHitlEventsQueryKey(
  args: InferRequestType<(typeof client.conversations)[':id']['hitl_events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['conversations', '/conversations/:id/hitl_events', keyArgs] as const
}

export function getConversationsIdHitlEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':id']['hitl_events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':id']['hitl_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':id']['hitl_events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsIdHitlEventsQueryKey>
  >({
    queryKey: getConversationsIdHitlEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations[':id'].hitl_events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsIdHitlEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':id']['hitl_events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':id']['hitl_events']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversations)[':id']['hitl_events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsIdHitlEventsQueryKey>
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
      ...getConversationsIdHitlEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsIdHitlEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':id']['hitl_events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':id']['hitl_events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversations)[':id']['hitl_events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsIdHitlEventsQueryKey>
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
      ...getConversationsIdHitlEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConversationsIdSideConversationsQueryKey(
  args: InferRequestType<(typeof client.conversations)[':id']['side_conversations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['conversations', '/conversations/:id/side_conversations', keyArgs] as const
}

export function getConversationsIdSideConversationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':id']['side_conversations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':id']['side_conversations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':id']['side_conversations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsIdSideConversationsQueryKey>
  >({
    queryKey: getConversationsIdSideConversationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations[':id'].side_conversations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsIdSideConversations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':id']['side_conversations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':id']['side_conversations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.conversations)[':id']['side_conversations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsIdSideConversationsQueryKey>
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
      ...getConversationsIdSideConversationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsIdSideConversations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':id']['side_conversations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':id']['side_conversations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.conversations)[':id']['side_conversations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsIdSideConversationsQueryKey>
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
      ...getConversationsIdSideConversationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostConversationsConversationIdRatingMutationKey() {
  return ['conversations', '/conversations/:conversation_id/rating', 'POST'] as const
}

export function getPostConversationsConversationIdRatingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['rating']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':conversation_id']['rating']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConversationIdRatingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':conversation_id']['rating']['$post']>,
    ) {
      return parseResponse(client.conversations[':conversation_id'].rating.$post(args, options))
    },
  })
}

export function usePostConversationsConversationIdRating<
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
                ReturnType<(typeof client.conversations)[':conversation_id']['rating']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conversations)[':conversation_id']['rating']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsConversationIdRatingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConversationsRedactMutationKey() {
  return ['conversations', '/conversations/redact', 'POST'] as const
}

export function getPostConversationsRedactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.redact.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.conversations.redact.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsRedactMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.redact.$post>) {
      return parseResponse(client.conversations.redact.$post(args, options))
    },
  })
}

export function usePostConversationsRedact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.redact.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.conversations.redact.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsRedactMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConversationsIdMergeMutationKey() {
  return ['conversations', '/conversations/:id/merge', 'POST'] as const
}

export function getPostConversationsIdMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':id']['merge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':id']['merge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsIdMergeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':id']['merge']['$post']>,
    ) {
      return parseResponse(client.conversations[':id'].merge.$post(args, options))
    },
  })
}

export function usePostConversationsIdMerge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversations)[':id']['merge']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conversations)[':id']['merge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsIdMergeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConversationsConversationIdConvertMutationKey() {
  return ['conversations', '/conversations/:conversation_id/convert', 'POST'] as const
}

export function getPostConversationsConversationIdConvertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['convert']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':conversation_id']['convert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConversationIdConvertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':conversation_id']['convert']['$post']>,
    ) {
      return parseResponse(client.conversations[':conversation_id'].convert.$post(args, options))
    },
  })
}

export function usePostConversationsConversationIdConvert<
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
                ReturnType<(typeof client.conversations)[':conversation_id']['convert']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conversations)[':conversation_id']['convert']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsConversationIdConvertMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConversationsDeletedQueryKey(
  args: InferRequestType<typeof client.conversations.deleted.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['conversations', '/conversations/deleted', keyArgs] as const
}

export function getConversationsDeletedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.deleted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.deleted.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.deleted.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsDeletedQueryKey>
  >({
    queryKey: getConversationsDeletedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.deleted.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConversationsDeleted<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.deleted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.deleted.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.deleted.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsDeletedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConversationsDeletedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConversationsDeleted<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.deleted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.deleted.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.deleted.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsDeletedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConversationsDeletedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostConversationsStreamTokenMutationKey() {
  return ['conversations', '/conversations/stream/token', 'POST'] as const
}

export function getPostConversationsStreamTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.stream.token.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.conversations.stream.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsStreamTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.stream.token.$post>) {
      return parseResponse(client.conversations.stream.token.$post(args, options))
    },
  })
}

export function usePostConversationsStreamToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.conversations.stream.token.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.conversations.stream.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsStreamTokenMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteConversationsStreamTokenMutationKey() {
  return ['conversations', '/conversations/stream/token', 'DELETE'] as const
}

export function getDeleteConversationsStreamTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.conversations.stream.token.$delete>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.conversations.stream.token.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsStreamTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.stream.token.$delete>) {
      return parseResponse(client.conversations.stream.token.$delete(args, options))
    },
  })
}

export function useDeleteConversationsStreamToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.conversations.stream.token.$delete>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.conversations.stream.token.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConversationsStreamTokenMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConversationsAttributesQueryKey(
  args: InferRequestType<typeof client.conversations.attributes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['conversations', '/conversations/attributes', keyArgs] as const
}

export function getConversationsAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversations.attributes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.attributes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.attributes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsAttributesQueryKey>
  >({
    queryKey: getConversationsAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.attributes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversations.attributes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.attributes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.attributes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsAttributesQueryKey>
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
      ...getConversationsAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversations.attributes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.attributes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.attributes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsAttributesQueryKey>
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
      ...getConversationsAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostConversationsAttributesMutationKey() {
  return ['conversations', '/conversations/attributes', 'POST'] as const
}

export function getPostConversationsAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.attributes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.conversations.attributes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsAttributesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.attributes.$post>) {
      return parseResponse(client.conversations.attributes.$post(args, options))
    },
  })
}

export function usePostConversationsAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.attributes.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.conversations.attributes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsAttributesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConversationsAttributesIdQueryKey(
  args: InferRequestType<(typeof client.conversations.attributes)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['conversations', '/conversations/attributes/:id', keyArgs] as const
}

export function getConversationsAttributesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations.attributes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsAttributesIdQueryKey>
  >({
    queryKey: getConversationsAttributesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.attributes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsAttributesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations.attributes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsAttributesIdQueryKey>
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
      ...getConversationsAttributesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsAttributesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations.attributes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsAttributesIdQueryKey>
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
      ...getConversationsAttributesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutConversationsAttributesIdMutationKey() {
  return ['conversations', '/conversations/attributes/:id', 'PUT'] as const
}

export function getPutConversationsAttributesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations.attributes)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConversationsAttributesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations.attributes)[':id']['$put']>,
    ) {
      return parseResponse(client.conversations.attributes[':id'].$put(args, options))
    },
  })
}

export function usePutConversationsAttributesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conversations.attributes)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutConversationsAttributesIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteConversationsAttributesIdMutationKey() {
  return ['conversations', '/conversations/attributes/:id', 'DELETE'] as const
}

export function getDeleteConversationsAttributesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations.attributes)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsAttributesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations.attributes)[':id']['$delete']>,
    ) {
      return parseResponse(client.conversations.attributes[':id'].$delete(args, options))
    },
  })
}

export function useDeleteConversationsAttributesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conversations.attributes)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConversationsAttributesIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConversationsAttributesIdOptionsMutationKey() {
  return ['conversations', '/conversations/attributes/:id/options', 'POST'] as const
}

export function getPostConversationsAttributesIdOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['options']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations.attributes)[':id']['options']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsAttributesIdOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations.attributes)[':id']['options']['$post']>,
    ) {
      return parseResponse(client.conversations.attributes[':id'].options.$post(args, options))
    },
  })
}

export function usePostConversationsAttributesIdOptions<
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
                ReturnType<(typeof client.conversations.attributes)[':id']['options']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conversations.attributes)[':id']['options']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsAttributesIdOptionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutConversationsAttributesIdOptionsOptionIdMutationKey() {
  return ['conversations', '/conversations/attributes/:id/options/:option_id', 'PUT'] as const
}

export function getPutConversationsAttributesIdOptionsOptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations.attributes)[':id']['options'][':option_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.conversations.attributes)[':id']['options'][':option_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutConversationsAttributesIdOptionsOptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations.attributes)[':id']['options'][':option_id']['$put']
      >,
    ) {
      return parseResponse(
        client.conversations.attributes[':id'].options[':option_id'].$put(args, options),
      )
    },
  })
}

export function usePutConversationsAttributesIdOptionsOptionId<
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
                  (typeof client.conversations.attributes)[':id']['options'][':option_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.conversations.attributes)[':id']['options'][':option_id']['$put']
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
  const mutationDefaults = getPutConversationsAttributesIdOptionsOptionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteConversationsAttributesIdOptionsOptionIdMutationKey() {
  return ['conversations', '/conversations/attributes/:id/options/:option_id', 'DELETE'] as const
}

export function getDeleteConversationsAttributesIdOptionsOptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations.attributes)[':id']['options'][':option_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.conversations.attributes)[':id']['options'][':option_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsAttributesIdOptionsOptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations.attributes)[':id']['options'][':option_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.conversations.attributes[':id'].options[':option_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteConversationsAttributesIdOptionsOptionId<
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
                  (typeof client.conversations.attributes)[':id']['options'][':option_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.conversations.attributes)[':id']['options'][':option_id']['$delete']
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
  const mutationDefaults = getDeleteConversationsAttributesIdOptionsOptionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCustomObjectInstancesCustomObjectTypeIdentifierQueryKey(
  args: InferRequestType<
    (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'custom_object_instances',
    '/custom_object_instances/:custom_object_type_identifier',
    keyArgs,
  ] as const
}

export function getCustomObjectInstancesCustomObjectTypeIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomObjectInstancesCustomObjectTypeIdentifierQueryKey>
  >({
    queryKey: getCustomObjectInstancesCustomObjectTypeIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.custom_object_instances[':custom_object_type_identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCustomObjectInstancesCustomObjectTypeIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomObjectInstancesCustomObjectTypeIdentifierQueryKey>
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
      ...getCustomObjectInstancesCustomObjectTypeIdentifierQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomObjectInstancesCustomObjectTypeIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomObjectInstancesCustomObjectTypeIdentifierQueryKey>
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
      ...getCustomObjectInstancesCustomObjectTypeIdentifierQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCustomObjectInstancesCustomObjectTypeIdentifierMutationKey() {
  return [
    'custom_object_instances',
    '/custom_object_instances/:custom_object_type_identifier',
    'POST',
  ] as const
}

export function getPostCustomObjectInstancesCustomObjectTypeIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.custom_object_instances)[':custom_object_type_identifier']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.custom_object_instances)[':custom_object_type_identifier']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCustomObjectInstancesCustomObjectTypeIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.custom_object_instances)[':custom_object_type_identifier']['$post']
      >,
    ) {
      return parseResponse(
        client.custom_object_instances[':custom_object_type_identifier'].$post(args, options),
      )
    },
  })
}

export function usePostCustomObjectInstancesCustomObjectTypeIdentifier<
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
                  (typeof client.custom_object_instances)[':custom_object_type_identifier']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.custom_object_instances)[':custom_object_type_identifier']['$post']
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
  const mutationDefaults = getPostCustomObjectInstancesCustomObjectTypeIdentifierMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCustomObjectInstancesCustomObjectTypeIdentifierMutationKey() {
  return [
    'custom_object_instances',
    '/custom_object_instances/:custom_object_type_identifier',
    'DELETE',
  ] as const
}

export function getDeleteCustomObjectInstancesCustomObjectTypeIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.custom_object_instances)[':custom_object_type_identifier']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.custom_object_instances)[':custom_object_type_identifier']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomObjectInstancesCustomObjectTypeIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.custom_object_instances)[':custom_object_type_identifier']['$delete']
      >,
    ) {
      return parseResponse(
        client.custom_object_instances[':custom_object_type_identifier'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCustomObjectInstancesCustomObjectTypeIdentifier<
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
                  (typeof client.custom_object_instances)[':custom_object_type_identifier']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.custom_object_instances)[':custom_object_type_identifier']['$delete']
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
  const mutationDefaults = getDeleteCustomObjectInstancesCustomObjectTypeIdentifierMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdQueryKey(
  args: InferRequestType<
    (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'custom_object_instances',
    '/custom_object_instances/:custom_object_type_identifier/:custom_object_instance_id',
    keyArgs,
  ] as const
}

export function getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdQueryKey
    >
  >({
    queryKey:
      getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.custom_object_instances[':custom_object_type_identifier'][
          ':custom_object_instance_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdQueryKey
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
      ...getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdQueryKey
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
      ...getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdMutationKey() {
  return [
    'custom_object_instances',
    '/custom_object_instances/:custom_object_type_identifier/:custom_object_instance_id',
    'DELETE',
  ] as const
}

export function getDeleteCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.custom_object_instances[':custom_object_type_identifier'][
          ':custom_object_instance_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceId<
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
                  (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$delete']
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
    getDeleteCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDataAttributesQueryKey(
  args: InferRequestType<typeof client.data_attributes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['data_attributes', '/data_attributes', keyArgs] as const
}

export function getDataAttributesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_attributes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.data_attributes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_attributes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDataAttributesQueryKey>
  >({
    queryKey: getDataAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data_attributes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDataAttributes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_attributes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data_attributes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_attributes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDataAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDataAttributesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDataAttributes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_attributes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data_attributes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_attributes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDataAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDataAttributesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDataAttributesMutationKey() {
  return ['data_attributes', '/data_attributes', 'POST'] as const
}

export function getPostDataAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_attributes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.data_attributes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDataAttributesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.data_attributes.$post>) {
      return parseResponse(client.data_attributes.$post(args, options))
    },
  })
}

export function usePostDataAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_attributes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.data_attributes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDataAttributesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutDataAttributesDataAttributeIdMutationKey() {
  return ['data_attributes', '/data_attributes/:data_attribute_id', 'PUT'] as const
}

export function getPutDataAttributesDataAttributeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.data_attributes)[':data_attribute_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.data_attributes)[':data_attribute_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataAttributesDataAttributeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.data_attributes)[':data_attribute_id']['$put']>,
    ) {
      return parseResponse(client.data_attributes[':data_attribute_id'].$put(args, options))
    },
  })
}

export function usePutDataAttributesDataAttributeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.data_attributes)[':data_attribute_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.data_attributes)[':data_attribute_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDataAttributesDataAttributeIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDataConnectorsQueryKey(
  args: InferRequestType<typeof client.data_connectors.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['data_connectors', '/data_connectors', keyArgs] as const
}

export function getDataConnectorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_connectors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.data_connectors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_connectors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDataConnectorsQueryKey>
  >({
    queryKey: getDataConnectorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data_connectors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDataConnectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_connectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data_connectors.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_connectors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDataConnectorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDataConnectorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDataConnectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_connectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data_connectors.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_connectors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDataConnectorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDataConnectorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDataConnectorsMutationKey() {
  return ['data_connectors', '/data_connectors', 'POST'] as const
}

export function getPostDataConnectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_connectors.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.data_connectors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDataConnectorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.data_connectors.$post>) {
      return parseResponse(client.data_connectors.$post(args, options))
    },
  })
}

export function usePostDataConnectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_connectors.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.data_connectors.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDataConnectorsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDataConnectorsIdQueryKey(
  args: InferRequestType<(typeof client.data_connectors)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['data_connectors', '/data_connectors/:id', keyArgs] as const
}

export function getDataConnectorsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.data_connectors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data_connectors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.data_connectors)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataConnectorsIdQueryKey>
  >({
    queryKey: getDataConnectorsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data_connectors[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataConnectorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.data_connectors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data_connectors)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.data_connectors)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataConnectorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDataConnectorsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDataConnectorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.data_connectors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data_connectors)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.data_connectors)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataConnectorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDataConnectorsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteDataConnectorsIdMutationKey() {
  return ['data_connectors', '/data_connectors/:id', 'DELETE'] as const
}

export function getDeleteDataConnectorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.data_connectors)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.data_connectors)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataConnectorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.data_connectors)[':id']['$delete']>) {
      return parseResponse(client.data_connectors[':id'].$delete(args, options))
    },
  })
}

export function useDeleteDataConnectorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.data_connectors)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.data_connectors)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDataConnectorsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDataConnectorsIdMutationKey() {
  return ['data_connectors', '/data_connectors/:id', 'PATCH'] as const
}

export function getPatchDataConnectorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.data_connectors)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.data_connectors)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDataConnectorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.data_connectors)[':id']['$patch']>) {
      return parseResponse(client.data_connectors[':id'].$patch(args, options))
    },
  })
}

export function usePatchDataConnectorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.data_connectors)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.data_connectors)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDataConnectorsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDataConnectorsDataConnectorIdExecutionResultsQueryKey(
  args: InferRequestType<
    (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'data_connectors',
    '/data_connectors/:data_connector_id/execution_results',
    keyArgs,
  ] as const
}

export function getDataConnectorsDataConnectorIdExecutionResultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataConnectorsDataConnectorIdExecutionResultsQueryKey>
  >({
    queryKey: getDataConnectorsDataConnectorIdExecutionResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data_connectors[':data_connector_id'].execution_results.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataConnectorsDataConnectorIdExecutionResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataConnectorsDataConnectorIdExecutionResultsQueryKey>
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
      ...getDataConnectorsDataConnectorIdExecutionResultsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataConnectorsDataConnectorIdExecutionResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataConnectorsDataConnectorIdExecutionResultsQueryKey>
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
      ...getDataConnectorsDataConnectorIdExecutionResultsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataConnectorsDataConnectorIdExecutionResultsIdQueryKey(
  args: InferRequestType<
    (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'data_connectors',
    '/data_connectors/:data_connector_id/execution_results/:id',
    keyArgs,
  ] as const
}

export function getDataConnectorsDataConnectorIdExecutionResultsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataConnectorsDataConnectorIdExecutionResultsIdQueryKey>
  >({
    queryKey: getDataConnectorsDataConnectorIdExecutionResultsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data_connectors[':data_connector_id'].execution_results[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataConnectorsDataConnectorIdExecutionResultsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataConnectorsDataConnectorIdExecutionResultsIdQueryKey>
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
      ...getDataConnectorsDataConnectorIdExecutionResultsIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataConnectorsDataConnectorIdExecutionResultsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataConnectorsDataConnectorIdExecutionResultsIdQueryKey>
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
      ...getDataConnectorsDataConnectorIdExecutionResultsIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataConnectorsIdVersionsQueryKey(
  args: InferRequestType<(typeof client.data_connectors)[':id']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['data_connectors', '/data_connectors/:id/versions', keyArgs] as const
}

export function getDataConnectorsIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data_connectors)[':id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data_connectors)[':id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.data_connectors)[':id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataConnectorsIdVersionsQueryKey>
  >({
    queryKey: getDataConnectorsIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data_connectors[':id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataConnectorsIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data_connectors)[':id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data_connectors)[':id']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.data_connectors)[':id']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataConnectorsIdVersionsQueryKey>
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
      ...getDataConnectorsIdVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataConnectorsIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data_connectors)[':id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data_connectors)[':id']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.data_connectors)[':id']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataConnectorsIdVersionsQueryKey>
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
      ...getDataConnectorsIdVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataConnectorsIdVersionsVersionIdQueryKey(
  args: InferRequestType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['data_connectors', '/data_connectors/:id/versions/:version_id', keyArgs] as const
}

export function getDataConnectorsIdVersionsVersionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataConnectorsIdVersionsVersionIdQueryKey>
  >({
    queryKey: getDataConnectorsIdVersionsVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data_connectors[':id'].versions[':version_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataConnectorsIdVersionsVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data_connectors)[':id']['versions'][':version_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataConnectorsIdVersionsVersionIdQueryKey>
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
      ...getDataConnectorsIdVersionsVersionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataConnectorsIdVersionsVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data_connectors)[':id']['versions'][':version_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataConnectorsIdVersionsVersionIdQueryKey>
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
      ...getDataConnectorsIdVersionsVersionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchDataConnectorsIdVersionsVersionIdMutationKey() {
  return ['data_connectors', '/data_connectors/:id/versions/:version_id', 'PATCH'] as const
}

export function getPatchDataConnectorsIdVersionsVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDataConnectorsIdVersionsVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.data_connectors)[':id']['versions'][':version_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.data_connectors[':id'].versions[':version_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchDataConnectorsIdVersionsVersionId<
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
                  (typeof client.data_connectors)[':id']['versions'][':version_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.data_connectors)[':id']['versions'][':version_id']['$patch']
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
  const mutationDefaults = getPatchDataConnectorsIdVersionsVersionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
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
  const { header: _, ...keyArgs } = args
  return ['events', '/events', keyArgs] as const
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

export function getPostEventsMutationKey() {
  return ['events', '/events', 'POST'] as const
}

export function getPostEventsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>>,
    TError,
    InferRequestType<typeof client.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.$post>) {
      return parseResponse(client.events.$post(args, options))
    },
  })
}

export function usePostEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>>,
        TError,
        InferRequestType<typeof client.events.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEventsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEventsSummariesMutationKey() {
  return ['events', '/events/summaries', 'POST'] as const
}

export function getPostEventsSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.summaries.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.events.summaries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsSummariesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.summaries.$post>) {
      return parseResponse(client.events.summaries.$post(args, options))
    },
  })
}

export function usePostEventsSummaries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.events.summaries.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.events.summaries.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEventsSummariesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostExportContentDataMutationKey() {
  return ['export', '/export/content/data', 'POST'] as const
}

export function getPostExportContentDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.content.data.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.export.content.data.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportContentDataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.export.content.data.$post>) {
      return parseResponse(client.export.content.data.$post(args, options))
    },
  })
}

export function usePostExportContentData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.export.content.data.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.export.content.data.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExportContentDataMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExportContentDataJobIdentifierQueryKey(
  args: InferRequestType<(typeof client.export.content.data)[':job_identifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['export', '/export/content/data/:job_identifier', keyArgs] as const
}

export function getExportContentDataJobIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.content.data)[':job_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.content.data)[':job_identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.export.content.data)[':job_identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportContentDataJobIdentifierQueryKey>
  >({
    queryKey: getExportContentDataJobIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.content.data[':job_identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExportContentDataJobIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.content.data)[':job_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.content.data)[':job_identifier']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.export.content.data)[':job_identifier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportContentDataJobIdentifierQueryKey>
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
      ...getExportContentDataJobIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseExportContentDataJobIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.content.data)[':job_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.content.data)[':job_identifier']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.export.content.data)[':job_identifier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportContentDataJobIdentifierQueryKey>
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
      ...getExportContentDataJobIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostExportCancelJobIdentifierMutationKey() {
  return ['export', '/export/cancel/:job_identifier', 'POST'] as const
}

export function getPostExportCancelJobIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.export.cancel)[':job_identifier']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.export.cancel)[':job_identifier']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostExportCancelJobIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.export.cancel)[':job_identifier']['$post']>,
    ) {
      return parseResponse(client.export.cancel[':job_identifier'].$post(args, options))
    },
  })
}

export function usePostExportCancelJobIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.export.cancel)[':job_identifier']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.export.cancel)[':job_identifier']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExportCancelJobIdentifierMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDownloadContentDataJobIdentifierQueryKey(
  args: InferRequestType<(typeof client.download.content.data)[':job_identifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['download', '/download/content/data/:job_identifier', keyArgs] as const
}

export function getDownloadContentDataJobIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.download.content.data)[':job_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.download.content.data)[':job_identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.download.content.data)[':job_identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDownloadContentDataJobIdentifierQueryKey>
  >({
    queryKey: getDownloadContentDataJobIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.download.content.data[':job_identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDownloadContentDataJobIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.download.content.data)[':job_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.download.content.data)[':job_identifier']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.download.content.data)[':job_identifier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDownloadContentDataJobIdentifierQueryKey>
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
      ...getDownloadContentDataJobIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDownloadContentDataJobIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.download.content.data)[':job_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.download.content.data)[':job_identifier']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.download.content.data)[':job_identifier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDownloadContentDataJobIdentifierQueryKey>
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
      ...getDownloadContentDataJobIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getJobsStatusJobIdQueryKey(
  args: InferRequestType<(typeof client.jobs.status)[':job_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs/status/:job_id', keyArgs] as const
}

export function getJobsStatusJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs.status)[':job_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs.status)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs.status)[':job_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsStatusJobIdQueryKey>
  >({
    queryKey: getJobsStatusJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs.status[':job_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useJobsStatusJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs.status)[':job_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs.status)[':job_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.jobs.status)[':job_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsStatusJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJobsStatusJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJobsStatusJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs.status)[':job_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs.status)[':job_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.jobs.status)[':job_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsStatusJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJobsStatusJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMessagesMutationKey() {
  return ['messages', '/messages', 'POST'] as const
}

export function getPostMessagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$post>>>>>,
    TError,
    InferRequestType<typeof client.messages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.$post>) {
      return parseResponse(client.messages.$post(args, options))
    },
  })
}

export function usePostMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.messages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMessagesWhatsappStatusQueryKey(
  args: InferRequestType<typeof client.messages.whatsapp.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['messages', '/messages/whatsapp/status', keyArgs] as const
}

export function getMessagesWhatsappStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.messages.whatsapp.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messages.whatsapp.status.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messages.whatsapp.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesWhatsappStatusQueryKey>
  >({
    queryKey: getMessagesWhatsappStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messages.whatsapp.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMessagesWhatsappStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.messages.whatsapp.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messages.whatsapp.status.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messages.whatsapp.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagesWhatsappStatusQueryKey>
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
      ...getMessagesWhatsappStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagesWhatsappStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.messages.whatsapp.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messages.whatsapp.status.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messages.whatsapp.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagesWhatsappStatusQueryKey>
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
      ...getMessagesWhatsappStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMessagesStatusQueryKey(
  args: InferRequestType<typeof client.messages.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['messages', '/messages/status', keyArgs] as const
}

export function getMessagesStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.status.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.messages.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesStatusQueryKey>
  >({
    queryKey: getMessagesStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messages.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMessagesStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messages.status.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMessagesStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMessagesStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMessagesStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messages.status.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMessagesStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMessagesStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNewsNewsItemsQueryKey(
  args: InferRequestType<typeof client.news.news_items.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['news', '/news/news_items', keyArgs] as const
}

export function getNewsNewsItemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.news_items.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.news.news_items.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.news_items.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNewsNewsItemsQueryKey>
  >({
    queryKey: getNewsNewsItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.news.news_items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNewsNewsItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.news_items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.news.news_items.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.news_items.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNewsNewsItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNewsNewsItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNewsNewsItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.news_items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.news.news_items.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.news_items.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNewsNewsItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNewsNewsItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNewsNewsItemsMutationKey() {
  return ['news', '/news/news_items', 'POST'] as const
}

export function getPostNewsNewsItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.news_items.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.news.news_items.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNewsNewsItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.news.news_items.$post>) {
      return parseResponse(client.news.news_items.$post(args, options))
    },
  })
}

export function usePostNewsNewsItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.news_items.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.news.news_items.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNewsNewsItemsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNewsNewsItemsNewsItemIdQueryKey(
  args: InferRequestType<(typeof client.news.news_items)[':news_item_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['news', '/news/news_items/:news_item_id', keyArgs] as const
}

export function getNewsNewsItemsNewsItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.news.news_items)[':news_item_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.news.news_items)[':news_item_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.news.news_items)[':news_item_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNewsNewsItemsNewsItemIdQueryKey>
  >({
    queryKey: getNewsNewsItemsNewsItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.news.news_items[':news_item_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNewsNewsItemsNewsItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.news.news_items)[':news_item_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.news.news_items)[':news_item_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.news.news_items)[':news_item_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNewsNewsItemsNewsItemIdQueryKey>
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
      ...getNewsNewsItemsNewsItemIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNewsNewsItemsNewsItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.news.news_items)[':news_item_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.news.news_items)[':news_item_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.news.news_items)[':news_item_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNewsNewsItemsNewsItemIdQueryKey>
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
      ...getNewsNewsItemsNewsItemIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutNewsNewsItemsNewsItemIdMutationKey() {
  return ['news', '/news/news_items/:news_item_id', 'PUT'] as const
}

export function getPutNewsNewsItemsNewsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.news.news_items)[':news_item_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.news.news_items)[':news_item_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNewsNewsItemsNewsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.news.news_items)[':news_item_id']['$put']>,
    ) {
      return parseResponse(client.news.news_items[':news_item_id'].$put(args, options))
    },
  })
}

export function usePutNewsNewsItemsNewsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.news.news_items)[':news_item_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.news.news_items)[':news_item_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNewsNewsItemsNewsItemIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteNewsNewsItemsNewsItemIdMutationKey() {
  return ['news', '/news/news_items/:news_item_id', 'DELETE'] as const
}

export function getDeleteNewsNewsItemsNewsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.news.news_items)[':news_item_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.news.news_items)[':news_item_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNewsNewsItemsNewsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.news.news_items)[':news_item_id']['$delete']>,
    ) {
      return parseResponse(client.news.news_items[':news_item_id'].$delete(args, options))
    },
  })
}

export function useDeleteNewsNewsItemsNewsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.news.news_items)[':news_item_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.news.news_items)[':news_item_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNewsNewsItemsNewsItemIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNewsNewsfeedsNewsfeedIdItemsQueryKey(
  args: InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['news', '/news/newsfeeds/:newsfeed_id/items', keyArgs] as const
}

export function getNewsNewsfeedsNewsfeedIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNewsNewsfeedsNewsfeedIdItemsQueryKey>
  >({
    queryKey: getNewsNewsfeedsNewsfeedIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.news.newsfeeds[':newsfeed_id'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNewsNewsfeedsNewsfeedIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNewsNewsfeedsNewsfeedIdItemsQueryKey>
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
      ...getNewsNewsfeedsNewsfeedIdItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNewsNewsfeedsNewsfeedIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNewsNewsfeedsNewsfeedIdItemsQueryKey>
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
      ...getNewsNewsfeedsNewsfeedIdItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getNewsNewsfeedsQueryKey(
  args: InferRequestType<typeof client.news.newsfeeds.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['news', '/news/newsfeeds', keyArgs] as const
}

export function getNewsNewsfeedsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.newsfeeds.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.news.newsfeeds.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.newsfeeds.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNewsNewsfeedsQueryKey>
  >({
    queryKey: getNewsNewsfeedsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.news.newsfeeds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNewsNewsfeeds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.newsfeeds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.news.newsfeeds.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.newsfeeds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNewsNewsfeedsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNewsNewsfeedsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNewsNewsfeeds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.newsfeeds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.news.newsfeeds.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.newsfeeds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNewsNewsfeedsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNewsNewsfeedsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNewsNewsfeedsNewsfeedIdQueryKey(
  args: InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['news', '/news/newsfeeds/:newsfeed_id', keyArgs] as const
}

export function getNewsNewsfeedsNewsfeedIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNewsNewsfeedsNewsfeedIdQueryKey>
  >({
    queryKey: getNewsNewsfeedsNewsfeedIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.news.newsfeeds[':newsfeed_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNewsNewsfeedsNewsfeedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNewsNewsfeedsNewsfeedIdQueryKey>
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
      ...getNewsNewsfeedsNewsfeedIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNewsNewsfeedsNewsfeedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNewsNewsfeedsNewsfeedIdQueryKey>
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
      ...getNewsNewsfeedsNewsfeedIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getNotesNoteIdQueryKey(
  args: InferRequestType<(typeof client.notes)[':note_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notes', '/notes/:note_id', keyArgs] as const
}

export function getNotesNoteIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':note_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notes)[':note_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':note_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotesNoteIdQueryKey>
  >({
    queryKey: getNotesNoteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notes[':note_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNotesNoteId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':note_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notes)[':note_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':note_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotesNoteIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotesNoteIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotesNoteId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':note_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notes)[':note_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':note_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotesNoteIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotesNoteIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteNotesNoteIdMutationKey() {
  return ['notes', '/notes/:note_id', 'DELETE'] as const
}

export function getDeleteNotesNoteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':note_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.notes)[':note_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotesNoteIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.notes)[':note_id']['$delete']>) {
      return parseResponse(client.notes[':note_id'].$delete(args, options))
    },
  })
}

export function useDeleteNotesNoteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':note_id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.notes)[':note_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNotesNoteIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSegmentsQueryKey(args: InferRequestType<typeof client.segments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['segments', '/segments', keyArgs] as const
}

export function getSegmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.segments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSegmentsQueryKey>
  >({
    queryKey: getSegmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.segments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.segments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSegmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSegmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.segments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSegmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSegmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSegmentsSegmentIdQueryKey(
  args: InferRequestType<(typeof client.segments)[':segment_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['segments', '/segments/:segment_id', keyArgs] as const
}

export function getSegmentsSegmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':segment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.segments)[':segment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':segment_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSegmentsSegmentIdQueryKey>
  >({
    queryKey: getSegmentsSegmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.segments[':segment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSegmentsSegmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':segment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.segments)[':segment_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.segments)[':segment_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSegmentsSegmentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSegmentsSegmentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSegmentsSegmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':segment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.segments)[':segment_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.segments)[':segment_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSegmentsSegmentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSegmentsSegmentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSubscriptionTypesQueryKey(
  args: InferRequestType<typeof client.subscription_types.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscription_types', '/subscription_types', keyArgs] as const
}

export function getSubscriptionTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription_types.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.subscription_types.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription_types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionTypesQueryKey>
  >({
    queryKey: getSubscriptionTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscription_types.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSubscriptionTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscription_types.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subscription_types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSubscriptionTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSubscriptionTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscription_types.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subscription_types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSubscriptionTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSubscriptionTypesIdQueryKey(
  args: InferRequestType<(typeof client.subscription_types)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscription_types', '/subscription_types/:id', keyArgs] as const
}

export function getSubscriptionTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.subscription_types)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscription_types)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.subscription_types)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionTypesIdQueryKey>
  >({
    queryKey: getSubscriptionTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscription_types[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.subscription_types)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscription_types)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscription_types)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSubscriptionTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSubscriptionTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.subscription_types)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscription_types)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscription_types)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSubscriptionTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPhoneCallRedirectsMutationKey() {
  return ['phone_call_redirects', '/phone_call_redirects', 'POST'] as const
}

export function getPostPhoneCallRedirectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone_call_redirects.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.phone_call_redirects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneCallRedirectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.phone_call_redirects.$post>) {
      return parseResponse(client.phone_call_redirects.$post(args, options))
    },
  })
}

export function usePostPhoneCallRedirects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.phone_call_redirects.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.phone_call_redirects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneCallRedirectsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCallsQueryKey(args: InferRequestType<typeof client.calls.$get>) {
  const { header: _, ...keyArgs } = args
  return ['calls', '/calls', keyArgs] as const
}

export function getCallsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.calls.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCallsQueryKey>
  >({
    queryKey: getCallsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calls.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCalls<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.calls.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCallsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCallsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCalls<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.calls.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCallsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCallsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCallsCallIdQueryKey(
  args: InferRequestType<(typeof client.calls)[':call_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calls', '/calls/:call_id', keyArgs] as const
}

export function getCallsCallIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calls)[':call_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallsCallIdQueryKey>
  >({
    queryKey: getCallsCallIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calls[':call_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCallsCallId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calls)[':call_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCallsCallIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCallsCallIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCallsCallId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calls)[':call_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCallsCallIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCallsCallIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCallsCallIdRecordingQueryKey(
  args: InferRequestType<(typeof client.calls)[':call_id']['recording']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calls', '/calls/:call_id/recording', keyArgs] as const
}

export function getCallsCallIdRecordingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calls)[':call_id']['recording']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calls)[':call_id']['recording']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calls)[':call_id']['recording']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallsCallIdRecordingQueryKey>
  >({
    queryKey: getCallsCallIdRecordingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calls[':call_id'].recording.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCallsCallIdRecording<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calls)[':call_id']['recording']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calls)[':call_id']['recording']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.calls)[':call_id']['recording']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCallsCallIdRecordingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCallsCallIdRecordingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCallsCallIdRecording<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calls)[':call_id']['recording']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calls)[':call_id']['recording']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.calls)[':call_id']['recording']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCallsCallIdRecordingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCallsCallIdRecordingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCallsIdTranscriptQueryKey(
  args: InferRequestType<(typeof client.calls)[':id']['transcript']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calls', '/calls/:id/transcript', keyArgs] as const
}

export function getCallsIdTranscriptQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':id']['transcript']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calls)[':id']['transcript']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calls)[':id']['transcript']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallsIdTranscriptQueryKey>
  >({
    queryKey: getCallsIdTranscriptQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calls[':id'].transcript.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCallsIdTranscript<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':id']['transcript']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calls)[':id']['transcript']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.calls)[':id']['transcript']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCallsIdTranscriptQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCallsIdTranscriptQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCallsIdTranscript<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':id']['transcript']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calls)[':id']['transcript']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.calls)[':id']['transcript']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCallsIdTranscriptQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCallsIdTranscriptQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCallsSearchMutationKey() {
  return ['calls', '/calls/search', 'POST'] as const
}

export function getPostCallsSearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.calls.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.calls.search.$post>) {
      return parseResponse(client.calls.search.$post(args, options))
    },
  })
}

export function usePostCallsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.calls.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCallsSearchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTagsQueryKey(args: InferRequestType<typeof client.tags.$get>) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags', keyArgs] as const
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

export function getTagsTagIdQueryKey(
  args: InferRequestType<(typeof client.tags)[':tag_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:tag_id', keyArgs] as const
}

export function getTagsTagIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.tags)[':tag_id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagIdQueryKey>
  >({
    queryKey: getTagsTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tag_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsTagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tag_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsTagIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsTagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tag_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsTagIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteTagsTagIdMutationKey() {
  return ['tags', '/tags/:tag_id', 'DELETE'] as const
}

export function getDeleteTagsTagIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':tag_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsTagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':tag_id']['$delete']>) {
      return parseResponse(client.tags[':tag_id'].$delete(args, options))
    },
  })
}

export function useDeleteTagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':tag_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsTagIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTeamsQueryKey(args: InferRequestType<typeof client.teams.$get>) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams', keyArgs] as const
}

export function getTeamsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.teams.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamsQueryKey>
  >({
    queryKey: getTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTeams<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.teams.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeams<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.teams.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamsTeamIdQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:team_id', keyArgs] as const
}

export function getTeamsTeamIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdQueryKey>
  >({
    queryKey: getTeamsTeamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTeamsTeamId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsTeamIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsTeamId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsTeamIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamsTeamIdMetricsQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_id']['metrics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:team_id/metrics', keyArgs] as const
}

export function getTeamsTeamIdMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_id']['metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdMetricsQueryKey>
  >({
    queryKey: getTeamsTeamIdMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_id'].metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamsTeamIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['metrics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_id']['metrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsTeamIdMetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsTeamIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['metrics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_id']['metrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsTeamIdMetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTicketStatesQueryKey(args: InferRequestType<typeof client.ticket_states.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ticket_states', '/ticket_states', keyArgs] as const
}

export function getTicketStatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_states.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ticket_states.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_states.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTicketStatesQueryKey>
  >({
    queryKey: getTicketStatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ticket_states.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTicketStates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_states.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ticket_states.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_states.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTicketStatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTicketStatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTicketStates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_states.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ticket_states.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_states.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTicketStatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTicketStatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTicketTypesTicketTypeIdAttributesMutationKey() {
  return ['ticket_types', '/ticket_types/:ticket_type_id/attributes', 'POST'] as const
}

export function getPostTicketTypesTicketTypeIdAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ticket_types)[':ticket_type_id']['attributes']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['attributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTicketTypesTicketTypeIdAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ticket_types)[':ticket_type_id']['attributes']['$post']
      >,
    ) {
      return parseResponse(client.ticket_types[':ticket_type_id'].attributes.$post(args, options))
    },
  })
}

export function usePostTicketTypesTicketTypeIdAttributes<
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
                ReturnType<(typeof client.ticket_types)[':ticket_type_id']['attributes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['attributes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTicketTypesTicketTypeIdAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutTicketTypesTicketTypeIdAttributesAttributeIdMutationKey() {
  return ['ticket_types', '/ticket_types/:ticket_type_id/attributes/:attribute_id', 'PUT'] as const
}

export function getPutTicketTypesTicketTypeIdAttributesAttributeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ticket_types)[':ticket_type_id']['attributes'][':attribute_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ticket_types)[':ticket_type_id']['attributes'][':attribute_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutTicketTypesTicketTypeIdAttributesAttributeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ticket_types)[':ticket_type_id']['attributes'][':attribute_id']['$put']
      >,
    ) {
      return parseResponse(
        client.ticket_types[':ticket_type_id'].attributes[':attribute_id'].$put(args, options),
      )
    },
  })
}

export function usePutTicketTypesTicketTypeIdAttributesAttributeId<
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
                  (typeof client.ticket_types)[':ticket_type_id']['attributes'][':attribute_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ticket_types)[':ticket_type_id']['attributes'][':attribute_id']['$put']
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
  const mutationDefaults = getPutTicketTypesTicketTypeIdAttributesAttributeIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTicketTypesQueryKey(args: InferRequestType<typeof client.ticket_types.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ticket_types', '/ticket_types', keyArgs] as const
}

export function getTicketTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_types.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ticket_types.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTicketTypesQueryKey>
  >({
    queryKey: getTicketTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ticket_types.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTicketTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ticket_types.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTicketTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTicketTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTicketTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ticket_types.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTicketTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTicketTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTicketTypesMutationKey() {
  return ['ticket_types', '/ticket_types', 'POST'] as const
}

export function getPostTicketTypesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_types.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ticket_types.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTicketTypesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ticket_types.$post>) {
      return parseResponse(client.ticket_types.$post(args, options))
    },
  })
}

export function usePostTicketTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_types.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ticket_types.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTicketTypesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTicketTypesTicketTypeIdQueryKey(
  args: InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ticket_types', '/ticket_types/:ticket_type_id', keyArgs] as const
}

export function getTicketTypesTicketTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ticket_types)[':ticket_type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ticket_types)[':ticket_type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTicketTypesTicketTypeIdQueryKey>
  >({
    queryKey: getTicketTypesTicketTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ticket_types[':ticket_type_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTicketTypesTicketTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ticket_types)[':ticket_type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ticket_types)[':ticket_type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTicketTypesTicketTypeIdQueryKey>
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
      ...getTicketTypesTicketTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTicketTypesTicketTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ticket_types)[':ticket_type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ticket_types)[':ticket_type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTicketTypesTicketTypeIdQueryKey>
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
      ...getTicketTypesTicketTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTicketTypesTicketTypeIdMutationKey() {
  return ['ticket_types', '/ticket_types/:ticket_type_id', 'PUT'] as const
}

export function getPutTicketTypesTicketTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ticket_types)[':ticket_type_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTicketTypesTicketTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['$put']>,
    ) {
      return parseResponse(client.ticket_types[':ticket_type_id'].$put(args, options))
    },
  })
}

export function usePutTicketTypesTicketTypeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ticket_types)[':ticket_type_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTicketTypesTicketTypeIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTicketsTicketIdReplyMutationKey() {
  return ['tickets', '/tickets/:ticket_id/reply', 'POST'] as const
}

export function getPostTicketsTicketIdReplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['reply']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tickets)[':ticket_id']['reply']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTicketsTicketIdReplyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tickets)[':ticket_id']['reply']['$post']>,
    ) {
      return parseResponse(client.tickets[':ticket_id'].reply.$post(args, options))
    },
  })
}

export function usePostTicketsTicketIdReply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['reply']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tickets)[':ticket_id']['reply']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTicketsTicketIdReplyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTicketsTicketIdTagsMutationKey() {
  return ['tickets', '/tickets/:ticket_id/tags', 'POST'] as const
}

export function getPostTicketsTicketIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tickets)[':ticket_id']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTicketsTicketIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tickets)[':ticket_id']['tags']['$post']>,
    ) {
      return parseResponse(client.tickets[':ticket_id'].tags.$post(args, options))
    },
  })
}

export function usePostTicketsTicketIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['tags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tickets)[':ticket_id']['tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTicketsTicketIdTagsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTicketsTicketIdTagsTagIdMutationKey() {
  return ['tickets', '/tickets/:ticket_id/tags/:tag_id', 'DELETE'] as const
}

export function getDeleteTicketsTicketIdTagsTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['tags'][':tag_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tickets)[':ticket_id']['tags'][':tag_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTicketsTicketIdTagsTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tickets)[':ticket_id']['tags'][':tag_id']['$delete']>,
    ) {
      return parseResponse(client.tickets[':ticket_id'].tags[':tag_id'].$delete(args, options))
    },
  })
}

export function useDeleteTicketsTicketIdTagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tickets)[':ticket_id']['tags'][':tag_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tickets)[':ticket_id']['tags'][':tag_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTicketsTicketIdTagsTagIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTicketsTicketIdLinkedConversationsMutationKey() {
  return ['tickets', '/tickets/:ticket_id/linked_conversations', 'POST'] as const
}

export function getPostTicketsTicketIdLinkedConversationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tickets)[':ticket_id']['linked_conversations']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tickets)[':ticket_id']['linked_conversations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTicketsTicketIdLinkedConversationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tickets)[':ticket_id']['linked_conversations']['$post']
      >,
    ) {
      return parseResponse(client.tickets[':ticket_id'].linked_conversations.$post(args, options))
    },
  })
}

export function usePostTicketsTicketIdLinkedConversations<
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
                ReturnType<(typeof client.tickets)[':ticket_id']['linked_conversations']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tickets)[':ticket_id']['linked_conversations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTicketsTicketIdLinkedConversationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTicketsTicketIdLinkedConversationsIdMutationKey() {
  return ['tickets', '/tickets/:ticket_id/linked_conversations/:id', 'DELETE'] as const
}

export function getDeleteTicketsTicketIdLinkedConversationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tickets)[':ticket_id']['linked_conversations'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.tickets)[':ticket_id']['linked_conversations'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTicketsTicketIdLinkedConversationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tickets)[':ticket_id']['linked_conversations'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.tickets[':ticket_id'].linked_conversations[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteTicketsTicketIdLinkedConversationsId<
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
                  (typeof client.tickets)[':ticket_id']['linked_conversations'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.tickets)[':ticket_id']['linked_conversations'][':id']['$delete']
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
  const mutationDefaults = getDeleteTicketsTicketIdLinkedConversationsIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTicketsMutationKey() {
  return ['tickets', '/tickets', 'POST'] as const
}

export function getPostTicketsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tickets.$post>>>>>,
    TError,
    InferRequestType<typeof client.tickets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTicketsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tickets.$post>) {
      return parseResponse(client.tickets.$post(args, options))
    },
  })
}

export function usePostTickets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tickets.$post>>>>>,
        TError,
        InferRequestType<typeof client.tickets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTicketsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTicketsEnqueueMutationKey() {
  return ['tickets', '/tickets/enqueue', 'POST'] as const
}

export function getPostTicketsEnqueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tickets.enqueue.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tickets.enqueue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTicketsEnqueueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tickets.enqueue.$post>) {
      return parseResponse(client.tickets.enqueue.$post(args, options))
    },
  })
}

export function usePostTicketsEnqueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tickets.enqueue.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tickets.enqueue.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTicketsEnqueueMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTicketsTicketIdQueryKey(
  args: InferRequestType<(typeof client.tickets)[':ticket_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tickets', '/tickets/:ticket_id', keyArgs] as const
}

export function getTicketsTicketIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tickets)[':ticket_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTicketsTicketIdQueryKey>
  >({
    queryKey: getTicketsTicketIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tickets[':ticket_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTicketsTicketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tickets)[':ticket_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTicketsTicketIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTicketsTicketIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTicketsTicketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tickets)[':ticket_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTicketsTicketIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTicketsTicketIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTicketsTicketIdMutationKey() {
  return ['tickets', '/tickets/:ticket_id', 'PUT'] as const
}

export function getPutTicketsTicketIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tickets)[':ticket_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTicketsTicketIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tickets)[':ticket_id']['$put']>) {
      return parseResponse(client.tickets[':ticket_id'].$put(args, options))
    },
  })
}

export function usePutTicketsTicketId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tickets)[':ticket_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTicketsTicketIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTicketsTicketIdMutationKey() {
  return ['tickets', '/tickets/:ticket_id', 'DELETE'] as const
}

export function getDeleteTicketsTicketIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tickets)[':ticket_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTicketsTicketIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tickets)[':ticket_id']['$delete']>) {
      return parseResponse(client.tickets[':ticket_id'].$delete(args, options))
    },
  })
}

export function useDeleteTicketsTicketId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tickets)[':ticket_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTicketsTicketIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTicketsTicketIdChangeTypeMutationKey() {
  return ['tickets', '/tickets/:ticket_id/change_type', 'POST'] as const
}

export function getPostTicketsTicketIdChangeTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['change_type']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tickets)[':ticket_id']['change_type']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTicketsTicketIdChangeTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tickets)[':ticket_id']['change_type']['$post']>,
    ) {
      return parseResponse(client.tickets[':ticket_id'].change_type.$post(args, options))
    },
  })
}

export function usePostTicketsTicketIdChangeType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['change_type']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tickets)[':ticket_id']['change_type']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTicketsTicketIdChangeTypeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTicketsSearchMutationKey() {
  return ['tickets', '/tickets/search', 'POST'] as const
}

export function getPostTicketsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tickets.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tickets.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTicketsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tickets.search.$post>) {
      return parseResponse(client.tickets.search.$post(args, options))
    },
  })
}

export function usePostTicketsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tickets.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tickets.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTicketsSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVisitorsQueryKey(args: InferRequestType<typeof client.visitors.$get>) {
  const { header: _, ...keyArgs } = args
  return ['visitors', '/visitors', keyArgs] as const
}

export function getVisitorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.visitors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVisitorsQueryKey>
  >({
    queryKey: getVisitorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.visitors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVisitors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.visitors.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVisitorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVisitorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVisitors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.visitors.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVisitorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVisitorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutVisitorsMutationKey() {
  return ['visitors', '/visitors', 'PUT'] as const
}

export function getPutVisitorsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.$put>>>>>,
    TError,
    InferRequestType<typeof client.visitors.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutVisitorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.visitors.$put>) {
      return parseResponse(client.visitors.$put(args, options))
    },
  })
}

export function usePutVisitors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.$put>>>>>,
        TError,
        InferRequestType<typeof client.visitors.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVisitorsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostVisitorsConvertMutationKey() {
  return ['visitors', '/visitors/convert', 'POST'] as const
}

export function getPostVisitorsConvertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.convert.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.visitors.convert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVisitorsConvertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.visitors.convert.$post>) {
      return parseResponse(client.visitors.convert.$post(args, options))
    },
  })
}

export function usePostVisitorsConvert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.visitors.convert.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.visitors.convert.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVisitorsConvertMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBrandsQueryKey(args: InferRequestType<typeof client.brands.$get>) {
  const { header: _, ...keyArgs } = args
  return ['brands', '/brands', keyArgs] as const
}

export function getBrandsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brands.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.brands.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brands.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBrandsQueryKey>
  >({
    queryKey: getBrandsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.brands.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBrands<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brands.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.brands.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brands.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBrandsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBrandsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBrands<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brands.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.brands.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brands.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBrandsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBrandsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBrandsIdQueryKey(args: InferRequestType<(typeof client.brands)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['brands', '/brands/:id', keyArgs] as const
}

export function getBrandsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.brands)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.brands)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.brands)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBrandsIdQueryKey>
  >({
    queryKey: getBrandsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.brands[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBrandsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.brands)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.brands)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.brands)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBrandsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBrandsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBrandsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.brands)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.brands)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.brands)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBrandsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBrandsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEmailsQueryKey(args: InferRequestType<typeof client.emails.$get>) {
  const { header: _, ...keyArgs } = args
  return ['emails', '/emails', keyArgs] as const
}

export function getEmailsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.emails.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEmailsQueryKey>
  >({
    queryKey: getEmailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emails.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEmails<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.emails.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEmailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmails<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.emails.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEmailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEmailsIdQueryKey(args: InferRequestType<(typeof client.emails)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['emails', '/emails/:id', keyArgs] as const
}

export function getEmailsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.emails)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsIdQueryKey>
  >({
    queryKey: getEmailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emails[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEmailsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emails)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmailsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emails)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFinVoiceRegisterMutationKey() {
  return ['fin_voice', '/fin_voice/register', 'POST'] as const
}

export function getPostFinVoiceRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin_voice.register.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.fin_voice.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFinVoiceRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fin_voice.register.$post>) {
      return parseResponse(client.fin_voice.register.$post(args, options))
    },
  })
}

export function usePostFinVoiceRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fin_voice.register.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.fin_voice.register.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFinVoiceRegisterMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFinVoiceCollectIdQueryKey(
  args: InferRequestType<(typeof client.fin_voice.collect)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fin_voice', '/fin_voice/collect/:id', keyArgs] as const
}

export function getFinVoiceCollectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fin_voice.collect)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fin_voice.collect)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fin_voice.collect)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinVoiceCollectIdQueryKey>
  >({
    queryKey: getFinVoiceCollectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fin_voice.collect[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFinVoiceCollectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fin_voice.collect)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fin_voice.collect)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fin_voice.collect)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFinVoiceCollectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFinVoiceCollectIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFinVoiceCollectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fin_voice.collect)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fin_voice.collect)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fin_voice.collect)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFinVoiceCollectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFinVoiceCollectIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFinVoiceExternalIdExternalIdQueryKey(
  args: InferRequestType<(typeof client.fin_voice.external_id)[':external_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fin_voice', '/fin_voice/external_id/:external_id', keyArgs] as const
}

export function getFinVoiceExternalIdExternalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fin_voice.external_id)[':external_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fin_voice.external_id)[':external_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fin_voice.external_id)[':external_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinVoiceExternalIdExternalIdQueryKey>
  >({
    queryKey: getFinVoiceExternalIdExternalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fin_voice.external_id[':external_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFinVoiceExternalIdExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fin_voice.external_id)[':external_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fin_voice.external_id)[':external_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fin_voice.external_id)[':external_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFinVoiceExternalIdExternalIdQueryKey>
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
      ...getFinVoiceExternalIdExternalIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFinVoiceExternalIdExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fin_voice.external_id)[':external_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fin_voice.external_id)[':external_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fin_voice.external_id)[':external_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFinVoiceExternalIdExternalIdQueryKey>
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
      ...getFinVoiceExternalIdExternalIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFinVoicePhoneNumberPhoneNumberQueryKey(
  args: InferRequestType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fin_voice', '/fin_voice/phone_number/:phone_number', keyArgs] as const
}

export function getFinVoicePhoneNumberPhoneNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinVoicePhoneNumberPhoneNumberQueryKey>
  >({
    queryKey: getFinVoicePhoneNumberPhoneNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fin_voice.phone_number[':phone_number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFinVoicePhoneNumberPhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFinVoicePhoneNumberPhoneNumberQueryKey>
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
      ...getFinVoicePhoneNumberPhoneNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFinVoicePhoneNumberPhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFinVoicePhoneNumberPhoneNumberQueryKey>
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
      ...getFinVoicePhoneNumberPhoneNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFinVoiceConversationConversationIdQueryKey(
  args: InferRequestType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fin_voice', '/fin_voice/conversation/:conversation_id', keyArgs] as const
}

export function getFinVoiceConversationConversationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinVoiceConversationConversationIdQueryKey>
  >({
    queryKey: getFinVoiceConversationConversationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fin_voice.conversation[':conversation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFinVoiceConversationConversationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFinVoiceConversationConversationIdQueryKey>
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
      ...getFinVoiceConversationConversationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFinVoiceConversationConversationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFinVoiceConversationConversationIdQueryKey>
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
      ...getFinVoiceConversationConversationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getExportWorkflowsIdQueryKey(
  args: InferRequestType<(typeof client.export.workflows)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['export', '/export/workflows/:id', keyArgs] as const
}

export function getExportWorkflowsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.workflows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.workflows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.export.workflows)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportWorkflowsIdQueryKey>
  >({
    queryKey: getExportWorkflowsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.workflows[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExportWorkflowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.workflows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.workflows)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.export.workflows)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportWorkflowsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getExportWorkflowsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseExportWorkflowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.workflows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.workflows)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.export.workflows)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportWorkflowsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getExportWorkflowsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
