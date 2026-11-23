import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionNotificationExportResultsKey() {
  return ['action_notification_export_results'] as const
}

export function getActionNotificationExportsKey() {
  return ['action_notification_exports'] as const
}

export function getActionWebhookFailuresKey() {
  return ['action_webhook_failures'] as const
}

export function getApiKeyKey() {
  return ['api_key'] as const
}

export function getApiKeysKey() {
  return ['api_keys'] as const
}

export function getAppsKey() {
  return ['apps'] as const
}

export function getAs2IncomingMessagesKey() {
  return ['as2_incoming_messages'] as const
}

export function getAs2OutgoingMessagesKey() {
  return ['as2_outgoing_messages'] as const
}

export function getAs2PartnersKey() {
  return ['as2_partners'] as const
}

export function getAs2StationsKey() {
  return ['as2_stations'] as const
}

export function getAutomationRunsKey() {
  return ['automation_runs'] as const
}

export function getAutomationsKey() {
  return ['automations'] as const
}

export function getBandwidthSnapshotsKey() {
  return ['bandwidth_snapshots'] as const
}

export function getBehaviorsKey() {
  return ['behaviors'] as const
}

export function getBundleDownloadsKey() {
  return ['bundle_downloads'] as const
}

export function getBundleNotificationsKey() {
  return ['bundle_notifications'] as const
}

export function getBundleRecipientsKey() {
  return ['bundle_recipients'] as const
}

export function getBundleRegistrationsKey() {
  return ['bundle_registrations'] as const
}

export function getBundlesKey() {
  return ['bundles'] as const
}

export function getClickwrapsKey() {
  return ['clickwraps'] as const
}

export function getDnsRecordsKey() {
  return ['dns_records'] as const
}

export function getExternalEventsKey() {
  return ['external_events'] as const
}

export function getFileActionsKey() {
  return ['file_actions'] as const
}

export function getFileCommentReactionsKey() {
  return ['file_comment_reactions'] as const
}

export function getFileCommentsKey() {
  return ['file_comments'] as const
}

export function getFileMigrationsKey() {
  return ['file_migrations'] as const
}

export function getFilesKey() {
  return ['files'] as const
}

export function getFoldersKey() {
  return ['folders'] as const
}

export function getFormFieldSetsKey() {
  return ['form_field_sets'] as const
}

