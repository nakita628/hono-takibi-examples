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

export function getAccountRolesKey() {
  return ['account_roles'] as const
}

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getAddonsKey() {
  return ['addons'] as const
}

export function getAuthenticateKey() {
  return ['authenticate'] as const
}

export function getBillingKey() {
  return ['billing'] as const
}

export function getClientRolesKey() {
  return ['client_roles'] as const
}

export function getClientsKey() {
  return ['clients'] as const
}

export function getConfigurationsKey() {
  return ['configurations'] as const
}

export function getContactAddressExportsKey() {
  return ['contact_address_exports'] as const
}

export function getContactAddressImportKey() {
  return ['contact_address_import'] as const
}

export function getContactAddressesKey() {
  return ['contact_addresses'] as const
}

export function getDevicesKey() {
  return ['devices'] as const
}

export function getDocsKey() {
  return ['docs'] as const
}

export function getDocumentsKey() {
  return ['documents'] as const
}

export function getEmailsKey() {
  return ['emails'] as const
}

export function getExportsKey() {
  return ['exports'] as const
}

export function getFileUploadsKey() {
  return ['file_uploads'] as const
}

export function getFormrulesKey() {
  return ['formrules'] as const
}

export function getIntegrationsKey() {
  return ['integrations'] as const
}

export function getMetafieldsKey() {
  return ['metafields'] as const
}

export function getNotificationTemplatesKey() {
  return ['notification_templates'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getOrdersKey() {
  return ['orders'] as const
}

export function getPasswordChangeKey() {
  return ['password_change'] as const
}

export function getPasswordResetKey() {
  return ['password_reset'] as const
}

export function getPasswordResetConfirmKey() {
  return ['password_reset_confirm'] as const
}

export function getPushNotificationsKey() {
  return ['push_notifications'] as const
}

export function getRecurrencesKey() {
  return ['recurrences'] as const
}

export function getRegisterKey() {
  return ['register'] as const
}

export function getReportsKey() {
  return ['reports'] as const
}

export function getReviewsKey() {
  return ['reviews'] as const
}

export function getRouteOptimizationsKey() {
  return ['route_optimizations'] as const
}

export function getRoutesKey() {
  return ['routes'] as const
}

export function getScenesKey() {
  return ['scenes'] as const
}

export function getSignaturesKey() {
  return ['signatures'] as const
}

export function getSmsKey() {
  return ['sms'] as const
}

export function getTaskAddressFeaturesKey() {
  return ['task_address_features'] as const
}

export function getTaskCommandsKey() {
  return ['task_commands'] as const
}

export function getTaskEventTracksKey() {
  return ['task_event_tracks'] as const
}

export function getTaskEventsKey() {
  return ['task_events'] as const
}

export function getTaskExportsKey() {
  return ['task_exports'] as const
}

export function getTaskFormsKey() {
  return ['task_forms'] as const
}

export function getTaskImportKey() {
  return ['task_import'] as const
}

export function getTaskImportMappingKey() {
  return ['task_import_mapping'] as const
}

export function getTaskMetadatasKey() {
  return ['task_metadatas'] as const
}

export function getTasksKey() {
  return ['tasks'] as const
}

export function getTimeLocationFeaturesKey() {
  return ['time_location_features'] as const
}

export function getTimeLocationsKey() {
  return ['time_locations'] as const
}

export function getTrackersKey() {
  return ['trackers'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getUsersOnDutyLogKey() {
  return ['users_on_duty_log'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getWorkerFeaturesKey() {
  return ['worker_features'] as const
}

export function getWorkerTracksKey() {
  return ['worker_tracks'] as const
}

export function getWorkingStateKey() {
  return ['working_state'] as const
}

export function getAccountRolesIndexQueryKey(
  args: InferRequestType<typeof client.account_roles.index.$get>,
) {
  return ['account_roles', '/account_roles/', args] as const
}

export function getAccountRolesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_roles.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account_roles.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_roles.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountRolesIndexQueryKey>
  >({
    queryKey: getAccountRolesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account_roles.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountRolesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_roles.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account_roles.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account_roles.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountRolesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountRolesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountRolesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_roles.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account_roles.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account_roles.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountRolesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountRolesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAccountRolesIndexMutationKey() {
  return ['account_roles', '/account_roles/', 'POST'] as const
}

export function getPostAccountRolesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_roles.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account_roles.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountRolesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account_roles.index.$post>) {
      return parseResponse(client.account_roles.index.$post(args, options))
    },
  })
}

export function usePostAccountRolesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account_roles.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.account_roles.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountRolesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountRolesIdIndexQueryKey(
  args: InferRequestType<(typeof client.account_roles)[':id']['index']['$get']>,
) {
  return ['account_roles', '/account_roles/:id/', args] as const
}

export function getAccountRolesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account_roles)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountRolesIdIndexQueryKey>
  >({
    queryKey: getAccountRolesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account_roles[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountRolesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account_roles)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountRolesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountRolesIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountRolesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account_roles)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountRolesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountRolesIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAccountRolesIdIndexMutationKey() {
  return ['account_roles', '/account_roles/:id/', 'PUT'] as const
}

export function getPutAccountRolesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account_roles)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountRolesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account_roles)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.account_roles[':id'].index.$put(args, options))
    },
  })
}

export function usePutAccountRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account_roles)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountRolesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAccountRolesIdIndexMutationKey() {
  return ['account_roles', '/account_roles/:id/', 'DELETE'] as const
}

export function getDeleteAccountRolesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account_roles)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountRolesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account_roles)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.account_roles[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteAccountRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.account_roles)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountRolesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAccountRolesIdIndexMutationKey() {
  return ['account_roles', '/account_roles/:id/', 'PATCH'] as const
}

export function getPatchAccountRolesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account_roles)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountRolesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account_roles)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.account_roles[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchAccountRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account_roles)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountRolesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAccountRolesIdActivateIndexMutationKey() {
  return ['account_roles', '/account_roles/:id/activate/', 'POST'] as const
}

export function getPostAccountRolesIdActivateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account_roles)[':id']['activate']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account_roles)[':id']['activate']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountRolesIdActivateIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account_roles)[':id']['activate']['index']['$post']>,
    ) {
      return parseResponse(client.account_roles[':id'].activate.index.$post(args, options))
    },
  })
}

export function usePostAccountRolesIdActivateIndex<
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
                ReturnType<(typeof client.account_roles)[':id']['activate']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account_roles)[':id']['activate']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountRolesIdActivateIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAccountRolesIdNotifyIndexMutationKey() {
  return ['account_roles', '/account_roles/:id/notify/', 'POST'] as const
}

export function getPostAccountRolesIdNotifyIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account_roles)[':id']['notify']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account_roles)[':id']['notify']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountRolesIdNotifyIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account_roles)[':id']['notify']['index']['$post']>,
    ) {
      return parseResponse(client.account_roles[':id'].notify.index.$post(args, options))
    },
  })
}

export function usePostAccountRolesIdNotifyIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account_roles)[':id']['notify']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account_roles)[':id']['notify']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountRolesIdNotifyIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountRolesIdTokenIndexQueryKey(
  args: InferRequestType<(typeof client.account_roles)[':id']['token']['index']['$get']>,
) {
  return ['account_roles', '/account_roles/:id/token/', args] as const
}

export function getAccountRolesIdTokenIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account_roles)[':id']['token']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account_roles)[':id']['token']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account_roles)[':id']['token']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountRolesIdTokenIndexQueryKey>
  >({
    queryKey: getAccountRolesIdTokenIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account_roles[':id'].token.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountRolesIdTokenIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account_roles)[':id']['token']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account_roles)[':id']['token']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account_roles)[':id']['token']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountRolesIdTokenIndexQueryKey>
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
      ...getAccountRolesIdTokenIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountRolesIdTokenIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account_roles)[':id']['token']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account_roles)[':id']['token']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account_roles)[':id']['token']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountRolesIdTokenIndexQueryKey>
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
      ...getAccountRolesIdTokenIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountsIndexQueryKey(
  args: InferRequestType<typeof client.accounts.index.$get>,
) {
  return ['accounts', '/accounts/', args] as const
}

export function getAccountsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounts.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIndexQueryKey>
  >({
    queryKey: getAccountsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAccountsIdIndexQueryKey(
  args: InferRequestType<(typeof client.accounts)[':id']['index']['$get']>,
) {
  return ['accounts', '/accounts/:id/', args] as const
}

export function getAccountsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdIndexQueryKey>
  >({
    queryKey: getAccountsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAccountsIdIndexMutationKey() {
  return ['accounts', '/accounts/:id/', 'PUT'] as const
}

export function getPutAccountsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':id']['index']['$put']>) {
      return parseResponse(client.accounts[':id'].index.$put(args, options))
    },
  })
}

export function usePutAccountsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAccountsIdIndexMutationKey() {
  return ['accounts', '/accounts/:id/', 'PATCH'] as const
}

export function getPatchAccountsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':id']['index']['$patch']>) {
      return parseResponse(client.accounts[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchAccountsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountsIdBraintreeCustomerIndexQueryKey(
  args: InferRequestType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>,
) {
  return ['accounts', '/accounts/:id/braintree_customer/', args] as const
}

export function getAccountsIdBraintreeCustomerIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdBraintreeCustomerIndexQueryKey>
  >({
    queryKey: getAccountsIdBraintreeCustomerIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':id'].braintree_customer.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountsIdBraintreeCustomerIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdBraintreeCustomerIndexQueryKey>
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
      ...getAccountsIdBraintreeCustomerIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsIdBraintreeCustomerIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdBraintreeCustomerIndexQueryKey>
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
      ...getAccountsIdBraintreeCustomerIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAccountsIdChangeOwnerIndexMutationKey() {
  return ['accounts', '/accounts/:id/change_owner/', 'POST'] as const
}

export function getPostAccountsIdChangeOwnerIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':id']['change_owner']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':id']['change_owner']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsIdChangeOwnerIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':id']['change_owner']['index']['$post']>,
    ) {
      return parseResponse(client.accounts[':id'].change_owner.index.$post(args, options))
    },
  })
}

export function usePostAccountsIdChangeOwnerIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':id']['change_owner']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':id']['change_owner']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsIdChangeOwnerIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountsIdManagersIndexQueryKey(
  args: InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$get']>,
) {
  return ['accounts', '/accounts/:id/managers/', args] as const
}

export function getAccountsIdManagersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':id']['managers']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':id']['managers']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdManagersIndexQueryKey>
  >({
    queryKey: getAccountsIdManagersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':id'].managers.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountsIdManagersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':id']['managers']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':id']['managers']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdManagersIndexQueryKey>
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
      ...getAccountsIdManagersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsIdManagersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':id']['managers']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':id']['managers']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdManagersIndexQueryKey>
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
      ...getAccountsIdManagersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAccountsIdManagersIndexMutationKey() {
  return ['accounts', '/accounts/:id/managers/', 'POST'] as const
}

export function getPostAccountsIdManagersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':id']['managers']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsIdManagersIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$post']>,
    ) {
      return parseResponse(client.accounts[':id'].managers.index.$post(args, options))
    },
  })
}

export function usePostAccountsIdManagersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':id']['managers']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsIdManagersIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAccountsIdManagersIndexMutationKey() {
  return ['accounts', '/accounts/:id/managers/', 'DELETE'] as const
}

export function getDeleteAccountsIdManagersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':id']['managers']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsIdManagersIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$delete']>,
    ) {
      return parseResponse(client.accounts[':id'].managers.index.$delete(args, options))
    },
  })
}

export function useDeleteAccountsIdManagersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':id']['managers']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountsIdManagersIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAccountsIdStripeAttachPaymentMethodIndexMutationKey() {
  return ['accounts', '/accounts/:id/stripe_attach_payment_method/', 'PUT'] as const
}

export function getPutAccountsIdStripeAttachPaymentMethodIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':id']['stripe_attach_payment_method']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':id']['stripe_attach_payment_method']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsIdStripeAttachPaymentMethodIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':id']['stripe_attach_payment_method']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':id'].stripe_attach_payment_method.index.$put(args, options),
      )
    },
  })
}

export function usePutAccountsIdStripeAttachPaymentMethodIndex<
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
                  (typeof client.accounts)[':id']['stripe_attach_payment_method']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.accounts)[':id']['stripe_attach_payment_method']['index']['$put']
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
  const mutationDefaults = getPutAccountsIdStripeAttachPaymentMethodIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAccountsIdStripeCreateSetupIntentIndexMutationKey() {
  return ['accounts', '/accounts/:id/stripe_create_setup_intent/', 'PUT'] as const
}

export function getPutAccountsIdStripeCreateSetupIntentIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':id']['stripe_create_setup_intent']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':id']['stripe_create_setup_intent']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsIdStripeCreateSetupIntentIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':id']['stripe_create_setup_intent']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':id'].stripe_create_setup_intent.index.$put(args, options),
      )
    },
  })
}

export function usePutAccountsIdStripeCreateSetupIntentIndex<
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
                  (typeof client.accounts)[':id']['stripe_create_setup_intent']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.accounts)[':id']['stripe_create_setup_intent']['index']['$put']
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
  const mutationDefaults = getPutAccountsIdStripeCreateSetupIntentIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAccountsIdStripeCreateSetupIntentIndexMutationKey() {
  return ['accounts', '/accounts/:id/stripe_create_setup_intent/', 'POST'] as const
}

export function getPostAccountsIdStripeCreateSetupIntentIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':id']['stripe_create_setup_intent']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':id']['stripe_create_setup_intent']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsIdStripeCreateSetupIntentIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':id']['stripe_create_setup_intent']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':id'].stripe_create_setup_intent.index.$post(args, options),
      )
    },
  })
}

export function usePostAccountsIdStripeCreateSetupIntentIndex<
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
                  (typeof client.accounts)[':id']['stripe_create_setup_intent']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.accounts)[':id']['stripe_create_setup_intent']['index']['$post']
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
  const mutationDefaults = getPostAccountsIdStripeCreateSetupIntentIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAccountsIdStripeDetachPaymentMethodIndexMutationKey() {
  return ['accounts', '/accounts/:id/stripe_detach_payment_method/', 'PUT'] as const
}

export function getPutAccountsIdStripeDetachPaymentMethodIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':id']['stripe_detach_payment_method']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':id']['stripe_detach_payment_method']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsIdStripeDetachPaymentMethodIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':id']['stripe_detach_payment_method']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':id'].stripe_detach_payment_method.index.$put(args, options),
      )
    },
  })
}

export function usePutAccountsIdStripeDetachPaymentMethodIndex<
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
                  (typeof client.accounts)[':id']['stripe_detach_payment_method']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.accounts)[':id']['stripe_detach_payment_method']['index']['$put']
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
  const mutationDefaults = getPutAccountsIdStripeDetachPaymentMethodIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountsIdStripeGetPaymentMethodIndexQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']
  >,
) {
  return ['accounts', '/accounts/:id/stripe_get_payment_method/', args] as const
}

export function getAccountsIdStripeGetPaymentMethodIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdStripeGetPaymentMethodIndexQueryKey>
  >({
    queryKey: getAccountsIdStripeGetPaymentMethodIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':id'].stripe_get_payment_method.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountsIdStripeGetPaymentMethodIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdStripeGetPaymentMethodIndexQueryKey>
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
      ...getAccountsIdStripeGetPaymentMethodIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsIdStripeGetPaymentMethodIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdStripeGetPaymentMethodIndexQueryKey>
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
      ...getAccountsIdStripeGetPaymentMethodIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountsIdStripeGetSetupAttemptIndexQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']
  >,
) {
  return ['accounts', '/accounts/:id/stripe_get_setup_attempt/', args] as const
}

