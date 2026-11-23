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
  args: MaybeRefOrGetter<InferRequestType<typeof client.account_roles.index.$get>>,
) {
  return ['account_roles', '/account_roles/', toValue(args)] as const
}

export function getAccountRolesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account_roles.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountRolesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account_roles.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountRolesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_roles.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account_roles.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account_roles.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account_roles.index.$get>>>
            >
          >,
          ReturnType<typeof getAccountRolesIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_roles.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountRolesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountRolesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account_roles.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account_roles)[':id']['index']['$get']>>,
) {
  return ['account_roles', '/account_roles/:id/', toValue(args)] as const
}

export function getAccountRolesIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account_roles)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountRolesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account_roles[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account_roles)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountRolesIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountRolesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountRolesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account_roles[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account_roles)[':id']['notify']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account_roles)[':id']['notify']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account_roles)[':id']['token']['index']['$get']>
  >,
) {
  return ['account_roles', '/account_roles/:id/token/', toValue(args)] as const
}

export function getAccountRolesIdTokenIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account_roles)[':id']['token']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountRolesIdTokenIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account_roles[':id'].token.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account_roles)[':id']['token']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account_roles)[':id']['token']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountRolesIdTokenIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.account_roles)[':id']['token']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountRolesIdTokenIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountRolesIdTokenIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account_roles[':id'].token.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.index.$get>>,
) {
  return ['accounts', '/accounts/', toValue(args)] as const
}

export function getAccountsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.index.$get>>>>
          >,
          ReturnType<typeof getAccountsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':id']['index']['$get']>>,
) {
  return ['accounts', '/accounts/:id/', toValue(args)] as const
}

export function getAccountsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>
  >,
) {
  return ['accounts', '/accounts/:id/braintree_customer/', toValue(args)] as const
}

export function getAccountsIdBraintreeCustomerIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsIdBraintreeCustomerIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':id'].braintree_customer.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsIdBraintreeCustomerIndexQueryKey>
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
            ReturnType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdBraintreeCustomerIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsIdBraintreeCustomerIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':id'].braintree_customer.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':id']['change_owner']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':id']['change_owner']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$get']>
  >,
) {
  return ['accounts', '/accounts/:id/managers/', toValue(args)] as const
}

export function getAccountsIdManagersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsIdManagersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':id'].managers.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':id']['managers']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsIdManagersIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':id']['managers']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdManagersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsIdManagersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':id'].managers.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.accounts)[':id']['managers']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']>
  >,
) {
  return ['accounts', '/accounts/:id/stripe_get_payment_method/', toValue(args)] as const
}

export function getAccountsIdStripeGetPaymentMethodIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsIdStripeGetPaymentMethodIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':id'].stripe_get_payment_method.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']>
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
                    (typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']
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
                    (typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsIdStripeGetPaymentMethodIndexQueryKey>
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
              (typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdStripeGetPaymentMethodIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsIdStripeGetPaymentMethodIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':id'].stripe_get_payment_method.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsIdStripeGetSetupAttemptIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']>
  >,
) {
  return ['accounts', '/accounts/:id/stripe_get_setup_attempt/', toValue(args)] as const
}

export function getAccountsIdStripeGetSetupAttemptIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsIdStripeGetSetupAttemptIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':id'].stripe_get_setup_attempt.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']>
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
                    (typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']
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
                    (typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsIdStripeGetSetupAttemptIndexQueryKey>
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
            ReturnType<(typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdStripeGetSetupAttemptIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsIdStripeGetSetupAttemptIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':id'].stripe_get_setup_attempt.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsIdStripeGetSetupIntentIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']>
  >,
) {
  return ['accounts', '/accounts/:id/stripe_get_setup_intent/', toValue(args)] as const
}

export function getAccountsIdStripeGetSetupIntentIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsIdStripeGetSetupIntentIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':id'].stripe_get_setup_intent.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']>
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
                    (typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']
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
                    (typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsIdStripeGetSetupIntentIndexQueryKey>
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
            ReturnType<(typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdStripeGetSetupIntentIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsIdStripeGetSetupIntentIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':id'].stripe_get_setup_intent.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsIdStripePaymentMethodsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']>
  >,
) {
  return ['accounts', '/accounts/:id/stripe_payment_methods/', toValue(args)] as const
}

export function getAccountsIdStripePaymentMethodsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsIdStripePaymentMethodsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':id'].stripe_payment_methods.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']>
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
                    (typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']
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
                    (typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsIdStripePaymentMethodsIndexQueryKey>
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
            ReturnType<(typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdStripePaymentMethodsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsIdStripePaymentMethodsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':id'].stripe_payment_methods.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>
  >,
) {
  return ['accounts', '/accounts/:id/stripe_setup_intents/', toValue(args)] as const
}

export function getAccountsIdStripeSetupIntentsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsIdStripeSetupIntentsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':id'].stripe_setup_intents.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>
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
                    (typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']
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
                    (typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsIdStripeSetupIntentsIndexQueryKey>
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
            ReturnType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdStripeSetupIntentsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsIdStripeSetupIntentsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':id'].stripe_setup_intents.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsIdWorkersIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$get']>
  >,
) {
  return ['accounts', '/accounts/:id/workers/', toValue(args)] as const
}

export function getAccountsIdWorkersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsIdWorkersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':id'].workers.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':id']['workers']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsIdWorkersIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':id']['workers']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdWorkersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsIdWorkersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':id'].workers.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.accounts)[':id']['workers']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getAddonsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.addons.index.$get>>,
) {
  return ['addons', '/addons/', toValue(args)] as const
}

