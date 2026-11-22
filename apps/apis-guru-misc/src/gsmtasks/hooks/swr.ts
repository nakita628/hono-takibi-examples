import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAccountRolesIndexKey(
  args: InferRequestType<typeof client.account_roles.index.$get>,
) {
  return ['account_roles', '/account_roles/', args] as const
}

export function useGetAccountRolesIndex<TError = unknown>(
  args: InferRequestType<typeof client.account_roles.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account_roles.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountRolesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account_roles.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account_roles.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountRolesIndex<TError = unknown>(
  args: InferRequestType<typeof client.account_roles.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account_roles.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountRolesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account_roles.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account_roles.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountRolesIndexKey() {
  return ['account_roles', '/account_roles/', 'POST'] as const
}

export function usePostAccountRolesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_roles.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account_roles.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountRolesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account_roles.index.$post> }) =>
        parseResponse(client.account_roles.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountRolesIdIndexKey(
  args: InferRequestType<(typeof client.account_roles)[':id']['index']['$get']>,
) {
  return ['account_roles', '/account_roles/:id/', args] as const
}

export function useGetAccountRolesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.account_roles)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$get']>>
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
        ? getGetAccountRolesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account_roles[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountRolesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.account_roles)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$get']>>
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
        ? getGetAccountRolesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account_roles[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountRolesIdIndexKey() {
  return ['account_roles', '/account_roles/:id/', 'PUT'] as const
}

export function usePutAccountRolesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account_roles)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountRolesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account_roles)[':id']['index']['$put']> },
      ) => parseResponse(client.account_roles[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountRolesIdIndexKey() {
  return ['account_roles', '/account_roles/:id/', 'DELETE'] as const
}

export function useDeleteAccountRolesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account_roles)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountRolesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account_roles)[':id']['index']['$delete']> },
      ) => parseResponse(client.account_roles[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountRolesIdIndexKey() {
  return ['account_roles', '/account_roles/:id/', 'PATCH'] as const
}

export function usePatchAccountRolesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account_roles)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account_roles)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountRolesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account_roles)[':id']['index']['$patch']> },
      ) => parseResponse(client.account_roles[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountRolesIdActivateIndexKey() {
  return ['account_roles', '/account_roles/:id/activate/', 'POST'] as const
}

export function usePostAccountRolesIdActivateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account_roles)[':id']['activate']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account_roles)[':id']['activate']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountRolesIdActivateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account_roles)[':id']['activate']['index']['$post']>
        },
      ) => parseResponse(client.account_roles[':id'].activate.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountRolesIdNotifyIndexKey() {
  return ['account_roles', '/account_roles/:id/notify/', 'POST'] as const
}

export function usePostAccountRolesIdNotifyIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account_roles)[':id']['notify']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account_roles)[':id']['notify']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountRolesIdNotifyIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account_roles)[':id']['notify']['index']['$post']>
        },
      ) => parseResponse(client.account_roles[':id'].notify.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountRolesIdTokenIndexKey(
  args: InferRequestType<(typeof client.account_roles)[':id']['token']['index']['$get']>,
) {
  return ['account_roles', '/account_roles/:id/token/', args] as const
}

export function useGetAccountRolesIdTokenIndex<TError = unknown>(
  args: InferRequestType<(typeof client.account_roles)[':id']['token']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_roles)[':id']['token']['index']['$get']>>
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
        ? getGetAccountRolesIdTokenIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_roles)[':id']['token']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account_roles[':id'].token.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountRolesIdTokenIndex<TError = unknown>(
  args: InferRequestType<(typeof client.account_roles)[':id']['token']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_roles)[':id']['token']['index']['$get']>>
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
        ? getGetAccountRolesIdTokenIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_roles)[':id']['token']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account_roles[':id'].token.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsIndexKey(args: InferRequestType<typeof client.accounts.index.$get>) {
  return ['accounts', '/accounts/', args] as const
}

export function useGetAccountsIndex<TError = unknown>(
  args: InferRequestType<typeof client.accounts.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsIndex<TError = unknown>(
  args: InferRequestType<typeof client.accounts.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsIdIndexKey(
  args: InferRequestType<(typeof client.accounts)[':id']['index']['$get']>,
) {
  return ['accounts', '/accounts/:id/', args] as const
}

export function useGetAccountsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$get']>>
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
        ? getGetAccountsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$get']>>
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
        ? getGetAccountsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsIdIndexKey() {
  return ['accounts', '/accounts/:id/', 'PUT'] as const
}

export function usePutAccountsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':id']['index']['$put']> },
      ) => parseResponse(client.accounts[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountsIdIndexKey() {
  return ['accounts', '/accounts/:id/', 'PATCH'] as const
}

export function usePatchAccountsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':id']['index']['$patch']> },
      ) => parseResponse(client.accounts[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsIdBraintreeCustomerIndexKey(
  args: InferRequestType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>,
) {
  return ['accounts', '/accounts/:id/braintree_customer/', args] as const
}

export function useGetAccountsIdBraintreeCustomerIndex<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>
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
        ? getGetAccountsIdBraintreeCustomerIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':id'].braintree_customer.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsIdBraintreeCustomerIndex<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>
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
        ? getGetAccountsIdBraintreeCustomerIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':id'].braintree_customer.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsIdChangeOwnerIndexKey() {
  return ['accounts', '/accounts/:id/change_owner/', 'POST'] as const
}

export function usePostAccountsIdChangeOwnerIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':id']['change_owner']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':id']['change_owner']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsIdChangeOwnerIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':id']['change_owner']['index']['$post']>
        },
      ) => parseResponse(client.accounts[':id'].change_owner.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsIdManagersIndexKey(
  args: InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$get']>,
) {
  return ['accounts', '/accounts/:id/managers/', args] as const
}

export function useGetAccountsIdManagersIndex<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':id']['managers']['index']['$get']>>
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
        ? getGetAccountsIdManagersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':id']['managers']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':id'].managers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsIdManagersIndex<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':id']['managers']['index']['$get']>>
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
        ? getGetAccountsIdManagersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':id']['managers']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':id'].managers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsIdManagersIndexKey() {
  return ['accounts', '/accounts/:id/managers/', 'POST'] as const
}

export function usePostAccountsIdManagersIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':id']['managers']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsIdManagersIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$post']> },
      ) => parseResponse(client.accounts[':id'].managers.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsIdManagersIndexKey() {
  return ['accounts', '/accounts/:id/managers/', 'DELETE'] as const
}

export function useDeleteAccountsIdManagersIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':id']['managers']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsIdManagersIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$delete']>
        },
      ) => parseResponse(client.accounts[':id'].managers.index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountsIdStripeAttachPaymentMethodIndexKey() {
  return ['accounts', '/accounts/:id/stripe_attach_payment_method/', 'PUT'] as const
}

export function usePutAccountsIdStripeAttachPaymentMethodIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':id']['stripe_attach_payment_method']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsIdStripeAttachPaymentMethodIndexKey()
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
            (typeof client.accounts)[':id']['stripe_attach_payment_method']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':id'].stripe_attach_payment_method.index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAccountsIdStripeCreateSetupIntentIndexKey() {
  return ['accounts', '/accounts/:id/stripe_create_setup_intent/', 'PUT'] as const
}

export function usePutAccountsIdStripeCreateSetupIntentIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.accounts)[':id']['stripe_create_setup_intent']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsIdStripeCreateSetupIntentIndexKey()
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
            (typeof client.accounts)[':id']['stripe_create_setup_intent']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':id'].stripe_create_setup_intent.index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsIdStripeCreateSetupIntentIndexKey() {
  return ['accounts', '/accounts/:id/stripe_create_setup_intent/', 'POST'] as const
}

export function usePostAccountsIdStripeCreateSetupIntentIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':id']['stripe_create_setup_intent']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsIdStripeCreateSetupIntentIndexKey()
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
            (typeof client.accounts)[':id']['stripe_create_setup_intent']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':id'].stripe_create_setup_intent.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAccountsIdStripeDetachPaymentMethodIndexKey() {
  return ['accounts', '/accounts/:id/stripe_detach_payment_method/', 'PUT'] as const
}

export function usePutAccountsIdStripeDetachPaymentMethodIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':id']['stripe_detach_payment_method']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsIdStripeDetachPaymentMethodIndexKey()
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
            (typeof client.accounts)[':id']['stripe_detach_payment_method']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':id'].stripe_detach_payment_method.index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsIdStripeGetPaymentMethodIndexKey(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']
  >,
) {
  return ['accounts', '/accounts/:id/stripe_get_payment_method/', args] as const
}

export function useGetAccountsIdStripeGetPaymentMethodIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsIdStripeGetPaymentMethodIndexKey(args)
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
                (typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']
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
          client.accounts[':id'].stripe_get_payment_method.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsIdStripeGetPaymentMethodIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsIdStripeGetPaymentMethodIndexKey(args)
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
                (typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']
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
          client.accounts[':id'].stripe_get_payment_method.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsIdStripeGetSetupAttemptIndexKey(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']
  >,
) {
  return ['accounts', '/accounts/:id/stripe_get_setup_attempt/', args] as const
}

export function useGetAccountsIdStripeGetSetupAttemptIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsIdStripeGetSetupAttemptIndexKey(args)
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
                (typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']
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
          client.accounts[':id'].stripe_get_setup_attempt.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsIdStripeGetSetupAttemptIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsIdStripeGetSetupAttemptIndexKey(args)
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
                (typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']
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
          client.accounts[':id'].stripe_get_setup_attempt.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsIdStripeGetSetupIntentIndexKey(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']
  >,
) {
  return ['accounts', '/accounts/:id/stripe_get_setup_intent/', args] as const
}

export function useGetAccountsIdStripeGetSetupIntentIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsIdStripeGetSetupIntentIndexKey(args)
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
                (typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']
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
          client.accounts[':id'].stripe_get_setup_intent.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsIdStripeGetSetupIntentIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsIdStripeGetSetupIntentIndexKey(args)
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
                (typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']
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
          client.accounts[':id'].stripe_get_setup_intent.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsIdStripePaymentMethodsIndexKey(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']
  >,
) {
  return ['accounts', '/accounts/:id/stripe_payment_methods/', args] as const
}

export function useGetAccountsIdStripePaymentMethodsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']>
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
        ? getGetAccountsIdStripePaymentMethodsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':id'].stripe_payment_methods.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsIdStripePaymentMethodsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']>
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
        ? getGetAccountsIdStripePaymentMethodsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':id'].stripe_payment_methods.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsIdStripeSetDefaultPaymentMethodIndexKey() {
  return ['accounts', '/accounts/:id/stripe_set_default_payment_method/', 'PUT'] as const
}

export function usePutAccountsIdStripeSetDefaultPaymentMethodIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':id']['stripe_set_default_payment_method']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsIdStripeSetDefaultPaymentMethodIndexKey()
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
            (typeof client.accounts)[':id']['stripe_set_default_payment_method']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':id'].stripe_set_default_payment_method.index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsIdStripeSetupIntentsIndexKey(
  args: InferRequestType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>,
) {
  return ['accounts', '/accounts/:id/stripe_setup_intents/', args] as const
}

export function useGetAccountsIdStripeSetupIntentsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>
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
        ? getGetAccountsIdStripeSetupIntentsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':id'].stripe_setup_intents.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsIdStripeSetupIntentsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>
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
        ? getGetAccountsIdStripeSetupIntentsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':id'].stripe_setup_intents.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsIdWorkersIndexKey(
  args: InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$get']>,
) {
  return ['accounts', '/accounts/:id/workers/', args] as const
}

export function useGetAccountsIdWorkersIndex<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':id']['workers']['index']['$get']>>
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
        ? getGetAccountsIdWorkersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':id']['workers']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':id'].workers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsIdWorkersIndex<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':id']['workers']['index']['$get']>>
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
        ? getGetAccountsIdWorkersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':id']['workers']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':id'].workers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsIdWorkersIndexKey() {
  return ['accounts', '/accounts/:id/workers/', 'POST'] as const
}

export function usePostAccountsIdWorkersIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':id']['workers']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsIdWorkersIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$post']> },
      ) => parseResponse(client.accounts[':id'].workers.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsIdWorkersIndexKey() {
  return ['accounts', '/accounts/:id/workers/', 'DELETE'] as const
}

export function useDeleteAccountsIdWorkersIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':id']['workers']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsIdWorkersIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$delete']>
        },
      ) => parseResponse(client.accounts[':id'].workers.index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAddonsIndexKey(args: InferRequestType<typeof client.addons.index.$get>) {
  return ['addons', '/addons/', args] as const
}

export function useGetAddonsIndex<TError = unknown>(
  args: InferRequestType<typeof client.addons.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddonsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addons.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddonsIndex<TError = unknown>(
  args: InferRequestType<typeof client.addons.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddonsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addons.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAddonsIdIndexKey(
  args: InferRequestType<(typeof client.addons)[':id']['index']['$get']>,
) {
  return ['addons', '/addons/:id/', args] as const
}

export function useGetAddonsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.addons)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.addons)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddonsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.addons)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addons[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddonsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.addons)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.addons)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddonsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.addons)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addons[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthenticateIndexKey() {
  return ['authenticate', '/authenticate/', 'POST'] as const
}

export function usePostAuthenticateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authenticate.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.authenticate.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthenticateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.authenticate.index.$post> }) =>
        parseResponse(client.authenticate.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBillingCustomersIndexKey(
  args: InferRequestType<typeof client.billing.customers.index.$get>,
) {
  return ['billing', '/billing/customers/', args] as const
}

export function useGetBillingCustomersIndex<TError = unknown>(
  args: InferRequestType<typeof client.billing.customers.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.billing.customers.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBillingCustomersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.billing.customers.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing.customers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingCustomersIndex<TError = unknown>(
  args: InferRequestType<typeof client.billing.customers.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.billing.customers.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBillingCustomersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.billing.customers.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing.customers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBillingCustomersIndexKey() {
  return ['billing', '/billing/customers/', 'POST'] as const
}

export function usePostBillingCustomersIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.customers.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.billing.customers.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBillingCustomersIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.billing.customers.index.$post> },
      ) => parseResponse(client.billing.customers.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBillingCustomersIdIndexKey(
  args: InferRequestType<(typeof client.billing.customers)[':id']['index']['$get']>,
) {
  return ['billing', '/billing/customers/:id/', args] as const
}

export function useGetBillingCustomersIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.billing.customers)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing.customers)[':id']['index']['$get']>>
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
        ? getGetBillingCustomersIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing.customers)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing.customers[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingCustomersIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.billing.customers)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing.customers)[':id']['index']['$get']>>
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
        ? getGetBillingCustomersIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing.customers)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing.customers[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBillingCustomersIdIndexKey() {
  return ['billing', '/billing/customers/:id/', 'PUT'] as const
}

export function usePutBillingCustomersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billing.customers)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.billing.customers)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBillingCustomersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.billing.customers)[':id']['index']['$put']> },
      ) => parseResponse(client.billing.customers[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBillingCustomersIdIndexKey() {
  return ['billing', '/billing/customers/:id/', 'PATCH'] as const
}

export function usePatchBillingCustomersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billing.customers)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.billing.customers)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBillingCustomersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.billing.customers)[':id']['index']['$patch']> },
      ) => parseResponse(client.billing.customers[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBillingCustomersIdClientTokenIndexKey(
  args: InferRequestType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>,
) {
  return ['billing', '/billing/customers/:id/client_token/', args] as const
}

export function useGetBillingCustomersIdClientTokenIndex<TError = unknown>(
  args: InferRequestType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>
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
        ? getGetBillingCustomersIdClientTokenIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.billing.customers[':id'].client_token.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingCustomersIdClientTokenIndex<TError = unknown>(
  args: InferRequestType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>
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
        ? getGetBillingCustomersIdClientTokenIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.billing.customers[':id'].client_token.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBillingInvoicesIndexKey(
  args: InferRequestType<typeof client.billing.invoices.index.$get>,
) {
  return ['billing', '/billing/invoices/', args] as const
}

export function useGetBillingInvoicesIndex<TError = unknown>(
  args: InferRequestType<typeof client.billing.invoices.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.billing.invoices.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBillingInvoicesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.billing.invoices.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing.invoices.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingInvoicesIndex<TError = unknown>(
  args: InferRequestType<typeof client.billing.invoices.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.billing.invoices.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBillingInvoicesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.billing.invoices.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing.invoices.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBillingInvoicesIdIndexKey(
  args: InferRequestType<(typeof client.billing.invoices)[':id']['index']['$get']>,
) {
  return ['billing', '/billing/invoices/:id/', args] as const
}

export function useGetBillingInvoicesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.billing.invoices)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing.invoices)[':id']['index']['$get']>>
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
        ? getGetBillingInvoicesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing.invoices)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing.invoices[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingInvoicesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.billing.invoices)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing.invoices)[':id']['index']['$get']>>
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
        ? getGetBillingInvoicesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing.invoices)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing.invoices[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBillingInvoicesIdIndexKey() {
  return ['billing', '/billing/invoices/:id/', 'PUT'] as const
}

export function usePutBillingInvoicesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billing.invoices)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.billing.invoices)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBillingInvoicesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.billing.invoices)[':id']['index']['$put']> },
      ) => parseResponse(client.billing.invoices[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBillingInvoicesIdIndexKey() {
  return ['billing', '/billing/invoices/:id/', 'PATCH'] as const
}

export function usePatchBillingInvoicesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billing.invoices)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.billing.invoices)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBillingInvoicesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.billing.invoices)[':id']['index']['$patch']> },
      ) => parseResponse(client.billing.invoices[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBillingInvoicesIdMarkAsPaidIndexKey() {
  return ['billing', '/billing/invoices/:id/mark_as_paid/', 'POST'] as const
}

export function usePostBillingInvoicesIdMarkAsPaidIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.billing.invoices)[':id']['mark_as_paid']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBillingInvoicesIdMarkAsPaidIndexKey()
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
            (typeof client.billing.invoices)[':id']['mark_as_paid']['index']['$post']
          >
        },
      ) =>
        parseResponse(client.billing.invoices[':id'].mark_as_paid.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBillingStripePaymentsIndexKey(
  args: InferRequestType<typeof client.billing.stripe_payments.index.$get>,
) {
  return ['billing', '/billing/stripe_payments/', args] as const
}

export function useGetBillingStripePaymentsIndex<TError = unknown>(
  args: InferRequestType<typeof client.billing.stripe_payments.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.billing.stripe_payments.index.$get>>
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
        ? getGetBillingStripePaymentsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.billing.stripe_payments.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing.stripe_payments.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingStripePaymentsIndex<TError = unknown>(
  args: InferRequestType<typeof client.billing.stripe_payments.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.billing.stripe_payments.index.$get>>
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
        ? getGetBillingStripePaymentsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.billing.stripe_payments.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing.stripe_payments.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBillingStripePaymentsIdIndexKey(
  args: InferRequestType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>,
) {
  return ['billing', '/billing/stripe_payments/:id/', args] as const
}

export function useGetBillingStripePaymentsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>>
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
        ? getGetBillingStripePaymentsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.billing.stripe_payments[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingStripePaymentsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>>
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
        ? getGetBillingStripePaymentsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.billing.stripe_payments[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBillingTransactionsIndexKey(
  args: InferRequestType<typeof client.billing.transactions.index.$get>,
) {
  return ['billing', '/billing/transactions/', args] as const
}

export function useGetBillingTransactionsIndex<TError = unknown>(
  args: InferRequestType<typeof client.billing.transactions.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.billing.transactions.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBillingTransactionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.billing.transactions.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing.transactions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingTransactionsIndex<TError = unknown>(
  args: InferRequestType<typeof client.billing.transactions.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.billing.transactions.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBillingTransactionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.billing.transactions.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing.transactions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBillingTransactionsIdIndexKey(
  args: InferRequestType<(typeof client.billing.transactions)[':id']['index']['$get']>,
) {
  return ['billing', '/billing/transactions/:id/', args] as const
}

export function useGetBillingTransactionsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.billing.transactions)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing.transactions)[':id']['index']['$get']>>
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
        ? getGetBillingTransactionsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing.transactions)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing.transactions[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingTransactionsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.billing.transactions)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing.transactions)[':id']['index']['$get']>>
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
        ? getGetBillingTransactionsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing.transactions)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing.transactions[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClientRolesIndexKey(
  args: InferRequestType<typeof client.client_roles.index.$get>,
) {
  return ['client_roles', '/client_roles/', args] as const
}

export function useGetClientRolesIndex<TError = unknown>(
  args: InferRequestType<typeof client.client_roles.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client_roles.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClientRolesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client_roles.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.client_roles.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClientRolesIndex<TError = unknown>(
  args: InferRequestType<typeof client.client_roles.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client_roles.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClientRolesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client_roles.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.client_roles.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClientRolesIndexKey() {
  return ['client_roles', '/client_roles/', 'POST'] as const
}

export function usePostClientRolesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client_roles.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.client_roles.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClientRolesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.client_roles.index.$post> }) =>
        parseResponse(client.client_roles.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClientRolesIdIndexKey(
  args: InferRequestType<(typeof client.client_roles)[':id']['index']['$get']>,
) {
  return ['client_roles', '/client_roles/:id/', args] as const
}

export function useGetClientRolesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.client_roles)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.client_roles)[':id']['index']['$get']>>
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
        ? getGetClientRolesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.client_roles)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.client_roles[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClientRolesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.client_roles)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.client_roles)[':id']['index']['$get']>>
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
        ? getGetClientRolesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.client_roles)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.client_roles[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutClientRolesIdIndexKey() {
  return ['client_roles', '/client_roles/:id/', 'PUT'] as const
}

export function usePutClientRolesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.client_roles)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.client_roles)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutClientRolesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.client_roles)[':id']['index']['$put']> },
      ) => parseResponse(client.client_roles[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchClientRolesIdIndexKey() {
  return ['client_roles', '/client_roles/:id/', 'PATCH'] as const
}

export function usePatchClientRolesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.client_roles)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.client_roles)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchClientRolesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.client_roles)[':id']['index']['$patch']> },
      ) => parseResponse(client.client_roles[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostClientRolesIdNotifyIndexKey() {
  return ['client_roles', '/client_roles/:id/notify/', 'POST'] as const
}

export function usePostClientRolesIdNotifyIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.client_roles)[':id']['notify']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.client_roles)[':id']['notify']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClientRolesIdNotifyIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.client_roles)[':id']['notify']['index']['$post']>
        },
      ) => parseResponse(client.client_roles[':id'].notify.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClientsIndexKey(args: InferRequestType<typeof client.clients.index.$get>) {
  return ['clients', '/clients/', args] as const
}

export function useGetClientsIndex<TError = unknown>(
  args: InferRequestType<typeof client.clients.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClientsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clients.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClientsIndex<TError = unknown>(
  args: InferRequestType<typeof client.clients.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClientsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clients.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClientsIndexKey() {
  return ['clients', '/clients/', 'POST'] as const
}

export function usePostClientsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.clients.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClientsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.clients.index.$post> }) =>
        parseResponse(client.clients.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClientsIdIndexKey(
  args: InferRequestType<(typeof client.clients)[':id']['index']['$get']>,
) {
  return ['clients', '/clients/:id/', args] as const
}

export function useGetClientsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.clients)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClientsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clients[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClientsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.clients)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClientsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clients[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutClientsIdIndexKey() {
  return ['clients', '/clients/:id/', 'PUT'] as const
}

export function usePutClientsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clients)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutClientsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.clients)[':id']['index']['$put']> },
      ) => parseResponse(client.clients[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchClientsIdIndexKey() {
  return ['clients', '/clients/:id/', 'PATCH'] as const
}

export function usePatchClientsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clients)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchClientsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.clients)[':id']['index']['$patch']> },
      ) => parseResponse(client.clients[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConfigurationsIndexKey(
  args: InferRequestType<typeof client.configurations.index.$get>,
) {
  return ['configurations', '/configurations/', args] as const
}

export function useGetConfigurationsIndex<TError = unknown>(
  args: InferRequestType<typeof client.configurations.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.configurations.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConfigurationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.configurations.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.configurations.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfigurationsIndex<TError = unknown>(
  args: InferRequestType<typeof client.configurations.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.configurations.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConfigurationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.configurations.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.configurations.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactAddressExportsIndexKey(
  args: InferRequestType<typeof client.contact_address_exports.index.$get>,
) {
  return ['contact_address_exports', '/contact_address_exports/', args] as const
}

export function useGetContactAddressExportsIndex<TError = unknown>(
  args: InferRequestType<typeof client.contact_address_exports.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.contact_address_exports.index.$get>>
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
        ? getGetContactAddressExportsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.contact_address_exports.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contact_address_exports.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactAddressExportsIndex<TError = unknown>(
  args: InferRequestType<typeof client.contact_address_exports.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.contact_address_exports.index.$get>>
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
        ? getGetContactAddressExportsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.contact_address_exports.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contact_address_exports.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactAddressImportIndexKey(
  args: InferRequestType<typeof client.contact_address_import.index.$get>,
) {
  return ['contact_address_import', '/contact_address_import/', args] as const
}

export function useGetContactAddressImportIndex<TError = unknown>(
  args: InferRequestType<typeof client.contact_address_import.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contact_address_import.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactAddressImportIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contact_address_import.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contact_address_import.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactAddressImportIndex<TError = unknown>(
  args: InferRequestType<typeof client.contact_address_import.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contact_address_import.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactAddressImportIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contact_address_import.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contact_address_import.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactAddressImportIndexKey() {
  return ['contact_address_import', '/contact_address_import/', 'POST'] as const
}

export function usePostContactAddressImportIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contact_address_import.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.contact_address_import.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactAddressImportIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.contact_address_import.index.$post> },
      ) => parseResponse(client.contact_address_import.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactAddressImportIdIndexKey(
  args: InferRequestType<(typeof client.contact_address_import)[':id']['index']['$get']>,
) {
  return ['contact_address_import', '/contact_address_import/:id/', args] as const
}

export function useGetContactAddressImportIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.contact_address_import)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contact_address_import)[':id']['index']['$get']>>
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
        ? getGetContactAddressImportIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contact_address_import)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contact_address_import[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactAddressImportIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.contact_address_import)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contact_address_import)[':id']['index']['$get']>>
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
        ? getGetContactAddressImportIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contact_address_import)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contact_address_import[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactAddressesIndexKey(
  args: InferRequestType<typeof client.contact_addresses.index.$get>,
) {
  return ['contact_addresses', '/contact_addresses/', args] as const
}

export function useGetContactAddressesIndex<TError = unknown>(
  args: InferRequestType<typeof client.contact_addresses.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contact_addresses.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactAddressesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contact_addresses.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contact_addresses.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactAddressesIndex<TError = unknown>(
  args: InferRequestType<typeof client.contact_addresses.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contact_addresses.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactAddressesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contact_addresses.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contact_addresses.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactAddressesIndexKey() {
  return ['contact_addresses', '/contact_addresses/', 'POST'] as const
}

export function usePostContactAddressesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.contact_addresses.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.contact_addresses.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactAddressesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.contact_addresses.index.$post> },
      ) => parseResponse(client.contact_addresses.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactAddressesIdIndexKey(
  args: InferRequestType<(typeof client.contact_addresses)[':id']['index']['$get']>,
) {
  return ['contact_addresses', '/contact_addresses/:id/', args] as const
}

export function useGetContactAddressesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.contact_addresses)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contact_addresses)[':id']['index']['$get']>>
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
        ? getGetContactAddressesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contact_addresses)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contact_addresses[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactAddressesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.contact_addresses)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contact_addresses)[':id']['index']['$get']>>
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
        ? getGetContactAddressesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contact_addresses)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contact_addresses[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutContactAddressesIdIndexKey() {
  return ['contact_addresses', '/contact_addresses/:id/', 'PUT'] as const
}

export function usePutContactAddressesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact_addresses)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contact_addresses)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactAddressesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.contact_addresses)[':id']['index']['$put']> },
      ) => parseResponse(client.contact_addresses[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchContactAddressesIdIndexKey() {
  return ['contact_addresses', '/contact_addresses/:id/', 'PATCH'] as const
}

export function usePatchContactAddressesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact_addresses)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contact_addresses)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchContactAddressesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.contact_addresses)[':id']['index']['$patch']> },
      ) => parseResponse(client.contact_addresses[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDevicesIndexKey(args: InferRequestType<typeof client.devices.index.$get>) {
  return ['devices', '/devices/', args] as const
}

export function useGetDevicesIndex<TError = unknown>(
  args: InferRequestType<typeof client.devices.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.devices.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesIndex<TError = unknown>(
  args: InferRequestType<typeof client.devices.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.devices.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDevicesIndexKey() {
  return ['devices', '/devices/', 'POST'] as const
}

export function usePostDevicesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.devices.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDevicesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.devices.index.$post> }) =>
        parseResponse(client.devices.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDevicesIdIndexKey(
  args: InferRequestType<(typeof client.devices)[':id']['index']['$get']>,
) {
  return ['devices', '/devices/:id/', args] as const
}

export function useGetDevicesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.devices)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.devices[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.devices)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.devices[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocsSchemaIndexKey(
  args: InferRequestType<typeof client.docs.schema.index.$get>,
) {
  return ['docs', '/docs/schema/', args] as const
}

export function useGetDocsSchemaIndex<TError = unknown>(
  args: InferRequestType<typeof client.docs.schema.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.schema.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDocsSchemaIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.schema.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docs.schema.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocsSchemaIndex<TError = unknown>(
  args: InferRequestType<typeof client.docs.schema.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.schema.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDocsSchemaIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.schema.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docs.schema.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocumentsIndexKey(
  args: InferRequestType<typeof client.documents.index.$get>,
) {
  return ['documents', '/documents/', args] as const
}

export function useGetDocumentsIndex<TError = unknown>(
  args: InferRequestType<typeof client.documents.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentsIndex<TError = unknown>(
  args: InferRequestType<typeof client.documents.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDocumentsIndexKey() {
  return ['documents', '/documents/', 'POST'] as const
}

export function usePostDocumentsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.documents.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.documents.index.$post> }) =>
        parseResponse(client.documents.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsBatchDeleteIndexKey() {
  return ['documents', '/documents/batch_delete/', 'POST'] as const
}

export function usePostDocumentsBatchDeleteIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.documents.batch_delete.index.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.documents.batch_delete.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsBatchDeleteIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.documents.batch_delete.index.$post> },
      ) => parseResponse(client.documents.batch_delete.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDocumentsIdIndexKey(
  args: InferRequestType<(typeof client.documents)[':id']['index']['$get']>,
) {
  return ['documents', '/documents/:id/', args] as const
}

export function useGetDocumentsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['index']['$get']>>
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
        ? getGetDocumentsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['index']['$get']>>
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
        ? getGetDocumentsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDocumentsIdIndexKey() {
  return ['documents', '/documents/:id/', 'DELETE'] as const
}

export function useDeleteDocumentsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.documents)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDocumentsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.documents)[':id']['index']['$delete']> },
      ) => parseResponse(client.documents[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmailsIndexKey(args: InferRequestType<typeof client.emails.index.$get>) {
  return ['emails', '/emails/', args] as const
}

export function useGetEmailsIndex<TError = unknown>(
  args: InferRequestType<typeof client.emails.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emails.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailsIndex<TError = unknown>(
  args: InferRequestType<typeof client.emails.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emails.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmailsIndexKey() {
  return ['emails', '/emails/', 'POST'] as const
}

export function usePostEmailsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.emails.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.emails.index.$post> }) =>
        parseResponse(client.emails.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmailsIdIndexKey(
  args: InferRequestType<(typeof client.emails)[':id']['index']['$get']>,
) {
  return ['emails', '/emails/:id/', args] as const
}

export function useGetEmailsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.emails)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emails[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.emails)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emails[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEmailsIdIndexKey() {
  return ['emails', '/emails/:id/', 'PUT'] as const
}

export function usePutEmailsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.emails)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmailsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.emails)[':id']['index']['$put']> },
      ) => parseResponse(client.emails[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmailsIdIndexKey() {
  return ['emails', '/emails/:id/', 'DELETE'] as const
}

export function useDeleteEmailsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emails)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.emails)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmailsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.emails)[':id']['index']['$delete']> },
      ) => parseResponse(client.emails[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEmailsIdIndexKey() {
  return ['emails', '/emails/:id/', 'PATCH'] as const
}

export function usePatchEmailsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.emails)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEmailsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.emails)[':id']['index']['$patch']> },
      ) => parseResponse(client.emails[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmailsIdResendIndexKey() {
  return ['emails', '/emails/:id/resend/', 'POST'] as const
}

export function usePostEmailsIdResendIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.emails)[':id']['resend']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.emails)[':id']['resend']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailsIdResendIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.emails)[':id']['resend']['index']['$post']> },
      ) => parseResponse(client.emails[':id'].resend.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExportsIndexKey(args: InferRequestType<typeof client.exports.index.$get>) {
  return ['exports', '/exports/', args] as const
}

export function useGetExportsIndex<TError = unknown>(
  args: InferRequestType<typeof client.exports.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExportsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.exports.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportsIndex<TError = unknown>(
  args: InferRequestType<typeof client.exports.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExportsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.exports.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExportsIndexKey() {
  return ['exports', '/exports/', 'POST'] as const
}

export function usePostExportsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.index.$post> }) =>
        parseResponse(client.exports.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExportsIdIndexKey(
  args: InferRequestType<(typeof client.exports)[':id']['index']['$get']>,
) {
  return ['exports', '/exports/:id/', args] as const
}

export function useGetExportsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.exports)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExportsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.exports[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.exports)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExportsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.exports[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutExportsIdIndexKey() {
  return ['exports', '/exports/:id/', 'PUT'] as const
}

export function usePutExportsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.exports)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutExportsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.exports)[':id']['index']['$put']> },
      ) => parseResponse(client.exports[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteExportsIdIndexKey() {
  return ['exports', '/exports/:id/', 'DELETE'] as const
}

export function useDeleteExportsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.exports)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.exports)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteExportsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.exports)[':id']['index']['$delete']> },
      ) => parseResponse(client.exports[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchExportsIdIndexKey() {
  return ['exports', '/exports/:id/', 'PATCH'] as const
}

export function usePatchExportsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.exports)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchExportsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.exports)[':id']['index']['$patch']> },
      ) => parseResponse(client.exports[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFileUploadsIndexKey(
  args: InferRequestType<typeof client.file_uploads.index.$get>,
) {
  return ['file_uploads', '/file_uploads/', args] as const
}

export function useGetFileUploadsIndex<TError = unknown>(
  args: InferRequestType<typeof client.file_uploads.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file_uploads.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFileUploadsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file_uploads.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file_uploads.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileUploadsIndex<TError = unknown>(
  args: InferRequestType<typeof client.file_uploads.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file_uploads.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFileUploadsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file_uploads.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file_uploads.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFileUploadsIndexKey() {
  return ['file_uploads', '/file_uploads/', 'POST'] as const
}

export function usePostFileUploadsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file_uploads.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.file_uploads.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileUploadsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.file_uploads.index.$post> }) =>
        parseResponse(client.file_uploads.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFileUploadsIdIndexKey(
  args: InferRequestType<(typeof client.file_uploads)[':id']['index']['$get']>,
) {
  return ['file_uploads', '/file_uploads/:id/', args] as const
}

export function useGetFileUploadsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.file_uploads)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_uploads)[':id']['index']['$get']>>
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
        ? getGetFileUploadsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_uploads)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file_uploads[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileUploadsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.file_uploads)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_uploads)[':id']['index']['$get']>>
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
        ? getGetFileUploadsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_uploads)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file_uploads[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormrulesIndexKey(
  args: InferRequestType<typeof client.formrules.index.$get>,
) {
  return ['formrules', '/formrules/', args] as const
}

export function useGetFormrulesIndex<TError = unknown>(
  args: InferRequestType<typeof client.formrules.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formrules.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFormrulesIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formrules.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.formrules.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormrulesIndex<TError = unknown>(
  args: InferRequestType<typeof client.formrules.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formrules.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFormrulesIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formrules.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.formrules.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFormrulesIndexKey() {
  return ['formrules', '/formrules/', 'POST'] as const
}

export function usePostFormrulesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formrules.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.formrules.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFormrulesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.formrules.index.$post> }) =>
        parseResponse(client.formrules.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFormrulesIdIndexKey(
  args: InferRequestType<(typeof client.formrules)[':id']['index']['$get']>,
) {
  return ['formrules', '/formrules/:id/', args] as const
}

export function useGetFormrulesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.formrules)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$get']>>
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
        ? getGetFormrulesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.formrules[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormrulesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.formrules)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$get']>>
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
        ? getGetFormrulesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.formrules[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFormrulesIdIndexKey() {
  return ['formrules', '/formrules/:id/', 'PUT'] as const
}

export function usePutFormrulesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.formrules)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFormrulesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.formrules)[':id']['index']['$put']> },
      ) => parseResponse(client.formrules[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFormrulesIdIndexKey() {
  return ['formrules', '/formrules/:id/', 'DELETE'] as const
}

export function useDeleteFormrulesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.formrules)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFormrulesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.formrules)[':id']['index']['$delete']> },
      ) => parseResponse(client.formrules[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFormrulesIdIndexKey() {
  return ['formrules', '/formrules/:id/', 'PATCH'] as const
}

export function usePatchFormrulesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.formrules)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.formrules)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFormrulesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.formrules)[':id']['index']['$patch']> },
      ) => parseResponse(client.formrules[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIntegrationsIndexKey() {
  return ['integrations', '/integrations/', 'POST'] as const
}

export function usePostIntegrationsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.integrations.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntegrationsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.integrations.index.$post> }) =>
        parseResponse(client.integrations.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetafieldsIndexKey(
  args: InferRequestType<typeof client.metafields.index.$get>,
) {
  return ['metafields', '/metafields/', args] as const
}

export function useGetMetafieldsIndex<TError = unknown>(
  args: InferRequestType<typeof client.metafields.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metafields.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetafieldsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metafields.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metafields.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetafieldsIndex<TError = unknown>(
  args: InferRequestType<typeof client.metafields.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metafields.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetafieldsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metafields.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metafields.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMetafieldsIndexKey() {
  return ['metafields', '/metafields/', 'POST'] as const
}

export function usePostMetafieldsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metafields.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.metafields.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetafieldsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.metafields.index.$post> }) =>
        parseResponse(client.metafields.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetafieldsIdIndexKey(
  args: InferRequestType<(typeof client.metafields)[':id']['index']['$get']>,
) {
  return ['metafields', '/metafields/:id/', args] as const
}

export function useGetMetafieldsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.metafields)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$get']>>
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
        ? getGetMetafieldsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metafields[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetafieldsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.metafields)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$get']>>
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
        ? getGetMetafieldsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metafields[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMetafieldsIdIndexKey() {
  return ['metafields', '/metafields/:id/', 'PUT'] as const
}

export function usePutMetafieldsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.metafields)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMetafieldsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.metafields)[':id']['index']['$put']> },
      ) => parseResponse(client.metafields[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMetafieldsIdIndexKey() {
  return ['metafields', '/metafields/:id/', 'DELETE'] as const
}

export function useDeleteMetafieldsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.metafields)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMetafieldsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.metafields)[':id']['index']['$delete']> },
      ) => parseResponse(client.metafields[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMetafieldsIdIndexKey() {
  return ['metafields', '/metafields/:id/', 'PATCH'] as const
}

export function usePatchMetafieldsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metafields)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.metafields)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMetafieldsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.metafields)[':id']['index']['$patch']> },
      ) => parseResponse(client.metafields[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationTemplatesIndexKey(
  args: InferRequestType<typeof client.notification_templates.index.$get>,
) {
  return ['notification_templates', '/notification_templates/', args] as const
}

export function useGetNotificationTemplatesIndex<TError = unknown>(
  args: InferRequestType<typeof client.notification_templates.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_templates.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_templates.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notification_templates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationTemplatesIndex<TError = unknown>(
  args: InferRequestType<typeof client.notification_templates.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_templates.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notification_templates.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notification_templates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationTemplatesIndexKey() {
  return ['notification_templates', '/notification_templates/', 'POST'] as const
}

export function usePostNotificationTemplatesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notification_templates.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.notification_templates.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationTemplatesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.notification_templates.index.$post> },
      ) => parseResponse(client.notification_templates.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationTemplatesIdIndexKey(
  args: InferRequestType<(typeof client.notification_templates)[':id']['index']['$get']>,
) {
  return ['notification_templates', '/notification_templates/:id/', args] as const
}

export function useGetNotificationTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.notification_templates)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$get']>>
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
        ? getGetNotificationTemplatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notification_templates[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.notification_templates)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$get']>>
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
        ? getGetNotificationTemplatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notification_templates[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNotificationTemplatesIdIndexKey() {
  return ['notification_templates', '/notification_templates/:id/', 'PUT'] as const
}

export function usePutNotificationTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notification_templates)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNotificationTemplatesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.notification_templates)[':id']['index']['$put']>
        },
      ) => parseResponse(client.notification_templates[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNotificationTemplatesIdIndexKey() {
  return ['notification_templates', '/notification_templates/:id/', 'DELETE'] as const
}

export function useDeleteNotificationTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.notification_templates)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNotificationTemplatesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.notification_templates)[':id']['index']['$delete']>
        },
      ) => parseResponse(client.notification_templates[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchNotificationTemplatesIdIndexKey() {
  return ['notification_templates', '/notification_templates/:id/', 'PATCH'] as const
}

export function usePatchNotificationTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notification_templates)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notification_templates)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNotificationTemplatesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.notification_templates)[':id']['index']['$patch']>
        },
      ) => parseResponse(client.notification_templates[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNotificationTemplatesIdRenderIndexKey() {
  return ['notification_templates', '/notification_templates/:id/render/', 'POST'] as const
}

export function usePostNotificationTemplatesIdRenderIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.notification_templates)[':id']['render']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationTemplatesIdRenderIndexKey()
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
            (typeof client.notification_templates)[':id']['render']['index']['$post']
          >
        },
      ) =>
        parseResponse(client.notification_templates[':id'].render.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsIndexKey(
  args: InferRequestType<typeof client.notifications.index.$get>,
) {
  return ['notifications', '/notifications/', args] as const
}

export function useGetNotificationsIndex<TError = unknown>(
  args: InferRequestType<typeof client.notifications.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notifications.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notifications.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIndex<TError = unknown>(
  args: InferRequestType<typeof client.notifications.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notifications.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notifications.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationsIndexKey() {
  return ['notifications', '/notifications/', 'POST'] as const
}

export function usePostNotificationsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.notifications.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.notifications.index.$post> }) =>
        parseResponse(client.notifications.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsIdIndexKey(
  args: InferRequestType<(typeof client.notifications)[':id']['index']['$get']>,
) {
  return ['notifications', '/notifications/:id/', args] as const
}

export function useGetNotificationsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['index']['$get']>>
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
        ? getGetNotificationsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['index']['$get']>>
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
        ? getGetNotificationsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrdersIndexKey(args: InferRequestType<typeof client.orders.index.$get>) {
  return ['orders', '/orders/', args] as const
}

export function useGetOrdersIndex<TError = unknown>(
  args: InferRequestType<typeof client.orders.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrdersIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orders.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrdersIndex<TError = unknown>(
  args: InferRequestType<typeof client.orders.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrdersIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orders.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrdersIndexKey() {
  return ['orders', '/orders/', 'POST'] as const
}

export function usePostOrdersIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.orders.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.orders.index.$post> }) =>
        parseResponse(client.orders.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrdersIdIndexKey(
  args: InferRequestType<(typeof client.orders)[':id']['index']['$get']>,
) {
  return ['orders', '/orders/:id/', args] as const
}

export function useGetOrdersIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.orders)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrdersIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orders[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrdersIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.orders)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrdersIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orders[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrdersIdIndexKey() {
  return ['orders', '/orders/:id/', 'PUT'] as const
}

export function usePutOrdersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrdersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orders)[':id']['index']['$put']> },
      ) => parseResponse(client.orders[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOrdersIdIndexKey() {
  return ['orders', '/orders/:id/', 'PATCH'] as const
}

export function usePatchOrdersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrdersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orders)[':id']['index']['$patch']> },
      ) => parseResponse(client.orders[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPasswordChangeIndexKey() {
  return ['password_change', '/password_change/', 'POST'] as const
}

export function usePostPasswordChangeIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.password_change.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.password_change.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPasswordChangeIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.password_change.index.$post> },
      ) => parseResponse(client.password_change.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPasswordResetIndexKey() {
  return ['password_reset', '/password_reset/', 'POST'] as const
}

export function usePostPasswordResetIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.password_reset.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.password_reset.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPasswordResetIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.password_reset.index.$post> },
      ) => parseResponse(client.password_reset.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPasswordResetConfirmIndexKey() {
  return ['password_reset_confirm', '/password_reset_confirm/', 'POST'] as const
}

export function usePostPasswordResetConfirmIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.password_reset_confirm.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.password_reset_confirm.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPasswordResetConfirmIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.password_reset_confirm.index.$post> },
      ) => parseResponse(client.password_reset_confirm.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPushNotificationsIndexKey(
  args: InferRequestType<typeof client.push_notifications.index.$get>,
) {
  return ['push_notifications', '/push_notifications/', args] as const
}

export function useGetPushNotificationsIndex<TError = unknown>(
  args: InferRequestType<typeof client.push_notifications.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.push_notifications.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPushNotificationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.push_notifications.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.push_notifications.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPushNotificationsIndex<TError = unknown>(
  args: InferRequestType<typeof client.push_notifications.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.push_notifications.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPushNotificationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.push_notifications.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.push_notifications.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPushNotificationsIndexKey() {
  return ['push_notifications', '/push_notifications/', 'POST'] as const
}

export function usePostPushNotificationsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.push_notifications.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.push_notifications.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPushNotificationsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.push_notifications.index.$post> },
      ) => parseResponse(client.push_notifications.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPushNotificationsIdIndexKey(
  args: InferRequestType<(typeof client.push_notifications)[':id']['index']['$get']>,
) {
  return ['push_notifications', '/push_notifications/:id/', args] as const
}

export function useGetPushNotificationsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.push_notifications)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$get']>>
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
        ? getGetPushNotificationsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.push_notifications[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPushNotificationsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.push_notifications)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$get']>>
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
        ? getGetPushNotificationsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.push_notifications[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPushNotificationsIdIndexKey() {
  return ['push_notifications', '/push_notifications/:id/', 'PUT'] as const
}

export function usePutPushNotificationsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.push_notifications)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPushNotificationsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.push_notifications)[':id']['index']['$put']> },
      ) => parseResponse(client.push_notifications[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePushNotificationsIdIndexKey() {
  return ['push_notifications', '/push_notifications/:id/', 'DELETE'] as const
}

export function useDeletePushNotificationsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.push_notifications)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePushNotificationsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.push_notifications)[':id']['index']['$delete']> },
      ) => parseResponse(client.push_notifications[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPushNotificationsIdIndexKey() {
  return ['push_notifications', '/push_notifications/:id/', 'PATCH'] as const
}

export function usePatchPushNotificationsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.push_notifications)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.push_notifications)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPushNotificationsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.push_notifications)[':id']['index']['$patch']> },
      ) => parseResponse(client.push_notifications[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPushNotificationsIdResendIndexKey() {
  return ['push_notifications', '/push_notifications/:id/resend/', 'POST'] as const
}

export function usePostPushNotificationsIdResendIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.push_notifications)[':id']['resend']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.push_notifications)[':id']['resend']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPushNotificationsIdResendIndexKey()
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
            (typeof client.push_notifications)[':id']['resend']['index']['$post']
          >
        },
      ) => parseResponse(client.push_notifications[':id'].resend.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecurrencesIndexKey(
  args: InferRequestType<typeof client.recurrences.index.$get>,
) {
  return ['recurrences', '/recurrences/', args] as const
}

export function useGetRecurrencesIndex<TError = unknown>(
  args: InferRequestType<typeof client.recurrences.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recurrences.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRecurrencesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recurrences.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recurrences.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecurrencesIndex<TError = unknown>(
  args: InferRequestType<typeof client.recurrences.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recurrences.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRecurrencesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recurrences.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recurrences.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRecurrencesIndexKey() {
  return ['recurrences', '/recurrences/', 'POST'] as const
}

export function usePostRecurrencesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recurrences.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.recurrences.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecurrencesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.recurrences.index.$post> }) =>
        parseResponse(client.recurrences.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecurrencesIdIndexKey(
  args: InferRequestType<(typeof client.recurrences)[':id']['index']['$get']>,
) {
  return ['recurrences', '/recurrences/:id/', args] as const
}

export function useGetRecurrencesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.recurrences)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$get']>>
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
        ? getGetRecurrencesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recurrences[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecurrencesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.recurrences)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$get']>>
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
        ? getGetRecurrencesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recurrences[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRecurrencesIdIndexKey() {
  return ['recurrences', '/recurrences/:id/', 'PUT'] as const
}

export function usePutRecurrencesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.recurrences)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRecurrencesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.recurrences)[':id']['index']['$put']> },
      ) => parseResponse(client.recurrences[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRecurrencesIdIndexKey() {
  return ['recurrences', '/recurrences/:id/', 'PATCH'] as const
}

export function usePatchRecurrencesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recurrences)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.recurrences)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRecurrencesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.recurrences)[':id']['index']['$patch']> },
      ) => parseResponse(client.recurrences[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRegisterIndexKey() {
  return ['register', '/register/', 'POST'] as const
}

export function usePostRegisterIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.register.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.register.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegisterIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.register.index.$post> }) =>
        parseResponse(client.register.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportsTasksStatesCountIndexKey(
  args: InferRequestType<typeof client.reports.tasks.states_count.index.$get>,
) {
  return ['reports', '/reports/tasks/states_count/', args] as const
}

export function useGetReportsTasksStatesCountIndex<TError = unknown>(
  args: InferRequestType<typeof client.reports.tasks.states_count.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.reports.tasks.states_count.index.$get>>
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
        ? getGetReportsTasksStatesCountIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.reports.tasks.states_count.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.tasks.states_count.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsTasksStatesCountIndex<TError = unknown>(
  args: InferRequestType<typeof client.reports.tasks.states_count.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.reports.tasks.states_count.index.$get>>
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
        ? getGetReportsTasksStatesCountIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.reports.tasks.states_count.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.tasks.states_count.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReviewsIndexKey(args: InferRequestType<typeof client.reviews.index.$get>) {
  return ['reviews', '/reviews/', args] as const
}

export function useGetReviewsIndex<TError = unknown>(
  args: InferRequestType<typeof client.reviews.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReviewsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reviews.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReviewsIndex<TError = unknown>(
  args: InferRequestType<typeof client.reviews.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReviewsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reviews.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReviewsIndexKey() {
  return ['reviews', '/reviews/', 'POST'] as const
}

export function usePostReviewsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.reviews.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReviewsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reviews.index.$post> }) =>
        parseResponse(client.reviews.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReviewsIdIndexKey(
  args: InferRequestType<(typeof client.reviews)[':id']['index']['$get']>,
) {
  return ['reviews', '/reviews/:id/', args] as const
}

export function useGetReviewsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.reviews)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReviewsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reviews[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReviewsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.reviews)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReviewsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reviews[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRouteOptimizationsIndexKey(
  args: InferRequestType<typeof client.route_optimizations.index.$get>,
) {
  return ['route_optimizations', '/route_optimizations/', args] as const
}

export function useGetRouteOptimizationsIndex<TError = unknown>(
  args: InferRequestType<typeof client.route_optimizations.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.route_optimizations.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRouteOptimizationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.route_optimizations.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.route_optimizations.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRouteOptimizationsIndex<TError = unknown>(
  args: InferRequestType<typeof client.route_optimizations.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.route_optimizations.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRouteOptimizationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.route_optimizations.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.route_optimizations.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRouteOptimizationsIndexKey() {
  return ['route_optimizations', '/route_optimizations/', 'POST'] as const
}

export function usePostRouteOptimizationsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.route_optimizations.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.route_optimizations.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRouteOptimizationsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.route_optimizations.index.$post> },
      ) => parseResponse(client.route_optimizations.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRouteOptimizationsIdIndexKey(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['index']['$get']>,
) {
  return ['route_optimizations', '/route_optimizations/:id/', args] as const
}

export function useGetRouteOptimizationsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.route_optimizations)[':id']['index']['$get']>>
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
        ? getGetRouteOptimizationsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.route_optimizations)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.route_optimizations[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRouteOptimizationsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.route_optimizations)[':id']['index']['$get']>>
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
        ? getGetRouteOptimizationsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.route_optimizations)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.route_optimizations[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRouteOptimizationsIdCommitIndexKey() {
  return ['route_optimizations', '/route_optimizations/:id/commit/', 'POST'] as const
}

export function usePostRouteOptimizationsIdCommitIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.route_optimizations)[':id']['commit']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRouteOptimizationsIdCommitIndexKey()
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
            (typeof client.route_optimizations)[':id']['commit']['index']['$post']
          >
        },
      ) => parseResponse(client.route_optimizations[':id'].commit.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRouteOptimizationsIdResultsIndexKey(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>,
) {
  return ['route_optimizations', '/route_optimizations/:id/results/', args] as const
}

export function useGetRouteOptimizationsIdResultsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>
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
        ? getGetRouteOptimizationsIdResultsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.route_optimizations[':id'].results.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRouteOptimizationsIdResultsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>
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
        ? getGetRouteOptimizationsIdResultsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.route_optimizations[':id'].results.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRouteOptimizationsIdRoutesIndexKey(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>,
) {
  return ['route_optimizations', '/route_optimizations/:id/routes/', args] as const
}

export function useGetRouteOptimizationsIdRoutesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>
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
        ? getGetRouteOptimizationsIdRoutesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.route_optimizations[':id'].routes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRouteOptimizationsIdRoutesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>
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
        ? getGetRouteOptimizationsIdRoutesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.route_optimizations[':id'].routes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRouteOptimizationsIdRoutesIndexKey() {
  return ['route_optimizations', '/route_optimizations/:id/routes/', 'POST'] as const
}

export function usePostRouteOptimizationsIdRoutesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.route_optimizations)[':id']['routes']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRouteOptimizationsIdRoutesIndexKey()
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
            (typeof client.route_optimizations)[':id']['routes']['index']['$post']
          >
        },
      ) => parseResponse(client.route_optimizations[':id'].routes.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRouteOptimizationsIdScheduleIndexKey() {
  return ['route_optimizations', '/route_optimizations/:id/schedule/', 'POST'] as const
}

export function usePostRouteOptimizationsIdScheduleIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.route_optimizations)[':id']['schedule']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRouteOptimizationsIdScheduleIndexKey()
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
            (typeof client.route_optimizations)[':id']['schedule']['index']['$post']
          >
        },
      ) =>
        parseResponse(client.route_optimizations[':id'].schedule.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoutesIndexKey(args: InferRequestType<typeof client.routes.index.$get>) {
  return ['routes', '/routes/', args] as const
}

export function useGetRoutesIndex<TError = unknown>(
  args: InferRequestType<typeof client.routes.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoutesIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.routes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoutesIndex<TError = unknown>(
  args: InferRequestType<typeof client.routes.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoutesIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.routes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRoutesIndexKey() {
  return ['routes', '/routes/', 'POST'] as const
}

export function usePostRoutesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.routes.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoutesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.routes.index.$post> }) =>
        parseResponse(client.routes.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoutesIdIndexKey(
  args: InferRequestType<(typeof client.routes)[':id']['index']['$get']>,
) {
  return ['routes', '/routes/:id/', args] as const
}

export function useGetRoutesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.routes)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoutesIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.routes[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoutesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.routes)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoutesIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.routes[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRoutesIdIndexKey() {
  return ['routes', '/routes/:id/', 'PUT'] as const
}

export function usePutRoutesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.routes)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRoutesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.routes)[':id']['index']['$put']> },
      ) => parseResponse(client.routes[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRoutesIdIndexKey() {
  return ['routes', '/routes/:id/', 'DELETE'] as const
}

export function useDeleteRoutesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routes)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.routes)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRoutesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.routes)[':id']['index']['$delete']> },
      ) => parseResponse(client.routes[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRoutesIdIndexKey() {
  return ['routes', '/routes/:id/', 'PATCH'] as const
}

export function usePatchRoutesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.routes)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoutesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.routes)[':id']['index']['$patch']> },
      ) => parseResponse(client.routes[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScenesDashboardIndexKey(
  args: InferRequestType<typeof client.scenes.dashboard.index.$get>,
) {
  return ['scenes', '/scenes/dashboard/', args] as const
}

export function useGetScenesDashboardIndex<TError = unknown>(
  args: InferRequestType<typeof client.scenes.dashboard.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenes.dashboard.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetScenesDashboardIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenes.dashboard.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scenes.dashboard.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScenesDashboardIndex<TError = unknown>(
  args: InferRequestType<typeof client.scenes.dashboard.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenes.dashboard.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetScenesDashboardIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenes.dashboard.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scenes.dashboard.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScenesOrderListIndexKey(
  args: InferRequestType<typeof client.scenes.order_list.index.$get>,
) {
  return ['scenes', '/scenes/order_list/', args] as const
}

export function useGetScenesOrderListIndex<TError = unknown>(
  args: InferRequestType<typeof client.scenes.order_list.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenes.order_list.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetScenesOrderListIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenes.order_list.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scenes.order_list.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScenesOrderListIndex<TError = unknown>(
  args: InferRequestType<typeof client.scenes.order_list.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenes.order_list.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetScenesOrderListIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenes.order_list.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scenes.order_list.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScenesRecurrenceListIndexKey(
  args: InferRequestType<typeof client.scenes.recurrence_list.index.$get>,
) {
  return ['scenes', '/scenes/recurrence_list/', args] as const
}

export function useGetScenesRecurrenceListIndex<TError = unknown>(
  args: InferRequestType<typeof client.scenes.recurrence_list.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenes.recurrence_list.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetScenesRecurrenceListIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenes.recurrence_list.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scenes.recurrence_list.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScenesRecurrenceListIndex<TError = unknown>(
  args: InferRequestType<typeof client.scenes.recurrence_list.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenes.recurrence_list.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetScenesRecurrenceListIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenes.recurrence_list.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scenes.recurrence_list.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScenesTaskListIndexKey(
  args: InferRequestType<typeof client.scenes.task_list.index.$get>,
) {
  return ['scenes', '/scenes/task_list/', args] as const
}

export function useGetScenesTaskListIndex<TError = unknown>(
  args: InferRequestType<typeof client.scenes.task_list.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenes.task_list.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetScenesTaskListIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenes.task_list.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scenes.task_list.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScenesTaskListIndex<TError = unknown>(
  args: InferRequestType<typeof client.scenes.task_list.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenes.task_list.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetScenesTaskListIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenes.task_list.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scenes.task_list.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSignaturesIndexKey(
  args: InferRequestType<typeof client.signatures.index.$get>,
) {
  return ['signatures', '/signatures/', args] as const
}

export function useGetSignaturesIndex<TError = unknown>(
  args: InferRequestType<typeof client.signatures.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signatures.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSignaturesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signatures.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.signatures.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSignaturesIndex<TError = unknown>(
  args: InferRequestType<typeof client.signatures.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signatures.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSignaturesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signatures.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.signatures.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSignaturesIndexKey() {
  return ['signatures', '/signatures/', 'POST'] as const
}

export function usePostSignaturesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signatures.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.signatures.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignaturesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.signatures.index.$post> }) =>
        parseResponse(client.signatures.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSignaturesBatchDeleteIndexKey() {
  return ['signatures', '/signatures/batch_delete/', 'POST'] as const
}

export function usePostSignaturesBatchDeleteIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.signatures.batch_delete.index.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.signatures.batch_delete.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignaturesBatchDeleteIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.signatures.batch_delete.index.$post> },
      ) => parseResponse(client.signatures.batch_delete.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSignaturesIdIndexKey(
  args: InferRequestType<(typeof client.signatures)[':id']['index']['$get']>,
) {
  return ['signatures', '/signatures/:id/', args] as const
}

export function useGetSignaturesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.signatures)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.signatures)[':id']['index']['$get']>>
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
        ? getGetSignaturesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.signatures)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.signatures[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSignaturesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.signatures)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.signatures)[':id']['index']['$get']>>
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
        ? getGetSignaturesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.signatures)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.signatures[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSignaturesIdIndexKey() {
  return ['signatures', '/signatures/:id/', 'DELETE'] as const
}

export function useDeleteSignaturesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.signatures)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.signatures)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSignaturesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.signatures)[':id']['index']['$delete']> },
      ) => parseResponse(client.signatures[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSmsIndexKey(args: InferRequestType<typeof client.sms.index.$get>) {
  return ['sms', '/sms/', args] as const
}

export function useGetSmsIndex<TError = unknown>(
  args: InferRequestType<typeof client.sms.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sms.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsIndex<TError = unknown>(
  args: InferRequestType<typeof client.sms.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sms.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSmsIndexKey() {
  return ['sms', '/sms/', 'POST'] as const
}

export function usePostSmsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.index.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sms.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sms.index.$post> }) =>
        parseResponse(client.sms.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSmsIdIndexKey(
  args: InferRequestType<(typeof client.sms)[':id']['index']['$get']>,
) {
  return ['sms', '/sms/:id/', args] as const
}

export function useGetSmsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.sms)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sms[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.sms)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sms[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSmsIdIndexKey() {
  return ['sms', '/sms/:id/', 'PUT'] as const
}

export function usePutSmsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sms)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSmsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sms)[':id']['index']['$put']> },
      ) => parseResponse(client.sms[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSmsIdIndexKey() {
  return ['sms', '/sms/:id/', 'DELETE'] as const
}

export function useDeleteSmsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sms)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSmsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sms)[':id']['index']['$delete']> },
      ) => parseResponse(client.sms[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSmsIdIndexKey() {
  return ['sms', '/sms/:id/', 'PATCH'] as const
}

export function usePatchSmsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sms)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSmsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sms)[':id']['index']['$patch']> },
      ) => parseResponse(client.sms[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSmsIdResendIndexKey() {
  return ['sms', '/sms/:id/resend/', 'POST'] as const
}

export function usePostSmsIdResendIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)[':id']['resend']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sms)[':id']['resend']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsIdResendIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sms)[':id']['resend']['index']['$post']> },
      ) => parseResponse(client.sms[':id'].resend.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTaskAddressFeaturesIndexKey(
  args: InferRequestType<typeof client.task_address_features.index.$get>,
) {
  return ['task_address_features', '/task_address_features/', args] as const
}

export function useGetTaskAddressFeaturesIndex<TError = unknown>(
  args: InferRequestType<typeof client.task_address_features.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_address_features.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskAddressFeaturesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_address_features.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_address_features.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskAddressFeaturesIndex<TError = unknown>(
  args: InferRequestType<typeof client.task_address_features.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_address_features.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskAddressFeaturesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_address_features.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_address_features.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaskAddressFeaturesIdIndexKey(
  args: InferRequestType<(typeof client.task_address_features)[':id']['index']['$get']>,
) {
  return ['task_address_features', '/task_address_features/:id/', args] as const
}

export function useGetTaskAddressFeaturesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.task_address_features)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_address_features)[':id']['index']['$get']>>
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
        ? getGetTaskAddressFeaturesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_address_features)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.task_address_features[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskAddressFeaturesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.task_address_features)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_address_features)[':id']['index']['$get']>>
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
        ? getGetTaskAddressFeaturesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_address_features)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.task_address_features[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaskCommandsIndexKey(
  args: InferRequestType<typeof client.task_commands.index.$get>,
) {
  return ['task_commands', '/task_commands/', args] as const
}

export function useGetTaskCommandsIndex<TError = unknown>(
  args: InferRequestType<typeof client.task_commands.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_commands.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskCommandsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_commands.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_commands.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskCommandsIndex<TError = unknown>(
  args: InferRequestType<typeof client.task_commands.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_commands.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskCommandsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_commands.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_commands.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTaskCommandsIndexKey() {
  return ['task_commands', '/task_commands/', 'POST'] as const
}

export function usePostTaskCommandsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_commands.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.task_commands.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTaskCommandsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.task_commands.index.$post> }) =>
        parseResponse(client.task_commands.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTaskCommandsIdIndexKey(
  args: InferRequestType<(typeof client.task_commands)[':id']['index']['$get']>,
) {
  return ['task_commands', '/task_commands/:id/', args] as const
}

export function useGetTaskCommandsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.task_commands)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_commands)[':id']['index']['$get']>>
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
        ? getGetTaskCommandsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_commands)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_commands[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskCommandsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.task_commands)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_commands)[':id']['index']['$get']>>
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
        ? getGetTaskCommandsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_commands)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_commands[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTaskCommandsIdIndexKey() {
  return ['task_commands', '/task_commands/:id/', 'PUT'] as const
}

export function usePutTaskCommandsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_commands)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.task_commands)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTaskCommandsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.task_commands)[':id']['index']['$put']> },
      ) => parseResponse(client.task_commands[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTaskEventTracksIndexKey(
  args: InferRequestType<typeof client.task_event_tracks.index.$get>,
) {
  return ['task_event_tracks', '/task_event_tracks/', args] as const
}

export function useGetTaskEventTracksIndex<TError = unknown>(
  args: InferRequestType<typeof client.task_event_tracks.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_event_tracks.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskEventTracksIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_event_tracks.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_event_tracks.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskEventTracksIndex<TError = unknown>(
  args: InferRequestType<typeof client.task_event_tracks.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_event_tracks.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskEventTracksIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_event_tracks.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_event_tracks.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaskEventTracksIdIndexKey(
  args: InferRequestType<(typeof client.task_event_tracks)[':id']['index']['$get']>,
) {
  return ['task_event_tracks', '/task_event_tracks/:id/', args] as const
}

export function useGetTaskEventTracksIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.task_event_tracks)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_event_tracks)[':id']['index']['$get']>>
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
        ? getGetTaskEventTracksIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_event_tracks)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_event_tracks[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskEventTracksIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.task_event_tracks)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_event_tracks)[':id']['index']['$get']>>
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
        ? getGetTaskEventTracksIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_event_tracks)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_event_tracks[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaskEventsIndexKey(
  args: InferRequestType<typeof client.task_events.index.$get>,
) {
  return ['task_events', '/task_events/', args] as const
}

export function useGetTaskEventsIndex<TError = unknown>(
  args: InferRequestType<typeof client.task_events.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_events.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskEventsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_events.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_events.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskEventsIndex<TError = unknown>(
  args: InferRequestType<typeof client.task_events.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_events.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskEventsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_events.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_events.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaskEventsIdIndexKey(
  args: InferRequestType<(typeof client.task_events)[':id']['index']['$get']>,
) {
  return ['task_events', '/task_events/:id/', args] as const
}

export function useGetTaskEventsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.task_events)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_events)[':id']['index']['$get']>>
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
        ? getGetTaskEventsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_events)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_events[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskEventsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.task_events)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_events)[':id']['index']['$get']>>
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
        ? getGetTaskEventsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_events)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_events[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaskExportsIndexKey(
  args: InferRequestType<typeof client.task_exports.index.$get>,
) {
  return ['task_exports', '/task_exports/', args] as const
}

export function useGetTaskExportsIndex<TError = unknown>(
  args: InferRequestType<typeof client.task_exports.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_exports.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskExportsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_exports.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_exports.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskExportsIndex<TError = unknown>(
  args: InferRequestType<typeof client.task_exports.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_exports.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskExportsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_exports.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_exports.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaskFormsIndexKey(
  args: InferRequestType<typeof client.task_forms.index.$get>,
) {
  return ['task_forms', '/task_forms/', args] as const
}

export function useGetTaskFormsIndex<TError = unknown>(
  args: InferRequestType<typeof client.task_forms.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_forms.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaskFormsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_forms.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_forms.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskFormsIndex<TError = unknown>(
  args: InferRequestType<typeof client.task_forms.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_forms.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaskFormsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_forms.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_forms.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTaskFormsIndexKey() {
  return ['task_forms', '/task_forms/', 'POST'] as const
}

export function usePostTaskFormsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_forms.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.task_forms.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTaskFormsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.task_forms.index.$post> }) =>
        parseResponse(client.task_forms.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTaskFormsIdIndexKey(
  args: InferRequestType<(typeof client.task_forms)[':id']['index']['$get']>,
) {
  return ['task_forms', '/task_forms/:id/', args] as const
}

export function useGetTaskFormsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.task_forms)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$get']>>
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
        ? getGetTaskFormsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_forms[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskFormsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.task_forms)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$get']>>
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
        ? getGetTaskFormsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_forms[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTaskFormsIdIndexKey() {
  return ['task_forms', '/task_forms/:id/', 'PUT'] as const
}

export function usePutTaskFormsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.task_forms)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTaskFormsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.task_forms)[':id']['index']['$put']> },
      ) => parseResponse(client.task_forms[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTaskFormsIdIndexKey() {
  return ['task_forms', '/task_forms/:id/', 'DELETE'] as const
}

export function useDeleteTaskFormsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.task_forms)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTaskFormsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.task_forms)[':id']['index']['$delete']> },
      ) => parseResponse(client.task_forms[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTaskFormsIdIndexKey() {
  return ['task_forms', '/task_forms/:id/', 'PATCH'] as const
}

export function usePatchTaskFormsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_forms)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.task_forms)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTaskFormsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.task_forms)[':id']['index']['$patch']> },
      ) => parseResponse(client.task_forms[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTaskImportIndexKey(
  args: InferRequestType<typeof client.task_import.index.$get>,
) {
  return ['task_import', '/task_import/', args] as const
}

export function useGetTaskImportIndex<TError = unknown>(
  args: InferRequestType<typeof client.task_import.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_import.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskImportIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_import.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_import.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskImportIndex<TError = unknown>(
  args: InferRequestType<typeof client.task_import.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_import.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskImportIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_import.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_import.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTaskImportIndexKey() {
  return ['task_import', '/task_import/', 'POST'] as const
}

export function usePostTaskImportIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_import.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.task_import.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTaskImportIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.task_import.index.$post> }) =>
        parseResponse(client.task_import.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTaskImportIdIndexKey(
  args: InferRequestType<(typeof client.task_import)[':id']['index']['$get']>,
) {
  return ['task_import', '/task_import/:id/', args] as const
}

export function useGetTaskImportIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.task_import)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_import)[':id']['index']['$get']>>
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
        ? getGetTaskImportIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_import)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_import[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskImportIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.task_import)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_import)[':id']['index']['$get']>>
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
        ? getGetTaskImportIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_import)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_import[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaskImportMappingIndexKey(
  args: InferRequestType<typeof client.task_import_mapping.index.$get>,
) {
  return ['task_import_mapping', '/task_import_mapping/', args] as const
}

export function useGetTaskImportMappingIndex<TError = unknown>(
  args: InferRequestType<typeof client.task_import_mapping.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_import_mapping.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskImportMappingIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_import_mapping.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_import_mapping.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskImportMappingIndex<TError = unknown>(
  args: InferRequestType<typeof client.task_import_mapping.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_import_mapping.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskImportMappingIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_import_mapping.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_import_mapping.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTaskImportMappingIndexKey() {
  return ['task_import_mapping', '/task_import_mapping/', 'POST'] as const
}

export function usePostTaskImportMappingIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.task_import_mapping.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.task_import_mapping.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTaskImportMappingIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.task_import_mapping.index.$post> },
      ) => parseResponse(client.task_import_mapping.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTaskImportMappingIdIndexKey(
  args: InferRequestType<(typeof client.task_import_mapping)[':id']['index']['$get']>,
) {
  return ['task_import_mapping', '/task_import_mapping/:id/', args] as const
}

export function useGetTaskImportMappingIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.task_import_mapping)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_import_mapping)[':id']['index']['$get']>>
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
        ? getGetTaskImportMappingIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_import_mapping)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_import_mapping[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskImportMappingIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.task_import_mapping)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_import_mapping)[':id']['index']['$get']>>
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
        ? getGetTaskImportMappingIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_import_mapping)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_import_mapping[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaskMetadatasIndexKey(
  args: InferRequestType<typeof client.task_metadatas.index.$get>,
) {
  return ['task_metadatas', '/task_metadatas/', args] as const
}

export function useGetTaskMetadatasIndex<TError = unknown>(
  args: InferRequestType<typeof client.task_metadatas.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_metadatas.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskMetadatasIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_metadatas.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_metadatas.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskMetadatasIndex<TError = unknown>(
  args: InferRequestType<typeof client.task_metadatas.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_metadatas.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskMetadatasIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.task_metadatas.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_metadatas.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaskMetadatasIdIndexKey(
  args: InferRequestType<(typeof client.task_metadatas)[':id']['index']['$get']>,
) {
  return ['task_metadatas', '/task_metadatas/:id/', args] as const
}

export function useGetTaskMetadatasIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.task_metadatas)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_metadatas)[':id']['index']['$get']>>
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
        ? getGetTaskMetadatasIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_metadatas)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_metadatas[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskMetadatasIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.task_metadatas)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_metadatas)[':id']['index']['$get']>>
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
        ? getGetTaskMetadatasIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_metadatas)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.task_metadatas[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTasksIndexKey(args: InferRequestType<typeof client.tasks.index.$get>) {
  return ['tasks', '/tasks/', args] as const
}

export function useGetTasksIndex<TError = unknown>(
  args: InferRequestType<typeof client.tasks.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksIndex<TError = unknown>(
  args: InferRequestType<typeof client.tasks.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTasksIndexKey() {
  return ['tasks', '/tasks/', 'POST'] as const
}

export function usePostTasksIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.index.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tasks.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tasks.index.$post> }) =>
        parseResponse(client.tasks.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksReorderIndexKey() {
  return ['tasks', '/tasks/reorder/', 'POST'] as const
}

export function usePostTasksReorderIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.reorder.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tasks.reorder.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksReorderIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tasks.reorder.index.$post> }) =>
        parseResponse(client.tasks.reorder.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksRepositionIndexKey() {
  return ['tasks', '/tasks/reposition/', 'POST'] as const
}

export function usePostTasksRepositionIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tasks.reposition.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.tasks.reposition.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksRepositionIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.tasks.reposition.index.$post> },
      ) => parseResponse(client.tasks.reposition.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksIdIndexKey(
  args: InferRequestType<(typeof client.tasks)[':id']['index']['$get']>,
) {
  return ['tasks', '/tasks/:id/', args] as const
}

export function useGetTasksIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTasksIdIndexKey() {
  return ['tasks', '/tasks/:id/', 'PUT'] as const
}

export function usePutTasksIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTasksIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':id']['index']['$put']> },
      ) => parseResponse(client.tasks[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTasksIdIndexKey() {
  return ['tasks', '/tasks/:id/', 'PATCH'] as const
}

export function usePatchTasksIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTasksIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':id']['index']['$patch']> },
      ) => parseResponse(client.tasks[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksIdAcceptIndexKey() {
  return ['tasks', '/tasks/:id/accept/', 'POST'] as const
}

export function usePostTasksIdAcceptIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['accept']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':id']['accept']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksIdAcceptIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':id']['accept']['index']['$post']> },
      ) => parseResponse(client.tasks[':id'].accept.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksIdAccountChangeIndexKey() {
  return ['tasks', '/tasks/:id/account_change/', 'POST'] as const
}

export function usePostTasksIdAccountChangeIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['account_change']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':id']['account_change']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksIdAccountChangeIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tasks)[':id']['account_change']['index']['$post']>
        },
      ) => parseResponse(client.tasks[':id'].account_change.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksIdActivateIndexKey() {
  return ['tasks', '/tasks/:id/activate/', 'POST'] as const
}

export function usePostTasksIdActivateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['activate']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':id']['activate']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksIdActivateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':id']['activate']['index']['$post']> },
      ) => parseResponse(client.tasks[':id'].activate.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksIdAssignIndexKey() {
  return ['tasks', '/tasks/:id/assign/', 'POST'] as const
}

export function usePostTasksIdAssignIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['assign']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':id']['assign']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksIdAssignIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':id']['assign']['index']['$post']> },
      ) => parseResponse(client.tasks[':id'].assign.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksIdCancelIndexKey() {
  return ['tasks', '/tasks/:id/cancel/', 'POST'] as const
}

export function usePostTasksIdCancelIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['cancel']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':id']['cancel']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksIdCancelIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':id']['cancel']['index']['$post']> },
      ) => parseResponse(client.tasks[':id'].cancel.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksIdCompleteIndexKey() {
  return ['tasks', '/tasks/:id/complete/', 'POST'] as const
}

export function usePostTasksIdCompleteIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['complete']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':id']['complete']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksIdCompleteIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':id']['complete']['index']['$post']> },
      ) => parseResponse(client.tasks[':id'].complete.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksIdDocumentsIndexKey(
  args: InferRequestType<(typeof client.tasks)[':id']['documents']['index']['$get']>,
) {
  return ['tasks', '/tasks/:id/documents/', args] as const
}

export function useGetTasksIdDocumentsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':id']['documents']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':id']['documents']['index']['$get']>>
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
        ? getGetTasksIdDocumentsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':id']['documents']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':id'].documents.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksIdDocumentsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':id']['documents']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':id']['documents']['index']['$get']>>
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
        ? getGetTasksIdDocumentsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':id']['documents']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':id'].documents.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTasksIdEventsIndexKey(
  args: InferRequestType<(typeof client.tasks)[':id']['events']['index']['$get']>,
) {
  return ['tasks', '/tasks/:id/events/', args] as const
}