export function getAccountsIdStripeGetSetupAttemptIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdStripeGetSetupAttemptIndexQueryKey>
  >({
    queryKey: getAccountsIdStripeGetSetupAttemptIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':id'].stripe_get_setup_attempt.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountsIdStripeGetSetupAttemptIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdStripeGetSetupAttemptIndexQueryKey>
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
      ...getAccountsIdStripeGetSetupAttemptIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsIdStripeGetSetupAttemptIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdStripeGetSetupAttemptIndexQueryKey>
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
      ...getAccountsIdStripeGetSetupAttemptIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountsIdStripeGetSetupIntentIndexQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']
  >,
) {
  return ['accounts', '/accounts/:id/stripe_get_setup_intent/', args] as const
}

export function getAccountsIdStripeGetSetupIntentIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdStripeGetSetupIntentIndexQueryKey>
  >({
    queryKey: getAccountsIdStripeGetSetupIntentIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':id'].stripe_get_setup_intent.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountsIdStripeGetSetupIntentIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdStripeGetSetupIntentIndexQueryKey>
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
      ...getAccountsIdStripeGetSetupIntentIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsIdStripeGetSetupIntentIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdStripeGetSetupIntentIndexQueryKey>
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
      ...getAccountsIdStripeGetSetupIntentIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountsIdStripePaymentMethodsIndexQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']
  >,
) {
  return ['accounts', '/accounts/:id/stripe_payment_methods/', args] as const
}

export function getAccountsIdStripePaymentMethodsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdStripePaymentMethodsIndexQueryKey>
  >({
    queryKey: getAccountsIdStripePaymentMethodsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':id'].stripe_payment_methods.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountsIdStripePaymentMethodsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdStripePaymentMethodsIndexQueryKey>
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
      ...getAccountsIdStripePaymentMethodsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsIdStripePaymentMethodsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdStripePaymentMethodsIndexQueryKey>
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
      ...getAccountsIdStripePaymentMethodsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAccountsIdStripeSetDefaultPaymentMethodIndexMutationKey() {
  return ['accounts', '/accounts/:id/stripe_set_default_payment_method/', 'PUT'] as const
}

export function getPutAccountsIdStripeSetDefaultPaymentMethodIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':id']['stripe_set_default_payment_method']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':id']['stripe_set_default_payment_method']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsIdStripeSetDefaultPaymentMethodIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':id']['stripe_set_default_payment_method']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':id'].stripe_set_default_payment_method.index.$put(args, options),
      )
    },
  })
}

export function usePutAccountsIdStripeSetDefaultPaymentMethodIndex<
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
                  (typeof client.accounts)[':id']['stripe_set_default_payment_method']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.accounts)[':id']['stripe_set_default_payment_method']['index']['$put']
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
  const mutationDefaults = getPutAccountsIdStripeSetDefaultPaymentMethodIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountsIdStripeSetupIntentsIndexQueryKey(
  args: InferRequestType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>,
) {
  return ['accounts', '/accounts/:id/stripe_setup_intents/', args] as const
}

export function getAccountsIdStripeSetupIntentsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdStripeSetupIntentsIndexQueryKey>
  >({
    queryKey: getAccountsIdStripeSetupIntentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':id'].stripe_setup_intents.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountsIdStripeSetupIntentsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdStripeSetupIntentsIndexQueryKey>
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
      ...getAccountsIdStripeSetupIntentsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsIdStripeSetupIntentsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdStripeSetupIntentsIndexQueryKey>
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
      ...getAccountsIdStripeSetupIntentsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountsIdWorkersIndexQueryKey(
  args: InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$get']>,
) {
  return ['accounts', '/accounts/:id/workers/', args] as const
}

export function getAccountsIdWorkersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':id']['workers']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':id']['workers']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdWorkersIndexQueryKey>
  >({
    queryKey: getAccountsIdWorkersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':id'].workers.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountsIdWorkersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':id']['workers']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':id']['workers']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdWorkersIndexQueryKey>
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
      ...getAccountsIdWorkersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsIdWorkersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':id']['workers']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':id']['workers']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdWorkersIndexQueryKey>
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
      ...getAccountsIdWorkersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAccountsIdWorkersIndexMutationKey() {
  return ['accounts', '/accounts/:id/workers/', 'POST'] as const
}

export function getPostAccountsIdWorkersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':id']['workers']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsIdWorkersIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$post']>,
    ) {
      return parseResponse(client.accounts[':id'].workers.index.$post(args, options))
    },
  })
}

export function usePostAccountsIdWorkersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':id']['workers']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsIdWorkersIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAccountsIdWorkersIndexMutationKey() {
  return ['accounts', '/accounts/:id/workers/', 'DELETE'] as const
}

export function getDeleteAccountsIdWorkersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':id']['workers']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsIdWorkersIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$delete']>,
    ) {
      return parseResponse(client.accounts[':id'].workers.index.$delete(args, options))
    },
  })
}

export function useDeleteAccountsIdWorkersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':id']['workers']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountsIdWorkersIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAddonsIndexQueryKey(args: InferRequestType<typeof client.addons.index.$get>) {
  return ['addons', '/addons/', args] as const
}

export function getAddonsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.addons.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAddonsIndexQueryKey>
  >({
    queryKey: getAddonsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addons.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAddonsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.addons.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAddonsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAddonsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAddonsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.addons.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAddonsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAddonsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAddonsIdIndexQueryKey(
  args: InferRequestType<(typeof client.addons)[':id']['index']['$get']>,
) {
  return ['addons', '/addons/:id/', args] as const
}

export function getAddonsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.addons)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.addons)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.addons)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddonsIdIndexQueryKey>
  >({
    queryKey: getAddonsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addons[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAddonsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.addons)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.addons)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.addons)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAddonsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAddonsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAddonsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.addons)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.addons)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.addons)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAddonsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAddonsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAuthenticateIndexMutationKey() {
  return ['authenticate', '/authenticate/', 'POST'] as const
}

export function getPostAuthenticateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authenticate.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.authenticate.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthenticateIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authenticate.index.$post>) {
      return parseResponse(client.authenticate.index.$post(args, options))
    },
  })
}

export function usePostAuthenticateIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authenticate.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.authenticate.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthenticateIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBillingCustomersIndexQueryKey(
  args: InferRequestType<typeof client.billing.customers.index.$get>,
) {
  return ['billing', '/billing/customers/', args] as const
}

export function getBillingCustomersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.billing.customers.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.billing.customers.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.customers.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingCustomersIndexQueryKey>
  >({
    queryKey: getBillingCustomersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billing.customers.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBillingCustomersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.billing.customers.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.billing.customers.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.billing.customers.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingCustomersIndexQueryKey>
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
      ...getBillingCustomersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillingCustomersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.billing.customers.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.billing.customers.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.billing.customers.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingCustomersIndexQueryKey>
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
      ...getBillingCustomersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBillingCustomersIndexMutationKey() {
  return ['billing', '/billing/customers/', 'POST'] as const
}

export function getPostBillingCustomersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.customers.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.billing.customers.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBillingCustomersIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.billing.customers.index.$post>) {
      return parseResponse(client.billing.customers.index.$post(args, options))
    },
  })
}

export function usePostBillingCustomersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.billing.customers.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.billing.customers.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBillingCustomersIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBillingCustomersIdIndexQueryKey(
  args: InferRequestType<(typeof client.billing.customers)[':id']['index']['$get']>,
) {
  return ['billing', '/billing/customers/:id/', args] as const
}

export function getBillingCustomersIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.billing.customers)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing.customers)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billing.customers)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingCustomersIdIndexQueryKey>
  >({
    queryKey: getBillingCustomersIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billing.customers[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBillingCustomersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.billing.customers)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing.customers)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.billing.customers)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingCustomersIdIndexQueryKey>
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
      ...getBillingCustomersIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillingCustomersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.billing.customers)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing.customers)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.billing.customers)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingCustomersIdIndexQueryKey>
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
      ...getBillingCustomersIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutBillingCustomersIdIndexMutationKey() {
  return ['billing', '/billing/customers/:id/', 'PUT'] as const
}

export function getPutBillingCustomersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billing.customers)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.billing.customers)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBillingCustomersIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.billing.customers)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.billing.customers[':id'].index.$put(args, options))
    },
  })
}

export function usePutBillingCustomersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.billing.customers)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.billing.customers)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBillingCustomersIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchBillingCustomersIdIndexMutationKey() {
  return ['billing', '/billing/customers/:id/', 'PATCH'] as const
}

export function getPatchBillingCustomersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billing.customers)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.billing.customers)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBillingCustomersIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.billing.customers)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.billing.customers[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchBillingCustomersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.billing.customers)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.billing.customers)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBillingCustomersIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBillingCustomersIdClientTokenIndexQueryKey(
  args: InferRequestType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>,
) {
  return ['billing', '/billing/customers/:id/client_token/', args] as const
}

export function getBillingCustomersIdClientTokenIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingCustomersIdClientTokenIndexQueryKey>
  >({
    queryKey: getBillingCustomersIdClientTokenIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billing.customers[':id'].client_token.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBillingCustomersIdClientTokenIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.billing.customers)[':id']['client_token']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingCustomersIdClientTokenIndexQueryKey>
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
      ...getBillingCustomersIdClientTokenIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillingCustomersIdClientTokenIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.billing.customers)[':id']['client_token']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingCustomersIdClientTokenIndexQueryKey>
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
      ...getBillingCustomersIdClientTokenIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBillingInvoicesIndexQueryKey(
  args: InferRequestType<typeof client.billing.invoices.index.$get>,
) {
  return ['billing', '/billing/invoices/', args] as const
}

export function getBillingInvoicesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.invoices.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.billing.invoices.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.invoices.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingInvoicesIndexQueryKey>
  >({
    queryKey: getBillingInvoicesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billing.invoices.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBillingInvoicesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.invoices.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.billing.invoices.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.billing.invoices.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingInvoicesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBillingInvoicesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBillingInvoicesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.invoices.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.billing.invoices.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.billing.invoices.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingInvoicesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBillingInvoicesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBillingInvoicesIdIndexQueryKey(
  args: InferRequestType<(typeof client.billing.invoices)[':id']['index']['$get']>,
) {
  return ['billing', '/billing/invoices/:id/', args] as const
}

export function getBillingInvoicesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.billing.invoices)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing.invoices)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billing.invoices)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingInvoicesIdIndexQueryKey>
  >({
    queryKey: getBillingInvoicesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billing.invoices[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBillingInvoicesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.billing.invoices)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing.invoices)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.billing.invoices)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingInvoicesIdIndexQueryKey>
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
      ...getBillingInvoicesIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillingInvoicesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.billing.invoices)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing.invoices)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.billing.invoices)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingInvoicesIdIndexQueryKey>
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
      ...getBillingInvoicesIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutBillingInvoicesIdIndexMutationKey() {
  return ['billing', '/billing/invoices/:id/', 'PUT'] as const
}

export function getPutBillingInvoicesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billing.invoices)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.billing.invoices)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBillingInvoicesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.billing.invoices)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.billing.invoices[':id'].index.$put(args, options))
    },
  })
}

export function usePutBillingInvoicesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.billing.invoices)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.billing.invoices)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBillingInvoicesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchBillingInvoicesIdIndexMutationKey() {
  return ['billing', '/billing/invoices/:id/', 'PATCH'] as const
}

export function getPatchBillingInvoicesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billing.invoices)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.billing.invoices)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBillingInvoicesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.billing.invoices)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.billing.invoices[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchBillingInvoicesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.billing.invoices)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.billing.invoices)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBillingInvoicesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBillingInvoicesIdMarkAsPaidIndexMutationKey() {
  return ['billing', '/billing/invoices/:id/mark_as_paid/', 'POST'] as const
}

export function getPostBillingInvoicesIdMarkAsPaidIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.billing.invoices)[':id']['mark_as_paid']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.billing.invoices)[':id']['mark_as_paid']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBillingInvoicesIdMarkAsPaidIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.billing.invoices)[':id']['mark_as_paid']['index']['$post']
      >,
    ) {
      return parseResponse(client.billing.invoices[':id'].mark_as_paid.index.$post(args, options))
    },
  })
}

export function usePostBillingInvoicesIdMarkAsPaidIndex<
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
                  (typeof client.billing.invoices)[':id']['mark_as_paid']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.billing.invoices)[':id']['mark_as_paid']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBillingInvoicesIdMarkAsPaidIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBillingStripePaymentsIndexQueryKey(
  args: InferRequestType<typeof client.billing.stripe_payments.index.$get>,
) {
  return ['billing', '/billing/stripe_payments/', args] as const
}

export function getBillingStripePaymentsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.billing.stripe_payments.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.billing.stripe_payments.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.stripe_payments.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingStripePaymentsIndexQueryKey>
  >({
    queryKey: getBillingStripePaymentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billing.stripe_payments.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBillingStripePaymentsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.billing.stripe_payments.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.billing.stripe_payments.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.billing.stripe_payments.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingStripePaymentsIndexQueryKey>
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
      ...getBillingStripePaymentsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillingStripePaymentsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.billing.stripe_payments.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.billing.stripe_payments.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.billing.stripe_payments.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingStripePaymentsIndexQueryKey>
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
      ...getBillingStripePaymentsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBillingStripePaymentsIdIndexQueryKey(
  args: InferRequestType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>,
) {
  return ['billing', '/billing/stripe_payments/:id/', args] as const
}

export function getBillingStripePaymentsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingStripePaymentsIdIndexQueryKey>
  >({
    queryKey: getBillingStripePaymentsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billing.stripe_payments[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBillingStripePaymentsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingStripePaymentsIdIndexQueryKey>
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
      ...getBillingStripePaymentsIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillingStripePaymentsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingStripePaymentsIdIndexQueryKey>
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
      ...getBillingStripePaymentsIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBillingTransactionsIndexQueryKey(
  args: InferRequestType<typeof client.billing.transactions.index.$get>,
) {
  return ['billing', '/billing/transactions/', args] as const
}

export function getBillingTransactionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.billing.transactions.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.billing.transactions.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.transactions.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingTransactionsIndexQueryKey>
  >({
    queryKey: getBillingTransactionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billing.transactions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBillingTransactionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.billing.transactions.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.billing.transactions.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.billing.transactions.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingTransactionsIndexQueryKey>
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
      ...getBillingTransactionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillingTransactionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.billing.transactions.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.billing.transactions.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.billing.transactions.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingTransactionsIndexQueryKey>
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
      ...getBillingTransactionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBillingTransactionsIdIndexQueryKey(
  args: InferRequestType<(typeof client.billing.transactions)[':id']['index']['$get']>,
) {
  return ['billing', '/billing/transactions/:id/', args] as const
}

export function getBillingTransactionsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.billing.transactions)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing.transactions)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billing.transactions)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingTransactionsIdIndexQueryKey>
  >({
    queryKey: getBillingTransactionsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billing.transactions[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBillingTransactionsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.billing.transactions)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing.transactions)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.billing.transactions)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingTransactionsIdIndexQueryKey>
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
      ...getBillingTransactionsIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillingTransactionsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.billing.transactions)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing.transactions)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.billing.transactions)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingTransactionsIdIndexQueryKey>
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
      ...getBillingTransactionsIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClientRolesIndexQueryKey(
  args: InferRequestType<typeof client.client_roles.index.$get>,
) {
  return ['client_roles', '/client_roles/', args] as const
}

export function getClientRolesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client_roles.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.client_roles.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client_roles.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClientRolesIndexQueryKey>
  >({
    queryKey: getClientRolesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.client_roles.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClientRolesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client_roles.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.client_roles.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.client_roles.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientRolesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClientRolesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClientRolesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client_roles.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.client_roles.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.client_roles.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientRolesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClientRolesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostClientRolesIndexMutationKey() {
  return ['client_roles', '/client_roles/', 'POST'] as const
}

export function getPostClientRolesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client_roles.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.client_roles.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClientRolesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.client_roles.index.$post>) {
      return parseResponse(client.client_roles.index.$post(args, options))
    },
  })
}