export function getAddonsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.addons.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddonsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.addons.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAddonsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.addons.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
          >,
          ReturnType<typeof getAddonsIndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAddonsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddonsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.addons.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAddonsIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addons)[':id']['index']['$get']>>,
) {
  return ['addons', '/addons/:id/', toValue(args)] as const
}

export function getAddonsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addons)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddonsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.addons[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAddonsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.addons)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addons)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addons)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAddonsIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.addons)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddonsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddonsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.addons[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.billing.customers.index.$get>>,
) {
  return ['billing', '/billing/customers/', toValue(args)] as const
}

export function getBillingCustomersIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billing.customers.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillingCustomersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billing.customers.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBillingCustomersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.billing.customers.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billing.customers.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.billing.customers.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.billing.customers.index.$get>>>
            >
          >,
          ReturnType<typeof getBillingCustomersIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.customers.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingCustomersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillingCustomersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.billing.customers.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billing.customers)[':id']['index']['$get']>
  >,
) {
  return ['billing', '/billing/customers/:id/', toValue(args)] as const
}

export function getBillingCustomersIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billing.customers)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillingCustomersIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billing.customers[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billing.customers)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billing.customers)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBillingCustomersIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.billing.customers)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingCustomersIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillingCustomersIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.billing.customers[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>
  >,
) {
  return ['billing', '/billing/customers/:id/client_token/', toValue(args)] as const
}

export function getBillingCustomersIdClientTokenIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillingCustomersIdClientTokenIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billing.customers[':id'].client_token.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>
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
                    (typeof client.billing.customers)[':id']['client_token']['index']['$get']
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
                    (typeof client.billing.customers)[':id']['client_token']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBillingCustomersIdClientTokenIndexQueryKey>
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
            ReturnType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingCustomersIdClientTokenIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillingCustomersIdClientTokenIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.billing.customers[':id'].client_token.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillingInvoicesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billing.invoices.index.$get>>,
) {
  return ['billing', '/billing/invoices/', toValue(args)] as const
}

export function getBillingInvoicesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billing.invoices.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillingInvoicesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billing.invoices.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBillingInvoicesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.invoices.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billing.invoices.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.billing.invoices.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.billing.invoices.index.$get>>>
            >
          >,
          ReturnType<typeof getBillingInvoicesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.invoices.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingInvoicesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillingInvoicesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.billing.invoices.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillingInvoicesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billing.invoices)[':id']['index']['$get']>
  >,
) {
  return ['billing', '/billing/invoices/:id/', toValue(args)] as const
}

export function getBillingInvoicesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billing.invoices)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillingInvoicesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billing.invoices[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billing.invoices)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billing.invoices)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBillingInvoicesIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.billing.invoices)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingInvoicesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillingInvoicesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.billing.invoices[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
          InferRequestType<
            (typeof client.billing.invoices)[':id']['mark_as_paid']['index']['$post']
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.billing.stripe_payments.index.$get>>,
) {
  return ['billing', '/billing/stripe_payments/', toValue(args)] as const
}

export function getBillingStripePaymentsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billing.stripe_payments.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillingStripePaymentsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billing.stripe_payments.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBillingStripePaymentsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.billing.stripe_payments.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billing.stripe_payments.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.billing.stripe_payments.index.$get>>
              >
            >
          >,
          ReturnType<typeof getBillingStripePaymentsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.stripe_payments.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingStripePaymentsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillingStripePaymentsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.billing.stripe_payments.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillingStripePaymentsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>
  >,
) {
  return ['billing', '/billing/stripe_payments/:id/', toValue(args)] as const
}

export function getBillingStripePaymentsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillingStripePaymentsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billing.stripe_payments[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBillingStripePaymentsIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingStripePaymentsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillingStripePaymentsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.billing.stripe_payments[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillingTransactionsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billing.transactions.index.$get>>,
) {
  return ['billing', '/billing/transactions/', toValue(args)] as const
}

export function getBillingTransactionsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billing.transactions.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillingTransactionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billing.transactions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBillingTransactionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.billing.transactions.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billing.transactions.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.billing.transactions.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.billing.transactions.index.$get>>
              >
            >
          >,
          ReturnType<typeof getBillingTransactionsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.transactions.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingTransactionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillingTransactionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.billing.transactions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillingTransactionsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billing.transactions)[':id']['index']['$get']>
  >,
) {
  return ['billing', '/billing/transactions/:id/', toValue(args)] as const
}

export function getBillingTransactionsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billing.transactions)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillingTransactionsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billing.transactions[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billing.transactions)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billing.transactions)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBillingTransactionsIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.billing.transactions)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingTransactionsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillingTransactionsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.billing.transactions[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClientRolesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.client_roles.index.$get>>,
) {
  return ['client_roles', '/client_roles/', toValue(args)] as const
}

export function getClientRolesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.client_roles.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientRolesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.client_roles.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClientRolesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client_roles.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.client_roles.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.client_roles.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.client_roles.index.$get>>>
            >
          >,
          ReturnType<typeof getClientRolesIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client_roles.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClientRolesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientRolesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.client_roles.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.client_roles)[':id']['index']['$get']>>,
) {
  return ['client_roles', '/client_roles/:id/', toValue(args)] as const
}

export function getClientRolesIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.client_roles)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientRolesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.client_roles[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.client_roles)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.client_roles)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClientRolesIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.client_roles)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientRolesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientRolesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.client_roles[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getClientsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clients.index.$get>>,
) {
  return ['clients', '/clients/', toValue(args)] as const
}

