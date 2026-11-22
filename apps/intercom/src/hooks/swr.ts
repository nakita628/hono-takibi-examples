import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetMeKey(args: InferRequestType<typeof client.me.$get>) {
  const { header: _, ...keyArgs } = args
  return ['me', '/me', keyArgs] as const
}

export function useGetMe<TError = unknown>(
  args: InferRequestType<typeof client.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMe<TError = unknown>(
  args: InferRequestType<typeof client.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMacrosIdKey(args: InferRequestType<(typeof client.macros)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['macros', '/macros/:id', keyArgs] as const
}

export function useGetMacrosId<TError = unknown>(
  args: InferRequestType<(typeof client.macros)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macros)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMacrosIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macros)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.macros[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMacrosId<TError = unknown>(
  args: InferRequestType<(typeof client.macros)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macros)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMacrosIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macros)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.macros[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMacrosKey(args: InferRequestType<typeof client.macros.$get>) {
  const { header: _, ...keyArgs } = args
  return ['macros', '/macros', keyArgs] as const
}

export function useGetMacros<TError = unknown>(
  args: InferRequestType<typeof client.macros.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macros.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMacrosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macros.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.macros.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMacros<TError = unknown>(
  args: InferRequestType<typeof client.macros.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macros.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMacrosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macros.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.macros.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutAdminsAdminIdAwayKey() {
  return ['admins', '/admins/:admin_id/away', 'PUT'] as const
}

export function usePutAdminsAdminIdAway<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admins)[':admin_id']['away']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admins)[':admin_id']['away']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminsAdminIdAwayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admins)[':admin_id']['away']['$put']> },
      ) => parseResponse(client.admins[':admin_id'].away.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminsActivityLogsKey(
  args: InferRequestType<typeof client.admins.activity_logs.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['admins', '/admins/activity_logs', keyArgs] as const
}

export function useGetAdminsActivityLogs<TError = unknown>(
  args: InferRequestType<typeof client.admins.activity_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_logs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminsActivityLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_logs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admins.activity_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminsActivityLogs<TError = unknown>(
  args: InferRequestType<typeof client.admins.activity_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_logs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminsActivityLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_logs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admins.activity_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminsActivityLogsSearchKey() {
  return ['admins', '/admins/activity_logs/search', 'POST'] as const
}

export function usePostAdminsActivityLogsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admins.activity_logs.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admins.activity_logs.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminsActivityLogsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admins.activity_logs.search.$post> },
      ) => parseResponse(client.admins.activity_logs.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminsActivityLogEventTypesKey(
  args: InferRequestType<typeof client.admins.activity_log_event_types.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['admins', '/admins/activity_log_event_types', keyArgs] as const
}

export function useGetAdminsActivityLogEventTypes<TError = unknown>(
  args: InferRequestType<typeof client.admins.activity_log_event_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admins.activity_log_event_types.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminsActivityLogEventTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admins.activity_log_event_types.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admins.activity_log_event_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminsActivityLogEventTypes<TError = unknown>(
  args: InferRequestType<typeof client.admins.activity_log_event_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admins.activity_log_event_types.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminsActivityLogEventTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admins.activity_log_event_types.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admins.activity_log_event_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminsKey(args: InferRequestType<typeof client.admins.$get>) {
  const { header: _, ...keyArgs } = args
  return ['admins', '/admins', keyArgs] as const
}

export function useGetAdmins<TError = unknown>(
  args: InferRequestType<typeof client.admins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.admins.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAdmins<TError = unknown>(
  args: InferRequestType<typeof client.admins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.admins.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdKey(
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

export function useGetOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdKey(args)
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
                (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
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
          client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions[
            ':id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdKey(args)
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
                (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
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
          client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions[
            ':id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdKey() {
  return [
    'office_hours_schedules',
    '/office_hours_schedules/:office_hours_schedule_id/office_hours_exceptions/:id',
    'PUT',
  ] as const
}

export function usePutOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdKey()
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
            (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions[
            ':id'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdKey() {
  return [
    'office_hours_schedules',
    '/office_hours_schedules/:office_hours_schedule_id/office_hours_exceptions/:id',
    'DELETE',
  ] as const
}

export function useDeleteOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdKey()
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
            (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions[
            ':id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsKey(
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

export function useGetOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsKey(args)
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
                (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
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
          client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsKey(args)
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
                (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
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
          client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsKey() {
  return [
    'office_hours_schedules',
    '/office_hours_schedules/:office_hours_schedule_id/office_hours_exceptions',
    'POST',
  ] as const
}

export function usePostOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsKey()
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
            (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOfficeHoursSchedulesIdKey(
  args: InferRequestType<(typeof client.office_hours_schedules)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['office_hours_schedules', '/office_hours_schedules/:id', keyArgs] as const
}

export function useGetOfficeHoursSchedulesId<TError = unknown>(
  args: InferRequestType<(typeof client.office_hours_schedules)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.office_hours_schedules)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfficeHoursSchedulesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.office_hours_schedules)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.office_hours_schedules[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfficeHoursSchedulesId<TError = unknown>(
  args: InferRequestType<(typeof client.office_hours_schedules)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.office_hours_schedules)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfficeHoursSchedulesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.office_hours_schedules)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.office_hours_schedules[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOfficeHoursSchedulesIdKey() {
  return ['office_hours_schedules', '/office_hours_schedules/:id', 'PUT'] as const
}

export function usePutOfficeHoursSchedulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.office_hours_schedules)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.office_hours_schedules)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOfficeHoursSchedulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.office_hours_schedules)[':id']['$put']> },
      ) => parseResponse(client.office_hours_schedules[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOfficeHoursSchedulesIdKey() {
  return ['office_hours_schedules', '/office_hours_schedules/:id', 'DELETE'] as const
}

export function useDeleteOfficeHoursSchedulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.office_hours_schedules)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.office_hours_schedules)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOfficeHoursSchedulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.office_hours_schedules)[':id']['$delete']> },
      ) => parseResponse(client.office_hours_schedules[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOfficeHoursSchedulesKey(
  args: InferRequestType<typeof client.office_hours_schedules.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['office_hours_schedules', '/office_hours_schedules', keyArgs] as const
}

export function useGetOfficeHoursSchedules<TError = unknown>(
  args: InferRequestType<typeof client.office_hours_schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.office_hours_schedules.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfficeHoursSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.office_hours_schedules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.office_hours_schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfficeHoursSchedules<TError = unknown>(
  args: InferRequestType<typeof client.office_hours_schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.office_hours_schedules.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfficeHoursSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.office_hours_schedules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.office_hours_schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOfficeHoursSchedulesKey() {
  return ['office_hours_schedules', '/office_hours_schedules', 'POST'] as const
}

export function usePostOfficeHoursSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.office_hours_schedules.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.office_hours_schedules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOfficeHoursSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.office_hours_schedules.$post> },
      ) => parseResponse(client.office_hours_schedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminsAdminIdKey(
  args: InferRequestType<(typeof client.admins)[':admin_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['admins', '/admins/:admin_id', keyArgs] as const
}

export function useGetAdminsAdminId<TError = unknown>(
  args: InferRequestType<(typeof client.admins)[':admin_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admins)[':admin_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminsAdminIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admins)[':admin_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admins[':admin_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminsAdminId<TError = unknown>(
  args: InferRequestType<(typeof client.admins)[':admin_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admins)[':admin_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminsAdminIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admins)[':admin_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admins[':admin_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminsRemoveKey() {
  return ['admins', '/admins/remove', 'DELETE'] as const
}

export function useDeleteAdminsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admins.remove.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admins.remove.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminsRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admins.remove.$delete> }) =>
        parseResponse(client.admins.remove.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAiContentImportSourcesKey(
  args: InferRequestType<typeof client.ai.content_import_sources.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['ai', '/ai/content_import_sources', keyArgs] as const
}

export function useGetAiContentImportSources<TError = unknown>(
  args: InferRequestType<typeof client.ai.content_import_sources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ai.content_import_sources.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAiContentImportSourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ai.content_import_sources.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.content_import_sources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiContentImportSources<TError = unknown>(
  args: InferRequestType<typeof client.ai.content_import_sources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ai.content_import_sources.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAiContentImportSourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ai.content_import_sources.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.content_import_sources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAiContentImportSourcesKey() {
  return ['ai', '/ai/content_import_sources', 'POST'] as const
}

export function usePostAiContentImportSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ai.content_import_sources.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ai.content_import_sources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAiContentImportSourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ai.content_import_sources.$post> },
      ) => parseResponse(client.ai.content_import_sources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAiContentImportSourcesSourceIdKey(
  args: InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ai', '/ai/content_import_sources/:source_id', keyArgs] as const
}

export function useGetAiContentImportSourcesSourceId<TError = unknown>(
  args: InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.content_import_sources)[':source_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAiContentImportSourcesSourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.content_import_sources)[':source_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ai.content_import_sources[':source_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiContentImportSourcesSourceId<TError = unknown>(
  args: InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.content_import_sources)[':source_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAiContentImportSourcesSourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.content_import_sources)[':source_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ai.content_import_sources[':source_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAiContentImportSourcesSourceIdKey() {
  return ['ai', '/ai/content_import_sources/:source_id', 'PUT'] as const
}

export function usePutAiContentImportSourcesSourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ai.content_import_sources)[':source_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAiContentImportSourcesSourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$put']>
        },
      ) => parseResponse(client.ai.content_import_sources[':source_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAiContentImportSourcesSourceIdKey() {
  return ['ai', '/ai/content_import_sources/:source_id', 'DELETE'] as const
}

export function useDeleteAiContentImportSourcesSourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.content_import_sources)[':source_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAiContentImportSourcesSourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$delete']>
        },
      ) =>
        parseResponse(client.ai.content_import_sources[':source_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAiExternalPagesKey(
  args: InferRequestType<typeof client.ai.external_pages.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['ai', '/ai/external_pages', keyArgs] as const
}

export function useGetAiExternalPages<TError = unknown>(
  args: InferRequestType<typeof client.ai.external_pages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.external_pages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAiExternalPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.external_pages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.external_pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiExternalPages<TError = unknown>(
  args: InferRequestType<typeof client.ai.external_pages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.external_pages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAiExternalPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.external_pages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.external_pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAiExternalPagesKey() {
  return ['ai', '/ai/external_pages', 'POST'] as const
}

export function usePostAiExternalPages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.external_pages.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ai.external_pages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAiExternalPagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ai.external_pages.$post> }) =>
        parseResponse(client.ai.external_pages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAiExternalPagesPageIdKey(
  args: InferRequestType<(typeof client.ai.external_pages)[':page_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ai', '/ai/external_pages/:page_id', keyArgs] as const
}

export function useGetAiExternalPagesPageId<TError = unknown>(
  args: InferRequestType<(typeof client.ai.external_pages)[':page_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.external_pages)[':page_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAiExternalPagesPageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.external_pages)[':page_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.external_pages[':page_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiExternalPagesPageId<TError = unknown>(
  args: InferRequestType<(typeof client.ai.external_pages)[':page_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.external_pages)[':page_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAiExternalPagesPageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.external_pages)[':page_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.external_pages[':page_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAiExternalPagesPageIdKey() {
  return ['ai', '/ai/external_pages/:page_id', 'PUT'] as const
}

export function usePutAiExternalPagesPageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ai.external_pages)[':page_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ai.external_pages)[':page_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAiExternalPagesPageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ai.external_pages)[':page_id']['$put']> },
      ) => parseResponse(client.ai.external_pages[':page_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAiExternalPagesPageIdKey() {
  return ['ai', '/ai/external_pages/:page_id', 'DELETE'] as const
}

export function useDeleteAiExternalPagesPageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ai.external_pages)[':page_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ai.external_pages)[':page_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAiExternalPagesPageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ai.external_pages)[':page_id']['$delete']> },
      ) => parseResponse(client.ai.external_pages[':page_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAiExternalPagesExternalPageIdTagsKey() {
  return ['ai', '/ai/external_pages/:external_page_id/tags', 'POST'] as const
}

export function usePostAiExternalPagesExternalPageIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.ai.external_pages)[':external_page_id']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAiExternalPagesExternalPageIdTagsKey()
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
            (typeof client.ai.external_pages)[':external_page_id']['tags']['$post']
          >
        },
      ) =>
        parseResponse(client.ai.external_pages[':external_page_id'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAiExternalPagesExternalPageIdTagsIdKey() {
  return ['ai', '/ai/external_pages/:external_page_id/tags/:id', 'DELETE'] as const
}

export function useDeleteAiExternalPagesExternalPageIdTagsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ai.external_pages)[':external_page_id']['tags'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAiExternalPagesExternalPageIdTagsIdKey()
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
            (typeof client.ai.external_pages)[':external_page_id']['tags'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ai.external_pages[':external_page_id'].tags[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetArticlesKey(args: InferRequestType<typeof client.articles.$get>) {
  const { header: _, ...keyArgs } = args
  return ['articles', '/articles', keyArgs] as const
}

export function useGetArticles<TError = unknown>(
  args: InferRequestType<typeof client.articles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArticlesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.articles.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetArticles<TError = unknown>(
  args: InferRequestType<typeof client.articles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArticlesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.articles.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostArticlesKey() {
  return ['articles', '/articles', 'POST'] as const
}

export function usePostArticles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.articles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostArticlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.articles.$post> }) =>
        parseResponse(client.articles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetArticlesArticleIdKey(
  args: InferRequestType<(typeof client.articles)[':article_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['articles', '/articles/:article_id', keyArgs] as const
}

export function useGetArticlesArticleId<TError = unknown>(
  args: InferRequestType<(typeof client.articles)[':article_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetArticlesArticleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.articles[':article_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArticlesArticleId<TError = unknown>(
  args: InferRequestType<(typeof client.articles)[':article_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetArticlesArticleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.articles[':article_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutArticlesArticleIdKey() {
  return ['articles', '/articles/:article_id', 'PUT'] as const
}

export function usePutArticlesArticleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.articles)[':article_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutArticlesArticleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.articles)[':article_id']['$put']> },
      ) => parseResponse(client.articles[':article_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteArticlesArticleIdKey() {
  return ['articles', '/articles/:article_id', 'DELETE'] as const
}

export function useDeleteArticlesArticleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.articles)[':article_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.articles)[':article_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteArticlesArticleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.articles)[':article_id']['$delete']> },
      ) => parseResponse(client.articles[':article_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetArticlesIdDraftKey(
  args: InferRequestType<(typeof client.articles)[':id']['draft']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['articles', '/articles/:id/draft', keyArgs] as const
}

export function useGetArticlesIdDraft<TError = unknown>(
  args: InferRequestType<(typeof client.articles)[':id']['draft']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':id']['draft']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetArticlesIdDraftKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':id']['draft']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.articles[':id'].draft.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArticlesIdDraft<TError = unknown>(
  args: InferRequestType<(typeof client.articles)[':id']['draft']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':id']['draft']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetArticlesIdDraftKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':id']['draft']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.articles[':id'].draft.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutArticlesIdDraftKey() {
  return ['articles', '/articles/:id/draft', 'PUT'] as const
}

export function usePutArticlesIdDraft<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':id']['draft']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.articles)[':id']['draft']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutArticlesIdDraftKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.articles)[':id']['draft']['$put']> },
      ) => parseResponse(client.articles[':id'].draft.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostArticlesIdDraftPublishKey() {
  return ['articles', '/articles/:id/draft/publish', 'POST'] as const
}

export function usePostArticlesIdDraftPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.articles)[':id']['draft']['publish']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.articles)[':id']['draft']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostArticlesIdDraftPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.articles)[':id']['draft']['publish']['$post']> },
      ) => parseResponse(client.articles[':id'].draft.publish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostArticlesArticleIdTagsKey() {
  return ['articles', '/articles/:article_id/tags', 'POST'] as const
}

export function usePostArticlesArticleIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.articles)[':article_id']['tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.articles)[':article_id']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostArticlesArticleIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.articles)[':article_id']['tags']['$post']> },
      ) => parseResponse(client.articles[':article_id'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteArticlesArticleIdTagsIdKey() {
  return ['articles', '/articles/:article_id/tags/:id', 'DELETE'] as const
}

export function useDeleteArticlesArticleIdTagsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.articles)[':article_id']['tags'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.articles)[':article_id']['tags'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteArticlesArticleIdTagsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.articles)[':article_id']['tags'][':id']['$delete']>
        },
      ) => parseResponse(client.articles[':article_id'].tags[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetArticlesArticleIdVersionsKey(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['articles', '/articles/:article_id/versions', keyArgs] as const
}

export function useGetArticlesArticleIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetArticlesArticleIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.articles[':article_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArticlesArticleIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetArticlesArticleIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.articles[':article_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArticlesArticleIdVersionsIdKey(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['articles', '/articles/:article_id/versions/:id', keyArgs] as const
}

export function useGetArticlesArticleIdVersionsId<TError = unknown>(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetArticlesArticleIdVersionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.articles[':article_id'].versions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArticlesArticleIdVersionsId<TError = unknown>(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetArticlesArticleIdVersionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.articles[':article_id'].versions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArticlesSearchKey(
  args: InferRequestType<typeof client.articles.search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['articles', '/articles/search', keyArgs] as const
}

export function useGetArticlesSearch<TError = unknown>(
  args: InferRequestType<typeof client.articles.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArticlesSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.articles.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArticlesSearch<TError = unknown>(
  args: InferRequestType<typeof client.articles.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArticlesSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.articles.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAwayStatusReasonsKey(
  args: InferRequestType<typeof client.away_status_reasons.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['away_status_reasons', '/away_status_reasons', keyArgs] as const
}

export function useGetAwayStatusReasons<TError = unknown>(
  args: InferRequestType<typeof client.away_status_reasons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.away_status_reasons.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAwayStatusReasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.away_status_reasons.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.away_status_reasons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAwayStatusReasons<TError = unknown>(
  args: InferRequestType<typeof client.away_status_reasons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.away_status_reasons.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAwayStatusReasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.away_status_reasons.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.away_status_reasons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAudiencesKey(args: InferRequestType<typeof client.audiences.$get>) {
  const { header: _, ...keyArgs } = args
  return ['audiences', '/audiences', keyArgs] as const
}

export function useGetAudiences<TError = unknown>(
  args: InferRequestType<typeof client.audiences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAudiencesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audiences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudiences<TError = unknown>(
  args: InferRequestType<typeof client.audiences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAudiencesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audiences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAudiencesKey() {
  return ['audiences', '/audiences', 'POST'] as const
}

export function usePostAudiences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.audiences.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAudiencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.audiences.$post> }) =>
        parseResponse(client.audiences.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAudiencesIdKey(
  args: InferRequestType<(typeof client.audiences)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audiences', '/audiences/:id', keyArgs] as const
}

export function useGetAudiencesId<TError = unknown>(
  args: InferRequestType<(typeof client.audiences)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAudiencesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audiences[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudiencesId<TError = unknown>(
  args: InferRequestType<(typeof client.audiences)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAudiencesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audiences[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAudiencesIdKey() {
  return ['audiences', '/audiences/:id', 'PUT'] as const
}

export function usePutAudiencesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audiences)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAudiencesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.audiences)[':id']['$put']> },
      ) => parseResponse(client.audiences[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAudiencesIdKey() {
  return ['audiences', '/audiences/:id', 'DELETE'] as const
}

export function useDeleteAudiencesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.audiences)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAudiencesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.audiences)[':id']['$delete']> },
      ) => parseResponse(client.audiences[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportReportingDataEnqueueKey() {
  return ['export', '/export/reporting_data/enqueue', 'POST'] as const
}

export function usePostExportReportingDataEnqueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.export.reporting_data.enqueue.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.export.reporting_data.enqueue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportReportingDataEnqueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.export.reporting_data.enqueue.$post> },
      ) => parseResponse(client.export.reporting_data.enqueue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExportReportingDataJobIdentifierKey(
  args: InferRequestType<(typeof client.export.reporting_data)[':job_identifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['export', '/export/reporting_data/:job_identifier', keyArgs] as const
}

export function useGetExportReportingDataJobIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.export.reporting_data)[':job_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.reporting_data)[':job_identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExportReportingDataJobIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.reporting_data)[':job_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.export.reporting_data[':job_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportReportingDataJobIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.export.reporting_data)[':job_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.reporting_data)[':job_identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExportReportingDataJobIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.reporting_data)[':job_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.export.reporting_data[':job_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportReportingDataGetDatasetsKey(
  args: InferRequestType<typeof client.export.reporting_data.get_datasets.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['export', '/export/reporting_data/get_datasets', keyArgs] as const
}

export function useGetExportReportingDataGetDatasets<TError = unknown>(
  args: InferRequestType<typeof client.export.reporting_data.get_datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.export.reporting_data.get_datasets.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExportReportingDataGetDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.export.reporting_data.get_datasets.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.export.reporting_data.get_datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportReportingDataGetDatasets<TError = unknown>(
  args: InferRequestType<typeof client.export.reporting_data.get_datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.export.reporting_data.get_datasets.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExportReportingDataGetDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.export.reporting_data.get_datasets.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.export.reporting_data.get_datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDownloadReportingDataJobIdentifierKey(
  args: InferRequestType<(typeof client.download.reporting_data)[':job_identifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['download', '/download/reporting_data/:job_identifier', keyArgs] as const
}

export function useGetDownloadReportingDataJobIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.download.reporting_data)[':job_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.download.reporting_data)[':job_identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDownloadReportingDataJobIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.download.reporting_data)[':job_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.download.reporting_data[':job_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDownloadReportingDataJobIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.download.reporting_data)[':job_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.download.reporting_data)[':job_identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDownloadReportingDataJobIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.download.reporting_data)[':job_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.download.reporting_data[':job_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFinStartKey() {
  return ['fin', '/fin/start', 'POST'] as const
}

export function usePostFinStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.start.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.fin.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFinStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fin.start.$post> }) =>
        parseResponse(client.fin.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFinReplyKey() {
  return ['fin', '/fin/reply', 'POST'] as const
}

export function usePostFinReply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.reply.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.fin.reply.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFinReplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fin.reply.$post> }) =>
        parseResponse(client.fin.reply.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFinCsatKey() {
  return ['fin', '/fin/csat', 'POST'] as const
}

export function usePostFinCsat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.csat.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.fin.csat.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFinCsatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fin.csat.$post> }) =>
        parseResponse(client.fin.csat.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFinCapabilitiesKey() {
  return ['fin', '/fin/capabilities', 'POST'] as const
}

export function usePostFinCapabilities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.capabilities.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.fin.capabilities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFinCapabilitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fin.capabilities.$post> }) =>
        parseResponse(client.fin.capabilities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFinAskKey() {
  return ['fin', '/fin/ask', 'POST'] as const
}

export function usePostFinAsk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.ask.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.fin.ask.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFinAskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fin.ask.$post> }) =>
        parseResponse(client.fin.ask.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFinProceduresProcedureIdRunKey() {
  return ['fin', '/fin/procedures/:procedure_id/run', 'POST'] as const
}

export function usePostFinProceduresProcedureIdRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fin.procedures)[':procedure_id']['run']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.fin.procedures)[':procedure_id']['run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFinProceduresProcedureIdRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.fin.procedures)[':procedure_id']['run']['$post']>
        },
      ) => parseResponse(client.fin.procedures[':procedure_id'].run.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFinEscalateKey() {
  return ['fin', '/fin/escalate', 'POST'] as const
}

export function usePostFinEscalate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin.escalate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.fin.escalate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFinEscalateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fin.escalate.$post> }) =>
        parseResponse(client.fin.escalate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHelpCenterHelpCentersHelpCenterIdRedirectsKey(
  args: InferRequestType<
    (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['help_center', '/help_center/help_centers/:help_center_id/redirects', keyArgs] as const
}

export function useGetHelpCenterHelpCentersHelpCenterIdRedirects<TError = unknown>(
  args: InferRequestType<
    (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHelpCenterHelpCentersHelpCenterIdRedirectsKey(args)
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
                (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
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
          client.help_center.help_centers[':help_center_id'].redirects.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHelpCenterHelpCentersHelpCenterIdRedirects<TError = unknown>(
  args: InferRequestType<
    (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHelpCenterHelpCentersHelpCenterIdRedirectsKey(args)
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
                (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
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
          client.help_center.help_centers[':help_center_id'].redirects.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostHelpCenterHelpCentersHelpCenterIdRedirectsKey() {
  return ['help_center', '/help_center/help_centers/:help_center_id/redirects', 'POST'] as const
}

export function usePostHelpCenterHelpCentersHelpCenterIdRedirects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHelpCenterHelpCentersHelpCenterIdRedirectsKey()
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
            (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$post']
          >
        },
      ) =>
        parseResponse(
          client.help_center.help_centers[':help_center_id'].redirects.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetHelpCenterHelpCentersHelpCenterIdRedirectsIdKey(
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

export function useGetHelpCenterHelpCentersHelpCenterIdRedirectsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHelpCenterHelpCentersHelpCenterIdRedirectsIdKey(args)
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
                (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
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
          client.help_center.help_centers[':help_center_id'].redirects[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHelpCenterHelpCentersHelpCenterIdRedirectsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHelpCenterHelpCentersHelpCenterIdRedirectsIdKey(args)
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
                (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
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
          client.help_center.help_centers[':help_center_id'].redirects[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteHelpCenterHelpCentersHelpCenterIdRedirectsIdKey() {
  return [
    'help_center',
    '/help_center/help_centers/:help_center_id/redirects/:id',
    'DELETE',
  ] as const
}

export function useDeleteHelpCenterHelpCentersHelpCenterIdRedirectsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteHelpCenterHelpCentersHelpCenterIdRedirectsIdKey()
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
            (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.help_center.help_centers[':help_center_id'].redirects[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetHelpCenterCollectionsKey(
  args: InferRequestType<typeof client.help_center.collections.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['help_center', '/help_center/collections', keyArgs] as const
}

export function useGetHelpCenterCollections<TError = unknown>(
  args: InferRequestType<typeof client.help_center.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.help_center.collections.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHelpCenterCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.help_center.collections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.help_center.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHelpCenterCollections<TError = unknown>(
  args: InferRequestType<typeof client.help_center.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.help_center.collections.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHelpCenterCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.help_center.collections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.help_center.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostHelpCenterCollectionsKey() {
  return ['help_center', '/help_center/collections', 'POST'] as const
}

export function usePostHelpCenterCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.help_center.collections.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.help_center.collections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHelpCenterCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.help_center.collections.$post> },
      ) => parseResponse(client.help_center.collections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHelpCenterCollectionsCollectionIdKey(
  args: InferRequestType<(typeof client.help_center.collections)[':collection_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['help_center', '/help_center/collections/:collection_id', keyArgs] as const
}

export function useGetHelpCenterCollectionsCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.help_center.collections)[':collection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.help_center.collections)[':collection_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHelpCenterCollectionsCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.help_center.collections)[':collection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.help_center.collections[':collection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHelpCenterCollectionsCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.help_center.collections)[':collection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.help_center.collections)[':collection_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHelpCenterCollectionsCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.help_center.collections)[':collection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.help_center.collections[':collection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutHelpCenterCollectionsCollectionIdKey() {
  return ['help_center', '/help_center/collections/:collection_id', 'PUT'] as const
}

export function usePutHelpCenterCollectionsCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.help_center.collections)[':collection_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.help_center.collections)[':collection_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutHelpCenterCollectionsCollectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.help_center.collections)[':collection_id']['$put']>
        },
      ) => parseResponse(client.help_center.collections[':collection_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteHelpCenterCollectionsCollectionIdKey() {
  return ['help_center', '/help_center/collections/:collection_id', 'DELETE'] as const
}

export function useDeleteHelpCenterCollectionsCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.help_center.collections)[':collection_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.help_center.collections)[':collection_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteHelpCenterCollectionsCollectionIdKey()
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
            (typeof client.help_center.collections)[':collection_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.help_center.collections[':collection_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHelpCenterHelpCentersHelpCenterIdKey(
  args: InferRequestType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['help_center', '/help_center/help_centers/:help_center_id', keyArgs] as const
}

export function useGetHelpCenterHelpCentersHelpCenterId<TError = unknown>(
  args: InferRequestType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHelpCenterHelpCentersHelpCenterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.help_center.help_centers[':help_center_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHelpCenterHelpCentersHelpCenterId<TError = unknown>(
  args: InferRequestType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHelpCenterHelpCentersHelpCenterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.help_center.help_centers[':help_center_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHelpCenterHelpCentersKey(
  args: InferRequestType<typeof client.help_center.help_centers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['help_center', '/help_center/help_centers', keyArgs] as const
}

export function useGetHelpCenterHelpCenters<TError = unknown>(
  args: InferRequestType<typeof client.help_center.help_centers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.help_center.help_centers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHelpCenterHelpCentersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.help_center.help_centers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.help_center.help_centers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHelpCenterHelpCenters<TError = unknown>(
  args: InferRequestType<typeof client.help_center.help_centers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.help_center.help_centers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHelpCenterHelpCentersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.help_center.help_centers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.help_center.help_centers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInternalArticlesKey(
  args: InferRequestType<typeof client.internal_articles.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['internal_articles', '/internal_articles', keyArgs] as const
}

export function useGetInternalArticles<TError = unknown>(
  args: InferRequestType<typeof client.internal_articles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInternalArticlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.internal_articles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternalArticles<TError = unknown>(
  args: InferRequestType<typeof client.internal_articles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInternalArticlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.internal_articles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInternalArticlesKey() {
  return ['internal_articles', '/internal_articles', 'POST'] as const
}

export function usePostInternalArticles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.internal_articles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInternalArticlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.internal_articles.$post> }) =>
        parseResponse(client.internal_articles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInternalArticlesInternalArticleIdKey(
  args: InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['internal_articles', '/internal_articles/:internal_article_id', keyArgs] as const
}

export function useGetInternalArticlesInternalArticleId<TError = unknown>(
  args: InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.internal_articles)[':internal_article_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInternalArticlesInternalArticleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.internal_articles)[':internal_article_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.internal_articles[':internal_article_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternalArticlesInternalArticleId<TError = unknown>(
  args: InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.internal_articles)[':internal_article_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInternalArticlesInternalArticleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.internal_articles)[':internal_article_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.internal_articles[':internal_article_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutInternalArticlesInternalArticleIdKey() {
  return ['internal_articles', '/internal_articles/:internal_article_id', 'PUT'] as const
}

export function usePutInternalArticlesInternalArticleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.internal_articles)[':internal_article_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInternalArticlesInternalArticleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$put']>
        },
      ) => parseResponse(client.internal_articles[':internal_article_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteInternalArticlesInternalArticleIdKey() {
  return ['internal_articles', '/internal_articles/:internal_article_id', 'DELETE'] as const
}

export function useDeleteInternalArticlesInternalArticleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.internal_articles)[':internal_article_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInternalArticlesInternalArticleIdKey()
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
            (typeof client.internal_articles)[':internal_article_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.internal_articles[':internal_article_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInternalArticlesInternalArticleIdTagsKey() {
  return ['internal_articles', '/internal_articles/:internal_article_id/tags', 'POST'] as const
}

export function usePostInternalArticlesInternalArticleIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.internal_articles)[':internal_article_id']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInternalArticlesInternalArticleIdTagsKey()
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
            (typeof client.internal_articles)[':internal_article_id']['tags']['$post']
          >
        },
      ) =>
        parseResponse(
          client.internal_articles[':internal_article_id'].tags.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteInternalArticlesInternalArticleIdTagsIdKey() {
  return [
    'internal_articles',
    '/internal_articles/:internal_article_id/tags/:id',
    'DELETE',
  ] as const
}

export function useDeleteInternalArticlesInternalArticleIdTagsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.internal_articles)[':internal_article_id']['tags'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInternalArticlesInternalArticleIdTagsIdKey()
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
            (typeof client.internal_articles)[':internal_article_id']['tags'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.internal_articles[':internal_article_id'].tags[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetInternalArticlesSearchKey(
  args: InferRequestType<typeof client.internal_articles.search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['internal_articles', '/internal_articles/search', keyArgs] as const
}

export function useGetInternalArticlesSearch<TError = unknown>(
  args: InferRequestType<typeof client.internal_articles.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInternalArticlesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.internal_articles.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternalArticlesSearch<TError = unknown>(
  args: InferRequestType<typeof client.internal_articles.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInternalArticlesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.internal_articles.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.internal_articles.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoldersKey(args: InferRequestType<typeof client.folders.$get>) {
  const { header: _, ...keyArgs } = args
  return ['folders', '/folders', keyArgs] as const
}

export function useGetFolders<TError = unknown>(
  args: InferRequestType<typeof client.folders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoldersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.folders.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFolders<TError = unknown>(
  args: InferRequestType<typeof client.folders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoldersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.folders.$get(args, clientOptions)), restSwrOptions),
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

export function getGetFoldersIdKey(args: InferRequestType<(typeof client.folders)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['folders', '/folders/:id', keyArgs] as const
}

export function useGetFoldersId<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoldersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoldersId<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoldersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFoldersIdKey() {
  return ['folders', '/folders/:id', 'PUT'] as const
}

export function usePutFoldersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFoldersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.folders)[':id']['$put']> }) =>
        parseResponse(client.folders[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFoldersIdKey() {
  return ['folders', '/folders/:id', 'DELETE'] as const
}

export function useDeleteFoldersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFoldersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.folders)[':id']['$delete']> },
      ) => parseResponse(client.folders[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpAllowlistKey(args: InferRequestType<typeof client.ip_allowlist.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ip_allowlist', '/ip_allowlist', keyArgs] as const
}

export function useGetIpAllowlist<TError = unknown>(
  args: InferRequestType<typeof client.ip_allowlist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allowlist.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpAllowlistKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allowlist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip_allowlist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpAllowlist<TError = unknown>(
  args: InferRequestType<typeof client.ip_allowlist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allowlist.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpAllowlistKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allowlist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip_allowlist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIpAllowlistKey() {
  return ['ip_allowlist', '/ip_allowlist', 'PUT'] as const
}

export function usePutIpAllowlist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_allowlist.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ip_allowlist.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIpAllowlistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ip_allowlist.$put> }) =>
        parseResponse(client.ip_allowlist.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesKey(args: InferRequestType<typeof client.companies.$get>) {
  const { header: _, ...keyArgs } = args
  return ['companies', '/companies', keyArgs] as const
}

export function useGetCompanies<TError = unknown>(
  args: InferRequestType<typeof client.companies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCompaniesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanies<TError = unknown>(
  args: InferRequestType<typeof client.companies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCompaniesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompaniesKey() {
  return ['companies', '/companies', 'POST'] as const
}

export function usePostCompanies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.companies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.companies.$post> }) =>
        parseResponse(client.companies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdKey(
  args: InferRequestType<(typeof client.companies)[':company_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['companies', '/companies/:company_id', keyArgs] as const
}

export function useGetCompaniesCompanyId<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':company_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':company_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':company_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies[':company_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyId<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':company_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':company_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':company_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies[':company_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCompaniesCompanyIdKey() {
  return ['companies', '/companies/:company_id', 'PUT'] as const
}

export function usePutCompaniesCompanyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':company_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':company_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCompaniesCompanyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.companies)[':company_id']['$put']> },
      ) => parseResponse(client.companies[':company_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCompaniesCompanyIdKey() {
  return ['companies', '/companies/:company_id', 'DELETE'] as const
}

export function useDeleteCompaniesCompanyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':company_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':company_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCompaniesCompanyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.companies)[':company_id']['$delete']> },
      ) => parseResponse(client.companies[':company_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdContactsKey(
  args: InferRequestType<(typeof client.companies)[':company_id']['contacts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['companies', '/companies/:company_id/contacts', keyArgs] as const
}

export function useGetCompaniesCompanyIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':company_id']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':company_id']['contacts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':company_id']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies[':company_id'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':company_id']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':company_id']['contacts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':company_id']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies[':company_id'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdSegmentsKey(
  args: InferRequestType<(typeof client.companies)[':company_id']['segments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['companies', '/companies/:company_id/segments', keyArgs] as const
}

export function useGetCompaniesCompanyIdSegments<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':company_id']['segments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':company_id']['segments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':company_id']['segments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies[':company_id'].segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdSegments<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':company_id']['segments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':company_id']['segments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':company_id']['segments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies[':company_id'].segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdNotesKey(
  args: InferRequestType<(typeof client.companies)[':company_id']['notes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['companies', '/companies/:company_id/notes', keyArgs] as const
}

export function useGetCompaniesCompanyIdNotes<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':company_id']['notes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':company_id']['notes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdNotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':company_id']['notes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies[':company_id'].notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdNotes<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':company_id']['notes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':company_id']['notes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdNotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)[':company_id']['notes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies[':company_id'].notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdNotesKey() {
  return ['companies', '/companies/:company_id/notes', 'POST'] as const
}

export function usePostCompaniesCompanyIdNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':company_id']['notes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':company_id']['notes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.companies)[':company_id']['notes']['$post']> },
      ) => parseResponse(client.companies[':company_id'].notes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCompaniesSearchKey() {
  return ['companies', '/companies/search', 'POST'] as const
}

export function usePostCompaniesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.companies.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.companies.search.$post> }) =>
        parseResponse(client.companies.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCompaniesListKey() {
  return ['companies', '/companies/list', 'POST'] as const
}

export function usePostCompaniesList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.companies.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.companies.list.$post> }) =>
        parseResponse(client.companies.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesScrollKey(
  args: InferRequestType<typeof client.companies.scroll.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['companies', '/companies/scroll', keyArgs] as const
}

export function useGetCompaniesScroll<TError = unknown>(
  args: InferRequestType<typeof client.companies.scroll.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.scroll.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesScrollKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.scroll.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies.scroll.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesScroll<TError = unknown>(
  args: InferRequestType<typeof client.companies.scroll.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.scroll.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesScrollKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.scroll.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies.scroll.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactsContactIdCompaniesKey(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['companies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/:contact_id/companies', keyArgs] as const
}

export function useGetContactsContactIdCompanies<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['companies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['companies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsContactIdCompaniesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['companies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':contact_id'].companies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsContactIdCompanies<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['companies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['companies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsContactIdCompaniesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['companies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':contact_id'].companies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactsContactIdCompaniesKey() {
  return ['contacts', '/contacts/:contact_id/companies', 'POST'] as const
}

export function usePostContactsContactIdCompanies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['companies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':contact_id']['companies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsContactIdCompaniesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.contacts)[':contact_id']['companies']['$post']> },
      ) => parseResponse(client.contacts[':contact_id'].companies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteContactsContactIdCompaniesCompanyIdKey() {
  return ['contacts', '/contacts/:contact_id/companies/:company_id', 'DELETE'] as const
}

export function useDeleteContactsContactIdCompaniesCompanyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.contacts)[':contact_id']['companies'][':company_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactsContactIdCompaniesCompanyIdKey()
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
            (typeof client.contacts)[':contact_id']['companies'][':company_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.contacts[':contact_id'].companies[':company_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetContactsContactIdNotesKey(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['notes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/:contact_id/notes', keyArgs] as const
}

export function useGetContactsContactIdNotes<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['notes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['notes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsContactIdNotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['notes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':contact_id'].notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsContactIdNotes<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['notes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['notes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsContactIdNotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['notes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':contact_id'].notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactsContactIdNotesKey() {
  return ['contacts', '/contacts/:contact_id/notes', 'POST'] as const
}

export function usePostContactsContactIdNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['notes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':contact_id']['notes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsContactIdNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.contacts)[':contact_id']['notes']['$post']> },
      ) => parseResponse(client.contacts[':contact_id'].notes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsContactIdSegmentsKey(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/:contact_id/segments', keyArgs] as const
}

export function useGetContactsContactIdSegments<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsContactIdSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':contact_id'].segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsContactIdSegments<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsContactIdSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':contact_id'].segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactsContactIdSubscriptionsKey(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/:contact_id/subscriptions', keyArgs] as const
}

export function useGetContactsContactIdSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsContactIdSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contacts[':contact_id'].subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsContactIdSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsContactIdSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contacts[':contact_id'].subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactsContactIdSubscriptionsKey() {
  return ['contacts', '/contacts/:contact_id/subscriptions', 'POST'] as const
}

export function usePostContactsContactIdSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['subscriptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':contact_id']['subscriptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsContactIdSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.contacts)[':contact_id']['subscriptions']['$post']>
        },
      ) => parseResponse(client.contacts[':contact_id'].subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteContactsContactIdSubscriptionsSubscriptionIdKey() {
  return ['contacts', '/contacts/:contact_id/subscriptions/:subscription_id', 'DELETE'] as const
}

export function useDeleteContactsContactIdSubscriptionsSubscriptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.contacts)[':contact_id']['subscriptions'][':subscription_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactsContactIdSubscriptionsSubscriptionIdKey()
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
            (typeof client.contacts)[':contact_id']['subscriptions'][':subscription_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.contacts[':contact_id'].subscriptions[':subscription_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetContactsContactIdTagsKey(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/:contact_id/tags', keyArgs] as const
}

export function useGetContactsContactIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['tags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsContactIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':contact_id'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsContactIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['tags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsContactIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':contact_id'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactsContactIdTagsKey() {
  return ['contacts', '/contacts/:contact_id/tags', 'POST'] as const
}

export function usePostContactsContactIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':contact_id']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsContactIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.contacts)[':contact_id']['tags']['$post']> },
      ) => parseResponse(client.contacts[':contact_id'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteContactsContactIdTagsTagIdKey() {
  return ['contacts', '/contacts/:contact_id/tags/:tag_id', 'DELETE'] as const
}

export function useDeleteContactsContactIdTagsTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['tags'][':tag_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':contact_id']['tags'][':tag_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactsContactIdTagsTagIdKey()
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
            (typeof client.contacts)[':contact_id']['tags'][':tag_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.contacts[':contact_id'].tags[':tag_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsDeletedKey(
  args: InferRequestType<typeof client.contacts.deleted.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/deleted', keyArgs] as const
}

export function useGetContactsDeleted<TError = unknown>(
  args: InferRequestType<typeof client.contacts.deleted.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.deleted.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsDeletedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.deleted.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.deleted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsDeleted<TError = unknown>(
  args: InferRequestType<typeof client.contacts.deleted.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.deleted.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsDeletedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.deleted.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.deleted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactsContactIdKey(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/:contact_id', keyArgs] as const
}

export function useGetContactsContactId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsContactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':contact_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsContactId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsContactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':contact_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutContactsContactIdKey() {
  return ['contacts', '/contacts/:contact_id', 'PUT'] as const
}

export function usePutContactsContactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':contact_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactsContactIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contacts)[':contact_id']['$put']> },
      ) => parseResponse(client.contacts[':contact_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteContactsContactIdKey() {
  return ['contacts', '/contacts/:contact_id', 'DELETE'] as const
}

export function useDeleteContactsContactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':contact_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactsContactIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contacts)[':contact_id']['$delete']> },
      ) => parseResponse(client.contacts[':contact_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactsMergeKey() {
  return ['contacts', '/contacts/merge', 'POST'] as const
}

export function usePostContactsMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.merge.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.contacts.merge.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsMergeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contacts.merge.$post> }) =>
        parseResponse(client.contacts.merge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactsMergePreviewKey() {
  return ['contacts', '/contacts/merge/preview', 'POST'] as const
}

export function usePostContactsMergePreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contacts.merge.preview.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.contacts.merge.preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsMergePreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.contacts.merge.preview.$post> },
      ) => parseResponse(client.contacts.merge.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactsSearchKey() {
  return ['contacts', '/contacts/search', 'POST'] as const
}

export function usePostContactsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.contacts.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contacts.search.$post> }) =>
        parseResponse(client.contacts.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsActivitiesKey(
  args: InferRequestType<typeof client.contacts.activities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/activities', keyArgs] as const
}

export function useGetContactsActivities<TError = unknown>(
  args: InferRequestType<typeof client.contacts.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contacts.activities.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contacts.activities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsActivities<TError = unknown>(
  args: InferRequestType<typeof client.contacts.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contacts.activities.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contacts.activities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactsKey(args: InferRequestType<typeof client.contacts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts', keyArgs] as const
}

export function useGetContacts<TError = unknown>(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.contacts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetContacts<TError = unknown>(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.contacts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostContactsKey() {
  return ['contacts', '/contacts', 'POST'] as const
}

export function usePostContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.contacts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contacts.$post> }) =>
        parseResponse(client.contacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsFindByExternalIdExternalIdKey(
  args: InferRequestType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/find_by_external_id/:external_id', keyArgs] as const
}

export function useGetContactsFindByExternalIdExternalId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>
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
        ? getGetContactsFindByExternalIdExternalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.contacts.find_by_external_id[':external_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsFindByExternalIdExternalId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>
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
        ? getGetContactsFindByExternalIdExternalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.contacts.find_by_external_id[':external_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostContactsContactIdArchiveKey() {
  return ['contacts', '/contacts/:contact_id/archive', 'POST'] as const
}

export function usePostContactsContactIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':contact_id']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsContactIdArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.contacts)[':contact_id']['archive']['$post']> },
      ) => parseResponse(client.contacts[':contact_id'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactsContactIdUnarchiveKey() {
  return ['contacts', '/contacts/:contact_id/unarchive', 'POST'] as const
}

export function usePostContactsContactIdUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['unarchive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':contact_id']['unarchive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsContactIdUnarchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.contacts)[':contact_id']['unarchive']['$post']> },
      ) => parseResponse(client.contacts[':contact_id'].unarchive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsIdBannersKey(
  args: InferRequestType<(typeof client.contacts)[':id']['banners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/:id/banners', keyArgs] as const
}

export function useGetContactsIdBanners<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':id']['banners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':id']['banners']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsIdBannersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':id']['banners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':id'].banners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsIdBanners<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':id']['banners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':id']['banners']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsIdBannersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':id']['banners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':id'].banners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactsIdBannersViewIdDismissKey() {
  return ['contacts', '/contacts/:id/banners/:view_id/dismiss', 'POST'] as const
}

export function usePostContactsIdBannersViewIdDismiss<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.contacts)[':id']['banners'][':view_id']['dismiss']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsIdBannersViewIdDismissKey()
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
            (typeof client.contacts)[':id']['banners'][':view_id']['dismiss']['$post']
          >
        },
      ) =>
        parseResponse(client.contacts[':id'].banners[':view_id'].dismiss.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactsContactIdBlockKey() {
  return ['contacts', '/contacts/:contact_id/block', 'POST'] as const
}

export function usePostContactsContactIdBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['block']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':contact_id']['block']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsContactIdBlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.contacts)[':contact_id']['block']['$post']> },
      ) => parseResponse(client.contacts[':contact_id'].block.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsIdMergeHistoriesKey(
  args: InferRequestType<(typeof client.contacts)[':id']['merge_histories']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/:id/merge_histories', keyArgs] as const
}

export function useGetContactsIdMergeHistories<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':id']['merge_histories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':id']['merge_histories']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsIdMergeHistoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':id']['merge_histories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':id'].merge_histories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsIdMergeHistories<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':id']['merge_histories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':id']['merge_histories']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsIdMergeHistoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':id']['merge_histories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':id'].merge_histories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutContactsBulkKey() {
  return ['contacts', '/contacts/bulk', 'PUT'] as const
}

export function usePutContactsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.bulk.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.contacts.bulk.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contacts.bulk.$put> }) =>
        parseResponse(client.contacts.bulk.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactsBulkKey() {
  return ['contacts', '/contacts/bulk', 'POST'] as const
}

export function usePostContactsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.bulk.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.contacts.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contacts.bulk.$post> }) =>
        parseResponse(client.contacts.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactsBulkDeleteKey() {
  return ['contacts', '/contacts/bulk/delete', 'POST'] as const
}

export function usePostContactsBulkDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contacts.bulk.delete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.contacts.bulk.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsBulkDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.contacts.bulk.delete.$post> },
      ) => parseResponse(client.contacts.bulk.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsBulkIdKey(
  args: InferRequestType<(typeof client.contacts.bulk)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/bulk/:id', keyArgs] as const
}

export function useGetContactsBulkId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts.bulk)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.bulk)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsBulkIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.bulk)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.bulk[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsBulkId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts.bulk)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.bulk)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsBulkIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.bulk)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.bulk[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContentBulkActionsKey() {
  return ['content', '/content/bulk_actions', 'POST'] as const
}

export function usePostContentBulkActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.content.bulk_actions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.content.bulk_actions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContentBulkActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.content.bulk_actions.$post> },
      ) => parseResponse(client.content.bulk_actions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContentSearchKey(args: InferRequestType<typeof client.content.search.$get>) {
  const { header: _, ...keyArgs } = args
  return ['content', '/content/search', keyArgs] as const
}

export function useGetContentSearch<TError = unknown>(
  args: InferRequestType<typeof client.content.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContentSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.content.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContentSearch<TError = unknown>(
  args: InferRequestType<typeof client.content.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContentSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.content.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContentSnippetsKey(
  args: InferRequestType<typeof client.content_snippets.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['content_snippets', '/content_snippets', keyArgs] as const
}

export function useGetContentSnippets<TError = unknown>(
  args: InferRequestType<typeof client.content_snippets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_snippets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContentSnippetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_snippets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.content_snippets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContentSnippets<TError = unknown>(
  args: InferRequestType<typeof client.content_snippets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_snippets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContentSnippetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_snippets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.content_snippets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContentSnippetsKey() {
  return ['content_snippets', '/content_snippets', 'POST'] as const
}

export function usePostContentSnippets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_snippets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.content_snippets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContentSnippetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.content_snippets.$post> }) =>
        parseResponse(client.content_snippets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContentSnippetsIdKey(
  args: InferRequestType<(typeof client.content_snippets)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['content_snippets', '/content_snippets/:id', keyArgs] as const
}

export function useGetContentSnippetsId<TError = unknown>(
  args: InferRequestType<(typeof client.content_snippets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.content_snippets)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContentSnippetsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.content_snippets)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.content_snippets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContentSnippetsId<TError = unknown>(
  args: InferRequestType<(typeof client.content_snippets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.content_snippets)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContentSnippetsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.content_snippets)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.content_snippets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutContentSnippetsIdKey() {
  return ['content_snippets', '/content_snippets/:id', 'PUT'] as const
}

export function usePutContentSnippetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.content_snippets)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.content_snippets)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContentSnippetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.content_snippets)[':id']['$put']> },
      ) => parseResponse(client.content_snippets[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteContentSnippetsIdKey() {
  return ['content_snippets', '/content_snippets/:id', 'DELETE'] as const
}

export function useDeleteContentSnippetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.content_snippets)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.content_snippets)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContentSnippetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.content_snippets)[':id']['$delete']> },
      ) => parseResponse(client.content_snippets[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContentSnippetsContentSnippetIdTagsKey() {
  return ['content_snippets', '/content_snippets/:content_snippet_id/tags', 'POST'] as const
}

export function usePostContentSnippetsContentSnippetIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.content_snippets)[':content_snippet_id']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContentSnippetsContentSnippetIdTagsKey()
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
            (typeof client.content_snippets)[':content_snippet_id']['tags']['$post']
          >
        },
      ) =>
        parseResponse(
          client.content_snippets[':content_snippet_id'].tags.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteContentSnippetsContentSnippetIdTagsIdKey() {
  return ['content_snippets', '/content_snippets/:content_snippet_id/tags/:id', 'DELETE'] as const
}

export function useDeleteContentSnippetsContentSnippetIdTagsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.content_snippets)[':content_snippet_id']['tags'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContentSnippetsContentSnippetIdTagsIdKey()
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
            (typeof client.content_snippets)[':content_snippet_id']['tags'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.content_snippets[':content_snippet_id'].tags[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDynamicContentsKey(
  args: InferRequestType<typeof client.dynamic_contents.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['dynamic_contents', '/dynamic_contents', keyArgs] as const
}

export function useGetDynamicContents<TError = unknown>(
  args: InferRequestType<typeof client.dynamic_contents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamic_contents.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDynamicContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamic_contents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dynamic_contents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDynamicContents<TError = unknown>(
  args: InferRequestType<typeof client.dynamic_contents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamic_contents.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDynamicContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamic_contents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dynamic_contents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDynamicContentsKey() {
  return ['dynamic_contents', '/dynamic_contents', 'POST'] as const
}

export function usePostDynamicContents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamic_contents.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dynamic_contents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDynamicContentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dynamic_contents.$post> }) =>
        parseResponse(client.dynamic_contents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDynamicContentsIdKey(
  args: InferRequestType<(typeof client.dynamic_contents)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dynamic_contents', '/dynamic_contents/:id', keyArgs] as const
}

export function useGetDynamicContentsId<TError = unknown>(
  args: InferRequestType<(typeof client.dynamic_contents)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDynamicContentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dynamic_contents[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDynamicContentsId<TError = unknown>(
  args: InferRequestType<(typeof client.dynamic_contents)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDynamicContentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dynamic_contents[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDynamicContentsIdKey() {
  return ['dynamic_contents', '/dynamic_contents/:id', 'PUT'] as const
}

export function usePutDynamicContentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dynamic_contents)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDynamicContentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dynamic_contents)[':id']['$put']> },
      ) => parseResponse(client.dynamic_contents[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDynamicContentsIdKey() {
  return ['dynamic_contents', '/dynamic_contents/:id', 'DELETE'] as const
}

export function useDeleteDynamicContentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dynamic_contents)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dynamic_contents)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDynamicContentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dynamic_contents)[':id']['$delete']> },
      ) => parseResponse(client.dynamic_contents[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsConversationIdTagsKey() {
  return ['conversations', '/conversations/:conversation_id/tags', 'POST'] as const
}

export function usePostConversationsConversationIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConversationIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conversations)[':conversation_id']['tags']['$post']>
        },
      ) => parseResponse(client.conversations[':conversation_id'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsConversationIdTagsTagIdKey() {
  return ['conversations', '/conversations/:conversation_id/tags/:tag_id', 'DELETE'] as const
}

export function useDeleteConversationsConversationIdTagsTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.conversations)[':conversation_id']['tags'][':tag_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsConversationIdTagsTagIdKey()
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
            (typeof client.conversations)[':conversation_id']['tags'][':tag_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.conversations[':conversation_id'].tags[':tag_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsKey(args: InferRequestType<typeof client.conversations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['conversations', '/conversations', keyArgs] as const
}

export function useGetConversations<TError = unknown>(
  args: InferRequestType<typeof client.conversations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConversationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversations<TError = unknown>(
  args: InferRequestType<typeof client.conversations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConversationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsKey() {
  return ['conversations', '/conversations', 'POST'] as const
}

export function usePostConversations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.conversations.$post> }) =>
        parseResponse(client.conversations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsConversationIdKey(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['conversations', '/conversations/:conversation_id', keyArgs] as const
}

export function useGetConversationsConversationId<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsConversationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations[':conversation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConversationId<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsConversationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations[':conversation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutConversationsConversationIdKey() {
  return ['conversations', '/conversations/:conversation_id', 'PUT'] as const
}

export function usePutConversationsConversationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversationsConversationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations)[':conversation_id']['$put']> },
      ) => parseResponse(client.conversations[':conversation_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsConversationIdKey() {
  return ['conversations', '/conversations/:conversation_id', 'DELETE'] as const
}

export function useDeleteConversationsConversationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsConversationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']> },
      ) => parseResponse(client.conversations[':conversation_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsSearchKey() {
  return ['conversations', '/conversations/search', 'POST'] as const
}

export function usePostConversationsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.conversations.search.$post> },
      ) => parseResponse(client.conversations.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsConversationIdReplyKey() {
  return ['conversations', '/conversations/:conversation_id/reply', 'POST'] as const
}

export function usePostConversationsConversationIdReply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['reply']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['reply']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConversationIdReplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conversations)[':conversation_id']['reply']['$post']>
        },
      ) => parseResponse(client.conversations[':conversation_id'].reply.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsConversationIdPartsKey() {
  return ['conversations', '/conversations/:conversation_id/parts', 'POST'] as const
}

export function usePostConversationsConversationIdParts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['parts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['parts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConversationIdPartsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conversations)[':conversation_id']['parts']['$post']>
        },
      ) => parseResponse(client.conversations[':conversation_id'].parts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsConversationIdCustomersKey() {
  return ['conversations', '/conversations/:conversation_id/customers', 'POST'] as const
}

export function usePostConversationsConversationIdCustomers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['customers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConversationIdCustomersKey()
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
            (typeof client.conversations)[':conversation_id']['customers']['$post']
          >
        },
      ) =>
        parseResponse(client.conversations[':conversation_id'].customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsConversationIdCustomersContactIdKey() {
  return [
    'conversations',
    '/conversations/:conversation_id/customers/:contact_id',
    'DELETE',
  ] as const
}

export function useDeleteConversationsConversationIdCustomersContactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.conversations)[':conversation_id']['customers'][':contact_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsConversationIdCustomersContactIdKey()
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
            (typeof client.conversations)[':conversation_id']['customers'][':contact_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.conversations[':conversation_id'].customers[':contact_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsIdHandlingEventsKey(
  args: InferRequestType<(typeof client.conversations)[':id']['handling_events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['conversations', '/conversations/:id/handling_events', keyArgs] as const
}

export function useGetConversationsIdHandlingEvents<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':id']['handling_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':id']['handling_events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsIdHandlingEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':id']['handling_events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversations[':id'].handling_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsIdHandlingEvents<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':id']['handling_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':id']['handling_events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsIdHandlingEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':id']['handling_events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversations[':id'].handling_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsIdHitlEventsKey(
  args: InferRequestType<(typeof client.conversations)[':id']['hitl_events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['conversations', '/conversations/:id/hitl_events', keyArgs] as const
}

export function useGetConversationsIdHitlEvents<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':id']['hitl_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':id']['hitl_events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsIdHitlEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':id']['hitl_events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations[':id'].hitl_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsIdHitlEvents<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':id']['hitl_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':id']['hitl_events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsIdHitlEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':id']['hitl_events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations[':id'].hitl_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsIdSideConversationsKey(
  args: InferRequestType<(typeof client.conversations)[':id']['side_conversations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['conversations', '/conversations/:id/side_conversations', keyArgs] as const
}

export function useGetConversationsIdSideConversations<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':id']['side_conversations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':id']['side_conversations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsIdSideConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':id']['side_conversations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversations[':id'].side_conversations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsIdSideConversations<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':id']['side_conversations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':id']['side_conversations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsIdSideConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':id']['side_conversations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversations[':id'].side_conversations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsConversationIdRatingKey() {
  return ['conversations', '/conversations/:conversation_id/rating', 'POST'] as const
}

export function usePostConversationsConversationIdRating<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['rating']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['rating']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConversationIdRatingKey()
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
            (typeof client.conversations)[':conversation_id']['rating']['$post']
          >
        },
      ) => parseResponse(client.conversations[':conversation_id'].rating.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsRedactKey() {
  return ['conversations', '/conversations/redact', 'POST'] as const
}

export function usePostConversationsRedact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.redact.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.redact.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsRedactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.conversations.redact.$post> },
      ) => parseResponse(client.conversations.redact.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsIdMergeKey() {
  return ['conversations', '/conversations/:id/merge', 'POST'] as const
}

export function usePostConversationsIdMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':id']['merge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':id']['merge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsIdMergeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.conversations)[':id']['merge']['$post']> },
      ) => parseResponse(client.conversations[':id'].merge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsConversationIdConvertKey() {
  return ['conversations', '/conversations/:conversation_id/convert', 'POST'] as const
}

export function usePostConversationsConversationIdConvert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['convert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['convert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConversationIdConvertKey()
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
            (typeof client.conversations)[':conversation_id']['convert']['$post']
          >
        },
      ) =>
        parseResponse(client.conversations[':conversation_id'].convert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsDeletedKey(
  args: InferRequestType<typeof client.conversations.deleted.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['conversations', '/conversations/deleted', keyArgs] as const
}

export function useGetConversationsDeleted<TError = unknown>(
  args: InferRequestType<typeof client.conversations.deleted.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.deleted.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsDeletedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.deleted.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.deleted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsDeleted<TError = unknown>(
  args: InferRequestType<typeof client.conversations.deleted.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.deleted.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsDeletedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.deleted.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.deleted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsStreamTokenKey() {
  return ['conversations', '/conversations/stream/token', 'POST'] as const
}

export function usePostConversationsStreamToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.stream.token.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.stream.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsStreamTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.conversations.stream.token.$post> },
      ) => parseResponse(client.conversations.stream.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsStreamTokenKey() {
  return ['conversations', '/conversations/stream/token', 'DELETE'] as const
}

export function useDeleteConversationsStreamToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.conversations.stream.token.$delete>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.conversations.stream.token.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsStreamTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.conversations.stream.token.$delete> },
      ) => parseResponse(client.conversations.stream.token.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsAttributesKey(
  args: InferRequestType<typeof client.conversations.attributes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['conversations', '/conversations/attributes', keyArgs] as const
}

export function useGetConversationsAttributes<TError = unknown>(
  args: InferRequestType<typeof client.conversations.attributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.attributes.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.attributes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsAttributes<TError = unknown>(
  args: InferRequestType<typeof client.conversations.attributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.attributes.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.attributes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsAttributesKey() {
  return ['conversations', '/conversations/attributes', 'POST'] as const
}

export function usePostConversationsAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.attributes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.attributes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.conversations.attributes.$post> },
      ) => parseResponse(client.conversations.attributes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsAttributesIdKey(
  args: InferRequestType<(typeof client.conversations.attributes)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['conversations', '/conversations/attributes/:id', keyArgs] as const
}

export function useGetConversationsAttributesId<TError = unknown>(
  args: InferRequestType<(typeof client.conversations.attributes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsAttributesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.attributes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsAttributesId<TError = unknown>(
  args: InferRequestType<(typeof client.conversations.attributes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsAttributesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.attributes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutConversationsAttributesIdKey() {
  return ['conversations', '/conversations/attributes/:id', 'PUT'] as const
}

export function usePutConversationsAttributesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations.attributes)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversationsAttributesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.conversations.attributes)[':id']['$put']> },
      ) => parseResponse(client.conversations.attributes[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsAttributesIdKey() {
  return ['conversations', '/conversations/attributes/:id', 'DELETE'] as const
}

export function useDeleteConversationsAttributesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations.attributes)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsAttributesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations.attributes)[':id']['$delete']> },
      ) => parseResponse(client.conversations.attributes[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsAttributesIdOptionsKey() {
  return ['conversations', '/conversations/attributes/:id/options', 'POST'] as const
}

export function usePostConversationsAttributesIdOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.attributes)[':id']['options']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations.attributes)[':id']['options']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsAttributesIdOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conversations.attributes)[':id']['options']['$post']>
        },
      ) => parseResponse(client.conversations.attributes[':id'].options.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConversationsAttributesIdOptionsOptionIdKey() {
  return ['conversations', '/conversations/attributes/:id/options/:option_id', 'PUT'] as const
}

export function usePutConversationsAttributesIdOptionsOptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.conversations.attributes)[':id']['options'][':option_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversationsAttributesIdOptionsOptionIdKey()
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
            (typeof client.conversations.attributes)[':id']['options'][':option_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.conversations.attributes[':id'].options[':option_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsAttributesIdOptionsOptionIdKey() {
  return ['conversations', '/conversations/attributes/:id/options/:option_id', 'DELETE'] as const
}

export function useDeleteConversationsAttributesIdOptionsOptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.conversations.attributes)[':id']['options'][':option_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsAttributesIdOptionsOptionIdKey()
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
            (typeof client.conversations.attributes)[':id']['options'][':option_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.conversations.attributes[':id'].options[':option_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCustomObjectInstancesCustomObjectTypeIdentifierKey(
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

export function useGetCustomObjectInstancesCustomObjectTypeIdentifier<TError = unknown>(
  args: InferRequestType<
    (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomObjectInstancesCustomObjectTypeIdentifierKey(args)
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
                (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
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
          client.custom_object_instances[':custom_object_type_identifier'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomObjectInstancesCustomObjectTypeIdentifier<TError = unknown>(
  args: InferRequestType<
    (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomObjectInstancesCustomObjectTypeIdentifierKey(args)
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
                (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
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
          client.custom_object_instances[':custom_object_type_identifier'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCustomObjectInstancesCustomObjectTypeIdentifierKey() {
  return [
    'custom_object_instances',
    '/custom_object_instances/:custom_object_type_identifier',
    'POST',
  ] as const
}

export function usePostCustomObjectInstancesCustomObjectTypeIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.custom_object_instances)[':custom_object_type_identifier']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomObjectInstancesCustomObjectTypeIdentifierKey()
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
            (typeof client.custom_object_instances)[':custom_object_type_identifier']['$post']
          >
        },
      ) =>
        parseResponse(
          client.custom_object_instances[':custom_object_type_identifier'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCustomObjectInstancesCustomObjectTypeIdentifierKey() {
  return [
    'custom_object_instances',
    '/custom_object_instances/:custom_object_type_identifier',
    'DELETE',
  ] as const
}

export function useDeleteCustomObjectInstancesCustomObjectTypeIdentifier<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.custom_object_instances)[':custom_object_type_identifier']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomObjectInstancesCustomObjectTypeIdentifierKey()
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
            (typeof client.custom_object_instances)[':custom_object_type_identifier']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.custom_object_instances[':custom_object_type_identifier'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdKey(
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

export function useGetCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdKey(args)
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
                (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
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
          client.custom_object_instances[':custom_object_type_identifier'][
            ':custom_object_instance_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdKey(args)
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
                (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
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
          client.custom_object_instances[':custom_object_type_identifier'][
            ':custom_object_instance_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdKey() {
  return [
    'custom_object_instances',
    '/custom_object_instances/:custom_object_type_identifier/:custom_object_instance_id',
    'DELETE',
  ] as const
}

export function useDeleteCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdKey()
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
            (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.custom_object_instances[':custom_object_type_identifier'][
            ':custom_object_instance_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataAttributesKey(
  args: InferRequestType<typeof client.data_attributes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['data_attributes', '/data_attributes', keyArgs] as const
}

export function useGetDataAttributes<TError = unknown>(
  args: InferRequestType<typeof client.data_attributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_attributes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDataAttributesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_attributes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data_attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataAttributes<TError = unknown>(
  args: InferRequestType<typeof client.data_attributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_attributes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDataAttributesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_attributes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data_attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDataAttributesKey() {
  return ['data_attributes', '/data_attributes', 'POST'] as const
}

export function usePostDataAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_attributes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.data_attributes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.data_attributes.$post> }) =>
        parseResponse(client.data_attributes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDataAttributesDataAttributeIdKey() {
  return ['data_attributes', '/data_attributes/:data_attribute_id', 'PUT'] as const
}

export function usePutDataAttributesDataAttributeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.data_attributes)[':data_attribute_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.data_attributes)[':data_attribute_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataAttributesDataAttributeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.data_attributes)[':data_attribute_id']['$put']> },
      ) => parseResponse(client.data_attributes[':data_attribute_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataConnectorsKey(
  args: InferRequestType<typeof client.data_connectors.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['data_connectors', '/data_connectors', keyArgs] as const
}

export function useGetDataConnectors<TError = unknown>(
  args: InferRequestType<typeof client.data_connectors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_connectors.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDataConnectorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_connectors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data_connectors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataConnectors<TError = unknown>(
  args: InferRequestType<typeof client.data_connectors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_connectors.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDataConnectorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_connectors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data_connectors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDataConnectorsKey() {
  return ['data_connectors', '/data_connectors', 'POST'] as const
}

export function usePostDataConnectors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data_connectors.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.data_connectors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataConnectorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.data_connectors.$post> }) =>
        parseResponse(client.data_connectors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataConnectorsIdKey(
  args: InferRequestType<(typeof client.data_connectors)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['data_connectors', '/data_connectors/:id', keyArgs] as const
}

export function useGetDataConnectorsId<TError = unknown>(
  args: InferRequestType<(typeof client.data_connectors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.data_connectors)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataConnectorsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.data_connectors)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data_connectors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataConnectorsId<TError = unknown>(
  args: InferRequestType<(typeof client.data_connectors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.data_connectors)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataConnectorsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.data_connectors)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data_connectors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDataConnectorsIdKey() {
  return ['data_connectors', '/data_connectors/:id', 'DELETE'] as const
}

export function useDeleteDataConnectorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.data_connectors)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.data_connectors)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDataConnectorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.data_connectors)[':id']['$delete']> },
      ) => parseResponse(client.data_connectors[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDataConnectorsIdKey() {
  return ['data_connectors', '/data_connectors/:id', 'PATCH'] as const
}

export function usePatchDataConnectorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.data_connectors)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.data_connectors)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDataConnectorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.data_connectors)[':id']['$patch']> },
      ) => parseResponse(client.data_connectors[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataConnectorsDataConnectorIdExecutionResultsKey(
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

export function useGetDataConnectorsDataConnectorIdExecutionResults<TError = unknown>(
  args: InferRequestType<
    (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataConnectorsDataConnectorIdExecutionResultsKey(args)
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
                (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
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
          client.data_connectors[':data_connector_id'].execution_results.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataConnectorsDataConnectorIdExecutionResults<TError = unknown>(
  args: InferRequestType<
    (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataConnectorsDataConnectorIdExecutionResultsKey(args)
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
                (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
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
          client.data_connectors[':data_connector_id'].execution_results.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDataConnectorsDataConnectorIdExecutionResultsIdKey(
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

export function useGetDataConnectorsDataConnectorIdExecutionResultsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataConnectorsDataConnectorIdExecutionResultsIdKey(args)
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
                (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
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
          client.data_connectors[':data_connector_id'].execution_results[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataConnectorsDataConnectorIdExecutionResultsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataConnectorsDataConnectorIdExecutionResultsIdKey(args)
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
                (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
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
          client.data_connectors[':data_connector_id'].execution_results[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDataConnectorsIdVersionsKey(
  args: InferRequestType<(typeof client.data_connectors)[':id']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['data_connectors', '/data_connectors/:id/versions', keyArgs] as const
}

export function useGetDataConnectorsIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.data_connectors)[':id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data_connectors)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataConnectorsIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data_connectors)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data_connectors[':id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataConnectorsIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.data_connectors)[':id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data_connectors)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataConnectorsIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data_connectors)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data_connectors[':id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDataConnectorsIdVersionsVersionIdKey(
  args: InferRequestType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['data_connectors', '/data_connectors/:id/versions/:version_id', keyArgs] as const
}

export function useGetDataConnectorsIdVersionsVersionId<TError = unknown>(
  args: InferRequestType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>
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
        ? getGetDataConnectorsIdVersionsVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.data_connectors[':id'].versions[':version_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataConnectorsIdVersionsVersionId<TError = unknown>(
  args: InferRequestType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>
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
        ? getGetDataConnectorsIdVersionsVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.data_connectors[':id'].versions[':version_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchDataConnectorsIdVersionsVersionIdKey() {
  return ['data_connectors', '/data_connectors/:id/versions/:version_id', 'PATCH'] as const
}

export function usePatchDataConnectorsIdVersionsVersionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDataConnectorsIdVersionsVersionIdKey()
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
            (typeof client.data_connectors)[':id']['versions'][':version_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.data_connectors[':id'].versions[':version_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEventsKey(args: InferRequestType<typeof client.events.$get>) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events', keyArgs] as const
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

export function getPostEventsKey() {
  return ['events', '/events', 'POST'] as const
}

export function usePostEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.events.$post> }) =>
        parseResponse(client.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsSummariesKey() {
  return ['events', '/events/summaries', 'POST'] as const
}

export function usePostEventsSummaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.summaries.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.events.summaries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsSummariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.events.summaries.$post> }) =>
        parseResponse(client.events.summaries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportContentDataKey() {
  return ['export', '/export/content/data', 'POST'] as const
}

export function usePostExportContentData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.content.data.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.export.content.data.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportContentDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.export.content.data.$post> }) =>
        parseResponse(client.export.content.data.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExportContentDataJobIdentifierKey(
  args: InferRequestType<(typeof client.export.content.data)[':job_identifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['export', '/export/content/data/:job_identifier', keyArgs] as const
}

export function useGetExportContentDataJobIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.export.content.data)[':job_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.content.data)[':job_identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExportContentDataJobIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.content.data)[':job_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.export.content.data[':job_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportContentDataJobIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.export.content.data)[':job_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.content.data)[':job_identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExportContentDataJobIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.content.data)[':job_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.export.content.data[':job_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExportCancelJobIdentifierKey() {
  return ['export', '/export/cancel/:job_identifier', 'POST'] as const
}

export function usePostExportCancelJobIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.export.cancel)[':job_identifier']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.export.cancel)[':job_identifier']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportCancelJobIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.export.cancel)[':job_identifier']['$post']> },
      ) => parseResponse(client.export.cancel[':job_identifier'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDownloadContentDataJobIdentifierKey(
  args: InferRequestType<(typeof client.download.content.data)[':job_identifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['download', '/download/content/data/:job_identifier', keyArgs] as const
}

export function useGetDownloadContentDataJobIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.download.content.data)[':job_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.download.content.data)[':job_identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDownloadContentDataJobIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.download.content.data)[':job_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.download.content.data[':job_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDownloadContentDataJobIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.download.content.data)[':job_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.download.content.data)[':job_identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDownloadContentDataJobIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.download.content.data)[':job_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.download.content.data[':job_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsStatusJobIdKey(
  args: InferRequestType<(typeof client.jobs.status)[':job_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs/status/:job_id', keyArgs] as const
}

export function useGetJobsStatusJobId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs.status)[':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs.status)[':job_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetJobsStatusJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs.status)[':job_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs.status[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsStatusJobId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs.status)[':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs.status)[':job_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetJobsStatusJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs.status)[':job_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs.status[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMessagesKey() {
  return ['messages', '/messages', 'POST'] as const
}

export function usePostMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.messages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.messages.$post> }) =>
        parseResponse(client.messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagesWhatsappStatusKey(
  args: InferRequestType<typeof client.messages.whatsapp.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['messages', '/messages/whatsapp/status', keyArgs] as const
}

export function useGetMessagesWhatsappStatus<TError = unknown>(
  args: InferRequestType<typeof client.messages.whatsapp.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messages.whatsapp.status.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagesWhatsappStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messages.whatsapp.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages.whatsapp.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagesWhatsappStatus<TError = unknown>(
  args: InferRequestType<typeof client.messages.whatsapp.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messages.whatsapp.status.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessagesWhatsappStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messages.whatsapp.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages.whatsapp.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessagesStatusKey(
  args: InferRequestType<typeof client.messages.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['messages', '/messages/status', keyArgs] as const
}

export function useGetMessagesStatus<TError = unknown>(
  args: InferRequestType<typeof client.messages.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.status.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMessagesStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagesStatus<TError = unknown>(
  args: InferRequestType<typeof client.messages.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.status.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMessagesStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNewsNewsItemsKey(args: InferRequestType<typeof client.news.news_items.$get>) {
  const { header: _, ...keyArgs } = args
  return ['news', '/news/news_items', keyArgs] as const
}

export function useGetNewsNewsItems<TError = unknown>(
  args: InferRequestType<typeof client.news.news_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.news_items.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNewsNewsItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.news_items.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.news.news_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNewsNewsItems<TError = unknown>(
  args: InferRequestType<typeof client.news.news_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.news_items.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNewsNewsItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.news_items.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.news.news_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNewsNewsItemsKey() {
  return ['news', '/news/news_items', 'POST'] as const
}

export function usePostNewsNewsItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.news_items.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.news.news_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNewsNewsItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.news.news_items.$post> }) =>
        parseResponse(client.news.news_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNewsNewsItemsNewsItemIdKey(
  args: InferRequestType<(typeof client.news.news_items)[':news_item_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['news', '/news/news_items/:news_item_id', keyArgs] as const
}

export function useGetNewsNewsItemsNewsItemId<TError = unknown>(
  args: InferRequestType<(typeof client.news.news_items)[':news_item_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.news.news_items)[':news_item_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNewsNewsItemsNewsItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.news.news_items)[':news_item_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.news.news_items[':news_item_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNewsNewsItemsNewsItemId<TError = unknown>(
  args: InferRequestType<(typeof client.news.news_items)[':news_item_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.news.news_items)[':news_item_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNewsNewsItemsNewsItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.news.news_items)[':news_item_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.news.news_items[':news_item_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNewsNewsItemsNewsItemIdKey() {
  return ['news', '/news/news_items/:news_item_id', 'PUT'] as const
}

export function usePutNewsNewsItemsNewsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.news.news_items)[':news_item_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.news.news_items)[':news_item_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNewsNewsItemsNewsItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.news.news_items)[':news_item_id']['$put']> },
      ) => parseResponse(client.news.news_items[':news_item_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNewsNewsItemsNewsItemIdKey() {
  return ['news', '/news/news_items/:news_item_id', 'DELETE'] as const
}

export function useDeleteNewsNewsItemsNewsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.news.news_items)[':news_item_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.news.news_items)[':news_item_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNewsNewsItemsNewsItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.news.news_items)[':news_item_id']['$delete']> },
      ) => parseResponse(client.news.news_items[':news_item_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNewsNewsfeedsNewsfeedIdItemsKey(
  args: InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['news', '/news/newsfeeds/:newsfeed_id/items', keyArgs] as const
}

export function useGetNewsNewsfeedsNewsfeedIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNewsNewsfeedsNewsfeedIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.news.newsfeeds[':newsfeed_id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNewsNewsfeedsNewsfeedIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNewsNewsfeedsNewsfeedIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.news.newsfeeds[':newsfeed_id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNewsNewsfeedsKey(args: InferRequestType<typeof client.news.newsfeeds.$get>) {
  const { header: _, ...keyArgs } = args
  return ['news', '/news/newsfeeds', keyArgs] as const
}

export function useGetNewsNewsfeeds<TError = unknown>(
  args: InferRequestType<typeof client.news.newsfeeds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.newsfeeds.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNewsNewsfeedsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.newsfeeds.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.news.newsfeeds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNewsNewsfeeds<TError = unknown>(
  args: InferRequestType<typeof client.news.newsfeeds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.newsfeeds.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNewsNewsfeedsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.news.newsfeeds.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.news.newsfeeds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNewsNewsfeedsNewsfeedIdKey(
  args: InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['news', '/news/newsfeeds/:newsfeed_id', keyArgs] as const
}

export function useGetNewsNewsfeedsNewsfeedId<TError = unknown>(
  args: InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNewsNewsfeedsNewsfeedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.news.newsfeeds[':newsfeed_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNewsNewsfeedsNewsfeedId<TError = unknown>(
  args: InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNewsNewsfeedsNewsfeedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.news.newsfeeds[':newsfeed_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotesNoteIdKey(
  args: InferRequestType<(typeof client.notes)[':note_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notes', '/notes/:note_id', keyArgs] as const
}

export function useGetNotesNoteId<TError = unknown>(
  args: InferRequestType<(typeof client.notes)[':note_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':note_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotesNoteIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':note_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notes[':note_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotesNoteId<TError = unknown>(
  args: InferRequestType<(typeof client.notes)[':note_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':note_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotesNoteIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':note_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notes[':note_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteNotesNoteIdKey() {
  return ['notes', '/notes/:note_id', 'DELETE'] as const
}

export function useDeleteNotesNoteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':note_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notes)[':note_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNotesNoteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.notes)[':note_id']['$delete']> },
      ) => parseResponse(client.notes[':note_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSegmentsKey(args: InferRequestType<typeof client.segments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['segments', '/segments', keyArgs] as const
}

export function useGetSegments<TError = unknown>(
  args: InferRequestType<typeof client.segments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSegmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.segments.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSegments<TError = unknown>(
  args: InferRequestType<typeof client.segments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSegmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.segments.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSegmentsSegmentIdKey(
  args: InferRequestType<(typeof client.segments)[':segment_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['segments', '/segments/:segment_id', keyArgs] as const
}

export function useGetSegmentsSegmentId<TError = unknown>(
  args: InferRequestType<(typeof client.segments)[':segment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':segment_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSegmentsSegmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':segment_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.segments[':segment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSegmentsSegmentId<TError = unknown>(
  args: InferRequestType<(typeof client.segments)[':segment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':segment_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSegmentsSegmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':segment_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.segments[':segment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionTypesKey(
  args: InferRequestType<typeof client.subscription_types.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscription_types', '/subscription_types', keyArgs] as const
}

export function useGetSubscriptionTypes<TError = unknown>(
  args: InferRequestType<typeof client.subscription_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription_types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubscriptionTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription_types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscription_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionTypes<TError = unknown>(
  args: InferRequestType<typeof client.subscription_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription_types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubscriptionTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription_types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscription_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionTypesIdKey(
  args: InferRequestType<(typeof client.subscription_types)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscription_types', '/subscription_types/:id', keyArgs] as const
}

export function useGetSubscriptionTypesId<TError = unknown>(
  args: InferRequestType<(typeof client.subscription_types)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscription_types)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubscriptionTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscription_types)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscription_types[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionTypesId<TError = unknown>(
  args: InferRequestType<(typeof client.subscription_types)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscription_types)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubscriptionTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscription_types)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscription_types[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhoneCallRedirectsKey() {
  return ['phone_call_redirects', '/phone_call_redirects', 'POST'] as const
}

export function usePostPhoneCallRedirects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone_call_redirects.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.phone_call_redirects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneCallRedirectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.phone_call_redirects.$post> },
      ) => parseResponse(client.phone_call_redirects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCallsKey(args: InferRequestType<typeof client.calls.$get>) {
  const { header: _, ...keyArgs } = args
  return ['calls', '/calls', keyArgs] as const
}

export function useGetCalls<TError = unknown>(
  args: InferRequestType<typeof client.calls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCallsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.calls.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCalls<TError = unknown>(
  args: InferRequestType<typeof client.calls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCallsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.calls.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetCallsCallIdKey(
  args: InferRequestType<(typeof client.calls)[':call_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calls', '/calls/:call_id', keyArgs] as const
}

export function useGetCallsCallId<TError = unknown>(
  args: InferRequestType<(typeof client.calls)[':call_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCallsCallIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.calls[':call_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallsCallId<TError = unknown>(
  args: InferRequestType<(typeof client.calls)[':call_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCallsCallIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.calls[':call_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCallsCallIdRecordingKey(
  args: InferRequestType<(typeof client.calls)[':call_id']['recording']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calls', '/calls/:call_id/recording', keyArgs] as const
}

export function useGetCallsCallIdRecording<TError = unknown>(
  args: InferRequestType<(typeof client.calls)[':call_id']['recording']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calls)[':call_id']['recording']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCallsCallIdRecordingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calls)[':call_id']['recording']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.calls[':call_id'].recording.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallsCallIdRecording<TError = unknown>(
  args: InferRequestType<(typeof client.calls)[':call_id']['recording']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calls)[':call_id']['recording']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCallsCallIdRecordingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calls)[':call_id']['recording']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.calls[':call_id'].recording.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCallsIdTranscriptKey(
  args: InferRequestType<(typeof client.calls)[':id']['transcript']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calls', '/calls/:id/transcript', keyArgs] as const
}

export function useGetCallsIdTranscript<TError = unknown>(
  args: InferRequestType<(typeof client.calls)[':id']['transcript']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calls)[':id']['transcript']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCallsIdTranscriptKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calls)[':id']['transcript']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.calls[':id'].transcript.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallsIdTranscript<TError = unknown>(
  args: InferRequestType<(typeof client.calls)[':id']['transcript']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calls)[':id']['transcript']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCallsIdTranscriptKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calls)[':id']['transcript']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.calls[':id'].transcript.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCallsSearchKey() {
  return ['calls', '/calls/search', 'POST'] as const
}

export function usePostCallsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.calls.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.calls.search.$post> }) =>
        parseResponse(client.calls.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsKey(args: InferRequestType<typeof client.tags.$get>) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags', keyArgs] as const
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

export function getGetTagsTagIdKey(
  args: InferRequestType<(typeof client.tags)[':tag_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:tag_id', keyArgs] as const
}

export function useGetTagsTagId<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tag_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsTagIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tag_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTagId<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tag_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsTagIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tag_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTagsTagIdKey() {
  return ['tags', '/tags/:tag_id', 'DELETE'] as const
}

export function useDeleteTagsTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':tag_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':tag_id']['$delete']> },
      ) => parseResponse(client.tags[':tag_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsKey(args: InferRequestType<typeof client.teams.$get>) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams', keyArgs] as const
}

export function useGetTeams<TError = unknown>(
  args: InferRequestType<typeof client.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.teams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTeams<TError = unknown>(
  args: InferRequestType<typeof client.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.teams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTeamsTeamIdKey(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:team_id', keyArgs] as const
}

export function useGetTeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsTeamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsTeamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsTeamIdMetricsKey(
  args: InferRequestType<(typeof client.teams)[':team_id']['metrics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['teams', '/teams/:team_id/metrics', keyArgs] as const
}

export function useGetTeamsTeamIdMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id']['metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['metrics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['metrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id'].metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamIdMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id']['metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['metrics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['metrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id'].metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTicketStatesKey(args: InferRequestType<typeof client.ticket_states.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ticket_states', '/ticket_states', keyArgs] as const
}

export function useGetTicketStates<TError = unknown>(
  args: InferRequestType<typeof client.ticket_states.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_states.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTicketStatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_states.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ticket_states.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTicketStates<TError = unknown>(
  args: InferRequestType<typeof client.ticket_states.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_states.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTicketStatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_states.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ticket_states.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTicketTypesTicketTypeIdAttributesKey() {
  return ['ticket_types', '/ticket_types/:ticket_type_id/attributes', 'POST'] as const
}

export function usePostTicketTypesTicketTypeIdAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['attributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTicketTypesTicketTypeIdAttributesKey()
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
            (typeof client.ticket_types)[':ticket_type_id']['attributes']['$post']
          >
        },
      ) =>
        parseResponse(client.ticket_types[':ticket_type_id'].attributes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTicketTypesTicketTypeIdAttributesAttributeIdKey() {
  return ['ticket_types', '/ticket_types/:ticket_type_id/attributes/:attribute_id', 'PUT'] as const
}

export function usePutTicketTypesTicketTypeIdAttributesAttributeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ticket_types)[':ticket_type_id']['attributes'][':attribute_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTicketTypesTicketTypeIdAttributesAttributeIdKey()
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
            (typeof client.ticket_types)[':ticket_type_id']['attributes'][':attribute_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ticket_types[':ticket_type_id'].attributes[':attribute_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTicketTypesKey(args: InferRequestType<typeof client.ticket_types.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ticket_types', '/ticket_types', keyArgs] as const
}

export function useGetTicketTypes<TError = unknown>(
  args: InferRequestType<typeof client.ticket_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTicketTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ticket_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTicketTypes<TError = unknown>(
  args: InferRequestType<typeof client.ticket_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTicketTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ticket_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTicketTypesKey() {
  return ['ticket_types', '/ticket_types', 'POST'] as const
}

export function usePostTicketTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ticket_types.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ticket_types.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTicketTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ticket_types.$post> }) =>
        parseResponse(client.ticket_types.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTicketTypesTicketTypeIdKey(
  args: InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ticket_types', '/ticket_types/:ticket_type_id', keyArgs] as const
}

export function useGetTicketTypesTicketTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ticket_types)[':ticket_type_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTicketTypesTicketTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ticket_types)[':ticket_type_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ticket_types[':ticket_type_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTicketTypesTicketTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ticket_types)[':ticket_type_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTicketTypesTicketTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ticket_types)[':ticket_type_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ticket_types[':ticket_type_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTicketTypesTicketTypeIdKey() {
  return ['ticket_types', '/ticket_types/:ticket_type_id', 'PUT'] as const
}

export function usePutTicketTypesTicketTypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ticket_types)[':ticket_type_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTicketTypesTicketTypeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['$put']> },
      ) => parseResponse(client.ticket_types[':ticket_type_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTicketsTicketIdReplyKey() {
  return ['tickets', '/tickets/:ticket_id/reply', 'POST'] as const
}

export function usePostTicketsTicketIdReply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['reply']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tickets)[':ticket_id']['reply']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTicketsTicketIdReplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tickets)[':ticket_id']['reply']['$post']> },
      ) => parseResponse(client.tickets[':ticket_id'].reply.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTicketsTicketIdTagsKey() {
  return ['tickets', '/tickets/:ticket_id/tags', 'POST'] as const
}

export function usePostTicketsTicketIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tickets)[':ticket_id']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTicketsTicketIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tickets)[':ticket_id']['tags']['$post']> },
      ) => parseResponse(client.tickets[':ticket_id'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTicketsTicketIdTagsTagIdKey() {
  return ['tickets', '/tickets/:ticket_id/tags/:tag_id', 'DELETE'] as const
}

export function useDeleteTicketsTicketIdTagsTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['tags'][':tag_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tickets)[':ticket_id']['tags'][':tag_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTicketsTicketIdTagsTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tickets)[':ticket_id']['tags'][':tag_id']['$delete']>
        },
      ) => parseResponse(client.tickets[':ticket_id'].tags[':tag_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTicketsTicketIdLinkedConversationsKey() {
  return ['tickets', '/tickets/:ticket_id/linked_conversations', 'POST'] as const
}

export function usePostTicketsTicketIdLinkedConversations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.tickets)[':ticket_id']['linked_conversations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTicketsTicketIdLinkedConversationsKey()
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
            (typeof client.tickets)[':ticket_id']['linked_conversations']['$post']
          >
        },
      ) =>
        parseResponse(client.tickets[':ticket_id'].linked_conversations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTicketsTicketIdLinkedConversationsIdKey() {
  return ['tickets', '/tickets/:ticket_id/linked_conversations/:id', 'DELETE'] as const
}

export function useDeleteTicketsTicketIdLinkedConversationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.tickets)[':ticket_id']['linked_conversations'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTicketsTicketIdLinkedConversationsIdKey()
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
            (typeof client.tickets)[':ticket_id']['linked_conversations'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.tickets[':ticket_id'].linked_conversations[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTicketsKey() {
  return ['tickets', '/tickets', 'POST'] as const
}

export function usePostTickets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tickets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tickets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTicketsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tickets.$post> }) =>
        parseResponse(client.tickets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTicketsEnqueueKey() {
  return ['tickets', '/tickets/enqueue', 'POST'] as const
}

export function usePostTicketsEnqueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tickets.enqueue.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tickets.enqueue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTicketsEnqueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tickets.enqueue.$post> }) =>
        parseResponse(client.tickets.enqueue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTicketsTicketIdKey(
  args: InferRequestType<(typeof client.tickets)[':ticket_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tickets', '/tickets/:ticket_id', keyArgs] as const
}

export function useGetTicketsTicketId<TError = unknown>(
  args: InferRequestType<(typeof client.tickets)[':ticket_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTicketsTicketIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tickets[':ticket_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTicketsTicketId<TError = unknown>(
  args: InferRequestType<(typeof client.tickets)[':ticket_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTicketsTicketIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tickets[':ticket_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTicketsTicketIdKey() {
  return ['tickets', '/tickets/:ticket_id', 'PUT'] as const
}

export function usePutTicketsTicketId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tickets)[':ticket_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTicketsTicketIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tickets)[':ticket_id']['$put']> },
      ) => parseResponse(client.tickets[':ticket_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTicketsTicketIdKey() {
  return ['tickets', '/tickets/:ticket_id', 'DELETE'] as const
}

export function useDeleteTicketsTicketId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tickets)[':ticket_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTicketsTicketIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tickets)[':ticket_id']['$delete']> },
      ) => parseResponse(client.tickets[':ticket_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTicketsTicketIdChangeTypeKey() {
  return ['tickets', '/tickets/:ticket_id/change_type', 'POST'] as const
}

export function usePostTicketsTicketIdChangeType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tickets)[':ticket_id']['change_type']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tickets)[':ticket_id']['change_type']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTicketsTicketIdChangeTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tickets)[':ticket_id']['change_type']['$post']> },
      ) => parseResponse(client.tickets[':ticket_id'].change_type.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTicketsSearchKey() {
  return ['tickets', '/tickets/search', 'POST'] as const
}

export function usePostTicketsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tickets.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tickets.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTicketsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tickets.search.$post> }) =>
        parseResponse(client.tickets.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVisitorsKey(args: InferRequestType<typeof client.visitors.$get>) {
  const { header: _, ...keyArgs } = args
  return ['visitors', '/visitors', keyArgs] as const
}

export function useGetVisitors<TError = unknown>(
  args: InferRequestType<typeof client.visitors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVisitorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.visitors.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVisitors<TError = unknown>(
  args: InferRequestType<typeof client.visitors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVisitorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.visitors.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutVisitorsKey() {
  return ['visitors', '/visitors', 'PUT'] as const
}

export function usePutVisitors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.visitors.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVisitorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.visitors.$put> }) =>
        parseResponse(client.visitors.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVisitorsConvertKey() {
  return ['visitors', '/visitors/convert', 'POST'] as const
}

export function usePostVisitorsConvert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.visitors.convert.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.visitors.convert.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVisitorsConvertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.visitors.convert.$post> }) =>
        parseResponse(client.visitors.convert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBrandsKey(args: InferRequestType<typeof client.brands.$get>) {
  const { header: _, ...keyArgs } = args
  return ['brands', '/brands', keyArgs] as const
}

export function useGetBrands<TError = unknown>(
  args: InferRequestType<typeof client.brands.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brands.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrandsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brands.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.brands.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBrands<TError = unknown>(
  args: InferRequestType<typeof client.brands.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brands.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrandsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brands.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.brands.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBrandsIdKey(args: InferRequestType<(typeof client.brands)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['brands', '/brands/:id', keyArgs] as const
}

export function useGetBrandsId<TError = unknown>(
  args: InferRequestType<(typeof client.brands)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.brands)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrandsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.brands)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.brands[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrandsId<TError = unknown>(
  args: InferRequestType<(typeof client.brands)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.brands)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrandsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.brands)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.brands[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmailsKey(args: InferRequestType<typeof client.emails.$get>) {
  const { header: _, ...keyArgs } = args
  return ['emails', '/emails', keyArgs] as const
}

export function useGetEmails<TError = unknown>(
  args: InferRequestType<typeof client.emails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.emails.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEmails<TError = unknown>(
  args: InferRequestType<typeof client.emails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.emails.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEmailsIdKey(args: InferRequestType<(typeof client.emails)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['emails', '/emails/:id', keyArgs] as const
}

export function useGetEmailsId<TError = unknown>(
  args: InferRequestType<(typeof client.emails)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emails[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailsId<TError = unknown>(
  args: InferRequestType<(typeof client.emails)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emails[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFinVoiceRegisterKey() {
  return ['fin_voice', '/fin_voice/register', 'POST'] as const
}

export function usePostFinVoiceRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fin_voice.register.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.fin_voice.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFinVoiceRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fin_voice.register.$post> }) =>
        parseResponse(client.fin_voice.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFinVoiceCollectIdKey(
  args: InferRequestType<(typeof client.fin_voice.collect)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fin_voice', '/fin_voice/collect/:id', keyArgs] as const
}

export function useGetFinVoiceCollectId<TError = unknown>(
  args: InferRequestType<(typeof client.fin_voice.collect)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fin_voice.collect)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFinVoiceCollectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fin_voice.collect)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fin_voice.collect[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFinVoiceCollectId<TError = unknown>(
  args: InferRequestType<(typeof client.fin_voice.collect)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fin_voice.collect)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFinVoiceCollectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fin_voice.collect)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fin_voice.collect[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFinVoiceExternalIdExternalIdKey(
  args: InferRequestType<(typeof client.fin_voice.external_id)[':external_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fin_voice', '/fin_voice/external_id/:external_id', keyArgs] as const
}

export function useGetFinVoiceExternalIdExternalId<TError = unknown>(
  args: InferRequestType<(typeof client.fin_voice.external_id)[':external_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fin_voice.external_id)[':external_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFinVoiceExternalIdExternalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fin_voice.external_id)[':external_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.fin_voice.external_id[':external_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFinVoiceExternalIdExternalId<TError = unknown>(
  args: InferRequestType<(typeof client.fin_voice.external_id)[':external_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fin_voice.external_id)[':external_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFinVoiceExternalIdExternalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fin_voice.external_id)[':external_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.fin_voice.external_id[':external_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFinVoicePhoneNumberPhoneNumberKey(
  args: InferRequestType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fin_voice', '/fin_voice/phone_number/:phone_number', keyArgs] as const
}

export function useGetFinVoicePhoneNumberPhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFinVoicePhoneNumberPhoneNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.fin_voice.phone_number[':phone_number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFinVoicePhoneNumberPhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFinVoicePhoneNumberPhoneNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.fin_voice.phone_number[':phone_number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFinVoiceConversationConversationIdKey(
  args: InferRequestType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fin_voice', '/fin_voice/conversation/:conversation_id', keyArgs] as const
}

export function useGetFinVoiceConversationConversationId<TError = unknown>(
  args: InferRequestType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFinVoiceConversationConversationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.fin_voice.conversation[':conversation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFinVoiceConversationConversationId<TError = unknown>(
  args: InferRequestType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFinVoiceConversationConversationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.fin_voice.conversation[':conversation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportWorkflowsIdKey(
  args: InferRequestType<(typeof client.export.workflows)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['export', '/export/workflows/:id', keyArgs] as const
}

export function useGetExportWorkflowsId<TError = unknown>(
  args: InferRequestType<(typeof client.export.workflows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.export.workflows)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExportWorkflowsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.export.workflows)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.workflows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportWorkflowsId<TError = unknown>(
  args: InferRequestType<(typeof client.export.workflows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.export.workflows)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExportWorkflowsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.export.workflows)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.workflows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
