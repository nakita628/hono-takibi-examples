import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getApiKey() {
  return ['api'] as const
}

export function getArchiveFilesKey() {
  return ['archive_files'] as const
}

export function getChatKey() {
  return ['chat'] as const
}

export function getContactsKey() {
  return ['contacts'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getH323Key() {
  return ['h323'] as const
}

export function getImKey() {
  return ['im'] as const
}

export function getLiveMeetingsKey() {
  return ['live_meetings'] as const
}

export function getMeetingsKey() {
  return ['meetings'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getPastMeetingsKey() {
  return ['past_meetings'] as const
}

export function getPastWebinarsKey() {
  return ['past_webinars'] as const
}

export function getPhoneKey() {
  return ['phone'] as const
}

export function getReportKey() {
  return ['report'] as const
}

export function getRolesKey() {
  return ['roles'] as const
}

export function getRoomsKey() {
  return ['rooms'] as const
}

export function getSipPhonesKey() {
  return ['sip_phones'] as const
}

export function getSipTrunkKey() {
  return ['sip_trunk'] as const
}

export function getTrackingFieldsKey() {
  return ['tracking_fields'] as const
}

export function getTspKey() {
  return ['tsp'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWebinarsKey() {
  return ['webinars'] as const
}

export function getGetAccountsKey(args: InferRequestType<typeof client.accounts.$get>) {
  return ['accounts', '/accounts', args] as const
}

export function useGetAccounts<TError = unknown>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.accounts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAccounts<TError = unknown>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.accounts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostAccountsKey() {
  return ['accounts', '/accounts', 'POST'] as const
}

export function usePostAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.accounts.$post> }) =>
        parseResponse(client.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
) {
  return ['accounts', '/accounts/:accountId', args] as const
}

export function useGetAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdKey() {
  return ['accounts', '/accounts/:accountId', 'DELETE'] as const
}

export function useDeleteAccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':accountId']['$delete']> },
      ) => parseResponse(client.accounts[':accountId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdBillingKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['billing']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/billing', args] as const
}

export function useGetAccountsAccountIdBilling<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['billing']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['$get']>>
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
        ? getGetAccountsAccountIdBillingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].billing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdBilling<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['billing']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['$get']>>
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
        ? getGetAccountsAccountIdBillingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].billing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchAccountsAccountIdBillingKey() {
  return ['accounts', '/accounts/:accountId/billing', 'PATCH'] as const
}

export function usePatchAccountsAccountIdBilling<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['billing']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountsAccountIdBillingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.accounts)[':accountId']['billing']['$patch']> },
      ) => parseResponse(client.accounts[':accountId'].billing.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdBillingInvoicesKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/billing/invoices', args] as const
}

export function useGetAccountsAccountIdBillingInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>
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
        ? getGetAccountsAccountIdBillingInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].billing.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdBillingInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>
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
        ? getGetAccountsAccountIdBillingInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].billing.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdBillingInvoicesInvoiceIdKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['billing']['invoices'][':invoiceId']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/billing/invoices/:invoiceId', args] as const
}

export function useGetAccountsAccountIdBillingInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['billing']['invoices'][':invoiceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['billing']['invoices'][':invoiceId']['$get']
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
        ? getGetAccountsAccountIdBillingInvoicesInvoiceIdKey(args)
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
                (typeof client.accounts)[':accountId']['billing']['invoices'][':invoiceId']['$get']
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
          client.accounts[':accountId'].billing.invoices[':invoiceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdBillingInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['billing']['invoices'][':invoiceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['billing']['invoices'][':invoiceId']['$get']
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
        ? getGetAccountsAccountIdBillingInvoicesInvoiceIdKey(args)
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
                (typeof client.accounts)[':accountId']['billing']['invoices'][':invoiceId']['$get']
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
          client.accounts[':accountId'].billing.invoices[':invoiceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdLockSettingsKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/lock_settings', args] as const
}

export function useGetAccountsAccountIdLockSettings<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>>
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
        ? getGetAccountsAccountIdLockSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].lock_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdLockSettings<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>>
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
        ? getGetAccountsAccountIdLockSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].lock_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchAccountsAccountIdLockSettingsKey() {
  return ['accounts', '/accounts/:accountId/lock_settings', 'PATCH'] as const
}

export function usePatchAccountsAccountIdLockSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['lock_settings']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['lock_settings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountsAccountIdLockSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':accountId']['lock_settings']['$patch']>
        },
      ) => parseResponse(client.accounts[':accountId'].lock_settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdManagedDomainsKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/managed_domains', args] as const
}

export function useGetAccountsAccountIdManagedDomains<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>>
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
        ? getGetAccountsAccountIdManagedDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].managed_domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdManagedDomains<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>>
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
        ? getGetAccountsAccountIdManagedDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].managed_domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchAccountsAccountIdOptionsKey() {
  return ['accounts', '/accounts/:accountId/options', 'PATCH'] as const
}

export function usePatchAccountsAccountIdOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['options']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['options']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountsAccountIdOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.accounts)[':accountId']['options']['$patch']> },
      ) => parseResponse(client.accounts[':accountId'].options.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountsAccountIdOwnerKey() {
  return ['accounts', '/accounts/:accountId/owner', 'PUT'] as const
}

export function usePutAccountsAccountIdOwner<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['owner']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['owner']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAccountIdOwnerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':accountId']['owner']['$put']> },
      ) => parseResponse(client.accounts[':accountId'].owner.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountsAccountIdPhoneSettingsKey() {
  return ['accounts', '/accounts/:accountId/phone/settings', 'PATCH'] as const
}

export function usePatchAccountsAccountIdPhoneSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['phone']['settings']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['phone']['settings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountsAccountIdPhoneSettingsKey()
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
            (typeof client.accounts)[':accountId']['phone']['settings']['$patch']
          >
        },
      ) => parseResponse(client.accounts[':accountId'].phone.settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdPhoneSetupKey() {
  return ['accounts', '/accounts/:accountId/phone/setup', 'POST'] as const
}

export function usePostAccountsAccountIdPhoneSetup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['phone']['setup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['phone']['setup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdPhoneSetupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':accountId']['phone']['setup']['$post']>
        },
      ) => parseResponse(client.accounts[':accountId'].phone.setup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdPhoneSipTrunkTrunksKey() {
  return ['accounts', '/accounts/:accountId/phone/sip_trunk/trunks', 'POST'] as const
}

export function usePostAccountsAccountIdPhoneSipTrunkTrunks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['phone']['sip_trunk']['trunks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['phone']['sip_trunk']['trunks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdPhoneSipTrunkTrunksKey()
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
            (typeof client.accounts)[':accountId']['phone']['sip_trunk']['trunks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].phone.sip_trunk.trunks.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkIdKey() {
  return ['accounts', '/accounts/:accountId/phone/sip_trunk/trunks/:sipTrunkId', 'PATCH'] as const
}

export function usePatchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['phone']['sip_trunk']['trunks'][':sipTrunkId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['phone']['sip_trunk']['trunks'][':sipTrunkId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkIdKey()
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
            (typeof client.accounts)[':accountId']['phone']['sip_trunk']['trunks'][':sipTrunkId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].phone.sip_trunk.trunks[':sipTrunkId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdPlansKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/plans', args] as const
}

export function useGetAccountsAccountIdPlans<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['$get']>>
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
        ? getGetAccountsAccountIdPlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].plans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdPlans<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['$get']>>
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
        ? getGetAccountsAccountIdPlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].plans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdPlansKey() {
  return ['accounts', '/accounts/:accountId/plans', 'POST'] as const
}

export function usePostAccountsAccountIdPlans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['plans']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdPlansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.accounts)[':accountId']['plans']['$post']> },
      ) => parseResponse(client.accounts[':accountId'].plans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountsAccountIdPlansAddonsKey() {
  return ['accounts', '/accounts/:accountId/plans/addons', 'PUT'] as const
}

export function usePutAccountsAccountIdPlansAddons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['addons']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['plans']['addons']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAccountIdPlansAddonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':accountId']['plans']['addons']['$put']>
        },
      ) => parseResponse(client.accounts[':accountId'].plans.addons.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdPlansAddonsKey() {
  return ['accounts', '/accounts/:accountId/plans/addons', 'POST'] as const
}

export function usePostAccountsAccountIdPlansAddons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['addons']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['plans']['addons']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdPlansAddonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':accountId']['plans']['addons']['$post']>
        },
      ) => parseResponse(client.accounts[':accountId'].plans.addons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountsAccountIdPlansAddonsStatusKey() {
  return ['accounts', '/accounts/:accountId/plans/addons/status', 'PATCH'] as const
}

export function usePatchAccountsAccountIdPlansAddonsStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['plans']['addons']['status']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['plans']['addons']['status']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountsAccountIdPlansAddonsStatusKey()
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
            (typeof client.accounts)[':accountId']['plans']['addons']['status']['$patch']
          >
        },
      ) =>
        parseResponse(client.accounts[':accountId'].plans.addons.status.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountsAccountIdPlansBaseKey() {
  return ['accounts', '/accounts/:accountId/plans/base', 'PUT'] as const
}

export function usePutAccountsAccountIdPlansBase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['base']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['plans']['base']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAccountIdPlansBaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':accountId']['plans']['base']['$put']>
        },
      ) => parseResponse(client.accounts[':accountId'].plans.base.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountsAccountIdPlansBaseStatusKey() {
  return ['accounts', '/accounts/:accountId/plans/base/status', 'PATCH'] as const
}

export function usePatchAccountsAccountIdPlansBaseStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['plans']['base']['status']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['plans']['base']['status']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountsAccountIdPlansBaseStatusKey()
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
            (typeof client.accounts)[':accountId']['plans']['base']['status']['$patch']
          >
        },
      ) =>
        parseResponse(client.accounts[':accountId'].plans.base.status.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdPlansUsageKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/plans/usage', args] as const
}

export function useGetAccountsAccountIdPlansUsage<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>>
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
        ? getGetAccountsAccountIdPlansUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].plans.usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdPlansUsage<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>>
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
        ? getGetAccountsAccountIdPlansUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].plans.usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdRecordingsKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['recordings']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/recordings', args] as const
}

export function useGetAccountsAccountIdRecordings<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['recordings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['recordings']['$get']>>
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
        ? getGetAccountsAccountIdRecordingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['recordings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].recordings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdRecordings<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['recordings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['recordings']['$get']>>
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
        ? getGetAccountsAccountIdRecordingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['recordings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].recordings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdSettingsKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/settings', args] as const
}

export function useGetAccountsAccountIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
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
        ? getGetAccountsAccountIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
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
        ? getGetAccountsAccountIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchAccountsAccountIdSettingsKey() {
  return ['accounts', '/accounts/:accountId/settings', 'PATCH'] as const
}

export function usePatchAccountsAccountIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['settings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountsAccountIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$patch']> },
      ) => parseResponse(client.accounts[':accountId'].settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdSettingsVirtualBackgroundsKey() {
  return ['accounts', '/accounts/:accountId/settings/virtual_backgrounds', 'POST'] as const
}

export function usePostAccountsAccountIdSettingsVirtualBackgrounds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['settings']['virtual_backgrounds']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['settings']['virtual_backgrounds']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdSettingsVirtualBackgroundsKey()
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
            (typeof client.accounts)[':accountId']['settings']['virtual_backgrounds']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].settings.virtual_backgrounds.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdSettingsVirtualBackgroundsKey() {
  return ['accounts', '/accounts/:accountId/settings/virtual_backgrounds', 'DELETE'] as const
}

export function useDeleteAccountsAccountIdSettingsVirtualBackgrounds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['settings']['virtual_backgrounds']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['settings']['virtual_backgrounds']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdSettingsVirtualBackgroundsKey()
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
            (typeof client.accounts)[':accountId']['settings']['virtual_backgrounds']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].settings.virtual_backgrounds.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdSipTrunkCalloutCountriesKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/sip_trunk/callout_countries', args] as const
}

export function useGetAccountsAccountIdSipTrunkCalloutCountries<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$get']
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
        ? getGetAccountsAccountIdSipTrunkCalloutCountriesKey(args)
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
                (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$get']
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
          client.accounts[':accountId'].sip_trunk.callout_countries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdSipTrunkCalloutCountries<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$get']
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
        ? getGetAccountsAccountIdSipTrunkCalloutCountriesKey(args)
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
                (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$get']
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
          client.accounts[':accountId'].sip_trunk.callout_countries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdSipTrunkCalloutCountriesKey() {
  return ['accounts', '/accounts/:accountId/sip_trunk/callout_countries', 'POST'] as const
}

export function usePostAccountsAccountIdSipTrunkCalloutCountries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdSipTrunkCalloutCountriesKey()
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
            (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].sip_trunk.callout_countries.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdSipTrunkCalloutCountriesCountryIdKey() {
  return [
    'accounts',
    '/accounts/:accountId/sip_trunk/callout_countries/:countryId',
    'DELETE',
  ] as const
}

export function useDeleteAccountsAccountIdSipTrunkCalloutCountriesCountryId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries'][':countryId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries'][':countryId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdSipTrunkCalloutCountriesCountryIdKey()
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
            (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries'][':countryId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].sip_trunk.callout_countries[':countryId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdSipTrunkInternalNumbersKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/sip_trunk/internal_numbers', args] as const
}

export function useGetAccountsAccountIdSipTrunkInternalNumbers<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$get']
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
        ? getGetAccountsAccountIdSipTrunkInternalNumbersKey(args)
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
                (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$get']
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
          client.accounts[':accountId'].sip_trunk.internal_numbers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdSipTrunkInternalNumbers<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$get']
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
        ? getGetAccountsAccountIdSipTrunkInternalNumbersKey(args)
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
                (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$get']
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
          client.accounts[':accountId'].sip_trunk.internal_numbers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdSipTrunkInternalNumbersKey() {
  return ['accounts', '/accounts/:accountId/sip_trunk/internal_numbers', 'POST'] as const
}

export function usePostAccountsAccountIdSipTrunkInternalNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdSipTrunkInternalNumbersKey()
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
            (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].sip_trunk.internal_numbers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdSipTrunkInternalNumbersNumberIdKey() {
  return [
    'accounts',
    '/accounts/:accountId/sip_trunk/internal_numbers/:numberId',
    'DELETE',
  ] as const
}

export function useDeleteAccountsAccountIdSipTrunkInternalNumbersNumberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers'][':numberId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers'][':numberId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdSipTrunkInternalNumbersNumberIdKey()
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
            (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers'][':numberId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].sip_trunk.internal_numbers[':numberId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdSipTrunkNumbersKey() {
  return ['accounts', '/accounts/:accountId/sip_trunk/numbers', 'POST'] as const
}

export function usePostAccountsAccountIdSipTrunkNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':accountId']['sip_trunk']['numbers']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['numbers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdSipTrunkNumbersKey()
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
            (typeof client.accounts)[':accountId']['sip_trunk']['numbers']['$post']
          >
        },
      ) => parseResponse(client.accounts[':accountId'].sip_trunk.numbers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdSipTrunkNumbersKey() {
  return ['accounts', '/accounts/:accountId/sip_trunk/numbers', 'DELETE'] as const
}

export function useDeleteAccountsAccountIdSipTrunkNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['sip_trunk']['numbers']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['numbers']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdSipTrunkNumbersKey()
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
            (typeof client.accounts)[':accountId']['sip_trunk']['numbers']['$delete']
          >
        },
      ) =>
        parseResponse(client.accounts[':accountId'].sip_trunk.numbers.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountsAccountIdSipTrunkSettingsKey() {
  return ['accounts', '/accounts/:accountId/sip_trunk/settings', 'PATCH'] as const
}

export function usePatchAccountsAccountIdSipTrunkSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['sip_trunk']['settings']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['settings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountsAccountIdSipTrunkSettingsKey()
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
            (typeof client.accounts)[':accountId']['sip_trunk']['settings']['$patch']
          >
        },
      ) =>
        parseResponse(client.accounts[':accountId'].sip_trunk.settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdSipTrunkTrunksKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/sip_trunk/trunks', args] as const
}

export function useGetAccountsAccountIdSipTrunkTrunks<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>
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
        ? getGetAccountsAccountIdSipTrunkTrunksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].sip_trunk.trunks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdSipTrunkTrunks<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>
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
        ? getGetAccountsAccountIdSipTrunkTrunksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].sip_trunk.trunks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdSipTrunkTrunksKey() {
  return ['accounts', '/accounts/:accountId/sip_trunk/trunks', 'POST'] as const
}

export function usePostAccountsAccountIdSipTrunkTrunks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdSipTrunkTrunksKey()
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
            (typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$post']
          >
        },
      ) => parseResponse(client.accounts[':accountId'].sip_trunk.trunks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdSipTrunkTrunksTrunkIdKey() {
  return ['accounts', '/accounts/:accountId/sip_trunk/trunks/:trunkId', 'DELETE'] as const
}

export function useDeleteAccountsAccountIdSipTrunkTrunksTrunkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['sip_trunk']['trunks'][':trunkId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['sip_trunk']['trunks'][':trunkId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdSipTrunkTrunksTrunkIdKey()
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
            (typeof client.accounts)[':accountId']['sip_trunk']['trunks'][':trunkId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].sip_trunk.trunks[':trunkId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdTrustedDomainsKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/trusted_domains', args] as const
}

export function useGetAccountsAccountIdTrustedDomains<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>>
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
        ? getGetAccountsAccountIdTrustedDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].trusted_domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdTrustedDomains<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>>
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
        ? getGetAccountsAccountIdTrustedDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].trusted_domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAccountIdUsersUserIdAccountKey() {
  return ['accounts', '/accounts/:accountId/users/:userId/account', 'PUT'] as const
}

export function usePutAccountsAccountIdUsersUserIdAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['users'][':userId']['account']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['account']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAccountIdUsersUserIdAccountKey()
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
            (typeof client.accounts)[':accountId']['users'][':userId']['account']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].users[':userId'].account.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiDownloadBillingInvoicesInvoiceIdKey(
  args: InferRequestType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>,
) {
  return ['api', '/api/download/billing/invoices/:invoiceId', args] as const
}

export function useGetApiDownloadBillingInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>>
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
        ? getGetApiDownloadBillingInvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.download.billing.invoices[':invoiceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDownloadBillingInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>>
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
        ? getGetApiDownloadBillingInvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.download.billing.invoices[':invoiceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArchiveFilesKey(args: InferRequestType<typeof client.archive_files.$get>) {
  return ['archive_files', '/archive_files', args] as const
}

export function useGetArchiveFiles<TError = unknown>(
  args: InferRequestType<typeof client.archive_files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive_files.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArchiveFilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive_files.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.archive_files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArchiveFiles<TError = unknown>(
  args: InferRequestType<typeof client.archive_files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive_files.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArchiveFilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive_files.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.archive_files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChatChannelsChannelIdKey(
  args: InferRequestType<(typeof client.chat.channels)[':channelId']['$get']>,
) {
  return ['chat', '/chat/channels/:channelId', args] as const
}

export function useGetChatChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.chat.channels)[':channelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['$get']>>
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
        ? getGetChatChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.channels[':channelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.chat.channels)[':channelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['$get']>>
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
        ? getGetChatChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.channels[':channelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteChatChannelsChannelIdKey() {
  return ['chat', '/chat/channels/:channelId', 'DELETE'] as const
}

export function useDeleteChatChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.chat.channels)[':channelId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChatChannelsChannelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.chat.channels)[':channelId']['$delete']> },
      ) => parseResponse(client.chat.channels[':channelId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchChatChannelsChannelIdKey() {
  return ['chat', '/chat/channels/:channelId', 'PATCH'] as const
}

export function usePatchChatChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.chat.channels)[':channelId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchChatChannelsChannelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.chat.channels)[':channelId']['$patch']> },
      ) => parseResponse(client.chat.channels[':channelId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChatChannelsChannelIdMembersMeKey() {
  return ['chat', '/chat/channels/:channelId/members/me', 'POST'] as const
}

export function usePostChatChannelsChannelIdMembersMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['members']['me']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.chat.channels)[':channelId']['members']['me']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatChannelsChannelIdMembersMeKey()
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
            (typeof client.chat.channels)[':channelId']['members']['me']['$post']
          >
        },
      ) => parseResponse(client.chat.channels[':channelId'].members.me.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChatChannelsChannelIdMembersMeKey() {
  return ['chat', '/chat/channels/:channelId/members/me', 'DELETE'] as const
}

export function useDeleteChatChannelsChannelIdMembersMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chat.channels)[':channelId']['members']['me']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.chat.channels)[':channelId']['members']['me']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChatChannelsChannelIdMembersMeKey()
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
            (typeof client.chat.channels)[':channelId']['members']['me']['$delete']
          >
        },
      ) => parseResponse(client.chat.channels[':channelId'].members.me.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChatChannelsChannelIdMembersMemberIdKey() {
  return ['chat', '/chat/channels/:channelId/members/:memberId', 'DELETE'] as const
}

export function useDeleteChatChannelsChannelIdMembersMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.chat.channels)[':channelId']['members'][':memberId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.chat.channels)[':channelId']['members'][':memberId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChatChannelsChannelIdMembersMemberIdKey()
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
            (typeof client.chat.channels)[':channelId']['members'][':memberId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.chat.channels[':channelId'].members[':memberId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChatUsersMeContactsKey(
  args: InferRequestType<typeof client.chat.users.me.contacts.$get>,
) {
  return ['chat', '/chat/users/me/contacts', args] as const
}

export function useGetChatUsersMeContacts<TError = unknown>(
  args: InferRequestType<typeof client.chat.users.me.contacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.chat.users.me.contacts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChatUsersMeContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.chat.users.me.contacts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.users.me.contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatUsersMeContacts<TError = unknown>(
  args: InferRequestType<typeof client.chat.users.me.contacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.chat.users.me.contacts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChatUsersMeContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.chat.users.me.contacts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.users.me.contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChatUsersMeContactsContactIdKey(
  args: InferRequestType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>,
) {
  return ['chat', '/chat/users/me/contacts/:contactId', args] as const
}

export function useGetChatUsersMeContactsContactId<TError = unknown>(
  args: InferRequestType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>>
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
        ? getGetChatUsersMeContactsContactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.chat.users.me.contacts[':contactId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatUsersMeContactsContactId<TError = unknown>(
  args: InferRequestType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>>
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
        ? getGetChatUsersMeContactsContactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.chat.users.me.contacts[':contactId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChatUsersUserIdChannelsKey(
  args: InferRequestType<(typeof client.chat.users)[':userId']['channels']['$get']>,
) {
  return ['chat', '/chat/users/:userId/channels', args] as const
}

export function useGetChatUsersUserIdChannels<TError = unknown>(
  args: InferRequestType<(typeof client.chat.users)[':userId']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.users)[':userId']['channels']['$get']>>
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
        ? getGetChatUsersUserIdChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.users)[':userId']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.users[':userId'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatUsersUserIdChannels<TError = unknown>(
  args: InferRequestType<(typeof client.chat.users)[':userId']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.users)[':userId']['channels']['$get']>>
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
        ? getGetChatUsersUserIdChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.users)[':userId']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.users[':userId'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChatUsersUserIdChannelsKey() {
  return ['chat', '/chat/users/:userId/channels', 'POST'] as const
}

export function usePostChatUsersUserIdChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.chat.users)[':userId']['channels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.chat.users)[':userId']['channels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatUsersUserIdChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.chat.users)[':userId']['channels']['$post']> },
      ) => parseResponse(client.chat.users[':userId'].channels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChatUsersUserIdChannelsChannelIdKey(
  args: InferRequestType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$get']>,
) {
  return ['chat', '/chat/users/:userId/channels/:channelId', args] as const
}

export function useGetChatUsersUserIdChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$get']>
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
        ? getGetChatUsersUserIdChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.chat.users[':userId'].channels[':channelId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatUsersUserIdChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$get']>
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
        ? getGetChatUsersUserIdChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.chat.users[':userId'].channels[':channelId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteChatUsersUserIdChannelsChannelIdKey() {
  return ['chat', '/chat/users/:userId/channels/:channelId', 'DELETE'] as const
}

export function useDeleteChatUsersUserIdChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChatUsersUserIdChannelsChannelIdKey()
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
            (typeof client.chat.users)[':userId']['channels'][':channelId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.chat.users[':userId'].channels[':channelId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchChatUsersUserIdChannelsChannelIdKey() {
  return ['chat', '/chat/users/:userId/channels/:channelId', 'PATCH'] as const
}

export function usePatchChatUsersUserIdChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchChatUsersUserIdChannelsChannelIdKey()
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
            (typeof client.chat.users)[':userId']['channels'][':channelId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.chat.users[':userId'].channels[':channelId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChatUsersUserIdChannelsChannelIdMembersKey(
  args: InferRequestType<
    (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$get']
  >,
) {
  return ['chat', '/chat/users/:userId/channels/:channelId/members', args] as const
}

export function useGetChatUsersUserIdChannelsChannelIdMembers<TError = unknown>(
  args: InferRequestType<
    (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$get']
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
        ? getGetChatUsersUserIdChannelsChannelIdMembersKey(args)
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
                (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$get']
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
          client.chat.users[':userId'].channels[':channelId'].members.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatUsersUserIdChannelsChannelIdMembers<TError = unknown>(
  args: InferRequestType<
    (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$get']
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
        ? getGetChatUsersUserIdChannelsChannelIdMembersKey(args)
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
                (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$get']
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
          client.chat.users[':userId'].channels[':channelId'].members.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostChatUsersUserIdChannelsChannelIdMembersKey() {
  return ['chat', '/chat/users/:userId/channels/:channelId/members', 'POST'] as const
}

export function usePostChatUsersUserIdChannelsChannelIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatUsersUserIdChannelsChannelIdMembersKey()
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
            (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$post']
          >
        },
      ) =>
        parseResponse(
          client.chat.users[':userId'].channels[':channelId'].members.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteChatUsersUserIdChannelsChannelIdMembersMemberIdKey() {
  return ['chat', '/chat/users/:userId/channels/:channelId/members/:memberId', 'DELETE'] as const
}

export function useDeleteChatUsersUserIdChannelsChannelIdMembersMemberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.chat.users)[':userId']['channels'][':channelId']['members'][':memberId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.chat.users)[':userId']['channels'][':channelId']['members'][':memberId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChatUsersUserIdChannelsChannelIdMembersMemberIdKey()
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
            (typeof client.chat.users)[':userId']['channels'][':channelId']['members'][':memberId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.chat.users[':userId'].channels[':channelId'].members[':memberId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChatUsersUserIdMessagesKey(
  args: InferRequestType<(typeof client.chat.users)[':userId']['messages']['$get']>,
) {
  return ['chat', '/chat/users/:userId/messages', args] as const
}

export function useGetChatUsersUserIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.chat.users)[':userId']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.users)[':userId']['messages']['$get']>>
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
        ? getGetChatUsersUserIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.users)[':userId']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.users[':userId'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatUsersUserIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.chat.users)[':userId']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.users)[':userId']['messages']['$get']>>
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
        ? getGetChatUsersUserIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.users)[':userId']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.users[':userId'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChatUsersUserIdMessagesKey() {
  return ['chat', '/chat/users/:userId/messages', 'POST'] as const
}

export function usePostChatUsersUserIdMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.chat.users)[':userId']['messages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.chat.users)[':userId']['messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatUsersUserIdMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.chat.users)[':userId']['messages']['$post']> },
      ) => parseResponse(client.chat.users[':userId'].messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutChatUsersUserIdMessagesMessageIdKey() {
  return ['chat', '/chat/users/:userId/messages/:messageId', 'PUT'] as const
}

export function usePutChatUsersUserIdMessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chat.users)[':userId']['messages'][':messageId']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.chat.users)[':userId']['messages'][':messageId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChatUsersUserIdMessagesMessageIdKey()
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
            (typeof client.chat.users)[':userId']['messages'][':messageId']['$put']
          >
        },
      ) =>
        parseResponse(client.chat.users[':userId'].messages[':messageId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChatUsersUserIdMessagesMessageIdKey() {
  return ['chat', '/chat/users/:userId/messages/:messageId', 'DELETE'] as const
}

export function useDeleteChatUsersUserIdMessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chat.users)[':userId']['messages'][':messageId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.chat.users)[':userId']['messages'][':messageId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChatUsersUserIdMessagesMessageIdKey()
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
            (typeof client.chat.users)[':userId']['messages'][':messageId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.chat.users[':userId'].messages[':messageId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetContactsKey(args: InferRequestType<typeof client.contacts.$get>) {
  return ['contacts', '/contacts', args] as const
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

export function getGetGroupsKey() {
  return ['groups', '/groups'] as const
}

export function useGetGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
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

export function getGetGroupsGroupIdKey(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
) {
  return ['groups', '/groups/:groupId', args] as const
}

export function useGetGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsGroupIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsGroupIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteGroupsGroupIdKey() {
  return ['groups', '/groups/:groupId', 'DELETE'] as const
}

export function useDeleteGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':groupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':groupId']['$delete']> },
      ) => parseResponse(client.groups[':groupId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGroupsGroupIdKey() {
  return ['groups', '/groups/:groupId', 'PATCH'] as const
}

export function usePatchGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$patch']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':groupId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':groupId']['$patch']> },
      ) => parseResponse(client.groups[':groupId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupIdLockSettingsKey(
  args: InferRequestType<(typeof client.groups)[':groupId']['lock_settings']['$get']>,
) {
  return ['groups', '/groups/:groupId/lock_settings', args] as const
}

export function useGetGroupsGroupIdLockSettings<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':groupId']['lock_settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['lock_settings']['$get']>>
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
        ? getGetGroupsGroupIdLockSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['lock_settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':groupId'].lock_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdLockSettings<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':groupId']['lock_settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['lock_settings']['$get']>>
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
        ? getGetGroupsGroupIdLockSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['lock_settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':groupId'].lock_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchGroupsGroupIdLockSettingsKey() {
  return ['groups', '/groups/:groupId/lock_settings', 'PATCH'] as const
}

export function usePatchGroupsGroupIdLockSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['lock_settings']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':groupId']['lock_settings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGroupsGroupIdLockSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.groups)[':groupId']['lock_settings']['$patch']> },
      ) => parseResponse(client.groups[':groupId'].lock_settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupIdMembersKey(
  args: InferRequestType<(typeof client.groups)[':groupId']['members']['$get']>,
) {
  return ['groups', '/groups/:groupId/members', args] as const
}

export function useGetGroupsGroupIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':groupId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['members']['$get']>>
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
        ? getGetGroupsGroupIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':groupId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':groupId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['members']['$get']>>
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
        ? getGetGroupsGroupIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':groupId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupsGroupIdMembersKey() {
  return ['groups', '/groups/:groupId/members', 'POST'] as const
}

export function usePostGroupsGroupIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':groupId']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':groupId']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsGroupIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':groupId']['members']['$post']> },
      ) => parseResponse(client.groups[':groupId'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupsGroupIdMembersMemberIdKey() {
  return ['groups', '/groups/:groupId/members/:memberId', 'DELETE'] as const
}

export function useDeleteGroupsGroupIdMembersMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups)[':groupId']['members'][':memberId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':groupId']['members'][':memberId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsGroupIdMembersMemberIdKey()
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
            (typeof client.groups)[':groupId']['members'][':memberId']['$delete']
          >
        },
      ) =>
        parseResponse(client.groups[':groupId'].members[':memberId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGroupsGroupIdMembersMemberIdKey() {
  return ['groups', '/groups/:groupId/members/:memberId', 'PATCH'] as const
}

export function usePatchGroupsGroupIdMembersMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups)[':groupId']['members'][':memberId']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':groupId']['members'][':memberId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGroupsGroupIdMembersMemberIdKey()
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
            (typeof client.groups)[':groupId']['members'][':memberId']['$patch']
          >
        },
      ) => parseResponse(client.groups[':groupId'].members[':memberId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupIdSettingsKey(
  args: InferRequestType<(typeof client.groups)[':groupId']['settings']['$get']>,
) {
  return ['groups', '/groups/:groupId/settings', args] as const
}

export function useGetGroupsGroupIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':groupId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['settings']['$get']>>
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
        ? getGetGroupsGroupIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':groupId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':groupId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['settings']['$get']>>
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
        ? getGetGroupsGroupIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':groupId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchGroupsGroupIdSettingsKey() {
  return ['groups', '/groups/:groupId/settings', 'PATCH'] as const
}

export function usePatchGroupsGroupIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['settings']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':groupId']['settings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGroupsGroupIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.groups)[':groupId']['settings']['$patch']> },
      ) => parseResponse(client.groups[':groupId'].settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsGroupIdSettingsVirtualBackgroundsKey() {
  return ['groups', '/groups/:groupId/settings/virtual_backgrounds', 'POST'] as const
}

export function usePostGroupsGroupIdSettingsVirtualBackgrounds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.groups)[':groupId']['settings']['virtual_backgrounds']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':groupId']['settings']['virtual_backgrounds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsGroupIdSettingsVirtualBackgroundsKey()
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
            (typeof client.groups)[':groupId']['settings']['virtual_backgrounds']['$post']
          >
        },
      ) =>
        parseResponse(
          client.groups[':groupId'].settings.virtual_backgrounds.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupsGroupIdSettingsVirtualBackgroundsKey() {
  return ['groups', '/groups/:groupId/settings/virtual_backgrounds', 'DELETE'] as const
}

export function useDeleteGroupsGroupIdSettingsVirtualBackgrounds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['settings']['virtual_backgrounds']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.groups)[':groupId']['settings']['virtual_backgrounds']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsGroupIdSettingsVirtualBackgroundsKey()
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
            (typeof client.groups)[':groupId']['settings']['virtual_backgrounds']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.groups[':groupId'].settings.virtual_backgrounds.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetH323DevicesKey(args: InferRequestType<typeof client.h323.devices.$get>) {
  return ['h323', '/h323/devices', args] as const
}

export function useGetH323Devices<TError = unknown>(
  args: InferRequestType<typeof client.h323.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.h323.devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetH323DevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.h323.devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.h323.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetH323Devices<TError = unknown>(
  args: InferRequestType<typeof client.h323.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.h323.devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetH323DevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.h323.devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.h323.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostH323DevicesKey() {
  return ['h323', '/h323/devices', 'POST'] as const
}

export function usePostH323Devices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.h323.devices.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.h323.devices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostH323DevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.h323.devices.$post> }) =>
        parseResponse(client.h323.devices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteH323DevicesDeviceIdKey() {
  return ['h323', '/h323/devices/:deviceId', 'DELETE'] as const
}

export function useDeleteH323DevicesDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.h323.devices)[':deviceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.h323.devices)[':deviceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteH323DevicesDeviceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.h323.devices)[':deviceId']['$delete']> },
      ) => parseResponse(client.h323.devices[':deviceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchH323DevicesDeviceIdKey() {
  return ['h323', '/h323/devices/:deviceId', 'PATCH'] as const
}

export function usePatchH323DevicesDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.h323.devices)[':deviceId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.h323.devices)[':deviceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchH323DevicesDeviceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.h323.devices)[':deviceId']['$patch']> },
      ) => parseResponse(client.h323.devices[':deviceId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostImChatMessagesKey() {
  return ['im', '/im/chat/messages', 'POST'] as const
}

export function usePostImChatMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.chat.messages.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.im.chat.messages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImChatMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.im.chat.messages.$post> }) =>
        parseResponse(client.im.chat.messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutImChatMessagesMessageIdKey() {
  return ['im', '/im/chat/messages/:message_id', 'PUT'] as const
}

export function usePutImChatMessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.im.chat.messages)[':message_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.im.chat.messages)[':message_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutImChatMessagesMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.im.chat.messages)[':message_id']['$put']> },
      ) => parseResponse(client.im.chat.messages[':message_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteImChatMessagesMessageIdKey() {
  return ['im', '/im/chat/messages/:message_id', 'DELETE'] as const
}

export function useDeleteImChatMessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.im.chat.messages)[':message_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.im.chat.messages)[':message_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteImChatMessagesMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.im.chat.messages)[':message_id']['$delete']> },
      ) => parseResponse(client.im.chat.messages[':message_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetImChatSessionsKey(
  args: InferRequestType<typeof client.im.chat.sessions.$get>,
) {
  return ['im', '/im/chat/sessions', args] as const
}

export function useGetImChatSessions<TError = unknown>(
  args: InferRequestType<typeof client.im.chat.sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.chat.sessions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImChatSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.chat.sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.im.chat.sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImChatSessions<TError = unknown>(
  args: InferRequestType<typeof client.im.chat.sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.chat.sessions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImChatSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.chat.sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.im.chat.sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetImChatSessionsSessionIdKey(
  args: InferRequestType<(typeof client.im.chat.sessions)[':sessionId']['$get']>,
) {
  return ['im', '/im/chat/sessions/:sessionId', args] as const
}

export function useGetImChatSessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.im.chat.sessions)[':sessionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.im.chat.sessions)[':sessionId']['$get']>>
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
        ? getGetImChatSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.im.chat.sessions)[':sessionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.im.chat.sessions[':sessionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImChatSessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.im.chat.sessions)[':sessionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.im.chat.sessions)[':sessionId']['$get']>>
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
        ? getGetImChatSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.im.chat.sessions)[':sessionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.im.chat.sessions[':sessionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetImGroupsKey() {
  return ['im', '/im/groups'] as const
}

export function useGetImGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.groups.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.groups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.im.groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.groups.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.groups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.im.groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostImGroupsKey() {
  return ['im', '/im/groups', 'POST'] as const
}

export function usePostImGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.groups.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.im.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.im.groups.$post> }) =>
        parseResponse(client.im.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetImGroupsGroupIdKey(
  args: InferRequestType<(typeof client.im.groups)[':groupId']['$get']>,
) {
  return ['im', '/im/groups/:groupId', args] as const
}

export function useGetImGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.im.groups)[':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.im.groups)[':groupId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetImGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.im.groups)[':groupId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.im.groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.im.groups)[':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.im.groups)[':groupId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetImGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.im.groups)[':groupId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.im.groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteImGroupsGroupIdKey() {
  return ['im', '/im/groups/:groupId', 'DELETE'] as const
}

export function useDeleteImGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.im.groups)[':groupId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.im.groups)[':groupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteImGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.im.groups)[':groupId']['$delete']> },
      ) => parseResponse(client.im.groups[':groupId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchImGroupsGroupIdKey() {
  return ['im', '/im/groups/:groupId', 'PATCH'] as const
}

export function usePatchImGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.im.groups)[':groupId']['$patch']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.im.groups)[':groupId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchImGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.im.groups)[':groupId']['$patch']> },
      ) => parseResponse(client.im.groups[':groupId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetImGroupsGroupIdMembersKey(
  args: InferRequestType<(typeof client.im.groups)[':groupId']['members']['$get']>,
) {
  return ['im', '/im/groups/:groupId/members', args] as const
}

export function useGetImGroupsGroupIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.im.groups)[':groupId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.im.groups)[':groupId']['members']['$get']>>
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
        ? getGetImGroupsGroupIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.im.groups)[':groupId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.im.groups[':groupId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImGroupsGroupIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.im.groups)[':groupId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.im.groups)[':groupId']['members']['$get']>>
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
        ? getGetImGroupsGroupIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.im.groups)[':groupId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.im.groups[':groupId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostImGroupsGroupIdMembersKey() {
  return ['im', '/im/groups/:groupId/members', 'POST'] as const
}

export function usePostImGroupsGroupIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.im.groups)[':groupId']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.im.groups)[':groupId']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImGroupsGroupIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.im.groups)[':groupId']['members']['$post']> },
      ) => parseResponse(client.im.groups[':groupId'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteImGroupsGroupIdMembersMemberIdKey() {
  return ['im', '/im/groups/:groupId/members/:memberId', 'DELETE'] as const
}

export function useDeleteImGroupsGroupIdMembersMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.im.groups)[':groupId']['members'][':memberId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.im.groups)[':groupId']['members'][':memberId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteImGroupsGroupIdMembersMemberIdKey()
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
            (typeof client.im.groups)[':groupId']['members'][':memberId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.im.groups[':groupId'].members[':memberId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostImUsersMeChatMessagesKey() {
  return ['im', '/im/users/me/chat/messages', 'POST'] as const
}

export function usePostImUsersMeChatMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.im.users.me.chat.messages.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.im.users.me.chat.messages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImUsersMeChatMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.im.users.me.chat.messages.$post> },
      ) => parseResponse(client.im.users.me.chat.messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetImUsersUserIdChatMessagesKey(
  args: InferRequestType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>,
) {
  return ['im', '/im/users/:userId/chat/messages', args] as const
}

export function useGetImUsersUserIdChatMessages<TError = unknown>(
  args: InferRequestType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>>
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
        ? getGetImUsersUserIdChatMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.im.users[':userId'].chat.messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImUsersUserIdChatMessages<TError = unknown>(
  args: InferRequestType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>>
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
        ? getGetImUsersUserIdChatMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.im.users[':userId'].chat.messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchLiveMeetingsMeetingIdEventsKey() {
  return ['live_meetings', '/live_meetings/:meetingId/events', 'PATCH'] as const
}

export function usePatchLiveMeetingsMeetingIdEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.live_meetings)[':meetingId']['events']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.live_meetings)[':meetingId']['events']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLiveMeetingsMeetingIdEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.live_meetings)[':meetingId']['events']['$patch']>
        },
      ) => parseResponse(client.live_meetings[':meetingId'].events.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeetingsMeetingIdKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['$get']>,
) {
  return ['meetings', '/meetings/:meetingId', args] as const
}