export function useGetTasksIdEventsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':id']['events']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':id']['events']['index']['$get']>>
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
        ? getGetTasksIdEventsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':id']['events']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':id'].events.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksIdEventsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':id']['events']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':id']['events']['index']['$get']>>
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
        ? getGetTasksIdEventsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':id']['events']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':id'].events.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTasksIdFailIndexKey() {
  return ['tasks', '/tasks/:id/fail/', 'POST'] as const
}

export function usePostTasksIdFailIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['fail']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':id']['fail']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksIdFailIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':id']['fail']['index']['$post']> },
      ) => parseResponse(client.tasks[':id'].fail.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksIdRejectIndexKey() {
  return ['tasks', '/tasks/:id/reject/', 'POST'] as const
}

export function usePostTasksIdRejectIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['reject']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':id']['reject']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksIdRejectIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':id']['reject']['index']['$post']> },
      ) => parseResponse(client.tasks[':id'].reject.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksIdSignaturesIndexKey(
  args: InferRequestType<(typeof client.tasks)[':id']['signatures']['index']['$get']>,
) {
  return ['tasks', '/tasks/:id/signatures/', args] as const
}

export function useGetTasksIdSignaturesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':id']['signatures']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':id']['signatures']['index']['$get']>>
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
        ? getGetTasksIdSignaturesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':id']['signatures']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':id'].signatures.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksIdSignaturesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':id']['signatures']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':id']['signatures']['index']['$get']>>
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
        ? getGetTasksIdSignaturesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':id']['signatures']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':id'].signatures.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTasksIdTransitIndexKey() {
  return ['tasks', '/tasks/:id/transit/', 'POST'] as const
}