export function usePostClientRolesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.client_roles.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.client_roles.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClientRolesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getClientRolesIdIndexQueryKey(
  args: InferRequestType<(typeof client.client_roles)[':id']['index']['$get']>,
) {
  return ['client_roles', '/client_roles/:id/', args] as const
}

export function getClientRolesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.client_roles)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.client_roles)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.client_roles)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientRolesIdIndexQueryKey>
  >({
    queryKey: getClientRolesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.client_roles[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClientRolesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.client_roles)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.client_roles)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.client_roles)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientRolesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClientRolesIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClientRolesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.client_roles)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.client_roles)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.client_roles)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientRolesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClientRolesIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutClientRolesIdIndexMutationKey() {
  return ['client_roles', '/client_roles/:id/', 'PUT'] as const
}

export function getPutClientRolesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.client_roles)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.client_roles)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutClientRolesIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.client_roles)[':id']['index']['$put']>) {
      return parseResponse(client.client_roles[':id'].index.$put(args, options))
    },
  })
}

export function usePutClientRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.client_roles)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.client_roles)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutClientRolesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchClientRolesIdIndexMutationKey() {
  return ['client_roles', '/client_roles/:id/', 'PATCH'] as const
}

export function getPatchClientRolesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.client_roles)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.client_roles)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchClientRolesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.client_roles)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.client_roles[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchClientRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.client_roles)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.client_roles)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchClientRolesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostClientRolesIdNotifyIndexMutationKey() {
  return ['client_roles', '/client_roles/:id/notify/', 'POST'] as const
}

export function getPostClientRolesIdNotifyIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.client_roles)[':id']['notify']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.client_roles)[':id']['notify']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClientRolesIdNotifyIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.client_roles)[':id']['notify']['index']['$post']>,
    ) {
      return parseResponse(client.client_roles[':id'].notify.index.$post(args, options))
    },
  })
}

export function usePostClientRolesIdNotifyIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.client_roles)[':id']['notify']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.client_roles)[':id']['notify']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClientRolesIdNotifyIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getClientsIndexQueryKey(args: InferRequestType<typeof client.clients.index.$get>) {
  return ['clients', '/clients/', args] as const
}

export function getClientsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.clients.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClientsIndexQueryKey>
  >({
    queryKey: getClientsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clients.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClientsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.clients.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getClientsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClientsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClientsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.clients.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getClientsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClientsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostClientsIndexMutationKey() {
  return ['clients', '/clients/', 'POST'] as const
}

export function getPostClientsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.clients.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClientsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.clients.index.$post>) {
      return parseResponse(client.clients.index.$post(args, options))
    },
  })
}

export function usePostClientsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.clients.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClientsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getClientsIdIndexQueryKey(
  args: InferRequestType<(typeof client.clients)[':id']['index']['$get']>,
) {
  return ['clients', '/clients/:id/', args] as const
}

export function getClientsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clients)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientsIdIndexQueryKey>
  >({
    queryKey: getClientsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clients[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClientsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clients)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clients)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClientsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClientsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clients)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clients)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClientsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutClientsIdIndexMutationKey() {
  return ['clients', '/clients/:id/', 'PUT'] as const
}

export function getPutClientsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.clients)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutClientsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.clients)[':id']['index']['$put']>) {
      return parseResponse(client.clients[':id'].index.$put(args, options))
    },
  })
}

export function usePutClientsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clients)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.clients)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutClientsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchClientsIdIndexMutationKey() {
  return ['clients', '/clients/:id/', 'PATCH'] as const
}

export function getPatchClientsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.clients)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchClientsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.clients)[':id']['index']['$patch']>) {
      return parseResponse(client.clients[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchClientsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clients)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.clients)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchClientsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConfigurationsIndexQueryKey(
  args: InferRequestType<typeof client.configurations.index.$get>,
) {
  return ['configurations', '/configurations/', args] as const
}

export function getConfigurationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configurations.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.configurations.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configurations.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConfigurationsIndexQueryKey>
  >({
    queryKey: getConfigurationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.configurations.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConfigurationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configurations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.configurations.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.configurations.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConfigurationsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConfigurationsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConfigurationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configurations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.configurations.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.configurations.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConfigurationsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConfigurationsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getContactAddressExportsIndexQueryKey(
  args: InferRequestType<typeof client.contact_address_exports.index.$get>,
) {
  return ['contact_address_exports', '/contact_address_exports/', args] as const
}

export function getContactAddressExportsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contact_address_exports.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contact_address_exports.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contact_address_exports.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactAddressExportsIndexQueryKey>
  >({
    queryKey: getContactAddressExportsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contact_address_exports.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactAddressExportsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contact_address_exports.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contact_address_exports.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.contact_address_exports.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactAddressExportsIndexQueryKey>
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
      ...getContactAddressExportsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactAddressExportsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contact_address_exports.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contact_address_exports.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.contact_address_exports.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactAddressExportsIndexQueryKey>
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
      ...getContactAddressExportsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getContactAddressImportIndexQueryKey(
  args: InferRequestType<typeof client.contact_address_import.index.$get>,
) {
  return ['contact_address_import', '/contact_address_import/', args] as const
}

export function getContactAddressImportIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contact_address_import.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contact_address_import.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contact_address_import.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactAddressImportIndexQueryKey>
  >({
    queryKey: getContactAddressImportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contact_address_import.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactAddressImportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contact_address_import.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contact_address_import.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.contact_address_import.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactAddressImportIndexQueryKey>
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
      ...getContactAddressImportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactAddressImportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contact_address_import.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contact_address_import.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.contact_address_import.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactAddressImportIndexQueryKey>
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
      ...getContactAddressImportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostContactAddressImportIndexMutationKey() {
  return ['contact_address_import', '/contact_address_import/', 'POST'] as const
}

export function getPostContactAddressImportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contact_address_import.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.contact_address_import.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactAddressImportIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contact_address_import.index.$post>) {
      return parseResponse(client.contact_address_import.index.$post(args, options))
    },
  })
}

export function usePostContactAddressImportIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.contact_address_import.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.contact_address_import.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactAddressImportIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactAddressImportIdIndexQueryKey(
  args: InferRequestType<(typeof client.contact_address_import)[':id']['index']['$get']>,
) {
  return ['contact_address_import', '/contact_address_import/:id/', args] as const
}

export function getContactAddressImportIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contact_address_import)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contact_address_import)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact_address_import)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactAddressImportIdIndexQueryKey>
  >({
    queryKey: getContactAddressImportIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contact_address_import[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactAddressImportIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contact_address_import)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contact_address_import)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contact_address_import)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactAddressImportIdIndexQueryKey>
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
      ...getContactAddressImportIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactAddressImportIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contact_address_import)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contact_address_import)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contact_address_import)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactAddressImportIdIndexQueryKey>
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
      ...getContactAddressImportIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getContactAddressesIndexQueryKey(
  args: InferRequestType<typeof client.contact_addresses.index.$get>,
) {
  return ['contact_addresses', '/contact_addresses/', args] as const
}

export function getContactAddressesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contact_addresses.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contact_addresses.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contact_addresses.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactAddressesIndexQueryKey>
  >({
    queryKey: getContactAddressesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contact_addresses.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactAddressesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contact_addresses.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contact_addresses.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contact_addresses.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactAddressesIndexQueryKey>
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
      ...getContactAddressesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactAddressesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contact_addresses.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contact_addresses.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contact_addresses.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactAddressesIndexQueryKey>
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
      ...getContactAddressesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostContactAddressesIndexMutationKey() {
  return ['contact_addresses', '/contact_addresses/', 'POST'] as const
}

export function getPostContactAddressesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contact_addresses.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.contact_addresses.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactAddressesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contact_addresses.index.$post>) {
      return parseResponse(client.contact_addresses.index.$post(args, options))
    },
  })
}

export function usePostContactAddressesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contact_addresses.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.contact_addresses.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactAddressesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactAddressesIdIndexQueryKey(
  args: InferRequestType<(typeof client.contact_addresses)[':id']['index']['$get']>,
) {
  return ['contact_addresses', '/contact_addresses/:id/', args] as const
}

export function getContactAddressesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contact_addresses)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contact_addresses)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact_addresses)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactAddressesIdIndexQueryKey>
  >({
    queryKey: getContactAddressesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contact_addresses[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactAddressesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contact_addresses)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contact_addresses)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contact_addresses)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactAddressesIdIndexQueryKey>
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
      ...getContactAddressesIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactAddressesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contact_addresses)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contact_addresses)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contact_addresses)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactAddressesIdIndexQueryKey>
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
      ...getContactAddressesIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutContactAddressesIdIndexMutationKey() {
  return ['contact_addresses', '/contact_addresses/:id/', 'PUT'] as const
}

export function getPutContactAddressesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact_addresses)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contact_addresses)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutContactAddressesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contact_addresses)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.contact_addresses[':id'].index.$put(args, options))
    },
  })
}

export function usePutContactAddressesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contact_addresses)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contact_addresses)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutContactAddressesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchContactAddressesIdIndexMutationKey() {
  return ['contact_addresses', '/contact_addresses/:id/', 'PATCH'] as const
}

export function getPatchContactAddressesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact_addresses)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contact_addresses)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchContactAddressesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contact_addresses)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.contact_addresses[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchContactAddressesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contact_addresses)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contact_addresses)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchContactAddressesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDevicesIndexQueryKey(args: InferRequestType<typeof client.devices.index.$get>) {
  return ['devices', '/devices/', args] as const
}

export function getDevicesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.devices.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIndexQueryKey>
  >({
    queryKey: getDevicesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDevicesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.devices.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDevicesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDevicesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDevicesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.devices.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDevicesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDevicesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDevicesIndexMutationKey() {
  return ['devices', '/devices/', 'POST'] as const
}

export function getPostDevicesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.devices.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDevicesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.devices.index.$post>) {
      return parseResponse(client.devices.index.$post(args, options))
    },
  })
}

export function usePostDevicesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.devices.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDevicesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDevicesIdIndexQueryKey(
  args: InferRequestType<(typeof client.devices)[':id']['index']['$get']>,
) {
  return ['devices', '/devices/:id/', args] as const
}

export function getDevicesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdIndexQueryKey>
  >({
    queryKey: getDevicesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDevicesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.devices)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDevicesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDevicesIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDevicesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.devices)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDevicesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDevicesIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDocsSchemaIndexQueryKey(
  args: InferRequestType<typeof client.docs.schema.index.$get>,
) {
  return ['docs', '/docs/schema/', args] as const
}

export function getDocsSchemaIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.schema.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.docs.schema.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.schema.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDocsSchemaIndexQueryKey>
  >({
    queryKey: getDocsSchemaIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.docs.schema.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDocsSchemaIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.schema.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.docs.schema.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.docs.schema.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocsSchemaIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDocsSchemaIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDocsSchemaIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.schema.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.docs.schema.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.docs.schema.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocsSchemaIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDocsSchemaIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDocumentsIndexQueryKey(
  args: InferRequestType<typeof client.documents.index.$get>,
) {
  return ['documents', '/documents/', args] as const
}

export function getDocumentsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.documents.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsIndexQueryKey>
  >({
    queryKey: getDocumentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDocumentsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.documents.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDocumentsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDocumentsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.documents.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDocumentsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDocumentsIndexMutationKey() {
  return ['documents', '/documents/', 'POST'] as const
}

export function getPostDocumentsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.documents.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.documents.index.$post>) {
      return parseResponse(client.documents.index.$post(args, options))
    },
  })
}

export function usePostDocumentsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.documents.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDocumentsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDocumentsBatchDeleteIndexMutationKey() {
  return ['documents', '/documents/batch_delete/', 'POST'] as const
}

export function getPostDocumentsBatchDeleteIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.documents.batch_delete.index.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.documents.batch_delete.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsBatchDeleteIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.documents.batch_delete.index.$post>) {
      return parseResponse(client.documents.batch_delete.index.$post(args, options))
    },
  })
}

export function usePostDocumentsBatchDeleteIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.documents.batch_delete.index.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.documents.batch_delete.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDocumentsBatchDeleteIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDocumentsIdIndexQueryKey(
  args: InferRequestType<(typeof client.documents)[':id']['index']['$get']>,
) {
  return ['documents', '/documents/:id/', args] as const
}

export function getDocumentsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsIdIndexQueryKey>
  >({
    queryKey: getDocumentsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDocumentsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDocumentsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDocumentsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDocumentsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteDocumentsIdIndexMutationKey() {
  return ['documents', '/documents/:id/', 'DELETE'] as const
}

export function getDeleteDocumentsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.documents)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDocumentsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.documents)[':id']['index']['$delete']>) {
      return parseResponse(client.documents[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDocumentsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.documents)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDocumentsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEmailsIndexQueryKey(args: InferRequestType<typeof client.emails.index.$get>) {
  return ['emails', '/emails/', args] as const
}

export function getEmailsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.emails.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEmailsIndexQueryKey>
  >({
    queryKey: getEmailsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emails.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEmailsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.emails.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmailsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmailsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.emails.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmailsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostEmailsIndexMutationKey() {
  return ['emails', '/emails/', 'POST'] as const
}

export function getPostEmailsIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.emails.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.emails.index.$post>) {
      return parseResponse(client.emails.index.$post(args, options))
    },
  })
}

export function usePostEmailsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.emails.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailsIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEmailsIdIndexQueryKey(
  args: InferRequestType<(typeof client.emails)[':id']['index']['$get']>,
) {
  return ['emails', '/emails/:id/', args] as const
}

export function getEmailsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emails)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsIdIndexQueryKey>
  >({
    queryKey: getEmailsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emails[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEmailsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emails)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.emails)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmailsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmailsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emails)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.emails)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmailsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutEmailsIdIndexMutationKey() {
  return ['emails', '/emails/:id/', 'PUT'] as const
}

export function getPutEmailsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.emails)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEmailsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.emails)[':id']['index']['$put']>) {
      return parseResponse(client.emails[':id'].index.$put(args, options))
    },
  })
}

export function usePutEmailsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.emails)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.emails)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEmailsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteEmailsIdIndexMutationKey() {
  return ['emails', '/emails/:id/', 'DELETE'] as const
}

export function getDeleteEmailsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emails)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.emails)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmailsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.emails)[':id']['index']['$delete']>) {
      return parseResponse(client.emails[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteEmailsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.emails)[':id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.emails)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEmailsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchEmailsIdIndexMutationKey() {
  return ['emails', '/emails/:id/', 'PATCH'] as const
}

export function getPatchEmailsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.emails)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEmailsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.emails)[':id']['index']['$patch']>) {
      return parseResponse(client.emails[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchEmailsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.emails)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.emails)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchEmailsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEmailsIdResendIndexMutationKey() {
  return ['emails', '/emails/:id/resend/', 'POST'] as const
}

export function getPostEmailsIdResendIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.emails)[':id']['resend']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.emails)[':id']['resend']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailsIdResendIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.emails)[':id']['resend']['index']['$post']>,
    ) {
      return parseResponse(client.emails[':id'].resend.index.$post(args, options))
    },
  })
}

export function usePostEmailsIdResendIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.emails)[':id']['resend']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.emails)[':id']['resend']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailsIdResendIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExportsIndexQueryKey(args: InferRequestType<typeof client.exports.index.$get>) {
  return ['exports', '/exports/', args] as const
}

export function getExportsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.exports.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExportsIndexQueryKey>
  >({
    queryKey: getExportsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.exports.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useExportsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.exports.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getExportsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getExportsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseExportsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.exports.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getExportsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getExportsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostExportsIndexMutationKey() {
  return ['exports', '/exports/', 'POST'] as const
}

export function getPostExportsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.exports.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.exports.index.$post>) {
      return parseResponse(client.exports.index.$post(args, options))
    },
  })
}

export function usePostExportsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.exports.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExportsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExportsIdIndexQueryKey(
  args: InferRequestType<(typeof client.exports)[':id']['index']['$get']>,
) {
  return ['exports', '/exports/:id/', args] as const
}