export function useGetMeetingsMeetingId<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeetingsMeetingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.meetings[':meetingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeetingsMeetingId<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeetingsMeetingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.meetings[':meetingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMeetingsMeetingIdKey() {
  return ['meetings', '/meetings/:meetingId', 'DELETE'] as const
}

export function useDeleteMeetingsMeetingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeetingsMeetingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.meetings)[':meetingId']['$delete']> },
      ) => parseResponse(client.meetings[':meetingId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMeetingsMeetingIdKey() {
  return ['meetings', '/meetings/:meetingId', 'PATCH'] as const
}

export function usePatchMeetingsMeetingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMeetingsMeetingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.meetings)[':meetingId']['$patch']> },
      ) => parseResponse(client.meetings[':meetingId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMeetingsMeetingIdBatchPollsKey() {
  return ['meetings', '/meetings/:meetingId/batch_polls', 'POST'] as const
}

export function usePostMeetingsMeetingIdBatchPolls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['batch_polls']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['batch_polls']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeetingsMeetingIdBatchPollsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.meetings)[':meetingId']['batch_polls']['$post']>
        },
      ) => parseResponse(client.meetings[':meetingId'].batch_polls.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeetingsMeetingIdInvitationKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['invitation']['$get']>,
) {
  return ['meetings', '/meetings/:meetingId/invitation', args] as const
}

export function useGetMeetingsMeetingIdInvitation<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['invitation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['invitation']['$get']>>
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
        ? getGetMeetingsMeetingIdInvitationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['invitation']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.meetings[':meetingId'].invitation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeetingsMeetingIdInvitation<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['invitation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['invitation']['$get']>>
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
        ? getGetMeetingsMeetingIdInvitationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['invitation']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.meetings[':meetingId'].invitation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeetingsMeetingIdLivestreamKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['$get']>,
) {
  return ['meetings', '/meetings/:meetingId/livestream', args] as const
}

export function useGetMeetingsMeetingIdLivestream<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['livestream']['$get']>>
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
        ? getGetMeetingsMeetingIdLivestreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['livestream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.meetings[':meetingId'].livestream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeetingsMeetingIdLivestream<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['livestream']['$get']>>
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
        ? getGetMeetingsMeetingIdLivestreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['livestream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.meetings[':meetingId'].livestream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchMeetingsMeetingIdLivestreamKey() {
  return ['meetings', '/meetings/:meetingId/livestream', 'PATCH'] as const
}

export function usePatchMeetingsMeetingIdLivestream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['livestream']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMeetingsMeetingIdLivestreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['$patch']>
        },
      ) => parseResponse(client.meetings[':meetingId'].livestream.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMeetingsMeetingIdLivestreamStatusKey() {
  return ['meetings', '/meetings/:meetingId/livestream/status', 'PATCH'] as const
}

export function usePatchMeetingsMeetingIdLivestreamStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['livestream']['status']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['status']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMeetingsMeetingIdLivestreamStatusKey()
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
            (typeof client.meetings)[':meetingId']['livestream']['status']['$patch']
          >
        },
      ) =>
        parseResponse(client.meetings[':meetingId'].livestream.status.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeetingsMeetingIdPollsKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['polls']['$get']>,
) {
  return ['meetings', '/meetings/:meetingId/polls', args] as const
}

export function useGetMeetingsMeetingIdPolls<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['polls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls']['$get']>>
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
        ? getGetMeetingsMeetingIdPollsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.meetings[':meetingId'].polls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeetingsMeetingIdPolls<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['polls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls']['$get']>>
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
        ? getGetMeetingsMeetingIdPollsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.meetings[':meetingId'].polls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMeetingsMeetingIdPollsKey() {
  return ['meetings', '/meetings/:meetingId/polls', 'POST'] as const
}

export function usePostMeetingsMeetingIdPolls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['polls']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeetingsMeetingIdPollsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.meetings)[':meetingId']['polls']['$post']> },
      ) => parseResponse(client.meetings[':meetingId'].polls.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeetingsMeetingIdPollsPollIdKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>,
) {
  return ['meetings', '/meetings/:meetingId/polls/:pollId', args] as const
}