export function usePostTasksIdTransitIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['transit']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':id']['transit']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksIdTransitIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':id']['transit']['index']['$post']> },
      ) => parseResponse(client.tasks[':id'].transit.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksIdUnacceptIndexKey() {
  return ['tasks', '/tasks/:id/unaccept/', 'POST'] as const
}

export function usePostTasksIdUnacceptIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['unaccept']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':id']['unaccept']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksIdUnacceptIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':id']['unaccept']['index']['$post']> },
      ) => parseResponse(client.tasks[':id'].unaccept.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksIdUnassignIndexKey() {
  return ['tasks', '/tasks/:id/unassign/', 'POST'] as const
}

export function usePostTasksIdUnassignIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':id']['unassign']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':id']['unassign']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksIdUnassignIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':id']['unassign']['index']['$post']> },
      ) => parseResponse(client.tasks[':id'].unassign.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTimeLocationFeaturesIndexKey(
  args: InferRequestType<typeof client.time_location_features.index.$get>,
) {
  return ['time_location_features', '/time_location_features/', args] as const
}

export function useGetTimeLocationFeaturesIndex<TError = unknown>(
  args: InferRequestType<typeof client.time_location_features.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.time_location_features.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTimeLocationFeaturesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.time_location_features.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.time_location_features.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimeLocationFeaturesIndex<TError = unknown>(
  args: InferRequestType<typeof client.time_location_features.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.time_location_features.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTimeLocationFeaturesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.time_location_features.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.time_location_features.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTimeLocationFeaturesIndexKey() {
  return ['time_location_features', '/time_location_features/', 'POST'] as const
}

export function usePostTimeLocationFeaturesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.time_location_features.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.time_location_features.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTimeLocationFeaturesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.time_location_features.index.$post> },
      ) => parseResponse(client.time_location_features.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTimeLocationFeaturesIdIndexKey(
  args: InferRequestType<(typeof client.time_location_features)[':id']['index']['$get']>,
) {
  return ['time_location_features', '/time_location_features/:id/', args] as const
}

export function useGetTimeLocationFeaturesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.time_location_features)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$get']>>
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
        ? getGetTimeLocationFeaturesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.time_location_features[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimeLocationFeaturesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.time_location_features)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$get']>>
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
        ? getGetTimeLocationFeaturesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.time_location_features[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTimeLocationFeaturesIdIndexKey() {
  return ['time_location_features', '/time_location_features/:id/', 'PUT'] as const
}

export function usePutTimeLocationFeaturesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.time_location_features)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTimeLocationFeaturesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.time_location_features)[':id']['index']['$put']>
        },
      ) => parseResponse(client.time_location_features[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTimeLocationFeaturesIdIndexKey() {
  return ['time_location_features', '/time_location_features/:id/', 'DELETE'] as const
}

export function useDeleteTimeLocationFeaturesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.time_location_features)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTimeLocationFeaturesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.time_location_features)[':id']['index']['$delete']>
        },
      ) => parseResponse(client.time_location_features[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTimeLocationFeaturesIdIndexKey() {
  return ['time_location_features', '/time_location_features/:id/', 'PATCH'] as const
}

export function usePatchTimeLocationFeaturesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.time_location_features)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.time_location_features)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTimeLocationFeaturesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.time_location_features)[':id']['index']['$patch']>
        },
      ) => parseResponse(client.time_location_features[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTimeLocationsIndexKey(
  args: InferRequestType<typeof client.time_locations.index.$get>,
) {
  return ['time_locations', '/time_locations/', args] as const
}

export function useGetTimeLocationsIndex<TError = unknown>(
  args: InferRequestType<typeof client.time_locations.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.time_locations.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTimeLocationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.time_locations.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.time_locations.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimeLocationsIndex<TError = unknown>(
  args: InferRequestType<typeof client.time_locations.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.time_locations.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTimeLocationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.time_locations.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.time_locations.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTimeLocationsIndexKey() {
  return ['time_locations', '/time_locations/', 'POST'] as const
}

export function usePostTimeLocationsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.time_locations.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.time_locations.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTimeLocationsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.time_locations.index.$post> },
      ) => parseResponse(client.time_locations.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTimeLocationsIdIndexKey(
  args: InferRequestType<(typeof client.time_locations)[':id']['index']['$get']>,
) {
  return ['time_locations', '/time_locations/:id/', args] as const
}

export function useGetTimeLocationsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.time_locations)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.time_locations)[':id']['index']['$get']>>
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
        ? getGetTimeLocationsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.time_locations)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.time_locations[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimeLocationsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.time_locations)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.time_locations)[':id']['index']['$get']>>
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
        ? getGetTimeLocationsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.time_locations)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.time_locations[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTrackersIndexKey(args: InferRequestType<typeof client.trackers.index.$get>) {
  return ['trackers', '/trackers/', args] as const
}

export function useGetTrackersIndex<TError = unknown>(
  args: InferRequestType<typeof client.trackers.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trackers.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTrackersIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trackers.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.trackers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrackersIndex<TError = unknown>(
  args: InferRequestType<typeof client.trackers.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trackers.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTrackersIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trackers.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.trackers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTrackersIndexKey() {
  return ['trackers', '/trackers/', 'POST'] as const
}

export function usePostTrackersIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trackers.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.trackers.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTrackersIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.trackers.index.$post> }) =>
        parseResponse(client.trackers.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTrackersIdIndexKey(
  args: InferRequestType<(typeof client.trackers)[':id']['index']['$get']>,
) {
  return ['trackers', '/trackers/:id/', args] as const
}

export function useGetTrackersIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.trackers)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$get']>>
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
        ? getGetTrackersIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.trackers[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrackersIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.trackers)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$get']>>
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
        ? getGetTrackersIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.trackers[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTrackersIdIndexKey() {
  return ['trackers', '/trackers/:id/', 'PUT'] as const
}

export function usePutTrackersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.trackers)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTrackersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.trackers)[':id']['index']['$put']> },
      ) => parseResponse(client.trackers[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTrackersIdIndexKey() {
  return ['trackers', '/trackers/:id/', 'PATCH'] as const
}

export function usePatchTrackersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.trackers)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.trackers)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTrackersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.trackers)[':id']['index']['$patch']> },
      ) => parseResponse(client.trackers[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTrackersIdPublicIndexKey(
  args: InferRequestType<(typeof client.trackers)[':id']['public']['index']['$get']>,
) {
  return ['trackers', '/trackers/:id/public/', args] as const
}

export function useGetTrackersIdPublicIndex<TError = unknown>(
  args: InferRequestType<(typeof client.trackers)[':id']['public']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.trackers)[':id']['public']['index']['$get']>>
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
        ? getGetTrackersIdPublicIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.trackers)[':id']['public']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.trackers[':id'].public.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrackersIdPublicIndex<TError = unknown>(
  args: InferRequestType<(typeof client.trackers)[':id']['public']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.trackers)[':id']['public']['index']['$get']>>
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
        ? getGetTrackersIdPublicIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.trackers)[':id']['public']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.trackers[':id'].public.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIndexKey(args: InferRequestType<typeof client.users.index.$get>) {
  return ['users', '/users/', args] as const
}

