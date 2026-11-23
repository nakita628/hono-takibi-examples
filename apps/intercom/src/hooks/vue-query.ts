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

export function getMeQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.me.$get>>) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['me', '/me', keyArgs] as const
}

export function getMeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          ReturnType<typeof getMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMacrosIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.macros)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['macros', '/macros/:id', keyArgs] as const
}

export function getMacrosIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.macros)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMacrosIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.macros[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMacrosId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macros)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.macros)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.macros)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.macros)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getMacrosIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macros)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMacrosIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMacrosIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.macros[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMacrosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.macros.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['macros', '/macros', keyArgs] as const
}

export function getMacrosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.macros.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMacrosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.macros.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMacros<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macros.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.macros.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macros.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macros.$get>>>>>,
          ReturnType<typeof getMacrosQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macros.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMacrosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMacrosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.macros.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.admins.activity_logs.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['admins', '/admins/activity_logs', keyArgs] as const
}

export function getAdminsActivityLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admins.activity_logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminsActivityLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admins.activity_logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminsActivityLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admins.activity_logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_logs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_logs.$get>>>
            >
          >,
          ReturnType<typeof getAdminsActivityLogsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminsActivityLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminsActivityLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admins.activity_logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.admins.activity_log_event_types.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['admins', '/admins/activity_log_event_types', keyArgs] as const
}

export function getAdminsActivityLogEventTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admins.activity_log_event_types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminsActivityLogEventTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admins.activity_log_event_types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminsActivityLogEventTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_log_event_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admins.activity_log_event_types.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admins.activity_log_event_types.$get>>
              >
            >
          >,
          ReturnType<typeof getAdminsActivityLogEventTypesQueryKey>
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
          Awaited<ReturnType<typeof client.admins.activity_log_event_types.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminsActivityLogEventTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminsActivityLogEventTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admins.activity_log_event_types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admins.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['admins', '/admins', keyArgs] as const
}

export function getAdminsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admins.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admins.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdmins<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admins.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.$get>>>>>,
          ReturnType<typeof getAdminsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'office_hours_schedules',
    '/office_hours_schedules/:office_hours_schedule_id/office_hours_exceptions/:id',
    keyArgs,
  ] as const
}

export function getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions[
          ':id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
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
                    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
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
                    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdQueryKey
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
              (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions[
            ':id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'office_hours_schedules',
    '/office_hours_schedules/:office_hours_schedule_id/office_hours_exceptions',
    keyArgs,
  ] as const
}

export function getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
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
                    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
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
                    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsQueryKey
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
              (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.office_hours_schedules)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['office_hours_schedules', '/office_hours_schedules/:id', keyArgs] as const
}

export function getOfficeHoursSchedulesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.office_hours_schedules)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfficeHoursSchedulesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.office_hours_schedules[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.office_hours_schedules)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.office_hours_schedules)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOfficeHoursSchedulesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.office_hours_schedules)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfficeHoursSchedulesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfficeHoursSchedulesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.office_hours_schedules[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.office_hours_schedules.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['office_hours_schedules', '/office_hours_schedules', keyArgs] as const
}

export function getOfficeHoursSchedulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.office_hours_schedules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfficeHoursSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.office_hours_schedules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfficeHoursSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.office_hours_schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.office_hours_schedules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.office_hours_schedules.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.office_hours_schedules.$get>>>
            >
          >,
          ReturnType<typeof getOfficeHoursSchedulesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.office_hours_schedules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfficeHoursSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfficeHoursSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.office_hours_schedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admins)[':admin_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['admins', '/admins/:admin_id', keyArgs] as const
}

export function getAdminsAdminIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admins)[':admin_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminsAdminIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admins[':admin_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminsAdminId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admins)[':admin_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admins)[':admin_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admins)[':admin_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admins)[':admin_id']['$get']>>>
            >
          >,
          ReturnType<typeof getAdminsAdminIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admins)[':admin_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminsAdminIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminsAdminIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admins[':admin_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admins.remove.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admins.remove.$delete>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.ai.content_import_sources.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ai', '/ai/content_import_sources', keyArgs] as const
}

export function getAiContentImportSourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ai.content_import_sources.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAiContentImportSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ai.content_import_sources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAiContentImportSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.ai.content_import_sources.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ai.content_import_sources.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.ai.content_import_sources.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.ai.content_import_sources.$get>>
              >
            >
          >,
          ReturnType<typeof getAiContentImportSourcesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.ai.content_import_sources.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAiContentImportSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAiContentImportSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ai.content_import_sources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.ai.content_import_sources.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.ai.content_import_sources.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ai', '/ai/content_import_sources/:source_id', keyArgs] as const
}

export function getAiContentImportSourcesSourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAiContentImportSourcesSourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ai.content_import_sources[':source_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai.content_import_sources)[':source_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAiContentImportSourcesSourceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ai.content_import_sources)[':source_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAiContentImportSourcesSourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAiContentImportSourcesSourceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ai.content_import_sources[':source_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.ai.external_pages.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ai', '/ai/external_pages', keyArgs] as const
}

export function getAiExternalPagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ai.external_pages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAiExternalPagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ai.external_pages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAiExternalPages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.external_pages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ai.external_pages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ai.external_pages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ai.external_pages.$get>>>
            >
          >,
          ReturnType<typeof getAiExternalPagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.external_pages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAiExternalPagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAiExternalPagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ai.external_pages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai.external_pages)[':page_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ai', '/ai/external_pages/:page_id', keyArgs] as const
}

export function getAiExternalPagesPageIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai.external_pages)[':page_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAiExternalPagesPageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ai.external_pages[':page_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai.external_pages)[':page_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai.external_pages)[':page_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAiExternalPagesPageIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ai.external_pages)[':page_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAiExternalPagesPageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAiExternalPagesPageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ai.external_pages[':page_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ai.external_pages)[':external_page_id']['tags']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ai.external_pages)[':external_page_id']['tags']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getArticlesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.articles.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['articles', '/articles', keyArgs] as const
}