export function getClientsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clients.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clients.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClientsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clients.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.index.$get>>>>
          >,
          ReturnType<typeof getClientsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClientsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clients.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.clients.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clients)[':id']['index']['$get']>>,
) {
  return ['clients', '/clients/:id/', toValue(args)] as const
}

export function getClientsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clients)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clients[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClientsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clients)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clients)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClientsIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clients[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.configurations.index.$get>>,
) {
  return ['configurations', '/configurations/', toValue(args)] as const
}

export function getConfigurationsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.configurations.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfigurationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.configurations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConfigurationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configurations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.configurations.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.configurations.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.configurations.index.$get>>>
            >
          >,
          ReturnType<typeof getConfigurationsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configurations.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConfigurationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfigurationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.configurations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactAddressExportsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contact_address_exports.index.$get>>,
) {
  return ['contact_address_exports', '/contact_address_exports/', toValue(args)] as const
}

export function getContactAddressExportsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contact_address_exports.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactAddressExportsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contact_address_exports.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactAddressExportsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contact_address_exports.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contact_address_exports.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.contact_address_exports.index.$get>>
              >
            >
          >,
          ReturnType<typeof getContactAddressExportsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.contact_address_exports.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactAddressExportsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactAddressExportsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contact_address_exports.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactAddressImportIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contact_address_import.index.$get>>,
) {
  return ['contact_address_import', '/contact_address_import/', toValue(args)] as const
}

export function getContactAddressImportIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contact_address_import.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactAddressImportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contact_address_import.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactAddressImportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contact_address_import.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contact_address_import.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.contact_address_import.index.$get>>
              >
            >
          >,
          ReturnType<typeof getContactAddressImportIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.contact_address_import.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactAddressImportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactAddressImportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contact_address_import.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contact_address_import)[':id']['index']['$get']>
  >,
) {
  return ['contact_address_import', '/contact_address_import/:id/', toValue(args)] as const
}

export function getContactAddressImportIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contact_address_import)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactAddressImportIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contact_address_import[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contact_address_import)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contact_address_import)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactAddressImportIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.contact_address_import)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactAddressImportIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactAddressImportIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contact_address_import[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactAddressesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contact_addresses.index.$get>>,
) {
  return ['contact_addresses', '/contact_addresses/', toValue(args)] as const
}

export function getContactAddressesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contact_addresses.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactAddressesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contact_addresses.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactAddressesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.contact_addresses.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contact_addresses.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contact_addresses.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contact_addresses.index.$get>>>
            >
          >,
          ReturnType<typeof getContactAddressesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.contact_addresses.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactAddressesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactAddressesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contact_addresses.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contact_addresses)[':id']['index']['$get']>
  >,
) {
  return ['contact_addresses', '/contact_addresses/:id/', toValue(args)] as const
}

export function getContactAddressesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contact_addresses)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactAddressesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contact_addresses[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contact_addresses)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contact_addresses)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactAddressesIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.contact_addresses)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactAddressesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactAddressesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contact_addresses[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getDevicesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.devices.index.$get>>,
) {
  return ['devices', '/devices/', toValue(args)] as const
}

export function getDevicesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.devices.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.devices.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.index.$get>>>>
          >,
          ReturnType<typeof getDevicesIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.devices.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['index']['$get']>>,
) {
  return ['devices', '/devices/:id/', toValue(args)] as const
}

export function getDevicesIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDevicesIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocsSchemaIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.docs.schema.index.$get>>,
) {
  return ['docs', '/docs/schema/', toValue(args)] as const
}

export function getDocsSchemaIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.docs.schema.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocsSchemaIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.docs.schema.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocsSchemaIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.schema.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.docs.schema.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.docs.schema.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.docs.schema.index.$get>>>
            >
          >,
          ReturnType<typeof getDocsSchemaIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.schema.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDocsSchemaIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocsSchemaIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.docs.schema.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocumentsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.documents.index.$get>>,
) {
  return ['documents', '/documents/', toValue(args)] as const
}

export function getDocumentsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.documents.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.documents.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$get>>>
            >
          >,
          ReturnType<typeof getDocumentsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.documents.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.documents.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.documents)[':id']['index']['$get']>>,
) {
  return ['documents', '/documents/:id/', toValue(args)] as const
}

export function getDocumentsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.documents)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.documents)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDocumentsIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.documents[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getEmailsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emails.index.$get>>,
) {
  return ['emails', '/emails/', toValue(args)] as const
}

export function getEmailsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emails.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emails.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEmailsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emails.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.index.$get>>>>
          >,
          ReturnType<typeof getEmailsIndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEmailsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emails.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.emails.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.emails)[':id']['index']['$get']>>,
) {
  return ['emails', '/emails/:id/', toValue(args)] as const
}

export function getEmailsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.emails)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emails[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmailsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.emails)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.emails)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEmailsIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emails[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getExportsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exports.index.$get>>,
) {
  return ['exports', '/exports/', toValue(args)] as const
}

export function getExportsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exports.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.exports.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exports.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$get>>>>
          >,
          ReturnType<typeof getExportsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExportsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.exports.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.exports.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.exports)[':id']['index']['$get']>>,
) {
  return ['exports', '/exports/:id/', toValue(args)] as const
}

export function getExportsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.exports)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.exports[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.exports)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.exports)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportsIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.exports[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.file_uploads.index.$get>>,
) {
  return ['file_uploads', '/file_uploads/', toValue(args)] as const
}

export function getFileUploadsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.file_uploads.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileUploadsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.file_uploads.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFileUploadsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file_uploads.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.file_uploads.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.file_uploads.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.file_uploads.index.$get>>>
            >
          >,
          ReturnType<typeof getFileUploadsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file_uploads.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFileUploadsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileUploadsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.file_uploads.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.file_uploads)[':id']['index']['$get']>>,
) {
  return ['file_uploads', '/file_uploads/:id/', toValue(args)] as const
}