export function getExportsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.exports)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportsIdIndexQueryKey>
  >({
    queryKey: getExportsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.exports[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useExportsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.exports)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.exports)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getExportsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseExportsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.exports)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.exports)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getExportsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutExportsIdIndexMutationKey() {
  return ['exports', '/exports/:id/', 'PUT'] as const
}

export function getPutExportsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.exports)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutExportsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.exports)[':id']['index']['$put']>) {
      return parseResponse(client.exports[':id'].index.$put(args, options))
    },
  })
}

export function usePutExportsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.exports)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.exports)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutExportsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteExportsIdIndexMutationKey() {
  return ['exports', '/exports/:id/', 'DELETE'] as const
}

export function getDeleteExportsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.exports)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.exports)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteExportsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.exports)[':id']['index']['$delete']>) {
      return parseResponse(client.exports[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteExportsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.exports)[':id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.exports)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteExportsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchExportsIdIndexMutationKey() {
  return ['exports', '/exports/:id/', 'PATCH'] as const
}

export function getPatchExportsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.exports)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchExportsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.exports)[':id']['index']['$patch']>) {
      return parseResponse(client.exports[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchExportsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.exports)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.exports)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchExportsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFileUploadsIndexQueryKey(
  args: InferRequestType<typeof client.file_uploads.index.$get>,
) {
  return ['file_uploads', '/file_uploads/', args] as const
}

export function getFileUploadsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file_uploads.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.file_uploads.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file_uploads.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFileUploadsIndexQueryKey>
  >({
    queryKey: getFileUploadsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.file_uploads.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFileUploadsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file_uploads.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.file_uploads.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.file_uploads.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileUploadsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFileUploadsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFileUploadsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file_uploads.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.file_uploads.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.file_uploads.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileUploadsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFileUploadsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFileUploadsIndexMutationKey() {
  return ['file_uploads', '/file_uploads/', 'POST'] as const
}

export function getPostFileUploadsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file_uploads.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.file_uploads.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFileUploadsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.file_uploads.index.$post>) {
      return parseResponse(client.file_uploads.index.$post(args, options))
    },
  })
}

export function usePostFileUploadsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.file_uploads.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.file_uploads.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFileUploadsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFileUploadsIdIndexQueryKey(
  args: InferRequestType<(typeof client.file_uploads)[':id']['index']['$get']>,
) {
  return ['file_uploads', '/file_uploads/:id/', args] as const
}

export function getFileUploadsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.file_uploads)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.file_uploads)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.file_uploads)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileUploadsIdIndexQueryKey>
  >({
    queryKey: getFileUploadsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.file_uploads[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFileUploadsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.file_uploads)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.file_uploads)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.file_uploads)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileUploadsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFileUploadsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFileUploadsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.file_uploads)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.file_uploads)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.file_uploads)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileUploadsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFileUploadsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFormrulesIndexQueryKey(
  args: InferRequestType<typeof client.formrules.index.$get>,
) {
  return ['formrules', '/formrules/', args] as const
}

export function getFormrulesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formrules.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.formrules.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formrules.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFormrulesIndexQueryKey>
  >({
    queryKey: getFormrulesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.formrules.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFormrulesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formrules.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.formrules.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formrules.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFormrulesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFormrulesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFormrulesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formrules.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.formrules.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formrules.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFormrulesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFormrulesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFormrulesIndexMutationKey() {
  return ['formrules', '/formrules/', 'POST'] as const
}

export function getPostFormrulesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formrules.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.formrules.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFormrulesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.formrules.index.$post>) {
      return parseResponse(client.formrules.index.$post(args, options))
    },
  })
}

export function usePostFormrulesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formrules.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.formrules.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFormrulesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFormrulesIdIndexQueryKey(
  args: InferRequestType<(typeof client.formrules)[':id']['index']['$get']>,
) {
  return ['formrules', '/formrules/:id/', args] as const
}

export function getFormrulesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.formrules)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormrulesIdIndexQueryKey>
  >({
    queryKey: getFormrulesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.formrules[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFormrulesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.formrules)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormrulesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFormrulesIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFormrulesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.formrules)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormrulesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFormrulesIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutFormrulesIdIndexMutationKey() {
  return ['formrules', '/formrules/:id/', 'PUT'] as const
}

export function getPutFormrulesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.formrules)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFormrulesIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.formrules)[':id']['index']['$put']>) {
      return parseResponse(client.formrules[':id'].index.$put(args, options))
    },
  })
}

export function usePutFormrulesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.formrules)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFormrulesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFormrulesIdIndexMutationKey() {
  return ['formrules', '/formrules/:id/', 'DELETE'] as const
}

export function getDeleteFormrulesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.formrules)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFormrulesIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.formrules)[':id']['index']['$delete']>) {
      return parseResponse(client.formrules[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteFormrulesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.formrules)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFormrulesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchFormrulesIdIndexMutationKey() {
  return ['formrules', '/formrules/:id/', 'PATCH'] as const
}

export function getPatchFormrulesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.formrules)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFormrulesIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.formrules)[':id']['index']['$patch']>) {
      return parseResponse(client.formrules[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchFormrulesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.formrules)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchFormrulesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostIntegrationsIndexMutationKey() {
  return ['integrations', '/integrations/', 'POST'] as const
}

export function getPostIntegrationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.integrations.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegrationsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.integrations.index.$post>) {
      return parseResponse(client.integrations.index.$post(args, options))
    },
  })
}

export function usePostIntegrationsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.integrations.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIntegrationsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMetafieldsIndexQueryKey(
  args: InferRequestType<typeof client.metafields.index.$get>,
) {
  return ['metafields', '/metafields/', args] as const
}

export function getMetafieldsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metafields.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metafields.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metafields.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetafieldsIndexQueryKey>
  >({
    queryKey: getMetafieldsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metafields.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMetafieldsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metafields.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metafields.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metafields.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMetafieldsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetafieldsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetafieldsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metafields.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metafields.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metafields.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMetafieldsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetafieldsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMetafieldsIndexMutationKey() {
  return ['metafields', '/metafields/', 'POST'] as const
}

export function getPostMetafieldsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metafields.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.metafields.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMetafieldsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.metafields.index.$post>) {
      return parseResponse(client.metafields.index.$post(args, options))
    },
  })
}

export function usePostMetafieldsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metafields.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.metafields.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetafieldsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMetafieldsIdIndexQueryKey(
  args: InferRequestType<(typeof client.metafields)[':id']['index']['$get']>,
) {
  return ['metafields', '/metafields/:id/', args] as const
}

export function getMetafieldsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metafields)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetafieldsIdIndexQueryKey>
  >({
    queryKey: getMetafieldsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metafields[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMetafieldsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metafields)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetafieldsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetafieldsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetafieldsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metafields)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetafieldsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetafieldsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutMetafieldsIdIndexMutationKey() {
  return ['metafields', '/metafields/:id/', 'PUT'] as const
}

export function getPutMetafieldsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.metafields)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMetafieldsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.metafields)[':id']['index']['$put']>) {
      return parseResponse(client.metafields[':id'].index.$put(args, options))
    },
  })
}

export function usePutMetafieldsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.metafields)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMetafieldsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteMetafieldsIdIndexMutationKey() {
  return ['metafields', '/metafields/:id/', 'DELETE'] as const
}

export function getDeleteMetafieldsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.metafields)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMetafieldsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.metafields)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.metafields[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteMetafieldsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.metafields)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMetafieldsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchMetafieldsIdIndexMutationKey() {
  return ['metafields', '/metafields/:id/', 'PATCH'] as const
}

export function getPatchMetafieldsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.metafields)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMetafieldsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.metafields)[':id']['index']['$patch']>) {
      return parseResponse(client.metafields[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchMetafieldsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.metafields)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMetafieldsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNotificationTemplatesIndexQueryKey(
  args: InferRequestType<typeof client.notification_templates.index.$get>,
) {
  return ['notification_templates', '/notification_templates/', args] as const
}

export function getNotificationTemplatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notification_templates.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notification_templates.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notification_templates.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationTemplatesIndexQueryKey>
  >({
    queryKey: getNotificationTemplatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notification_templates.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notification_templates.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notification_templates.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.notification_templates.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationTemplatesIndexQueryKey>
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
      ...getNotificationTemplatesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNotificationTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notification_templates.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notification_templates.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.notification_templates.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationTemplatesIndexQueryKey>
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
      ...getNotificationTemplatesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostNotificationTemplatesIndexMutationKey() {
  return ['notification_templates', '/notification_templates/', 'POST'] as const
}

export function getPostNotificationTemplatesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notification_templates.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.notification_templates.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationTemplatesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notification_templates.index.$post>) {
      return parseResponse(client.notification_templates.index.$post(args, options))
    },
  })
}

export function usePostNotificationTemplatesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.notification_templates.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.notification_templates.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNotificationTemplatesIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNotificationTemplatesIdIndexQueryKey(
  args: InferRequestType<(typeof client.notification_templates)[':id']['index']['$get']>,
) {
  return ['notification_templates', '/notification_templates/:id/', args] as const
}

export function getNotificationTemplatesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notification_templates)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationTemplatesIdIndexQueryKey>
  >({
    queryKey: getNotificationTemplatesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notification_templates[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notification_templates)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationTemplatesIdIndexQueryKey>
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
      ...getNotificationTemplatesIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNotificationTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notification_templates)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationTemplatesIdIndexQueryKey>
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
      ...getNotificationTemplatesIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutNotificationTemplatesIdIndexMutationKey() {
  return ['notification_templates', '/notification_templates/:id/', 'PUT'] as const
}

export function getPutNotificationTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notification_templates)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notification_templates)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.notification_templates[':id'].index.$put(args, options))
    },
  })
}

export function usePutNotificationTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notification_templates)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNotificationTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteNotificationTemplatesIdIndexMutationKey() {
  return ['notification_templates', '/notification_templates/:id/', 'DELETE'] as const
}

export function getDeleteNotificationTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.notification_templates)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notification_templates)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.notification_templates[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteNotificationTemplatesIdIndex<
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
                  ReturnType<(typeof client.notification_templates)[':id']['index']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.notification_templates)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNotificationTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchNotificationTemplatesIdIndexMutationKey() {
  return ['notification_templates', '/notification_templates/:id/', 'PATCH'] as const
}

export function getPatchNotificationTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notification_templates)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNotificationTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notification_templates)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.notification_templates[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchNotificationTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notification_templates)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchNotificationTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostNotificationTemplatesIdRenderIndexMutationKey() {
  return ['notification_templates', '/notification_templates/:id/render/', 'POST'] as const
}

export function getPostNotificationTemplatesIdRenderIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.notification_templates)[':id']['render']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notification_templates)[':id']['render']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationTemplatesIdRenderIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.notification_templates)[':id']['render']['index']['$post']
      >,
    ) {
      return parseResponse(client.notification_templates[':id'].render.index.$post(args, options))
    },
  })
}

export function usePostNotificationTemplatesIdRenderIndex<
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
                  (typeof client.notification_templates)[':id']['render']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notification_templates)[':id']['render']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNotificationTemplatesIdRenderIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNotificationsIndexQueryKey(
  args: InferRequestType<typeof client.notifications.index.$get>,
) {
  return ['notifications', '/notifications/', args] as const
}

export function getNotificationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.notifications.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIndexQueryKey>
  >({
    queryKey: getNotificationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNotificationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notifications.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notifications.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotificationsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotificationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notifications.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notifications.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotificationsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNotificationsIndexMutationKey() {
  return ['notifications', '/notifications/', 'POST'] as const
}

export function getPostNotificationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.notifications.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notifications.index.$post>) {
      return parseResponse(client.notifications.index.$post(args, options))
    },
  })
}

export function usePostNotificationsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notifications.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.notifications.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNotificationsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNotificationsIdIndexQueryKey(
  args: InferRequestType<(typeof client.notifications)[':id']['index']['$get']>,
) {
  return ['notifications', '/notifications/:id/', args] as const
}

export function getNotificationsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdIndexQueryKey>
  >({
    queryKey: getNotificationsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotificationsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotificationsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotificationsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOrdersIndexQueryKey(args: InferRequestType<typeof client.orders.index.$get>) {
  return ['orders', '/orders/', args] as const
}

export function getOrdersIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.orders.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrdersIndexQueryKey>
  >({
    queryKey: getOrdersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orders.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrdersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.orders.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrdersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrdersIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrdersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.orders.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrdersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrdersIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOrdersIndexMutationKey() {
  return ['orders', '/orders/', 'POST'] as const
}

export function getPostOrdersIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.orders.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.orders.index.$post>) {
      return parseResponse(client.orders.index.$post(args, options))
    },
  })
}

export function usePostOrdersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.orders.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrdersIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrdersIdIndexQueryKey(
  args: InferRequestType<(typeof client.orders)[':id']['index']['$get']>,
) {
  return ['orders', '/orders/:id/', args] as const
}

export function getOrdersIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orders)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrdersIdIndexQueryKey>
  >({
    queryKey: getOrdersIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orders[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrdersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orders)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orders)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrdersIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrdersIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrdersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orders)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orders)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrdersIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrdersIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutOrdersIdIndexMutationKey() {
  return ['orders', '/orders/:id/', 'PUT'] as const
}

export function getPutOrdersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrdersIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.orders)[':id']['index']['$put']>) {
      return parseResponse(client.orders[':id'].index.$put(args, options))
    },
  })
}

export function usePutOrdersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orders)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.orders)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrdersIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchOrdersIdIndexMutationKey() {
  return ['orders', '/orders/:id/', 'PATCH'] as const
}

export function getPatchOrdersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrdersIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.orders)[':id']['index']['$patch']>) {
      return parseResponse(client.orders[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchOrdersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orders)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.orders)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchOrdersIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPasswordChangeIndexMutationKey() {
  return ['password_change', '/password_change/', 'POST'] as const
}

export function getPostPasswordChangeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.password_change.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.password_change.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPasswordChangeIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.password_change.index.$post>) {
      return parseResponse(client.password_change.index.$post(args, options))
    },
  })
}

export function usePostPasswordChangeIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.password_change.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.password_change.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPasswordChangeIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPasswordResetIndexMutationKey() {
  return ['password_reset', '/password_reset/', 'POST'] as const
}

export function getPostPasswordResetIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.password_reset.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.password_reset.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPasswordResetIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.password_reset.index.$post>) {
      return parseResponse(client.password_reset.index.$post(args, options))
    },
  })
}

export function usePostPasswordResetIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.password_reset.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.password_reset.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPasswordResetIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPasswordResetConfirmIndexMutationKey() {
  return ['password_reset_confirm', '/password_reset_confirm/', 'POST'] as const
}

export function getPostPasswordResetConfirmIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.password_reset_confirm.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.password_reset_confirm.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPasswordResetConfirmIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.password_reset_confirm.index.$post>) {
      return parseResponse(client.password_reset_confirm.index.$post(args, options))
    },
  })
}

export function usePostPasswordResetConfirmIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.password_reset_confirm.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.password_reset_confirm.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPasswordResetConfirmIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPushNotificationsIndexQueryKey(
  args: InferRequestType<typeof client.push_notifications.index.$get>,
) {
  return ['push_notifications', '/push_notifications/', args] as const
}

export function getPushNotificationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.push_notifications.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.push_notifications.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.push_notifications.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPushNotificationsIndexQueryKey>
  >({
    queryKey: getPushNotificationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.push_notifications.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePushNotificationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.push_notifications.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.push_notifications.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.push_notifications.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPushNotificationsIndexQueryKey>
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
      ...getPushNotificationsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePushNotificationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.push_notifications.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.push_notifications.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.push_notifications.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPushNotificationsIndexQueryKey>
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
      ...getPushNotificationsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPushNotificationsIndexMutationKey() {
  return ['push_notifications', '/push_notifications/', 'POST'] as const
}

export function getPostPushNotificationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.push_notifications.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.push_notifications.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPushNotificationsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.push_notifications.index.$post>) {
      return parseResponse(client.push_notifications.index.$post(args, options))
    },
  })
}

export function usePostPushNotificationsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.push_notifications.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.push_notifications.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPushNotificationsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPushNotificationsIdIndexQueryKey(
  args: InferRequestType<(typeof client.push_notifications)[':id']['index']['$get']>,
) {
  return ['push_notifications', '/push_notifications/:id/', args] as const
}