export function useGetMeetingsMeetingIdPollsPollId<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>>
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
        ? getGetMeetingsMeetingIdPollsPollIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.meetings[':meetingId'].polls[':pollId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeetingsMeetingIdPollsPollId<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>>
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
        ? getGetMeetingsMeetingIdPollsPollIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.meetings[':meetingId'].polls[':pollId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMeetingsMeetingIdPollsPollIdKey() {
  return ['meetings', '/meetings/:meetingId/polls/:pollId', 'PUT'] as const
}

export function usePutMeetingsMeetingIdPollsPollId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeetingsMeetingIdPollsPollIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$put']>
        },
      ) => parseResponse(client.meetings[':meetingId'].polls[':pollId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeetingsMeetingIdPollsPollIdKey() {
  return ['meetings', '/meetings/:meetingId/polls/:pollId', 'DELETE'] as const
}

export function useDeleteMeetingsMeetingIdPollsPollId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeetingsMeetingIdPollsPollIdKey()
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
            (typeof client.meetings)[':meetingId']['polls'][':pollId']['$delete']
          >
        },
      ) =>
        parseResponse(client.meetings[':meetingId'].polls[':pollId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeetingsMeetingIdRecordingsKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['$get']>,
) {
  return ['meetings', '/meetings/:meetingId/recordings', args] as const
}

export function useGetMeetingsMeetingIdRecordings<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['recordings']['$get']>>
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
        ? getGetMeetingsMeetingIdRecordingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['recordings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.meetings[':meetingId'].recordings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeetingsMeetingIdRecordings<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['recordings']['$get']>>
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
        ? getGetMeetingsMeetingIdRecordingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['recordings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.meetings[':meetingId'].recordings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMeetingsMeetingIdRecordingsKey() {
  return ['meetings', '/meetings/:meetingId/recordings', 'DELETE'] as const
}

export function useDeleteMeetingsMeetingIdRecordings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['recordings']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeetingsMeetingIdRecordingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['$delete']>
        },
      ) => parseResponse(client.meetings[':meetingId'].recordings.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeetingsMeetingIdRecordingsRegistrantsKey(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']
  >,
) {
  return ['meetings', '/meetings/:meetingId/recordings/registrants', args] as const
}

export function useGetMeetingsMeetingIdRecordingsRegistrants<TError = unknown>(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']
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
        ? getGetMeetingsMeetingIdRecordingsRegistrantsKey(args)
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
                (typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']
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
          client.meetings[':meetingId'].recordings.registrants.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeetingsMeetingIdRecordingsRegistrants<TError = unknown>(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']
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
        ? getGetMeetingsMeetingIdRecordingsRegistrantsKey(args)
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
                (typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']
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
          client.meetings[':meetingId'].recordings.registrants.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMeetingsMeetingIdRecordingsRegistrantsKey() {
  return ['meetings', '/meetings/:meetingId/recordings/registrants', 'POST'] as const
}

export function usePostMeetingsMeetingIdRecordingsRegistrants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.meetings)[':meetingId']['recordings']['registrants']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['registrants']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeetingsMeetingIdRecordingsRegistrantsKey()
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
            (typeof client.meetings)[':meetingId']['recordings']['registrants']['$post']
          >
        },
      ) =>
        parseResponse(
          client.meetings[':meetingId'].recordings.registrants.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMeetingsMeetingIdRecordingsRegistrantsQuestionsKey(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$get']
  >,
) {
  return ['meetings', '/meetings/:meetingId/recordings/registrants/questions', args] as const
}

export function useGetMeetingsMeetingIdRecordingsRegistrantsQuestions<TError = unknown>(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$get']
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
        ? getGetMeetingsMeetingIdRecordingsRegistrantsQuestionsKey(args)
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
                (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$get']
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
          client.meetings[':meetingId'].recordings.registrants.questions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeetingsMeetingIdRecordingsRegistrantsQuestions<TError = unknown>(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$get']
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
        ? getGetMeetingsMeetingIdRecordingsRegistrantsQuestionsKey(args)
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
                (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$get']
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
          client.meetings[':meetingId'].recordings.registrants.questions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchMeetingsMeetingIdRecordingsRegistrantsQuestionsKey() {
  return ['meetings', '/meetings/:meetingId/recordings/registrants/questions', 'PATCH'] as const
}

export function usePatchMeetingsMeetingIdRecordingsRegistrantsQuestions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMeetingsMeetingIdRecordingsRegistrantsQuestionsKey()
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
            (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.meetings[':meetingId'].recordings.registrants.questions.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMeetingsMeetingIdRecordingsRegistrantsStatusKey() {
  return ['meetings', '/meetings/:meetingId/recordings/registrants/status', 'PUT'] as const
}

export function usePutMeetingsMeetingIdRecordingsRegistrantsStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meetings)[':meetingId']['recordings']['registrants']['status']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.meetings)[':meetingId']['recordings']['registrants']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeetingsMeetingIdRecordingsRegistrantsStatusKey()
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
            (typeof client.meetings)[':meetingId']['recordings']['registrants']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.meetings[':meetingId'].recordings.registrants.status.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMeetingsMeetingIdRecordingsSettingsKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$get']>,
) {
  return ['meetings', '/meetings/:meetingId/recordings/settings', args] as const
}

export function useGetMeetingsMeetingIdRecordingsSettings<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$get']>
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
        ? getGetMeetingsMeetingIdRecordingsSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.meetings[':meetingId'].recordings.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeetingsMeetingIdRecordingsSettings<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$get']>
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
        ? getGetMeetingsMeetingIdRecordingsSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.meetings[':meetingId'].recordings.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchMeetingsMeetingIdRecordingsSettingsKey() {
  return ['meetings', '/meetings/:meetingId/recordings/settings', 'PATCH'] as const
}

export function usePatchMeetingsMeetingIdRecordingsSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMeetingsMeetingIdRecordingsSettingsKey()
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
            (typeof client.meetings)[':meetingId']['recordings']['settings']['$patch']
          >
        },
      ) =>
        parseResponse(client.meetings[':meetingId'].recordings.settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMeetingsMeetingIdRecordingsStatusKey() {
  return ['meetings', '/meetings/:meetingId/recordings/status', 'PUT'] as const
}

export function usePutMeetingsMeetingIdRecordingsStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['recordings']['status']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeetingsMeetingIdRecordingsStatusKey()
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
            (typeof client.meetings)[':meetingId']['recordings']['status']['$put']
          >
        },
      ) => parseResponse(client.meetings[':meetingId'].recordings.status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeetingsMeetingIdRecordingsRecordingIdKey() {
  return ['meetings', '/meetings/:meetingId/recordings/:recordingId', 'DELETE'] as const
}

export function useDeleteMeetingsMeetingIdRecordingsRecordingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meetings)[':meetingId']['recordings'][':recordingId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.meetings)[':meetingId']['recordings'][':recordingId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeetingsMeetingIdRecordingsRecordingIdKey()
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
            (typeof client.meetings)[':meetingId']['recordings'][':recordingId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.meetings[':meetingId'].recordings[':recordingId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMeetingsMeetingIdRecordingsRecordingIdStatusKey() {
  return ['meetings', '/meetings/:meetingId/recordings/:recordingId/status', 'PUT'] as const
}

export function usePutMeetingsMeetingIdRecordingsRecordingIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meetings)[':meetingId']['recordings'][':recordingId']['status']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.meetings)[':meetingId']['recordings'][':recordingId']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeetingsMeetingIdRecordingsRecordingIdStatusKey()
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
            (typeof client.meetings)[':meetingId']['recordings'][':recordingId']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.meetings[':meetingId'].recordings[':recordingId'].status.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMeetingsMeetingIdRegistrantsKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['$get']>,
) {
  return ['meetings', '/meetings/:meetingId/registrants', args] as const
}

export function useGetMeetingsMeetingIdRegistrants<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['registrants']['$get']>>
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
        ? getGetMeetingsMeetingIdRegistrantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['registrants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.meetings[':meetingId'].registrants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeetingsMeetingIdRegistrants<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['registrants']['$get']>>
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
        ? getGetMeetingsMeetingIdRegistrantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['registrants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.meetings[':meetingId'].registrants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMeetingsMeetingIdRegistrantsKey() {
  return ['meetings', '/meetings/:meetingId/registrants', 'POST'] as const
}

export function usePostMeetingsMeetingIdRegistrants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['registrants']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeetingsMeetingIdRegistrantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['$post']>
        },
      ) => parseResponse(client.meetings[':meetingId'].registrants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeetingsMeetingIdRegistrantsQuestionsKey(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['registrants']['questions']['$get']
  >,
) {
  return ['meetings', '/meetings/:meetingId/registrants/questions', args] as const
}

export function useGetMeetingsMeetingIdRegistrantsQuestions<TError = unknown>(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['registrants']['questions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['registrants']['questions']['$get']>
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
        ? getGetMeetingsMeetingIdRegistrantsQuestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['registrants']['questions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.meetings[':meetingId'].registrants.questions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeetingsMeetingIdRegistrantsQuestions<TError = unknown>(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['registrants']['questions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['registrants']['questions']['$get']>
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
        ? getGetMeetingsMeetingIdRegistrantsQuestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['registrants']['questions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.meetings[':meetingId'].registrants.questions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchMeetingsMeetingIdRegistrantsQuestionsKey() {
  return ['meetings', '/meetings/:meetingId/registrants/questions', 'PATCH'] as const
}

export function usePatchMeetingsMeetingIdRegistrantsQuestions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meetings)[':meetingId']['registrants']['questions']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['questions']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMeetingsMeetingIdRegistrantsQuestionsKey()
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
            (typeof client.meetings)[':meetingId']['registrants']['questions']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.meetings[':meetingId'].registrants.questions.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMeetingsMeetingIdRegistrantsStatusKey() {
  return ['meetings', '/meetings/:meetingId/registrants/status', 'PUT'] as const
}

export function usePutMeetingsMeetingIdRegistrantsStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['registrants']['status']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeetingsMeetingIdRegistrantsStatusKey()
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
            (typeof client.meetings)[':meetingId']['registrants']['status']['$put']
          >
        },
      ) => parseResponse(client.meetings[':meetingId'].registrants.status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeetingsMeetingIdRegistrantsRegistrantIdKey() {
  return ['meetings', '/meetings/:meetingId/registrants/:registrantId', 'DELETE'] as const
}

export function useDeleteMeetingsMeetingIdRegistrantsRegistrantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meetings)[':meetingId']['registrants'][':registrantId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.meetings)[':meetingId']['registrants'][':registrantId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeetingsMeetingIdRegistrantsRegistrantIdKey()
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
            (typeof client.meetings)[':meetingId']['registrants'][':registrantId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.meetings[':meetingId'].registrants[':registrantId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMeetingsMeetingIdStatusKey() {
  return ['meetings', '/meetings/:meetingId/status', 'PUT'] as const
}

export function usePutMeetingsMeetingIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeetingsMeetingIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.meetings)[':meetingId']['status']['$put']> },
      ) => parseResponse(client.meetings[':meetingId'].status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetricsClientFeedbackKey(
  args: InferRequestType<typeof client.metrics.client.feedback.$get>,
) {
  return ['metrics', '/metrics/client/feedback', args] as const
}

export function useGetMetricsClientFeedback<TError = unknown>(
  args: InferRequestType<typeof client.metrics.client.feedback.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.feedback.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsClientFeedbackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.feedback.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.client.feedback.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsClientFeedback<TError = unknown>(
  args: InferRequestType<typeof client.metrics.client.feedback.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.feedback.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsClientFeedbackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.feedback.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.client.feedback.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsClientFeedbackFeedbackIdKey(
  args: InferRequestType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>,
) {
  return ['metrics', '/metrics/client/feedback/:feedbackId', args] as const
}

export function useGetMetricsClientFeedbackFeedbackId<TError = unknown>(
  args: InferRequestType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>>
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
        ? getGetMetricsClientFeedbackFeedbackIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.metrics.client.feedback[':feedbackId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsClientFeedbackFeedbackId<TError = unknown>(
  args: InferRequestType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>>
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
        ? getGetMetricsClientFeedbackFeedbackIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.metrics.client.feedback[':feedbackId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsClientSatisfactionKey(
  args: InferRequestType<typeof client.metrics.client.satisfaction.$get>,
) {
  return ['metrics', '/metrics/client/satisfaction', args] as const
}

export function useGetMetricsClientSatisfaction<TError = unknown>(
  args: InferRequestType<typeof client.metrics.client.satisfaction.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.satisfaction.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsClientSatisfactionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.satisfaction.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.client.satisfaction.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsClientSatisfaction<TError = unknown>(
  args: InferRequestType<typeof client.metrics.client.satisfaction.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.satisfaction.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsClientSatisfactionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.satisfaction.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.client.satisfaction.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsCrcKey(args: InferRequestType<typeof client.metrics.crc.$get>) {
  return ['metrics', '/metrics/crc', args] as const
}

export function useGetMetricsCrc<TError = unknown>(
  args: InferRequestType<typeof client.metrics.crc.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.crc.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsCrcKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.crc.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.crc.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsCrc<TError = unknown>(
  args: InferRequestType<typeof client.metrics.crc.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.crc.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsCrcKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.crc.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.crc.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsImKey(args: InferRequestType<typeof client.metrics.im.$get>) {
  return ['metrics', '/metrics/im', args] as const
}

export function useGetMetricsIm<TError = unknown>(
  args: InferRequestType<typeof client.metrics.im.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.im.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsImKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.im.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.im.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsIm<TError = unknown>(
  args: InferRequestType<typeof client.metrics.im.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.im.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsImKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.im.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.im.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsIssuesZoomroomsKey(
  args: InferRequestType<typeof client.metrics.issues.zoomrooms.$get>,
) {
  return ['metrics', '/metrics/issues/zoomrooms', args] as const
}

export function useGetMetricsIssuesZoomrooms<TError = unknown>(
  args: InferRequestType<typeof client.metrics.issues.zoomrooms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.issues.zoomrooms.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsIssuesZoomroomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.issues.zoomrooms.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.issues.zoomrooms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsIssuesZoomrooms<TError = unknown>(
  args: InferRequestType<typeof client.metrics.issues.zoomrooms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.issues.zoomrooms.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsIssuesZoomroomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.issues.zoomrooms.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.issues.zoomrooms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsIssuesZoomroomsZoomroomIdKey(
  args: InferRequestType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>,
) {
  return ['metrics', '/metrics/issues/zoomrooms/:zoomroomId', args] as const
}

export function useGetMetricsIssuesZoomroomsZoomroomId<TError = unknown>(
  args: InferRequestType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>>
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
        ? getGetMetricsIssuesZoomroomsZoomroomIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.metrics.issues.zoomrooms[':zoomroomId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsIssuesZoomroomsZoomroomId<TError = unknown>(
  args: InferRequestType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>>
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
        ? getGetMetricsIssuesZoomroomsZoomroomIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.metrics.issues.zoomrooms[':zoomroomId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsMeetingsKey(
  args: InferRequestType<typeof client.metrics.meetings.$get>,
) {
  return ['metrics', '/metrics/meetings', args] as const
}

export function useGetMetricsMeetings<TError = unknown>(
  args: InferRequestType<typeof client.metrics.meetings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.meetings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsMeetingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.meetings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.meetings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsMeetings<TError = unknown>(
  args: InferRequestType<typeof client.metrics.meetings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.meetings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsMeetingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.meetings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.meetings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsMeetingsMeetingIdKey(
  args: InferRequestType<(typeof client.metrics.meetings)[':meetingId']['$get']>,
) {
  return ['metrics', '/metrics/meetings/:meetingId', args] as const
}

export function useGetMetricsMeetingsMeetingId<TError = unknown>(
  args: InferRequestType<(typeof client.metrics.meetings)[':meetingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.meetings)[':meetingId']['$get']>>
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
        ? getGetMetricsMeetingsMeetingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.meetings)[':meetingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.meetings[':meetingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsMeetingsMeetingId<TError = unknown>(
  args: InferRequestType<(typeof client.metrics.meetings)[':meetingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.meetings)[':meetingId']['$get']>>
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
        ? getGetMetricsMeetingsMeetingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.meetings)[':meetingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.meetings[':meetingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsMeetingsMeetingIdParticipantsKey(
  args: InferRequestType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>,
) {
  return ['metrics', '/metrics/meetings/:meetingId/participants', args] as const
}

export function useGetMetricsMeetingsMeetingIdParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>
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
        ? getGetMetricsMeetingsMeetingIdParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.metrics.meetings[':meetingId'].participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsMeetingsMeetingIdParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>
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
        ? getGetMetricsMeetingsMeetingIdParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.metrics.meetings[':meetingId'].participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsMeetingsMeetingIdParticipantsQosKey(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']
  >,
) {
  return ['metrics', '/metrics/meetings/:meetingId/participants/qos', args] as const
}

export function useGetMetricsMeetingsMeetingIdParticipantsQos<TError = unknown>(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']
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
        ? getGetMetricsMeetingsMeetingIdParticipantsQosKey(args)
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
                (typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']
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
          client.metrics.meetings[':meetingId'].participants.qos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsMeetingsMeetingIdParticipantsQos<TError = unknown>(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']
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
        ? getGetMetricsMeetingsMeetingIdParticipantsQosKey(args)
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
                (typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']
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
          client.metrics.meetings[':meetingId'].participants.qos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsMeetingsMeetingIdParticipantsSatisfactionKey(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['satisfaction']['$get']
  >,
) {
  return ['metrics', '/metrics/meetings/:meetingId/participants/satisfaction', args] as const
}

export function useGetMetricsMeetingsMeetingIdParticipantsSatisfaction<TError = unknown>(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['satisfaction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metrics.meetings)[':meetingId']['participants']['satisfaction']['$get']
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
        ? getGetMetricsMeetingsMeetingIdParticipantsSatisfactionKey(args)
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
                (typeof client.metrics.meetings)[':meetingId']['participants']['satisfaction']['$get']
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
          client.metrics.meetings[':meetingId'].participants.satisfaction.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsMeetingsMeetingIdParticipantsSatisfaction<TError = unknown>(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['satisfaction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metrics.meetings)[':meetingId']['participants']['satisfaction']['$get']
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
        ? getGetMetricsMeetingsMeetingIdParticipantsSatisfactionKey(args)
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
                (typeof client.metrics.meetings)[':meetingId']['participants']['satisfaction']['$get']
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
          client.metrics.meetings[':meetingId'].participants.satisfaction.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsMeetingsMeetingIdParticipantsSharingKey(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['sharing']['$get']
  >,
) {
  return ['metrics', '/metrics/meetings/:meetingId/participants/sharing', args] as const
}

export function useGetMetricsMeetingsMeetingIdParticipantsSharing<TError = unknown>(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['sharing']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metrics.meetings)[':meetingId']['participants']['sharing']['$get']
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
        ? getGetMetricsMeetingsMeetingIdParticipantsSharingKey(args)
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
                (typeof client.metrics.meetings)[':meetingId']['participants']['sharing']['$get']
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
          client.metrics.meetings[':meetingId'].participants.sharing.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsMeetingsMeetingIdParticipantsSharing<TError = unknown>(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['sharing']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metrics.meetings)[':meetingId']['participants']['sharing']['$get']
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
        ? getGetMetricsMeetingsMeetingIdParticipantsSharingKey(args)
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
                (typeof client.metrics.meetings)[':meetingId']['participants']['sharing']['$get']
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
          client.metrics.meetings[':meetingId'].participants.sharing.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsMeetingsMeetingIdParticipantsParticipantIdQosKey(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants'][':participantId']['qos']['$get']
  >,
) {
  return ['metrics', '/metrics/meetings/:meetingId/participants/:participantId/qos', args] as const
}

export function useGetMetricsMeetingsMeetingIdParticipantsParticipantIdQos<TError = unknown>(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants'][':participantId']['qos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metrics.meetings)[':meetingId']['participants'][':participantId']['qos']['$get']
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
        ? getGetMetricsMeetingsMeetingIdParticipantsParticipantIdQosKey(args)
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
                (typeof client.metrics.meetings)[':meetingId']['participants'][':participantId']['qos']['$get']
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
          client.metrics.meetings[':meetingId'].participants[':participantId'].qos.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsMeetingsMeetingIdParticipantsParticipantIdQos<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants'][':participantId']['qos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metrics.meetings)[':meetingId']['participants'][':participantId']['qos']['$get']
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
        ? getGetMetricsMeetingsMeetingIdParticipantsParticipantIdQosKey(args)
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
                (typeof client.metrics.meetings)[':meetingId']['participants'][':participantId']['qos']['$get']
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
          client.metrics.meetings[':meetingId'].participants[':participantId'].qos.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsWebinarsKey(
  args: InferRequestType<typeof client.metrics.webinars.$get>,
) {
  return ['metrics', '/metrics/webinars', args] as const
}

export function useGetMetricsWebinars<TError = unknown>(
  args: InferRequestType<typeof client.metrics.webinars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.webinars.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsWebinarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.webinars.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.webinars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsWebinars<TError = unknown>(
  args: InferRequestType<typeof client.metrics.webinars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.webinars.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsWebinarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.webinars.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.webinars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsWebinarsWebinarIdKey(
  args: InferRequestType<(typeof client.metrics.webinars)[':webinarId']['$get']>,
) {
  return ['metrics', '/metrics/webinars/:webinarId', args] as const
}

export function useGetMetricsWebinarsWebinarId<TError = unknown>(
  args: InferRequestType<(typeof client.metrics.webinars)[':webinarId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.webinars)[':webinarId']['$get']>>
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
        ? getGetMetricsWebinarsWebinarIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.webinars)[':webinarId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.webinars[':webinarId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsWebinarsWebinarId<TError = unknown>(
  args: InferRequestType<(typeof client.metrics.webinars)[':webinarId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.webinars)[':webinarId']['$get']>>
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
        ? getGetMetricsWebinarsWebinarIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.webinars)[':webinarId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.webinars[':webinarId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsWebinarsWebinarIdParticipantsKey(
  args: InferRequestType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>,
) {
  return ['metrics', '/metrics/webinars/:webinarId/participants', args] as const
}

export function useGetMetricsWebinarsWebinarIdParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>
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
        ? getGetMetricsWebinarsWebinarIdParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.metrics.webinars[':webinarId'].participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsWebinarsWebinarIdParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>
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
        ? getGetMetricsWebinarsWebinarIdParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.metrics.webinars[':webinarId'].participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsWebinarsWebinarIdParticipantsQosKey(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']
  >,
) {
  return ['metrics', '/metrics/webinars/:webinarId/participants/qos', args] as const
}

export function useGetMetricsWebinarsWebinarIdParticipantsQos<TError = unknown>(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']
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
        ? getGetMetricsWebinarsWebinarIdParticipantsQosKey(args)
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
                (typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']
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
          client.metrics.webinars[':webinarId'].participants.qos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsWebinarsWebinarIdParticipantsQos<TError = unknown>(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']
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
        ? getGetMetricsWebinarsWebinarIdParticipantsQosKey(args)
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
                (typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']
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
          client.metrics.webinars[':webinarId'].participants.qos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsWebinarsWebinarIdParticipantsSatisfactionKey(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['satisfaction']['$get']
  >,
) {
  return ['metrics', '/metrics/webinars/:webinarId/participants/satisfaction', args] as const
}

export function useGetMetricsWebinarsWebinarIdParticipantsSatisfaction<TError = unknown>(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['satisfaction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metrics.webinars)[':webinarId']['participants']['satisfaction']['$get']
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
        ? getGetMetricsWebinarsWebinarIdParticipantsSatisfactionKey(args)
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
                (typeof client.metrics.webinars)[':webinarId']['participants']['satisfaction']['$get']
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
          client.metrics.webinars[':webinarId'].participants.satisfaction.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsWebinarsWebinarIdParticipantsSatisfaction<TError = unknown>(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['satisfaction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metrics.webinars)[':webinarId']['participants']['satisfaction']['$get']
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
        ? getGetMetricsWebinarsWebinarIdParticipantsSatisfactionKey(args)
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
                (typeof client.metrics.webinars)[':webinarId']['participants']['satisfaction']['$get']
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
          client.metrics.webinars[':webinarId'].participants.satisfaction.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsWebinarsWebinarIdParticipantsSharingKey(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['sharing']['$get']
  >,
) {
  return ['metrics', '/metrics/webinars/:webinarId/participants/sharing', args] as const
}

export function useGetMetricsWebinarsWebinarIdParticipantsSharing<TError = unknown>(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['sharing']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metrics.webinars)[':webinarId']['participants']['sharing']['$get']
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
        ? getGetMetricsWebinarsWebinarIdParticipantsSharingKey(args)
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
                (typeof client.metrics.webinars)[':webinarId']['participants']['sharing']['$get']
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
          client.metrics.webinars[':webinarId'].participants.sharing.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsWebinarsWebinarIdParticipantsSharing<TError = unknown>(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['sharing']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metrics.webinars)[':webinarId']['participants']['sharing']['$get']
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
        ? getGetMetricsWebinarsWebinarIdParticipantsSharingKey(args)
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
                (typeof client.metrics.webinars)[':webinarId']['participants']['sharing']['$get']
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
          client.metrics.webinars[':webinarId'].participants.sharing.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsWebinarsWebinarIdParticipantsParticipantIdQosKey(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants'][':participantId']['qos']['$get']
  >,
) {
  return ['metrics', '/metrics/webinars/:webinarId/participants/:participantId/qos', args] as const
}

export function useGetMetricsWebinarsWebinarIdParticipantsParticipantIdQos<TError = unknown>(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants'][':participantId']['qos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metrics.webinars)[':webinarId']['participants'][':participantId']['qos']['$get']
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
        ? getGetMetricsWebinarsWebinarIdParticipantsParticipantIdQosKey(args)
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
                (typeof client.metrics.webinars)[':webinarId']['participants'][':participantId']['qos']['$get']
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
          client.metrics.webinars[':webinarId'].participants[':participantId'].qos.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsWebinarsWebinarIdParticipantsParticipantIdQos<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants'][':participantId']['qos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metrics.webinars)[':webinarId']['participants'][':participantId']['qos']['$get']
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
        ? getGetMetricsWebinarsWebinarIdParticipantsParticipantIdQosKey(args)
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
                (typeof client.metrics.webinars)[':webinarId']['participants'][':participantId']['qos']['$get']
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
          client.metrics.webinars[':webinarId'].participants[':participantId'].qos.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsZoomroomsKey(
  args: InferRequestType<typeof client.metrics.zoomrooms.$get>,
) {
  return ['metrics', '/metrics/zoomrooms', args] as const
}

export function useGetMetricsZoomrooms<TError = unknown>(
  args: InferRequestType<typeof client.metrics.zoomrooms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsZoomroomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.zoomrooms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsZoomrooms<TError = unknown>(
  args: InferRequestType<typeof client.metrics.zoomrooms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsZoomroomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.zoomrooms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsZoomroomsIssuesKey(
  args: InferRequestType<typeof client.metrics.zoomrooms.issues.$get>,
) {
  return ['metrics', '/metrics/zoomrooms/issues', args] as const
}

export function useGetMetricsZoomroomsIssues<TError = unknown>(
  args: InferRequestType<typeof client.metrics.zoomrooms.issues.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.issues.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsZoomroomsIssuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.issues.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.zoomrooms.issues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsZoomroomsIssues<TError = unknown>(
  args: InferRequestType<typeof client.metrics.zoomrooms.issues.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.issues.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsZoomroomsIssuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.issues.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.zoomrooms.issues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsZoomroomsZoomroomIdKey(
  args: InferRequestType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>,
) {
  return ['metrics', '/metrics/zoomrooms/:zoomroomId', args] as const
}

export function useGetMetricsZoomroomsZoomroomId<TError = unknown>(
  args: InferRequestType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>>
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
        ? getGetMetricsZoomroomsZoomroomIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.zoomrooms[':zoomroomId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsZoomroomsZoomroomId<TError = unknown>(
  args: InferRequestType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>>
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
        ? getGetMetricsZoomroomsZoomroomIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.zoomrooms[':zoomroomId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPastMeetingsMeetingIdFilesKey(
  args: InferRequestType<(typeof client.past_meetings)[':meetingId']['files']['$get']>,
) {
  return ['past_meetings', '/past_meetings/:meetingId/files', args] as const
}

export function useGetPastMeetingsMeetingIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.past_meetings)[':meetingId']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['files']['$get']>>
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
        ? getGetPastMeetingsMeetingIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.past_meetings[':meetingId'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPastMeetingsMeetingIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.past_meetings)[':meetingId']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['files']['$get']>>
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
        ? getGetPastMeetingsMeetingIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.past_meetings[':meetingId'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPastMeetingsMeetingIdInstancesKey(
  args: InferRequestType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>,
) {
  return ['past_meetings', '/past_meetings/:meetingId/instances', args] as const
}

export function useGetPastMeetingsMeetingIdInstances<TError = unknown>(
  args: InferRequestType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>>
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
        ? getGetPastMeetingsMeetingIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.past_meetings[':meetingId'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPastMeetingsMeetingIdInstances<TError = unknown>(
  args: InferRequestType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>>
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
        ? getGetPastMeetingsMeetingIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.past_meetings[':meetingId'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPastMeetingsMeetingIdPollsKey(
  args: InferRequestType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>,
) {
  return ['past_meetings', '/past_meetings/:meetingId/polls', args] as const
}

export function useGetPastMeetingsMeetingIdPolls<TError = unknown>(
  args: InferRequestType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>>
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
        ? getGetPastMeetingsMeetingIdPollsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.past_meetings[':meetingId'].polls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPastMeetingsMeetingIdPolls<TError = unknown>(
  args: InferRequestType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>>
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
        ? getGetPastMeetingsMeetingIdPollsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.past_meetings[':meetingId'].polls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPastMeetingsMeetingUUIDKey(
  args: InferRequestType<(typeof client.past_meetings)[':meetingUUID']['$get']>,
) {
  return ['past_meetings', '/past_meetings/:meetingUUID', args] as const
}

export function useGetPastMeetingsMeetingUUID<TError = unknown>(
  args: InferRequestType<(typeof client.past_meetings)[':meetingUUID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_meetings)[':meetingUUID']['$get']>>
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
        ? getGetPastMeetingsMeetingUUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_meetings)[':meetingUUID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.past_meetings[':meetingUUID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPastMeetingsMeetingUUID<TError = unknown>(
  args: InferRequestType<(typeof client.past_meetings)[':meetingUUID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_meetings)[':meetingUUID']['$get']>>
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
        ? getGetPastMeetingsMeetingUUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_meetings)[':meetingUUID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.past_meetings[':meetingUUID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPastMeetingsMeetingUUIDParticipantsKey(
  args: InferRequestType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>,
) {
  return ['past_meetings', '/past_meetings/:meetingUUID/participants', args] as const
}

export function useGetPastMeetingsMeetingUUIDParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>
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
        ? getGetPastMeetingsMeetingUUIDParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.past_meetings[':meetingUUID'].participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPastMeetingsMeetingUUIDParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>
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
        ? getGetPastMeetingsMeetingUUIDParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.past_meetings[':meetingUUID'].participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPastWebinarsWebinarUUIDAbsenteesKey(
  args: InferRequestType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>,
) {
  return ['past_webinars', '/past_webinars/:WebinarUUID/absentees', args] as const
}

export function useGetPastWebinarsWebinarUUIDAbsentees<TError = unknown>(
  args: InferRequestType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>>
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
        ? getGetPastWebinarsWebinarUUIDAbsenteesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.past_webinars[':WebinarUUID'].absentees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPastWebinarsWebinarUUIDAbsentees<TError = unknown>(
  args: InferRequestType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>>
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
        ? getGetPastWebinarsWebinarUUIDAbsenteesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.past_webinars[':WebinarUUID'].absentees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPastWebinarsWebinarIdFilesKey(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['files']['$get']>,
) {
  return ['past_webinars', '/past_webinars/:webinarId/files', args] as const
}

export function useGetPastWebinarsWebinarIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['files']['$get']>>
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
        ? getGetPastWebinarsWebinarIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.past_webinars[':webinarId'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPastWebinarsWebinarIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['files']['$get']>>
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
        ? getGetPastWebinarsWebinarIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.past_webinars[':webinarId'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPastWebinarsWebinarIdInstancesKey(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>,
) {
  return ['past_webinars', '/past_webinars/:webinarId/instances', args] as const
}

export function useGetPastWebinarsWebinarIdInstances<TError = unknown>(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>>
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
        ? getGetPastWebinarsWebinarIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.past_webinars[':webinarId'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPastWebinarsWebinarIdInstances<TError = unknown>(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>>
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
        ? getGetPastWebinarsWebinarIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.past_webinars[':webinarId'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPastWebinarsWebinarIdParticipantsKey(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>,
) {
  return ['past_webinars', '/past_webinars/:webinarId/participants', args] as const
}

export function useGetPastWebinarsWebinarIdParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>>
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
        ? getGetPastWebinarsWebinarIdParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.past_webinars[':webinarId'].participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPastWebinarsWebinarIdParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>>
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
        ? getGetPastWebinarsWebinarIdParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.past_webinars[':webinarId'].participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPastWebinarsWebinarIdPollsKey(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>,
) {
  return ['past_webinars', '/past_webinars/:webinarId/polls', args] as const
}

export function useGetPastWebinarsWebinarIdPolls<TError = unknown>(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>>
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
        ? getGetPastWebinarsWebinarIdPollsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.past_webinars[':webinarId'].polls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPastWebinarsWebinarIdPolls<TError = unknown>(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>>
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
        ? getGetPastWebinarsWebinarIdPollsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.past_webinars[':webinarId'].polls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPastWebinarsWebinarIdQaKey(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>,
) {
  return ['past_webinars', '/past_webinars/:webinarId/qa', args] as const
}

export function useGetPastWebinarsWebinarIdQa<TError = unknown>(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>>
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
        ? getGetPastWebinarsWebinarIdQaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.past_webinars[':webinarId'].qa.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPastWebinarsWebinarIdQa<TError = unknown>(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>>
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
        ? getGetPastWebinarsWebinarIdQaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.past_webinars[':webinarId'].qa.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhoneAutoReceptionistsKey() {
  return ['phone', '/phone/auto_receptionists', 'POST'] as const
}

export function usePostPhoneAutoReceptionists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.auto_receptionists.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.phone.auto_receptionists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneAutoReceptionistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.phone.auto_receptionists.$post> },
      ) => parseResponse(client.phone.auto_receptionists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPhoneAutoReceptionistsAutoReceptionistIdKey() {
  return ['phone', '/phone/auto_receptionists/:autoReceptionistId', 'PATCH'] as const
}

export function usePatchPhoneAutoReceptionistsAutoReceptionistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.auto_receptionists)[':autoReceptionistId']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.auto_receptionists)[':autoReceptionistId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPhoneAutoReceptionistsAutoReceptionistIdKey()
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
            (typeof client.phone.auto_receptionists)[':autoReceptionistId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.phone.auto_receptionists[':autoReceptionistId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersKey() {
  return ['phone', '/phone/auto_receptionists/:autoReceptionistId/phone_numbers', 'POST'] as const
}

export function usePostPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersKey()
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
            (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.phone.auto_receptionists[':autoReceptionistId'].phone_numbers.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersKey() {
  return ['phone', '/phone/auto_receptionists/:autoReceptionistId/phone_numbers', 'DELETE'] as const
}

export function useDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersKey()
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
            (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.phone.auto_receptionists[':autoReceptionistId'].phone_numbers.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberIdKey() {
  return [
    'phone',
    '/phone/auto_receptionists/:autoReceptionistId/phone_numbers/:phoneNumberId',
    'DELETE',
  ] as const
}

export function useDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers'][':phoneNumberId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers'][':phoneNumberId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberIdKey()
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
            (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers'][':phoneNumberId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.phone.auto_receptionists[':autoReceptionistId'].phone_numbers[
            ':phoneNumberId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneBlockedListKey(
  args: InferRequestType<typeof client.phone.blocked_list.$get>,
) {
  return ['phone', '/phone/blocked_list', args] as const
}

export function useGetPhoneBlockedList<TError = unknown>(
  args: InferRequestType<typeof client.phone.blocked_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.blocked_list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneBlockedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.blocked_list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.blocked_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneBlockedList<TError = unknown>(
  args: InferRequestType<typeof client.phone.blocked_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.blocked_list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneBlockedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.blocked_list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.blocked_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhoneBlockedListKey() {
  return ['phone', '/phone/blocked_list', 'POST'] as const
}

export function usePostPhoneBlockedList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.blocked_list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.phone.blocked_list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneBlockedListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.phone.blocked_list.$post> }) =>
        parseResponse(client.phone.blocked_list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneBlockedListBlockedListIdKey(
  args: InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>,
) {
  return ['phone', '/phone/blocked_list/:blockedListId', args] as const
}

export function useGetPhoneBlockedListBlockedListId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>>
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
        ? getGetPhoneBlockedListBlockedListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.phone.blocked_list[':blockedListId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneBlockedListBlockedListId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>>
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
        ? getGetPhoneBlockedListBlockedListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.phone.blocked_list[':blockedListId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePhoneBlockedListBlockedListIdKey() {
  return ['phone', '/phone/blocked_list/:blockedListId', 'DELETE'] as const
}

export function useDeletePhoneBlockedListBlockedListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneBlockedListBlockedListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$delete']>
        },
      ) => parseResponse(client.phone.blocked_list[':blockedListId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPhoneBlockedListBlockedListIdKey() {
  return ['phone', '/phone/blocked_list/:blockedListId', 'PATCH'] as const
}

export function usePatchPhoneBlockedListBlockedListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPhoneBlockedListBlockedListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$patch']>
        },
      ) => parseResponse(client.phone.blocked_list[':blockedListId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneByocNumbersKey() {
  return ['phone', '/phone/byoc_numbers', 'POST'] as const
}

export function usePostPhoneByocNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.byoc_numbers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.phone.byoc_numbers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneByocNumbersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.phone.byoc_numbers.$post> }) =>
        parseResponse(client.phone.byoc_numbers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneCallLogsKey(args: InferRequestType<typeof client.phone.call_logs.$get>) {
  return ['phone', '/phone/call_logs', args] as const
}

export function useGetPhoneCallLogs<TError = unknown>(
  args: InferRequestType<typeof client.phone.call_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneCallLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.call_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneCallLogs<TError = unknown>(
  args: InferRequestType<typeof client.phone.call_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneCallLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.call_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneCallQueuesKey(
  args: InferRequestType<typeof client.phone.call_queues.$get>,
) {
  return ['phone', '/phone/call_queues', args] as const
}

export function useGetPhoneCallQueues<TError = unknown>(
  args: InferRequestType<typeof client.phone.call_queues.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_queues.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneCallQueuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_queues.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.call_queues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneCallQueues<TError = unknown>(
  args: InferRequestType<typeof client.phone.call_queues.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_queues.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneCallQueuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_queues.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.call_queues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhoneCallQueuesKey() {
  return ['phone', '/phone/call_queues', 'POST'] as const
}

export function usePostPhoneCallQueues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_queues.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.phone.call_queues.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneCallQueuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.phone.call_queues.$post> }) =>
        parseResponse(client.phone.call_queues.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneCallQueuesCallQueueIdKey(
  args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$get']>,
) {
  return ['phone', '/phone/call_queues/:callQueueId', args] as const
}

export function useGetPhoneCallQueuesCallQueueId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$get']>>
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
        ? getGetPhoneCallQueuesCallQueueIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.call_queues[':callQueueId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneCallQueuesCallQueueId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$get']>>
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
        ? getGetPhoneCallQueuesCallQueueIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.call_queues[':callQueueId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePhoneCallQueuesCallQueueIdKey() {
  return ['phone', '/phone/call_queues/:callQueueId', 'DELETE'] as const
}

export function useDeletePhoneCallQueuesCallQueueId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneCallQueuesCallQueueIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$delete']> },
      ) => parseResponse(client.phone.call_queues[':callQueueId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPhoneCallQueuesCallQueueIdKey() {
  return ['phone', '/phone/call_queues/:callQueueId', 'PATCH'] as const
}

export function usePatchPhoneCallQueuesCallQueueId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPhoneCallQueuesCallQueueIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$patch']> },
      ) => parseResponse(client.phone.call_queues[':callQueueId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPhoneCallQueuesCallQueueIdManagerKey() {
  return ['phone', '/phone/call_queues/:callQueueId/manager', 'PUT'] as const
}

export function usePutPhoneCallQueuesCallQueueIdManager<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.call_queues)[':callQueueId']['manager']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['manager']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPhoneCallQueuesCallQueueIdManagerKey()
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
            (typeof client.phone.call_queues)[':callQueueId']['manager']['$put']
          >
        },
      ) => parseResponse(client.phone.call_queues[':callQueueId'].manager.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneCallQueuesCallQueueIdMembersKey() {
  return ['phone', '/phone/call_queues/:callQueueId/members', 'POST'] as const
}

export function usePostPhoneCallQueuesCallQueueIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneCallQueuesCallQueueIdMembersKey()
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
            (typeof client.phone.call_queues)[':callQueueId']['members']['$post']
          >
        },
      ) =>
        parseResponse(client.phone.call_queues[':callQueueId'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePhoneCallQueuesCallQueueIdMembersKey() {
  return ['phone', '/phone/call_queues/:callQueueId/members', 'DELETE'] as const
}

export function useDeletePhoneCallQueuesCallQueueIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.call_queues)[':callQueueId']['members']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['members']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneCallQueuesCallQueueIdMembersKey()
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
            (typeof client.phone.call_queues)[':callQueueId']['members']['$delete']
          >
        },
      ) =>
        parseResponse(client.phone.call_queues[':callQueueId'].members.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePhoneCallQueuesCallQueueIdMembersMemberIdKey() {
  return ['phone', '/phone/call_queues/:callQueueId/members/:memberId', 'DELETE'] as const
}

export function useDeletePhoneCallQueuesCallQueueIdMembersMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.phone.call_queues)[':callQueueId']['members'][':memberId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.phone.call_queues)[':callQueueId']['members'][':memberId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneCallQueuesCallQueueIdMembersMemberIdKey()
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
            (typeof client.phone.call_queues)[':callQueueId']['members'][':memberId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.phone.call_queues[':callQueueId'].members[':memberId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneCallQueuesCallQueueIdPhoneNumbersKey() {
  return ['phone', '/phone/call_queues/:callQueueId/phone_numbers', 'POST'] as const
}

export function usePostPhoneCallQueuesCallQueueIdPhoneNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.phone.call_queues)[':callQueueId']['phone_numbers']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['phone_numbers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneCallQueuesCallQueueIdPhoneNumbersKey()
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
            (typeof client.phone.call_queues)[':callQueueId']['phone_numbers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.phone.call_queues[':callQueueId'].phone_numbers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePhoneCallQueuesCallQueueIdPhoneNumbersKey() {
  return ['phone', '/phone/call_queues/:callQueueId/phone_numbers', 'DELETE'] as const
}

export function useDeletePhoneCallQueuesCallQueueIdPhoneNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.phone.call_queues)[':callQueueId']['phone_numbers']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['phone_numbers']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneCallQueuesCallQueueIdPhoneNumbersKey()
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
            (typeof client.phone.call_queues)[':callQueueId']['phone_numbers']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.phone.call_queues[':callQueueId'].phone_numbers.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberIdKey() {
  return [
    'phone',
    '/phone/call_queues/:callQueueId/phone_numbers/:phoneNumberId',
    'DELETE',
  ] as const
}

export function useDeletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.phone.call_queues)[':callQueueId']['phone_numbers'][':phoneNumberId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.phone.call_queues)[':callQueueId']['phone_numbers'][':phoneNumberId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberIdKey()
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
            (typeof client.phone.call_queues)[':callQueueId']['phone_numbers'][':phoneNumberId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.phone.call_queues[':callQueueId'].phone_numbers[':phoneNumberId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneCallQueuesCallQueueIdRecordingsKey(
  args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']>,
) {
  return ['phone', '/phone/call_queues/:callQueueId/recordings', args] as const
}

export function useGetPhoneCallQueuesCallQueueIdRecordings<TError = unknown>(
  args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']>
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
        ? getGetPhoneCallQueuesCallQueueIdRecordingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.phone.call_queues[':callQueueId'].recordings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneCallQueuesCallQueueIdRecordings<TError = unknown>(
  args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']>
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
        ? getGetPhoneCallQueuesCallQueueIdRecordingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.phone.call_queues[':callQueueId'].recordings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneCallingPlansKey() {
  return ['phone', '/phone/calling_plans'] as const
}

export function useGetPhoneCallingPlans<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.calling_plans.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneCallingPlansKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.calling_plans.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.calling_plans.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneCallingPlans<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.calling_plans.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneCallingPlansKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.calling_plans.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.calling_plans.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneCommonAreaPhonesKey(
  args: InferRequestType<typeof client.phone.common_area_phones.$get>,
) {
  return ['phone', '/phone/common_area_phones', args] as const
}

export function useGetPhoneCommonAreaPhones<TError = unknown>(
  args: InferRequestType<typeof client.phone.common_area_phones.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.common_area_phones.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneCommonAreaPhonesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.common_area_phones.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.common_area_phones.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneCommonAreaPhones<TError = unknown>(
  args: InferRequestType<typeof client.phone.common_area_phones.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.common_area_phones.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneCommonAreaPhonesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.common_area_phones.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.common_area_phones.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhoneCommonAreaPhonesKey() {
  return ['phone', '/phone/common_area_phones', 'POST'] as const
}

export function usePostPhoneCommonAreaPhones<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.common_area_phones.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.phone.common_area_phones.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneCommonAreaPhonesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.phone.common_area_phones.$post> },
      ) => parseResponse(client.phone.common_area_phones.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneCommonAreaPhonesCommonAreaPhoneIdKey(
  args: InferRequestType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>,
) {
  return ['phone', '/phone/common_area_phones/:commonAreaPhoneId', args] as const
}

export function useGetPhoneCommonAreaPhonesCommonAreaPhoneId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>
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
        ? getGetPhoneCommonAreaPhonesCommonAreaPhoneIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.phone.common_area_phones[':commonAreaPhoneId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneCommonAreaPhonesCommonAreaPhoneId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>
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
        ? getGetPhoneCommonAreaPhonesCommonAreaPhoneIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.phone.common_area_phones[':commonAreaPhoneId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeletePhoneCommonAreaPhonesCommonAreaPhoneIdKey() {
  return ['phone', '/phone/common_area_phones/:commonAreaPhoneId', 'DELETE'] as const
}

export function useDeletePhoneCommonAreaPhonesCommonAreaPhoneId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneCommonAreaPhonesCommonAreaPhoneIdKey()
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
            (typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.phone.common_area_phones[':commonAreaPhoneId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchPhoneCommonAreaPhonesCommonAreaPhoneIdKey() {
  return ['phone', '/phone/common_area_phones/:commonAreaPhoneId', 'PATCH'] as const
}

export function usePatchPhoneCommonAreaPhonesCommonAreaPhoneId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPhoneCommonAreaPhonesCommonAreaPhoneIdKey()
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
            (typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.phone.common_area_phones[':commonAreaPhoneId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutPhoneCompanyNumberKey() {
  return ['phone', '/phone/company_number', 'PUT'] as const
}

export function usePutPhoneCompanyNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.company_number.$put>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.phone.company_number.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPhoneCompanyNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.phone.company_number.$put> }) =>
        parseResponse(client.phone.company_number.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneDevicesKey(args: InferRequestType<typeof client.phone.devices.$get>) {
  return ['phone', '/phone/devices', args] as const
}

export function useGetPhoneDevices<TError = unknown>(
  args: InferRequestType<typeof client.phone.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneDevices<TError = unknown>(
  args: InferRequestType<typeof client.phone.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhoneDevicesKey() {
  return ['phone', '/phone/devices', 'POST'] as const
}

export function usePostPhoneDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.devices.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.phone.devices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.phone.devices.$post> }) =>
        parseResponse(client.phone.devices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneDevicesDeviceIdKey(
  args: InferRequestType<(typeof client.phone.devices)[':deviceId']['$get']>,
) {
  return ['phone', '/phone/devices/:deviceId', args] as const
}

export function useGetPhoneDevicesDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.devices)[':deviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.devices)[':deviceId']['$get']>>
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
        ? getGetPhoneDevicesDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.devices)[':deviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.devices[':deviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneDevicesDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.devices)[':deviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.devices)[':deviceId']['$get']>>
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
        ? getGetPhoneDevicesDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.devices)[':deviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.devices[':deviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePhoneDevicesDeviceIdKey() {
  return ['phone', '/phone/devices/:deviceId', 'DELETE'] as const
}

export function useDeletePhoneDevicesDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.devices)[':deviceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.devices)[':deviceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneDevicesDeviceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.phone.devices)[':deviceId']['$delete']> },
      ) => parseResponse(client.phone.devices[':deviceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPhoneDevicesDeviceIdKey() {
  return ['phone', '/phone/devices/:deviceId', 'PATCH'] as const
}

export function usePatchPhoneDevicesDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.devices)[':deviceId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.devices)[':deviceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPhoneDevicesDeviceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.phone.devices)[':deviceId']['$patch']> },
      ) => parseResponse(client.phone.devices[':deviceId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneMetricsCallLogsKey(
  args: InferRequestType<typeof client.phone.metrics.call_logs.$get>,
) {
  return ['phone', '/phone/metrics/call_logs', args] as const
}

export function useGetPhoneMetricsCallLogs<TError = unknown>(
  args: InferRequestType<typeof client.phone.metrics.call_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.metrics.call_logs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneMetricsCallLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.metrics.call_logs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.metrics.call_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneMetricsCallLogs<TError = unknown>(
  args: InferRequestType<typeof client.phone.metrics.call_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.metrics.call_logs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneMetricsCallLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.metrics.call_logs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.metrics.call_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneMetricsCallLogsCallIdQosKey(
  args: InferRequestType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>,
) {
  return ['phone', '/phone/metrics/call_logs/:callId/qos', args] as const
}

export function useGetPhoneMetricsCallLogsCallIdQos<TError = unknown>(
  args: InferRequestType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>>
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
        ? getGetPhoneMetricsCallLogsCallIdQosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.phone.metrics.call_logs[':callId'].qos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneMetricsCallLogsCallIdQos<TError = unknown>(
  args: InferRequestType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>>
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
        ? getGetPhoneMetricsCallLogsCallIdQosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.phone.metrics.call_logs[':callId'].qos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneMetricsCallLogsCallIdKey(
  args: InferRequestType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>,
) {
  return ['phone', '/phone/metrics/call_logs/:call_id', args] as const
}

export function useGetPhoneMetricsCallLogsCallId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>>
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
        ? getGetPhoneMetricsCallLogsCallIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.phone.metrics.call_logs[':call_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneMetricsCallLogsCallId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>>
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
        ? getGetPhoneMetricsCallLogsCallIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.phone.metrics.call_logs[':call_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneNumbersKey(args: InferRequestType<typeof client.phone.numbers.$get>) {
  return ['phone', '/phone/numbers', args] as const
}

export function useGetPhoneNumbers<TError = unknown>(
  args: InferRequestType<typeof client.phone.numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.numbers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneNumbersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.numbers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumbers<TError = unknown>(
  args: InferRequestType<typeof client.phone.numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.numbers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneNumbersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.numbers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneNumbersNumberIdKey(
  args: InferRequestType<(typeof client.phone.numbers)[':numberId']['$get']>,
) {
  return ['phone', '/phone/numbers/:numberId', args] as const
}

export function useGetPhoneNumbersNumberId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.numbers)[':numberId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.numbers)[':numberId']['$get']>>
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
        ? getGetPhoneNumbersNumberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.numbers)[':numberId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.numbers[':numberId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumbersNumberId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.numbers)[':numberId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.numbers)[':numberId']['$get']>>
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
        ? getGetPhoneNumbersNumberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.numbers)[':numberId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.numbers[':numberId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchPhoneNumbersNumberIdKey() {
  return ['phone', '/phone/numbers/:numberId', 'PATCH'] as const
}

export function usePatchPhoneNumbersNumberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.numbers)[':numberId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.numbers)[':numberId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPhoneNumbersNumberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.phone.numbers)[':numberId']['$patch']> },
      ) => parseResponse(client.phone.numbers[':numberId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneRecordingsKey(
  args: InferRequestType<typeof client.phone.recordings.$get>,
) {
  return ['phone', '/phone/recordings', args] as const
}

export function useGetPhoneRecordings<TError = unknown>(
  args: InferRequestType<typeof client.phone.recordings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.recordings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneRecordingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.recordings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.recordings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneRecordings<TError = unknown>(
  args: InferRequestType<typeof client.phone.recordings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.recordings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneRecordingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.recordings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.recordings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneReportsOperationlogsKey(
  args: InferRequestType<typeof client.phone.reports.operationlogs.$get>,
) {
  return ['phone', '/phone/reports/operationlogs', args] as const
}

export function useGetPhoneReportsOperationlogs<TError = unknown>(
  args: InferRequestType<typeof client.phone.reports.operationlogs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.reports.operationlogs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneReportsOperationlogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.reports.operationlogs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.reports.operationlogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneReportsOperationlogs<TError = unknown>(
  args: InferRequestType<typeof client.phone.reports.operationlogs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.reports.operationlogs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneReportsOperationlogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.reports.operationlogs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.reports.operationlogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneSettingTemplatesKey(
  args: InferRequestType<typeof client.phone.setting_templates.$get>,
) {
  return ['phone', '/phone/setting_templates', args] as const
}

export function useGetPhoneSettingTemplates<TError = unknown>(
  args: InferRequestType<typeof client.phone.setting_templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.setting_templates.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneSettingTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.setting_templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.setting_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneSettingTemplates<TError = unknown>(
  args: InferRequestType<typeof client.phone.setting_templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.setting_templates.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneSettingTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.setting_templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.setting_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhoneSettingTemplatesKey() {
  return ['phone', '/phone/setting_templates', 'POST'] as const
}

export function usePostPhoneSettingTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.setting_templates.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.phone.setting_templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneSettingTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.phone.setting_templates.$post> },
      ) => parseResponse(client.phone.setting_templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneSettingTemplatesTemplateIdKey(
  args: InferRequestType<(typeof client.phone.setting_templates)[':templateId']['$get']>,
) {
  return ['phone', '/phone/setting_templates/:templateId', args] as const
}

export function useGetPhoneSettingTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.setting_templates)[':templateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.setting_templates)[':templateId']['$get']>>
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
        ? getGetPhoneSettingTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.setting_templates)[':templateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.phone.setting_templates[':templateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneSettingTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.setting_templates)[':templateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.setting_templates)[':templateId']['$get']>>
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
        ? getGetPhoneSettingTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.setting_templates)[':templateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.phone.setting_templates[':templateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchPhoneSettingTemplatesTemplateIdKey() {
  return ['phone', '/phone/setting_templates/:templateId', 'PATCH'] as const
}

export function usePatchPhoneSettingTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.setting_templates)[':templateId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.setting_templates)[':templateId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPhoneSettingTemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.phone.setting_templates)[':templateId']['$patch']>
        },
      ) => parseResponse(client.phone.setting_templates[':templateId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneSharedLineGroupsKey(
  args: InferRequestType<typeof client.phone.shared_line_groups.$get>,
) {
  return ['phone', '/phone/shared_line_groups', args] as const
}

export function useGetPhoneSharedLineGroups<TError = unknown>(
  args: InferRequestType<typeof client.phone.shared_line_groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.shared_line_groups.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneSharedLineGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.shared_line_groups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.shared_line_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneSharedLineGroups<TError = unknown>(
  args: InferRequestType<typeof client.phone.shared_line_groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.shared_line_groups.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneSharedLineGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.shared_line_groups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.shared_line_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhoneSharedLineGroupsKey() {
  return ['phone', '/phone/shared_line_groups', 'POST'] as const
}

export function usePostPhoneSharedLineGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.shared_line_groups.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.phone.shared_line_groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneSharedLineGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.phone.shared_line_groups.$post> },
      ) => parseResponse(client.phone.shared_line_groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneSharedLineGroupsSharedLineGroupIdKey(
  args: InferRequestType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>,
) {
  return ['phone', '/phone/shared_line_groups/:sharedLineGroupId', args] as const
}

export function useGetPhoneSharedLineGroupsSharedLineGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>
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
        ? getGetPhoneSharedLineGroupsSharedLineGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.phone.shared_line_groups[':sharedLineGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneSharedLineGroupsSharedLineGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>
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
        ? getGetPhoneSharedLineGroupsSharedLineGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.phone.shared_line_groups[':sharedLineGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeletePhoneSharedLineGroupsSharedLineGroupIdKey() {
  return ['phone', '/phone/shared_line_groups/:sharedLineGroupId', 'DELETE'] as const
}

export function useDeletePhoneSharedLineGroupsSharedLineGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneSharedLineGroupsSharedLineGroupIdKey()
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
            (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.phone.shared_line_groups[':sharedLineGroupId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchPhoneSharedLineGroupsSharedLineGroupIdKey() {
  return ['phone', '/phone/shared_line_groups/:sharedLineGroupId', 'PATCH'] as const
}

export function usePatchPhoneSharedLineGroupsSharedLineGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPhoneSharedLineGroupsSharedLineGroupIdKey()
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
            (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.phone.shared_line_groups[':sharedLineGroupId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneSharedLineGroupsSharedLineGroupIdMembersKey() {
  return ['phone', '/phone/shared_line_groups/:sharedLineGroupId/members', 'POST'] as const
}

export function usePostPhoneSharedLineGroupsSharedLineGroupIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneSharedLineGroupsSharedLineGroupIdMembersKey()
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
            (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members']['$post']
          >
        },
      ) =>
        parseResponse(
          client.phone.shared_line_groups[':sharedLineGroupId'].members.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePhoneSharedLineGroupsSharedLineGroupIdMembersKey() {
  return ['phone', '/phone/shared_line_groups/:sharedLineGroupId/members', 'DELETE'] as const
}

export function useDeletePhoneSharedLineGroupsSharedLineGroupIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneSharedLineGroupsSharedLineGroupIdMembersKey()
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
            (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.phone.shared_line_groups[':sharedLineGroupId'].members.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberIdKey() {
  return [
    'phone',
    '/phone/shared_line_groups/:sharedLineGroupId/members/:memberId',
    'DELETE',
  ] as const
}

export function useDeletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members'][':memberId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members'][':memberId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberIdKey()
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
            (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members'][':memberId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.phone.shared_line_groups[':sharedLineGroupId'].members[':memberId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersKey() {
  return ['phone', '/phone/shared_line_groups/:sharedLineGroupId/phone_numbers', 'POST'] as const
}

export function usePostPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['phone_numbers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['phone_numbers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersKey()
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
            (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['phone_numbers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.phone.shared_line_groups[':sharedLineGroupId'].phone_numbers.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberIdKey() {
  return [
    'phone',
    '/phone/shared_line_groups/:sharedLineGroupId/phone_numbers/:phoneNumberId',
    'DELETE',
  ] as const
}

export function useDeletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['phone_numbers'][':phoneNumberId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['phone_numbers'][':phoneNumberId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberIdKey()
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
            (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['phone_numbers'][':phoneNumberId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.phone.shared_line_groups[':sharedLineGroupId'].phone_numbers[
            ':phoneNumberId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneSipTrunkTrunksKey(
  args: InferRequestType<typeof client.phone.sip_trunk.trunks.$get>,
) {
  return ['phone', '/phone/sip_trunk/trunks', args] as const
}

export function useGetPhoneSipTrunkTrunks<TError = unknown>(
  args: InferRequestType<typeof client.phone.sip_trunk.trunks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.sip_trunk.trunks.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneSipTrunkTrunksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.sip_trunk.trunks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.sip_trunk.trunks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneSipTrunkTrunks<TError = unknown>(
  args: InferRequestType<typeof client.phone.sip_trunk.trunks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.sip_trunk.trunks.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneSipTrunkTrunksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.sip_trunk.trunks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.sip_trunk.trunks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneSitesKey(args: InferRequestType<typeof client.phone.sites.$get>) {
  return ['phone', '/phone/sites', args] as const
}

export function useGetPhoneSites<TError = unknown>(
  args: InferRequestType<typeof client.phone.sites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sites.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneSitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.sites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneSites<TError = unknown>(
  args: InferRequestType<typeof client.phone.sites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sites.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneSitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.sites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhoneSitesKey() {
  return ['phone', '/phone/sites', 'POST'] as const
}

export function usePostPhoneSites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sites.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.phone.sites.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneSitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.phone.sites.$post> }) =>
        parseResponse(client.phone.sites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneSitesSiteIdKey(
  args: InferRequestType<(typeof client.phone.sites)[':siteId']['$get']>,
) {
  return ['phone', '/phone/sites/:siteId', args] as const
}

export function useGetPhoneSitesSiteId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.sites)[':siteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.phone.sites)[':siteId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneSitesSiteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.phone.sites)[':siteId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.sites[':siteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneSitesSiteId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.sites)[':siteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.phone.sites)[':siteId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneSitesSiteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.phone.sites)[':siteId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.sites[':siteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePhoneSitesSiteIdKey() {
  return ['phone', '/phone/sites/:siteId', 'DELETE'] as const
}

export function useDeletePhoneSitesSiteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.sites)[':siteId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.sites)[':siteId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneSitesSiteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.phone.sites)[':siteId']['$delete']> },
      ) => parseResponse(client.phone.sites[':siteId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPhoneSitesSiteIdKey() {
  return ['phone', '/phone/sites/:siteId', 'PATCH'] as const
}

export function usePatchPhoneSitesSiteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.sites)[':siteId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.sites)[':siteId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPhoneSitesSiteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.phone.sites)[':siteId']['$patch']> },
      ) => parseResponse(client.phone.sites[':siteId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneUsersKey(args: InferRequestType<typeof client.phone.users.$get>) {
  return ['phone', '/phone/users', args] as const
}

export function useGetPhoneUsers<TError = unknown>(
  args: InferRequestType<typeof client.phone.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneUsers<TError = unknown>(
  args: InferRequestType<typeof client.phone.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneUsersUserIdKey(
  args: InferRequestType<(typeof client.phone.users)[':userId']['$get']>,
) {
  return ['phone', '/phone/users/:userId', args] as const
}

export function useGetPhoneUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.phone.users)[':userId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.phone.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.phone.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.phone.users)[':userId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhoneUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.phone.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchPhoneUsersUserIdKey() {
  return ['phone', '/phone/users/:userId', 'PATCH'] as const
}

export function usePatchPhoneUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.users)[':userId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.users)[':userId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPhoneUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.phone.users)[':userId']['$patch']> },
      ) => parseResponse(client.phone.users[':userId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneUsersUserIdCallLogsKey(
  args: InferRequestType<(typeof client.phone.users)[':userId']['call_logs']['$get']>,
) {
  return ['phone', '/phone/users/:userId/call_logs', args] as const
}

export function useGetPhoneUsersUserIdCallLogs<TError = unknown>(
  args: InferRequestType<(typeof client.phone.users)[':userId']['call_logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.users)[':userId']['call_logs']['$get']>>
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
        ? getGetPhoneUsersUserIdCallLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.users)[':userId']['call_logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.users[':userId'].call_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneUsersUserIdCallLogs<TError = unknown>(
  args: InferRequestType<(typeof client.phone.users)[':userId']['call_logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.users)[':userId']['call_logs']['$get']>>
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
        ? getGetPhoneUsersUserIdCallLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.users)[':userId']['call_logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.users[':userId'].call_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePhoneUsersUserIdCallLogsCallLogIdKey() {
  return ['phone', '/phone/users/:userId/call_logs/:callLogId', 'DELETE'] as const
}

export function useDeletePhoneUsersUserIdCallLogsCallLogId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.phone.users)[':userId']['call_logs'][':callLogId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.users)[':userId']['call_logs'][':callLogId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneUsersUserIdCallLogsCallLogIdKey()
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
            (typeof client.phone.users)[':userId']['call_logs'][':callLogId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.phone.users[':userId'].call_logs[':callLogId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneUsersUserIdCallingPlansKey() {
  return ['phone', '/phone/users/:userId/calling_plans', 'POST'] as const
}

export function usePostPhoneUsersUserIdCallingPlans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone.users)[':userId']['calling_plans']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.phone.users)[':userId']['calling_plans']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneUsersUserIdCallingPlansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.phone.users)[':userId']['calling_plans']['$post']>
        },
      ) => parseResponse(client.phone.users[':userId'].calling_plans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePhoneUsersUserIdCallingPlansTypeKey() {
  return ['phone', '/phone/users/:userId/calling_plans/:type', 'DELETE'] as const
}

export function useDeletePhoneUsersUserIdCallingPlansType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.phone.users)[':userId']['calling_plans'][':type']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.users)[':userId']['calling_plans'][':type']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneUsersUserIdCallingPlansTypeKey()
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
            (typeof client.phone.users)[':userId']['calling_plans'][':type']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.phone.users[':userId'].calling_plans[':type'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneUsersUserIdPhoneNumbersKey() {
  return ['phone', '/phone/users/:userId/phone_numbers', 'POST'] as const
}

export function usePostPhoneUsersUserIdPhoneNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone.users)[':userId']['phone_numbers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.phone.users)[':userId']['phone_numbers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneUsersUserIdPhoneNumbersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.phone.users)[':userId']['phone_numbers']['$post']>
        },
      ) => parseResponse(client.phone.users[':userId'].phone_numbers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePhoneUsersUserIdPhoneNumbersPhoneNumberIdKey() {
  return ['phone', '/phone/users/:userId/phone_numbers/:phoneNumberId', 'DELETE'] as const
}

export function useDeletePhoneUsersUserIdPhoneNumbersPhoneNumberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.phone.users)[':userId']['phone_numbers'][':phoneNumberId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.phone.users)[':userId']['phone_numbers'][':phoneNumberId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneUsersUserIdPhoneNumbersPhoneNumberIdKey()
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
            (typeof client.phone.users)[':userId']['phone_numbers'][':phoneNumberId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.phone.users[':userId'].phone_numbers[':phoneNumberId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneUsersUserIdRecordingsKey(
  args: InferRequestType<(typeof client.phone.users)[':userId']['recordings']['$get']>,
) {
  return ['phone', '/phone/users/:userId/recordings', args] as const
}

export function useGetPhoneUsersUserIdRecordings<TError = unknown>(
  args: InferRequestType<(typeof client.phone.users)[':userId']['recordings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.users)[':userId']['recordings']['$get']>>
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
        ? getGetPhoneUsersUserIdRecordingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.users)[':userId']['recordings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.users[':userId'].recordings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneUsersUserIdRecordings<TError = unknown>(
  args: InferRequestType<(typeof client.phone.users)[':userId']['recordings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.users)[':userId']['recordings']['$get']>>
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
        ? getGetPhoneUsersUserIdRecordingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.users)[':userId']['recordings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.users[':userId'].recordings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneUsersUserIdSettingsKey(
  args: InferRequestType<(typeof client.phone.users)[':userId']['settings']['$get']>,
) {
  return ['phone', '/phone/users/:userId/settings', args] as const
}

export function useGetPhoneUsersUserIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.phone.users)[':userId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.users)[':userId']['settings']['$get']>>
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
        ? getGetPhoneUsersUserIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.users)[':userId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.users[':userId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneUsersUserIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.phone.users)[':userId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.users)[':userId']['settings']['$get']>>
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
        ? getGetPhoneUsersUserIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.users)[':userId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone.users[':userId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhoneUsersUserIdSettingsSettingTypeKey() {
  return ['phone', '/phone/users/:userId/settings/:settingType', 'POST'] as const
}

export function usePostPhoneUsersUserIdSettingsSettingType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.phone.users)[':userId']['settings'][':settingType']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.phone.users)[':userId']['settings'][':settingType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneUsersUserIdSettingsSettingTypeKey()
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
            (typeof client.phone.users)[':userId']['settings'][':settingType']['$post']
          >
        },
      ) =>
        parseResponse(
          client.phone.users[':userId'].settings[':settingType'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePhoneUsersUserIdSettingsSettingTypeKey() {
  return ['phone', '/phone/users/:userId/settings/:settingType', 'DELETE'] as const
}

export function useDeletePhoneUsersUserIdSettingsSettingType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.phone.users)[':userId']['settings'][':settingType']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.users)[':userId']['settings'][':settingType']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneUsersUserIdSettingsSettingTypeKey()
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
            (typeof client.phone.users)[':userId']['settings'][':settingType']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.phone.users[':userId'].settings[':settingType'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchPhoneUsersUserIdSettingsSettingTypeKey() {
  return ['phone', '/phone/users/:userId/settings/:settingType', 'PATCH'] as const
}

export function usePatchPhoneUsersUserIdSettingsSettingType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.phone.users)[':userId']['settings'][':settingType']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.users)[':userId']['settings'][':settingType']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPhoneUsersUserIdSettingsSettingTypeKey()
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
            (typeof client.phone.users)[':userId']['settings'][':settingType']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.phone.users[':userId'].settings[':settingType'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneUsersUserIdVoiceMailsKey(
  args: InferRequestType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>,
) {
  return ['phone', '/phone/users/:userId/voice_mails', args] as const
}

export function useGetPhoneUsersUserIdVoiceMails<TError = unknown>(
  args: InferRequestType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>>
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
        ? getGetPhoneUsersUserIdVoiceMailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.phone.users[':userId'].voice_mails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneUsersUserIdVoiceMails<TError = unknown>(
  args: InferRequestType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>>
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
        ? getGetPhoneUsersUserIdVoiceMailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.phone.users[':userId'].voice_mails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePhoneVoiceMailsVoicemailIdKey() {
  return ['phone', '/phone/voice_mails/:voicemailId', 'DELETE'] as const
}

export function useDeletePhoneVoiceMailsVoicemailId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.voice_mails)[':voicemailId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.phone.voice_mails)[':voicemailId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneVoiceMailsVoicemailIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.phone.voice_mails)[':voicemailId']['$delete']> },
      ) => parseResponse(client.phone.voice_mails[':voicemailId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportActivitiesKey(
  args: InferRequestType<typeof client.report.activities.$get>,
) {
  return ['report', '/report/activities', args] as const
}

export function useGetReportActivities<TError = unknown>(
  args: InferRequestType<typeof client.report.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.activities.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.activities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportActivities<TError = unknown>(
  args: InferRequestType<typeof client.report.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.activities.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.activities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportCloudRecordingKey(
  args: InferRequestType<typeof client.report.cloud_recording.$get>,
) {
  return ['report', '/report/cloud_recording', args] as const
}

export function useGetReportCloudRecording<TError = unknown>(
  args: InferRequestType<typeof client.report.cloud_recording.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.cloud_recording.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportCloudRecordingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.cloud_recording.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.cloud_recording.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportCloudRecording<TError = unknown>(
  args: InferRequestType<typeof client.report.cloud_recording.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.cloud_recording.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportCloudRecordingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.cloud_recording.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.cloud_recording.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportDailyKey(args: InferRequestType<typeof client.report.daily.$get>) {
  return ['report', '/report/daily', args] as const
}

export function useGetReportDaily<TError = unknown>(
  args: InferRequestType<typeof client.report.daily.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.daily.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportDailyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.daily.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.daily.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportDaily<TError = unknown>(
  args: InferRequestType<typeof client.report.daily.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.daily.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportDailyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.daily.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.daily.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportMeetingsMeetingIdKey(
  args: InferRequestType<(typeof client.report.meetings)[':meetingId']['$get']>,
) {
  return ['report', '/report/meetings/:meetingId', args] as const
}

export function useGetReportMeetingsMeetingId<TError = unknown>(
  args: InferRequestType<(typeof client.report.meetings)[':meetingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['$get']>>
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
        ? getGetReportMeetingsMeetingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.meetings[':meetingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportMeetingsMeetingId<TError = unknown>(
  args: InferRequestType<(typeof client.report.meetings)[':meetingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['$get']>>
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
        ? getGetReportMeetingsMeetingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.meetings[':meetingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportMeetingsMeetingIdParticipantsKey(
  args: InferRequestType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>,
) {
  return ['report', '/report/meetings/:meetingId/participants', args] as const
}

export function useGetReportMeetingsMeetingIdParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>
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
        ? getGetReportMeetingsMeetingIdParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.report.meetings[':meetingId'].participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportMeetingsMeetingIdParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>
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
        ? getGetReportMeetingsMeetingIdParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.report.meetings[':meetingId'].participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportMeetingsMeetingIdPollsKey(
  args: InferRequestType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>,
) {
  return ['report', '/report/meetings/:meetingId/polls', args] as const
}

export function useGetReportMeetingsMeetingIdPolls<TError = unknown>(
  args: InferRequestType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>>
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
        ? getGetReportMeetingsMeetingIdPollsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.report.meetings[':meetingId'].polls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportMeetingsMeetingIdPolls<TError = unknown>(
  args: InferRequestType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>>
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
        ? getGetReportMeetingsMeetingIdPollsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.report.meetings[':meetingId'].polls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportOperationlogsKey(
  args: InferRequestType<typeof client.report.operationlogs.$get>,
) {
  return ['report', '/report/operationlogs', args] as const
}

export function useGetReportOperationlogs<TError = unknown>(
  args: InferRequestType<typeof client.report.operationlogs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.operationlogs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportOperationlogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.operationlogs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.operationlogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportOperationlogs<TError = unknown>(
  args: InferRequestType<typeof client.report.operationlogs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.operationlogs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportOperationlogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.operationlogs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.operationlogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportTelephoneKey(
  args: InferRequestType<typeof client.report.telephone.$get>,
) {
  return ['report', '/report/telephone', args] as const
}

export function useGetReportTelephone<TError = unknown>(
  args: InferRequestType<typeof client.report.telephone.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.telephone.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportTelephoneKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.telephone.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.telephone.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportTelephone<TError = unknown>(
  args: InferRequestType<typeof client.report.telephone.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.telephone.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportTelephoneKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.telephone.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.telephone.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportUsersKey(args: InferRequestType<typeof client.report.users.$get>) {
  return ['report', '/report/users', args] as const
}

export function useGetReportUsers<TError = unknown>(
  args: InferRequestType<typeof client.report.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportUsers<TError = unknown>(
  args: InferRequestType<typeof client.report.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportUsersUserIdMeetingsKey(
  args: InferRequestType<(typeof client.report.users)[':userId']['meetings']['$get']>,
) {
  return ['report', '/report/users/:userId/meetings', args] as const
}

export function useGetReportUsersUserIdMeetings<TError = unknown>(
  args: InferRequestType<(typeof client.report.users)[':userId']['meetings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.users)[':userId']['meetings']['$get']>>
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
        ? getGetReportUsersUserIdMeetingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.users)[':userId']['meetings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.users[':userId'].meetings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportUsersUserIdMeetings<TError = unknown>(
  args: InferRequestType<(typeof client.report.users)[':userId']['meetings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.users)[':userId']['meetings']['$get']>>
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
        ? getGetReportUsersUserIdMeetingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.users)[':userId']['meetings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.users[':userId'].meetings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportWebinarsWebinarIdKey(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['$get']>,
) {
  return ['report', '/report/webinars/:webinarId', args] as const
}

export function useGetReportWebinarsWebinarId<TError = unknown>(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['$get']>>
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
        ? getGetReportWebinarsWebinarIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.webinars[':webinarId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportWebinarsWebinarId<TError = unknown>(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['$get']>>
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
        ? getGetReportWebinarsWebinarIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.webinars[':webinarId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportWebinarsWebinarIdParticipantsKey(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>,
) {
  return ['report', '/report/webinars/:webinarId/participants', args] as const
}

export function useGetReportWebinarsWebinarIdParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>
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
        ? getGetReportWebinarsWebinarIdParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.report.webinars[':webinarId'].participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportWebinarsWebinarIdParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>
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
        ? getGetReportWebinarsWebinarIdParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.report.webinars[':webinarId'].participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportWebinarsWebinarIdPollsKey(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>,
) {
  return ['report', '/report/webinars/:webinarId/polls', args] as const
}

export function useGetReportWebinarsWebinarIdPolls<TError = unknown>(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>>
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
        ? getGetReportWebinarsWebinarIdPollsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.report.webinars[':webinarId'].polls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportWebinarsWebinarIdPolls<TError = unknown>(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>>
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
        ? getGetReportWebinarsWebinarIdPollsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.report.webinars[':webinarId'].polls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportWebinarsWebinarIdQaKey(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>,
) {
  return ['report', '/report/webinars/:webinarId/qa', args] as const
}

export function useGetReportWebinarsWebinarIdQa<TError = unknown>(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>>
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
        ? getGetReportWebinarsWebinarIdQaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.webinars[':webinarId'].qa.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportWebinarsWebinarIdQa<TError = unknown>(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>>
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
        ? getGetReportWebinarsWebinarIdQaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.webinars[':webinarId'].qa.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRolesKey() {
  return ['roles', '/roles'] as const
}

export function useGetRoles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetRolesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.roles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetRolesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.roles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRolesKey() {
  return ['roles', '/roles', 'POST'] as const
}

export function usePostRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.roles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.roles.$post> }) =>
        parseResponse(client.roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRolesRoleIdKey(
  args: InferRequestType<(typeof client.roles)[':roleId']['$get']>,
) {
  return ['roles', '/roles/:roleId', args] as const
}

export function useGetRolesRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.roles)[':roleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRolesRoleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.roles[':roleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRolesRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.roles)[':roleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRolesRoleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.roles[':roleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRolesRoleIdKey() {
  return ['roles', '/roles/:roleId', 'DELETE'] as const
}

export function useDeleteRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.roles)[':roleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRolesRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.roles)[':roleId']['$delete']> },
      ) => parseResponse(client.roles[':roleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRolesRoleIdKey() {
  return ['roles', '/roles/:roleId', 'PATCH'] as const
}

export function usePatchRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['$patch']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.roles)[':roleId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRolesRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.roles)[':roleId']['$patch']> },
      ) => parseResponse(client.roles[':roleId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRolesRoleIdMembersKey(
  args: InferRequestType<(typeof client.roles)[':roleId']['members']['$get']>,
) {
  return ['roles', '/roles/:roleId/members', args] as const
}

export function useGetRolesRoleIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.roles)[':roleId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.roles)[':roleId']['members']['$get']>>
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
        ? getGetRolesRoleIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.roles)[':roleId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.roles[':roleId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRolesRoleIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.roles)[':roleId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.roles)[':roleId']['members']['$get']>>
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
        ? getGetRolesRoleIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.roles)[':roleId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.roles[':roleId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRolesRoleIdMembersKey() {
  return ['roles', '/roles/:roleId/members', 'POST'] as const
}

export function usePostRolesRoleIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.roles)[':roleId']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.roles)[':roleId']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRolesRoleIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.roles)[':roleId']['members']['$post']> },
      ) => parseResponse(client.roles[':roleId'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRolesRoleIdMembersMemberIdKey() {
  return ['roles', '/roles/:roleId/members/:memberId', 'DELETE'] as const
}

export function useDeleteRolesRoleIdMembersMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.roles)[':roleId']['members'][':memberId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.roles)[':roleId']['members'][':memberId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRolesRoleIdMembersMemberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.roles)[':roleId']['members'][':memberId']['$delete']>
        },
      ) => parseResponse(client.roles[':roleId'].members[':memberId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoomsKey(args: InferRequestType<typeof client.rooms.$get>) {
  return ['rooms', '/rooms', args] as const
}

export function useGetRooms<TError = unknown>(
  args: InferRequestType<typeof client.rooms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoomsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rooms.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRooms<TError = unknown>(
  args: InferRequestType<typeof client.rooms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoomsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rooms.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostRoomsKey() {
  return ['rooms', '/rooms', 'POST'] as const
}

export function usePostRooms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.rooms.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoomsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rooms.$post> }) =>
        parseResponse(client.rooms.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoomsAccountProfileKey() {
  return ['rooms', '/rooms/account_profile'] as const
}

export function useGetRoomsAccountProfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_profile.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoomsAccountProfileKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_profile.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms.account_profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoomsAccountProfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_profile.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoomsAccountProfileKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_profile.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms.account_profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchRoomsAccountProfileKey() {
  return ['rooms', '/rooms/account_profile', 'PATCH'] as const
}

export function usePatchRoomsAccountProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_profile.$patch>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.rooms.account_profile.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoomsAccountProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.rooms.account_profile.$patch> },
      ) => parseResponse(client.rooms.account_profile.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoomsAccountSettingsKey(
  args: InferRequestType<typeof client.rooms.account_settings.$get>,
) {
  return ['rooms', '/rooms/account_settings', args] as const
}

export function useGetRoomsAccountSettings<TError = unknown>(
  args: InferRequestType<typeof client.rooms.account_settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_settings.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoomsAccountSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms.account_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoomsAccountSettings<TError = unknown>(
  args: InferRequestType<typeof client.rooms.account_settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_settings.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoomsAccountSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms.account_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchRoomsAccountSettingsKey() {
  return ['rooms', '/rooms/account_settings', 'PATCH'] as const
}

export function usePatchRoomsAccountSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_settings.$patch>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.rooms.account_settings.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoomsAccountSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.rooms.account_settings.$patch> },
      ) => parseResponse(client.rooms.account_settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoomsDigitalSignageKey(
  args: InferRequestType<typeof client.rooms.digital_signage.$get>,
) {
  return ['rooms', '/rooms/digital_signage', args] as const
}

export function useGetRoomsDigitalSignage<TError = unknown>(
  args: InferRequestType<typeof client.rooms.digital_signage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rooms.digital_signage.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoomsDigitalSignageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rooms.digital_signage.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms.digital_signage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoomsDigitalSignage<TError = unknown>(
  args: InferRequestType<typeof client.rooms.digital_signage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rooms.digital_signage.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoomsDigitalSignageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rooms.digital_signage.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms.digital_signage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchRoomsEventsKey() {
  return ['rooms', '/rooms/events', 'PATCH'] as const
}

export function usePatchRoomsEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.events.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.rooms.events.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoomsEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rooms.events.$patch> }) =>
        parseResponse(client.rooms.events.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoomsLocationsKey(
  args: InferRequestType<typeof client.rooms.locations.$get>,
) {
  return ['rooms', '/rooms/locations', args] as const
}

export function useGetRoomsLocations<TError = unknown>(
  args: InferRequestType<typeof client.rooms.locations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoomsLocationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms.locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoomsLocations<TError = unknown>(
  args: InferRequestType<typeof client.rooms.locations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoomsLocationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms.locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRoomsLocationsKey() {
  return ['rooms', '/rooms/locations', 'POST'] as const
}

export function usePostRoomsLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.rooms.locations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoomsLocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rooms.locations.$post> }) =>
        parseResponse(client.rooms.locations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoomsLocationsStructureKey() {
  return ['rooms', '/rooms/locations/structure'] as const
}

export function useGetRoomsLocationsStructure<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.structure.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoomsLocationsStructureKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.structure.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms.locations.structure.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoomsLocationsStructure<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.structure.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoomsLocationsStructureKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.structure.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms.locations.structure.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchRoomsLocationsStructureKey() {
  return ['rooms', '/rooms/locations/structure', 'PATCH'] as const
}

export function usePatchRoomsLocationsStructure<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.structure.$patch>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.rooms.locations.structure.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoomsLocationsStructureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.rooms.locations.structure.$patch> },
      ) => parseResponse(client.rooms.locations.structure.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoomsLocationsLocationIdKey(
  args: InferRequestType<(typeof client.rooms.locations)[':locationId']['$get']>,
) {
  return ['rooms', '/rooms/locations/:locationId', args] as const
}

export function useGetRoomsLocationsLocationId<TError = unknown>(
  args: InferRequestType<(typeof client.rooms.locations)[':locationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['$get']>>
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
        ? getGetRoomsLocationsLocationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms.locations[':locationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoomsLocationsLocationId<TError = unknown>(
  args: InferRequestType<(typeof client.rooms.locations)[':locationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['$get']>>
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
        ? getGetRoomsLocationsLocationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms.locations[':locationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchRoomsLocationsLocationIdKey() {
  return ['rooms', '/rooms/locations/:locationId', 'PATCH'] as const
}

export function usePatchRoomsLocationsLocationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rooms.locations)[':locationId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoomsLocationsLocationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rooms.locations)[':locationId']['$patch']> },
      ) => parseResponse(client.rooms.locations[':locationId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRoomsLocationsLocationIdLocationKey() {
  return ['rooms', '/rooms/locations/:locationId/location', 'PUT'] as const
}

export function usePutRoomsLocationsLocationIdLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['location']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rooms.locations)[':locationId']['location']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRoomsLocationsLocationIdLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rooms.locations)[':locationId']['location']['$put']>
        },
      ) => parseResponse(client.rooms.locations[':locationId'].location.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoomsLocationsLocationIdSettingsKey(
  args: InferRequestType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>,
) {
  return ['rooms', '/rooms/locations/:locationId/settings', args] as const
}

export function useGetRoomsLocationsLocationIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>>
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
        ? getGetRoomsLocationsLocationIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rooms.locations[':locationId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoomsLocationsLocationIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>>
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
        ? getGetRoomsLocationsLocationIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rooms.locations[':locationId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchRoomsLocationsLocationIdSettingsKey() {
  return ['rooms', '/rooms/locations/:locationId/settings', 'PATCH'] as const
}

export function usePatchRoomsLocationsLocationIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rooms.locations)[':locationId']['settings']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rooms.locations)[':locationId']['settings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoomsLocationsLocationIdSettingsKey()
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
            (typeof client.rooms.locations)[':locationId']['settings']['$patch']
          >
        },
      ) => parseResponse(client.rooms.locations[':locationId'].settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRoomsIdEventsKey() {
  return ['rooms', '/rooms/:id/events', 'PATCH'] as const
}

export function usePatchRoomsIdEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':id']['events']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rooms)[':id']['events']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoomsIdEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rooms)[':id']['events']['$patch']> },
      ) => parseResponse(client.rooms[':id'].events.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoomsRoomIdKey(
  args: InferRequestType<(typeof client.rooms)[':roomId']['$get']>,
) {
  return ['rooms', '/rooms/:roomId', args] as const
}

export function useGetRoomsRoomId<TError = unknown>(
  args: InferRequestType<(typeof client.rooms)[':roomId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoomsRoomIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms[':roomId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoomsRoomId<TError = unknown>(
  args: InferRequestType<(typeof client.rooms)[':roomId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoomsRoomIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms[':roomId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRoomsRoomIdKey() {
  return ['rooms', '/rooms/:roomId', 'DELETE'] as const
}

export function useDeleteRoomsRoomId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rooms)[':roomId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRoomsRoomIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rooms)[':roomId']['$delete']> },
      ) => parseResponse(client.rooms[':roomId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRoomsRoomIdKey() {
  return ['rooms', '/rooms/:roomId', 'PATCH'] as const
}

export function usePatchRoomsRoomId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['$patch']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rooms)[':roomId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoomsRoomIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rooms)[':roomId']['$patch']> },
      ) => parseResponse(client.rooms[':roomId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoomsRoomIdDevicesKey(
  args: InferRequestType<(typeof client.rooms)[':roomId']['devices']['$get']>,
) {
  return ['rooms', '/rooms/:roomId/devices', args] as const
}

export function useGetRoomsRoomIdDevices<TError = unknown>(
  args: InferRequestType<(typeof client.rooms)[':roomId']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms)[':roomId']['devices']['$get']>>
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
        ? getGetRoomsRoomIdDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms)[':roomId']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms[':roomId'].devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoomsRoomIdDevices<TError = unknown>(
  args: InferRequestType<(typeof client.rooms)[':roomId']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms)[':roomId']['devices']['$get']>>
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
        ? getGetRoomsRoomIdDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms)[':roomId']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms[':roomId'].devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRoomsRoomIdDevicesDeviceIdAppVersionKey() {
  return ['rooms', '/rooms/:roomId/devices/:deviceId/app_version', 'PUT'] as const
}

export function usePutRoomsRoomIdDevicesDeviceIdAppVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rooms)[':roomId']['devices'][':deviceId']['app_version']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rooms)[':roomId']['devices'][':deviceId']['app_version']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRoomsRoomIdDevicesDeviceIdAppVersionKey()
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
            (typeof client.rooms)[':roomId']['devices'][':deviceId']['app_version']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rooms[':roomId'].devices[':deviceId'].app_version.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRoomsRoomIdLocationKey() {
  return ['rooms', '/rooms/:roomId/location', 'PUT'] as const
}

export function usePutRoomsRoomIdLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms)[':roomId']['location']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rooms)[':roomId']['location']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRoomsRoomIdLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rooms)[':roomId']['location']['$put']> },
      ) => parseResponse(client.rooms[':roomId'].location.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoomsRoomIdSettingsKey(
  args: InferRequestType<(typeof client.rooms)[':roomId']['settings']['$get']>,
) {
  return ['rooms', '/rooms/:roomId/settings', args] as const
}

export function useGetRoomsRoomIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.rooms)[':roomId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms)[':roomId']['settings']['$get']>>
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
        ? getGetRoomsRoomIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms)[':roomId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms[':roomId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoomsRoomIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.rooms)[':roomId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms)[':roomId']['settings']['$get']>>
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
        ? getGetRoomsRoomIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms)[':roomId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rooms[':roomId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchRoomsRoomIdSettingsKey() {
  return ['rooms', '/rooms/:roomId/settings', 'PATCH'] as const
}

export function usePatchRoomsRoomIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms)[':roomId']['settings']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rooms)[':roomId']['settings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoomsRoomIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rooms)[':roomId']['settings']['$patch']> },
      ) => parseResponse(client.rooms[':roomId'].settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSipPhonesKey(args: InferRequestType<typeof client.sip_phones.$get>) {
  return ['sip_phones', '/sip_phones', args] as const
}

export function useGetSipPhones<TError = unknown>(
  args: InferRequestType<typeof client.sip_phones.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_phones.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSipPhonesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_phones.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sip_phones.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSipPhones<TError = unknown>(
  args: InferRequestType<typeof client.sip_phones.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_phones.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSipPhonesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_phones.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sip_phones.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSipPhonesKey() {
  return ['sip_phones', '/sip_phones', 'POST'] as const
}

export function usePostSipPhones<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_phones.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sip_phones.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSipPhonesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sip_phones.$post> }) =>
        parseResponse(client.sip_phones.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSipPhonesPhoneIdKey() {
  return ['sip_phones', '/sip_phones/:phoneId', 'DELETE'] as const
}

export function useDeleteSipPhonesPhoneId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sip_phones)[':phoneId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sip_phones)[':phoneId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSipPhonesPhoneIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sip_phones)[':phoneId']['$delete']> },
      ) => parseResponse(client.sip_phones[':phoneId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSipPhonesPhoneIdKey() {
  return ['sip_phones', '/sip_phones/:phoneId', 'PATCH'] as const
}

export function usePatchSipPhonesPhoneId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sip_phones)[':phoneId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sip_phones)[':phoneId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSipPhonesPhoneIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sip_phones)[':phoneId']['$patch']> },
      ) => parseResponse(client.sip_phones[':phoneId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSipTrunkNumbersKey() {
  return ['sip_trunk', '/sip_trunk/numbers'] as const
}

export function useGetSipTrunkNumbers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_trunk.numbers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSipTrunkNumbersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_trunk.numbers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sip_trunk.numbers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSipTrunkNumbers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_trunk.numbers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSipTrunkNumbersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_trunk.numbers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sip_trunk.numbers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTrackingFieldsKey() {
  return ['tracking_fields', '/tracking_fields'] as const
}

export function useGetTrackingFields<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_fields.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTrackingFieldsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_fields.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracking_fields.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrackingFields<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_fields.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTrackingFieldsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_fields.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracking_fields.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTrackingFieldsKey() {
  return ['tracking_fields', '/tracking_fields', 'POST'] as const
}

export function usePostTrackingFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_fields.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tracking_fields.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTrackingFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tracking_fields.$post> }) =>
        parseResponse(client.tracking_fields.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTrackingFieldsFieldIdKey(
  args: InferRequestType<(typeof client.tracking_fields)[':fieldId']['$get']>,
) {
  return ['tracking_fields', '/tracking_fields/:fieldId', args] as const
}

export function useGetTrackingFieldsFieldId<TError = unknown>(
  args: InferRequestType<(typeof client.tracking_fields)[':fieldId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracking_fields)[':fieldId']['$get']>>
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
        ? getGetTrackingFieldsFieldIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracking_fields)[':fieldId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracking_fields[':fieldId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrackingFieldsFieldId<TError = unknown>(
  args: InferRequestType<(typeof client.tracking_fields)[':fieldId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracking_fields)[':fieldId']['$get']>>
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
        ? getGetTrackingFieldsFieldIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracking_fields)[':fieldId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracking_fields[':fieldId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTrackingFieldsFieldIdKey() {
  return ['tracking_fields', '/tracking_fields/:fieldId', 'DELETE'] as const
}

export function useDeleteTrackingFieldsFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracking_fields)[':fieldId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tracking_fields)[':fieldId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTrackingFieldsFieldIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tracking_fields)[':fieldId']['$delete']> },
      ) => parseResponse(client.tracking_fields[':fieldId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTrackingFieldsFieldIdKey() {
  return ['tracking_fields', '/tracking_fields/:fieldId', 'PATCH'] as const
}

export function usePatchTrackingFieldsFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracking_fields)[':fieldId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tracking_fields)[':fieldId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTrackingFieldsFieldIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tracking_fields)[':fieldId']['$patch']> },
      ) => parseResponse(client.tracking_fields[':fieldId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTspKey() {
  return ['tsp', '/tsp'] as const
}

export function useGetTsp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsp.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetTspKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsp.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tsp.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTsp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsp.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetTspKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsp.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tsp.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getPatchTspKey() {
  return ['tsp', '/tsp', 'PATCH'] as const
}

export function usePatchTsp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsp.$patch>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.tsp.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTspKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tsp.$patch> }) =>
        parseResponse(client.tsp.$patch(arg, clientOptions)),
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

export function getGetUsersEmailKey(args: InferRequestType<typeof client.users.email.$get>) {
  return ['users', '/users/email', args] as const
}

export function useGetUsersEmail<TError = unknown>(
  args: InferRequestType<typeof client.users.email.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.email.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersEmailKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.email.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.email.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersEmail<TError = unknown>(
  args: InferRequestType<typeof client.users.email.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.email.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersEmailKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.email.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.email.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersMeZakKey() {
  return ['users', '/users/me/zak'] as const
}

export function useGetUsersMeZak<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.zak.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeZakKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.zak.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.zak.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeZak<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.zak.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeZakKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.zak.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.zak.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersVanityNameKey(
  args: InferRequestType<typeof client.users.vanity_name.$get>,
) {
  return ['users', '/users/vanity_name', args] as const
}

export function useGetUsersVanityName<TError = unknown>(
  args: InferRequestType<typeof client.users.vanity_name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.vanity_name.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersVanityNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.vanity_name.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.vanity_name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersVanityName<TError = unknown>(
  args: InferRequestType<typeof client.users.vanity_name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.vanity_name.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersVanityNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.vanity_name.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.vanity_name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdKey(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
) {
  return ['users', '/users/:userId', args] as const
}

export function useGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersUserIdKey() {
  return ['users', '/users/:userId', 'DELETE'] as const
}

export function useDeleteUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['$delete']> },
      ) => parseResponse(client.users[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdKey() {
  return ['users', '/users/:userId', 'PATCH'] as const
}

export function usePatchUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$patch']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['$patch']> },
      ) => parseResponse(client.users[':userId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdAssistantsKey(
  args: InferRequestType<(typeof client.users)[':userId']['assistants']['$get']>,
) {
  return ['users', '/users/:userId/assistants', args] as const
}

export function useGetUsersUserIdAssistants<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['assistants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['assistants']['$get']>>
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
        ? getGetUsersUserIdAssistantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['assistants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].assistants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdAssistants<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['assistants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['assistants']['$get']>>
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
        ? getGetUsersUserIdAssistantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['assistants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].assistants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdAssistantsKey() {
  return ['users', '/users/:userId/assistants', 'POST'] as const
}

export function usePostUsersUserIdAssistants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['assistants']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['assistants']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdAssistantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['assistants']['$post']> },
      ) => parseResponse(client.users[':userId'].assistants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdAssistantsKey() {
  return ['users', '/users/:userId/assistants', 'DELETE'] as const
}

export function useDeleteUsersUserIdAssistants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['assistants']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['assistants']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdAssistantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':userId']['assistants']['$delete']> },
      ) => parseResponse(client.users[':userId'].assistants.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdAssistantsAssistantIdKey() {
  return ['users', '/users/:userId/assistants/:assistantId', 'DELETE'] as const
}

export function useDeleteUsersUserIdAssistantsAssistantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':userId']['assistants'][':assistantId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['assistants'][':assistantId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdAssistantsAssistantIdKey()
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
            (typeof client.users)[':userId']['assistants'][':assistantId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':userId'].assistants[':assistantId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutUsersUserIdEmailKey() {
  return ['users', '/users/:userId/email', 'PUT'] as const
}

export function usePutUsersUserIdEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['email']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['email']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['email']['$put']> },
      ) => parseResponse(client.users[':userId'].email.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdMeetingTemplatesKey(
  args: InferRequestType<(typeof client.users)[':userId']['meeting_templates']['$get']>,
) {
  return ['users', '/users/:userId/meeting_templates', args] as const
}

export function useGetUsersUserIdMeetingTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['meeting_templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['meeting_templates']['$get']>>
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
        ? getGetUsersUserIdMeetingTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['meeting_templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':userId'].meeting_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdMeetingTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['meeting_templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['meeting_templates']['$get']>>
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
        ? getGetUsersUserIdMeetingTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['meeting_templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':userId'].meeting_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdMeetingsKey(
  args: InferRequestType<(typeof client.users)[':userId']['meetings']['$get']>,
) {
  return ['users', '/users/:userId/meetings', args] as const
}

export function useGetUsersUserIdMeetings<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['meetings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['meetings']['$get']>>
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
        ? getGetUsersUserIdMeetingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['meetings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].meetings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdMeetings<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['meetings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['meetings']['$get']>>
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
        ? getGetUsersUserIdMeetingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['meetings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].meetings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdMeetingsKey() {
  return ['users', '/users/:userId/meetings', 'POST'] as const
}

export function usePostUsersUserIdMeetings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['meetings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['meetings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdMeetingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['meetings']['$post']> },
      ) => parseResponse(client.users[':userId'].meetings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdPacKey(
  args: InferRequestType<(typeof client.users)[':userId']['pac']['$get']>,
) {
  return ['users', '/users/:userId/pac', args] as const
}

export function useGetUsersUserIdPac<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['pac']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['pac']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdPacKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['pac']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].pac.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPac<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['pac']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['pac']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdPacKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['pac']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].pac.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersUserIdPasswordKey() {
  return ['users', '/users/:userId/password', 'PUT'] as const
}

export function usePutUsersUserIdPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['password']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['password']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['password']['$put']> },
      ) => parseResponse(client.users[':userId'].password.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdPermissionsKey(
  args: InferRequestType<(typeof client.users)[':userId']['permissions']['$get']>,
) {
  return ['users', '/users/:userId/permissions', args] as const
}

export function useGetUsersUserIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['permissions']['$get']>>
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
            Awaited<ReturnType<(typeof client.users)[':userId']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['permissions']['$get']>>
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
            Awaited<ReturnType<(typeof client.users)[':userId']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdPictureKey() {
  return ['users', '/users/:userId/picture', 'POST'] as const
}

export function usePostUsersUserIdPicture<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['picture']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['picture']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdPictureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['picture']['$post']> },
      ) => parseResponse(client.users[':userId'].picture.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutUsersUserIdPresenceStatusKey() {
  return ['users', '/users/:userId/presence_status', 'PUT'] as const
}

export function usePutUsersUserIdPresenceStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['presence_status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['presence_status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdPresenceStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':userId']['presence_status']['$put']> },
      ) => parseResponse(client.users[':userId'].presence_status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdRecordingsKey(
  args: InferRequestType<(typeof client.users)[':userId']['recordings']['$get']>,
) {
  return ['users', '/users/:userId/recordings', args] as const
}

export function useGetUsersUserIdRecordings<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['recordings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['recordings']['$get']>>
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
        ? getGetUsersUserIdRecordingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['recordings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].recordings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdRecordings<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['recordings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['recordings']['$get']>>
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
        ? getGetUsersUserIdRecordingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['recordings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].recordings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdSchedulersKey(
  args: InferRequestType<(typeof client.users)[':userId']['schedulers']['$get']>,
) {
  return ['users', '/users/:userId/schedulers', args] as const
}

export function useGetUsersUserIdSchedulers<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['schedulers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['schedulers']['$get']>>
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
        ? getGetUsersUserIdSchedulersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['schedulers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].schedulers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdSchedulers<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['schedulers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['schedulers']['$get']>>
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
        ? getGetUsersUserIdSchedulersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['schedulers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].schedulers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersUserIdSchedulersKey() {
  return ['users', '/users/:userId/schedulers', 'DELETE'] as const
}

export function useDeleteUsersUserIdSchedulers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['schedulers']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['schedulers']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdSchedulersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':userId']['schedulers']['$delete']> },
      ) => parseResponse(client.users[':userId'].schedulers.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdSchedulersSchedulerIdKey() {
  return ['users', '/users/:userId/schedulers/:schedulerId', 'DELETE'] as const
}

export function useDeleteUsersUserIdSchedulersSchedulerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':userId']['schedulers'][':schedulerId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['schedulers'][':schedulerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdSchedulersSchedulerIdKey()
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
            (typeof client.users)[':userId']['schedulers'][':schedulerId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':userId'].schedulers[':schedulerId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdSettingsKey(
  args: InferRequestType<(typeof client.users)[':userId']['settings']['$get']>,
) {
  return ['users', '/users/:userId/settings', args] as const
}

export function useGetUsersUserIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['settings']['$get']>>
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
        ? getGetUsersUserIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['settings']['$get']>>
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
        ? getGetUsersUserIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchUsersUserIdSettingsKey() {
  return ['users', '/users/:userId/settings', 'PATCH'] as const
}

export function usePatchUsersUserIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['settings']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['settings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['settings']['$patch']> },
      ) => parseResponse(client.users[':userId'].settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdSettingsVirtualBackgroundsKey() {
  return ['users', '/users/:userId/settings/virtual_backgrounds', 'POST'] as const
}

export function usePostUsersUserIdSettingsVirtualBackgrounds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':userId']['settings']['virtual_backgrounds']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['settings']['virtual_backgrounds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdSettingsVirtualBackgroundsKey()
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
            (typeof client.users)[':userId']['settings']['virtual_backgrounds']['$post']
          >
        },
      ) =>
        parseResponse(
          client.users[':userId'].settings.virtual_backgrounds.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdSettingsVirtualBackgroundsKey() {
  return ['users', '/users/:userId/settings/virtual_backgrounds', 'DELETE'] as const
}

export function useDeleteUsersUserIdSettingsVirtualBackgrounds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':userId']['settings']['virtual_backgrounds']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['settings']['virtual_backgrounds']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdSettingsVirtualBackgroundsKey()
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
            (typeof client.users)[':userId']['settings']['virtual_backgrounds']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':userId'].settings.virtual_backgrounds.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutUsersUserIdStatusKey() {
  return ['users', '/users/:userId/status', 'PUT'] as const
}

export function usePutUsersUserIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['status']['$put']> },
      ) => parseResponse(client.users[':userId'].status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdTokenKey(
  args: InferRequestType<(typeof client.users)[':userId']['token']['$get']>,
) {
  return ['users', '/users/:userId/token', args] as const
}

export function useGetUsersUserIdToken<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['token']['$get']>>
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
        ? getGetUsersUserIdTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdToken<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['token']['$get']>>
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
        ? getGetUsersUserIdTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersUserIdTokenKey() {
  return ['users', '/users/:userId/token', 'DELETE'] as const
}

export function useDeleteUsersUserIdToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['token']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['token']['$delete']> },
      ) => parseResponse(client.users[':userId'].token.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdTspKey(
  args: InferRequestType<(typeof client.users)[':userId']['tsp']['$get']>,
) {
  return ['users', '/users/:userId/tsp', args] as const
}

export function useGetUsersUserIdTsp<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['tsp']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['tsp']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdTspKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['tsp']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].tsp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdTsp<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['tsp']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['tsp']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdTspKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['tsp']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].tsp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdTspKey() {
  return ['users', '/users/:userId/tsp', 'POST'] as const
}

export function usePostUsersUserIdTsp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['tsp']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['tsp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdTspKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['tsp']['$post']> },
      ) => parseResponse(client.users[':userId'].tsp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdTspSettingsKey() {
  return ['users', '/users/:userId/tsp/settings', 'PATCH'] as const
}

export function usePatchUsersUserIdTspSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['tsp']['settings']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['tsp']['settings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdTspSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':userId']['tsp']['settings']['$patch']> },
      ) => parseResponse(client.users[':userId'].tsp.settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdTspTspIdKey(
  args: InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>,
) {
  return ['users', '/users/:userId/tsp/:tspId', args] as const
}

export function useGetUsersUserIdTspTspId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>>
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
        ? getGetUsersUserIdTspTspIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].tsp[':tspId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdTspTspId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>>
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
        ? getGetUsersUserIdTspTspIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].tsp[':tspId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersUserIdTspTspIdKey() {
  return ['users', '/users/:userId/tsp/:tspId', 'DELETE'] as const
}

export function useDeleteUsersUserIdTspTspId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['tsp'][':tspId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdTspTspIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$delete']> },
      ) => parseResponse(client.users[':userId'].tsp[':tspId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdTspTspIdKey() {
  return ['users', '/users/:userId/tsp/:tspId', 'PATCH'] as const
}

export function usePatchUsersUserIdTspTspId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['tsp'][':tspId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdTspTspIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$patch']> },
      ) => parseResponse(client.users[':userId'].tsp[':tspId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdWebinarTemplatesKey(
  args: InferRequestType<(typeof client.users)[':userId']['webinar_templates']['$get']>,
) {
  return ['users', '/users/:userId/webinar_templates', args] as const
}

export function useGetUsersUserIdWebinarTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['webinar_templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['webinar_templates']['$get']>>
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
        ? getGetUsersUserIdWebinarTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['webinar_templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':userId'].webinar_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdWebinarTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['webinar_templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['webinar_templates']['$get']>>
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
        ? getGetUsersUserIdWebinarTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['webinar_templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':userId'].webinar_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdWebinarsKey(
  args: InferRequestType<(typeof client.users)[':userId']['webinars']['$get']>,
) {
  return ['users', '/users/:userId/webinars', args] as const
}

export function useGetUsersUserIdWebinars<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['webinars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['webinars']['$get']>>
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
        ? getGetUsersUserIdWebinarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['webinars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].webinars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdWebinars<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['webinars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['webinars']['$get']>>
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
        ? getGetUsersUserIdWebinarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['webinars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].webinars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdWebinarsKey() {
  return ['users', '/users/:userId/webinars', 'POST'] as const
}

export function usePostUsersUserIdWebinars<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['webinars']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['webinars']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdWebinarsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['webinars']['$post']> },
      ) => parseResponse(client.users[':userId'].webinars.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebinarsWebinarIdKey(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['$get']>,
) {
  return ['webinars', '/webinars/:webinarId', args] as const
}

export function useGetWebinarsWebinarId<TError = unknown>(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webinars)[':webinarId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebinarsWebinarIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webinars)[':webinarId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webinars[':webinarId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebinarsWebinarId<TError = unknown>(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webinars)[':webinarId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebinarsWebinarIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webinars)[':webinarId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webinars[':webinarId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWebinarsWebinarIdKey() {
  return ['webinars', '/webinars/:webinarId', 'DELETE'] as const
}

export function useDeleteWebinarsWebinarId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webinars)[':webinarId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebinarsWebinarIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webinars)[':webinarId']['$delete']> },
      ) => parseResponse(client.webinars[':webinarId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWebinarsWebinarIdKey() {
  return ['webinars', '/webinars/:webinarId', 'PATCH'] as const
}

export function usePatchWebinarsWebinarId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webinars)[':webinarId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWebinarsWebinarIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webinars)[':webinarId']['$patch']> },
      ) => parseResponse(client.webinars[':webinarId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebinarsWebinarIdBatchRegistrantsKey() {
  return ['webinars', '/webinars/:webinarId/batch_registrants', 'POST'] as const
}

export function usePostWebinarsWebinarIdBatchRegistrants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webinars)[':webinarId']['batch_registrants']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webinars)[':webinarId']['batch_registrants']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebinarsWebinarIdBatchRegistrantsKey()
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
            (typeof client.webinars)[':webinarId']['batch_registrants']['$post']
          >
        },
      ) => parseResponse(client.webinars[':webinarId'].batch_registrants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebinarsWebinarIdPanelistsKey(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$get']>,
) {
  return ['webinars', '/webinars/:webinarId/panelists', args] as const
}

export function useGetWebinarsWebinarIdPanelists<TError = unknown>(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$get']>>
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
        ? getGetWebinarsWebinarIdPanelistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webinars[':webinarId'].panelists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebinarsWebinarIdPanelists<TError = unknown>(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$get']>>
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
        ? getGetWebinarsWebinarIdPanelistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webinars[':webinarId'].panelists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebinarsWebinarIdPanelistsKey() {
  return ['webinars', '/webinars/:webinarId/panelists', 'POST'] as const
}

export function usePostWebinarsWebinarIdPanelists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebinarsWebinarIdPanelistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$post']> },
      ) => parseResponse(client.webinars[':webinarId'].panelists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebinarsWebinarIdPanelistsKey() {
  return ['webinars', '/webinars/:webinarId/panelists', 'DELETE'] as const
}

export function useDeleteWebinarsWebinarIdPanelists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebinarsWebinarIdPanelistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$delete']>
        },
      ) => parseResponse(client.webinars[':webinarId'].panelists.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebinarsWebinarIdPanelistsPanelistIdKey() {
  return ['webinars', '/webinars/:webinarId/panelists/:panelistId', 'DELETE'] as const
}

export function useDeleteWebinarsWebinarIdPanelistsPanelistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webinars)[':webinarId']['panelists'][':panelistId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webinars)[':webinarId']['panelists'][':panelistId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebinarsWebinarIdPanelistsPanelistIdKey()
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
            (typeof client.webinars)[':webinarId']['panelists'][':panelistId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.webinars[':webinarId'].panelists[':panelistId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWebinarsWebinarIdPollsKey(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['polls']['$get']>,
) {
  return ['webinars', '/webinars/:webinarId/polls', args] as const
}

export function useGetWebinarsWebinarIdPolls<TError = unknown>(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['polls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls']['$get']>>
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
        ? getGetWebinarsWebinarIdPollsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webinars[':webinarId'].polls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebinarsWebinarIdPolls<TError = unknown>(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['polls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls']['$get']>>
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
        ? getGetWebinarsWebinarIdPollsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webinars[':webinarId'].polls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebinarsWebinarIdPollsKey() {
  return ['webinars', '/webinars/:webinarId/polls', 'POST'] as const
}

export function usePostWebinarsWebinarIdPolls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webinars)[':webinarId']['polls']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebinarsWebinarIdPollsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.webinars)[':webinarId']['polls']['$post']> },
      ) => parseResponse(client.webinars[':webinarId'].polls.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebinarsWebinarIdPollsPollIdKey(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>,
) {
  return ['webinars', '/webinars/:webinarId/polls/:pollId', args] as const
}

export function useGetWebinarsWebinarIdPollsPollId<TError = unknown>(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>>
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
        ? getGetWebinarsWebinarIdPollsPollIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webinars[':webinarId'].polls[':pollId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebinarsWebinarIdPollsPollId<TError = unknown>(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>>
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
        ? getGetWebinarsWebinarIdPollsPollIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webinars[':webinarId'].polls[':pollId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWebinarsWebinarIdPollsPollIdKey() {
  return ['webinars', '/webinars/:webinarId/polls/:pollId', 'PUT'] as const
}

export function usePutWebinarsWebinarIdPollsPollId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebinarsWebinarIdPollsPollIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$put']>
        },
      ) => parseResponse(client.webinars[':webinarId'].polls[':pollId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebinarsWebinarIdPollsPollIdKey() {
  return ['webinars', '/webinars/:webinarId/polls/:pollId', 'DELETE'] as const
}

export function useDeleteWebinarsWebinarIdPollsPollId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebinarsWebinarIdPollsPollIdKey()
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
            (typeof client.webinars)[':webinarId']['polls'][':pollId']['$delete']
          >
        },
      ) =>
        parseResponse(client.webinars[':webinarId'].polls[':pollId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebinarsWebinarIdRegistrantsKey(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['$get']>,
) {
  return ['webinars', '/webinars/:webinarId/registrants', args] as const
}

export function useGetWebinarsWebinarIdRegistrants<TError = unknown>(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['registrants']['$get']>>
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
        ? getGetWebinarsWebinarIdRegistrantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['registrants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webinars[':webinarId'].registrants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebinarsWebinarIdRegistrants<TError = unknown>(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['registrants']['$get']>>
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
        ? getGetWebinarsWebinarIdRegistrantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['registrants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webinars[':webinarId'].registrants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebinarsWebinarIdRegistrantsKey() {
  return ['webinars', '/webinars/:webinarId/registrants', 'POST'] as const
}

export function usePostWebinarsWebinarIdRegistrants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webinars)[':webinarId']['registrants']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebinarsWebinarIdRegistrantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['$post']>
        },
      ) => parseResponse(client.webinars[':webinarId'].registrants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebinarsWebinarIdRegistrantsQuestionsKey(
  args: InferRequestType<
    (typeof client.webinars)[':webinarId']['registrants']['questions']['$get']
  >,
) {
  return ['webinars', '/webinars/:webinarId/registrants/questions', args] as const
}

export function useGetWebinarsWebinarIdRegistrantsQuestions<TError = unknown>(
  args: InferRequestType<
    (typeof client.webinars)[':webinarId']['registrants']['questions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.webinars)[':webinarId']['registrants']['questions']['$get']>
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
        ? getGetWebinarsWebinarIdRegistrantsQuestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.webinars)[':webinarId']['registrants']['questions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.webinars[':webinarId'].registrants.questions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebinarsWebinarIdRegistrantsQuestions<TError = unknown>(
  args: InferRequestType<
    (typeof client.webinars)[':webinarId']['registrants']['questions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.webinars)[':webinarId']['registrants']['questions']['$get']>
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
        ? getGetWebinarsWebinarIdRegistrantsQuestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.webinars)[':webinarId']['registrants']['questions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.webinars[':webinarId'].registrants.questions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchWebinarsWebinarIdRegistrantsQuestionsKey() {
  return ['webinars', '/webinars/:webinarId/registrants/questions', 'PATCH'] as const
}

export function usePatchWebinarsWebinarIdRegistrantsQuestions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webinars)[':webinarId']['registrants']['questions']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['questions']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWebinarsWebinarIdRegistrantsQuestionsKey()
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
            (typeof client.webinars)[':webinarId']['registrants']['questions']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.webinars[':webinarId'].registrants.questions.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutWebinarsWebinarIdRegistrantsStatusKey() {
  return ['webinars', '/webinars/:webinarId/registrants/status', 'PUT'] as const
}

export function usePutWebinarsWebinarIdRegistrantsStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.webinars)[':webinarId']['registrants']['status']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebinarsWebinarIdRegistrantsStatusKey()
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
            (typeof client.webinars)[':webinarId']['registrants']['status']['$put']
          >
        },
      ) => parseResponse(client.webinars[':webinarId'].registrants.status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebinarsWebinarIdRegistrantsRegistrantIdKey(
  args: InferRequestType<
    (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']
  >,
) {
  return ['webinars', '/webinars/:webinarId/registrants/:registrantId', args] as const
}

export function useGetWebinarsWebinarIdRegistrantsRegistrantId<TError = unknown>(
  args: InferRequestType<
    (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']
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
        ? getGetWebinarsWebinarIdRegistrantsRegistrantIdKey(args)
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
                (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']
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
          client.webinars[':webinarId'].registrants[':registrantId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebinarsWebinarIdRegistrantsRegistrantId<TError = unknown>(
  args: InferRequestType<
    (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']
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
        ? getGetWebinarsWebinarIdRegistrantsRegistrantIdKey(args)
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
                (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']
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
          client.webinars[':webinarId'].registrants[':registrantId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteWebinarsWebinarIdRegistrantsRegistrantIdKey() {
  return ['webinars', '/webinars/:webinarId/registrants/:registrantId', 'DELETE'] as const
}

export function useDeleteWebinarsWebinarIdRegistrantsRegistrantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebinarsWebinarIdRegistrantsRegistrantIdKey()
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
            (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.webinars[':webinarId'].registrants[':registrantId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutWebinarsWebinarIdStatusKey() {
  return ['webinars', '/webinars/:webinarId/status', 'PUT'] as const
}

export function usePutWebinarsWebinarIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webinars)[':webinarId']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebinarsWebinarIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.webinars)[':webinarId']['status']['$put']> },
      ) => parseResponse(client.webinars[':webinarId'].status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebinarsWebinarIdTrackingSourcesKey(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>,
) {
  return ['webinars', '/webinars/:webinarId/tracking_sources', args] as const
}

export function useGetWebinarsWebinarIdTrackingSources<TError = unknown>(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>>
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
        ? getGetWebinarsWebinarIdTrackingSourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webinars[':webinarId'].tracking_sources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebinarsWebinarIdTrackingSources<TError = unknown>(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>>
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
        ? getGetWebinarsWebinarIdTrackingSourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webinars[':webinarId'].tracking_sources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