export function getFileUploadsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.file_uploads)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileUploadsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.file_uploads[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.file_uploads)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.file_uploads)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFileUploadsIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.file_uploads)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileUploadsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileUploadsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.file_uploads[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormrulesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.formrules.index.$get>>,
) {
  return ['formrules', '/formrules/', toValue(args)] as const
}

export function getFormrulesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.formrules.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormrulesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.formrules.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormrulesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formrules.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.formrules.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.formrules.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.formrules.index.$get>>>
            >
          >,
          ReturnType<typeof getFormrulesIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formrules.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFormrulesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormrulesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.formrules.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.formrules.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.formrules.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.formrules)[':id']['index']['$get']>>,
) {
  return ['formrules', '/formrules/:id/', toValue(args)] as const
}

export function getFormrulesIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.formrules)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormrulesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.formrules[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormrulesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.formrules)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormrulesIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormrulesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormrulesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.formrules[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.metafields.index.$get>>,
) {
  return ['metafields', '/metafields/', toValue(args)] as const
}

export function getMetafieldsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metafields.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetafieldsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metafields.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetafieldsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metafields.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metafields.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metafields.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metafields.index.$get>>>
            >
          >,
          ReturnType<typeof getMetafieldsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metafields.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetafieldsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetafieldsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metafields.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metafields)[':id']['index']['$get']>>,
) {
  return ['metafields', '/metafields/:id/', toValue(args)] as const
}

export function getMetafieldsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metafields)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetafieldsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metafields[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetafieldsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metafields)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetafieldsIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetafieldsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetafieldsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metafields[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.notification_templates.index.$get>>,
) {
  return ['notification_templates', '/notification_templates/', toValue(args)] as const
}

export function getNotificationTemplatesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notification_templates.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationTemplatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notification_templates.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notification_templates.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notification_templates.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.notification_templates.index.$get>>
              >
            >
          >,
          ReturnType<typeof getNotificationTemplatesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.notification_templates.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationTemplatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationTemplatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notification_templates.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notification_templates)[':id']['index']['$get']>
  >,
) {
  return ['notification_templates', '/notification_templates/:id/', toValue(args)] as const
}

export function getNotificationTemplatesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notification_templates)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationTemplatesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notification_templates[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notification_templates)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationTemplatesIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationTemplatesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationTemplatesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notification_templates[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.notification_templates)[':id']['index']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notification_templates)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
          InferRequestType<
            (typeof client.notification_templates)[':id']['render']['index']['$post']
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.index.$get>>,
) {
  return ['notifications', '/notifications/', toValue(args)] as const
}

export function getNotificationsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.index.$get>>>
            >
          >,
          ReturnType<typeof getNotificationsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['index']['$get']>>,
) {
  return ['notifications', '/notifications/:id/', toValue(args)] as const
}

export function getNotificationsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationsIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.notifications)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrdersIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orders.index.$get>>,
) {
  return ['orders', '/orders/', toValue(args)] as const
}

export function getOrdersIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orders.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrdersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orders.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrdersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orders.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.index.$get>>>>
          >,
          ReturnType<typeof getOrdersIndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrdersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrdersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orders.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.orders.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orders)[':id']['index']['$get']>>,
) {
  return ['orders', '/orders/:id/', toValue(args)] as const
}

export function getOrdersIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orders)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrdersIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orders[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrdersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orders)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orders)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrdersIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrdersIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrdersIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orders[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.push_notifications.index.$get>>,
) {
  return ['push_notifications', '/push_notifications/', toValue(args)] as const
}

export function getPushNotificationsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.push_notifications.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPushNotificationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.push_notifications.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePushNotificationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.push_notifications.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.push_notifications.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.push_notifications.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.push_notifications.index.$get>>>
            >
          >,
          ReturnType<typeof getPushNotificationsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.push_notifications.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPushNotificationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPushNotificationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.push_notifications.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.push_notifications.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.push_notifications.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.push_notifications)[':id']['index']['$get']>
  >,
) {
  return ['push_notifications', '/push_notifications/:id/', toValue(args)] as const
}

export function getPushNotificationsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.push_notifications)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPushNotificationsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.push_notifications[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.push_notifications)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPushNotificationsIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPushNotificationsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPushNotificationsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.push_notifications[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.recurrences.index.$get>>,
) {
  return ['recurrences', '/recurrences/', toValue(args)] as const
}

export function getRecurrencesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recurrences.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecurrencesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recurrences.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecurrencesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recurrences.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recurrences.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recurrences.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recurrences.index.$get>>>
            >
          >,
          ReturnType<typeof getRecurrencesIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recurrences.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecurrencesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecurrencesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recurrences.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recurrences)[':id']['index']['$get']>>,
) {
  return ['recurrences', '/recurrences/:id/', toValue(args)] as const
}

export function getRecurrencesIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recurrences)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecurrencesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recurrences[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecurrencesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recurrences)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecurrencesIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecurrencesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecurrencesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recurrences[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.register.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.register.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.tasks.states_count.index.$get>>,
) {
  return ['reports', '/reports/tasks/states_count/', toValue(args)] as const
}

export function getReportsTasksStatesCountIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.tasks.states_count.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsTasksStatesCountIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports.tasks.states_count.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsTasksStatesCountIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.reports.tasks.states_count.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.tasks.states_count.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.reports.tasks.states_count.index.$get>>
              >
            >
          >,
          ReturnType<typeof getReportsTasksStatesCountIndexQueryKey>
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
          Awaited<ReturnType<typeof client.reports.tasks.states_count.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsTasksStatesCountIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsTasksStatesCountIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports.tasks.states_count.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReviewsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reviews.index.$get>>,
) {
  return ['reviews', '/reviews/', toValue(args)] as const
}