export function getGroupUsersKey() {
  return ['group_users'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getHistoryKey() {
  return ['history'] as const
}

export function getHistoryExportResultsKey() {
  return ['history_export_results'] as const
}

export function getHistoryExportsKey() {
  return ['history_exports'] as const
}

export function getInboxRecipientsKey() {
  return ['inbox_recipients'] as const
}

export function getInboxRegistrationsKey() {
  return ['inbox_registrations'] as const
}

export function getInboxUploadsKey() {
  return ['inbox_uploads'] as const
}

export function getInvoicesKey() {
  return ['invoices'] as const
}

export function getIpAddressesKey() {
  return ['ip_addresses'] as const
}

export function getLocksKey() {
  return ['locks'] as const
}

export function getMessageCommentReactionsKey() {
  return ['message_comment_reactions'] as const
}

export function getMessageCommentsKey() {
  return ['message_comments'] as const
}

export function getMessageReactionsKey() {
  return ['message_reactions'] as const
}

export function getMessagesKey() {
  return ['messages'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getPaymentsKey() {
  return ['payments'] as const
}

export function getPermissionsKey() {
  return ['permissions'] as const
}

export function getPrioritiesKey() {
  return ['priorities'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getPublicKeysKey() {
  return ['public_keys'] as const
}

export function getRemoteBandwidthSnapshotsKey() {
  return ['remote_bandwidth_snapshots'] as const
}

export function getRemoteServersKey() {
  return ['remote_servers'] as const
}

export function getRequestsKey() {
  return ['requests'] as const
}

export function getSessionsKey() {
  return ['sessions'] as const
}

export function getSettingsChangesKey() {
  return ['settings_changes'] as const
}

export function getSftpHostKeysKey() {
  return ['sftp_host_keys'] as const
}

export function getSiteKey() {
  return ['site'] as const
}

export function getSsoStrategiesKey() {
  return ['sso_strategies'] as const
}

export function getStylesKey() {
  return ['styles'] as const
}

export function getUsageDailySnapshotsKey() {
  return ['usage_daily_snapshots'] as const
}

export function getUsageSnapshotsKey() {
  return ['usage_snapshots'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getUserCipherUsesKey() {
  return ['user_cipher_uses'] as const
}

export function getUserRequestsKey() {
  return ['user_requests'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWebhookTestsKey() {
  return ['webhook_tests'] as const
}

export function getGetActionNotificationExportResultsKey(
  args: InferRequestType<typeof client.action_notification_export_results.$get>,
) {
  return [
    'action_notification_export_results',
    '/action_notification_export_results',
    args,
  ] as const
}

export function useGetActionNotificationExportResults<TError = unknown>(
  args: InferRequestType<typeof client.action_notification_export_results.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action_notification_export_results.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionNotificationExportResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action_notification_export_results.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.action_notification_export_results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionNotificationExportResults<TError = unknown>(
  args: InferRequestType<typeof client.action_notification_export_results.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action_notification_export_results.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionNotificationExportResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action_notification_export_results.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.action_notification_export_results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionNotificationExportsKey() {
  return ['action_notification_exports', '/action_notification_exports', 'POST'] as const
}

export function usePostActionNotificationExports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.action_notification_exports.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.action_notification_exports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionNotificationExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.action_notification_exports.$post> },
      ) => parseResponse(client.action_notification_exports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionNotificationExportsIdKey(
  args: InferRequestType<(typeof client.action_notification_exports)[':id']['$get']>,
) {
  return ['action_notification_exports', '/action_notification_exports/:id', args] as const
}

export function useGetActionNotificationExportsId<TError = unknown>(
  args: InferRequestType<(typeof client.action_notification_exports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.action_notification_exports)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionNotificationExportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.action_notification_exports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.action_notification_exports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionNotificationExportsId<TError = unknown>(
  args: InferRequestType<(typeof client.action_notification_exports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.action_notification_exports)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionNotificationExportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.action_notification_exports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.action_notification_exports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionWebhookFailuresIdRetryKey() {
  return ['action_webhook_failures', '/action_webhook_failures/:id/retry', 'POST'] as const
}

export function usePostActionWebhookFailuresIdRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.action_webhook_failures)[':id']['retry']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.action_webhook_failures)[':id']['retry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionWebhookFailuresIdRetryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.action_webhook_failures)[':id']['retry']['$post']>
        },
      ) => parseResponse(client.action_webhook_failures[':id'].retry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeyKey() {
  return ['api_key', '/api_key'] as const
}

export function useGetApiKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_key.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_key.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiKeyKey() {
  return ['api_key', '/api_key', 'DELETE'] as const
}

export function useDeleteApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$delete>>>>>
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api_key.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiKeyKey() {
  return ['api_key', '/api_key', 'PATCH'] as const
}

export function usePatchApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api_key.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api_key.$patch> }) =>
        parseResponse(client.api_key.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeysKey(args: InferRequestType<typeof client.api_keys.$get>) {
  return ['api_keys', '/api_keys', args] as const
}

export function useGetApiKeys<TError = unknown>(
  args: InferRequestType<typeof client.api_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api_keys.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApiKeys<TError = unknown>(
  args: InferRequestType<typeof client.api_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api_keys.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostApiKeysKey() {
  return ['api_keys', '/api_keys', 'POST'] as const
}

export function usePostApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api_keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api_keys.$post> }) =>
        parseResponse(client.api_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeysIdKey(
  args: InferRequestType<(typeof client.api_keys)[':id']['$get']>,
) {
  return ['api_keys', '/api_keys/:id', args] as const
}

export function useGetApiKeysId<TError = unknown>(
  args: InferRequestType<(typeof client.api_keys)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeysIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_keys[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeysId<TError = unknown>(
  args: InferRequestType<(typeof client.api_keys)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeysIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_keys[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiKeysIdKey() {
  return ['api_keys', '/api_keys/:id', 'DELETE'] as const
}

export function useDeleteApiKeysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api_keys)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiKeysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api_keys)[':id']['$delete']> },
      ) => parseResponse(client.api_keys[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiKeysIdKey() {
  return ['api_keys', '/api_keys/:id', 'PATCH'] as const
}

export function usePatchApiKeysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api_keys)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiKeysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api_keys)[':id']['$patch']> },
      ) => parseResponse(client.api_keys[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsKey(args: InferRequestType<typeof client.apps.$get>) {
  return ['apps', '/apps', args] as const
}

export function useGetApps<TError = unknown>(
  args: InferRequestType<typeof client.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.apps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApps<TError = unknown>(
  args: InferRequestType<typeof client.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.apps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAs2IncomingMessagesKey(
  args: InferRequestType<typeof client.as2_incoming_messages.$get>,
) {
  return ['as2_incoming_messages', '/as2_incoming_messages', args] as const
}

export function useGetAs2IncomingMessages<TError = unknown>(
  args: InferRequestType<typeof client.as2_incoming_messages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.as2_incoming_messages.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAs2IncomingMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.as2_incoming_messages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.as2_incoming_messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAs2IncomingMessages<TError = unknown>(
  args: InferRequestType<typeof client.as2_incoming_messages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.as2_incoming_messages.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAs2IncomingMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.as2_incoming_messages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.as2_incoming_messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAs2OutgoingMessagesKey(
  args: InferRequestType<typeof client.as2_outgoing_messages.$get>,
) {
  return ['as2_outgoing_messages', '/as2_outgoing_messages', args] as const
}

export function useGetAs2OutgoingMessages<TError = unknown>(
  args: InferRequestType<typeof client.as2_outgoing_messages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.as2_outgoing_messages.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAs2OutgoingMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.as2_outgoing_messages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.as2_outgoing_messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAs2OutgoingMessages<TError = unknown>(
  args: InferRequestType<typeof client.as2_outgoing_messages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.as2_outgoing_messages.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAs2OutgoingMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.as2_outgoing_messages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.as2_outgoing_messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAs2PartnersKey(args: InferRequestType<typeof client.as2_partners.$get>) {
  return ['as2_partners', '/as2_partners', args] as const
}

export function useGetAs2Partners<TError = unknown>(
  args: InferRequestType<typeof client.as2_partners.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_partners.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAs2PartnersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_partners.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.as2_partners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAs2Partners<TError = unknown>(
  args: InferRequestType<typeof client.as2_partners.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_partners.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAs2PartnersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_partners.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.as2_partners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAs2PartnersKey() {
  return ['as2_partners', '/as2_partners', 'POST'] as const
}

export function usePostAs2Partners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_partners.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.as2_partners.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAs2PartnersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.as2_partners.$post> }) =>
        parseResponse(client.as2_partners.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAs2PartnersIdKey(
  args: InferRequestType<(typeof client.as2_partners)[':id']['$get']>,
) {
  return ['as2_partners', '/as2_partners/:id', args] as const
}

export function useGetAs2PartnersId<TError = unknown>(
  args: InferRequestType<(typeof client.as2_partners)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.as2_partners)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAs2PartnersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.as2_partners)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.as2_partners[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAs2PartnersId<TError = unknown>(
  args: InferRequestType<(typeof client.as2_partners)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.as2_partners)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAs2PartnersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.as2_partners)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.as2_partners[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAs2PartnersIdKey() {
  return ['as2_partners', '/as2_partners/:id', 'DELETE'] as const
}

export function useDeleteAs2PartnersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.as2_partners)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.as2_partners)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAs2PartnersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.as2_partners)[':id']['$delete']> },
      ) => parseResponse(client.as2_partners[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAs2PartnersIdKey() {
  return ['as2_partners', '/as2_partners/:id', 'PATCH'] as const
}

export function usePatchAs2PartnersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.as2_partners)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.as2_partners)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAs2PartnersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.as2_partners)[':id']['$patch']> },
      ) => parseResponse(client.as2_partners[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAs2StationsKey(args: InferRequestType<typeof client.as2_stations.$get>) {
  return ['as2_stations', '/as2_stations', args] as const
}

export function useGetAs2Stations<TError = unknown>(
  args: InferRequestType<typeof client.as2_stations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_stations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAs2StationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_stations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.as2_stations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAs2Stations<TError = unknown>(
  args: InferRequestType<typeof client.as2_stations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_stations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAs2StationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_stations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.as2_stations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAs2StationsKey() {
  return ['as2_stations', '/as2_stations', 'POST'] as const
}

export function usePostAs2Stations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_stations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.as2_stations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAs2StationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.as2_stations.$post> }) =>
        parseResponse(client.as2_stations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAs2StationsIdKey(
  args: InferRequestType<(typeof client.as2_stations)[':id']['$get']>,
) {
  return ['as2_stations', '/as2_stations/:id', args] as const
}

export function useGetAs2StationsId<TError = unknown>(
  args: InferRequestType<(typeof client.as2_stations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.as2_stations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAs2StationsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.as2_stations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.as2_stations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAs2StationsId<TError = unknown>(
  args: InferRequestType<(typeof client.as2_stations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.as2_stations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAs2StationsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.as2_stations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.as2_stations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAs2StationsIdKey() {
  return ['as2_stations', '/as2_stations/:id', 'DELETE'] as const
}

export function useDeleteAs2StationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.as2_stations)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.as2_stations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAs2StationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.as2_stations)[':id']['$delete']> },
      ) => parseResponse(client.as2_stations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAs2StationsIdKey() {
  return ['as2_stations', '/as2_stations/:id', 'PATCH'] as const
}

export function usePatchAs2StationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.as2_stations)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.as2_stations)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAs2StationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.as2_stations)[':id']['$patch']> },
      ) => parseResponse(client.as2_stations[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationRunsKey(
  args: InferRequestType<typeof client.automation_runs.$get>,
) {
  return ['automation_runs', '/automation_runs', args] as const
}

export function useGetAutomationRuns<TError = unknown>(
  args: InferRequestType<typeof client.automation_runs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automation_runs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAutomationRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automation_runs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automation_runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationRuns<TError = unknown>(
  args: InferRequestType<typeof client.automation_runs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automation_runs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAutomationRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automation_runs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automation_runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAutomationRunsIdKey(
  args: InferRequestType<(typeof client.automation_runs)[':id']['$get']>,
) {
  return ['automation_runs', '/automation_runs/:id', args] as const
}

export function useGetAutomationRunsId<TError = unknown>(
  args: InferRequestType<(typeof client.automation_runs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.automation_runs)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationRunsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.automation_runs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automation_runs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationRunsId<TError = unknown>(
  args: InferRequestType<(typeof client.automation_runs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.automation_runs)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationRunsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.automation_runs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automation_runs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAutomationsKey(args: InferRequestType<typeof client.automations.$get>) {
  return ['automations', '/automations', args] as const
}

export function useGetAutomations<TError = unknown>(
  args: InferRequestType<typeof client.automations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAutomationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomations<TError = unknown>(
  args: InferRequestType<typeof client.automations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAutomationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationsKey() {
  return ['automations', '/automations', 'POST'] as const
}

export function usePostAutomations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.automations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.automations.$post> }) =>
        parseResponse(client.automations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationsIdKey(
  args: InferRequestType<(typeof client.automations)[':id']['$get']>,
) {
  return ['automations', '/automations/:id', args] as const
}

export function useGetAutomationsId<TError = unknown>(
  args: InferRequestType<(typeof client.automations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.automations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAutomationsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.automations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationsId<TError = unknown>(
  args: InferRequestType<(typeof client.automations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.automations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAutomationsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.automations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAutomationsIdKey() {
  return ['automations', '/automations/:id', 'DELETE'] as const
}

export function useDeleteAutomationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.automations)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.automations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAutomationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.automations)[':id']['$delete']> },
      ) => parseResponse(client.automations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAutomationsIdKey() {
  return ['automations', '/automations/:id', 'PATCH'] as const
}

export function usePatchAutomationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.automations)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automations)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAutomationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.automations)[':id']['$patch']> },
      ) => parseResponse(client.automations[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBandwidthSnapshotsKey(
  args: InferRequestType<typeof client.bandwidth_snapshots.$get>,
) {
  return ['bandwidth_snapshots', '/bandwidth_snapshots', args] as const
}

export function useGetBandwidthSnapshots<TError = unknown>(
  args: InferRequestType<typeof client.bandwidth_snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bandwidth_snapshots.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBandwidthSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bandwidth_snapshots.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bandwidth_snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBandwidthSnapshots<TError = unknown>(
  args: InferRequestType<typeof client.bandwidth_snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bandwidth_snapshots.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBandwidthSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bandwidth_snapshots.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bandwidth_snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBehaviorsKey(args: InferRequestType<typeof client.behaviors.$get>) {
  return ['behaviors', '/behaviors', args] as const
}

export function useGetBehaviors<TError = unknown>(
  args: InferRequestType<typeof client.behaviors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.behaviors.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBehaviorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.behaviors.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.behaviors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBehaviors<TError = unknown>(
  args: InferRequestType<typeof client.behaviors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.behaviors.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBehaviorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.behaviors.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.behaviors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBehaviorsKey() {
  return ['behaviors', '/behaviors', 'POST'] as const
}

export function usePostBehaviors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.behaviors.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.behaviors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBehaviorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.behaviors.$post> }) =>
        parseResponse(client.behaviors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBehaviorsFoldersPathKey(
  args: InferRequestType<(typeof client.behaviors.folders)[':path']['$get']>,
) {
  return ['behaviors', '/behaviors/folders/:path', args] as const
}

export function useGetBehaviorsFoldersPath<TError = unknown>(
  args: InferRequestType<(typeof client.behaviors.folders)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.behaviors.folders)[':path']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBehaviorsFoldersPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.behaviors.folders)[':path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.behaviors.folders[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBehaviorsFoldersPath<TError = unknown>(
  args: InferRequestType<(typeof client.behaviors.folders)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.behaviors.folders)[':path']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBehaviorsFoldersPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.behaviors.folders)[':path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.behaviors.folders[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBehaviorsWebhookTestKey() {
  return ['behaviors', '/behaviors/webhook/test', 'POST'] as const
}

export function usePostBehaviorsWebhookTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.behaviors.webhook.test.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.behaviors.webhook.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBehaviorsWebhookTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.behaviors.webhook.test.$post> },
      ) => parseResponse(client.behaviors.webhook.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBehaviorsIdKey(
  args: InferRequestType<(typeof client.behaviors)[':id']['$get']>,
) {
  return ['behaviors', '/behaviors/:id', args] as const
}

export function useGetBehaviorsId<TError = unknown>(
  args: InferRequestType<(typeof client.behaviors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.behaviors)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBehaviorsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.behaviors)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.behaviors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBehaviorsId<TError = unknown>(
  args: InferRequestType<(typeof client.behaviors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.behaviors)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBehaviorsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.behaviors)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.behaviors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBehaviorsIdKey() {
  return ['behaviors', '/behaviors/:id', 'DELETE'] as const
}

export function useDeleteBehaviorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.behaviors)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.behaviors)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBehaviorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.behaviors)[':id']['$delete']> },
      ) => parseResponse(client.behaviors[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBehaviorsIdKey() {
  return ['behaviors', '/behaviors/:id', 'PATCH'] as const
}

export function usePatchBehaviorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.behaviors)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.behaviors)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBehaviorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.behaviors)[':id']['$patch']> },
      ) => parseResponse(client.behaviors[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBundleDownloadsKey(
  args: InferRequestType<typeof client.bundle_downloads.$get>,
) {
  return ['bundle_downloads', '/bundle_downloads', args] as const
}

export function useGetBundleDownloads<TError = unknown>(
  args: InferRequestType<typeof client.bundle_downloads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_downloads.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBundleDownloadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_downloads.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bundle_downloads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBundleDownloads<TError = unknown>(
  args: InferRequestType<typeof client.bundle_downloads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_downloads.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBundleDownloadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_downloads.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bundle_downloads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBundleNotificationsKey(
  args: InferRequestType<typeof client.bundle_notifications.$get>,
) {
  return ['bundle_notifications', '/bundle_notifications', args] as const
}

export function useGetBundleNotifications<TError = unknown>(
  args: InferRequestType<typeof client.bundle_notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bundle_notifications.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBundleNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bundle_notifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bundle_notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBundleNotifications<TError = unknown>(
  args: InferRequestType<typeof client.bundle_notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bundle_notifications.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBundleNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bundle_notifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bundle_notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBundleNotificationsKey() {
  return ['bundle_notifications', '/bundle_notifications', 'POST'] as const
}

export function usePostBundleNotifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bundle_notifications.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.bundle_notifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBundleNotificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.bundle_notifications.$post> },
      ) => parseResponse(client.bundle_notifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBundleNotificationsIdKey(
  args: InferRequestType<(typeof client.bundle_notifications)[':id']['$get']>,
) {
  return ['bundle_notifications', '/bundle_notifications/:id', args] as const
}

export function useGetBundleNotificationsId<TError = unknown>(
  args: InferRequestType<(typeof client.bundle_notifications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bundle_notifications)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBundleNotificationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bundle_notifications)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bundle_notifications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBundleNotificationsId<TError = unknown>(
  args: InferRequestType<(typeof client.bundle_notifications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bundle_notifications)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBundleNotificationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bundle_notifications)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bundle_notifications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBundleNotificationsIdKey() {
  return ['bundle_notifications', '/bundle_notifications/:id', 'DELETE'] as const
}

export function useDeleteBundleNotificationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bundle_notifications)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.bundle_notifications)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBundleNotificationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bundle_notifications)[':id']['$delete']> },
      ) => parseResponse(client.bundle_notifications[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBundleNotificationsIdKey() {
  return ['bundle_notifications', '/bundle_notifications/:id', 'PATCH'] as const
}

export function usePatchBundleNotificationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bundle_notifications)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bundle_notifications)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBundleNotificationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bundle_notifications)[':id']['$patch']> },
      ) => parseResponse(client.bundle_notifications[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBundleRecipientsKey(
  args: InferRequestType<typeof client.bundle_recipients.$get>,
) {
  return ['bundle_recipients', '/bundle_recipients', args] as const
}

export function useGetBundleRecipients<TError = unknown>(
  args: InferRequestType<typeof client.bundle_recipients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_recipients.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBundleRecipientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_recipients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bundle_recipients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBundleRecipients<TError = unknown>(
  args: InferRequestType<typeof client.bundle_recipients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_recipients.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBundleRecipientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_recipients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bundle_recipients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBundleRecipientsKey() {
  return ['bundle_recipients', '/bundle_recipients', 'POST'] as const
}

export function usePostBundleRecipients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_recipients.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bundle_recipients.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBundleRecipientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bundle_recipients.$post> }) =>
        parseResponse(client.bundle_recipients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBundleRegistrationsKey(
  args: InferRequestType<typeof client.bundle_registrations.$get>,
) {
  return ['bundle_registrations', '/bundle_registrations', args] as const
}

export function useGetBundleRegistrations<TError = unknown>(
  args: InferRequestType<typeof client.bundle_registrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bundle_registrations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBundleRegistrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bundle_registrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bundle_registrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBundleRegistrations<TError = unknown>(
  args: InferRequestType<typeof client.bundle_registrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bundle_registrations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBundleRegistrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bundle_registrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bundle_registrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBundlesKey(args: InferRequestType<typeof client.bundles.$get>) {
  return ['bundles', '/bundles', args] as const
}

export function useGetBundles<TError = unknown>(
  args: InferRequestType<typeof client.bundles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundles.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBundlesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundles.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.bundles.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBundles<TError = unknown>(
  args: InferRequestType<typeof client.bundles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundles.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBundlesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundles.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.bundles.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostBundlesKey() {
  return ['bundles', '/bundles', 'POST'] as const
}

export function usePostBundles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundles.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.bundles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBundlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bundles.$post> }) =>
        parseResponse(client.bundles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBundlesIdKey(args: InferRequestType<(typeof client.bundles)[':id']['$get']>) {
  return ['bundles', '/bundles/:id', args] as const
}

export function useGetBundlesId<TError = unknown>(
  args: InferRequestType<(typeof client.bundles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bundles)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBundlesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bundles)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bundles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBundlesId<TError = unknown>(
  args: InferRequestType<(typeof client.bundles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bundles)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBundlesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bundles)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bundles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBundlesIdKey() {
  return ['bundles', '/bundles/:id', 'DELETE'] as const
}

export function useDeleteBundlesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bundles)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.bundles)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBundlesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bundles)[':id']['$delete']> },
      ) => parseResponse(client.bundles[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBundlesIdKey() {
  return ['bundles', '/bundles/:id', 'PATCH'] as const
}

export function usePatchBundlesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bundles)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bundles)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBundlesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bundles)[':id']['$patch']> },
      ) => parseResponse(client.bundles[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBundlesIdShareKey() {
  return ['bundles', '/bundles/:id/share', 'POST'] as const
}

export function usePostBundlesIdShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bundles)[':id']['share']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.bundles)[':id']['share']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBundlesIdShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bundles)[':id']['share']['$post']> },
      ) => parseResponse(client.bundles[':id'].share.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClickwrapsKey(args: InferRequestType<typeof client.clickwraps.$get>) {
  return ['clickwraps', '/clickwraps', args] as const
}

export function useGetClickwraps<TError = unknown>(
  args: InferRequestType<typeof client.clickwraps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickwraps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClickwrapsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickwraps.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clickwraps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClickwraps<TError = unknown>(
  args: InferRequestType<typeof client.clickwraps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickwraps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClickwrapsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickwraps.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clickwraps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClickwrapsKey() {
  return ['clickwraps', '/clickwraps', 'POST'] as const
}

export function usePostClickwraps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickwraps.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.clickwraps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClickwrapsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.clickwraps.$post> }) =>
        parseResponse(client.clickwraps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClickwrapsIdKey(
  args: InferRequestType<(typeof client.clickwraps)[':id']['$get']>,
) {
  return ['clickwraps', '/clickwraps/:id', args] as const
}

export function useGetClickwrapsId<TError = unknown>(
  args: InferRequestType<(typeof client.clickwraps)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clickwraps)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClickwrapsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clickwraps)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clickwraps[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClickwrapsId<TError = unknown>(
  args: InferRequestType<(typeof client.clickwraps)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clickwraps)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClickwrapsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clickwraps)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clickwraps[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteClickwrapsIdKey() {
  return ['clickwraps', '/clickwraps/:id', 'DELETE'] as const
}

export function useDeleteClickwrapsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clickwraps)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.clickwraps)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClickwrapsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.clickwraps)[':id']['$delete']> },
      ) => parseResponse(client.clickwraps[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchClickwrapsIdKey() {
  return ['clickwraps', '/clickwraps/:id', 'PATCH'] as const
}

export function usePatchClickwrapsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clickwraps)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clickwraps)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchClickwrapsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.clickwraps)[':id']['$patch']> },
      ) => parseResponse(client.clickwraps[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDnsRecordsKey(args: InferRequestType<typeof client.dns_records.$get>) {
  return ['dns_records', '/dns_records', args] as const
}

export function useGetDnsRecords<TError = unknown>(
  args: InferRequestType<typeof client.dns_records.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_records.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDnsRecordsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_records.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dns_records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsRecords<TError = unknown>(
  args: InferRequestType<typeof client.dns_records.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_records.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDnsRecordsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_records.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dns_records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExternalEventsKey(
  args: InferRequestType<typeof client.external_events.$get>,
) {
  return ['external_events', '/external_events', args] as const
}

export function useGetExternalEvents<TError = unknown>(
  args: InferRequestType<typeof client.external_events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExternalEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.external_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExternalEvents<TError = unknown>(
  args: InferRequestType<typeof client.external_events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExternalEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.external_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExternalEventsKey() {
  return ['external_events', '/external_events', 'POST'] as const
}

export function usePostExternalEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_events.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.external_events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExternalEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.external_events.$post> }) =>
        parseResponse(client.external_events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExternalEventsIdKey(
  args: InferRequestType<(typeof client.external_events)[':id']['$get']>,
) {
  return ['external_events', '/external_events/:id', args] as const
}

export function useGetExternalEventsId<TError = unknown>(
  args: InferRequestType<(typeof client.external_events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.external_events)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExternalEventsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.external_events)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.external_events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExternalEventsId<TError = unknown>(
  args: InferRequestType<(typeof client.external_events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.external_events)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExternalEventsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.external_events)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.external_events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFileActionsBeginUploadPathKey() {
  return ['file_actions', '/file_actions/begin_upload/:path', 'POST'] as const
}

export function usePostFileActionsBeginUploadPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.file_actions.begin_upload)[':path']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.file_actions.begin_upload)[':path']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileActionsBeginUploadPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.file_actions.begin_upload)[':path']['$post']> },
      ) => parseResponse(client.file_actions.begin_upload[':path'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFileActionsCopyPathKey() {
  return ['file_actions', '/file_actions/copy/:path', 'POST'] as const
}

export function usePostFileActionsCopyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.file_actions.copy)[':path']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.file_actions.copy)[':path']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileActionsCopyPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.file_actions.copy)[':path']['$post']> },
      ) => parseResponse(client.file_actions.copy[':path'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFileActionsMetadataPathKey(
  args: InferRequestType<(typeof client.file_actions.metadata)[':path']['$get']>,
) {
  return ['file_actions', '/file_actions/metadata/:path', args] as const
}

export function useGetFileActionsMetadataPath<TError = unknown>(
  args: InferRequestType<(typeof client.file_actions.metadata)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_actions.metadata)[':path']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFileActionsMetadataPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_actions.metadata)[':path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file_actions.metadata[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileActionsMetadataPath<TError = unknown>(
  args: InferRequestType<(typeof client.file_actions.metadata)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_actions.metadata)[':path']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFileActionsMetadataPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_actions.metadata)[':path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file_actions.metadata[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFileActionsMovePathKey() {
  return ['file_actions', '/file_actions/move/:path', 'POST'] as const
}