export function getArticlesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.articles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.articles.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useArticles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.articles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>
          >,
          ReturnType<typeof getArticlesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.articles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.articles.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.articles)[':article_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['articles', '/articles/:article_id', keyArgs] as const
}

export function getArticlesArticleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.articles)[':article_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticlesArticleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.articles[':article_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArticlesArticleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.articles)[':article_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArticlesArticleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesArticleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticlesArticleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.articles[':article_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.articles)[':id']['draft']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['articles', '/articles/:id/draft', keyArgs] as const
}

export function getArticlesIdDraftQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.articles)[':id']['draft']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticlesIdDraftQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.articles[':id'].draft.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArticlesIdDraft<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':id']['draft']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.articles)[':id']['draft']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.articles)[':id']['draft']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArticlesIdDraftQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':id']['draft']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesIdDraftQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticlesIdDraftQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.articles[':id'].draft.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.articles)[':article_id']['tags'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.articles)[':article_id']['tags'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['articles', '/articles/:article_id/versions', keyArgs] as const
}

export function getArticlesArticleIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticlesArticleIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.articles[':article_id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArticlesArticleIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesArticleIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticlesArticleIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.articles[':article_id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArticlesArticleIdVersionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['articles', '/articles/:article_id/versions/:id', keyArgs] as const
}

export function getArticlesArticleIdVersionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticlesArticleIdVersionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.articles[':article_id'].versions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getArticlesArticleIdVersionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesArticleIdVersionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticlesArticleIdVersionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.articles[':article_id'].versions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArticlesSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.articles.search.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['articles', '/articles/search', keyArgs] as const
}

export function getArticlesSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.articles.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticlesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.articles.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArticlesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.articles.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.articles.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.articles.search.$get>>>
            >
          >,
          ReturnType<typeof getArticlesSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticlesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.articles.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAwayStatusReasonsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.away_status_reasons.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['away_status_reasons', '/away_status_reasons', keyArgs] as const
}

export function getAwayStatusReasonsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.away_status_reasons.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAwayStatusReasonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.away_status_reasons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAwayStatusReasons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.away_status_reasons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.away_status_reasons.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.away_status_reasons.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.away_status_reasons.$get>>>
            >
          >,
          ReturnType<typeof getAwayStatusReasonsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.away_status_reasons.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAwayStatusReasonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAwayStatusReasonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.away_status_reasons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAudiencesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audiences.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['audiences', '/audiences', keyArgs] as const
}

export function getAudiencesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audiences.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAudiencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audiences.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAudiences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audiences.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
          >,
          ReturnType<typeof getAudiencesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAudiencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAudiencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audiences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.audiences.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audiences)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['audiences', '/audiences/:id', keyArgs] as const
}

export function getAudiencesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audiences)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAudiencesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audiences[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAudiencesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audiences)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAudiencesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudiencesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAudiencesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audiences[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.audiences)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.audiences)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export.reporting_data)[':job_identifier']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['export', '/export/reporting_data/:job_identifier', keyArgs] as const
}

export function getExportReportingDataJobIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export.reporting_data)[':job_identifier']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportReportingDataJobIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.reporting_data[':job_identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export.reporting_data)[':job_identifier']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.export.reporting_data)[':job_identifier']['$get']>
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
                  ReturnType<(typeof client.export.reporting_data)[':job_identifier']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getExportReportingDataJobIdentifierQueryKey>
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
          Awaited<ReturnType<(typeof client.export.reporting_data)[':job_identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportReportingDataJobIdentifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportReportingDataJobIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.reporting_data[':job_identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportReportingDataGetDatasetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.export.reporting_data.get_datasets.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['export', '/export/reporting_data/get_datasets', keyArgs] as const
}

export function getExportReportingDataGetDatasetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.export.reporting_data.get_datasets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportReportingDataGetDatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.reporting_data.get_datasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.export.reporting_data.get_datasets.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.export.reporting_data.get_datasets.$get>>
              >
            >
          >,
          ReturnType<typeof getExportReportingDataGetDatasetsQueryKey>
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
          Awaited<ReturnType<typeof client.export.reporting_data.get_datasets.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportReportingDataGetDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportReportingDataGetDatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.reporting_data.get_datasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDownloadReportingDataJobIdentifierQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.download.reporting_data)[':job_identifier']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['download', '/download/reporting_data/:job_identifier', keyArgs] as const
}

export function getDownloadReportingDataJobIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.download.reporting_data)[':job_identifier']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDownloadReportingDataJobIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.download.reporting_data[':job_identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.download.reporting_data)[':job_identifier']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.download.reporting_data)[':job_identifier']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDownloadReportingDataJobIdentifierQueryKey>
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
          Awaited<ReturnType<(typeof client.download.reporting_data)[':job_identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDownloadReportingDataJobIdentifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDownloadReportingDataJobIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.download.reporting_data[':job_identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.start.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.fin.start.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.reply.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.fin.reply.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.csat.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.fin.csat.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.ask.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.fin.ask.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.escalate.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.fin.escalate.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['help_center', '/help_center/help_centers/:help_center_id/redirects', keyArgs] as const
}

export function getHelpCenterHelpCentersHelpCenterIdRedirectsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHelpCenterHelpCentersHelpCenterIdRedirectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.help_center.help_centers[':help_center_id'].redirects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
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
                    (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
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
                    (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getHelpCenterHelpCentersHelpCenterIdRedirectsQueryKey>
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
              (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHelpCenterHelpCentersHelpCenterIdRedirectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHelpCenterHelpCentersHelpCenterIdRedirectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.help_center.help_centers[':help_center_id'].redirects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'help_center',
    '/help_center/help_centers/:help_center_id/redirects/:id',
    keyArgs,
  ] as const
}

export function getHelpCenterHelpCentersHelpCenterIdRedirectsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHelpCenterHelpCentersHelpCenterIdRedirectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.help_center.help_centers[':help_center_id'].redirects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
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
                    (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
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
                    (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getHelpCenterHelpCentersHelpCenterIdRedirectsIdQueryKey>
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
              (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHelpCenterHelpCentersHelpCenterIdRedirectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHelpCenterHelpCentersHelpCenterIdRedirectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.help_center.help_centers[':help_center_id'].redirects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.help_center.collections.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['help_center', '/help_center/collections', keyArgs] as const
}

export function getHelpCenterCollectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.help_center.collections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHelpCenterCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.help_center.collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHelpCenterCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.help_center.collections.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.help_center.collections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.help_center.collections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.help_center.collections.$get>>>
            >
          >,
          ReturnType<typeof getHelpCenterCollectionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.help_center.collections.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHelpCenterCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHelpCenterCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.help_center.collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.help_center.collections)[':collection_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['help_center', '/help_center/collections/:collection_id', keyArgs] as const
}

export function getHelpCenterCollectionsCollectionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.help_center.collections)[':collection_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHelpCenterCollectionsCollectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.help_center.collections[':collection_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.help_center.collections)[':collection_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.help_center.collections)[':collection_id']['$get']>
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
                  ReturnType<(typeof client.help_center.collections)[':collection_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getHelpCenterCollectionsCollectionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.help_center.collections)[':collection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHelpCenterCollectionsCollectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHelpCenterCollectionsCollectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.help_center.collections[':collection_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.help_center.collections)[':collection_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.help_center.collections)[':collection_id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['help_center', '/help_center/help_centers/:help_center_id', keyArgs] as const
}

export function getHelpCenterHelpCentersHelpCenterIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHelpCenterHelpCentersHelpCenterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.help_center.help_centers[':help_center_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getHelpCenterHelpCentersHelpCenterIdQueryKey>
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
          Awaited<ReturnType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHelpCenterHelpCentersHelpCenterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHelpCenterHelpCentersHelpCenterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.help_center.help_centers[':help_center_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHelpCenterHelpCentersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.help_center.help_centers.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['help_center', '/help_center/help_centers', keyArgs] as const
}

export function getHelpCenterHelpCentersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.help_center.help_centers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHelpCenterHelpCentersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.help_center.help_centers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHelpCenterHelpCenters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.help_center.help_centers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.help_center.help_centers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.help_center.help_centers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.help_center.help_centers.$get>>>
            >
          >,
          ReturnType<typeof getHelpCenterHelpCentersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.help_center.help_centers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHelpCenterHelpCentersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHelpCenterHelpCentersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.help_center.help_centers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInternalArticlesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.internal_articles.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['internal_articles', '/internal_articles', keyArgs] as const
}

export function getInternalArticlesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.internal_articles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInternalArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.internal_articles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInternalArticles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.internal_articles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.$get>>>
            >
          >,
          ReturnType<typeof getInternalArticlesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInternalArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInternalArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.internal_articles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['internal_articles', '/internal_articles/:internal_article_id', keyArgs] as const
}

export function getInternalArticlesInternalArticleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInternalArticlesInternalArticleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.internal_articles[':internal_article_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.internal_articles)[':internal_article_id']['$get']>
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
                  ReturnType<(typeof client.internal_articles)[':internal_article_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getInternalArticlesInternalArticleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.internal_articles)[':internal_article_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInternalArticlesInternalArticleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInternalArticlesInternalArticleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.internal_articles[':internal_article_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.internal_articles)[':internal_article_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.internal_articles.search.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['internal_articles', '/internal_articles/search', keyArgs] as const
}

export function getInternalArticlesSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.internal_articles.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInternalArticlesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.internal_articles.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInternalArticlesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.internal_articles.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.search.$get>>>
            >
          >,
          ReturnType<typeof getInternalArticlesSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInternalArticlesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInternalArticlesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.internal_articles.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.folders.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['folders', '/folders', keyArgs] as const
}

export function getFoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.folders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.folders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>
          >,
          ReturnType<typeof getFoldersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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

export function getFoldersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.folders)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['folders', '/folders/:id', keyArgs] as const
}

export function getFoldersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.folders)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoldersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoldersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.folders)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getFoldersIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoldersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.folders[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getIpAllowlistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ip_allowlist.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ip_allowlist', '/ip_allowlist', keyArgs] as const
}

export function getIpAllowlistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ip_allowlist.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpAllowlistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ip_allowlist.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIpAllowlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allowlist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ip_allowlist.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allowlist.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allowlist.$get>>>>
          >,
          ReturnType<typeof getIpAllowlistQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allowlist.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpAllowlistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpAllowlistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ip_allowlist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allowlist.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.ip_allowlist.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getCompaniesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.companies.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['companies', '/companies', keyArgs] as const
}

export function getCompaniesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.companies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompanies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.companies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
          >,
          ReturnType<typeof getCompaniesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCompaniesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.companies.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.companies)[':company_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['companies', '/companies/:company_id', keyArgs] as const
}

export function getCompaniesCompanyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.companies)[':company_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':company_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':company_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.companies)[':company_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.companies)[':company_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':company_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':company_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':company_id']['contacts']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['companies', '/companies/:company_id/contacts', keyArgs] as const
}

export function getCompaniesCompanyIdContactsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':company_id']['contacts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':company_id'].contacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':company_id']['contacts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.companies)[':company_id']['contacts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdContactsQueryKey>
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
          Awaited<ReturnType<(typeof client.companies)[':company_id']['contacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':company_id'].contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdSegmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':company_id']['segments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['companies', '/companies/:company_id/segments', keyArgs] as const
}

export function getCompaniesCompanyIdSegmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':company_id']['segments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdSegmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':company_id'].segments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':company_id']['segments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.companies)[':company_id']['segments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdSegmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.companies)[':company_id']['segments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdSegmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdSegmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':company_id'].segments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdNotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':company_id']['notes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['companies', '/companies/:company_id/notes', keyArgs] as const
}

export function getCompaniesCompanyIdNotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':company_id']['notes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':company_id'].notes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':company_id']['notes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.companies)[':company_id']['notes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdNotesQueryKey>
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
          Awaited<ReturnType<(typeof client.companies)[':company_id']['notes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':company_id'].notes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.companies.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.companies.list.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.companies.scroll.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['companies', '/companies/scroll', keyArgs] as const
}

export function getCompaniesScrollQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.companies.scroll.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesScrollQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies.scroll.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesScroll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.scroll.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.companies.scroll.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.companies.scroll.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.companies.scroll.$get>>>
            >
          >,
          ReturnType<typeof getCompaniesScrollQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.scroll.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesScrollQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesScrollQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies.scroll.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactsContactIdCompaniesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':contact_id']['companies']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contacts', '/contacts/:contact_id/companies', keyArgs] as const
}

export function getContactsContactIdCompaniesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':contact_id']['companies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsContactIdCompaniesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts[':contact_id'].companies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':contact_id']['companies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)[':contact_id']['companies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsContactIdCompaniesQueryKey>
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
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['companies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIdCompaniesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsContactIdCompaniesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts[':contact_id'].companies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':contact_id']['notes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contacts', '/contacts/:contact_id/notes', keyArgs] as const
}

export function getContactsContactIdNotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':contact_id']['notes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsContactIdNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts[':contact_id'].notes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':contact_id']['notes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)[':contact_id']['notes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsContactIdNotesQueryKey>
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
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['notes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIdNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsContactIdNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts[':contact_id'].notes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contacts', '/contacts/:contact_id/segments', keyArgs] as const
}

export function getContactsContactIdSegmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsContactIdSegmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts[':contact_id'].segments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsContactIdSegmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIdSegmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsContactIdSegmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts[':contact_id'].segments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactsContactIdSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contacts', '/contacts/:contact_id/subscriptions', keyArgs] as const
}

export function getContactsContactIdSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsContactIdSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts[':contact_id'].subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>
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
                  ReturnType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getContactsContactIdSubscriptionsQueryKey>
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
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIdSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsContactIdSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts[':contact_id'].subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.contacts)[':contact_id']['subscriptions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.contacts)[':contact_id']['subscriptions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':contact_id']['tags']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contacts', '/contacts/:contact_id/tags', keyArgs] as const
}

export function getContactsContactIdTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':contact_id']['tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsContactIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts[':contact_id'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':contact_id']['tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)[':contact_id']['tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsContactIdTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsContactIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts[':contact_id'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.deleted.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contacts', '/contacts/deleted', keyArgs] as const
}

export function getContactsDeletedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.deleted.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsDeletedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.deleted.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsDeleted<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.deleted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.deleted.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contacts.deleted.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contacts.deleted.$get>>>
            >
          >,
          ReturnType<typeof getContactsDeletedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.deleted.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsDeletedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsDeletedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.deleted.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactsContactIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':contact_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contacts', '/contacts/:contact_id', keyArgs] as const
}

export function getContactsContactIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':contact_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsContactIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts[':contact_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':contact_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsContactIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsContactIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts[':contact_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contacts.merge.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.contacts.merge.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contacts.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.contacts.search.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.activities.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contacts', '/contacts/activities', keyArgs] as const
}

export function getContactsActivitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.activities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.activities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contacts.activities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contacts.activities.$get>>>
            >
          >,
          ReturnType<typeof getContactsActivitiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.activities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contacts', '/contacts', keyArgs] as const
}

export function getContactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
          >,
          ReturnType<typeof getContactsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.contacts.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contacts', '/contacts/find_by_external_id/:external_id', keyArgs] as const
}

export function getContactsFindByExternalIdExternalIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsFindByExternalIdExternalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.find_by_external_id[':external_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getContactsFindByExternalIdExternalIdQueryKey>
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
          Awaited<ReturnType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsFindByExternalIdExternalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsFindByExternalIdExternalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.find_by_external_id[':external_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':id']['banners']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contacts', '/contacts/:id/banners', keyArgs] as const
}

export function getContactsIdBannersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':id']['banners']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsIdBannersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts[':id'].banners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsIdBanners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['banners']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':id']['banners']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)[':id']['banners']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsIdBannersQueryKey>
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
          Awaited<ReturnType<(typeof client.contacts)[':id']['banners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsIdBannersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsIdBannersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts[':id'].banners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':id']['merge_histories']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contacts', '/contacts/:id/merge_histories', keyArgs] as const
}

export function getContactsIdMergeHistoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':id']['merge_histories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsIdMergeHistoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts[':id'].merge_histories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':id']['merge_histories']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)[':id']['merge_histories']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsIdMergeHistoriesQueryKey>
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
          Awaited<ReturnType<(typeof client.contacts)[':id']['merge_histories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsIdMergeHistoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsIdMergeHistoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts[':id'].merge_histories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.bulk.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.contacts.bulk.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.bulk.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.contacts.bulk.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts.bulk)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contacts', '/contacts/bulk/:id', keyArgs] as const
}

export function getContactsBulkIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts.bulk)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsBulkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.bulk[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsBulkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.bulk)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts.bulk)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts.bulk)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts.bulk)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsBulkIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.bulk)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsBulkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsBulkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.bulk[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.content.search.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['content', '/content/search', keyArgs] as const
}