export function getReviewsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reviews.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reviews.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReviewsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reviews.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.index.$get>>>>
          >,
          ReturnType<typeof getReviewsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReviewsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reviews.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.reviews.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reviews)[':id']['index']['$get']>>,
) {
  return ['reviews', '/reviews/:id/', toValue(args)] as const
}

export function getReviewsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reviews)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reviews[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReviewsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reviews)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reviews)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReviewsIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reviews[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRouteOptimizationsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.route_optimizations.index.$get>>,
) {
  return ['route_optimizations', '/route_optimizations/', toValue(args)] as const
}

export function getRouteOptimizationsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.route_optimizations.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRouteOptimizationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.route_optimizations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRouteOptimizationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.route_optimizations.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.route_optimizations.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.route_optimizations.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.route_optimizations.index.$get>>
              >
            >
          >,
          ReturnType<typeof getRouteOptimizationsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.route_optimizations.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRouteOptimizationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRouteOptimizationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.route_optimizations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.route_optimizations.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.route_optimizations.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.route_optimizations)[':id']['index']['$get']>
  >,
) {
  return ['route_optimizations', '/route_optimizations/:id/', toValue(args)] as const
}

export function getRouteOptimizationsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.route_optimizations)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRouteOptimizationsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.route_optimizations[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.route_optimizations)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.route_optimizations)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRouteOptimizationsIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.route_optimizations)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRouteOptimizationsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRouteOptimizationsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.route_optimizations[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>
  >,
) {
  return ['route_optimizations', '/route_optimizations/:id/results/', toValue(args)] as const
}

export function getRouteOptimizationsIdResultsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRouteOptimizationsIdResultsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.route_optimizations[':id'].results.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRouteOptimizationsIdResultsIndexQueryKey>
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
            ReturnType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRouteOptimizationsIdResultsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRouteOptimizationsIdResultsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.route_optimizations[':id'].results.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRouteOptimizationsIdRoutesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>
  >,
) {
  return ['route_optimizations', '/route_optimizations/:id/routes/', toValue(args)] as const
}

export function getRouteOptimizationsIdRoutesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRouteOptimizationsIdRoutesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.route_optimizations[':id'].routes.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRouteOptimizationsIdRoutesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRouteOptimizationsIdRoutesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRouteOptimizationsIdRoutesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.route_optimizations[':id'].routes.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.route_optimizations)[':id']['schedule']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.route_optimizations)[':id']['schedule']['index']['$post']
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

export function getRoutesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.routes.index.$get>>,
) {
  return ['routes', '/routes/', toValue(args)] as const
}

export function getRoutesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.routes.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoutesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.routes.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRoutesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.routes.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.index.$get>>>>
          >,
          ReturnType<typeof getRoutesIndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRoutesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoutesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.routes.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.routes.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.routes)[':id']['index']['$get']>>,
) {
  return ['routes', '/routes/:id/', toValue(args)] as const
}

export function getRoutesIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.routes)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoutesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.routes[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoutesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.routes)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.routes)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRoutesIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoutesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoutesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.routes[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenes.dashboard.index.$get>>,
) {
  return ['scenes', '/scenes/dashboard/', toValue(args)] as const
}

export function getScenesDashboardIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenes.dashboard.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScenesDashboardIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scenes.dashboard.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScenesDashboardIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenes.dashboard.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenes.dashboard.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scenes.dashboard.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scenes.dashboard.index.$get>>>
            >
          >,
          ReturnType<typeof getScenesDashboardIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.scenes.dashboard.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScenesDashboardIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScenesDashboardIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scenes.dashboard.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScenesOrderListIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenes.order_list.index.$get>>,
) {
  return ['scenes', '/scenes/order_list/', toValue(args)] as const
}

export function getScenesOrderListIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenes.order_list.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScenesOrderListIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scenes.order_list.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScenesOrderListIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.scenes.order_list.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenes.order_list.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scenes.order_list.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scenes.order_list.index.$get>>>
            >
          >,
          ReturnType<typeof getScenesOrderListIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.scenes.order_list.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScenesOrderListIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScenesOrderListIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scenes.order_list.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScenesRecurrenceListIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenes.recurrence_list.index.$get>>,
) {
  return ['scenes', '/scenes/recurrence_list/', toValue(args)] as const
}

export function getScenesRecurrenceListIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenes.recurrence_list.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScenesRecurrenceListIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scenes.recurrence_list.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScenesRecurrenceListIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.scenes.recurrence_list.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenes.recurrence_list.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.scenes.recurrence_list.index.$get>>
              >
            >
          >,
          ReturnType<typeof getScenesRecurrenceListIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.scenes.recurrence_list.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScenesRecurrenceListIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScenesRecurrenceListIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scenes.recurrence_list.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScenesTaskListIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenes.task_list.index.$get>>,
) {
  return ['scenes', '/scenes/task_list/', toValue(args)] as const
}

export function getScenesTaskListIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenes.task_list.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScenesTaskListIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scenes.task_list.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScenesTaskListIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenes.task_list.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenes.task_list.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scenes.task_list.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scenes.task_list.index.$get>>>
            >
          >,
          ReturnType<typeof getScenesTaskListIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.scenes.task_list.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScenesTaskListIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScenesTaskListIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scenes.task_list.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSignaturesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.signatures.index.$get>>,
) {
  return ['signatures', '/signatures/', toValue(args)] as const
}