export function getPushNotificationsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.push_notifications)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPushNotificationsIdIndexQueryKey>
  >({
    queryKey: getPushNotificationsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.push_notifications[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePushNotificationsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.push_notifications)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPushNotificationsIdIndexQueryKey>
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
      ...getPushNotificationsIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePushNotificationsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.push_notifications)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPushNotificationsIdIndexQueryKey>
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
      ...getPushNotificationsIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutPushNotificationsIdIndexMutationKey() {
  return ['push_notifications', '/push_notifications/:id/', 'PUT'] as const
}

export function getPutPushNotificationsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.push_notifications)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPushNotificationsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.push_notifications)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.push_notifications[':id'].index.$put(args, options))
    },
  })
}

export function usePutPushNotificationsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.push_notifications)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPushNotificationsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePushNotificationsIdIndexMutationKey() {
  return ['push_notifications', '/push_notifications/:id/', 'DELETE'] as const
}

export function getDeletePushNotificationsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.push_notifications)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePushNotificationsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.push_notifications)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.push_notifications[':id'].index.$delete(args, options))
    },
  })
}

export function useDeletePushNotificationsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.push_notifications)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePushNotificationsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchPushNotificationsIdIndexMutationKey() {
  return ['push_notifications', '/push_notifications/:id/', 'PATCH'] as const
}

export function getPatchPushNotificationsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.push_notifications)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPushNotificationsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.push_notifications)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.push_notifications[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchPushNotificationsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.push_notifications)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPushNotificationsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPushNotificationsIdResendIndexMutationKey() {
  return ['push_notifications', '/push_notifications/:id/resend/', 'POST'] as const
}

export function getPostPushNotificationsIdResendIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.push_notifications)[':id']['resend']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.push_notifications)[':id']['resend']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPushNotificationsIdResendIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.push_notifications)[':id']['resend']['index']['$post']>,
    ) {
      return parseResponse(client.push_notifications[':id'].resend.index.$post(args, options))
    },
  })
}

export function usePostPushNotificationsIdResendIndex<
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
                ReturnType<(typeof client.push_notifications)[':id']['resend']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.push_notifications)[':id']['resend']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPushNotificationsIdResendIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRecurrencesIndexQueryKey(
  args: InferRequestType<typeof client.recurrences.index.$get>,
) {
  return ['recurrences', '/recurrences/', args] as const
}

export function getRecurrencesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recurrences.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recurrences.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recurrences.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecurrencesIndexQueryKey>
  >({
    queryKey: getRecurrencesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recurrences.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecurrencesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recurrences.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recurrences.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recurrences.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecurrencesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecurrencesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecurrencesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recurrences.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recurrences.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recurrences.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecurrencesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecurrencesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRecurrencesIndexMutationKey() {
  return ['recurrences', '/recurrences/', 'POST'] as const
}

export function getPostRecurrencesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recurrences.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.recurrences.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecurrencesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recurrences.index.$post>) {
      return parseResponse(client.recurrences.index.$post(args, options))
    },
  })
}

export function usePostRecurrencesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recurrences.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.recurrences.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRecurrencesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRecurrencesIdIndexQueryKey(
  args: InferRequestType<(typeof client.recurrences)[':id']['index']['$get']>,
) {
  return ['recurrences', '/recurrences/:id/', args] as const
}

export function getRecurrencesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recurrences)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecurrencesIdIndexQueryKey>
  >({
    queryKey: getRecurrencesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recurrences[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecurrencesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recurrences)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecurrencesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecurrencesIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecurrencesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recurrences)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecurrencesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecurrencesIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutRecurrencesIdIndexMutationKey() {
  return ['recurrences', '/recurrences/:id/', 'PUT'] as const
}

export function getPutRecurrencesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recurrences)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRecurrencesIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.recurrences)[':id']['index']['$put']>) {
      return parseResponse(client.recurrences[':id'].index.$put(args, options))
    },
  })
}

export function usePutRecurrencesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.recurrences)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRecurrencesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchRecurrencesIdIndexMutationKey() {
  return ['recurrences', '/recurrences/:id/', 'PATCH'] as const
}

export function getPatchRecurrencesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recurrences)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRecurrencesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.recurrences)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.recurrences[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchRecurrencesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.recurrences)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchRecurrencesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRegisterIndexMutationKey() {
  return ['register', '/register/', 'POST'] as const
}

export function getPostRegisterIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.register.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.register.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRegisterIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.register.index.$post>) {
      return parseResponse(client.register.index.$post(args, options))
    },
  })
}

export function usePostRegisterIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.register.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.register.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRegisterIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getReportsTasksStatesCountIndexQueryKey(
  args: InferRequestType<typeof client.reports.tasks.states_count.index.$get>,
) {
  return ['reports', '/reports/tasks/states_count/', args] as const
}

export function getReportsTasksStatesCountIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.reports.tasks.states_count.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.tasks.states_count.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.reports.tasks.states_count.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsTasksStatesCountIndexQueryKey>
  >({
    queryKey: getReportsTasksStatesCountIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.tasks.states_count.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useReportsTasksStatesCountIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.reports.tasks.states_count.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.tasks.states_count.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.reports.tasks.states_count.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsTasksStatesCountIndexQueryKey>
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
      ...getReportsTasksStatesCountIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReportsTasksStatesCountIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.reports.tasks.states_count.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.tasks.states_count.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.reports.tasks.states_count.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsTasksStatesCountIndexQueryKey>
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
      ...getReportsTasksStatesCountIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getReviewsIndexQueryKey(args: InferRequestType<typeof client.reviews.index.$get>) {
  return ['reviews', '/reviews/', args] as const
}

export function getReviewsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reviews.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReviewsIndexQueryKey>
  >({
    queryKey: getReviewsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reviews.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReviewsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reviews.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReviewsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReviewsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReviewsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reviews.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReviewsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReviewsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostReviewsIndexMutationKey() {
  return ['reviews', '/reviews/', 'POST'] as const
}

export function getPostReviewsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.reviews.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReviewsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reviews.index.$post>) {
      return parseResponse(client.reviews.index.$post(args, options))
    },
  })
}

export function usePostReviewsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.reviews.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReviewsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getReviewsIdIndexQueryKey(
  args: InferRequestType<(typeof client.reviews)[':id']['index']['$get']>,
) {
  return ['reviews', '/reviews/:id/', args] as const
}

export function getReviewsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reviews)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewsIdIndexQueryKey>
  >({
    queryKey: getReviewsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reviews[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReviewsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reviews)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reviews)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReviewsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReviewsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReviewsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reviews)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reviews)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReviewsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReviewsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRouteOptimizationsIndexQueryKey(
  args: InferRequestType<typeof client.route_optimizations.index.$get>,
) {
  return ['route_optimizations', '/route_optimizations/', args] as const
}

export function getRouteOptimizationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.route_optimizations.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.route_optimizations.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.route_optimizations.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRouteOptimizationsIndexQueryKey>
  >({
    queryKey: getRouteOptimizationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.route_optimizations.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRouteOptimizationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.route_optimizations.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.route_optimizations.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.route_optimizations.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRouteOptimizationsIndexQueryKey>
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
      ...getRouteOptimizationsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRouteOptimizationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.route_optimizations.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.route_optimizations.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.route_optimizations.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRouteOptimizationsIndexQueryKey>
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
      ...getRouteOptimizationsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRouteOptimizationsIndexMutationKey() {
  return ['route_optimizations', '/route_optimizations/', 'POST'] as const
}

export function getPostRouteOptimizationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.route_optimizations.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.route_optimizations.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRouteOptimizationsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.route_optimizations.index.$post>) {
      return parseResponse(client.route_optimizations.index.$post(args, options))
    },
  })
}

export function usePostRouteOptimizationsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.route_optimizations.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.route_optimizations.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRouteOptimizationsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRouteOptimizationsIdIndexQueryKey(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['index']['$get']>,
) {
  return ['route_optimizations', '/route_optimizations/:id/', args] as const
}

export function getRouteOptimizationsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.route_optimizations)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.route_optimizations)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRouteOptimizationsIdIndexQueryKey>
  >({
    queryKey: getRouteOptimizationsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.route_optimizations[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRouteOptimizationsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.route_optimizations)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.route_optimizations)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRouteOptimizationsIdIndexQueryKey>
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
      ...getRouteOptimizationsIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRouteOptimizationsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.route_optimizations)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.route_optimizations)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRouteOptimizationsIdIndexQueryKey>
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
      ...getRouteOptimizationsIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRouteOptimizationsIdCommitIndexMutationKey() {
  return ['route_optimizations', '/route_optimizations/:id/commit/', 'POST'] as const
}

export function getPostRouteOptimizationsIdCommitIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.route_optimizations)[':id']['commit']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.route_optimizations)[':id']['commit']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRouteOptimizationsIdCommitIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.route_optimizations)[':id']['commit']['index']['$post']
      >,
    ) {
      return parseResponse(client.route_optimizations[':id'].commit.index.$post(args, options))
    },
  })
}

export function usePostRouteOptimizationsIdCommitIndex<
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
                ReturnType<(typeof client.route_optimizations)[':id']['commit']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.route_optimizations)[':id']['commit']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRouteOptimizationsIdCommitIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRouteOptimizationsIdResultsIndexQueryKey(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>,
) {
  return ['route_optimizations', '/route_optimizations/:id/results/', args] as const
}

export function getRouteOptimizationsIdResultsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRouteOptimizationsIdResultsIndexQueryKey>
  >({
    queryKey: getRouteOptimizationsIdResultsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.route_optimizations[':id'].results.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRouteOptimizationsIdResultsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRouteOptimizationsIdResultsIndexQueryKey>
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
      ...getRouteOptimizationsIdResultsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRouteOptimizationsIdResultsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRouteOptimizationsIdResultsIndexQueryKey>
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
      ...getRouteOptimizationsIdResultsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRouteOptimizationsIdRoutesIndexQueryKey(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>,
) {
  return ['route_optimizations', '/route_optimizations/:id/routes/', args] as const
}

export function getRouteOptimizationsIdRoutesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRouteOptimizationsIdRoutesIndexQueryKey>
  >({
    queryKey: getRouteOptimizationsIdRoutesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.route_optimizations[':id'].routes.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRouteOptimizationsIdRoutesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRouteOptimizationsIdRoutesIndexQueryKey>
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
      ...getRouteOptimizationsIdRoutesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRouteOptimizationsIdRoutesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRouteOptimizationsIdRoutesIndexQueryKey>
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
      ...getRouteOptimizationsIdRoutesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRouteOptimizationsIdRoutesIndexMutationKey() {
  return ['route_optimizations', '/route_optimizations/:id/routes/', 'POST'] as const
}

export function getPostRouteOptimizationsIdRoutesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.route_optimizations)[':id']['routes']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.route_optimizations)[':id']['routes']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRouteOptimizationsIdRoutesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.route_optimizations)[':id']['routes']['index']['$post']
      >,
    ) {
      return parseResponse(client.route_optimizations[':id'].routes.index.$post(args, options))
    },
  })
}

export function usePostRouteOptimizationsIdRoutesIndex<
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
                ReturnType<(typeof client.route_optimizations)[':id']['routes']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.route_optimizations)[':id']['routes']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRouteOptimizationsIdRoutesIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRouteOptimizationsIdScheduleIndexMutationKey() {
  return ['route_optimizations', '/route_optimizations/:id/schedule/', 'POST'] as const
}

export function getPostRouteOptimizationsIdScheduleIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.route_optimizations)[':id']['schedule']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.route_optimizations)[':id']['schedule']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRouteOptimizationsIdScheduleIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.route_optimizations)[':id']['schedule']['index']['$post']
      >,
    ) {
      return parseResponse(client.route_optimizations[':id'].schedule.index.$post(args, options))
    },
  })
}

export function usePostRouteOptimizationsIdScheduleIndex<
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
                ReturnType<(typeof client.route_optimizations)[':id']['schedule']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.route_optimizations)[':id']['schedule']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRouteOptimizationsIdScheduleIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRoutesIndexQueryKey(args: InferRequestType<typeof client.routes.index.$get>) {
  return ['routes', '/routes/', args] as const
}

export function getRoutesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.routes.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRoutesIndexQueryKey>
  >({
    queryKey: getRoutesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routes.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRoutesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.routes.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRoutesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRoutesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRoutesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.routes.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRoutesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRoutesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRoutesIndexMutationKey() {
  return ['routes', '/routes/', 'POST'] as const
}

export function getPostRoutesIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.routes.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRoutesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.routes.index.$post>) {
      return parseResponse(client.routes.index.$post(args, options))
    },
  })
}

export function usePostRoutesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.routes.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRoutesIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRoutesIdIndexQueryKey(
  args: InferRequestType<(typeof client.routes)[':id']['index']['$get']>,
) {
  return ['routes', '/routes/:id/', args] as const
}

export function getRoutesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.routes)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoutesIdIndexQueryKey>
  >({
    queryKey: getRoutesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routes[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRoutesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.routes)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.routes)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoutesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRoutesIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRoutesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.routes)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.routes)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoutesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRoutesIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutRoutesIdIndexMutationKey() {
  return ['routes', '/routes/:id/', 'PUT'] as const
}

export function getPutRoutesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.routes)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRoutesIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.routes)[':id']['index']['$put']>) {
      return parseResponse(client.routes[':id'].index.$put(args, options))
    },
  })
}

export function usePutRoutesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.routes)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.routes)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRoutesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRoutesIdIndexMutationKey() {
  return ['routes', '/routes/:id/', 'DELETE'] as const
}