export function getContentSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.content.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.content.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.content.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content.search.$get>>>>
          >,
          ReturnType<typeof getContentSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContentSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.content.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContentSnippetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.content_snippets.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['content_snippets', '/content_snippets', keyArgs] as const
}

export function getContentSnippetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.content_snippets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentSnippetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.content_snippets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentSnippets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_snippets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.content_snippets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.content_snippets.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.content_snippets.$get>>>
            >
          >,
          ReturnType<typeof getContentSnippetsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_snippets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContentSnippetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentSnippetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.content_snippets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.content_snippets)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['content_snippets', '/content_snippets/:id', keyArgs] as const
}

export function getContentSnippetsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.content_snippets)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentSnippetsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.content_snippets[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentSnippetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.content_snippets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.content_snippets)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.content_snippets)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContentSnippetsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.content_snippets)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentSnippetsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentSnippetsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.content_snippets[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.content_snippets)[':content_snippet_id']['tags']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.content_snippets)[':content_snippet_id']['tags']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.dynamic_contents.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dynamic_contents', '/dynamic_contents', keyArgs] as const
}

export function getDynamicContentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dynamic_contents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDynamicContentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dynamic_contents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDynamicContents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamic_contents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dynamic_contents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dynamic_contents.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dynamic_contents.$get>>>
            >
          >,
          ReturnType<typeof getDynamicContentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamic_contents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDynamicContentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDynamicContentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dynamic_contents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dynamic_contents)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dynamic_contents', '/dynamic_contents/:id', keyArgs] as const
}

export function getDynamicContentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dynamic_contents)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDynamicContentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dynamic_contents[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDynamicContentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dynamic_contents)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDynamicContentsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDynamicContentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDynamicContentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dynamic_contents[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getConversationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['conversations', '/conversations', keyArgs] as const
}

export function getConversationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
          >,
          ReturnType<typeof getConversationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.conversations.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['conversations', '/conversations/:conversation_id', keyArgs] as const
}

export function getConversationsConversationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConversationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations[':conversation_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsConversationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConversationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations[':conversation_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.conversations)[':conversation_id']['customers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':conversation_id']['customers']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':id']['handling_events']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['conversations', '/conversations/:id/handling_events', keyArgs] as const
}

export function getConversationsIdHandlingEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':id']['handling_events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsIdHandlingEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations[':id'].handling_events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':id']['handling_events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':id']['handling_events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsIdHandlingEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.conversations)[':id']['handling_events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsIdHandlingEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsIdHandlingEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations[':id'].handling_events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsIdHitlEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':id']['hitl_events']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['conversations', '/conversations/:id/hitl_events', keyArgs] as const
}

export function getConversationsIdHitlEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':id']['hitl_events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsIdHitlEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations[':id'].hitl_events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':id']['hitl_events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':id']['hitl_events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsIdHitlEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.conversations)[':id']['hitl_events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsIdHitlEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsIdHitlEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations[':id'].hitl_events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsIdSideConversationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':id']['side_conversations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['conversations', '/conversations/:id/side_conversations', keyArgs] as const
}

export function getConversationsIdSideConversationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':id']['side_conversations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsIdSideConversationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations[':id'].side_conversations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':id']['side_conversations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.conversations)[':id']['side_conversations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getConversationsIdSideConversationsQueryKey>
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
          Awaited<ReturnType<(typeof client.conversations)[':id']['side_conversations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsIdSideConversationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsIdSideConversationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations[':id'].side_conversations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.deleted.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['conversations', '/conversations/deleted', keyArgs] as const
}

export function getConversationsDeletedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.deleted.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsDeletedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.deleted.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsDeleted<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.deleted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.deleted.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.deleted.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.deleted.$get>>>
            >
          >,
          ReturnType<typeof getConversationsDeletedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.deleted.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsDeletedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsDeletedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.deleted.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.attributes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['conversations', '/conversations/attributes', keyArgs] as const
}

export function getConversationsAttributesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.attributes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.attributes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversations.attributes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.attributes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.attributes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.attributes.$get>>>
            >
          >,
          ReturnType<typeof getConversationsAttributesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.attributes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.attributes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.conversations.attributes.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.conversations.attributes.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.conversations.attributes)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['conversations', '/conversations/attributes/:id', keyArgs] as const
}

export function getConversationsAttributesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.conversations.attributes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsAttributesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.attributes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.conversations.attributes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsAttributesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsAttributesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsAttributesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.attributes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'custom_object_instances',
    '/custom_object_instances/:custom_object_type_identifier',
    keyArgs,
  ] as const
}

export function getCustomObjectInstancesCustomObjectTypeIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomObjectInstancesCustomObjectTypeIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.custom_object_instances[':custom_object_type_identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
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
                    (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
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
                    (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomObjectInstancesCustomObjectTypeIdentifierQueryKey>
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
              (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomObjectInstancesCustomObjectTypeIdentifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomObjectInstancesCustomObjectTypeIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.custom_object_instances[':custom_object_type_identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'custom_object_instances',
    '/custom_object_instances/:custom_object_type_identifier/:custom_object_instance_id',
    keyArgs,
  ] as const
}

export function getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.custom_object_instances[':custom_object_type_identifier'][
          ':custom_object_instance_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
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
                    (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
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
                    (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.custom_object_instances[':custom_object_type_identifier'][
            ':custom_object_instance_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.data_attributes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['data_attributes', '/data_attributes', keyArgs] as const
}

export function getDataAttributesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data_attributes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data_attributes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataAttributes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_attributes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data_attributes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.data_attributes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.data_attributes.$get>>>
            >
          >,
          ReturnType<typeof getDataAttributesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_attributes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDataAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data_attributes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.data_attributes.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.data_attributes.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.data_connectors.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['data_connectors', '/data_connectors', keyArgs] as const
}

export function getDataConnectorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data_connectors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataConnectorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data_connectors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataConnectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_connectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data_connectors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.data_connectors.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.data_connectors.$get>>>
            >
          >,
          ReturnType<typeof getDataConnectorsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_connectors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDataConnectorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataConnectorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data_connectors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.data_connectors.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.data_connectors.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.data_connectors)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['data_connectors', '/data_connectors/:id', keyArgs] as const
}

export function getDataConnectorsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.data_connectors)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataConnectorsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data_connectors[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataConnectorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.data_connectors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.data_connectors)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.data_connectors)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataConnectorsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.data_connectors)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataConnectorsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataConnectorsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data_connectors[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'data_connectors',
    '/data_connectors/:data_connector_id/execution_results',
    keyArgs,
  ] as const
}