export function useGetUsersIndex<TError = unknown>(
  args: InferRequestType<typeof client.users.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIndex<TError = unknown>(
  args: InferRequestType<typeof client.users.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersIndexKey() {
  return ['users', '/users/', 'POST'] as const
}

export function usePostUsersIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.index.$post> }) =>
        parseResponse(client.users.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdIndexKey(
  args: InferRequestType<(typeof client.users)[':id']['index']['$get']>,
) {
  return ['users', '/users/:id/', args] as const
}

export function useGetUsersIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersIdIndexKey() {
  return ['users', '/users/:id/', 'PUT'] as const
}

export function usePutUsersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':id']['index']['$put']> },
      ) => parseResponse(client.users[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersIdIndexKey() {
  return ['users', '/users/:id/', 'DELETE'] as const
}

export function useDeleteUsersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':id']['index']['$delete']> },
      ) => parseResponse(client.users[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersIdIndexKey() {
  return ['users', '/users/:id/', 'PATCH'] as const
}

export function usePatchUsersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':id']['index']['$patch']> },
      ) => parseResponse(client.users[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersIdActivateIndexKey() {
  return ['users', '/users/:id/activate/', 'POST'] as const
}

export function usePostUsersIdActivateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['activate']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['activate']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdActivateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':id']['activate']['index']['$post']> },
      ) => parseResponse(client.users[':id'].activate.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdOnDutyIndexKey(
  args: InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$get']>,
) {
  return ['users', '/users/:id/on_duty/', args] as const
}

export function useGetUsersIdOnDutyIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['on_duty']['index']['$get']>>
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
        ? getGetUsersIdOnDutyIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['on_duty']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].on_duty.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdOnDutyIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['on_duty']['index']['$get']>>
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
        ? getGetUsersIdOnDutyIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['on_duty']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].on_duty.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersIdOnDutyIndexKey() {
  return ['users', '/users/:id/on_duty/', 'PUT'] as const
}

export function usePutUsersIdOnDutyIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['on_duty']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersIdOnDutyIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$put']> },
      ) => parseResponse(client.users[':id'].on_duty.index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersIdOnDutyIndexKey() {
  return ['users', '/users/:id/on_duty/', 'DELETE'] as const
}

export function useDeleteUsersIdOnDutyIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['on_duty']['index']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersIdOnDutyIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$delete']> },
      ) => parseResponse(client.users[':id'].on_duty.index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersOnDutyLogIndexKey(
  args: InferRequestType<typeof client.users_on_duty_log.index.$get>,
) {
  return ['users_on_duty_log', '/users_on_duty_log/', args] as const
}

export function useGetUsersOnDutyLogIndex<TError = unknown>(
  args: InferRequestType<typeof client.users_on_duty_log.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users_on_duty_log.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersOnDutyLogIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users_on_duty_log.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users_on_duty_log.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersOnDutyLogIndex<TError = unknown>(
  args: InferRequestType<typeof client.users_on_duty_log.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users_on_duty_log.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersOnDutyLogIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users_on_duty_log.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users_on_duty_log.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersOnDutyLogIndexKey() {
  return ['users_on_duty_log', '/users_on_duty_log/', 'POST'] as const
}

export function usePostUsersOnDutyLogIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users_on_duty_log.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users_on_duty_log.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersOnDutyLogIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.users_on_duty_log.index.$post> },
      ) => parseResponse(client.users_on_duty_log.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersOnDutyLogIdIndexKey(
  args: InferRequestType<(typeof client.users_on_duty_log)[':id']['index']['$get']>,
) {
  return ['users_on_duty_log', '/users_on_duty_log/:id/', args] as const
}

export function useGetUsersOnDutyLogIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users_on_duty_log)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users_on_duty_log)[':id']['index']['$get']>>
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
        ? getGetUsersOnDutyLogIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users_on_duty_log)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users_on_duty_log[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersOnDutyLogIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users_on_duty_log)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users_on_duty_log)[':id']['index']['$get']>>
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
        ? getGetUsersOnDutyLogIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users_on_duty_log)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users_on_duty_log[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksIndexKey(args: InferRequestType<typeof client.webhooks.index.$get>) {
  return ['webhooks', '/webhooks/', args] as const
}

export function useGetWebhooksIndex<TError = unknown>(
  args: InferRequestType<typeof client.webhooks.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksIndex<TError = unknown>(
  args: InferRequestType<typeof client.webhooks.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhooksIndexKey() {
  return ['webhooks', '/webhooks/', 'POST'] as const
}

export function usePostWebhooksIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.index.$post> }) =>
        parseResponse(client.webhooks.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksIdIndexKey(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>,
) {
  return ['webhooks', '/webhooks/:id/', args] as const
}

export function useGetWebhooksIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>
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
        ? getGetWebhooksIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>
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
        ? getGetWebhooksIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWebhooksIdIndexKey() {
  return ['webhooks', '/webhooks/:id/', 'PUT'] as const
}

export function usePutWebhooksIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhooksIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':id']['index']['$put']> },
      ) => parseResponse(client.webhooks[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhooksIdIndexKey() {
  return ['webhooks', '/webhooks/:id/', 'DELETE'] as const
}

export function useDeleteWebhooksIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':id']['index']['$delete']> },
      ) => parseResponse(client.webhooks[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWebhooksIdIndexKey() {
  return ['webhooks', '/webhooks/:id/', 'PATCH'] as const
}

export function usePatchWebhooksIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWebhooksIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':id']['index']['$patch']> },
      ) => parseResponse(client.webhooks[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksIdActiveIndexKey() {
  return ['webhooks', '/webhooks/:id/active/', 'POST'] as const
}

export function usePostWebhooksIdActiveIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':id']['active']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':id']['active']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksIdActiveIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.webhooks)[':id']['active']['index']['$post']> },
      ) => parseResponse(client.webhooks[':id'].active.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksIdInactiveIndexKey() {
  return ['webhooks', '/webhooks/:id/inactive/', 'POST'] as const
}

export function usePostWebhooksIdInactiveIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':id']['inactive']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':id']['inactive']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksIdInactiveIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.webhooks)[':id']['inactive']['index']['$post']> },
      ) => parseResponse(client.webhooks[':id'].inactive.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkerFeaturesIndexKey(
  args: InferRequestType<typeof client.worker_features.index.$get>,
) {
  return ['worker_features', '/worker_features/', args] as const
}

export function useGetWorkerFeaturesIndex<TError = unknown>(
  args: InferRequestType<typeof client.worker_features.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.worker_features.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkerFeaturesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.worker_features.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.worker_features.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkerFeaturesIndex<TError = unknown>(
  args: InferRequestType<typeof client.worker_features.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.worker_features.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkerFeaturesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.worker_features.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.worker_features.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkerFeaturesUserIdIndexKey(
  args: InferRequestType<(typeof client.worker_features)[':user_id']['index']['$get']>,
) {
  return ['worker_features', '/worker_features/:user_id/', args] as const
}

export function useGetWorkerFeaturesUserIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.worker_features)[':user_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.worker_features)[':user_id']['index']['$get']>>
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
        ? getGetWorkerFeaturesUserIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.worker_features)[':user_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.worker_features[':user_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkerFeaturesUserIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.worker_features)[':user_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.worker_features)[':user_id']['index']['$get']>>
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
        ? getGetWorkerFeaturesUserIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.worker_features)[':user_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.worker_features[':user_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkerTracksIndexKey(
  args: InferRequestType<typeof client.worker_tracks.index.$get>,
) {
  return ['worker_tracks', '/worker_tracks/', args] as const
}

export function useGetWorkerTracksIndex<TError = unknown>(
  args: InferRequestType<typeof client.worker_tracks.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.worker_tracks.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkerTracksIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.worker_tracks.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.worker_tracks.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkerTracksIndex<TError = unknown>(
  args: InferRequestType<typeof client.worker_tracks.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.worker_tracks.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkerTracksIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.worker_tracks.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.worker_tracks.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkingStateIndexKey(
  args: InferRequestType<typeof client.working_state.index.$get>,
) {
  return ['working_state', '/working_state/', args] as const
}

export function useGetWorkingStateIndex<TError = unknown>(
  args: InferRequestType<typeof client.working_state.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.working_state.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkingStateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.working_state.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.working_state.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkingStateIndex<TError = unknown>(
  args: InferRequestType<typeof client.working_state.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.working_state.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkingStateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.working_state.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.working_state.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkingStateIndexKey() {
  return ['working_state', '/working_state/', 'POST'] as const
}

export function usePostWorkingStateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.working_state.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.working_state.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkingStateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.working_state.index.$post> }) =>
        parseResponse(client.working_state.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkingStateIdIndexKey(
  args: InferRequestType<(typeof client.working_state)[':id']['index']['$get']>,
) {
  return ['working_state', '/working_state/:id/', args] as const
}

export function useGetWorkingStateIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.working_state)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.working_state)[':id']['index']['$get']>>
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
        ? getGetWorkingStateIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.working_state)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.working_state[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkingStateIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.working_state)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.working_state)[':id']['index']['$get']>>
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
        ? getGetWorkingStateIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.working_state)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.working_state[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