export function getDeleteRoutesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routes)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.routes)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRoutesIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.routes)[':id']['index']['$delete']>) {
      return parseResponse(client.routes[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteRoutesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.routes)[':id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.routes)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRoutesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchRoutesIdIndexMutationKey() {
  return ['routes', '/routes/:id/', 'PATCH'] as const
}

export function getPatchRoutesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.routes)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRoutesIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.routes)[':id']['index']['$patch']>) {
      return parseResponse(client.routes[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchRoutesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.routes)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.routes)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchRoutesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getScenesDashboardIndexQueryKey(
  args: InferRequestType<typeof client.scenes.dashboard.index.$get>,
) {
  return ['scenes', '/scenes/dashboard/', args] as const
}

export function getScenesDashboardIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenes.dashboard.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenes.dashboard.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.scenes.dashboard.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScenesDashboardIndexQueryKey>
  >({
    queryKey: getScenesDashboardIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scenes.dashboard.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useScenesDashboardIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenes.dashboard.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenes.dashboard.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.scenes.dashboard.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScenesDashboardIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getScenesDashboardIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseScenesDashboardIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenes.dashboard.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenes.dashboard.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.scenes.dashboard.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScenesDashboardIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getScenesDashboardIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getScenesOrderListIndexQueryKey(
  args: InferRequestType<typeof client.scenes.order_list.index.$get>,
) {
  return ['scenes', '/scenes/order_list/', args] as const
}

export function getScenesOrderListIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.scenes.order_list.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenes.order_list.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.scenes.order_list.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScenesOrderListIndexQueryKey>
  >({
    queryKey: getScenesOrderListIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scenes.order_list.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useScenesOrderListIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.scenes.order_list.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenes.order_list.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.scenes.order_list.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScenesOrderListIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getScenesOrderListIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseScenesOrderListIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.scenes.order_list.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenes.order_list.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.scenes.order_list.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScenesOrderListIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getScenesOrderListIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getScenesRecurrenceListIndexQueryKey(
  args: InferRequestType<typeof client.scenes.recurrence_list.index.$get>,
) {
  return ['scenes', '/scenes/recurrence_list/', args] as const
}

export function getScenesRecurrenceListIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.scenes.recurrence_list.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenes.recurrence_list.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.scenes.recurrence_list.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScenesRecurrenceListIndexQueryKey>
  >({
    queryKey: getScenesRecurrenceListIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scenes.recurrence_list.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useScenesRecurrenceListIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.scenes.recurrence_list.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenes.recurrence_list.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.scenes.recurrence_list.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScenesRecurrenceListIndexQueryKey>
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
      ...getScenesRecurrenceListIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseScenesRecurrenceListIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.scenes.recurrence_list.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenes.recurrence_list.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.scenes.recurrence_list.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScenesRecurrenceListIndexQueryKey>
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
      ...getScenesRecurrenceListIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getScenesTaskListIndexQueryKey(
  args: InferRequestType<typeof client.scenes.task_list.index.$get>,
) {
  return ['scenes', '/scenes/task_list/', args] as const
}

export function getScenesTaskListIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenes.task_list.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenes.task_list.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.scenes.task_list.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScenesTaskListIndexQueryKey>
  >({
    queryKey: getScenesTaskListIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scenes.task_list.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useScenesTaskListIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenes.task_list.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenes.task_list.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.scenes.task_list.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScenesTaskListIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getScenesTaskListIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseScenesTaskListIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenes.task_list.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenes.task_list.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.scenes.task_list.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScenesTaskListIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getScenesTaskListIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSignaturesIndexQueryKey(
  args: InferRequestType<typeof client.signatures.index.$get>,
) {
  return ['signatures', '/signatures/', args] as const
}

export function getSignaturesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signatures.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.signatures.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signatures.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSignaturesIndexQueryKey>
  >({
    queryKey: getSignaturesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.signatures.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSignaturesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signatures.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.signatures.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signatures.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSignaturesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSignaturesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSignaturesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signatures.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.signatures.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signatures.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSignaturesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSignaturesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSignaturesIndexMutationKey() {
  return ['signatures', '/signatures/', 'POST'] as const
}

export function getPostSignaturesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signatures.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.signatures.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignaturesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.signatures.index.$post>) {
      return parseResponse(client.signatures.index.$post(args, options))
    },
  })
}

export function usePostSignaturesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.signatures.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.signatures.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSignaturesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSignaturesBatchDeleteIndexMutationKey() {
  return ['signatures', '/signatures/batch_delete/', 'POST'] as const
}

export function getPostSignaturesBatchDeleteIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.signatures.batch_delete.index.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.signatures.batch_delete.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignaturesBatchDeleteIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.signatures.batch_delete.index.$post>) {
      return parseResponse(client.signatures.batch_delete.index.$post(args, options))
    },
  })
}

export function usePostSignaturesBatchDeleteIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.signatures.batch_delete.index.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.signatures.batch_delete.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSignaturesBatchDeleteIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSignaturesIdIndexQueryKey(
  args: InferRequestType<(typeof client.signatures)[':id']['index']['$get']>,
) {
  return ['signatures', '/signatures/:id/', args] as const
}

export function getSignaturesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.signatures)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.signatures)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.signatures)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSignaturesIdIndexQueryKey>
  >({
    queryKey: getSignaturesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.signatures[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSignaturesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.signatures)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.signatures)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.signatures)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSignaturesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSignaturesIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSignaturesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.signatures)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.signatures)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.signatures)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSignaturesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSignaturesIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteSignaturesIdIndexMutationKey() {
  return ['signatures', '/signatures/:id/', 'DELETE'] as const
}

export function getDeleteSignaturesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.signatures)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.signatures)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSignaturesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.signatures)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.signatures[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteSignaturesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.signatures)[':id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.signatures)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSignaturesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSmsIndexQueryKey(args: InferRequestType<typeof client.sms.index.$get>) {
  return ['sms', '/sms/', args] as const
}

export function getSmsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sms.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSmsIndexQueryKey>
  >({
    queryKey: getSmsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sms.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSmsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sms.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSmsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSmsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSmsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sms.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSmsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSmsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSmsIndexMutationKey() {
  return ['sms', '/sms/', 'POST'] as const
}

export function getPostSmsIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.sms.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sms.index.$post>) {
      return parseResponse(client.sms.index.$post(args, options))
    },
  })
}

export function usePostSmsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sms.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmsIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSmsIdIndexQueryKey(
  args: InferRequestType<(typeof client.sms)[':id']['index']['$get']>,
) {
  return ['sms', '/sms/:id/', args] as const
}

export function getSmsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sms)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmsIdIndexQueryKey>
  >({
    queryKey: getSmsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sms[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSmsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sms)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSmsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSmsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sms)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSmsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutSmsIdIndexMutationKey() {
  return ['sms', '/sms/:id/', 'PUT'] as const
}

export function getPutSmsIdIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sms)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSmsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sms)[':id']['index']['$put']>) {
      return parseResponse(client.sms[':id'].index.$put(args, options))
    },
  })
}

export function usePutSmsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sms)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSmsIdIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSmsIdIndexMutationKey() {
  return ['sms', '/sms/:id/', 'DELETE'] as const
}

export function getDeleteSmsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sms)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSmsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sms)[':id']['index']['$delete']>) {
      return parseResponse(client.sms[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteSmsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sms)[':id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.sms)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSmsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchSmsIdIndexMutationKey() {
  return ['sms', '/sms/:id/', 'PATCH'] as const
}

export function getPatchSmsIdIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sms)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSmsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sms)[':id']['index']['$patch']>) {
      return parseResponse(client.sms[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchSmsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sms)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSmsIdIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSmsIdResendIndexMutationKey() {
  return ['sms', '/sms/:id/resend/', 'POST'] as const
}

export function getPostSmsIdResendIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)[':id']['resend']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sms)[':id']['resend']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsIdResendIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sms)[':id']['resend']['index']['$post']>,
    ) {
      return parseResponse(client.sms[':id'].resend.index.$post(args, options))
    },
  })
}

export function usePostSmsIdResendIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sms)[':id']['resend']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sms)[':id']['resend']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmsIdResendIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTaskAddressFeaturesIndexQueryKey(
  args: InferRequestType<typeof client.task_address_features.index.$get>,
) {
  return ['task_address_features', '/task_address_features/', args] as const
}

export function getTaskAddressFeaturesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.task_address_features.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_address_features.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.task_address_features.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskAddressFeaturesIndexQueryKey>
  >({
    queryKey: getTaskAddressFeaturesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_address_features.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTaskAddressFeaturesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.task_address_features.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_address_features.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.task_address_features.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskAddressFeaturesIndexQueryKey>
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
      ...getTaskAddressFeaturesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTaskAddressFeaturesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.task_address_features.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_address_features.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.task_address_features.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskAddressFeaturesIndexQueryKey>
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
      ...getTaskAddressFeaturesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTaskAddressFeaturesIdIndexQueryKey(
  args: InferRequestType<(typeof client.task_address_features)[':id']['index']['$get']>,
) {
  return ['task_address_features', '/task_address_features/:id/', args] as const
}

export function getTaskAddressFeaturesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_address_features)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_address_features)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_address_features)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskAddressFeaturesIdIndexQueryKey>
  >({
    queryKey: getTaskAddressFeaturesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_address_features[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTaskAddressFeaturesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_address_features)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_address_features)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_address_features)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskAddressFeaturesIdIndexQueryKey>
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
      ...getTaskAddressFeaturesIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTaskAddressFeaturesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_address_features)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_address_features)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_address_features)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskAddressFeaturesIdIndexQueryKey>
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
      ...getTaskAddressFeaturesIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTaskCommandsIndexQueryKey(
  args: InferRequestType<typeof client.task_commands.index.$get>,
) {
  return ['task_commands', '/task_commands/', args] as const
}

export function getTaskCommandsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_commands.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.task_commands.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_commands.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaskCommandsIndexQueryKey>
  >({
    queryKey: getTaskCommandsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_commands.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTaskCommandsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_commands.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_commands.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_commands.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskCommandsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTaskCommandsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTaskCommandsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_commands.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_commands.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_commands.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskCommandsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTaskCommandsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTaskCommandsIndexMutationKey() {
  return ['task_commands', '/task_commands/', 'POST'] as const
}

export function getPostTaskCommandsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_commands.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.task_commands.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTaskCommandsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.task_commands.index.$post>) {
      return parseResponse(client.task_commands.index.$post(args, options))
    },
  })
}

export function usePostTaskCommandsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_commands.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.task_commands.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTaskCommandsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTaskCommandsIdIndexQueryKey(
  args: InferRequestType<(typeof client.task_commands)[':id']['index']['$get']>,
) {
  return ['task_commands', '/task_commands/:id/', args] as const
}

export function getTaskCommandsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_commands)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_commands)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_commands)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskCommandsIdIndexQueryKey>
  >({
    queryKey: getTaskCommandsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_commands[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTaskCommandsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_commands)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_commands)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_commands)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskCommandsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTaskCommandsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTaskCommandsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_commands)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_commands)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_commands)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskCommandsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTaskCommandsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTaskCommandsIdIndexMutationKey() {
  return ['task_commands', '/task_commands/:id/', 'PUT'] as const
}

export function getPutTaskCommandsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_commands)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.task_commands)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTaskCommandsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.task_commands)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.task_commands[':id'].index.$put(args, options))
    },
  })
}

export function usePutTaskCommandsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_commands)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.task_commands)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTaskCommandsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTaskEventTracksIndexQueryKey(
  args: InferRequestType<typeof client.task_event_tracks.index.$get>,
) {
  return ['task_event_tracks', '/task_event_tracks/', args] as const
}

export function getTaskEventTracksIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.task_event_tracks.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_event_tracks.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.task_event_tracks.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskEventTracksIndexQueryKey>
  >({
    queryKey: getTaskEventTracksIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_event_tracks.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTaskEventTracksIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.task_event_tracks.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_event_tracks.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_event_tracks.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskEventTracksIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTaskEventTracksIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTaskEventTracksIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.task_event_tracks.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_event_tracks.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_event_tracks.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskEventTracksIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTaskEventTracksIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTaskEventTracksIdIndexQueryKey(
  args: InferRequestType<(typeof client.task_event_tracks)[':id']['index']['$get']>,
) {
  return ['task_event_tracks', '/task_event_tracks/:id/', args] as const
}

export function getTaskEventTracksIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_event_tracks)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_event_tracks)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_event_tracks)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskEventTracksIdIndexQueryKey>
  >({
    queryKey: getTaskEventTracksIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_event_tracks[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTaskEventTracksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_event_tracks)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_event_tracks)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_event_tracks)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskEventTracksIdIndexQueryKey>
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
      ...getTaskEventTracksIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTaskEventTracksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_event_tracks)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_event_tracks)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_event_tracks)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskEventTracksIdIndexQueryKey>
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
      ...getTaskEventTracksIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTaskEventsIndexQueryKey(
  args: InferRequestType<typeof client.task_events.index.$get>,
) {
  return ['task_events', '/task_events/', args] as const
}

export function getTaskEventsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_events.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.task_events.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_events.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaskEventsIndexQueryKey>
  >({
    queryKey: getTaskEventsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_events.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTaskEventsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_events.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_events.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_events.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskEventsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTaskEventsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTaskEventsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_events.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_events.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_events.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskEventsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTaskEventsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTaskEventsIdIndexQueryKey(
  args: InferRequestType<(typeof client.task_events)[':id']['index']['$get']>,
) {
  return ['task_events', '/task_events/:id/', args] as const
}

export function getTaskEventsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.task_events)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_events)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_events)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskEventsIdIndexQueryKey>
  >({
    queryKey: getTaskEventsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_events[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTaskEventsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.task_events)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_events)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_events)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskEventsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTaskEventsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTaskEventsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.task_events)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_events)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_events)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskEventsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTaskEventsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTaskExportsIndexQueryKey(
  args: InferRequestType<typeof client.task_exports.index.$get>,
) {
  return ['task_exports', '/task_exports/', args] as const
}

export function getTaskExportsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_exports.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.task_exports.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_exports.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaskExportsIndexQueryKey>
  >({
    queryKey: getTaskExportsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_exports.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTaskExportsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_exports.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_exports.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_exports.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskExportsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTaskExportsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTaskExportsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_exports.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_exports.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_exports.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskExportsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTaskExportsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTaskFormsIndexQueryKey(
  args: InferRequestType<typeof client.task_forms.index.$get>,
) {
  return ['task_forms', '/task_forms/', args] as const
}

export function getTaskFormsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_forms.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.task_forms.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_forms.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaskFormsIndexQueryKey>
  >({
    queryKey: getTaskFormsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_forms.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTaskFormsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_forms.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_forms.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_forms.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTaskFormsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTaskFormsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTaskFormsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_forms.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_forms.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_forms.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTaskFormsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTaskFormsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTaskFormsIndexMutationKey() {
  return ['task_forms', '/task_forms/', 'POST'] as const
}

export function getPostTaskFormsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_forms.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.task_forms.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTaskFormsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.task_forms.index.$post>) {
      return parseResponse(client.task_forms.index.$post(args, options))
    },
  })
}

export function usePostTaskFormsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_forms.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.task_forms.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTaskFormsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTaskFormsIdIndexQueryKey(
  args: InferRequestType<(typeof client.task_forms)[':id']['index']['$get']>,
) {
  return ['task_forms', '/task_forms/:id/', args] as const
}

export function getTaskFormsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_forms)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskFormsIdIndexQueryKey>
  >({
    queryKey: getTaskFormsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_forms[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTaskFormsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_forms)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskFormsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTaskFormsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTaskFormsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_forms)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskFormsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTaskFormsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTaskFormsIdIndexMutationKey() {
  return ['task_forms', '/task_forms/:id/', 'PUT'] as const
}

export function getPutTaskFormsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.task_forms)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTaskFormsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.task_forms)[':id']['index']['$put']>) {
      return parseResponse(client.task_forms[':id'].index.$put(args, options))
    },
  })
}

export function usePutTaskFormsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.task_forms)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTaskFormsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTaskFormsIdIndexMutationKey() {
  return ['task_forms', '/task_forms/:id/', 'DELETE'] as const
}

export function getDeleteTaskFormsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.task_forms)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTaskFormsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.task_forms)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.task_forms[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteTaskFormsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.task_forms)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTaskFormsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchTaskFormsIdIndexMutationKey() {
  return ['task_forms', '/task_forms/:id/', 'PATCH'] as const
}

export function getPatchTaskFormsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.task_forms)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTaskFormsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.task_forms)[':id']['index']['$patch']>) {
      return parseResponse(client.task_forms[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchTaskFormsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.task_forms)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTaskFormsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTaskImportIndexQueryKey(
  args: InferRequestType<typeof client.task_import.index.$get>,
) {
  return ['task_import', '/task_import/', args] as const
}

export function getTaskImportIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_import.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.task_import.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_import.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaskImportIndexQueryKey>
  >({
    queryKey: getTaskImportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_import.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTaskImportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_import.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_import.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_import.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskImportIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTaskImportIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTaskImportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_import.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_import.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_import.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskImportIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTaskImportIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTaskImportIndexMutationKey() {
  return ['task_import', '/task_import/', 'POST'] as const
}

export function getPostTaskImportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_import.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.task_import.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTaskImportIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.task_import.index.$post>) {
      return parseResponse(client.task_import.index.$post(args, options))
    },
  })
}

export function usePostTaskImportIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_import.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.task_import.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTaskImportIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTaskImportIdIndexQueryKey(
  args: InferRequestType<(typeof client.task_import)[':id']['index']['$get']>,
) {
  return ['task_import', '/task_import/:id/', args] as const
}

export function getTaskImportIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.task_import)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_import)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_import)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskImportIdIndexQueryKey>
  >({
    queryKey: getTaskImportIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_import[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTaskImportIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.task_import)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_import)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_import)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskImportIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTaskImportIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTaskImportIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.task_import)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_import)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_import)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskImportIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTaskImportIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTaskImportMappingIndexQueryKey(
  args: InferRequestType<typeof client.task_import_mapping.index.$get>,
) {
  return ['task_import_mapping', '/task_import_mapping/', args] as const
}