export function getDataConnectorsDataConnectorIdExecutionResultsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataConnectorsDataConnectorIdExecutionResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data_connectors[':data_connector_id'].execution_results.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
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
                    (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
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
                    (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDataConnectorsDataConnectorIdExecutionResultsQueryKey>
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
              (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataConnectorsDataConnectorIdExecutionResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataConnectorsDataConnectorIdExecutionResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data_connectors[':data_connector_id'].execution_results.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataConnectorsDataConnectorIdExecutionResultsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'data_connectors',
    '/data_connectors/:data_connector_id/execution_results/:id',
    keyArgs,
  ] as const
}

export function getDataConnectorsDataConnectorIdExecutionResultsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataConnectorsDataConnectorIdExecutionResultsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data_connectors[':data_connector_id'].execution_results[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
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
                    (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
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
                    (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDataConnectorsDataConnectorIdExecutionResultsIdQueryKey>
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
              (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataConnectorsDataConnectorIdExecutionResultsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataConnectorsDataConnectorIdExecutionResultsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data_connectors[':data_connector_id'].execution_results[':id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDataConnectorsIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data_connectors)[':id']['versions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['data_connectors', '/data_connectors/:id/versions', keyArgs] as const
}

export function getDataConnectorsIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data_connectors)[':id']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataConnectorsIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data_connectors[':id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data_connectors)[':id']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.data_connectors)[':id']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataConnectorsIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.data_connectors)[':id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataConnectorsIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataConnectorsIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data_connectors[':id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataConnectorsIdVersionsVersionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['data_connectors', '/data_connectors/:id/versions/:version_id', keyArgs] as const
}

export function getDataConnectorsIdVersionsVersionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataConnectorsIdVersionsVersionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data_connectors[':id'].versions[':version_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>
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
                    (typeof client.data_connectors)[':id']['versions'][':version_id']['$get']
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
                    (typeof client.data_connectors)[':id']['versions'][':version_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDataConnectorsIdVersionsVersionIdQueryKey>
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
            ReturnType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataConnectorsIdVersionsVersionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataConnectorsIdVersionsVersionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data_connectors[':id'].versions[':version_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['events', '/events', keyArgs] as const
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.events.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export.content.data)[':job_identifier']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['export', '/export/content/data/:job_identifier', keyArgs] as const
}

export function getExportContentDataJobIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export.content.data)[':job_identifier']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportContentDataJobIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.content.data[':job_identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export.content.data)[':job_identifier']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.content.data)[':job_identifier']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportContentDataJobIdentifierQueryKey>
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
          Awaited<ReturnType<(typeof client.export.content.data)[':job_identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportContentDataJobIdentifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportContentDataJobIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.content.data[':job_identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.download.content.data)[':job_identifier']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['download', '/download/content/data/:job_identifier', keyArgs] as const
}

export function getDownloadContentDataJobIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.download.content.data)[':job_identifier']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDownloadContentDataJobIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.download.content.data[':job_identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.download.content.data)[':job_identifier']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.download.content.data)[':job_identifier']['$get']>
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
                  ReturnType<(typeof client.download.content.data)[':job_identifier']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDownloadContentDataJobIdentifierQueryKey>
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
          Awaited<ReturnType<(typeof client.download.content.data)[':job_identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDownloadContentDataJobIdentifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDownloadContentDataJobIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.download.content.data[':job_identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJobsStatusJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs.status)[':job_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['jobs', '/jobs/status/:job_id', keyArgs] as const
}

export function getJobsStatusJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs.status)[':job_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsStatusJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs.status[':job_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobsStatusJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs.status)[':job_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs.status)[':job_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs.status)[':job_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getJobsStatusJobIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs.status)[':job_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsStatusJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsStatusJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs.status[':job_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.messages.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.messages.whatsapp.status.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['messages', '/messages/whatsapp/status', keyArgs] as const
}

export function getMessagesWhatsappStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messages.whatsapp.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagesWhatsappStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messages.whatsapp.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagesWhatsappStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.messages.whatsapp.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messages.whatsapp.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messages.whatsapp.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messages.whatsapp.status.$get>>>
            >
          >,
          ReturnType<typeof getMessagesWhatsappStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.messages.whatsapp.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesWhatsappStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagesWhatsappStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messages.whatsapp.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMessagesStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messages.status.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['messages', '/messages/status', keyArgs] as const
}

export function getMessagesStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messages.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagesStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messages.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagesStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messages.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messages.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messages.status.$get>>>
            >
          >,
          ReturnType<typeof getMessagesStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagesStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messages.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNewsNewsItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.news.news_items.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['news', '/news/news_items', keyArgs] as const
}

export function getNewsNewsItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.news.news_items.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNewsNewsItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.news.news_items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNewsNewsItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.news_items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.news.news_items.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.news.news_items.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.news.news_items.$get>>>
            >
          >,
          ReturnType<typeof getNewsNewsItemsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.news_items.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNewsNewsItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNewsNewsItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.news.news_items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.news.news_items.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.news.news_items.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.news.news_items)[':news_item_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['news', '/news/news_items/:news_item_id', keyArgs] as const
}

export function getNewsNewsItemsNewsItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.news.news_items)[':news_item_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNewsNewsItemsNewsItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.news.news_items[':news_item_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.news.news_items)[':news_item_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.news.news_items)[':news_item_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNewsNewsItemsNewsItemIdQueryKey>
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
          Awaited<ReturnType<(typeof client.news.news_items)[':news_item_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNewsNewsItemsNewsItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNewsNewsItemsNewsItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.news.news_items[':news_item_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['news', '/news/newsfeeds/:newsfeed_id/items', keyArgs] as const
}

export function getNewsNewsfeedsNewsfeedIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNewsNewsfeedsNewsfeedIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.news.newsfeeds[':newsfeed_id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNewsNewsfeedsNewsfeedIdItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNewsNewsfeedsNewsfeedIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNewsNewsfeedsNewsfeedIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.news.newsfeeds[':newsfeed_id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNewsNewsfeedsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.news.newsfeeds.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['news', '/news/newsfeeds', keyArgs] as const
}

export function getNewsNewsfeedsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.news.newsfeeds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNewsNewsfeedsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.news.newsfeeds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNewsNewsfeeds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.newsfeeds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.news.newsfeeds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.newsfeeds.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.newsfeeds.$get>>>>
          >,
          ReturnType<typeof getNewsNewsfeedsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.newsfeeds.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNewsNewsfeedsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNewsNewsfeedsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.news.newsfeeds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNewsNewsfeedsNewsfeedIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['news', '/news/newsfeeds/:newsfeed_id', keyArgs] as const
}

export function getNewsNewsfeedsNewsfeedIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNewsNewsfeedsNewsfeedIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.news.newsfeeds[':newsfeed_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNewsNewsfeedsNewsfeedIdQueryKey>
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
          Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNewsNewsfeedsNewsfeedIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNewsNewsfeedsNewsfeedIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.news.newsfeeds[':newsfeed_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotesNoteIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notes)[':note_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notes', '/notes/:note_id', keyArgs] as const
}

export function getNotesNoteIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notes)[':note_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotesNoteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notes[':note_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotesNoteId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':note_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notes)[':note_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':note_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':note_id']['$get']>>>
            >
          >,
          ReturnType<typeof getNotesNoteIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':note_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotesNoteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotesNoteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notes[':note_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notes)[':note_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notes)[':note_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getSegmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.segments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['segments', '/segments', keyArgs] as const
}

export function getSegmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.segments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSegmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.segments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.segments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>
          >,
          ReturnType<typeof getSegmentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSegmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSegmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.segments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSegmentsSegmentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.segments)[':segment_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['segments', '/segments/:segment_id', keyArgs] as const
}