export function usePostFileActionsMovePath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.file_actions.move)[':path']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.file_actions.move)[':path']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileActionsMovePathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.file_actions.move)[':path']['$post']> },
      ) => parseResponse(client.file_actions.move[':path'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFileCommentReactionsKey() {
  return ['file_comment_reactions', '/file_comment_reactions', 'POST'] as const
}

export function usePostFileCommentReactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.file_comment_reactions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.file_comment_reactions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileCommentReactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.file_comment_reactions.$post> },
      ) => parseResponse(client.file_comment_reactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFileCommentReactionsIdKey() {
  return ['file_comment_reactions', '/file_comment_reactions/:id', 'DELETE'] as const
}

export function useDeleteFileCommentReactionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_comment_reactions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.file_comment_reactions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFileCommentReactionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.file_comment_reactions)[':id']['$delete']> },
      ) => parseResponse(client.file_comment_reactions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFileCommentsKey() {
  return ['file_comments', '/file_comments', 'POST'] as const
}

export function usePostFileComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file_comments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.file_comments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.file_comments.$post> }) =>
        parseResponse(client.file_comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFileCommentsFilesPathKey(
  args: InferRequestType<(typeof client.file_comments.files)[':path']['$get']>,
) {
  return ['file_comments', '/file_comments/files/:path', args] as const
}

export function useGetFileCommentsFilesPath<TError = unknown>(
  args: InferRequestType<(typeof client.file_comments.files)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_comments.files)[':path']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFileCommentsFilesPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_comments.files)[':path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file_comments.files[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileCommentsFilesPath<TError = unknown>(
  args: InferRequestType<(typeof client.file_comments.files)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_comments.files)[':path']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFileCommentsFilesPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_comments.files)[':path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file_comments.files[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFileCommentsIdKey() {
  return ['file_comments', '/file_comments/:id', 'DELETE'] as const
}