export function getTaskImportMappingIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.task_import_mapping.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_import_mapping.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.task_import_mapping.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskImportMappingIndexQueryKey>
  >({
    queryKey: getTaskImportMappingIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_import_mapping.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTaskImportMappingIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.task_import_mapping.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_import_mapping.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_import_mapping.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskImportMappingIndexQueryKey>
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
      ...getTaskImportMappingIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTaskImportMappingIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.task_import_mapping.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_import_mapping.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_import_mapping.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskImportMappingIndexQueryKey>
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
      ...getTaskImportMappingIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTaskImportMappingIndexMutationKey() {
  return ['task_import_mapping', '/task_import_mapping/', 'POST'] as const
}

export function getPostTaskImportMappingIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.task_import_mapping.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.task_import_mapping.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTaskImportMappingIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.task_import_mapping.index.$post>) {
      return parseResponse(client.task_import_mapping.index.$post(args, options))
    },
  })
}

export function usePostTaskImportMappingIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_import_mapping.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.task_import_mapping.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTaskImportMappingIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTaskImportMappingIdIndexQueryKey(
  args: InferRequestType<(typeof client.task_import_mapping)[':id']['index']['$get']>,
) {
  return ['task_import_mapping', '/task_import_mapping/:id/', args] as const
}

export function getTaskImportMappingIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_import_mapping)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_import_mapping)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_import_mapping)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskImportMappingIdIndexQueryKey>
  >({
    queryKey: getTaskImportMappingIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_import_mapping[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTaskImportMappingIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_import_mapping)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_import_mapping)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_import_mapping)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskImportMappingIdIndexQueryKey>
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
      ...getTaskImportMappingIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTaskImportMappingIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_import_mapping)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_import_mapping)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_import_mapping)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskImportMappingIdIndexQueryKey>
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
      ...getTaskImportMappingIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTaskMetadatasIndexQueryKey(
  args: InferRequestType<typeof client.task_metadatas.index.$get>,
) {
  return ['task_metadatas', '/task_metadatas/', args] as const
}

export function getTaskMetadatasIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_metadatas.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.task_metadatas.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_metadatas.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaskMetadatasIndexQueryKey>
  >({
    queryKey: getTaskMetadatasIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_metadatas.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTaskMetadatasIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_metadatas.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_metadatas.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_metadatas.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskMetadatasIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTaskMetadatasIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTaskMetadatasIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_metadatas.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.task_metadatas.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.task_metadatas.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskMetadatasIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTaskMetadatasIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTaskMetadatasIdIndexQueryKey(
  args: InferRequestType<(typeof client.task_metadatas)[':id']['index']['$get']>,
) {
  return ['task_metadatas', '/task_metadatas/:id/', args] as const
}

export function getTaskMetadatasIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_metadatas)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_metadatas)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_metadatas)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskMetadatasIdIndexQueryKey>
  >({
    queryKey: getTaskMetadatasIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.task_metadatas[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTaskMetadatasIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_metadatas)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_metadatas)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_metadatas)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskMetadatasIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTaskMetadatasIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTaskMetadatasIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.task_metadatas)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.task_metadatas)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.task_metadatas)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskMetadatasIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTaskMetadatasIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTasksIndexQueryKey(args: InferRequestType<typeof client.tasks.index.$get>) {
  return ['tasks', '/tasks/', args] as const
}

export function getTasksIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tasks.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTasksIndexQueryKey>
  >({
    queryKey: getTasksIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTasksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tasks.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTasksIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTasksIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTasksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tasks.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTasksIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTasksIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTasksIndexMutationKey() {
  return ['tasks', '/tasks/', 'POST'] as const
}

export function getPostTasksIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.tasks.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tasks.index.$post>) {
      return parseResponse(client.tasks.index.$post(args, options))
    },
  })
}

export function usePostTasksIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tasks.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTasksReorderIndexMutationKey() {
  return ['tasks', '/tasks/reorder/', 'POST'] as const
}

export function getPostTasksReorderIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.reorder.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tasks.reorder.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksReorderIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tasks.reorder.index.$post>) {
      return parseResponse(client.tasks.reorder.index.$post(args, options))
    },
  })
}

export function usePostTasksReorderIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tasks.reorder.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tasks.reorder.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksReorderIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTasksRepositionIndexMutationKey() {
  return ['tasks', '/tasks/reposition/', 'POST'] as const
}

export function getPostTasksRepositionIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tasks.reposition.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.tasks.reposition.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksRepositionIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tasks.reposition.index.$post>) {
      return parseResponse(client.tasks.reposition.index.$post(args, options))
    },
  })
}

export function usePostTasksRepositionIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tasks.reposition.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tasks.reposition.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksRepositionIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTasksIdIndexQueryKey(
  args: InferRequestType<(typeof client.tasks)[':id']['index']['$get']>,
) {
  return ['tasks', '/tasks/:id/', args] as const
}

export function getTasksIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksIdIndexQueryKey>
  >({
    queryKey: getTasksIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTasksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTasksIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTasksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTasksIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTasksIdIndexMutationKey() {
  return ['tasks', '/tasks/:id/', 'PUT'] as const
}

export function getPutTasksIdIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTasksIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':id']['index']['$put']>) {
      return parseResponse(client.tasks[':id'].index.$put(args, options))
    },
  })
}

export function usePutTasksIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTasksIdIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchTasksIdIndexMutationKey() {
  return ['tasks', '/tasks/:id/', 'PATCH'] as const
}

export function getPatchTasksIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTasksIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':id']['index']['$patch']>) {
      return parseResponse(client.tasks[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchTasksIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTasksIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTasksIdAcceptIndexMutationKey() {
  return ['tasks', '/tasks/:id/accept/', 'POST'] as const
}

export function getPostTasksIdAcceptIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['accept']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':id']['accept']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksIdAcceptIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':id']['accept']['index']['$post']>,
    ) {
      return parseResponse(client.tasks[':id'].accept.index.$post(args, options))
    },
  })
}

export function usePostTasksIdAcceptIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':id']['accept']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':id']['accept']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksIdAcceptIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTasksIdAccountChangeIndexMutationKey() {
  return ['tasks', '/tasks/:id/account_change/', 'POST'] as const
}

export function getPostTasksIdAccountChangeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['account_change']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':id']['account_change']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksIdAccountChangeIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':id']['account_change']['index']['$post']>,
    ) {
      return parseResponse(client.tasks[':id'].account_change.index.$post(args, options))
    },
  })
}

export function usePostTasksIdAccountChangeIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':id']['account_change']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':id']['account_change']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksIdAccountChangeIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTasksIdActivateIndexMutationKey() {
  return ['tasks', '/tasks/:id/activate/', 'POST'] as const
}

export function getPostTasksIdActivateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['activate']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':id']['activate']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksIdActivateIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':id']['activate']['index']['$post']>,
    ) {
      return parseResponse(client.tasks[':id'].activate.index.$post(args, options))
    },
  })
}

export function usePostTasksIdActivateIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':id']['activate']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':id']['activate']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksIdActivateIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTasksIdAssignIndexMutationKey() {
  return ['tasks', '/tasks/:id/assign/', 'POST'] as const
}

export function getPostTasksIdAssignIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['assign']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':id']['assign']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksIdAssignIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':id']['assign']['index']['$post']>,
    ) {
      return parseResponse(client.tasks[':id'].assign.index.$post(args, options))
    },
  })
}

export function usePostTasksIdAssignIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':id']['assign']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':id']['assign']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksIdAssignIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTasksIdCancelIndexMutationKey() {
  return ['tasks', '/tasks/:id/cancel/', 'POST'] as const
}

export function getPostTasksIdCancelIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['cancel']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':id']['cancel']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksIdCancelIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':id']['cancel']['index']['$post']>,
    ) {
      return parseResponse(client.tasks[':id'].cancel.index.$post(args, options))
    },
  })
}

export function usePostTasksIdCancelIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':id']['cancel']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':id']['cancel']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksIdCancelIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTasksIdCompleteIndexMutationKey() {
  return ['tasks', '/tasks/:id/complete/', 'POST'] as const
}

export function getPostTasksIdCompleteIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['complete']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':id']['complete']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksIdCompleteIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':id']['complete']['index']['$post']>,
    ) {
      return parseResponse(client.tasks[':id'].complete.index.$post(args, options))
    },
  })
}

export function usePostTasksIdCompleteIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':id']['complete']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':id']['complete']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksIdCompleteIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTasksIdDocumentsIndexQueryKey(
  args: InferRequestType<(typeof client.tasks)[':id']['documents']['index']['$get']>,
) {
  return ['tasks', '/tasks/:id/documents/', args] as const
}

export function getTasksIdDocumentsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':id']['documents']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':id']['documents']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['documents']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksIdDocumentsIndexQueryKey>
  >({
    queryKey: getTasksIdDocumentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':id'].documents.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTasksIdDocumentsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':id']['documents']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':id']['documents']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':id']['documents']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksIdDocumentsIndexQueryKey>
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
      ...getTasksIdDocumentsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTasksIdDocumentsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':id']['documents']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':id']['documents']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':id']['documents']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksIdDocumentsIndexQueryKey>
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
      ...getTasksIdDocumentsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTasksIdEventsIndexQueryKey(
  args: InferRequestType<(typeof client.tasks)[':id']['events']['index']['$get']>,
) {
  return ['tasks', '/tasks/:id/events/', args] as const
}

export function getTasksIdEventsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':id']['events']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':id']['events']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['events']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksIdEventsIndexQueryKey>
  >({
    queryKey: getTasksIdEventsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':id'].events.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTasksIdEventsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':id']['events']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':id']['events']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':id']['events']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksIdEventsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTasksIdEventsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTasksIdEventsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':id']['events']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':id']['events']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':id']['events']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksIdEventsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTasksIdEventsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTasksIdFailIndexMutationKey() {
  return ['tasks', '/tasks/:id/fail/', 'POST'] as const
}

export function getPostTasksIdFailIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['fail']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':id']['fail']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksIdFailIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':id']['fail']['index']['$post']>,
    ) {
      return parseResponse(client.tasks[':id'].fail.index.$post(args, options))
    },
  })
}

export function usePostTasksIdFailIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':id']['fail']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':id']['fail']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksIdFailIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTasksIdRejectIndexMutationKey() {
  return ['tasks', '/tasks/:id/reject/', 'POST'] as const
}

export function getPostTasksIdRejectIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['reject']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':id']['reject']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksIdRejectIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':id']['reject']['index']['$post']>,
    ) {
      return parseResponse(client.tasks[':id'].reject.index.$post(args, options))
    },
  })
}

export function usePostTasksIdRejectIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':id']['reject']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':id']['reject']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksIdRejectIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTasksIdSignaturesIndexQueryKey(
  args: InferRequestType<(typeof client.tasks)[':id']['signatures']['index']['$get']>,
) {
  return ['tasks', '/tasks/:id/signatures/', args] as const
}

export function getTasksIdSignaturesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':id']['signatures']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':id']['signatures']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['signatures']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksIdSignaturesIndexQueryKey>
  >({
    queryKey: getTasksIdSignaturesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':id'].signatures.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTasksIdSignaturesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':id']['signatures']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':id']['signatures']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':id']['signatures']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksIdSignaturesIndexQueryKey>
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
      ...getTasksIdSignaturesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTasksIdSignaturesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':id']['signatures']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':id']['signatures']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':id']['signatures']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksIdSignaturesIndexQueryKey>
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
      ...getTasksIdSignaturesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTasksIdTransitIndexMutationKey() {
  return ['tasks', '/tasks/:id/transit/', 'POST'] as const
}

export function getPostTasksIdTransitIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['transit']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':id']['transit']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksIdTransitIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':id']['transit']['index']['$post']>,
    ) {
      return parseResponse(client.tasks[':id'].transit.index.$post(args, options))
    },
  })
}

export function usePostTasksIdTransitIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':id']['transit']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':id']['transit']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksIdTransitIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTasksIdUnacceptIndexMutationKey() {
  return ['tasks', '/tasks/:id/unaccept/', 'POST'] as const
}

export function getPostTasksIdUnacceptIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['unaccept']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':id']['unaccept']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksIdUnacceptIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':id']['unaccept']['index']['$post']>,
    ) {
      return parseResponse(client.tasks[':id'].unaccept.index.$post(args, options))
    },
  })
}

export function usePostTasksIdUnacceptIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':id']['unaccept']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':id']['unaccept']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksIdUnacceptIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTasksIdUnassignIndexMutationKey() {
  return ['tasks', '/tasks/:id/unassign/', 'POST'] as const
}

export function getPostTasksIdUnassignIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['unassign']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':id']['unassign']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksIdUnassignIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':id']['unassign']['index']['$post']>,
    ) {
      return parseResponse(client.tasks[':id'].unassign.index.$post(args, options))
    },
  })
}

export function usePostTasksIdUnassignIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':id']['unassign']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':id']['unassign']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksIdUnassignIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTimeLocationFeaturesIndexQueryKey(
  args: InferRequestType<typeof client.time_location_features.index.$get>,
) {
  return ['time_location_features', '/time_location_features/', args] as const
}

export function getTimeLocationFeaturesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.time_location_features.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.time_location_features.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.time_location_features.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimeLocationFeaturesIndexQueryKey>
  >({
    queryKey: getTimeLocationFeaturesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.time_location_features.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTimeLocationFeaturesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.time_location_features.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.time_location_features.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.time_location_features.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimeLocationFeaturesIndexQueryKey>
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
      ...getTimeLocationFeaturesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTimeLocationFeaturesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.time_location_features.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.time_location_features.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.time_location_features.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimeLocationFeaturesIndexQueryKey>
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
      ...getTimeLocationFeaturesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTimeLocationFeaturesIndexMutationKey() {
  return ['time_location_features', '/time_location_features/', 'POST'] as const
}

export function getPostTimeLocationFeaturesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.time_location_features.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.time_location_features.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTimeLocationFeaturesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.time_location_features.index.$post>) {
      return parseResponse(client.time_location_features.index.$post(args, options))
    },
  })
}

export function usePostTimeLocationFeaturesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.time_location_features.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.time_location_features.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTimeLocationFeaturesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTimeLocationFeaturesIdIndexQueryKey(
  args: InferRequestType<(typeof client.time_location_features)[':id']['index']['$get']>,
) {
  return ['time_location_features', '/time_location_features/:id/', args] as const
}

export function getTimeLocationFeaturesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.time_location_features)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimeLocationFeaturesIdIndexQueryKey>
  >({
    queryKey: getTimeLocationFeaturesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.time_location_features[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTimeLocationFeaturesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.time_location_features)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimeLocationFeaturesIdIndexQueryKey>
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
      ...getTimeLocationFeaturesIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTimeLocationFeaturesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.time_location_features)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimeLocationFeaturesIdIndexQueryKey>
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
      ...getTimeLocationFeaturesIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTimeLocationFeaturesIdIndexMutationKey() {
  return ['time_location_features', '/time_location_features/:id/', 'PUT'] as const
}

export function getPutTimeLocationFeaturesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.time_location_features)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTimeLocationFeaturesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.time_location_features)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.time_location_features[':id'].index.$put(args, options))
    },
  })
}

export function usePutTimeLocationFeaturesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.time_location_features)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTimeLocationFeaturesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTimeLocationFeaturesIdIndexMutationKey() {
  return ['time_location_features', '/time_location_features/:id/', 'DELETE'] as const
}

export function getDeleteTimeLocationFeaturesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.time_location_features)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTimeLocationFeaturesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.time_location_features)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.time_location_features[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteTimeLocationFeaturesIdIndex<
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
                  ReturnType<(typeof client.time_location_features)[':id']['index']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.time_location_features)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTimeLocationFeaturesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchTimeLocationFeaturesIdIndexMutationKey() {
  return ['time_location_features', '/time_location_features/:id/', 'PATCH'] as const
}

export function getPatchTimeLocationFeaturesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.time_location_features)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTimeLocationFeaturesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.time_location_features)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.time_location_features[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchTimeLocationFeaturesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.time_location_features)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTimeLocationFeaturesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTimeLocationsIndexQueryKey(
  args: InferRequestType<typeof client.time_locations.index.$get>,
) {
  return ['time_locations', '/time_locations/', args] as const
}

