import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getActionNotificationExportResultsQueryKey(
  args: InferRequestType<typeof client.action_notification_export_results.$get>,
) {
  return [
    'action_notification_export_results',
    '/action_notification_export_results',
    args,
  ] as const
}

export function getActionNotificationExportResultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action_notification_export_results.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.action_notification_export_results.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.action_notification_export_results.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionNotificationExportResultsQueryKey>
  >({
    queryKey: getActionNotificationExportResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action_notification_export_results.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionNotificationExportResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action_notification_export_results.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action_notification_export_results.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action_notification_export_results.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionNotificationExportResultsQueryKey>
        >
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
      ...getActionNotificationExportResultsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionNotificationExportsMutationKey() {
  return ['action_notification_exports', '/action_notification_exports', 'POST'] as const
}

export function getPostActionNotificationExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.action_notification_exports.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.action_notification_exports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostActionNotificationExportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.action_notification_exports.$post>) {
      return parseResponse(client.action_notification_exports.$post(args, options))
    },
  })
}

export function createPostActionNotificationExports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action_notification_exports.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.action_notification_exports.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionNotificationExportsMutationOptions<
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

export function getActionNotificationExportsIdQueryKey(
  args: InferRequestType<(typeof client.action_notification_exports)[':id']['$get']>,
) {
  return ['action_notification_exports', '/action_notification_exports/:id', args] as const
}

export function getActionNotificationExportsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.action_notification_exports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.action_notification_exports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.action_notification_exports)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionNotificationExportsIdQueryKey>
  >({
    queryKey: getActionNotificationExportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action_notification_exports[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionNotificationExportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.action_notification_exports)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.action_notification_exports)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.action_notification_exports)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionNotificationExportsIdQueryKey>
        >
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
      ...getActionNotificationExportsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionWebhookFailuresIdRetryMutationKey() {
  return ['action_webhook_failures', '/action_webhook_failures/:id/retry', 'POST'] as const
}

export function getPostActionWebhookFailuresIdRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.action_webhook_failures)[':id']['retry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.action_webhook_failures)[':id']['retry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionWebhookFailuresIdRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.action_webhook_failures)[':id']['retry']['$post']>,
    ) {
      return parseResponse(client.action_webhook_failures[':id'].retry.$post(args, options))
    },
  })
}

export function createPostActionWebhookFailuresIdRetry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.action_webhook_failures)[':id']['retry']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.action_webhook_failures)[':id']['retry']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionWebhookFailuresIdRetryMutationOptions<
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

export function getApiKeyQueryKey() {
  return ['api_key', '/api_key'] as const
}

export function getApiKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiKeyQueryKey>
  >({
    queryKey: getApiKeyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api_key.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiKeyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiKeyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiKeyMutationKey() {
  return ['api_key', '/api_key', 'DELETE'] as const
}

export function getDeleteApiKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$delete>>>>>
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiKeyMutationKey(),
    async mutationFn() {
      return parseResponse(client.api_key.$delete(undefined, options))
    },
  })
}

export function createDeleteApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$delete>>>>
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiKeyMutationKey() {
  return ['api_key', '/api_key', 'PATCH'] as const
}

export function getPatchApiKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$patch>>>>>,
    TError,
    InferRequestType<typeof client.api_key.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiKeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api_key.$patch>) {
      return parseResponse(client.api_key.$patch(args, options))
    },
  })
}

export function createPatchApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.api_key.$patch>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiKeysQueryKey(args: InferRequestType<typeof client.api_keys.$get>) {
  return ['api_keys', '/api_keys', args] as const
}

export function getApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api_keys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiKeysQueryKey>
  >({
    queryKey: getApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api_keys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api_keys.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiKeysQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiKeysMutationKey() {
  return ['api_keys', '/api_keys', 'POST'] as const
}

export function getPostApiKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$post>>>>>,
    TError,
    InferRequestType<typeof client.api_keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api_keys.$post>) {
      return parseResponse(client.api_keys.$post(args, options))
    },
  })
}

export function createPostApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api_keys.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiKeysIdQueryKey(
  args: InferRequestType<(typeof client.api_keys)[':id']['$get']>,
) {
  return ['api_keys', '/api_keys/:id', args] as const
}

export function getApiKeysIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.api_keys)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysIdQueryKey>
  >({
    queryKey: getApiKeysIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api_keys[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiKeysId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api_keys)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiKeysIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiKeysIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiKeysIdMutationKey() {
  return ['api_keys', '/api_keys/:id', 'DELETE'] as const
}

export function getDeleteApiKeysIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api_keys)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api_keys)[':id']['$delete']>) {
      return parseResponse(client.api_keys[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api_keys)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api_keys)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiKeysIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiKeysIdMutationKey() {
  return ['api_keys', '/api_keys/:id', 'PATCH'] as const
}

export function getPatchApiKeysIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api_keys)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api_keys)[':id']['$patch']>) {
      return parseResponse(client.api_keys[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api_keys)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiKeysIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAppsQueryKey(args: InferRequestType<typeof client.apps.$get>) {
  return ['apps', '/apps', args] as const
}

export function getAppsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.apps.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppsQueryKey>
  >({
    queryKey: getAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apps.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getAppsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAs2IncomingMessagesQueryKey(
  args: InferRequestType<typeof client.as2_incoming_messages.$get>,
) {
  return ['as2_incoming_messages', '/as2_incoming_messages', args] as const
}

export function getAs2IncomingMessagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_incoming_messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.as2_incoming_messages.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.as2_incoming_messages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAs2IncomingMessagesQueryKey>
  >({
    queryKey: getAs2IncomingMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.as2_incoming_messages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAs2IncomingMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_incoming_messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.as2_incoming_messages.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.as2_incoming_messages.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAs2IncomingMessagesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAs2IncomingMessagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAs2OutgoingMessagesQueryKey(
  args: InferRequestType<typeof client.as2_outgoing_messages.$get>,
) {
  return ['as2_outgoing_messages', '/as2_outgoing_messages', args] as const
}

export function getAs2OutgoingMessagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_outgoing_messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.as2_outgoing_messages.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.as2_outgoing_messages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAs2OutgoingMessagesQueryKey>
  >({
    queryKey: getAs2OutgoingMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.as2_outgoing_messages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAs2OutgoingMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_outgoing_messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.as2_outgoing_messages.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.as2_outgoing_messages.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAs2OutgoingMessagesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAs2OutgoingMessagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAs2PartnersQueryKey(args: InferRequestType<typeof client.as2_partners.$get>) {
  return ['as2_partners', '/as2_partners', args] as const
}

export function getAs2PartnersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_partners.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.as2_partners.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_partners.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAs2PartnersQueryKey>
  >({
    queryKey: getAs2PartnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.as2_partners.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAs2Partners<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_partners.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.as2_partners.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_partners.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAs2PartnersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAs2PartnersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAs2PartnersMutationKey() {
  return ['as2_partners', '/as2_partners', 'POST'] as const
}

export function getPostAs2PartnersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_partners.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.as2_partners.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAs2PartnersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.as2_partners.$post>) {
      return parseResponse(client.as2_partners.$post(args, options))
    },
  })
}

export function createPostAs2Partners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_partners.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.as2_partners.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAs2PartnersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAs2PartnersIdQueryKey(
  args: InferRequestType<(typeof client.as2_partners)[':id']['$get']>,
) {
  return ['as2_partners', '/as2_partners/:id', args] as const
}

export function getAs2PartnersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.as2_partners)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.as2_partners)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.as2_partners)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAs2PartnersIdQueryKey>
  >({
    queryKey: getAs2PartnersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.as2_partners[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAs2PartnersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.as2_partners)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.as2_partners)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.as2_partners)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAs2PartnersIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAs2PartnersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteAs2PartnersIdMutationKey() {
  return ['as2_partners', '/as2_partners/:id', 'DELETE'] as const
}

export function getDeleteAs2PartnersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.as2_partners)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.as2_partners)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAs2PartnersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.as2_partners)[':id']['$delete']>) {
      return parseResponse(client.as2_partners[':id'].$delete(args, options))
    },
  })
}

export function createDeleteAs2PartnersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.as2_partners)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.as2_partners)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAs2PartnersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchAs2PartnersIdMutationKey() {
  return ['as2_partners', '/as2_partners/:id', 'PATCH'] as const
}

export function getPatchAs2PartnersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.as2_partners)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.as2_partners)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAs2PartnersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.as2_partners)[':id']['$patch']>) {
      return parseResponse(client.as2_partners[':id'].$patch(args, options))
    },
  })
}

export function createPatchAs2PartnersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.as2_partners)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.as2_partners)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAs2PartnersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAs2StationsQueryKey(args: InferRequestType<typeof client.as2_stations.$get>) {
  return ['as2_stations', '/as2_stations', args] as const
}

export function getAs2StationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_stations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.as2_stations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_stations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAs2StationsQueryKey>
  >({
    queryKey: getAs2StationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.as2_stations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAs2Stations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_stations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.as2_stations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_stations.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAs2StationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAs2StationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAs2StationsMutationKey() {
  return ['as2_stations', '/as2_stations', 'POST'] as const
}

export function getPostAs2StationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_stations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.as2_stations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAs2StationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.as2_stations.$post>) {
      return parseResponse(client.as2_stations.$post(args, options))
    },
  })
}

export function createPostAs2Stations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.as2_stations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.as2_stations.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAs2StationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAs2StationsIdQueryKey(
  args: InferRequestType<(typeof client.as2_stations)[':id']['$get']>,
) {
  return ['as2_stations', '/as2_stations/:id', args] as const
}

export function getAs2StationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.as2_stations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.as2_stations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.as2_stations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAs2StationsIdQueryKey>
  >({
    queryKey: getAs2StationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.as2_stations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAs2StationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.as2_stations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.as2_stations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.as2_stations)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAs2StationsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAs2StationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteAs2StationsIdMutationKey() {
  return ['as2_stations', '/as2_stations/:id', 'DELETE'] as const
}

export function getDeleteAs2StationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.as2_stations)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.as2_stations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAs2StationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.as2_stations)[':id']['$delete']>) {
      return parseResponse(client.as2_stations[':id'].$delete(args, options))
    },
  })
}

export function createDeleteAs2StationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.as2_stations)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.as2_stations)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAs2StationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchAs2StationsIdMutationKey() {
  return ['as2_stations', '/as2_stations/:id', 'PATCH'] as const
}

export function getPatchAs2StationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.as2_stations)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.as2_stations)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAs2StationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.as2_stations)[':id']['$patch']>) {
      return parseResponse(client.as2_stations[':id'].$patch(args, options))
    },
  })
}

export function createPatchAs2StationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.as2_stations)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.as2_stations)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAs2StationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAutomationRunsQueryKey(
  args: InferRequestType<typeof client.automation_runs.$get>,
) {
  return ['automation_runs', '/automation_runs', args] as const
}