export function getSignaturesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.signatures.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSignaturesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.signatures.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSignaturesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signatures.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.signatures.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.signatures.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.signatures.index.$get>>>
            >
          >,
          ReturnType<typeof getSignaturesIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signatures.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSignaturesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSignaturesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.signatures.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.signatures)[':id']['index']['$get']>>,
) {
  return ['signatures', '/signatures/:id/', toValue(args)] as const
}

export function getSignaturesIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.signatures)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSignaturesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.signatures[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSignaturesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.signatures)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.signatures)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.signatures)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSignaturesIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.signatures)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSignaturesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSignaturesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.signatures[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSmsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sms.index.$get>>,
) {
  return ['sms', '/sms/', toValue(args)] as const
}

export function getSmsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sms.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sms.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSmsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sms.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.index.$get>>>>
          >,
          ReturnType<typeof getSmsIndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSmsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sms.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sms.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sms)[':id']['index']['$get']>>,
) {
  return ['sms', '/sms/:id/', toValue(args)] as const
}

export function getSmsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sms)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sms[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSmsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sms)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$get']>>>
            >
          >,
          ReturnType<typeof getSmsIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sms[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sms)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sms)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_address_features.index.$get>>,
) {
  return ['task_address_features', '/task_address_features/', toValue(args)] as const
}

export function getTaskAddressFeaturesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_address_features.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskAddressFeaturesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task_address_features.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaskAddressFeaturesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.task_address_features.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_address_features.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.task_address_features.index.$get>>
              >
            >
          >,
          ReturnType<typeof getTaskAddressFeaturesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.task_address_features.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskAddressFeaturesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskAddressFeaturesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task_address_features.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaskAddressFeaturesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.task_address_features)[':id']['index']['$get']>
  >,
) {
  return ['task_address_features', '/task_address_features/:id/', toValue(args)] as const
}

export function getTaskAddressFeaturesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.task_address_features)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskAddressFeaturesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task_address_features[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.task_address_features)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.task_address_features)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTaskAddressFeaturesIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.task_address_features)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskAddressFeaturesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskAddressFeaturesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task_address_features[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaskCommandsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_commands.index.$get>>,
) {
  return ['task_commands', '/task_commands/', toValue(args)] as const
}

export function getTaskCommandsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_commands.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskCommandsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task_commands.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaskCommandsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_commands.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_commands.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.task_commands.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.task_commands.index.$get>>>
            >
          >,
          ReturnType<typeof getTaskCommandsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_commands.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaskCommandsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskCommandsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task_commands.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.task_commands)[':id']['index']['$get']>>,
) {
  return ['task_commands', '/task_commands/:id/', toValue(args)] as const
}

export function getTaskCommandsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.task_commands)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskCommandsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task_commands[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.task_commands)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.task_commands)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTaskCommandsIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.task_commands)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskCommandsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskCommandsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task_commands[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_event_tracks.index.$get>>,
) {
  return ['task_event_tracks', '/task_event_tracks/', toValue(args)] as const
}

export function getTaskEventTracksIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_event_tracks.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskEventTracksIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task_event_tracks.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaskEventTracksIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.task_event_tracks.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_event_tracks.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.task_event_tracks.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.task_event_tracks.index.$get>>>
            >
          >,
          ReturnType<typeof getTaskEventTracksIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.task_event_tracks.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskEventTracksIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskEventTracksIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task_event_tracks.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaskEventTracksIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.task_event_tracks)[':id']['index']['$get']>
  >,
) {
  return ['task_event_tracks', '/task_event_tracks/:id/', toValue(args)] as const
}

export function getTaskEventTracksIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.task_event_tracks)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskEventTracksIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task_event_tracks[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.task_event_tracks)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.task_event_tracks)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTaskEventTracksIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.task_event_tracks)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskEventTracksIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskEventTracksIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task_event_tracks[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaskEventsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_events.index.$get>>,
) {
  return ['task_events', '/task_events/', toValue(args)] as const
}

export function getTaskEventsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_events.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskEventsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task_events.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaskEventsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_events.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_events.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.task_events.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.task_events.index.$get>>>
            >
          >,
          ReturnType<typeof getTaskEventsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_events.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaskEventsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskEventsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task_events.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaskEventsIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.task_events)[':id']['index']['$get']>>,
) {
  return ['task_events', '/task_events/:id/', toValue(args)] as const
}

export function getTaskEventsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.task_events)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskEventsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task_events[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaskEventsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.task_events)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.task_events)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.task_events)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTaskEventsIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.task_events)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskEventsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskEventsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task_events[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaskExportsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_exports.index.$get>>,
) {
  return ['task_exports', '/task_exports/', toValue(args)] as const
}

export function getTaskExportsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_exports.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskExportsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task_exports.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaskExportsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_exports.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_exports.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.task_exports.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.task_exports.index.$get>>>
            >
          >,
          ReturnType<typeof getTaskExportsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_exports.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaskExportsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskExportsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task_exports.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaskFormsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_forms.index.$get>>,
) {
  return ['task_forms', '/task_forms/', toValue(args)] as const
}

export function getTaskFormsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_forms.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskFormsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task_forms.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaskFormsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_forms.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_forms.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.task_forms.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.task_forms.index.$get>>>
            >
          >,
          ReturnType<typeof getTaskFormsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_forms.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaskFormsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskFormsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task_forms.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.task_forms)[':id']['index']['$get']>>,
) {
  return ['task_forms', '/task_forms/:id/', toValue(args)] as const
}

export function getTaskFormsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.task_forms)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskFormsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task_forms[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaskFormsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.task_forms)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTaskFormsIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskFormsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskFormsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task_forms[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_import.index.$get>>,
) {
  return ['task_import', '/task_import/', toValue(args)] as const
}