export function getTimeLocationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_locations.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.time_locations.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_locations.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTimeLocationsIndexQueryKey>
  >({
    queryKey: getTimeLocationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.time_locations.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTimeLocationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_locations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.time_locations.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.time_locations.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimeLocationsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTimeLocationsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTimeLocationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_locations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.time_locations.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.time_locations.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimeLocationsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTimeLocationsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTimeLocationsIndexMutationKey() {
  return ['time_locations', '/time_locations/', 'POST'] as const
}

export function getPostTimeLocationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.time_locations.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.time_locations.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTimeLocationsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.time_locations.index.$post>) {
      return parseResponse(client.time_locations.index.$post(args, options))
    },
  })
}

export function usePostTimeLocationsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.time_locations.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.time_locations.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTimeLocationsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTimeLocationsIdIndexQueryKey(
  args: InferRequestType<(typeof client.time_locations)[':id']['index']['$get']>,
) {
  return ['time_locations', '/time_locations/:id/', args] as const
}

export function getTimeLocationsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.time_locations)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.time_locations)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.time_locations)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimeLocationsIdIndexQueryKey>
  >({
    queryKey: getTimeLocationsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.time_locations[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTimeLocationsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.time_locations)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.time_locations)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.time_locations)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimeLocationsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTimeLocationsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTimeLocationsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.time_locations)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.time_locations)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.time_locations)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimeLocationsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTimeLocationsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTrackersIndexQueryKey(
  args: InferRequestType<typeof client.trackers.index.$get>,
) {
  return ['trackers', '/trackers/', args] as const
}

export function getTrackersIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trackers.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.trackers.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trackers.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTrackersIndexQueryKey>
  >({
    queryKey: getTrackersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.trackers.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTrackersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trackers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.trackers.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trackers.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTrackersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTrackersIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTrackersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trackers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.trackers.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trackers.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTrackersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTrackersIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTrackersIndexMutationKey() {
  return ['trackers', '/trackers/', 'POST'] as const
}

export function getPostTrackersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trackers.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.trackers.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTrackersIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.trackers.index.$post>) {
      return parseResponse(client.trackers.index.$post(args, options))
    },
  })
}

export function usePostTrackersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trackers.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.trackers.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTrackersIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTrackersIdIndexQueryKey(
  args: InferRequestType<(typeof client.trackers)[':id']['index']['$get']>,
) {
  return ['trackers', '/trackers/:id/', args] as const
}

export function getTrackersIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.trackers)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrackersIdIndexQueryKey>
  >({
    queryKey: getTrackersIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.trackers[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTrackersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.trackers)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrackersIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTrackersIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTrackersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.trackers)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrackersIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTrackersIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTrackersIdIndexMutationKey() {
  return ['trackers', '/trackers/:id/', 'PUT'] as const
}

export function getPutTrackersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.trackers)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTrackersIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.trackers)[':id']['index']['$put']>) {
      return parseResponse(client.trackers[':id'].index.$put(args, options))
    },
  })
}

export function usePutTrackersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.trackers)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTrackersIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchTrackersIdIndexMutationKey() {
  return ['trackers', '/trackers/:id/', 'PATCH'] as const
}

export function getPatchTrackersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.trackers)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTrackersIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.trackers)[':id']['index']['$patch']>) {
      return parseResponse(client.trackers[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchTrackersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.trackers)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTrackersIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTrackersIdPublicIndexQueryKey(
  args: InferRequestType<(typeof client.trackers)[':id']['public']['index']['$get']>,
) {
  return ['trackers', '/trackers/:id/public/', args] as const
}

export function getTrackersIdPublicIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.trackers)[':id']['public']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.trackers)[':id']['public']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.trackers)[':id']['public']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrackersIdPublicIndexQueryKey>
  >({
    queryKey: getTrackersIdPublicIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.trackers[':id'].public.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTrackersIdPublicIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.trackers)[':id']['public']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.trackers)[':id']['public']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.trackers)[':id']['public']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrackersIdPublicIndexQueryKey>
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
      ...getTrackersIdPublicIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTrackersIdPublicIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.trackers)[':id']['public']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.trackers)[':id']['public']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.trackers)[':id']['public']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrackersIdPublicIndexQueryKey>
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
      ...getTrackersIdPublicIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersIndexQueryKey(args: InferRequestType<typeof client.users.index.$get>) {
  return ['users', '/users/', args] as const
}

export function getUsersIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersIndexQueryKey>
  >({
    queryKey: getUsersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsersIndexMutationKey() {
  return ['users', '/users/', 'POST'] as const
}

export function getPostUsersIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.index.$post>) {
      return parseResponse(client.users.index.$post(args, options))
    },
  })
}

export function usePostUsersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersIdIndexQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['index']['$get']>,
) {
  return ['users', '/users/:id/', args] as const
}

export function getUsersIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdIndexQueryKey>
  >({
    queryKey: getUsersIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutUsersIdIndexMutationKey() {
  return ['users', '/users/:id/', 'PUT'] as const
}

export function getPutUsersIdIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['index']['$put']>) {
      return parseResponse(client.users[':id'].index.$put(args, options))
    },
  })
}

export function usePutUsersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersIdIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUsersIdIndexMutationKey() {
  return ['users', '/users/:id/', 'DELETE'] as const
}

export function getDeleteUsersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['index']['$delete']>) {
      return parseResponse(client.users[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteUsersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['index']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchUsersIdIndexMutationKey() {
  return ['users', '/users/:id/', 'PATCH'] as const
}

export function getPatchUsersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['index']['$patch']>) {
      return parseResponse(client.users[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchUsersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUsersIdActivateIndexMutationKey() {
  return ['users', '/users/:id/activate/', 'POST'] as const
}

export function getPostUsersIdActivateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['activate']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['activate']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdActivateIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id']['activate']['index']['$post']>,
    ) {
      return parseResponse(client.users[':id'].activate.index.$post(args, options))
    },
  })
}

export function usePostUsersIdActivateIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['activate']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['activate']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersIdActivateIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersIdOnDutyIndexQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$get']>,
) {
  return ['users', '/users/:id/on_duty/', args] as const
}

export function getUsersIdOnDutyIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['on_duty']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['on_duty']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdOnDutyIndexQueryKey>
  >({
    queryKey: getUsersIdOnDutyIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].on_duty.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersIdOnDutyIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['on_duty']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['on_duty']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdOnDutyIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdOnDutyIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdOnDutyIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['on_duty']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['on_duty']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdOnDutyIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdOnDutyIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutUsersIdOnDutyIndexMutationKey() {
  return ['users', '/users/:id/on_duty/', 'PUT'] as const
}

export function getPutUsersIdOnDutyIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['on_duty']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdOnDutyIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$put']>,
    ) {
      return parseResponse(client.users[':id'].on_duty.index.$put(args, options))
    },
  })
}

export function usePutUsersIdOnDutyIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['on_duty']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersIdOnDutyIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUsersIdOnDutyIndexMutationKey() {
  return ['users', '/users/:id/on_duty/', 'DELETE'] as const
}

export function getDeleteUsersIdOnDutyIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['on_duty']['index']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdOnDutyIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$delete']>,
    ) {
      return parseResponse(client.users[':id'].on_duty.index.$delete(args, options))
    },
  })
}

export function useDeleteUsersIdOnDutyIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['on_duty']['index']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersIdOnDutyIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersOnDutyLogIndexQueryKey(
  args: InferRequestType<typeof client.users_on_duty_log.index.$get>,
) {
  return ['users_on_duty_log', '/users_on_duty_log/', args] as const
}

export function getUsersOnDutyLogIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.users_on_duty_log.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users_on_duty_log.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users_on_duty_log.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersOnDutyLogIndexQueryKey>
  >({
    queryKey: getUsersOnDutyLogIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users_on_duty_log.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersOnDutyLogIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.users_on_duty_log.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users_on_duty_log.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users_on_duty_log.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersOnDutyLogIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersOnDutyLogIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersOnDutyLogIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.users_on_duty_log.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users_on_duty_log.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users_on_duty_log.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersOnDutyLogIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersOnDutyLogIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsersOnDutyLogIndexMutationKey() {
  return ['users_on_duty_log', '/users_on_duty_log/', 'POST'] as const
}

export function getPostUsersOnDutyLogIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users_on_duty_log.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users_on_duty_log.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersOnDutyLogIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users_on_duty_log.index.$post>) {
      return parseResponse(client.users_on_duty_log.index.$post(args, options))
    },
  })
}

export function usePostUsersOnDutyLogIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users_on_duty_log.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.users_on_duty_log.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersOnDutyLogIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersOnDutyLogIdIndexQueryKey(
  args: InferRequestType<(typeof client.users_on_duty_log)[':id']['index']['$get']>,
) {
  return ['users_on_duty_log', '/users_on_duty_log/:id/', args] as const
}

export function getUsersOnDutyLogIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users_on_duty_log)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users_on_duty_log)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users_on_duty_log)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersOnDutyLogIdIndexQueryKey>
  >({
    queryKey: getUsersOnDutyLogIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users_on_duty_log[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersOnDutyLogIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users_on_duty_log)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users_on_duty_log)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users_on_duty_log)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersOnDutyLogIdIndexQueryKey>
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
      ...getUsersOnDutyLogIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersOnDutyLogIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users_on_duty_log)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users_on_duty_log)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users_on_duty_log)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersOnDutyLogIdIndexQueryKey>
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
      ...getUsersOnDutyLogIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWebhooksIndexQueryKey(
  args: InferRequestType<typeof client.webhooks.index.$get>,
) {
  return ['webhooks', '/webhooks/', args] as const
}

export function getWebhooksIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webhooks.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIndexQueryKey>
  >({
    queryKey: getWebhooksIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWebhooksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.webhooks.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhooksIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhooksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.webhooks.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhooksIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostWebhooksIndexMutationKey() {
  return ['webhooks', '/webhooks/', 'POST'] as const
}

export function getPostWebhooksIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webhooks.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.index.$post>) {
      return parseResponse(client.webhooks.index.$post(args, options))
    },
  })
}

export function usePostWebhooksIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhooksIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebhooksIdIndexQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>,
) {
  return ['webhooks', '/webhooks/:id/', args] as const
}

export function getWebhooksIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdIndexQueryKey>
  >({
    queryKey: getWebhooksIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWebhooksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhooksIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhooksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhooksIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutWebhooksIdIndexMutationKey() {
  return ['webhooks', '/webhooks/:id/', 'PUT'] as const
}

export function getPutWebhooksIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id']['index']['$put']>) {
      return parseResponse(client.webhooks[':id'].index.$put(args, options))
    },
  })
}

export function usePutWebhooksIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWebhooksIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteWebhooksIdIndexMutationKey() {
  return ['webhooks', '/webhooks/:id/', 'DELETE'] as const
}

export function getDeleteWebhooksIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhooks)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id']['index']['$delete']>) {
      return parseResponse(client.webhooks[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteWebhooksIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.webhooks)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebhooksIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchWebhooksIdIndexMutationKey() {
  return ['webhooks', '/webhooks/:id/', 'PATCH'] as const
}

export function getPatchWebhooksIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWebhooksIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id']['index']['$patch']>) {
      return parseResponse(client.webhooks[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchWebhooksIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWebhooksIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWebhooksIdActiveIndexMutationKey() {
  return ['webhooks', '/webhooks/:id/active/', 'POST'] as const
}

export function getPostWebhooksIdActiveIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':id']['active']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id']['active']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksIdActiveIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':id']['active']['index']['$post']>,
    ) {
      return parseResponse(client.webhooks[':id'].active.index.$post(args, options))
    },
  })
}

export function usePostWebhooksIdActiveIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id']['active']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':id']['active']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhooksIdActiveIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWebhooksIdInactiveIndexMutationKey() {
  return ['webhooks', '/webhooks/:id/inactive/', 'POST'] as const
}

export function getPostWebhooksIdInactiveIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':id']['inactive']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id']['inactive']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksIdInactiveIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':id']['inactive']['index']['$post']>,
    ) {
      return parseResponse(client.webhooks[':id'].inactive.index.$post(args, options))
    },
  })
}

export function usePostWebhooksIdInactiveIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id']['inactive']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':id']['inactive']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhooksIdInactiveIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkerFeaturesIndexQueryKey(
  args: InferRequestType<typeof client.worker_features.index.$get>,
) {
  return ['worker_features', '/worker_features/', args] as const
}

export function getWorkerFeaturesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker_features.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.worker_features.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.worker_features.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkerFeaturesIndexQueryKey>
  >({
    queryKey: getWorkerFeaturesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.worker_features.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWorkerFeaturesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker_features.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.worker_features.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.worker_features.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkerFeaturesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWorkerFeaturesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWorkerFeaturesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker_features.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.worker_features.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.worker_features.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkerFeaturesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWorkerFeaturesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWorkerFeaturesUserIdIndexQueryKey(
  args: InferRequestType<(typeof client.worker_features)[':user_id']['index']['$get']>,
) {
  return ['worker_features', '/worker_features/:user_id/', args] as const
}

export function getWorkerFeaturesUserIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.worker_features)[':user_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.worker_features)[':user_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.worker_features)[':user_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkerFeaturesUserIdIndexQueryKey>
  >({
    queryKey: getWorkerFeaturesUserIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.worker_features[':user_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWorkerFeaturesUserIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.worker_features)[':user_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.worker_features)[':user_id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.worker_features)[':user_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkerFeaturesUserIdIndexQueryKey>
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
      ...getWorkerFeaturesUserIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkerFeaturesUserIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.worker_features)[':user_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.worker_features)[':user_id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.worker_features)[':user_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkerFeaturesUserIdIndexQueryKey>
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
      ...getWorkerFeaturesUserIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWorkerTracksIndexQueryKey(
  args: InferRequestType<typeof client.worker_tracks.index.$get>,
) {
  return ['worker_tracks', '/worker_tracks/', args] as const
}

export function getWorkerTracksIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker_tracks.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.worker_tracks.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker_tracks.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWorkerTracksIndexQueryKey>
  >({
    queryKey: getWorkerTracksIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.worker_tracks.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWorkerTracksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker_tracks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.worker_tracks.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.worker_tracks.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkerTracksIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWorkerTracksIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWorkerTracksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker_tracks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.worker_tracks.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.worker_tracks.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkerTracksIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWorkerTracksIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWorkingStateIndexQueryKey(
  args: InferRequestType<typeof client.working_state.index.$get>,
) {
  return ['working_state', '/working_state/', args] as const
}

export function getWorkingStateIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.working_state.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.working_state.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.working_state.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWorkingStateIndexQueryKey>
  >({
    queryKey: getWorkingStateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.working_state.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWorkingStateIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.working_state.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.working_state.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.working_state.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkingStateIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWorkingStateIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWorkingStateIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.working_state.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.working_state.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.working_state.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkingStateIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWorkingStateIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostWorkingStateIndexMutationKey() {
  return ['working_state', '/working_state/', 'POST'] as const
}

export function getPostWorkingStateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.working_state.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.working_state.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkingStateIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.working_state.index.$post>) {
      return parseResponse(client.working_state.index.$post(args, options))
    },
  })
}

export function usePostWorkingStateIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.working_state.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.working_state.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkingStateIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkingStateIdIndexQueryKey(
  args: InferRequestType<(typeof client.working_state)[':id']['index']['$get']>,
) {
  return ['working_state', '/working_state/:id/', args] as const
}

export function getWorkingStateIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.working_state)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.working_state)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.working_state)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkingStateIdIndexQueryKey>
  >({
    queryKey: getWorkingStateIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.working_state[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWorkingStateIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.working_state)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.working_state)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.working_state)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkingStateIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWorkingStateIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWorkingStateIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.working_state)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.working_state)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.working_state)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkingStateIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWorkingStateIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