export function getAutomationRunsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automation_runs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.automation_runs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automation_runs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationRunsQueryKey>
  >({
    queryKey: getAutomationRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation_runs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAutomationRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automation_runs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.automation_runs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.automation_runs.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAutomationRunsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAutomationRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAutomationRunsIdQueryKey(
  args: InferRequestType<(typeof client.automation_runs)[':id']['$get']>,
) {
  return ['automation_runs', '/automation_runs/:id', args] as const
}

export function getAutomationRunsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.automation_runs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automation_runs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.automation_runs)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationRunsIdQueryKey>
  >({
    queryKey: getAutomationRunsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation_runs[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAutomationRunsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.automation_runs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.automation_runs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.automation_runs)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAutomationRunsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAutomationRunsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAutomationsQueryKey(args: InferRequestType<typeof client.automations.$get>) {
  return ['automations', '/automations', args] as const
}

export function getAutomationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.automations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAutomationsQueryKey>
  >({
    queryKey: getAutomationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAutomations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.automations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAutomationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAutomationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAutomationsMutationKey() {
  return ['automations', '/automations', 'POST'] as const
}

export function getPostAutomationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$post>>>>>,
    TError,
    InferRequestType<typeof client.automations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.automations.$post>) {
      return parseResponse(client.automations.$post(args, options))
    },
  })
}

export function createPostAutomations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.automations.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAutomationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAutomationsIdQueryKey(
  args: InferRequestType<(typeof client.automations)[':id']['$get']>,
) {
  return ['automations', '/automations/:id', args] as const
}

export function getAutomationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.automations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.automations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsIdQueryKey>
  >({
    queryKey: getAutomationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAutomationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.automations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.automations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.automations)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAutomationsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAutomationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteAutomationsIdMutationKey() {
  return ['automations', '/automations/:id', 'DELETE'] as const
}

export function getDeleteAutomationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.automations)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.automations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAutomationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.automations)[':id']['$delete']>) {
      return parseResponse(client.automations[':id'].$delete(args, options))
    },
  })
}

export function createDeleteAutomationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.automations)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.automations)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAutomationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchAutomationsIdMutationKey() {
  return ['automations', '/automations/:id', 'PATCH'] as const
}

export function getPatchAutomationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.automations)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.automations)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAutomationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.automations)[':id']['$patch']>) {
      return parseResponse(client.automations[':id'].$patch(args, options))
    },
  })
}

export function createPatchAutomationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.automations)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.automations)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAutomationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBandwidthSnapshotsQueryKey(
  args: InferRequestType<typeof client.bandwidth_snapshots.$get>,
) {
  return ['bandwidth_snapshots', '/bandwidth_snapshots', args] as const
}

export function getBandwidthSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bandwidth_snapshots.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bandwidth_snapshots.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bandwidth_snapshots.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBandwidthSnapshotsQueryKey>
  >({
    queryKey: getBandwidthSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bandwidth_snapshots.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBandwidthSnapshots<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bandwidth_snapshots.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bandwidth_snapshots.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bandwidth_snapshots.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBandwidthSnapshotsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBandwidthSnapshotsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBehaviorsQueryKey(args: InferRequestType<typeof client.behaviors.$get>) {
  return ['behaviors', '/behaviors', args] as const
}

export function getBehaviorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.behaviors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.behaviors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.behaviors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBehaviorsQueryKey>
  >({
    queryKey: getBehaviorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.behaviors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBehaviors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.behaviors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.behaviors.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.behaviors.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getBehaviorsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBehaviorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBehaviorsMutationKey() {
  return ['behaviors', '/behaviors', 'POST'] as const
}

export function getPostBehaviorsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.behaviors.$post>>>>>,
    TError,
    InferRequestType<typeof client.behaviors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBehaviorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.behaviors.$post>) {
      return parseResponse(client.behaviors.$post(args, options))
    },
  })
}

export function createPostBehaviors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.behaviors.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.behaviors.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBehaviorsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBehaviorsFoldersPathQueryKey(
  args: InferRequestType<(typeof client.behaviors.folders)[':path']['$get']>,
) {
  return ['behaviors', '/behaviors/folders/:path', args] as const
}

export function getBehaviorsFoldersPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.behaviors.folders)[':path']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.behaviors.folders)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.behaviors.folders)[':path']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBehaviorsFoldersPathQueryKey>
  >({
    queryKey: getBehaviorsFoldersPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.behaviors.folders[':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBehaviorsFoldersPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.behaviors.folders)[':path']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.behaviors.folders)[':path']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.behaviors.folders)[':path']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBehaviorsFoldersPathQueryKey>
        >
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
      ...getBehaviorsFoldersPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostBehaviorsWebhookTestMutationKey() {
  return ['behaviors', '/behaviors/webhook/test', 'POST'] as const
}

export function getPostBehaviorsWebhookTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.behaviors.webhook.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.behaviors.webhook.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBehaviorsWebhookTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.behaviors.webhook.test.$post>) {
      return parseResponse(client.behaviors.webhook.test.$post(args, options))
    },
  })
}

export function createPostBehaviorsWebhookTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.behaviors.webhook.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.behaviors.webhook.test.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBehaviorsWebhookTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBehaviorsIdQueryKey(
  args: InferRequestType<(typeof client.behaviors)[':id']['$get']>,
) {
  return ['behaviors', '/behaviors/:id', args] as const
}

export function getBehaviorsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.behaviors)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.behaviors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.behaviors)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBehaviorsIdQueryKey>
  >({
    queryKey: getBehaviorsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.behaviors[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBehaviorsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.behaviors)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.behaviors)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.behaviors)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBehaviorsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBehaviorsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteBehaviorsIdMutationKey() {
  return ['behaviors', '/behaviors/:id', 'DELETE'] as const
}

export function getDeleteBehaviorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.behaviors)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.behaviors)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBehaviorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.behaviors)[':id']['$delete']>) {
      return parseResponse(client.behaviors[':id'].$delete(args, options))
    },
  })
}

export function createDeleteBehaviorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.behaviors)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.behaviors)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBehaviorsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchBehaviorsIdMutationKey() {
  return ['behaviors', '/behaviors/:id', 'PATCH'] as const
}

export function getPatchBehaviorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.behaviors)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.behaviors)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBehaviorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.behaviors)[':id']['$patch']>) {
      return parseResponse(client.behaviors[':id'].$patch(args, options))
    },
  })
}

export function createPatchBehaviorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.behaviors)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.behaviors)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBehaviorsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBundleDownloadsQueryKey(
  args: InferRequestType<typeof client.bundle_downloads.$get>,
) {
  return ['bundle_downloads', '/bundle_downloads', args] as const
}

export function getBundleDownloadsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_downloads.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bundle_downloads.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_downloads.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBundleDownloadsQueryKey>
  >({
    queryKey: getBundleDownloadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bundle_downloads.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBundleDownloads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_downloads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bundle_downloads.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bundle_downloads.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBundleDownloadsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBundleDownloadsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBundleNotificationsQueryKey(
  args: InferRequestType<typeof client.bundle_notifications.$get>,
) {
  return ['bundle_notifications', '/bundle_notifications', args] as const
}

export function getBundleNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_notifications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bundle_notifications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBundleNotificationsQueryKey>
  >({
    queryKey: getBundleNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bundle_notifications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBundleNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bundle_notifications.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bundle_notifications.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBundleNotificationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBundleNotificationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBundleNotificationsMutationKey() {
  return ['bundle_notifications', '/bundle_notifications', 'POST'] as const
}

export function getPostBundleNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bundle_notifications.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.bundle_notifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBundleNotificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bundle_notifications.$post>) {
      return parseResponse(client.bundle_notifications.$post(args, options))
    },
  })
}

export function createPostBundleNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bundle_notifications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bundle_notifications.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBundleNotificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBundleNotificationsIdQueryKey(
  args: InferRequestType<(typeof client.bundle_notifications)[':id']['$get']>,
) {
  return ['bundle_notifications', '/bundle_notifications/:id', args] as const
}

export function getBundleNotificationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bundle_notifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bundle_notifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bundle_notifications)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBundleNotificationsIdQueryKey>
  >({
    queryKey: getBundleNotificationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bundle_notifications[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBundleNotificationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bundle_notifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bundle_notifications)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bundle_notifications)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBundleNotificationsIdQueryKey>
        >
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
      ...getBundleNotificationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteBundleNotificationsIdMutationKey() {
  return ['bundle_notifications', '/bundle_notifications/:id', 'DELETE'] as const
}

export function getDeleteBundleNotificationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bundle_notifications)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.bundle_notifications)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBundleNotificationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bundle_notifications)[':id']['$delete']>,
    ) {
      return parseResponse(client.bundle_notifications[':id'].$delete(args, options))
    },
  })
}

export function createDeleteBundleNotificationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.bundle_notifications)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.bundle_notifications)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBundleNotificationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchBundleNotificationsIdMutationKey() {
  return ['bundle_notifications', '/bundle_notifications/:id', 'PATCH'] as const
}

export function getPatchBundleNotificationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bundle_notifications)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bundle_notifications)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBundleNotificationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bundle_notifications)[':id']['$patch']>,
    ) {
      return parseResponse(client.bundle_notifications[':id'].$patch(args, options))
    },
  })
}

export function createPatchBundleNotificationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bundle_notifications)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bundle_notifications)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBundleNotificationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBundleRecipientsQueryKey(
  args: InferRequestType<typeof client.bundle_recipients.$get>,
) {
  return ['bundle_recipients', '/bundle_recipients', args] as const
}

export function getBundleRecipientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_recipients.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bundle_recipients.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_recipients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBundleRecipientsQueryKey>
  >({
    queryKey: getBundleRecipientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bundle_recipients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBundleRecipients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_recipients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bundle_recipients.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bundle_recipients.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBundleRecipientsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBundleRecipientsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBundleRecipientsMutationKey() {
  return ['bundle_recipients', '/bundle_recipients', 'POST'] as const
}

export function getPostBundleRecipientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_recipients.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bundle_recipients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBundleRecipientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bundle_recipients.$post>) {
      return parseResponse(client.bundle_recipients.$post(args, options))
    },
  })
}

export function createPostBundleRecipients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bundle_recipients.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bundle_recipients.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBundleRecipientsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBundleRegistrationsQueryKey(
  args: InferRequestType<typeof client.bundle_registrations.$get>,
) {
  return ['bundle_registrations', '/bundle_registrations', args] as const
}

export function getBundleRegistrationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_registrations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bundle_registrations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_registrations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBundleRegistrationsQueryKey>
  >({
    queryKey: getBundleRegistrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bundle_registrations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBundleRegistrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundle_registrations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bundle_registrations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bundle_registrations.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBundleRegistrationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBundleRegistrationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBundlesQueryKey(args: InferRequestType<typeof client.bundles.$get>) {
  return ['bundles', '/bundles', args] as const
}

export function getBundlesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bundles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBundlesQueryKey>
  >({
    queryKey: getBundlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bundles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBundles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bundles.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundles.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getBundlesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBundlesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBundlesMutationKey() {
  return ['bundles', '/bundles', 'POST'] as const
}

export function getPostBundlesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundles.$post>>>>>,
    TError,
    InferRequestType<typeof client.bundles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBundlesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bundles.$post>) {
      return parseResponse(client.bundles.$post(args, options))
    },
  })
}

export function createPostBundles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundles.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.bundles.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBundlesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBundlesIdQueryKey(
  args: InferRequestType<(typeof client.bundles)[':id']['$get']>,
) {
  return ['bundles', '/bundles/:id', args] as const
}

export function getBundlesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bundles)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.bundles)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bundles)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBundlesIdQueryKey>
  >({
    queryKey: getBundlesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bundles[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBundlesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bundles)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bundles)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bundles)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBundlesIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBundlesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteBundlesIdMutationKey() {
  return ['bundles', '/bundles/:id', 'DELETE'] as const
}

export function getDeleteBundlesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bundles)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.bundles)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBundlesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bundles)[':id']['$delete']>) {
      return parseResponse(client.bundles[':id'].$delete(args, options))
    },
  })
}

export function createDeleteBundlesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.bundles)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.bundles)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBundlesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchBundlesIdMutationKey() {
  return ['bundles', '/bundles/:id', 'PATCH'] as const
}