export function getTaskImportIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_import.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskImportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task_import.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaskImportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_import.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_import.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.task_import.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.task_import.index.$get>>>
            >
          >,
          ReturnType<typeof getTaskImportIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_import.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaskImportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskImportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task_import.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.task_import)[':id']['index']['$get']>>,
) {
  return ['task_import', '/task_import/:id/', toValue(args)] as const
}

export function getTaskImportIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.task_import)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskImportIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task_import[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaskImportIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.task_import)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.task_import)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.task_import)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTaskImportIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.task_import)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskImportIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskImportIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task_import[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaskImportMappingIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_import_mapping.index.$get>>,
) {
  return ['task_import_mapping', '/task_import_mapping/', toValue(args)] as const
}

export function getTaskImportMappingIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_import_mapping.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskImportMappingIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task_import_mapping.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaskImportMappingIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.task_import_mapping.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_import_mapping.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.task_import_mapping.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.task_import_mapping.index.$get>>
              >
            >
          >,
          ReturnType<typeof getTaskImportMappingIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.task_import_mapping.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskImportMappingIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskImportMappingIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task_import_mapping.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.task_import_mapping.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.task_import_mapping.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.task_import_mapping)[':id']['index']['$get']>
  >,
) {
  return ['task_import_mapping', '/task_import_mapping/:id/', toValue(args)] as const
}

export function getTaskImportMappingIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.task_import_mapping)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskImportMappingIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task_import_mapping[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.task_import_mapping)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.task_import_mapping)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTaskImportMappingIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.task_import_mapping)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskImportMappingIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskImportMappingIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task_import_mapping[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaskMetadatasIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_metadatas.index.$get>>,
) {
  return ['task_metadatas', '/task_metadatas/', toValue(args)] as const
}

export function getTaskMetadatasIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_metadatas.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskMetadatasIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task_metadatas.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaskMetadatasIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_metadatas.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.task_metadatas.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.task_metadatas.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.task_metadatas.index.$get>>>
            >
          >,
          ReturnType<typeof getTaskMetadatasIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_metadatas.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaskMetadatasIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskMetadatasIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task_metadatas.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaskMetadatasIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.task_metadatas)[':id']['index']['$get']>>,
) {
  return ['task_metadatas', '/task_metadatas/:id/', toValue(args)] as const
}

export function getTaskMetadatasIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.task_metadatas)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskMetadatasIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.task_metadatas[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.task_metadatas)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.task_metadatas)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTaskMetadatasIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.task_metadatas)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskMetadatasIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskMetadatasIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.task_metadatas[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTasksIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tasks.index.$get>>,
) {
  return ['tasks', '/tasks/', toValue(args)] as const
}

export function getTasksIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tasks.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTasksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tasks.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.index.$get>>>>
          >,
          ReturnType<typeof getTasksIndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTasksIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tasks.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':id']['index']['$get']>>,
) {
  return ['tasks', '/tasks/:id/', toValue(args)] as const
}

export function getTasksIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tasks)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tasks)[':id']['account_change']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tasks)[':id']['account_change']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':id']['documents']['index']['$get']>
  >,
) {
  return ['tasks', '/tasks/:id/documents/', toValue(args)] as const
}

export function getTasksIdDocumentsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':id']['documents']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksIdDocumentsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':id'].documents.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':id']['documents']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':id']['documents']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksIdDocumentsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.tasks)[':id']['documents']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksIdDocumentsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksIdDocumentsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':id'].documents.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTasksIdEventsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':id']['events']['index']['$get']>>,
) {
  return ['tasks', '/tasks/:id/events/', toValue(args)] as const
}

export function getTasksIdEventsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':id']['events']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksIdEventsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':id'].events.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':id']['events']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':id']['events']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksIdEventsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.tasks)[':id']['events']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksIdEventsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksIdEventsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':id'].events.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':id']['signatures']['index']['$get']>
  >,
) {
  return ['tasks', '/tasks/:id/signatures/', toValue(args)] as const
}

export function getTasksIdSignaturesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':id']['signatures']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksIdSignaturesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':id'].signatures.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':id']['signatures']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':id']['signatures']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksIdSignaturesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.tasks)[':id']['signatures']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksIdSignaturesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksIdSignaturesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':id'].signatures.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.time_location_features.index.$get>>,
) {
  return ['time_location_features', '/time_location_features/', toValue(args)] as const
}

export function getTimeLocationFeaturesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.time_location_features.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimeLocationFeaturesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.time_location_features.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTimeLocationFeaturesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.time_location_features.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.time_location_features.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.time_location_features.index.$get>>
              >
            >
          >,
          ReturnType<typeof getTimeLocationFeaturesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.time_location_features.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimeLocationFeaturesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimeLocationFeaturesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.time_location_features.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.time_location_features)[':id']['index']['$get']>
  >,
) {
  return ['time_location_features', '/time_location_features/:id/', toValue(args)] as const
}

export function getTimeLocationFeaturesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.time_location_features)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimeLocationFeaturesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.time_location_features[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.time_location_features)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTimeLocationFeaturesIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimeLocationFeaturesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimeLocationFeaturesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.time_location_features[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.time_location_features)[':id']['index']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.time_location_features)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.time_locations.index.$get>>,
) {
  return ['time_locations', '/time_locations/', toValue(args)] as const
}

export function getTimeLocationsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.time_locations.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimeLocationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.time_locations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTimeLocationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_locations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.time_locations.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.time_locations.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.time_locations.index.$get>>>
            >
          >,
          ReturnType<typeof getTimeLocationsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_locations.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTimeLocationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimeLocationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.time_locations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.time_locations)[':id']['index']['$get']>>,
) {
  return ['time_locations', '/time_locations/:id/', toValue(args)] as const
}