export function getSegmentsSegmentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.segments)[':segment_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSegmentsSegmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.segments[':segment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSegmentsSegmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':segment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.segments)[':segment_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.segments)[':segment_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSegmentsSegmentIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':segment_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSegmentsSegmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSegmentsSegmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.segments[':segment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscription_types.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscription_types', '/subscription_types', keyArgs] as const
}

export function getSubscriptionTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscription_types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscription_types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscription_types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscription_types.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscription_types.$get>>>
            >
          >,
          ReturnType<typeof getSubscriptionTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription_types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscription_types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionTypesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.subscription_types)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscription_types', '/subscription_types/:id', keyArgs] as const
}

export function getSubscriptionTypesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.subscription_types)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscription_types[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.subscription_types)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.subscription_types)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscription_types)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionTypesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.subscription_types)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscription_types[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getCallsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.calls.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['calls', '/calls', keyArgs] as const
}

export function getCallsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.calls.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCallsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calls.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCalls<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.calls.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
          ReturnType<typeof getCallsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCallsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCallsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCallsCallIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.calls)[':call_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['calls', '/calls/:call_id', keyArgs] as const
}

export function getCallsCallIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.calls)[':call_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCallsCallIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calls[':call_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCallsCallId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.calls)[':call_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_id']['$get']>>>
            >
          >,
          ReturnType<typeof getCallsCallIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallsCallIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCallsCallIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calls[':call_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCallsCallIdRecordingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.calls)[':call_id']['recording']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['calls', '/calls/:call_id/recording', keyArgs] as const
}

export function getCallsCallIdRecordingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.calls)[':call_id']['recording']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCallsCallIdRecordingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calls[':call_id'].recording.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.calls)[':call_id']['recording']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.calls)[':call_id']['recording']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCallsCallIdRecordingQueryKey>
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
          Awaited<ReturnType<(typeof client.calls)[':call_id']['recording']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallsCallIdRecordingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCallsCallIdRecordingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calls[':call_id'].recording.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCallsIdTranscriptQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.calls)[':id']['transcript']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['calls', '/calls/:id/transcript', keyArgs] as const
}

export function getCallsIdTranscriptQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.calls)[':id']['transcript']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCallsIdTranscriptQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calls[':id'].transcript.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCallsIdTranscript<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':id']['transcript']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.calls)[':id']['transcript']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.calls)[':id']['transcript']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCallsIdTranscriptQueryKey>
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
          Awaited<ReturnType<(typeof client.calls)[':id']['transcript']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallsIdTranscriptQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCallsIdTranscriptQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calls[':id'].transcript.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.calls.search.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getTagsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags', keyArgs] as const
}

export function getTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          ReturnType<typeof getTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
          TError,
          InferRequestType<typeof client.tags.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tag_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:tag_id', keyArgs] as const
}