export function getPatchBundlesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bundles)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.bundles)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBundlesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bundles)[':id']['$patch']>) {
      return parseResponse(client.bundles[':id'].$patch(args, options))
    },
  })
}

export function createPatchBundlesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bundles)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.bundles)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBundlesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBundlesIdShareMutationKey() {
  return ['bundles', '/bundles/:id/share', 'POST'] as const
}

export function getPostBundlesIdShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bundles)[':id']['share']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.bundles)[':id']['share']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBundlesIdShareMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bundles)[':id']['share']['$post']>) {
      return parseResponse(client.bundles[':id'].share.$post(args, options))
    },
  })
}

export function createPostBundlesIdShare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.bundles)[':id']['share']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.bundles)[':id']['share']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBundlesIdShareMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getClickwrapsQueryKey(args: InferRequestType<typeof client.clickwraps.$get>) {
  return ['clickwraps', '/clickwraps', args] as const
}

export function getClickwrapsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickwraps.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.clickwraps.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickwraps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClickwrapsQueryKey>
  >({
    queryKey: getClickwrapsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clickwraps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createClickwraps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickwraps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.clickwraps.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickwraps.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getClickwrapsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClickwrapsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostClickwrapsMutationKey() {
  return ['clickwraps', '/clickwraps', 'POST'] as const
}

export function getPostClickwrapsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickwraps.$post>>>>>,
    TError,
    InferRequestType<typeof client.clickwraps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClickwrapsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.clickwraps.$post>) {
      return parseResponse(client.clickwraps.$post(args, options))
    },
  })
}

export function createPostClickwraps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickwraps.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.clickwraps.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClickwrapsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getClickwrapsIdQueryKey(
  args: InferRequestType<(typeof client.clickwraps)[':id']['$get']>,
) {
  return ['clickwraps', '/clickwraps/:id', args] as const
}

export function getClickwrapsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clickwraps)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clickwraps)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clickwraps)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClickwrapsIdQueryKey>
  >({
    queryKey: getClickwrapsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clickwraps[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createClickwrapsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clickwraps)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.clickwraps)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.clickwraps)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClickwrapsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClickwrapsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteClickwrapsIdMutationKey() {
  return ['clickwraps', '/clickwraps/:id', 'DELETE'] as const
}

export function getDeleteClickwrapsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clickwraps)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.clickwraps)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClickwrapsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.clickwraps)[':id']['$delete']>) {
      return parseResponse(client.clickwraps[':id'].$delete(args, options))
    },
  })
}

export function createDeleteClickwrapsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.clickwraps)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.clickwraps)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteClickwrapsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchClickwrapsIdMutationKey() {
  return ['clickwraps', '/clickwraps/:id', 'PATCH'] as const
}

export function getPatchClickwrapsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clickwraps)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.clickwraps)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchClickwrapsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.clickwraps)[':id']['$patch']>) {
      return parseResponse(client.clickwraps[':id'].$patch(args, options))
    },
  })
}

export function createPatchClickwrapsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.clickwraps)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.clickwraps)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchClickwrapsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDnsRecordsQueryKey(args: InferRequestType<typeof client.dns_records.$get>) {
  return ['dns_records', '/dns_records', args] as const
}

export function getDnsRecordsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_records.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dns_records.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_records.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDnsRecordsQueryKey>
  >({
    queryKey: getDnsRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns_records.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDnsRecords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_records.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dns_records.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_records.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getDnsRecordsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDnsRecordsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getExternalEventsQueryKey(
  args: InferRequestType<typeof client.external_events.$get>,
) {
  return ['external_events', '/external_events', args] as const
}

export function getExternalEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.external_events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExternalEventsQueryKey>
  >({
    queryKey: getExternalEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.external_events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createExternalEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.external_events.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.external_events.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getExternalEventsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExternalEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostExternalEventsMutationKey() {
  return ['external_events', '/external_events', 'POST'] as const
}

export function getPostExternalEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_events.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.external_events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExternalEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.external_events.$post>) {
      return parseResponse(client.external_events.$post(args, options))
    },
  })
}

export function createPostExternalEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.external_events.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.external_events.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostExternalEventsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getExternalEventsIdQueryKey(
  args: InferRequestType<(typeof client.external_events)[':id']['$get']>,
) {
  return ['external_events', '/external_events/:id', args] as const
}

export function getExternalEventsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.external_events)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.external_events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.external_events)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExternalEventsIdQueryKey>
  >({
    queryKey: getExternalEventsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.external_events[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExternalEventsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.external_events)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.external_events)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.external_events)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getExternalEventsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExternalEventsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostFileActionsBeginUploadPathMutationKey() {
  return ['file_actions', '/file_actions/begin_upload/:path', 'POST'] as const
}

export function getPostFileActionsBeginUploadPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.file_actions.begin_upload)[':path']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.file_actions.begin_upload)[':path']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFileActionsBeginUploadPathMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.file_actions.begin_upload)[':path']['$post']>,
    ) {
      return parseResponse(client.file_actions.begin_upload[':path'].$post(args, options))
    },
  })
}

export function createPostFileActionsBeginUploadPath<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.file_actions.begin_upload)[':path']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.file_actions.begin_upload)[':path']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFileActionsBeginUploadPathMutationOptions<
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

export function getPostFileActionsCopyPathMutationKey() {
  return ['file_actions', '/file_actions/copy/:path', 'POST'] as const
}

export function getPostFileActionsCopyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.file_actions.copy)[':path']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.file_actions.copy)[':path']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFileActionsCopyPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.file_actions.copy)[':path']['$post']>) {
      return parseResponse(client.file_actions.copy[':path'].$post(args, options))
    },
  })
}

export function createPostFileActionsCopyPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.file_actions.copy)[':path']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.file_actions.copy)[':path']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFileActionsCopyPathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFileActionsMetadataPathQueryKey(
  args: InferRequestType<(typeof client.file_actions.metadata)[':path']['$get']>,
) {
  return ['file_actions', '/file_actions/metadata/:path', args] as const
}

export function getFileActionsMetadataPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.file_actions.metadata)[':path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.file_actions.metadata)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.file_actions.metadata)[':path']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileActionsMetadataPathQueryKey>
  >({
    queryKey: getFileActionsMetadataPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.file_actions.metadata[':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFileActionsMetadataPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.file_actions.metadata)[':path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.file_actions.metadata)[':path']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.file_actions.metadata)[':path']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFileActionsMetadataPathQueryKey>
        >
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
      ...getFileActionsMetadataPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostFileActionsMovePathMutationKey() {
  return ['file_actions', '/file_actions/move/:path', 'POST'] as const
}

export function getPostFileActionsMovePathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.file_actions.move)[':path']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.file_actions.move)[':path']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFileActionsMovePathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.file_actions.move)[':path']['$post']>) {
      return parseResponse(client.file_actions.move[':path'].$post(args, options))
    },
  })
}

export function createPostFileActionsMovePath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.file_actions.move)[':path']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.file_actions.move)[':path']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFileActionsMovePathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostFileCommentReactionsMutationKey() {
  return ['file_comment_reactions', '/file_comment_reactions', 'POST'] as const
}

export function getPostFileCommentReactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.file_comment_reactions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.file_comment_reactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFileCommentReactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.file_comment_reactions.$post>) {
      return parseResponse(client.file_comment_reactions.$post(args, options))
    },
  })
}

export function createPostFileCommentReactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.file_comment_reactions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.file_comment_reactions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFileCommentReactionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteFileCommentReactionsIdMutationKey() {
  return ['file_comment_reactions', '/file_comment_reactions/:id', 'DELETE'] as const
}

export function getDeleteFileCommentReactionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_comment_reactions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.file_comment_reactions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFileCommentReactionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.file_comment_reactions)[':id']['$delete']>,
    ) {
      return parseResponse(client.file_comment_reactions[':id'].$delete(args, options))
    },
  })
}

export function createDeleteFileCommentReactionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.file_comment_reactions)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.file_comment_reactions)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFileCommentReactionsIdMutationOptions<
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

export function getPostFileCommentsMutationKey() {
  return ['file_comments', '/file_comments', 'POST'] as const
}

export function getPostFileCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file_comments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.file_comments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFileCommentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.file_comments.$post>) {
      return parseResponse(client.file_comments.$post(args, options))
    },
  })
}

export function createPostFileComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file_comments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.file_comments.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFileCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFileCommentsFilesPathQueryKey(
  args: InferRequestType<(typeof client.file_comments.files)[':path']['$get']>,
) {
  return ['file_comments', '/file_comments/files/:path', args] as const
}

export function getFileCommentsFilesPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.file_comments.files)[':path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.file_comments.files)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.file_comments.files)[':path']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileCommentsFilesPathQueryKey>
  >({
    queryKey: getFileCommentsFilesPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.file_comments.files[':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFileCommentsFilesPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.file_comments.files)[':path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.file_comments.files)[':path']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.file_comments.files)[':path']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFileCommentsFilesPathQueryKey>
        >
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
      ...getFileCommentsFilesPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteFileCommentsIdMutationKey() {
  return ['file_comments', '/file_comments/:id', 'DELETE'] as const
}

export function getDeleteFileCommentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.file_comments)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.file_comments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFileCommentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.file_comments)[':id']['$delete']>) {
      return parseResponse(client.file_comments[':id'].$delete(args, options))
    },
  })
}

export function createDeleteFileCommentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.file_comments)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.file_comments)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFileCommentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchFileCommentsIdMutationKey() {
  return ['file_comments', '/file_comments/:id', 'PATCH'] as const
}

export function getPatchFileCommentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.file_comments)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.file_comments)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFileCommentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.file_comments)[':id']['$patch']>) {
      return parseResponse(client.file_comments[':id'].$patch(args, options))
    },
  })
}

export function createPatchFileCommentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.file_comments)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.file_comments)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFileCommentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFileMigrationsIdQueryKey(
  args: InferRequestType<(typeof client.file_migrations)[':id']['$get']>,
) {
  return ['file_migrations', '/file_migrations/:id', args] as const
}

export function getFileMigrationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.file_migrations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.file_migrations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.file_migrations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileMigrationsIdQueryKey>
  >({
    queryKey: getFileMigrationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.file_migrations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFileMigrationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.file_migrations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.file_migrations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.file_migrations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFileMigrationsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFileMigrationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFilesPathQueryKey(
  args: InferRequestType<(typeof client.files)[':path']['$get']>,
) {
  return ['files', '/files/:path', args] as const
}

export function getFilesPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.files)[':path']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':path']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFilesPathQueryKey>
  >({
    queryKey: getFilesPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':path'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFilesPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)[':path']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':path']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFilesPathQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesPathQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostFilesPathMutationKey() {
  return ['files', '/files/:path', 'POST'] as const
}

export function getPostFilesPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':path']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.files)[':path']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':path']['$post']>) {
      return parseResponse(client.files[':path'].$post(args, options))
    },
  })
}

export function createPostFilesPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':path']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.files)[':path']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesPathMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteFilesPathMutationKey() {
  return ['files', '/files/:path', 'DELETE'] as const
}

export function getDeleteFilesPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':path']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.files)[':path']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':path']['$delete']>) {
      return parseResponse(client.files[':path'].$delete(args, options))
    },
  })
}

export function createDeleteFilesPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':path']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.files)[':path']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFilesPathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchFilesPathMutationKey() {
  return ['files', '/files/:path', 'PATCH'] as const
}

export function getPatchFilesPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':path']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':path']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFilesPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':path']['$patch']>) {
      return parseResponse(client.files[':path'].$patch(args, options))
    },
  })
}