export function getTimeLocationsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.time_locations)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimeLocationsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.time_locations[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.time_locations)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.time_locations)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTimeLocationsIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.time_locations)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimeLocationsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimeLocationsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.time_locations[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrackersIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trackers.index.$get>>,
) {
  return ['trackers', '/trackers/', toValue(args)] as const
}

export function getTrackersIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trackers.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrackersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.trackers.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrackersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trackers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trackers.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trackers.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trackers.index.$get>>>>
          >,
          ReturnType<typeof getTrackersIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trackers.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTrackersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrackersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.trackers.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.trackers.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.trackers.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.trackers)[':id']['index']['$get']>>,
) {
  return ['trackers', '/trackers/:id/', toValue(args)] as const
}

export function getTrackersIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.trackers)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrackersIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.trackers[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrackersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.trackers)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTrackersIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrackersIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrackersIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.trackers[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.trackers)[':id']['public']['index']['$get']>
  >,
) {
  return ['trackers', '/trackers/:id/public/', toValue(args)] as const
}

export function getTrackersIdPublicIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.trackers)[':id']['public']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrackersIdPublicIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.trackers[':id'].public.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.trackers)[':id']['public']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.trackers)[':id']['public']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTrackersIdPublicIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.trackers)[':id']['public']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrackersIdPublicIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrackersIdPublicIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.trackers[':id'].public.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.index.$get>>,
) {
  return ['users', '/users/', toValue(args)] as const
}

export function getUsersIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
          >,
          ReturnType<typeof getUsersIndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['index']['$get']>>,
) {
  return ['users', '/users/:id/', toValue(args)] as const
}

export function getUsersIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$get']>
  >,
) {
  return ['users', '/users/:id/on_duty/', toValue(args)] as const
}

export function getUsersIdOnDutyIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdOnDutyIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].on_duty.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['on_duty']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdOnDutyIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['on_duty']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdOnDutyIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdOnDutyIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].on_duty.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.users_on_duty_log.index.$get>>,
) {
  return ['users_on_duty_log', '/users_on_duty_log/', toValue(args)] as const
}

export function getUsersOnDutyLogIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users_on_duty_log.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersOnDutyLogIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users_on_duty_log.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersOnDutyLogIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.users_on_duty_log.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users_on_duty_log.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users_on_duty_log.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users_on_duty_log.index.$get>>>
            >
          >,
          ReturnType<typeof getUsersOnDutyLogIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.users_on_duty_log.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersOnDutyLogIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersOnDutyLogIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users_on_duty_log.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users_on_duty_log)[':id']['index']['$get']>
  >,
) {
  return ['users_on_duty_log', '/users_on_duty_log/:id/', toValue(args)] as const
}

export function getUsersOnDutyLogIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users_on_duty_log)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersOnDutyLogIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users_on_duty_log[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users_on_duty_log)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users_on_duty_log)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersOnDutyLogIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.users_on_duty_log)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersOnDutyLogIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersOnDutyLogIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users_on_duty_log[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.index.$get>>,
) {
  return ['webhooks', '/webhooks/', toValue(args)] as const
}

export function getWebhooksIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
          >,
          ReturnType<typeof getWebhooksIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.webhooks.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>>,
) {
  return ['webhooks', '/webhooks/:id/', toValue(args)] as const
}

export function getWebhooksIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.worker_features.index.$get>>,
) {
  return ['worker_features', '/worker_features/', toValue(args)] as const
}

export function getWorkerFeaturesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.worker_features.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkerFeaturesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.worker_features.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkerFeaturesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker_features.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.worker_features.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.worker_features.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.worker_features.index.$get>>>
            >
          >,
          ReturnType<typeof getWorkerFeaturesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.worker_features.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkerFeaturesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkerFeaturesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.worker_features.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkerFeaturesUserIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.worker_features)[':user_id']['index']['$get']>
  >,
) {
  return ['worker_features', '/worker_features/:user_id/', toValue(args)] as const
}

export function getWorkerFeaturesUserIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.worker_features)[':user_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkerFeaturesUserIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.worker_features[':user_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.worker_features)[':user_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.worker_features)[':user_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkerFeaturesUserIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.worker_features)[':user_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkerFeaturesUserIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkerFeaturesUserIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.worker_features[':user_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkerTracksIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.worker_tracks.index.$get>>,
) {
  return ['worker_tracks', '/worker_tracks/', toValue(args)] as const
}

export function getWorkerTracksIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.worker_tracks.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkerTracksIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.worker_tracks.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkerTracksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker_tracks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.worker_tracks.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.worker_tracks.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.worker_tracks.index.$get>>>
            >
          >,
          ReturnType<typeof getWorkerTracksIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker_tracks.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWorkerTracksIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkerTracksIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.worker_tracks.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkingStateIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.working_state.index.$get>>,
) {
  return ['working_state', '/working_state/', toValue(args)] as const
}

export function getWorkingStateIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.working_state.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkingStateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.working_state.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkingStateIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.working_state.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.working_state.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.working_state.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.working_state.index.$get>>>
            >
          >,
          ReturnType<typeof getWorkingStateIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.working_state.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWorkingStateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkingStateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.working_state.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.working_state)[':id']['index']['$get']>>,
) {
  return ['working_state', '/working_state/:id/', toValue(args)] as const
}

export function getWorkingStateIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.working_state)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkingStateIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.working_state[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.working_state)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.working_state)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkingStateIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.working_state)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkingStateIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkingStateIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.working_state[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