export function useDeleteFileCommentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.file_comments)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.file_comments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFileCommentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.file_comments)[':id']['$delete']> },
      ) => parseResponse(client.file_comments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFileCommentsIdKey() {
  return ['file_comments', '/file_comments/:id', 'PATCH'] as const
}

export function usePatchFileCommentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.file_comments)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.file_comments)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFileCommentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.file_comments)[':id']['$patch']> },
      ) => parseResponse(client.file_comments[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFileMigrationsIdKey(
  args: InferRequestType<(typeof client.file_migrations)[':id']['$get']>,
) {
  return ['file_migrations', '/file_migrations/:id', args] as const
}

export function useGetFileMigrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.file_migrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.file_migrations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFileMigrationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.file_migrations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file_migrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileMigrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.file_migrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.file_migrations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFileMigrationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.file_migrations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file_migrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilesPathKey(args: InferRequestType<(typeof client.files)[':path']['$get']>) {
  return ['files', '/files/:path', args] as const
}

export function useGetFilesPath<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':path']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesPathKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':path']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesPath<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':path']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesPathKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':path']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFilesPathKey() {
  return ['files', '/files/:path', 'POST'] as const
}

export function usePostFilesPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':path']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':path']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.files)[':path']['$post']> }) =>
        parseResponse(client.files[':path'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFilesPathKey() {
  return ['files', '/files/:path', 'DELETE'] as const
}

export function useDeleteFilesPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':path']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':path']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFilesPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.files)[':path']['$delete']> },
      ) => parseResponse(client.files[':path'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFilesPathKey() {
  return ['files', '/files/:path', 'PATCH'] as const
}

export function usePatchFilesPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':path']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':path']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFilesPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.files)[':path']['$patch']> },
      ) => parseResponse(client.files[':path'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFoldersPathKey(
  args: InferRequestType<(typeof client.folders)[':path']['$get']>,
) {
  return ['folders', '/folders/:path', args] as const
}

export function useGetFoldersPath<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':path']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoldersPathKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':path']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoldersPath<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':path']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoldersPathKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':path']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFoldersPathKey() {
  return ['folders', '/folders/:path', 'POST'] as const
}