export function createPatchFilesPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':path']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.files)[':path']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFilesPathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFoldersPathQueryKey(
  args: InferRequestType<(typeof client.folders)[':path']['$get']>,
) {
  return ['folders', '/folders/:path', args] as const
}

export function getFoldersPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':path']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersPathQueryKey>
  >({
    queryKey: getFoldersPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders[':path'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFoldersPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.folders)[':path']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':path']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFoldersPathQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFoldersPathQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostFoldersPathMutationKey() {
  return ['folders', '/folders/:path', 'POST'] as const
}

export function getPostFoldersPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':path']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.folders)[':path']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFoldersPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.folders)[':path']['$post']>) {
      return parseResponse(client.folders[':path'].$post(args, options))
    },
  })
}

export function createPostFoldersPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':path']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.folders)[':path']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFoldersPathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFormFieldSetsQueryKey(
  args: InferRequestType<typeof client.form_field_sets.$get>,
) {
  return ['form_field_sets', '/form_field_sets', args] as const
}

export function getFormFieldSetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.form_field_sets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.form_field_sets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.form_field_sets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFormFieldSetsQueryKey>
  >({
    queryKey: getFormFieldSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.form_field_sets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormFieldSets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.form_field_sets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.form_field_sets.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.form_field_sets.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormFieldSetsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormFieldSetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostFormFieldSetsMutationKey() {
  return ['form_field_sets', '/form_field_sets', 'POST'] as const
}

export function getPostFormFieldSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.form_field_sets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.form_field_sets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFormFieldSetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.form_field_sets.$post>) {
      return parseResponse(client.form_field_sets.$post(args, options))
    },
  })
}

export function createPostFormFieldSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.form_field_sets.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.form_field_sets.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFormFieldSetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFormFieldSetsIdQueryKey(
  args: InferRequestType<(typeof client.form_field_sets)[':id']['$get']>,
) {
  return ['form_field_sets', '/form_field_sets/:id', args] as const
}

export function getFormFieldSetsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.form_field_sets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.form_field_sets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.form_field_sets)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormFieldSetsIdQueryKey>
  >({
    queryKey: getFormFieldSetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.form_field_sets[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormFieldSetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.form_field_sets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.form_field_sets)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.form_field_sets)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFormFieldSetsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormFieldSetsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteFormFieldSetsIdMutationKey() {
  return ['form_field_sets', '/form_field_sets/:id', 'DELETE'] as const
}

export function getDeleteFormFieldSetsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.form_field_sets)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.form_field_sets)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFormFieldSetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.form_field_sets)[':id']['$delete']>) {
      return parseResponse(client.form_field_sets[':id'].$delete(args, options))
    },
  })
}

export function createDeleteFormFieldSetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.form_field_sets)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.form_field_sets)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFormFieldSetsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchFormFieldSetsIdMutationKey() {
  return ['form_field_sets', '/form_field_sets/:id', 'PATCH'] as const
}

export function getPatchFormFieldSetsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.form_field_sets)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.form_field_sets)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFormFieldSetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.form_field_sets)[':id']['$patch']>) {
      return parseResponse(client.form_field_sets[':id'].$patch(args, options))
    },
  })
}

export function createPatchFormFieldSetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.form_field_sets)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.form_field_sets)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFormFieldSetsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupUsersQueryKey(args: InferRequestType<typeof client.group_users.$get>) {
  return ['group_users', '/group_users', args] as const
}

export function getGroupUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group_users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.group_users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group_users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupUsersQueryKey>
  >({
    queryKey: getGroupUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.group_users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGroupUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group_users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.group_users.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group_users.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getGroupUsersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostGroupUsersMutationKey() {
  return ['group_users', '/group_users', 'POST'] as const
}

export function getPostGroupUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group_users.$post>>>>>,
    TError,
    InferRequestType<typeof client.group_users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.group_users.$post>) {
      return parseResponse(client.group_users.$post(args, options))
    },
  })
}

export function createPostGroupUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group_users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.group_users.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteGroupUsersIdMutationKey() {
  return ['group_users', '/group_users/:id', 'DELETE'] as const
}

export function getDeleteGroupUsersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.group_users)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.group_users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.group_users)[':id']['$delete']>) {
      return parseResponse(client.group_users[':id'].$delete(args, options))
    },
  })
}

export function createDeleteGroupUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.group_users)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.group_users)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGroupUsersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchGroupUsersIdMutationKey() {
  return ['group_users', '/group_users/:id', 'PATCH'] as const
}

export function getPatchGroupUsersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.group_users)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.group_users)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGroupUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.group_users)[':id']['$patch']>) {
      return parseResponse(client.group_users[':id'].$patch(args, options))
    },
  })
}

export function createPatchGroupUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.group_users)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.group_users)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchGroupUsersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.groups.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getGroupsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.groups.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteGroupsGroupIdMembershipsUserIdMutationKey() {
  return ['groups', '/groups/:group_id/memberships/:user_id', 'DELETE'] as const
}

export function getDeleteGroupsGroupIdMembershipsUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.groups)[':group_id']['memberships'][':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsGroupIdMembershipsUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':group_id']['memberships'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.groups[':group_id'].memberships[':user_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteGroupsGroupIdMembershipsUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.groups)[':group_id']['memberships'][':user_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.groups)[':group_id']['memberships'][':user_id']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGroupsGroupIdMembershipsUserIdMutationOptions<
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

export function getPatchGroupsGroupIdMembershipsUserIdMutationKey() {
  return ['groups', '/groups/:group_id/memberships/:user_id', 'PATCH'] as const
}

export function getPatchGroupsGroupIdMembershipsUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.groups)[':group_id']['memberships'][':user_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGroupsGroupIdMembershipsUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':group_id']['memberships'][':user_id']['$patch']
      >,
    ) {
      return parseResponse(client.groups[':group_id'].memberships[':user_id'].$patch(args, options))
    },
  })
}

export function createPatchGroupsGroupIdMembershipsUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.groups)[':group_id']['memberships'][':user_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.groups)[':group_id']['memberships'][':user_id']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchGroupsGroupIdMembershipsUserIdMutationOptions<
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

export function getGroupsGroupIdPermissionsQueryKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['permissions']['$get']>,
) {
  return ['groups', '/groups/:group_id/permissions', args] as const
}

export function getGroupsGroupIdPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdPermissionsQueryKey>
  >({
    queryKey: getGroupsGroupIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':group_id'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupsGroupIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups)[':group_id']['permissions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':group_id']['permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGroupsGroupIdPermissionsQueryKey>
        >
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
      ...getGroupsGroupIdPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGroupsGroupIdUsersQueryKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['users']['$get']>,
) {
  return ['groups', '/groups/:group_id/users', args] as const
}

export function getGroupsGroupIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdUsersQueryKey>
  >({
    queryKey: getGroupsGroupIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':group_id'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupsGroupIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups)[':group_id']['users']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGroupsGroupIdUsersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsGroupIdUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostGroupsGroupIdUsersMutationKey() {
  return ['groups', '/groups/:group_id/users', 'POST'] as const
}

export function getPostGroupsGroupIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':group_id']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsGroupIdUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':group_id']['users']['$post']>,
    ) {
      return parseResponse(client.groups[':group_id'].users.$post(args, options))
    },
  })
}

export function createPostGroupsGroupIdUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':group_id']['users']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsGroupIdUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupsIdQueryKey(args: InferRequestType<(typeof client.groups)[':id']['$get']>) {
  return ['groups', '/groups/:id', args] as const
}

export function getGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.groups)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIdQueryKey>
  >({
    queryKey: getGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGroupsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGroupsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteGroupsIdMutationKey() {
  return ['groups', '/groups/:id', 'DELETE'] as const
}

export function getDeleteGroupsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.groups)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':id']['$delete']>) {
      return parseResponse(client.groups[':id'].$delete(args, options))
    },
  })
}

export function createDeleteGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.groups)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGroupsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchGroupsIdMutationKey() {
  return ['groups', '/groups/:id', 'PATCH'] as const
}

export function getPatchGroupsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.groups)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':id']['$patch']>) {
      return parseResponse(client.groups[':id'].$patch(args, options))
    },
  })
}

export function createPatchGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchGroupsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHistoryQueryKey(args: InferRequestType<typeof client.history.$get>) {
  return ['history', '/history', args] as const
}

export function getHistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.history.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHistoryQueryKey>
  >({
    queryKey: getHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.history.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.history.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getHistoryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHistoryFilesPathQueryKey(
  args: InferRequestType<(typeof client.history.files)[':path']['$get']>,
) {
  return ['history', '/history/files/:path', args] as const
}

export function getHistoryFilesPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.history.files)[':path']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.history.files)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.history.files)[':path']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHistoryFilesPathQueryKey>
  >({
    queryKey: getHistoryFilesPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.history.files[':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHistoryFilesPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.history.files)[':path']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.history.files)[':path']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.history.files)[':path']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHistoryFilesPathQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHistoryFilesPathQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHistoryFoldersPathQueryKey(
  args: InferRequestType<(typeof client.history.folders)[':path']['$get']>,
) {
  return ['history', '/history/folders/:path', args] as const
}

export function getHistoryFoldersPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.history.folders)[':path']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.history.folders)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.history.folders)[':path']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHistoryFoldersPathQueryKey>
  >({
    queryKey: getHistoryFoldersPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.history.folders[':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHistoryFoldersPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.history.folders)[':path']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.history.folders)[':path']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.history.folders)[':path']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHistoryFoldersPathQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHistoryFoldersPathQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHistoryLoginQueryKey(args: InferRequestType<typeof client.history.login.$get>) {
  return ['history', '/history/login', args] as const
}

export function getHistoryLoginQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.login.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.history.login.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.login.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHistoryLoginQueryKey>
  >({
    queryKey: getHistoryLoginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.history.login.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHistoryLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.login.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.history.login.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.login.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getHistoryLoginQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHistoryLoginQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHistoryUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.history.users)[':user_id']['$get']>,
) {
  return ['history', '/history/users/:user_id', args] as const
}

export function getHistoryUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.history.users)[':user_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.history.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.history.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHistoryUsersUserIdQueryKey>
  >({
    queryKey: getHistoryUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.history.users[':user_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHistoryUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.history.users)[':user_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.history.users)[':user_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.history.users)[':user_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHistoryUsersUserIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHistoryUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHistoryExportResultsQueryKey(
  args: InferRequestType<typeof client.history_export_results.$get>,
) {
  return ['history_export_results', '/history_export_results', args] as const
}

export function getHistoryExportResultsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history_export_results.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.history_export_results.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.history_export_results.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHistoryExportResultsQueryKey>
  >({
    queryKey: getHistoryExportResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.history_export_results.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHistoryExportResults<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history_export_results.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.history_export_results.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.history_export_results.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHistoryExportResultsQueryKey>
        >
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
      ...getHistoryExportResultsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostHistoryExportsMutationKey() {
  return ['history_exports', '/history_exports', 'POST'] as const
}

export function getPostHistoryExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history_exports.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.history_exports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHistoryExportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.history_exports.$post>) {
      return parseResponse(client.history_exports.$post(args, options))
    },
  })
}

export function createPostHistoryExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.history_exports.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.history_exports.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostHistoryExportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHistoryExportsIdQueryKey(
  args: InferRequestType<(typeof client.history_exports)[':id']['$get']>,
) {
  return ['history_exports', '/history_exports/:id', args] as const
}

export function getHistoryExportsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.history_exports)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.history_exports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.history_exports)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHistoryExportsIdQueryKey>
  >({
    queryKey: getHistoryExportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.history_exports[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHistoryExportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.history_exports)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.history_exports)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.history_exports)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHistoryExportsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHistoryExportsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInboxRecipientsQueryKey(
  args: InferRequestType<typeof client.inbox_recipients.$get>,
) {
  return ['inbox_recipients', '/inbox_recipients', args] as const
}

export function getInboxRecipientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_recipients.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.inbox_recipients.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_recipients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInboxRecipientsQueryKey>
  >({
    queryKey: getInboxRecipientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inbox_recipients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInboxRecipients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_recipients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.inbox_recipients.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.inbox_recipients.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInboxRecipientsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInboxRecipientsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostInboxRecipientsMutationKey() {
  return ['inbox_recipients', '/inbox_recipients', 'POST'] as const
}

export function getPostInboxRecipientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_recipients.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.inbox_recipients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInboxRecipientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.inbox_recipients.$post>) {
      return parseResponse(client.inbox_recipients.$post(args, options))
    },
  })
}