export function getTagsTagIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tag_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsTagIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':tag_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsTagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tag_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_id']['$get']>>>
            >
          >,
          ReturnType<typeof getTagsTagIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsTagIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':tag_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getTeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['teams', '/teams', keyArgs] as const
}

export function getTeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTeams<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
          ReturnType<typeof getTeamsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['teams', '/teams/:team_id', keyArgs] as const
}

export function getTeamsTeamIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':team_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
            >
          >,
          ReturnType<typeof getTeamsTeamIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':team_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdMetricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['metrics']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['teams', '/teams/:team_id/metrics', keyArgs] as const
}

export function getTeamsTeamIdMetricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['metrics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':team_id'].metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['metrics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':team_id']['metrics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdMetricsQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':team_id']['metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':team_id'].metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTicketStatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ticket_states.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ticket_states', '/ticket_states', keyArgs] as const
}

export function getTicketStatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ticket_states.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTicketStatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ticket_states.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTicketStates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_states.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ticket_states.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_states.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_states.$get>>>>
          >,
          ReturnType<typeof getTicketStatesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_states.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTicketStatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTicketStatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ticket_states.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getTicketTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ticket_types.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ticket_types', '/ticket_types', keyArgs] as const
}

export function getTicketTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ticket_types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTicketTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ticket_types.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTicketTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ticket_types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_types.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_types.$get>>>>
          >,
          ReturnType<typeof getTicketTypesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTicketTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTicketTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ticket_types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_types.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ticket_types.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ticket_types', '/ticket_types/:ticket_type_id', keyArgs] as const
}

export function getTicketTypesTicketTypeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTicketTypesTicketTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ticket_types[':ticket_type_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ticket_types)[':ticket_type_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTicketTypesTicketTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ticket_types)[':ticket_type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTicketTypesTicketTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTicketTypesTicketTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ticket_types[':ticket_type_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tickets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tickets.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tickets.enqueue.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.tickets.enqueue.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tickets)[':ticket_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tickets', '/tickets/:ticket_id', keyArgs] as const
}

export function getTicketsTicketIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tickets)[':ticket_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTicketsTicketIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tickets[':ticket_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTicketsTicketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tickets)[':ticket_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTicketsTicketIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTicketsTicketIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTicketsTicketIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tickets[':ticket_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tickets)[':ticket_id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tickets.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.tickets.search.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getVisitorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.visitors.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['visitors', '/visitors', keyArgs] as const
}

export function getVisitorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.visitors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVisitorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.visitors.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVisitors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.visitors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.$get>>>>
          >,
          ReturnType<typeof getVisitorsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVisitorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVisitorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.visitors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.visitors.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getBrandsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.brands.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['brands', '/brands', keyArgs] as const
}

export function getBrandsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.brands.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrandsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.brands.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBrands<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brands.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.brands.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brands.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brands.$get>>>>>,
          ReturnType<typeof getBrandsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brands.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBrandsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrandsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.brands.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBrandsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.brands)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['brands', '/brands/:id', keyArgs] as const
}

export function getBrandsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.brands)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrandsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.brands[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrandsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.brands)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.brands)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.brands)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.brands)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getBrandsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.brands)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBrandsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrandsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.brands[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEmailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emails.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['emails', '/emails', keyArgs] as const
}

export function getEmailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emails.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emails.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEmails<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emails.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
          ReturnType<typeof getEmailsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEmailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEmailsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.emails)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['emails', '/emails/:id', keyArgs] as const
}

export function getEmailsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.emails)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emails[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmailsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.emails)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getEmailsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emails[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fin_voice.collect)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['fin_voice', '/fin_voice/collect/:id', keyArgs] as const
}

export function getFinVoiceCollectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fin_voice.collect)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFinVoiceCollectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fin_voice.collect[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFinVoiceCollectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fin_voice.collect)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fin_voice.collect)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fin_voice.collect)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFinVoiceCollectIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.fin_voice.collect)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinVoiceCollectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFinVoiceCollectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fin_voice.collect[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFinVoiceExternalIdExternalIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fin_voice.external_id)[':external_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['fin_voice', '/fin_voice/external_id/:external_id', keyArgs] as const
}

export function getFinVoiceExternalIdExternalIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fin_voice.external_id)[':external_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFinVoiceExternalIdExternalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fin_voice.external_id[':external_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fin_voice.external_id)[':external_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fin_voice.external_id)[':external_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFinVoiceExternalIdExternalIdQueryKey>
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
          Awaited<ReturnType<(typeof client.fin_voice.external_id)[':external_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinVoiceExternalIdExternalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFinVoiceExternalIdExternalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fin_voice.external_id[':external_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFinVoicePhoneNumberPhoneNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['fin_voice', '/fin_voice/phone_number/:phone_number', keyArgs] as const
}

export function getFinVoicePhoneNumberPhoneNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFinVoicePhoneNumberPhoneNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fin_voice.phone_number[':phone_number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFinVoicePhoneNumberPhoneNumberQueryKey>
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
          Awaited<ReturnType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinVoicePhoneNumberPhoneNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFinVoicePhoneNumberPhoneNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fin_voice.phone_number[':phone_number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFinVoiceConversationConversationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['fin_voice', '/fin_voice/conversation/:conversation_id', keyArgs] as const
}

export function getFinVoiceConversationConversationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFinVoiceConversationConversationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fin_voice.conversation[':conversation_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFinVoiceConversationConversationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinVoiceConversationConversationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFinVoiceConversationConversationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fin_voice.conversation[':conversation_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportWorkflowsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.workflows)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['export', '/export/workflows/:id', keyArgs] as const
}

export function getExportWorkflowsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.workflows)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportWorkflowsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.workflows[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportWorkflowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.workflows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.workflows)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.workflows)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportWorkflowsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.export.workflows)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportWorkflowsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportWorkflowsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.workflows[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