export function usePostFoldersPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':path']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':path']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFoldersPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.folders)[':path']['$post']> },
      ) => parseResponse(client.folders[':path'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFormFieldSetsKey(args: InferRequestType<typeof client.form_field_sets.$get>) {
  return ['form_field_sets', '/form_field_sets', args] as const
}

export function useGetFormFieldSets<TError = unknown>(
  args: InferRequestType<typeof client.form_field_sets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.form_field_sets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFormFieldSetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.form_field_sets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.form_field_sets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormFieldSets<TError = unknown>(
  args: InferRequestType<typeof client.form_field_sets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.form_field_sets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFormFieldSetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.form_field_sets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.form_field_sets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFormFieldSetsKey() {
  return ['form_field_sets', '/form_field_sets', 'POST'] as const
}

export function usePostFormFieldSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.form_field_sets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.form_field_sets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFormFieldSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.form_field_sets.$post> }) =>
        parseResponse(client.form_field_sets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFormFieldSetsIdKey(
  args: InferRequestType<(typeof client.form_field_sets)[':id']['$get']>,
) {
  return ['form_field_sets', '/form_field_sets/:id', args] as const
}

export function useGetFormFieldSetsId<TError = unknown>(
  args: InferRequestType<(typeof client.form_field_sets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.form_field_sets)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFormFieldSetsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.form_field_sets)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.form_field_sets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormFieldSetsId<TError = unknown>(
  args: InferRequestType<(typeof client.form_field_sets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.form_field_sets)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFormFieldSetsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.form_field_sets)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.form_field_sets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFormFieldSetsIdKey() {
  return ['form_field_sets', '/form_field_sets/:id', 'DELETE'] as const
}

export function useDeleteFormFieldSetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.form_field_sets)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.form_field_sets)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFormFieldSetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.form_field_sets)[':id']['$delete']> },
      ) => parseResponse(client.form_field_sets[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFormFieldSetsIdKey() {
  return ['form_field_sets', '/form_field_sets/:id', 'PATCH'] as const
}

export function usePatchFormFieldSetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.form_field_sets)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.form_field_sets)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFormFieldSetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.form_field_sets)[':id']['$patch']> },
      ) => parseResponse(client.form_field_sets[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupUsersKey(args: InferRequestType<typeof client.group_users.$get>) {
  return ['group_users', '/group_users', args] as const
}

export function useGetGroupUsers<TError = unknown>(
  args: InferRequestType<typeof client.group_users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group_users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group_users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.group_users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupUsers<TError = unknown>(
  args: InferRequestType<typeof client.group_users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group_users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group_users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.group_users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupUsersKey() {
  return ['group_users', '/group_users', 'POST'] as const
}

export function usePostGroupUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group_users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.group_users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.group_users.$post> }) =>
        parseResponse(client.group_users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupUsersIdKey() {
  return ['group_users', '/group_users/:id', 'DELETE'] as const
}

export function useDeleteGroupUsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.group_users)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.group_users)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupUsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.group_users)[':id']['$delete']> },
      ) => parseResponse(client.group_users[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGroupUsersIdKey() {
  return ['group_users', '/group_users/:id', 'PATCH'] as const
}

export function usePatchGroupUsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.group_users)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.group_users)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGroupUsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.group_users)[':id']['$patch']> },
      ) => parseResponse(client.group_users[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
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

export function getDeleteGroupsGroupIdMembershipsUserIdKey() {
  return ['groups', '/groups/:group_id/memberships/:user_id', 'DELETE'] as const
}

export function useDeleteGroupsGroupIdMembershipsUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups)[':group_id']['memberships'][':user_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':group_id']['memberships'][':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsGroupIdMembershipsUserIdKey()
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
            (typeof client.groups)[':group_id']['memberships'][':user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.groups[':group_id'].memberships[':user_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchGroupsGroupIdMembershipsUserIdKey() {
  return ['groups', '/groups/:group_id/memberships/:user_id', 'PATCH'] as const
}

export function usePatchGroupsGroupIdMembershipsUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.groups)[':group_id']['memberships'][':user_id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':group_id']['memberships'][':user_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGroupsGroupIdMembershipsUserIdKey()
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
            (typeof client.groups)[':group_id']['memberships'][':user_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.groups[':group_id'].memberships[':user_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupIdPermissionsKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['permissions']['$get']>,
) {
  return ['groups', '/groups/:group_id/permissions', args] as const
}

export function useGetGroupsGroupIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['permissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsGroupIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group_id'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['permissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsGroupIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group_id'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsGroupIdUsersKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['users']['$get']>,
) {
  return ['groups', '/groups/:group_id/users', args] as const
}

export function useGetGroupsGroupIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsGroupIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group_id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsGroupIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group_id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupsGroupIdUsersKey() {
  return ['groups', '/groups/:group_id/users', 'POST'] as const
}

export function usePostGroupsGroupIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':group_id']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsGroupIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':group_id']['users']['$post']> },
      ) => parseResponse(client.groups[':group_id'].users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsIdKey(args: InferRequestType<(typeof client.groups)[':id']['$get']>) {
  return ['groups', '/groups/:id', args] as const
}

export function useGetGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteGroupsIdKey() {
  return ['groups', '/groups/:id', 'DELETE'] as const
}

export function useDeleteGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':id']['$delete']> },
      ) => parseResponse(client.groups[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGroupsIdKey() {
  return ['groups', '/groups/:id', 'PATCH'] as const
}

export function usePatchGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.groups)[':id']['$patch']> }) =>
        parseResponse(client.groups[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHistoryKey(args: InferRequestType<typeof client.history.$get>) {
  return ['history', '/history', args] as const
}

export function useGetHistory<TError = unknown>(
  args: InferRequestType<typeof client.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHistoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.history.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetHistory<TError = unknown>(
  args: InferRequestType<typeof client.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHistoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.history.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetHistoryFilesPathKey(
  args: InferRequestType<(typeof client.history.files)[':path']['$get']>,
) {
  return ['history', '/history/files/:path', args] as const
}

export function useGetHistoryFilesPath<TError = unknown>(
  args: InferRequestType<(typeof client.history.files)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.history.files)[':path']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHistoryFilesPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.history.files)[':path']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.files[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHistoryFilesPath<TError = unknown>(
  args: InferRequestType<(typeof client.history.files)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.history.files)[':path']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHistoryFilesPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.history.files)[':path']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.files[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHistoryFoldersPathKey(
  args: InferRequestType<(typeof client.history.folders)[':path']['$get']>,
) {
  return ['history', '/history/folders/:path', args] as const
}

export function useGetHistoryFoldersPath<TError = unknown>(
  args: InferRequestType<(typeof client.history.folders)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.history.folders)[':path']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHistoryFoldersPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.history.folders)[':path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.folders[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHistoryFoldersPath<TError = unknown>(
  args: InferRequestType<(typeof client.history.folders)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.history.folders)[':path']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHistoryFoldersPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.history.folders)[':path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.folders[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHistoryLoginKey(args: InferRequestType<typeof client.history.login.$get>) {
  return ['history', '/history/login', args] as const
}

export function useGetHistoryLogin<TError = unknown>(
  args: InferRequestType<typeof client.history.login.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.login.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHistoryLoginKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.login.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.login.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHistoryLogin<TError = unknown>(
  args: InferRequestType<typeof client.history.login.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.login.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHistoryLoginKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.login.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.login.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHistoryUsersUserIdKey(
  args: InferRequestType<(typeof client.history.users)[':user_id']['$get']>,
) {
  return ['history', '/history/users/:user_id', args] as const
}

export function useGetHistoryUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.history.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.history.users)[':user_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHistoryUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.history.users)[':user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHistoryUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.history.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.history.users)[':user_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHistoryUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.history.users)[':user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHistoryExportResultsKey(
  args: InferRequestType<typeof client.history_export_results.$get>,
) {
  return ['history_export_results', '/history_export_results', args] as const
}

export function useGetHistoryExportResults<TError = unknown>(
  args: InferRequestType<typeof client.history_export_results.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.history_export_results.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHistoryExportResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.history_export_results.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history_export_results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHistoryExportResults<TError = unknown>(
  args: InferRequestType<typeof client.history_export_results.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.history_export_results.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHistoryExportResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.history_export_results.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history_export_results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostHistoryExportsKey() {
  return ['history_exports', '/history_exports', 'POST'] as const
}

export function usePostHistoryExports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history_exports.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.history_exports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHistoryExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.history_exports.$post> }) =>
        parseResponse(client.history_exports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHistoryExportsIdKey(
  args: InferRequestType<(typeof client.history_exports)[':id']['$get']>,
) {
  return ['history_exports', '/history_exports/:id', args] as const
}

export function useGetHistoryExportsId<TError = unknown>(
  args: InferRequestType<(typeof client.history_exports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.history_exports)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHistoryExportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.history_exports)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history_exports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHistoryExportsId<TError = unknown>(
  args: InferRequestType<(typeof client.history_exports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.history_exports)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHistoryExportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.history_exports)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history_exports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInboxRecipientsKey(
  args: InferRequestType<typeof client.inbox_recipients.$get>,
) {
  return ['inbox_recipients', '/inbox_recipients', args] as const
}

export function useGetInboxRecipients<TError = unknown>(
  args: InferRequestType<typeof client.inbox_recipients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_recipients.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInboxRecipientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_recipients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inbox_recipients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboxRecipients<TError = unknown>(
  args: InferRequestType<typeof client.inbox_recipients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_recipients.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInboxRecipientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_recipients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inbox_recipients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInboxRecipientsKey() {
  return ['inbox_recipients', '/inbox_recipients', 'POST'] as const
}

export function usePostInboxRecipients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_recipients.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.inbox_recipients.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboxRecipientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.inbox_recipients.$post> }) =>
        parseResponse(client.inbox_recipients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInboxRegistrationsKey(
  args: InferRequestType<typeof client.inbox_registrations.$get>,
) {
  return ['inbox_registrations', '/inbox_registrations', args] as const
}

export function useGetInboxRegistrations<TError = unknown>(
  args: InferRequestType<typeof client.inbox_registrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.inbox_registrations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInboxRegistrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.inbox_registrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inbox_registrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboxRegistrations<TError = unknown>(
  args: InferRequestType<typeof client.inbox_registrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.inbox_registrations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInboxRegistrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.inbox_registrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inbox_registrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInboxUploadsKey(args: InferRequestType<typeof client.inbox_uploads.$get>) {
  return ['inbox_uploads', '/inbox_uploads', args] as const
}

export function useGetInboxUploads<TError = unknown>(
  args: InferRequestType<typeof client.inbox_uploads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_uploads.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInboxUploadsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_uploads.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inbox_uploads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboxUploads<TError = unknown>(
  args: InferRequestType<typeof client.inbox_uploads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_uploads.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInboxUploadsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_uploads.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inbox_uploads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInvoicesKey(args: InferRequestType<typeof client.invoices.$get>) {
  return ['invoices', '/invoices', args] as const
}

export function useGetInvoices<TError = unknown>(
  args: InferRequestType<typeof client.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.invoices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetInvoices<TError = unknown>(
  args: InferRequestType<typeof client.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.invoices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetInvoicesIdKey(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
) {
  return ['invoices', '/invoices/:id', args] as const
}

export function useGetInvoicesId<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvoicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invoices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesId<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvoicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invoices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIpAddressesKey(args: InferRequestType<typeof client.ip_addresses.$get>) {
  return ['ip_addresses', '/ip_addresses', args] as const
}

export function useGetIpAddresses<TError = unknown>(
  args: InferRequestType<typeof client.ip_addresses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_addresses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpAddressesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_addresses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip_addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpAddresses<TError = unknown>(
  args: InferRequestType<typeof client.ip_addresses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_addresses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpAddressesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_addresses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip_addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIpAddressesExavaultReservedKey(
  args: InferRequestType<(typeof client.ip_addresses)['exavault-reserved']['$get']>,
) {
  return ['ip_addresses', '/ip_addresses/exavault-reserved', args] as const
}

export function useGetIpAddressesExavaultReserved<TError = unknown>(
  args: InferRequestType<(typeof client.ip_addresses)['exavault-reserved']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ip_addresses)['exavault-reserved']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpAddressesExavaultReservedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ip_addresses)['exavault-reserved']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip_addresses['exavault-reserved'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpAddressesExavaultReserved<TError = unknown>(
  args: InferRequestType<(typeof client.ip_addresses)['exavault-reserved']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ip_addresses)['exavault-reserved']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpAddressesExavaultReservedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ip_addresses)['exavault-reserved']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip_addresses['exavault-reserved'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIpAddressesReservedKey(
  args: InferRequestType<typeof client.ip_addresses.reserved.$get>,
) {
  return ['ip_addresses', '/ip_addresses/reserved', args] as const
}

export function useGetIpAddressesReserved<TError = unknown>(
  args: InferRequestType<typeof client.ip_addresses.reserved.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ip_addresses.reserved.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpAddressesReservedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ip_addresses.reserved.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip_addresses.reserved.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpAddressesReserved<TError = unknown>(
  args: InferRequestType<typeof client.ip_addresses.reserved.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ip_addresses.reserved.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpAddressesReservedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ip_addresses.reserved.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip_addresses.reserved.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLocksPathKey(args: InferRequestType<(typeof client.locks)[':path']['$get']>) {
  return ['locks', '/locks/:path', args] as const
}

export function useGetLocksPath<TError = unknown>(
  args: InferRequestType<(typeof client.locks)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.locks)[':path']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocksPathKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.locks)[':path']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locks[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocksPath<TError = unknown>(
  args: InferRequestType<(typeof client.locks)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.locks)[':path']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocksPathKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.locks)[':path']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locks[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLocksPathKey() {
  return ['locks', '/locks/:path', 'POST'] as const
}

export function usePostLocksPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.locks)[':path']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.locks)[':path']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLocksPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.locks)[':path']['$post']> }) =>
        parseResponse(client.locks[':path'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLocksPathKey() {
  return ['locks', '/locks/:path', 'DELETE'] as const
}

export function useDeleteLocksPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.locks)[':path']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.locks)[':path']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLocksPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.locks)[':path']['$delete']> },
      ) => parseResponse(client.locks[':path'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessageCommentReactionsKey(
  args: InferRequestType<typeof client.message_comment_reactions.$get>,
) {
  return ['message_comment_reactions', '/message_comment_reactions', args] as const
}

export function useGetMessageCommentReactions<TError = unknown>(
  args: InferRequestType<typeof client.message_comment_reactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.message_comment_reactions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessageCommentReactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.message_comment_reactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.message_comment_reactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessageCommentReactions<TError = unknown>(
  args: InferRequestType<typeof client.message_comment_reactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.message_comment_reactions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessageCommentReactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.message_comment_reactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.message_comment_reactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMessageCommentReactionsKey() {
  return ['message_comment_reactions', '/message_comment_reactions', 'POST'] as const
}

export function usePostMessageCommentReactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.message_comment_reactions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.message_comment_reactions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessageCommentReactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.message_comment_reactions.$post> },
      ) => parseResponse(client.message_comment_reactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessageCommentReactionsIdKey(
  args: InferRequestType<(typeof client.message_comment_reactions)[':id']['$get']>,
) {
  return ['message_comment_reactions', '/message_comment_reactions/:id', args] as const
}

export function useGetMessageCommentReactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.message_comment_reactions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.message_comment_reactions)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessageCommentReactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.message_comment_reactions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.message_comment_reactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessageCommentReactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.message_comment_reactions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.message_comment_reactions)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessageCommentReactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.message_comment_reactions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.message_comment_reactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMessageCommentReactionsIdKey() {
  return ['message_comment_reactions', '/message_comment_reactions/:id', 'DELETE'] as const
}

export function useDeleteMessageCommentReactionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.message_comment_reactions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.message_comment_reactions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMessageCommentReactionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.message_comment_reactions)[':id']['$delete']> },
      ) => parseResponse(client.message_comment_reactions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessageCommentsKey(
  args: InferRequestType<typeof client.message_comments.$get>,
) {
  return ['message_comments', '/message_comments', args] as const
}

export function useGetMessageComments<TError = unknown>(
  args: InferRequestType<typeof client.message_comments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_comments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessageCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_comments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.message_comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessageComments<TError = unknown>(
  args: InferRequestType<typeof client.message_comments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_comments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessageCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_comments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.message_comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMessageCommentsKey() {
  return ['message_comments', '/message_comments', 'POST'] as const
}

export function usePostMessageComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_comments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.message_comments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessageCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.message_comments.$post> }) =>
        parseResponse(client.message_comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessageCommentsIdKey(
  args: InferRequestType<(typeof client.message_comments)[':id']['$get']>,
) {
  return ['message_comments', '/message_comments/:id', args] as const
}

export function useGetMessageCommentsId<TError = unknown>(
  args: InferRequestType<(typeof client.message_comments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.message_comments)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessageCommentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.message_comments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.message_comments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessageCommentsId<TError = unknown>(
  args: InferRequestType<(typeof client.message_comments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.message_comments)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessageCommentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.message_comments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.message_comments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMessageCommentsIdKey() {
  return ['message_comments', '/message_comments/:id', 'DELETE'] as const
}

export function useDeleteMessageCommentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.message_comments)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.message_comments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMessageCommentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.message_comments)[':id']['$delete']> },
      ) => parseResponse(client.message_comments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMessageCommentsIdKey() {
  return ['message_comments', '/message_comments/:id', 'PATCH'] as const
}

export function usePatchMessageCommentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.message_comments)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.message_comments)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMessageCommentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.message_comments)[':id']['$patch']> },
      ) => parseResponse(client.message_comments[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessageReactionsKey(
  args: InferRequestType<typeof client.message_reactions.$get>,
) {
  return ['message_reactions', '/message_reactions', args] as const
}

export function useGetMessageReactions<TError = unknown>(
  args: InferRequestType<typeof client.message_reactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_reactions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessageReactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_reactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.message_reactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessageReactions<TError = unknown>(
  args: InferRequestType<typeof client.message_reactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_reactions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessageReactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_reactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.message_reactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMessageReactionsKey() {
  return ['message_reactions', '/message_reactions', 'POST'] as const
}

export function usePostMessageReactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_reactions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.message_reactions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessageReactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.message_reactions.$post> }) =>
        parseResponse(client.message_reactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessageReactionsIdKey(
  args: InferRequestType<(typeof client.message_reactions)[':id']['$get']>,
) {
  return ['message_reactions', '/message_reactions/:id', args] as const
}

export function useGetMessageReactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.message_reactions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.message_reactions)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessageReactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.message_reactions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.message_reactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessageReactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.message_reactions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.message_reactions)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMessageReactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.message_reactions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.message_reactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMessageReactionsIdKey() {
  return ['message_reactions', '/message_reactions/:id', 'DELETE'] as const
}

export function useDeleteMessageReactionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.message_reactions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.message_reactions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMessageReactionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.message_reactions)[':id']['$delete']> },
      ) => parseResponse(client.message_reactions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagesKey(args: InferRequestType<typeof client.messages.$get>) {
  return ['messages', '/messages', args] as const
}

export function useGetMessages<TError = unknown>(
  args: InferRequestType<typeof client.messages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMessagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.messages.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMessages<TError = unknown>(
  args: InferRequestType<typeof client.messages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMessagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.messages.$get(args, clientOptions)), restSwrOptions),
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

export function getGetMessagesIdKey(
  args: InferRequestType<(typeof client.messages)[':id']['$get']>,
) {
  return ['messages', '/messages/:id', args] as const
}

export function useGetMessagesId<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMessagesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagesId<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMessagesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMessagesIdKey() {
  return ['messages', '/messages/:id', 'DELETE'] as const
}

export function useDeleteMessagesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.messages)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMessagesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.messages)[':id']['$delete']> },
      ) => parseResponse(client.messages[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMessagesIdKey() {
  return ['messages', '/messages/:id', 'PATCH'] as const
}

export function usePatchMessagesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messages)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMessagesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.messages)[':id']['$patch']> },
      ) => parseResponse(client.messages[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsKey(args: InferRequestType<typeof client.notifications.$get>) {
  return ['notifications', '/notifications', args] as const
}

export function useGetNotifications<TError = unknown>(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotificationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotifications<TError = unknown>(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotificationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationsKey() {
  return ['notifications', '/notifications', 'POST'] as const
}

export function usePostNotifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.notifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.notifications.$post> }) =>
        parseResponse(client.notifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsIdKey(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
) {
  return ['notifications', '/notifications/:id', args] as const
}

export function useGetNotificationsId<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsId<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteNotificationsIdKey() {
  return ['notifications', '/notifications/:id', 'DELETE'] as const
}

export function useDeleteNotificationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.notifications)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNotificationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.notifications)[':id']['$delete']> },
      ) => parseResponse(client.notifications[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchNotificationsIdKey() {
  return ['notifications', '/notifications/:id', 'PATCH'] as const
}

export function usePatchNotificationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notifications)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNotificationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.notifications)[':id']['$patch']> },
      ) => parseResponse(client.notifications[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentsKey(args: InferRequestType<typeof client.payments.$get>) {
  return ['payments', '/payments', args] as const
}

export function useGetPayments<TError = unknown>(
  args: InferRequestType<typeof client.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.payments.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPayments<TError = unknown>(
  args: InferRequestType<typeof client.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.payments.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPaymentsIdKey(
  args: InferRequestType<(typeof client.payments)[':id']['$get']>,
) {
  return ['payments', '/payments/:id', args] as const
}

export function useGetPaymentsId<TError = unknown>(
  args: InferRequestType<(typeof client.payments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentsId<TError = unknown>(
  args: InferRequestType<(typeof client.payments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPermissionsKey(args: InferRequestType<typeof client.permissions.$get>) {
  return ['permissions', '/permissions', args] as const
}

export function useGetPermissions<TError = unknown>(
  args: InferRequestType<typeof client.permissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPermissionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPermissions<TError = unknown>(
  args: InferRequestType<typeof client.permissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPermissionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPermissionsKey() {
  return ['permissions', '/permissions', 'POST'] as const
}

export function usePostPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.permissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.permissions.$post> }) =>
        parseResponse(client.permissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePermissionsIdKey() {
  return ['permissions', '/permissions/:id', 'DELETE'] as const
}

export function useDeletePermissionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.permissions)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.permissions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePermissionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.permissions)[':id']['$delete']> },
      ) => parseResponse(client.permissions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPrioritiesKey(args: InferRequestType<typeof client.priorities.$get>) {
  return ['priorities', '/priorities', args] as const
}

export function useGetPriorities<TError = unknown>(
  args: InferRequestType<typeof client.priorities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.priorities.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPrioritiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.priorities.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.priorities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPriorities<TError = unknown>(
  args: InferRequestType<typeof client.priorities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.priorities.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPrioritiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.priorities.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.priorities.$get(args, clientOptions)),
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

export function getGetProjectsIdKey(
  args: InferRequestType<(typeof client.projects)[':id']['$get']>,
) {
  return ['projects', '/projects/:id', args] as const
}

export function useGetProjectsId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProjectsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProjectsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteProjectsIdKey() {
  return ['projects', '/projects/:id', 'DELETE'] as const
}

export function useDeleteProjectsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':id']['$delete']> },
      ) => parseResponse(client.projects[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchProjectsIdKey() {
  return ['projects', '/projects/:id', 'PATCH'] as const
}

export function usePatchProjectsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchProjectsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':id']['$patch']> },
      ) => parseResponse(client.projects[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicKeysKey(args: InferRequestType<typeof client.public_keys.$get>) {
  return ['public_keys', '/public_keys', args] as const
}

export function useGetPublicKeys<TError = unknown>(
  args: InferRequestType<typeof client.public_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public_keys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public_keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicKeys<TError = unknown>(
  args: InferRequestType<typeof client.public_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public_keys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public_keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPublicKeysKey() {
  return ['public_keys', '/public_keys', 'POST'] as const
}

export function usePostPublicKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public_keys.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.public_keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.public_keys.$post> }) =>
        parseResponse(client.public_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicKeysIdKey(
  args: InferRequestType<(typeof client.public_keys)[':id']['$get']>,
) {
  return ['public_keys', '/public_keys/:id', args] as const
}

export function useGetPublicKeysId<TError = unknown>(
  args: InferRequestType<(typeof client.public_keys)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.public_keys)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicKeysIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.public_keys)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public_keys[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicKeysId<TError = unknown>(
  args: InferRequestType<(typeof client.public_keys)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.public_keys)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicKeysIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.public_keys)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public_keys[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePublicKeysIdKey() {
  return ['public_keys', '/public_keys/:id', 'DELETE'] as const
}

export function useDeletePublicKeysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.public_keys)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.public_keys)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePublicKeysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.public_keys)[':id']['$delete']> },
      ) => parseResponse(client.public_keys[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPublicKeysIdKey() {
  return ['public_keys', '/public_keys/:id', 'PATCH'] as const
}

export function usePatchPublicKeysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.public_keys)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public_keys)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPublicKeysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.public_keys)[':id']['$patch']> },
      ) => parseResponse(client.public_keys[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRemoteBandwidthSnapshotsKey(
  args: InferRequestType<typeof client.remote_bandwidth_snapshots.$get>,
) {
  return ['remote_bandwidth_snapshots', '/remote_bandwidth_snapshots', args] as const
}

export function useGetRemoteBandwidthSnapshots<TError = unknown>(
  args: InferRequestType<typeof client.remote_bandwidth_snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.remote_bandwidth_snapshots.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRemoteBandwidthSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.remote_bandwidth_snapshots.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.remote_bandwidth_snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRemoteBandwidthSnapshots<TError = unknown>(
  args: InferRequestType<typeof client.remote_bandwidth_snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.remote_bandwidth_snapshots.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRemoteBandwidthSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.remote_bandwidth_snapshots.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.remote_bandwidth_snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRemoteServersKey(args: InferRequestType<typeof client.remote_servers.$get>) {
  return ['remote_servers', '/remote_servers', args] as const
}

export function useGetRemoteServers<TError = unknown>(
  args: InferRequestType<typeof client.remote_servers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remote_servers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRemoteServersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remote_servers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.remote_servers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRemoteServers<TError = unknown>(
  args: InferRequestType<typeof client.remote_servers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remote_servers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRemoteServersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remote_servers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.remote_servers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRemoteServersKey() {
  return ['remote_servers', '/remote_servers', 'POST'] as const
}

export function usePostRemoteServers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remote_servers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.remote_servers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRemoteServersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.remote_servers.$post> }) =>
        parseResponse(client.remote_servers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRemoteServersIdKey(
  args: InferRequestType<(typeof client.remote_servers)[':id']['$get']>,
) {
  return ['remote_servers', '/remote_servers/:id', args] as const
}

export function useGetRemoteServersId<TError = unknown>(
  args: InferRequestType<(typeof client.remote_servers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.remote_servers)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRemoteServersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.remote_servers)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.remote_servers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRemoteServersId<TError = unknown>(
  args: InferRequestType<(typeof client.remote_servers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.remote_servers)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRemoteServersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.remote_servers)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.remote_servers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRemoteServersIdKey() {
  return ['remote_servers', '/remote_servers/:id', 'DELETE'] as const
}

export function useDeleteRemoteServersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.remote_servers)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.remote_servers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRemoteServersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.remote_servers)[':id']['$delete']> },
      ) => parseResponse(client.remote_servers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRemoteServersIdKey() {
  return ['remote_servers', '/remote_servers/:id', 'PATCH'] as const
}

export function usePatchRemoteServersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.remote_servers)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.remote_servers)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRemoteServersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.remote_servers)[':id']['$patch']> },
      ) => parseResponse(client.remote_servers[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRemoteServersIdConfigurationFileKey(
  args: InferRequestType<(typeof client.remote_servers)[':id']['configuration_file']['$get']>,
) {
  return ['remote_servers', '/remote_servers/:id/configuration_file', args] as const
}

export function useGetRemoteServersIdConfigurationFile<TError = unknown>(
  args: InferRequestType<(typeof client.remote_servers)[':id']['configuration_file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.remote_servers)[':id']['configuration_file']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRemoteServersIdConfigurationFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.remote_servers)[':id']['configuration_file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.remote_servers[':id'].configuration_file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRemoteServersIdConfigurationFile<TError = unknown>(
  args: InferRequestType<(typeof client.remote_servers)[':id']['configuration_file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.remote_servers)[':id']['configuration_file']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRemoteServersIdConfigurationFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.remote_servers)[':id']['configuration_file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.remote_servers[':id'].configuration_file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRemoteServersIdConfigurationFileKey() {
  return ['remote_servers', '/remote_servers/:id/configuration_file', 'POST'] as const
}

export function usePostRemoteServersIdConfigurationFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.remote_servers)[':id']['configuration_file']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.remote_servers)[':id']['configuration_file']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRemoteServersIdConfigurationFileKey()
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
            (typeof client.remote_servers)[':id']['configuration_file']['$post']
          >
        },
      ) => parseResponse(client.remote_servers[':id'].configuration_file.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRequestsKey(args: InferRequestType<typeof client.requests.$get>) {
  return ['requests', '/requests', args] as const
}

export function useGetRequests<TError = unknown>(
  args: InferRequestType<typeof client.requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRequestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.requests.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRequests<TError = unknown>(
  args: InferRequestType<typeof client.requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRequestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.requests.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostRequestsKey() {
  return ['requests', '/requests', 'POST'] as const
}

export function usePostRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.requests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.requests.$post> }) =>
        parseResponse(client.requests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRequestsFoldersPathKey(
  args: InferRequestType<(typeof client.requests.folders)[':path']['$get']>,
) {
  return ['requests', '/requests/folders/:path', args] as const
}

export function useGetRequestsFoldersPath<TError = unknown>(
  args: InferRequestType<(typeof client.requests.folders)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requests.folders)[':path']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRequestsFoldersPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requests.folders)[':path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.requests.folders[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRequestsFoldersPath<TError = unknown>(
  args: InferRequestType<(typeof client.requests.folders)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requests.folders)[':path']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRequestsFoldersPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requests.folders)[':path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.requests.folders[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRequestsIdKey() {
  return ['requests', '/requests/:id', 'DELETE'] as const
}

export function useDeleteRequestsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.requests)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.requests)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRequestsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.requests)[':id']['$delete']> },
      ) => parseResponse(client.requests[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsKey() {
  return ['sessions', '/sessions', 'POST'] as const
}

export function usePostSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sessions.$post> }) =>
        parseResponse(client.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSessionsKey() {
  return ['sessions', '/sessions', 'DELETE'] as const
}

export function useDeleteSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$delete>>>>>
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.sessions.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsChangesKey(
  args: InferRequestType<typeof client.settings_changes.$get>,
) {
  return ['settings_changes', '/settings_changes', args] as const
}

export function useGetSettingsChanges<TError = unknown>(
  args: InferRequestType<typeof client.settings_changes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings_changes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings_changes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings_changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsChanges<TError = unknown>(
  args: InferRequestType<typeof client.settings_changes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings_changes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings_changes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings_changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSftpHostKeysKey(args: InferRequestType<typeof client.sftp_host_keys.$get>) {
  return ['sftp_host_keys', '/sftp_host_keys', args] as const
}

export function useGetSftpHostKeys<TError = unknown>(
  args: InferRequestType<typeof client.sftp_host_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sftp_host_keys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSftpHostKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sftp_host_keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sftp_host_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSftpHostKeys<TError = unknown>(
  args: InferRequestType<typeof client.sftp_host_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sftp_host_keys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSftpHostKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sftp_host_keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sftp_host_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSftpHostKeysKey() {
  return ['sftp_host_keys', '/sftp_host_keys', 'POST'] as const
}

export function usePostSftpHostKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sftp_host_keys.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sftp_host_keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSftpHostKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sftp_host_keys.$post> }) =>
        parseResponse(client.sftp_host_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSftpHostKeysIdKey(
  args: InferRequestType<(typeof client.sftp_host_keys)[':id']['$get']>,
) {
  return ['sftp_host_keys', '/sftp_host_keys/:id', args] as const
}

export function useGetSftpHostKeysId<TError = unknown>(
  args: InferRequestType<(typeof client.sftp_host_keys)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sftp_host_keys)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSftpHostKeysIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sftp_host_keys)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sftp_host_keys[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSftpHostKeysId<TError = unknown>(
  args: InferRequestType<(typeof client.sftp_host_keys)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sftp_host_keys)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSftpHostKeysIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sftp_host_keys)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sftp_host_keys[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSftpHostKeysIdKey() {
  return ['sftp_host_keys', '/sftp_host_keys/:id', 'DELETE'] as const
}

export function useDeleteSftpHostKeysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sftp_host_keys)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sftp_host_keys)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSftpHostKeysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sftp_host_keys)[':id']['$delete']> },
      ) => parseResponse(client.sftp_host_keys[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSftpHostKeysIdKey() {
  return ['sftp_host_keys', '/sftp_host_keys/:id', 'PATCH'] as const
}

export function usePatchSftpHostKeysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sftp_host_keys)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sftp_host_keys)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSftpHostKeysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sftp_host_keys)[':id']['$patch']> },
      ) => parseResponse(client.sftp_host_keys[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSiteKey() {
  return ['site', '/site'] as const
}

export function useGetSite<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetSiteKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.site.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSite<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetSiteKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.site.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSiteKey() {
  return ['site', '/site', 'PATCH'] as const
}

export function usePatchSite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.site.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSiteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.site.$patch> }) =>
        parseResponse(client.site.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSiteApiKeysKey(args: InferRequestType<typeof client.site.api_keys.$get>) {
  return ['site', '/site/api_keys', args] as const
}

export function useGetSiteApiKeys<TError = unknown>(
  args: InferRequestType<typeof client.site.api_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.api_keys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSiteApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.api_keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.site.api_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSiteApiKeys<TError = unknown>(
  args: InferRequestType<typeof client.site.api_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.api_keys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSiteApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.api_keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.site.api_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSiteApiKeysKey() {
  return ['site', '/site/api_keys', 'POST'] as const
}

export function usePostSiteApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.api_keys.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.site.api_keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSiteApiKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.site.api_keys.$post> }) =>
        parseResponse(client.site.api_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSiteDnsRecordsKey(
  args: InferRequestType<typeof client.site.dns_records.$get>,
) {
  return ['site', '/site/dns_records', args] as const
}

export function useGetSiteDnsRecords<TError = unknown>(
  args: InferRequestType<typeof client.site.dns_records.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.dns_records.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSiteDnsRecordsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.dns_records.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.site.dns_records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSiteDnsRecords<TError = unknown>(
  args: InferRequestType<typeof client.site.dns_records.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.dns_records.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSiteDnsRecordsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.dns_records.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.site.dns_records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSiteIpAddressesKey(
  args: InferRequestType<typeof client.site.ip_addresses.$get>,
) {
  return ['site', '/site/ip_addresses', args] as const
}

export function useGetSiteIpAddresses<TError = unknown>(
  args: InferRequestType<typeof client.site.ip_addresses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.ip_addresses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSiteIpAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.ip_addresses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.site.ip_addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSiteIpAddresses<TError = unknown>(
  args: InferRequestType<typeof client.site.ip_addresses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.ip_addresses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSiteIpAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.ip_addresses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.site.ip_addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSiteTestWebhookKey() {
  return ['site', '/site/test-webhook', 'POST'] as const
}

export function usePostSiteTestWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.site)['test-webhook']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.site)['test-webhook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSiteTestWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.site)['test-webhook']['$post']> },
      ) => parseResponse(client.site['test-webhook'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSiteUsageKey() {
  return ['site', '/site/usage'] as const
}

export function useGetSiteUsage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.usage.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSiteUsageKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.usage.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.site.usage.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSiteUsage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.usage.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSiteUsageKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.usage.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.site.usage.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSsoStrategiesKey(args: InferRequestType<typeof client.sso_strategies.$get>) {
  return ['sso_strategies', '/sso_strategies', args] as const
}

export function useGetSsoStrategies<TError = unknown>(
  args: InferRequestType<typeof client.sso_strategies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso_strategies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSsoStrategiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso_strategies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sso_strategies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSsoStrategies<TError = unknown>(
  args: InferRequestType<typeof client.sso_strategies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso_strategies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSsoStrategiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso_strategies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sso_strategies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSsoStrategiesIdKey(
  args: InferRequestType<(typeof client.sso_strategies)[':id']['$get']>,
) {
  return ['sso_strategies', '/sso_strategies/:id', args] as const
}

export function useGetSsoStrategiesId<TError = unknown>(
  args: InferRequestType<(typeof client.sso_strategies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sso_strategies)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSsoStrategiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sso_strategies)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sso_strategies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSsoStrategiesId<TError = unknown>(
  args: InferRequestType<(typeof client.sso_strategies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sso_strategies)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSsoStrategiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sso_strategies)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sso_strategies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSsoStrategiesIdSyncKey() {
  return ['sso_strategies', '/sso_strategies/:id/sync', 'POST'] as const
}

export function usePostSsoStrategiesIdSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sso_strategies)[':id']['sync']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sso_strategies)[':id']['sync']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSsoStrategiesIdSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sso_strategies)[':id']['sync']['$post']> },
      ) => parseResponse(client.sso_strategies[':id'].sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStylesPathKey(
  args: InferRequestType<(typeof client.styles)[':path']['$get']>,
) {
  return ['styles', '/styles/:path', args] as const
}

export function useGetStylesPath<TError = unknown>(
  args: InferRequestType<(typeof client.styles)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.styles)[':path']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStylesPathKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.styles)[':path']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.styles[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStylesPath<TError = unknown>(
  args: InferRequestType<(typeof client.styles)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.styles)[':path']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStylesPathKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.styles)[':path']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.styles[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteStylesPathKey() {
  return ['styles', '/styles/:path', 'DELETE'] as const
}

export function useDeleteStylesPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.styles)[':path']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.styles)[':path']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStylesPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.styles)[':path']['$delete']> },
      ) => parseResponse(client.styles[':path'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchStylesPathKey() {
  return ['styles', '/styles/:path', 'PATCH'] as const
}

export function usePatchStylesPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.styles)[':path']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.styles)[':path']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchStylesPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.styles)[':path']['$patch']> },
      ) => parseResponse(client.styles[':path'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsageDailySnapshotsKey(
  args: InferRequestType<typeof client.usage_daily_snapshots.$get>,
) {
  return ['usage_daily_snapshots', '/usage_daily_snapshots', args] as const
}

export function useGetUsageDailySnapshots<TError = unknown>(
  args: InferRequestType<typeof client.usage_daily_snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.usage_daily_snapshots.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsageDailySnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.usage_daily_snapshots.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usage_daily_snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsageDailySnapshots<TError = unknown>(
  args: InferRequestType<typeof client.usage_daily_snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.usage_daily_snapshots.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsageDailySnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.usage_daily_snapshots.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usage_daily_snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsageSnapshotsKey(
  args: InferRequestType<typeof client.usage_snapshots.$get>,
) {
  return ['usage_snapshots', '/usage_snapshots', args] as const
}

export function useGetUsageSnapshots<TError = unknown>(
  args: InferRequestType<typeof client.usage_snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage_snapshots.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsageSnapshotsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage_snapshots.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usage_snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsageSnapshots<TError = unknown>(
  args: InferRequestType<typeof client.usage_snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage_snapshots.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsageSnapshotsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage_snapshots.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usage_snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchUserKey() {
  return ['user', '/user', 'PATCH'] as const
}

export function usePatchUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.user.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.$patch> }) =>
        parseResponse(client.user.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserApiKeysKey(args: InferRequestType<typeof client.user.api_keys.$get>) {
  return ['user', '/user/api_keys', args] as const
}

export function useGetUserApiKeys<TError = unknown>(
  args: InferRequestType<typeof client.user.api_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.api_keys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.api_keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.api_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserApiKeys<TError = unknown>(
  args: InferRequestType<typeof client.user.api_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.api_keys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.api_keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.api_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserApiKeysKey() {
  return ['user', '/user/api_keys', 'POST'] as const
}

export function usePostUserApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.api_keys.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.api_keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserApiKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.api_keys.$post> }) =>
        parseResponse(client.user.api_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserGroupsKey(args: InferRequestType<typeof client.user.groups.$get>) {
  return ['user', '/user/groups', args] as const
}

export function useGetUserGroups<TError = unknown>(
  args: InferRequestType<typeof client.user.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserGroups<TError = unknown>(
  args: InferRequestType<typeof client.user.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserPublicKeysKey(
  args: InferRequestType<typeof client.user.public_keys.$get>,
) {
  return ['user', '/user/public_keys', args] as const
}

export function useGetUserPublicKeys<TError = unknown>(
  args: InferRequestType<typeof client.user.public_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.public_keys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserPublicKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.public_keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.public_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserPublicKeys<TError = unknown>(
  args: InferRequestType<typeof client.user.public_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.public_keys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserPublicKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.public_keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.public_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserPublicKeysKey() {
  return ['user', '/user/public_keys', 'POST'] as const
}

export function usePostUserPublicKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.public_keys.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.public_keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserPublicKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.public_keys.$post> }) =>
        parseResponse(client.user.public_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserCipherUsesKey(
  args: InferRequestType<typeof client.user_cipher_uses.$get>,
) {
  return ['user_cipher_uses', '/user_cipher_uses', args] as const
}

export function useGetUserCipherUses<TError = unknown>(
  args: InferRequestType<typeof client.user_cipher_uses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_cipher_uses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserCipherUsesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_cipher_uses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_cipher_uses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserCipherUses<TError = unknown>(
  args: InferRequestType<typeof client.user_cipher_uses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_cipher_uses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserCipherUsesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_cipher_uses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_cipher_uses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserRequestsKey(args: InferRequestType<typeof client.user_requests.$get>) {
  return ['user_requests', '/user_requests', args] as const
}

export function useGetUserRequests<TError = unknown>(
  args: InferRequestType<typeof client.user_requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_requests.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserRequestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_requests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserRequests<TError = unknown>(
  args: InferRequestType<typeof client.user_requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_requests.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserRequestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_requests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserRequestsKey() {
  return ['user_requests', '/user_requests', 'POST'] as const
}

export function usePostUserRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_requests.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_requests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user_requests.$post> }) =>
        parseResponse(client.user_requests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserRequestsIdKey(
  args: InferRequestType<(typeof client.user_requests)[':id']['$get']>,
) {
  return ['user_requests', '/user_requests/:id', args] as const
}

export function useGetUserRequestsId<TError = unknown>(
  args: InferRequestType<(typeof client.user_requests)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user_requests)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserRequestsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user_requests)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_requests[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserRequestsId<TError = unknown>(
  args: InferRequestType<(typeof client.user_requests)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user_requests)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserRequestsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user_requests)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_requests[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserRequestsIdKey() {
  return ['user_requests', '/user_requests/:id', 'DELETE'] as const
}

export function useDeleteUserRequestsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user_requests)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.user_requests)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserRequestsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user_requests)[':id']['$delete']> },
      ) => parseResponse(client.user_requests[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
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

export function getGetUsersIdKey(args: InferRequestType<(typeof client.users)[':id']['$get']>) {
  return ['users', '/users/:id', args] as const
}

export function useGetUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersIdKey() {
  return ['users', '/users/:id', 'DELETE'] as const
}

export function useDeleteUsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.users)[':id']['$delete']> }) =>
        parseResponse(client.users[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersIdKey() {
  return ['users', '/users/:id', 'PATCH'] as const
}

export function usePatchUsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.users)[':id']['$patch']> }) =>
        parseResponse(client.users[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersId2faResetKey() {
  return ['users', '/users/:id/2fa/reset', 'POST'] as const
}

export function usePostUsersId2faReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['2fa']['reset']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['2fa']['reset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersId2faResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':id']['2fa']['reset']['$post']> },
      ) => parseResponse(client.users[':id']['2fa'].reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersIdResendWelcomeEmailKey() {
  return ['users', '/users/:id/resend_welcome_email', 'POST'] as const
}

export function usePostUsersIdResendWelcomeEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['resend_welcome_email']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['resend_welcome_email']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdResendWelcomeEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':id']['resend_welcome_email']['$post']> },
      ) => parseResponse(client.users[':id'].resend_welcome_email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersIdUnlockKey() {
  return ['users', '/users/:id/unlock', 'POST'] as const
}

export function usePostUsersIdUnlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['unlock']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['unlock']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdUnlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':id']['unlock']['$post']> },
      ) => parseResponse(client.users[':id'].unlock.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdApiKeysKey(
  args: InferRequestType<(typeof client.users)[':user_id']['api_keys']['$get']>,
) {
  return ['users', '/users/:user_id/api_keys', args] as const
}

export function useGetUsersUserIdApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['api_keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['api_keys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdApiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['api_keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].api_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['api_keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['api_keys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdApiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['api_keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].api_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdApiKeysKey() {
  return ['users', '/users/:user_id/api_keys', 'POST'] as const
}

export function usePostUsersUserIdApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['api_keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['api_keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdApiKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['api_keys']['$post']> },
      ) => parseResponse(client.users[':user_id'].api_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdCipherUsesKey(
  args: InferRequestType<(typeof client.users)[':user_id']['cipher_uses']['$get']>,
) {
  return ['users', '/users/:user_id/cipher_uses', args] as const
}

export function useGetUsersUserIdCipherUses<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['cipher_uses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['cipher_uses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdCipherUsesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['cipher_uses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].cipher_uses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdCipherUses<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['cipher_uses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['cipher_uses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdCipherUsesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['cipher_uses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].cipher_uses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdGroupsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['groups']['$get']>,
) {
  return ['users', '/users/:user_id/groups', args] as const
}

export function useGetUsersUserIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdPermissionsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['permissions']['$get']>,
) {
  return ['users', '/users/:user_id/permissions', args] as const
}

export function useGetUsersUserIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['permissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['permissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdPublicKeysKey(
  args: InferRequestType<(typeof client.users)[':user_id']['public_keys']['$get']>,
) {
  return ['users', '/users/:user_id/public_keys', args] as const
}

export function useGetUsersUserIdPublicKeys<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['public_keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['public_keys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdPublicKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['public_keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].public_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPublicKeys<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['public_keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['public_keys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdPublicKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['public_keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].public_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdPublicKeysKey() {
  return ['users', '/users/:user_id/public_keys', 'POST'] as const
}

export function usePostUsersUserIdPublicKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['public_keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['public_keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdPublicKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':user_id']['public_keys']['$post']> },
      ) => parseResponse(client.users[':user_id'].public_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhookTestsKey() {
  return ['webhook_tests', '/webhook_tests', 'POST'] as const
}

export function usePostWebhookTests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_tests.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhook_tests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookTestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhook_tests.$post> }) =>
        parseResponse(client.webhook_tests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