export function createPostInboxRecipients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.inbox_recipients.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.inbox_recipients.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInboxRecipientsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInboxRegistrationsQueryKey(
  args: InferRequestType<typeof client.inbox_registrations.$get>,
) {
  return ['inbox_registrations', '/inbox_registrations', args] as const
}

export function getInboxRegistrationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_registrations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.inbox_registrations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_registrations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInboxRegistrationsQueryKey>
  >({
    queryKey: getInboxRegistrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inbox_registrations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInboxRegistrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_registrations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.inbox_registrations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.inbox_registrations.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInboxRegistrationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInboxRegistrationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInboxUploadsQueryKey(args: InferRequestType<typeof client.inbox_uploads.$get>) {
  return ['inbox_uploads', '/inbox_uploads', args] as const
}

export function getInboxUploadsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_uploads.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.inbox_uploads.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_uploads.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInboxUploadsQueryKey>
  >({
    queryKey: getInboxUploadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inbox_uploads.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInboxUploads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_uploads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.inbox_uploads.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox_uploads.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getInboxUploadsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInboxUploadsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInvoicesQueryKey(args: InferRequestType<typeof client.invoices.$get>) {
  return ['invoices', '/invoices', args] as const
}

export function getInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.invoices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvoicesQueryKey>
  >({
    queryKey: getInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invoices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.invoices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getInvoicesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvoicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInvoicesIdQueryKey(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
) {
  return ['invoices', '/invoices/:id', args] as const
}

export function getInvoicesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.invoices)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesIdQueryKey>
  >({
    queryKey: getInvoicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invoices[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInvoicesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.invoices)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInvoicesIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvoicesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getIpAddressesQueryKey(args: InferRequestType<typeof client.ip_addresses.$get>) {
  return ['ip_addresses', '/ip_addresses', args] as const
}

export function getIpAddressesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_addresses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ip_addresses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_addresses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpAddressesQueryKey>
  >({
    queryKey: getIpAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ip_addresses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIpAddresses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ip_addresses.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_addresses.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getIpAddressesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpAddressesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getIpAddressesExavaultReservedQueryKey(
  args: InferRequestType<(typeof client.ip_addresses)['exavault-reserved']['$get']>,
) {
  return ['ip_addresses', '/ip_addresses/exavault-reserved', args] as const
}

export function getIpAddressesExavaultReservedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ip_addresses)['exavault-reserved']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ip_addresses)['exavault-reserved']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ip_addresses)['exavault-reserved']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpAddressesExavaultReservedQueryKey>
  >({
    queryKey: getIpAddressesExavaultReservedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ip_addresses['exavault-reserved'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIpAddressesExavaultReserved<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ip_addresses)['exavault-reserved']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ip_addresses)['exavault-reserved']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ip_addresses)['exavault-reserved']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIpAddressesExavaultReservedQueryKey>
        >
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
      ...getIpAddressesExavaultReservedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIpAddressesReservedQueryKey(
  args: InferRequestType<typeof client.ip_addresses.reserved.$get>,
) {
  return ['ip_addresses', '/ip_addresses/reserved', args] as const
}

export function getIpAddressesReservedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_addresses.reserved.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ip_addresses.reserved.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ip_addresses.reserved.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpAddressesReservedQueryKey>
  >({
    queryKey: getIpAddressesReservedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ip_addresses.reserved.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIpAddressesReserved<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip_addresses.reserved.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ip_addresses.reserved.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ip_addresses.reserved.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIpAddressesReservedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpAddressesReservedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLocksPathQueryKey(
  args: InferRequestType<(typeof client.locks)[':path']['$get']>,
) {
  return ['locks', '/locks/:path', args] as const
}

export function getLocksPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.locks)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.locks)[':path']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.locks)[':path']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocksPathQueryKey>
  >({
    queryKey: getLocksPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.locks[':path'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLocksPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.locks)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.locks)[':path']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.locks)[':path']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLocksPathQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocksPathQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostLocksPathMutationKey() {
  return ['locks', '/locks/:path', 'POST'] as const
}

export function getPostLocksPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.locks)[':path']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.locks)[':path']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLocksPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.locks)[':path']['$post']>) {
      return parseResponse(client.locks[':path'].$post(args, options))
    },
  })
}

export function createPostLocksPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.locks)[':path']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.locks)[':path']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLocksPathMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteLocksPathMutationKey() {
  return ['locks', '/locks/:path', 'DELETE'] as const
}

export function getDeleteLocksPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.locks)[':path']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.locks)[':path']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLocksPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.locks)[':path']['$delete']>) {
      return parseResponse(client.locks[':path'].$delete(args, options))
    },
  })
}

export function createDeleteLocksPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.locks)[':path']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.locks)[':path']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLocksPathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMessageCommentReactionsQueryKey(
  args: InferRequestType<typeof client.message_comment_reactions.$get>,
) {
  return ['message_comment_reactions', '/message_comment_reactions', args] as const
}

export function getMessageCommentReactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.message_comment_reactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.message_comment_reactions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.message_comment_reactions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessageCommentReactionsQueryKey>
  >({
    queryKey: getMessageCommentReactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.message_comment_reactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMessageCommentReactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.message_comment_reactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.message_comment_reactions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.message_comment_reactions.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMessageCommentReactionsQueryKey>
        >
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
      ...getMessageCommentReactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostMessageCommentReactionsMutationKey() {
  return ['message_comment_reactions', '/message_comment_reactions', 'POST'] as const
}

export function getPostMessageCommentReactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.message_comment_reactions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.message_comment_reactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessageCommentReactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.message_comment_reactions.$post>) {
      return parseResponse(client.message_comment_reactions.$post(args, options))
    },
  })
}

export function createPostMessageCommentReactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.message_comment_reactions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.message_comment_reactions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessageCommentReactionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMessageCommentReactionsIdQueryKey(
  args: InferRequestType<(typeof client.message_comment_reactions)[':id']['$get']>,
) {
  return ['message_comment_reactions', '/message_comment_reactions/:id', args] as const
}

export function getMessageCommentReactionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.message_comment_reactions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.message_comment_reactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.message_comment_reactions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessageCommentReactionsIdQueryKey>
  >({
    queryKey: getMessageCommentReactionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.message_comment_reactions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMessageCommentReactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.message_comment_reactions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.message_comment_reactions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.message_comment_reactions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMessageCommentReactionsIdQueryKey>
        >
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
      ...getMessageCommentReactionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteMessageCommentReactionsIdMutationKey() {
  return ['message_comment_reactions', '/message_comment_reactions/:id', 'DELETE'] as const
}

export function getDeleteMessageCommentReactionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.message_comment_reactions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.message_comment_reactions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMessageCommentReactionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.message_comment_reactions)[':id']['$delete']>,
    ) {
      return parseResponse(client.message_comment_reactions[':id'].$delete(args, options))
    },
  })
}

export function createDeleteMessageCommentReactionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.message_comment_reactions)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.message_comment_reactions)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMessageCommentReactionsIdMutationOptions<
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

export function getMessageCommentsQueryKey(
  args: InferRequestType<typeof client.message_comments.$get>,
) {
  return ['message_comments', '/message_comments', args] as const
}

export function getMessageCommentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_comments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.message_comments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_comments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMessageCommentsQueryKey>
  >({
    queryKey: getMessageCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.message_comments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMessageComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.message_comments.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.message_comments.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMessageCommentsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMessageCommentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostMessageCommentsMutationKey() {
  return ['message_comments', '/message_comments', 'POST'] as const
}

export function getPostMessageCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_comments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.message_comments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessageCommentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.message_comments.$post>) {
      return parseResponse(client.message_comments.$post(args, options))
    },
  })
}

export function createPostMessageComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.message_comments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.message_comments.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessageCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMessageCommentsIdQueryKey(
  args: InferRequestType<(typeof client.message_comments)[':id']['$get']>,
) {
  return ['message_comments', '/message_comments/:id', args] as const
}

export function getMessageCommentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.message_comments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.message_comments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.message_comments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessageCommentsIdQueryKey>
  >({
    queryKey: getMessageCommentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.message_comments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMessageCommentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.message_comments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.message_comments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.message_comments)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMessageCommentsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMessageCommentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteMessageCommentsIdMutationKey() {
  return ['message_comments', '/message_comments/:id', 'DELETE'] as const
}

export function getDeleteMessageCommentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.message_comments)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.message_comments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMessageCommentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.message_comments)[':id']['$delete']>) {
      return parseResponse(client.message_comments[':id'].$delete(args, options))
    },
  })
}

export function createDeleteMessageCommentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.message_comments)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.message_comments)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMessageCommentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchMessageCommentsIdMutationKey() {
  return ['message_comments', '/message_comments/:id', 'PATCH'] as const
}

export function getPatchMessageCommentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.message_comments)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.message_comments)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessageCommentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.message_comments)[':id']['$patch']>) {
      return parseResponse(client.message_comments[':id'].$patch(args, options))
    },
  })
}

export function createPatchMessageCommentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.message_comments)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.message_comments)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMessageCommentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMessageReactionsQueryKey(
  args: InferRequestType<typeof client.message_reactions.$get>,
) {
  return ['message_reactions', '/message_reactions', args] as const
}

export function getMessageReactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_reactions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.message_reactions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_reactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMessageReactionsQueryKey>
  >({
    queryKey: getMessageReactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.message_reactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMessageReactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_reactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.message_reactions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.message_reactions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMessageReactionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMessageReactionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostMessageReactionsMutationKey() {
  return ['message_reactions', '/message_reactions', 'POST'] as const
}

export function getPostMessageReactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message_reactions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.message_reactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessageReactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.message_reactions.$post>) {
      return parseResponse(client.message_reactions.$post(args, options))
    },
  })
}

export function createPostMessageReactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.message_reactions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.message_reactions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessageReactionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMessageReactionsIdQueryKey(
  args: InferRequestType<(typeof client.message_reactions)[':id']['$get']>,
) {
  return ['message_reactions', '/message_reactions/:id', args] as const
}

export function getMessageReactionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.message_reactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.message_reactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.message_reactions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessageReactionsIdQueryKey>
  >({
    queryKey: getMessageReactionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.message_reactions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMessageReactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.message_reactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.message_reactions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.message_reactions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMessageReactionsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMessageReactionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteMessageReactionsIdMutationKey() {
  return ['message_reactions', '/message_reactions/:id', 'DELETE'] as const
}

export function getDeleteMessageReactionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.message_reactions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.message_reactions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMessageReactionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.message_reactions)[':id']['$delete']>) {
      return parseResponse(client.message_reactions[':id'].$delete(args, options))
    },
  })
}

export function createDeleteMessageReactionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.message_reactions)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.message_reactions)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMessageReactionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMessagesQueryKey(args: InferRequestType<typeof client.messages.$get>) {
  return ['messages', '/messages', args] as const
}

export function getMessagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.messages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMessagesQueryKey>
  >({
    queryKey: getMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.messages.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMessagesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMessagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.messages.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMessagesIdQueryKey(
  args: InferRequestType<(typeof client.messages)[':id']['$get']>,
) {
  return ['messages', '/messages/:id', args] as const
}

export function getMessagesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.messages)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesIdQueryKey>
  >({
    queryKey: getMessagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messages[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMessagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messages)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMessagesIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMessagesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteMessagesIdMutationKey() {
  return ['messages', '/messages/:id', 'DELETE'] as const
}

export function getDeleteMessagesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.messages)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMessagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messages)[':id']['$delete']>) {
      return parseResponse(client.messages[':id'].$delete(args, options))
    },
  })
}

export function createDeleteMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.messages)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.messages)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMessagesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchMessagesIdMutationKey() {
  return ['messages', '/messages/:id', 'PATCH'] as const
}

export function getPatchMessagesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messages)[':id']['$patch']>) {
      return parseResponse(client.messages[':id'].$patch(args, options))
    },
  })
}

export function createPatchMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.messages)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMessagesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNotificationsQueryKey(args: InferRequestType<typeof client.notifications.$get>) {
  return ['notifications', '/notifications', args] as const
}

export function getNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.notifications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsQueryKey>
  >({
    queryKey: getNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.notifications.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNotificationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNotificationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostNotificationsMutationKey() {
  return ['notifications', '/notifications', 'POST'] as const
}

export function getPostNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.notifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notifications.$post>) {
      return parseResponse(client.notifications.$post(args, options))
    },
  })
}

export function createPostNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.notifications.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNotificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNotificationsIdQueryKey(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
) {
  return ['notifications', '/notifications/:id', args] as const
}

export function getNotificationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdQueryKey>
  >({
    queryKey: getNotificationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNotificationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notifications)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNotificationsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNotificationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteNotificationsIdMutationKey() {
  return ['notifications', '/notifications/:id', 'DELETE'] as const
}

export function getDeleteNotificationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.notifications)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.notifications)[':id']['$delete']>) {
      return parseResponse(client.notifications[':id'].$delete(args, options))
    },
  })
}

export function createDeleteNotificationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.notifications)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.notifications)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteNotificationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchNotificationsIdMutationKey() {
  return ['notifications', '/notifications/:id', 'PATCH'] as const
}

export function getPatchNotificationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNotificationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.notifications)[':id']['$patch']>) {
      return parseResponse(client.notifications[':id'].$patch(args, options))
    },
  })
}

export function createPatchNotificationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notifications)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchNotificationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPaymentsQueryKey(args: InferRequestType<typeof client.payments.$get>) {
  return ['payments', '/payments', args] as const
}

export function getPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.payments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPaymentsQueryKey>
  >({
    queryKey: getPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.payments.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPaymentsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPaymentsIdQueryKey(
  args: InferRequestType<(typeof client.payments)[':id']['$get']>,
) {
  return ['payments', '/payments/:id', args] as const
}

export function getPaymentsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.payments)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsIdQueryKey>
  >({
    queryKey: getPaymentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payments[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPaymentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.payments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPaymentsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPermissionsQueryKey(args: InferRequestType<typeof client.permissions.$get>) {
  return ['permissions', '/permissions', args] as const
}

export function getPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.permissions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPermissionsQueryKey>
  >({
    queryKey: getPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.permissions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPermissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.permissions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPermissionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPermissionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPermissionsMutationKey() {
  return ['permissions', '/permissions', 'POST'] as const
}

export function getPostPermissionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$post>>>>>,
    TError,
    InferRequestType<typeof client.permissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPermissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.permissions.$post>) {
      return parseResponse(client.permissions.$post(args, options))
    },
  })
}

export function createPostPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.permissions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPermissionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeletePermissionsIdMutationKey() {
  return ['permissions', '/permissions/:id', 'DELETE'] as const
}

export function getDeletePermissionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.permissions)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.permissions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePermissionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.permissions)[':id']['$delete']>) {
      return parseResponse(client.permissions[':id'].$delete(args, options))
    },
  })
}

export function createDeletePermissionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.permissions)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.permissions)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePermissionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPrioritiesQueryKey(args: InferRequestType<typeof client.priorities.$get>) {
  return ['priorities', '/priorities', args] as const
}

export function getPrioritiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.priorities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.priorities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.priorities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPrioritiesQueryKey>
  >({
    queryKey: getPrioritiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.priorities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPriorities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.priorities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.priorities.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.priorities.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPrioritiesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPrioritiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
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
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getProjectsQueryKey>
        >
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
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.projects.$post>,
          TOnMutateResult
        >
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

export function getProjectsIdQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['$get']>,
) {
  return ['projects', '/projects/:id', args] as const
}

export function getProjectsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.projects)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdQueryKey>
  >({
    queryKey: getProjectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProjectsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteProjectsIdMutationKey() {
  return ['projects', '/projects/:id', 'DELETE'] as const
}

export function getDeleteProjectsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.projects)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['$delete']>) {
      return parseResponse(client.projects[':id'].$delete(args, options))
    },
  })
}

export function createDeleteProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.projects)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.projects)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchProjectsIdMutationKey() {
  return ['projects', '/projects/:id', 'PATCH'] as const
}

export function getPatchProjectsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchProjectsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['$patch']>) {
      return parseResponse(client.projects[':id'].$patch(args, options))
    },
  })
}

export function createPatchProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchProjectsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPublicKeysQueryKey(args: InferRequestType<typeof client.public_keys.$get>) {
  return ['public_keys', '/public_keys', args] as const
}

export function getPublicKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public_keys.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.public_keys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public_keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPublicKeysQueryKey>
  >({
    queryKey: getPublicKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public_keys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPublicKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.public_keys.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public_keys.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPublicKeysQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPublicKeysMutationKey() {
  return ['public_keys', '/public_keys', 'POST'] as const
}

export function getPostPublicKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public_keys.$post>>>>>,
    TError,
    InferRequestType<typeof client.public_keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.public_keys.$post>) {
      return parseResponse(client.public_keys.$post(args, options))
    },
  })
}

export function createPostPublicKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public_keys.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.public_keys.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPublicKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPublicKeysIdQueryKey(
  args: InferRequestType<(typeof client.public_keys)[':id']['$get']>,
) {
  return ['public_keys', '/public_keys/:id', args] as const
}

export function getPublicKeysIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.public_keys)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public_keys)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.public_keys)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicKeysIdQueryKey>
  >({
    queryKey: getPublicKeysIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public_keys[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPublicKeysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.public_keys)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.public_keys)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.public_keys)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPublicKeysIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicKeysIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeletePublicKeysIdMutationKey() {
  return ['public_keys', '/public_keys/:id', 'DELETE'] as const
}

export function getDeletePublicKeysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.public_keys)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.public_keys)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePublicKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.public_keys)[':id']['$delete']>) {
      return parseResponse(client.public_keys[':id'].$delete(args, options))
    },
  })
}

export function createDeletePublicKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.public_keys)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.public_keys)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePublicKeysIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchPublicKeysIdMutationKey() {
  return ['public_keys', '/public_keys/:id', 'PATCH'] as const
}

export function getPatchPublicKeysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.public_keys)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.public_keys)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPublicKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.public_keys)[':id']['$patch']>) {
      return parseResponse(client.public_keys[':id'].$patch(args, options))
    },
  })
}

export function createPatchPublicKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.public_keys)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.public_keys)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPublicKeysIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRemoteBandwidthSnapshotsQueryKey(
  args: InferRequestType<typeof client.remote_bandwidth_snapshots.$get>,
) {
  return ['remote_bandwidth_snapshots', '/remote_bandwidth_snapshots', args] as const
}

export function getRemoteBandwidthSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.remote_bandwidth_snapshots.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.remote_bandwidth_snapshots.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.remote_bandwidth_snapshots.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRemoteBandwidthSnapshotsQueryKey>
  >({
    queryKey: getRemoteBandwidthSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.remote_bandwidth_snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRemoteBandwidthSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.remote_bandwidth_snapshots.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.remote_bandwidth_snapshots.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.remote_bandwidth_snapshots.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRemoteBandwidthSnapshotsQueryKey>
        >
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
      ...getRemoteBandwidthSnapshotsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRemoteServersQueryKey(
  args: InferRequestType<typeof client.remote_servers.$get>,
) {
  return ['remote_servers', '/remote_servers', args] as const
}

export function getRemoteServersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remote_servers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.remote_servers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remote_servers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRemoteServersQueryKey>
  >({
    queryKey: getRemoteServersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.remote_servers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRemoteServers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remote_servers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.remote_servers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remote_servers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getRemoteServersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRemoteServersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRemoteServersMutationKey() {
  return ['remote_servers', '/remote_servers', 'POST'] as const
}

export function getPostRemoteServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remote_servers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.remote_servers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRemoteServersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.remote_servers.$post>) {
      return parseResponse(client.remote_servers.$post(args, options))
    },
  })
}

export function createPostRemoteServers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.remote_servers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.remote_servers.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRemoteServersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRemoteServersIdQueryKey(
  args: InferRequestType<(typeof client.remote_servers)[':id']['$get']>,
) {
  return ['remote_servers', '/remote_servers/:id', args] as const
}

export function getRemoteServersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.remote_servers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.remote_servers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.remote_servers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRemoteServersIdQueryKey>
  >({
    queryKey: getRemoteServersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.remote_servers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRemoteServersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.remote_servers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.remote_servers)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.remote_servers)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRemoteServersIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRemoteServersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteRemoteServersIdMutationKey() {
  return ['remote_servers', '/remote_servers/:id', 'DELETE'] as const
}

export function getDeleteRemoteServersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.remote_servers)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.remote_servers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRemoteServersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.remote_servers)[':id']['$delete']>) {
      return parseResponse(client.remote_servers[':id'].$delete(args, options))
    },
  })
}

export function createDeleteRemoteServersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.remote_servers)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.remote_servers)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRemoteServersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchRemoteServersIdMutationKey() {
  return ['remote_servers', '/remote_servers/:id', 'PATCH'] as const
}

export function getPatchRemoteServersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.remote_servers)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.remote_servers)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRemoteServersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.remote_servers)[':id']['$patch']>) {
      return parseResponse(client.remote_servers[':id'].$patch(args, options))
    },
  })
}

export function createPatchRemoteServersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.remote_servers)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.remote_servers)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRemoteServersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRemoteServersIdConfigurationFileQueryKey(
  args: InferRequestType<(typeof client.remote_servers)[':id']['configuration_file']['$get']>,
) {
  return ['remote_servers', '/remote_servers/:id/configuration_file', args] as const
}

export function getRemoteServersIdConfigurationFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.remote_servers)[':id']['configuration_file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.remote_servers)[':id']['configuration_file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.remote_servers)[':id']['configuration_file']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRemoteServersIdConfigurationFileQueryKey>
  >({
    queryKey: getRemoteServersIdConfigurationFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.remote_servers[':id'].configuration_file.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRemoteServersIdConfigurationFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.remote_servers)[':id']['configuration_file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.remote_servers)[':id']['configuration_file']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.remote_servers)[':id']['configuration_file']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRemoteServersIdConfigurationFileQueryKey>
        >
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
      ...getRemoteServersIdConfigurationFileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostRemoteServersIdConfigurationFileMutationKey() {
  return ['remote_servers', '/remote_servers/:id/configuration_file', 'POST'] as const
}

export function getPostRemoteServersIdConfigurationFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.remote_servers)[':id']['configuration_file']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.remote_servers)[':id']['configuration_file']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRemoteServersIdConfigurationFileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.remote_servers)[':id']['configuration_file']['$post']>,
    ) {
      return parseResponse(client.remote_servers[':id'].configuration_file.$post(args, options))
    },
  })
}

export function createPostRemoteServersIdConfigurationFile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.remote_servers)[':id']['configuration_file']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.remote_servers)[':id']['configuration_file']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRemoteServersIdConfigurationFileMutationOptions<
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

export function getRequestsQueryKey(args: InferRequestType<typeof client.requests.$get>) {
  return ['requests', '/requests', args] as const
}

export function getRequestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.requests.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRequestsQueryKey>
  >({
    queryKey: getRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.requests.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.requests.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getRequestsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRequestsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRequestsMutationKey() {
  return ['requests', '/requests', 'POST'] as const
}

export function getPostRequestsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$post>>>>>,
    TError,
    InferRequestType<typeof client.requests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.requests.$post>) {
      return parseResponse(client.requests.$post(args, options))
    },
  })
}

export function createPostRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.requests.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRequestsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRequestsFoldersPathQueryKey(
  args: InferRequestType<(typeof client.requests.folders)[':path']['$get']>,
) {
  return ['requests', '/requests/folders/:path', args] as const
}

export function getRequestsFoldersPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.requests.folders)[':path']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.requests.folders)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.requests.folders)[':path']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRequestsFoldersPathQueryKey>
  >({
    queryKey: getRequestsFoldersPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.requests.folders[':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRequestsFoldersPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.requests.folders)[':path']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.requests.folders)[':path']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.requests.folders)[':path']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRequestsFoldersPathQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRequestsFoldersPathQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteRequestsIdMutationKey() {
  return ['requests', '/requests/:id', 'DELETE'] as const
}

export function getDeleteRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.requests)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.requests)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRequestsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.requests)[':id']['$delete']>) {
      return parseResponse(client.requests[':id'].$delete(args, options))
    },
  })
}

export function createDeleteRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.requests)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.requests)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRequestsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSessionsMutationKey() {
  return ['sessions', '/sessions', 'POST'] as const
}

export function getPostSessionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$post>>>>>,
    TError,
    InferRequestType<typeof client.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sessions.$post>) {
      return parseResponse(client.sessions.$post(args, options))
    },
  })
}

export function createPostSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sessions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteSessionsMutationKey() {
  return ['sessions', '/sessions', 'DELETE'] as const
}

export function getDeleteSessionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$delete>>>>>
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteSessionsMutationKey(),
    async mutationFn() {
      return parseResponse(client.sessions.$delete(undefined, options))
    },
  })
}

export function createDeleteSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$delete>>>>
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSettingsChangesQueryKey(
  args: InferRequestType<typeof client.settings_changes.$get>,
) {
  return ['settings_changes', '/settings_changes', args] as const
}

export function getSettingsChangesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings_changes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.settings_changes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings_changes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsChangesQueryKey>
  >({
    queryKey: getSettingsChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings_changes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSettingsChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings_changes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.settings_changes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings_changes.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSettingsChangesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsChangesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSftpHostKeysQueryKey(args: InferRequestType<typeof client.sftp_host_keys.$get>) {
  return ['sftp_host_keys', '/sftp_host_keys', args] as const
}

export function getSftpHostKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sftp_host_keys.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sftp_host_keys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sftp_host_keys.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSftpHostKeysQueryKey>
  >({
    queryKey: getSftpHostKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sftp_host_keys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSftpHostKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sftp_host_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sftp_host_keys.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sftp_host_keys.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSftpHostKeysQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSftpHostKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSftpHostKeysMutationKey() {
  return ['sftp_host_keys', '/sftp_host_keys', 'POST'] as const
}

export function getPostSftpHostKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sftp_host_keys.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sftp_host_keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSftpHostKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sftp_host_keys.$post>) {
      return parseResponse(client.sftp_host_keys.$post(args, options))
    },
  })
}

export function createPostSftpHostKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sftp_host_keys.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.sftp_host_keys.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSftpHostKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSftpHostKeysIdQueryKey(
  args: InferRequestType<(typeof client.sftp_host_keys)[':id']['$get']>,
) {
  return ['sftp_host_keys', '/sftp_host_keys/:id', args] as const
}

export function getSftpHostKeysIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sftp_host_keys)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sftp_host_keys)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sftp_host_keys)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSftpHostKeysIdQueryKey>
  >({
    queryKey: getSftpHostKeysIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sftp_host_keys[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSftpHostKeysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sftp_host_keys)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sftp_host_keys)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sftp_host_keys)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSftpHostKeysIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSftpHostKeysIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteSftpHostKeysIdMutationKey() {
  return ['sftp_host_keys', '/sftp_host_keys/:id', 'DELETE'] as const
}

export function getDeleteSftpHostKeysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sftp_host_keys)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sftp_host_keys)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSftpHostKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sftp_host_keys)[':id']['$delete']>) {
      return parseResponse(client.sftp_host_keys[':id'].$delete(args, options))
    },
  })
}

export function createDeleteSftpHostKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.sftp_host_keys)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sftp_host_keys)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSftpHostKeysIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchSftpHostKeysIdMutationKey() {
  return ['sftp_host_keys', '/sftp_host_keys/:id', 'PATCH'] as const
}

export function getPatchSftpHostKeysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sftp_host_keys)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sftp_host_keys)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSftpHostKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sftp_host_keys)[':id']['$patch']>) {
      return parseResponse(client.sftp_host_keys[':id'].$patch(args, options))
    },
  })
}

export function createPatchSftpHostKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sftp_host_keys)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sftp_host_keys)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSftpHostKeysIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSiteQueryKey() {
  return ['site', '/site'] as const
}

export function getSiteQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSiteQueryKey>
  >({
    queryKey: getSiteQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.site.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSite<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getSiteQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSiteQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPatchSiteMutationKey() {
  return ['site', '/site', 'PATCH'] as const
}

export function getPatchSiteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.$patch>>>>>,
    TError,
    InferRequestType<typeof client.site.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchSiteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.site.$patch>) {
      return parseResponse(client.site.$patch(args, options))
    },
  })
}

export function createPatchSite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.$patch>>>>>,
          TError,
          InferRequestType<typeof client.site.$patch>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSiteMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSiteApiKeysQueryKey(args: InferRequestType<typeof client.site.api_keys.$get>) {
  return ['site', '/site/api_keys', args] as const
}

export function getSiteApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.api_keys.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.site.api_keys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.api_keys.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSiteApiKeysQueryKey>
  >({
    queryKey: getSiteApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.site.api_keys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSiteApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.api_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.site.api_keys.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.api_keys.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSiteApiKeysQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSiteApiKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSiteApiKeysMutationKey() {
  return ['site', '/site/api_keys', 'POST'] as const
}

export function getPostSiteApiKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.api_keys.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.site.api_keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSiteApiKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.site.api_keys.$post>) {
      return parseResponse(client.site.api_keys.$post(args, options))
    },
  })
}

export function createPostSiteApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.api_keys.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.site.api_keys.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSiteApiKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSiteDnsRecordsQueryKey(
  args: InferRequestType<typeof client.site.dns_records.$get>,
) {
  return ['site', '/site/dns_records', args] as const
}

export function getSiteDnsRecordsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.dns_records.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.site.dns_records.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.dns_records.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSiteDnsRecordsQueryKey>
  >({
    queryKey: getSiteDnsRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.site.dns_records.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSiteDnsRecords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.dns_records.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.site.dns_records.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.site.dns_records.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSiteDnsRecordsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSiteDnsRecordsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSiteIpAddressesQueryKey(
  args: InferRequestType<typeof client.site.ip_addresses.$get>,
) {
  return ['site', '/site/ip_addresses', args] as const
}

export function getSiteIpAddressesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.ip_addresses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.site.ip_addresses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.ip_addresses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSiteIpAddressesQueryKey>
  >({
    queryKey: getSiteIpAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.site.ip_addresses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSiteIpAddresses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.ip_addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.site.ip_addresses.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.site.ip_addresses.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSiteIpAddressesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSiteIpAddressesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSiteTestWebhookMutationKey() {
  return ['site', '/site/test-webhook', 'POST'] as const
}

export function getPostSiteTestWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.site)['test-webhook']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.site)['test-webhook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSiteTestWebhookMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.site)['test-webhook']['$post']>) {
      return parseResponse(client.site['test-webhook'].$post(args, options))
    },
  })
}

export function createPostSiteTestWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.site)['test-webhook']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.site)['test-webhook']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSiteTestWebhookMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSiteUsageQueryKey() {
  return ['site', '/site/usage'] as const
}

export function getSiteUsageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.usage.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.usage.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSiteUsageQueryKey>
  >({
    queryKey: getSiteUsageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.site.usage.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSiteUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.usage.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.site.usage.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSiteUsageQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSiteUsageQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSsoStrategiesQueryKey(
  args: InferRequestType<typeof client.sso_strategies.$get>,
) {
  return ['sso_strategies', '/sso_strategies', args] as const
}

export function getSsoStrategiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso_strategies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sso_strategies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso_strategies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSsoStrategiesQueryKey>
  >({
    queryKey: getSsoStrategiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sso_strategies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSsoStrategies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso_strategies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sso_strategies.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso_strategies.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSsoStrategiesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSsoStrategiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSsoStrategiesIdQueryKey(
  args: InferRequestType<(typeof client.sso_strategies)[':id']['$get']>,
) {
  return ['sso_strategies', '/sso_strategies/:id', args] as const
}

export function getSsoStrategiesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sso_strategies)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sso_strategies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sso_strategies)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSsoStrategiesIdQueryKey>
  >({
    queryKey: getSsoStrategiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sso_strategies[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSsoStrategiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sso_strategies)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sso_strategies)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sso_strategies)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSsoStrategiesIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSsoStrategiesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSsoStrategiesIdSyncMutationKey() {
  return ['sso_strategies', '/sso_strategies/:id/sync', 'POST'] as const
}

export function getPostSsoStrategiesIdSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sso_strategies)[':id']['sync']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sso_strategies)[':id']['sync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSsoStrategiesIdSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sso_strategies)[':id']['sync']['$post']>,
    ) {
      return parseResponse(client.sso_strategies[':id'].sync.$post(args, options))
    },
  })
}

export function createPostSsoStrategiesIdSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.sso_strategies)[':id']['sync']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sso_strategies)[':id']['sync']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSsoStrategiesIdSyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStylesPathQueryKey(
  args: InferRequestType<(typeof client.styles)[':path']['$get']>,
) {
  return ['styles', '/styles/:path', args] as const
}

export function getStylesPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.styles)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.styles)[':path']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.styles)[':path']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStylesPathQueryKey>
  >({
    queryKey: getStylesPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.styles[':path'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStylesPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.styles)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.styles)[':path']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.styles)[':path']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStylesPathQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStylesPathQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteStylesPathMutationKey() {
  return ['styles', '/styles/:path', 'DELETE'] as const
}

export function getDeleteStylesPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.styles)[':path']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.styles)[':path']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStylesPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.styles)[':path']['$delete']>) {
      return parseResponse(client.styles[':path'].$delete(args, options))
    },
  })
}

export function createDeleteStylesPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.styles)[':path']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.styles)[':path']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteStylesPathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchStylesPathMutationKey() {
  return ['styles', '/styles/:path', 'PATCH'] as const
}

export function getPatchStylesPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.styles)[':path']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.styles)[':path']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchStylesPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.styles)[':path']['$patch']>) {
      return parseResponse(client.styles[':path'].$patch(args, options))
    },
  })
}

export function createPatchStylesPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.styles)[':path']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.styles)[':path']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchStylesPathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsageDailySnapshotsQueryKey(
  args: InferRequestType<typeof client.usage_daily_snapshots.$get>,
) {
  return ['usage_daily_snapshots', '/usage_daily_snapshots', args] as const
}

export function getUsageDailySnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage_daily_snapshots.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.usage_daily_snapshots.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.usage_daily_snapshots.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsageDailySnapshotsQueryKey>
  >({
    queryKey: getUsageDailySnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.usage_daily_snapshots.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsageDailySnapshots<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage_daily_snapshots.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.usage_daily_snapshots.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.usage_daily_snapshots.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsageDailySnapshotsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsageDailySnapshotsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsageSnapshotsQueryKey(
  args: InferRequestType<typeof client.usage_snapshots.$get>,
) {
  return ['usage_snapshots', '/usage_snapshots', args] as const
}

export function getUsageSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage_snapshots.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.usage_snapshots.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage_snapshots.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsageSnapshotsQueryKey>
  >({
    queryKey: getUsageSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.usage_snapshots.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsageSnapshots<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage_snapshots.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.usage_snapshots.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.usage_snapshots.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsageSnapshotsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsageSnapshotsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchUserMutationKey() {
  return ['user', '/user', 'PATCH'] as const
}

export function getPatchUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$patch>>>>>,
    TError,
    InferRequestType<typeof client.user.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.$patch>) {
      return parseResponse(client.user.$patch(args, options))
    },
  })
}

export function createPatchUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$patch>>>>>,
          TError,
          InferRequestType<typeof client.user.$patch>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserApiKeysQueryKey(args: InferRequestType<typeof client.user.api_keys.$get>) {
  return ['user', '/user/api_keys', args] as const
}

export function getUserApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.api_keys.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.api_keys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.api_keys.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserApiKeysQueryKey>
  >({
    queryKey: getUserApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.api_keys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.api_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.api_keys.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.api_keys.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getUserApiKeysQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserApiKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUserApiKeysMutationKey() {
  return ['user', '/user/api_keys', 'POST'] as const
}

export function getPostUserApiKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.api_keys.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.user.api_keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserApiKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.api_keys.$post>) {
      return parseResponse(client.user.api_keys.$post(args, options))
    },
  })
}

export function createPostUserApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.api_keys.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.user.api_keys.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserApiKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserGroupsQueryKey(args: InferRequestType<typeof client.user.groups.$get>) {
  return ['user', '/user/groups', args] as const
}

export function getUserGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserGroupsQueryKey>
  >({
    queryKey: getUserGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.groups.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.groups.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getUserGroupsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserPublicKeysQueryKey(
  args: InferRequestType<typeof client.user.public_keys.$get>,
) {
  return ['user', '/user/public_keys', args] as const
}

export function getUserPublicKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.public_keys.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.public_keys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.public_keys.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserPublicKeysQueryKey>
  >({
    queryKey: getUserPublicKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.public_keys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserPublicKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.public_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.public_keys.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.public_keys.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserPublicKeysQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserPublicKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUserPublicKeysMutationKey() {
  return ['user', '/user/public_keys', 'POST'] as const
}

export function getPostUserPublicKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.public_keys.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.user.public_keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserPublicKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.public_keys.$post>) {
      return parseResponse(client.user.public_keys.$post(args, options))
    },
  })
}

export function createPostUserPublicKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.public_keys.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.public_keys.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserPublicKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserCipherUsesQueryKey(
  args: InferRequestType<typeof client.user_cipher_uses.$get>,
) {
  return ['user_cipher_uses', '/user_cipher_uses', args] as const
}

export function getUserCipherUsesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_cipher_uses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user_cipher_uses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_cipher_uses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserCipherUsesQueryKey>
  >({
    queryKey: getUserCipherUsesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_cipher_uses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserCipherUses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_cipher_uses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user_cipher_uses.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_cipher_uses.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserCipherUsesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserCipherUsesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserRequestsQueryKey(args: InferRequestType<typeof client.user_requests.$get>) {
  return ['user_requests', '/user_requests', args] as const
}

export function getUserRequestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_requests.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user_requests.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_requests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserRequestsQueryKey>
  >({
    queryKey: getUserRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_requests.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user_requests.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_requests.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getUserRequestsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserRequestsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUserRequestsMutationKey() {
  return ['user_requests', '/user_requests', 'POST'] as const
}

export function getPostUserRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_requests.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.user_requests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserRequestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_requests.$post>) {
      return parseResponse(client.user_requests.$post(args, options))
    },
  })
}

export function createPostUserRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_requests.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.user_requests.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserRequestsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserRequestsIdQueryKey(
  args: InferRequestType<(typeof client.user_requests)[':id']['$get']>,
) {
  return ['user_requests', '/user_requests/:id', args] as const
}

export function getUserRequestsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user_requests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_requests)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user_requests)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserRequestsIdQueryKey>
  >({
    queryKey: getUserRequestsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_requests[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user_requests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user_requests)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user_requests)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserRequestsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserRequestsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteUserRequestsIdMutationKey() {
  return ['user_requests', '/user_requests/:id', 'DELETE'] as const
}

export function getDeleteUserRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user_requests)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.user_requests)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserRequestsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user_requests)[':id']['$delete']>) {
      return parseResponse(client.user_requests[':id'].$delete(args, options))
    },
  })
}

export function createDeleteUserRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.user_requests)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.user_requests)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserRequestsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
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
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getUsersQueryKey>
        >
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

export function createPostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersIdQueryKey(args: InferRequestType<(typeof client.users)[':id']['$get']>) {
  return ['users', '/users/:id', args] as const
}

export function getUsersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.users)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdQueryKey>
  >({
    queryKey: getUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteUsersIdMutationKey() {
  return ['users', '/users/:id', 'DELETE'] as const
}

export function getDeleteUsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['$delete']>) {
      return parseResponse(client.users[':id'].$delete(args, options))
    },
  })
}

export function createDeleteUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchUsersIdMutationKey() {
  return ['users', '/users/:id', 'PATCH'] as const
}

export function getPatchUsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['$patch']>) {
      return parseResponse(client.users[':id'].$patch(args, options))
    },
  })
}

export function createPatchUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersId2faResetMutationKey() {
  return ['users', '/users/:id/2fa/reset', 'POST'] as const
}

export function getPostUsersId2faResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['2fa']['reset']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':id']['2fa']['reset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersId2faResetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id']['2fa']['reset']['$post']>,
    ) {
      return parseResponse(client.users[':id']['2fa'].reset.$post(args, options))
    },
  })
}

export function createPostUsersId2faReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':id']['2fa']['reset']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':id']['2fa']['reset']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersId2faResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersIdResendWelcomeEmailMutationKey() {
  return ['users', '/users/:id/resend_welcome_email', 'POST'] as const
}

export function getPostUsersIdResendWelcomeEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['resend_welcome_email']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':id']['resend_welcome_email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdResendWelcomeEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id']['resend_welcome_email']['$post']>,
    ) {
      return parseResponse(client.users[':id'].resend_welcome_email.$post(args, options))
    },
  })
}

export function createPostUsersIdResendWelcomeEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':id']['resend_welcome_email']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':id']['resend_welcome_email']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersIdResendWelcomeEmailMutationOptions<
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

export function getPostUsersIdUnlockMutationKey() {
  return ['users', '/users/:id/unlock', 'POST'] as const
}

export function getPostUsersIdUnlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['unlock']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':id']['unlock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUnlockMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['unlock']['$post']>) {
      return parseResponse(client.users[':id'].unlock.$post(args, options))
    },
  })
}

export function createPostUsersIdUnlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':id']['unlock']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':id']['unlock']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersIdUnlockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdApiKeysQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['api_keys']['$get']>,
) {
  return ['users', '/users/:user_id/api_keys', args] as const
}

export function getUsersUserIdApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['api_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['api_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['api_keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdApiKeysQueryKey>
  >({
    queryKey: getUsersUserIdApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].api_keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['api_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['api_keys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['api_keys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdApiKeysQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdApiKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUsersUserIdApiKeysMutationKey() {
  return ['users', '/users/:user_id/api_keys', 'POST'] as const
}

export function getPostUsersUserIdApiKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['api_keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['api_keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdApiKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['api_keys']['$post']>,
    ) {
      return parseResponse(client.users[':user_id'].api_keys.$post(args, options))
    },
  })
}

export function createPostUsersUserIdApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['api_keys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['api_keys']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdApiKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdCipherUsesQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['cipher_uses']['$get']>,
) {
  return ['users', '/users/:user_id/cipher_uses', args] as const
}

export function getUsersUserIdCipherUsesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['cipher_uses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['cipher_uses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['cipher_uses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdCipherUsesQueryKey>
  >({
    queryKey: getUsersUserIdCipherUsesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].cipher_uses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdCipherUses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['cipher_uses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['cipher_uses']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['cipher_uses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdCipherUsesQueryKey>
        >
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
      ...getUsersUserIdCipherUsesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserIdGroupsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['groups']['$get']>,
) {
  return ['users', '/users/:user_id/groups', args] as const
}

export function getUsersUserIdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdGroupsQueryKey>
  >({
    queryKey: getUsersUserIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['groups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdGroupsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersUserIdPermissionsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['permissions']['$get']>,
) {
  return ['users', '/users/:user_id/permissions', args] as const
}

export function getUsersUserIdPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPermissionsQueryKey>
  >({
    queryKey: getUsersUserIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['permissions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdPermissionsQueryKey>
        >
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
      ...getUsersUserIdPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserIdPublicKeysQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['public_keys']['$get']>,
) {
  return ['users', '/users/:user_id/public_keys', args] as const
}

export function getUsersUserIdPublicKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['public_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['public_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['public_keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPublicKeysQueryKey>
  >({
    queryKey: getUsersUserIdPublicKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].public_keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdPublicKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['public_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['public_keys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['public_keys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdPublicKeysQueryKey>
        >
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
      ...getUsersUserIdPublicKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostUsersUserIdPublicKeysMutationKey() {
  return ['users', '/users/:user_id/public_keys', 'POST'] as const
}

export function getPostUsersUserIdPublicKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['public_keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['public_keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdPublicKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['public_keys']['$post']>,
    ) {
      return parseResponse(client.users[':user_id'].public_keys.$post(args, options))
    },
  })
}

export function createPostUsersUserIdPublicKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['public_keys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['public_keys']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdPublicKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostWebhookTestsMutationKey() {
  return ['webhook_tests', '/webhook_tests', 'POST'] as const
}

export function getPostWebhookTestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_tests.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webhook_tests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookTestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhook_tests.$post>) {
      return parseResponse(client.webhook_tests.$post(args, options))
    },
  })
}

export function createPostWebhookTests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_tests.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.webhook_tests.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhookTestsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
