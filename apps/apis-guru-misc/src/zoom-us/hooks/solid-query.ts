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

export function getAccountsQueryKey(args: InferRequestType<typeof client.accounts.$get>) {
  return ['accounts', '/accounts', args] as const
}

export function getAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >({
    queryKey: getAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsQueryKey>
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
    return { ...getAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAccountsMutationKey() {
  return ['accounts', '/accounts', 'POST'] as const
}

export function getPostAccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>>,
    TError,
    InferRequestType<typeof client.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.$post>) {
      return parseResponse(client.accounts.$post(args, options))
    },
  })
}

export function createPostAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.accounts.$post>,
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
    const mutationDefaults = getPostAccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountsAccountIdQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
) {
  return ['accounts', '/accounts/:accountId', args] as const
}

export function getAccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdQueryKey>
  >({
    queryKey: getAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsAccountIdQueryKey>
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
    return { ...getAccountsAccountIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteAccountsAccountIdMutationKey() {
  return ['accounts', '/accounts/:accountId', 'DELETE'] as const
}

export function getDeleteAccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':accountId']['$delete']>) {
      return parseResponse(client.accounts[':accountId'].$delete(args, options))
    },
  })
}

export function createDeleteAccountsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.accounts)[':accountId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['$delete']>,
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
    const mutationDefaults = getDeleteAccountsAccountIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountsAccountIdBillingQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['billing']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/billing', args] as const
}

export function getAccountsAccountIdBillingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['billing']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdBillingQueryKey>
  >({
    queryKey: getAccountsAccountIdBillingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].billing.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdBilling<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['billing']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsAccountIdBillingQueryKey>
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
      ...getAccountsAccountIdBillingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchAccountsAccountIdBillingMutationKey() {
  return ['accounts', '/accounts/:accountId/billing', 'PATCH'] as const
}

export function getPatchAccountsAccountIdBillingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['billing']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsAccountIdBillingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['billing']['$patch']>,
    ) {
      return parseResponse(client.accounts[':accountId'].billing.$patch(args, options))
    },
  })
}

export function createPatchAccountsAccountIdBilling<
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
                  Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['billing']['$patch']>,
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
    const mutationDefaults = getPatchAccountsAccountIdBillingMutationOptions<
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

export function getAccountsAccountIdBillingInvoicesQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/billing/invoices', args] as const
}

export function getAccountsAccountIdBillingInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdBillingInvoicesQueryKey>
  >({
    queryKey: getAccountsAccountIdBillingInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].billing.invoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdBillingInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['billing']['invoices']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsAccountIdBillingInvoicesQueryKey>
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
      ...getAccountsAccountIdBillingInvoicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdBillingInvoicesInvoiceIdQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['billing']['invoices'][':invoiceId']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/billing/invoices/:invoiceId', args] as const
}

export function getAccountsAccountIdBillingInvoicesInvoiceIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['billing']['invoices'][':invoiceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdBillingInvoicesInvoiceIdQueryKey>
  >({
    queryKey: getAccountsAccountIdBillingInvoicesInvoiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].billing.invoices[':invoiceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdBillingInvoicesInvoiceId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['billing']['invoices'][':invoiceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getAccountsAccountIdBillingInvoicesInvoiceIdQueryKey>
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
      ...getAccountsAccountIdBillingInvoicesInvoiceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdLockSettingsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/lock_settings', args] as const
}

export function getAccountsAccountIdLockSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdLockSettingsQueryKey>
  >({
    queryKey: getAccountsAccountIdLockSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].lock_settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdLockSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsAccountIdLockSettingsQueryKey>
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
      ...getAccountsAccountIdLockSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchAccountsAccountIdLockSettingsMutationKey() {
  return ['accounts', '/accounts/:accountId/lock_settings', 'PATCH'] as const
}

export function getPatchAccountsAccountIdLockSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['lock_settings']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['lock_settings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsAccountIdLockSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['lock_settings']['$patch']>,
    ) {
      return parseResponse(client.accounts[':accountId'].lock_settings.$patch(args, options))
    },
  })
}

export function createPatchAccountsAccountIdLockSettings<
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
                    ReturnType<(typeof client.accounts)[':accountId']['lock_settings']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['lock_settings']['$patch']>,
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
    const mutationDefaults = getPatchAccountsAccountIdLockSettingsMutationOptions<
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

export function getAccountsAccountIdManagedDomainsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/managed_domains', args] as const
}

export function getAccountsAccountIdManagedDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdManagedDomainsQueryKey>
  >({
    queryKey: getAccountsAccountIdManagedDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].managed_domains.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdManagedDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsAccountIdManagedDomainsQueryKey>
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
      ...getAccountsAccountIdManagedDomainsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchAccountsAccountIdOptionsMutationKey() {
  return ['accounts', '/accounts/:accountId/options', 'PATCH'] as const
}

export function getPatchAccountsAccountIdOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['options']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['options']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsAccountIdOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['options']['$patch']>,
    ) {
      return parseResponse(client.accounts[':accountId'].options.$patch(args, options))
    },
  })
}

export function createPatchAccountsAccountIdOptions<
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
                  Awaited<ReturnType<(typeof client.accounts)[':accountId']['options']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['options']['$patch']>,
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
    const mutationDefaults = getPatchAccountsAccountIdOptionsMutationOptions<
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

export function getPutAccountsAccountIdOwnerMutationKey() {
  return ['accounts', '/accounts/:accountId/owner', 'PUT'] as const
}

export function getPutAccountsAccountIdOwnerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['owner']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['owner']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAccountIdOwnerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['owner']['$put']>,
    ) {
      return parseResponse(client.accounts[':accountId'].owner.$put(args, options))
    },
  })
}

export function createPutAccountsAccountIdOwner<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.accounts)[':accountId']['owner']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['owner']['$put']>,
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
    const mutationDefaults = getPutAccountsAccountIdOwnerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchAccountsAccountIdPhoneSettingsMutationKey() {
  return ['accounts', '/accounts/:accountId/phone/settings', 'PATCH'] as const
}

export function getPatchAccountsAccountIdPhoneSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':accountId']['phone']['settings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsAccountIdPhoneSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['phone']['settings']['$patch']>,
    ) {
      return parseResponse(client.accounts[':accountId'].phone.settings.$patch(args, options))
    },
  })
}

export function createPatchAccountsAccountIdPhoneSettings<
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
                      (typeof client.accounts)[':accountId']['phone']['settings']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['phone']['settings']['$patch']>,
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
    const mutationDefaults = getPatchAccountsAccountIdPhoneSettingsMutationOptions<
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

export function getPostAccountsAccountIdPhoneSetupMutationKey() {
  return ['accounts', '/accounts/:accountId/phone/setup', 'POST'] as const
}

export function getPostAccountsAccountIdPhoneSetupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['phone']['setup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['phone']['setup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdPhoneSetupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['phone']['setup']['$post']>,
    ) {
      return parseResponse(client.accounts[':accountId'].phone.setup.$post(args, options))
    },
  })
}

export function createPostAccountsAccountIdPhoneSetup<
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
                  ReturnType<(typeof client.accounts)[':accountId']['phone']['setup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['phone']['setup']['$post']>,
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
    const mutationDefaults = getPostAccountsAccountIdPhoneSetupMutationOptions<
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

export function getPostAccountsAccountIdPhoneSipTrunkTrunksMutationKey() {
  return ['accounts', '/accounts/:accountId/phone/sip_trunk/trunks', 'POST'] as const
}

export function getPostAccountsAccountIdPhoneSipTrunkTrunksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':accountId']['phone']['sip_trunk']['trunks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdPhoneSipTrunkTrunksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['phone']['sip_trunk']['trunks']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].phone.sip_trunk.trunks.$post(args, options),
      )
    },
  })
}

export function createPostAccountsAccountIdPhoneSipTrunkTrunks<
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
                    (typeof client.accounts)[':accountId']['phone']['sip_trunk']['trunks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['phone']['sip_trunk']['trunks']['$post']
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
    const mutationDefaults = getPostAccountsAccountIdPhoneSipTrunkTrunksMutationOptions<
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

export function getPatchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkIdMutationKey() {
  return ['accounts', '/accounts/:accountId/phone/sip_trunk/trunks/:sipTrunkId', 'PATCH'] as const
}

export function getPatchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':accountId']['phone']['sip_trunk']['trunks'][':sipTrunkId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['phone']['sip_trunk']['trunks'][':sipTrunkId']['$patch']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].phone.sip_trunk.trunks[':sipTrunkId'].$patch(args, options),
      )
    },
  })
}

export function createPatchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkId<
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
                      (typeof client.accounts)[':accountId']['phone']['sip_trunk']['trunks'][':sipTrunkId']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['phone']['sip_trunk']['trunks'][':sipTrunkId']['$patch']
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
    const mutationDefaults = getPatchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkIdMutationOptions<
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

export function getAccountsAccountIdPlansQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/plans', args] as const
}

export function getAccountsAccountIdPlansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdPlansQueryKey>
  >({
    queryKey: getAccountsAccountIdPlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].plans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdPlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['plans']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsAccountIdPlansQueryKey>
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
      ...getAccountsAccountIdPlansQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountsAccountIdPlansMutationKey() {
  return ['accounts', '/accounts/:accountId/plans', 'POST'] as const
}

export function getPostAccountsAccountIdPlansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['plans']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdPlansMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['$post']>,
    ) {
      return parseResponse(client.accounts[':accountId'].plans.$post(args, options))
    },
  })
}

export function createPostAccountsAccountIdPlans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['plans']['$post']>,
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
    const mutationDefaults = getPostAccountsAccountIdPlansMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutAccountsAccountIdPlansAddonsMutationKey() {
  return ['accounts', '/accounts/:accountId/plans/addons', 'PUT'] as const
}

export function getPutAccountsAccountIdPlansAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['addons']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['plans']['addons']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAccountIdPlansAddonsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['addons']['$put']>,
    ) {
      return parseResponse(client.accounts[':accountId'].plans.addons.$put(args, options))
    },
  })
}

export function createPutAccountsAccountIdPlansAddons<
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
                    ReturnType<(typeof client.accounts)[':accountId']['plans']['addons']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['plans']['addons']['$put']>,
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
    const mutationDefaults = getPutAccountsAccountIdPlansAddonsMutationOptions<
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

export function getPostAccountsAccountIdPlansAddonsMutationKey() {
  return ['accounts', '/accounts/:accountId/plans/addons', 'POST'] as const
}

export function getPostAccountsAccountIdPlansAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['addons']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['plans']['addons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdPlansAddonsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['addons']['$post']>,
    ) {
      return parseResponse(client.accounts[':accountId'].plans.addons.$post(args, options))
    },
  })
}

export function createPostAccountsAccountIdPlansAddons<
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
                  ReturnType<(typeof client.accounts)[':accountId']['plans']['addons']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['plans']['addons']['$post']>,
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
    const mutationDefaults = getPostAccountsAccountIdPlansAddonsMutationOptions<
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

export function getPatchAccountsAccountIdPlansAddonsStatusMutationKey() {
  return ['accounts', '/accounts/:accountId/plans/addons/status', 'PATCH'] as const
}

export function getPatchAccountsAccountIdPlansAddonsStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':accountId']['plans']['addons']['status']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsAccountIdPlansAddonsStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['plans']['addons']['status']['$patch']
      >,
    ) {
      return parseResponse(client.accounts[':accountId'].plans.addons.status.$patch(args, options))
    },
  })
}

export function createPatchAccountsAccountIdPlansAddonsStatus<
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
                      (typeof client.accounts)[':accountId']['plans']['addons']['status']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['plans']['addons']['status']['$patch']
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
    const mutationDefaults = getPatchAccountsAccountIdPlansAddonsStatusMutationOptions<
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

export function getPutAccountsAccountIdPlansBaseMutationKey() {
  return ['accounts', '/accounts/:accountId/plans/base', 'PUT'] as const
}

export function getPutAccountsAccountIdPlansBaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['base']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['plans']['base']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAccountIdPlansBaseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['base']['$put']>,
    ) {
      return parseResponse(client.accounts[':accountId'].plans.base.$put(args, options))
    },
  })
}

export function createPutAccountsAccountIdPlansBase<
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
                    ReturnType<(typeof client.accounts)[':accountId']['plans']['base']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['plans']['base']['$put']>,
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
    const mutationDefaults = getPutAccountsAccountIdPlansBaseMutationOptions<
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

export function getPatchAccountsAccountIdPlansBaseStatusMutationKey() {
  return ['accounts', '/accounts/:accountId/plans/base/status', 'PATCH'] as const
}

export function getPatchAccountsAccountIdPlansBaseStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':accountId']['plans']['base']['status']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsAccountIdPlansBaseStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['plans']['base']['status']['$patch']
      >,
    ) {
      return parseResponse(client.accounts[':accountId'].plans.base.status.$patch(args, options))
    },
  })
}

export function createPatchAccountsAccountIdPlansBaseStatus<
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
                      (typeof client.accounts)[':accountId']['plans']['base']['status']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['plans']['base']['status']['$patch']
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
    const mutationDefaults = getPatchAccountsAccountIdPlansBaseStatusMutationOptions<
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

export function getAccountsAccountIdPlansUsageQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/plans/usage', args] as const
}

export function getAccountsAccountIdPlansUsageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdPlansUsageQueryKey>
  >({
    queryKey: getAccountsAccountIdPlansUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].plans.usage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdPlansUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsAccountIdPlansUsageQueryKey>
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
      ...getAccountsAccountIdPlansUsageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdRecordingsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['recordings']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/recordings', args] as const
}

export function getAccountsAccountIdRecordingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['recordings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['recordings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdRecordingsQueryKey>
  >({
    queryKey: getAccountsAccountIdRecordingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].recordings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdRecordings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['recordings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['recordings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsAccountIdRecordingsQueryKey>
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
      ...getAccountsAccountIdRecordingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdSettingsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/settings', args] as const
}

export function getAccountsAccountIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdSettingsQueryKey>
  >({
    queryKey: getAccountsAccountIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsAccountIdSettingsQueryKey>
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
      ...getAccountsAccountIdSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchAccountsAccountIdSettingsMutationKey() {
  return ['accounts', '/accounts/:accountId/settings', 'PATCH'] as const
}

export function getPatchAccountsAccountIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['settings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsAccountIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$patch']>,
    ) {
      return parseResponse(client.accounts[':accountId'].settings.$patch(args, options))
    },
  })
}

export function createPatchAccountsAccountIdSettings<
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
                  Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['settings']['$patch']>,
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
    const mutationDefaults = getPatchAccountsAccountIdSettingsMutationOptions<
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

export function getPostAccountsAccountIdSettingsVirtualBackgroundsMutationKey() {
  return ['accounts', '/accounts/:accountId/settings/virtual_backgrounds', 'POST'] as const
}

export function getPostAccountsAccountIdSettingsVirtualBackgroundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':accountId']['settings']['virtual_backgrounds']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdSettingsVirtualBackgroundsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['settings']['virtual_backgrounds']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].settings.virtual_backgrounds.$post(args, options),
      )
    },
  })
}

export function createPostAccountsAccountIdSettingsVirtualBackgrounds<
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
                    (typeof client.accounts)[':accountId']['settings']['virtual_backgrounds']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['settings']['virtual_backgrounds']['$post']
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
    const mutationDefaults = getPostAccountsAccountIdSettingsVirtualBackgroundsMutationOptions<
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

export function getDeleteAccountsAccountIdSettingsVirtualBackgroundsMutationKey() {
  return ['accounts', '/accounts/:accountId/settings/virtual_backgrounds', 'DELETE'] as const
}

export function getDeleteAccountsAccountIdSettingsVirtualBackgroundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':accountId']['settings']['virtual_backgrounds']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdSettingsVirtualBackgroundsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['settings']['virtual_backgrounds']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].settings.virtual_backgrounds.$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountsAccountIdSettingsVirtualBackgrounds<
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
                      (typeof client.accounts)[':accountId']['settings']['virtual_backgrounds']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['settings']['virtual_backgrounds']['$delete']
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
    const mutationDefaults = getDeleteAccountsAccountIdSettingsVirtualBackgroundsMutationOptions<
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

export function getAccountsAccountIdSipTrunkCalloutCountriesQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/sip_trunk/callout_countries', args] as const
}

export function getAccountsAccountIdSipTrunkCalloutCountriesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdSipTrunkCalloutCountriesQueryKey>
  >({
    queryKey: getAccountsAccountIdSipTrunkCalloutCountriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].sip_trunk.callout_countries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdSipTrunkCalloutCountries<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getAccountsAccountIdSipTrunkCalloutCountriesQueryKey>
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
      ...getAccountsAccountIdSipTrunkCalloutCountriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountsAccountIdSipTrunkCalloutCountriesMutationKey() {
  return ['accounts', '/accounts/:accountId/sip_trunk/callout_countries', 'POST'] as const
}

export function getPostAccountsAccountIdSipTrunkCalloutCountriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdSipTrunkCalloutCountriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].sip_trunk.callout_countries.$post(args, options),
      )
    },
  })
}

export function createPostAccountsAccountIdSipTrunkCalloutCountries<
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
                    (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$post']
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
    const mutationDefaults = getPostAccountsAccountIdSipTrunkCalloutCountriesMutationOptions<
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

export function getDeleteAccountsAccountIdSipTrunkCalloutCountriesCountryIdMutationKey() {
  return [
    'accounts',
    '/accounts/:accountId/sip_trunk/callout_countries/:countryId',
    'DELETE',
  ] as const
}

export function getDeleteAccountsAccountIdSipTrunkCalloutCountriesCountryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries'][':countryId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdSipTrunkCalloutCountriesCountryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries'][':countryId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].sip_trunk.callout_countries[':countryId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteAccountsAccountIdSipTrunkCalloutCountriesCountryId<
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
                      (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries'][':countryId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries'][':countryId']['$delete']
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
    const mutationDefaults =
      getDeleteAccountsAccountIdSipTrunkCalloutCountriesCountryIdMutationOptions<
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

export function getAccountsAccountIdSipTrunkInternalNumbersQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/sip_trunk/internal_numbers', args] as const
}

export function getAccountsAccountIdSipTrunkInternalNumbersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdSipTrunkInternalNumbersQueryKey>
  >({
    queryKey: getAccountsAccountIdSipTrunkInternalNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].sip_trunk.internal_numbers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdSipTrunkInternalNumbers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getAccountsAccountIdSipTrunkInternalNumbersQueryKey>
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
      ...getAccountsAccountIdSipTrunkInternalNumbersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountsAccountIdSipTrunkInternalNumbersMutationKey() {
  return ['accounts', '/accounts/:accountId/sip_trunk/internal_numbers', 'POST'] as const
}

export function getPostAccountsAccountIdSipTrunkInternalNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdSipTrunkInternalNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].sip_trunk.internal_numbers.$post(args, options),
      )
    },
  })
}

export function createPostAccountsAccountIdSipTrunkInternalNumbers<
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
                    (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$post']
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
    const mutationDefaults = getPostAccountsAccountIdSipTrunkInternalNumbersMutationOptions<
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

export function getDeleteAccountsAccountIdSipTrunkInternalNumbersNumberIdMutationKey() {
  return [
    'accounts',
    '/accounts/:accountId/sip_trunk/internal_numbers/:numberId',
    'DELETE',
  ] as const
}

export function getDeleteAccountsAccountIdSipTrunkInternalNumbersNumberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers'][':numberId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdSipTrunkInternalNumbersNumberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers'][':numberId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].sip_trunk.internal_numbers[':numberId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteAccountsAccountIdSipTrunkInternalNumbersNumberId<
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
                      (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers'][':numberId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers'][':numberId']['$delete']
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
    const mutationDefaults =
      getDeleteAccountsAccountIdSipTrunkInternalNumbersNumberIdMutationOptions<
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

export function getPostAccountsAccountIdSipTrunkNumbersMutationKey() {
  return ['accounts', '/accounts/:accountId/sip_trunk/numbers', 'POST'] as const
}

export function getPostAccountsAccountIdSipTrunkNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['numbers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdSipTrunkNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['sip_trunk']['numbers']['$post']
      >,
    ) {
      return parseResponse(client.accounts[':accountId'].sip_trunk.numbers.$post(args, options))
    },
  })
}

export function createPostAccountsAccountIdSipTrunkNumbers<
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
                    (typeof client.accounts)[':accountId']['sip_trunk']['numbers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['numbers']['$post']>,
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
    const mutationDefaults = getPostAccountsAccountIdSipTrunkNumbersMutationOptions<
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

export function getDeleteAccountsAccountIdSipTrunkNumbersMutationKey() {
  return ['accounts', '/accounts/:accountId/sip_trunk/numbers', 'DELETE'] as const
}

export function getDeleteAccountsAccountIdSipTrunkNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['numbers']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdSipTrunkNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['sip_trunk']['numbers']['$delete']
      >,
    ) {
      return parseResponse(client.accounts[':accountId'].sip_trunk.numbers.$delete(args, options))
    },
  })
}

export function createDeleteAccountsAccountIdSipTrunkNumbers<
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
                      (typeof client.accounts)[':accountId']['sip_trunk']['numbers']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['sip_trunk']['numbers']['$delete']
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
    const mutationDefaults = getDeleteAccountsAccountIdSipTrunkNumbersMutationOptions<
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

export function getPatchAccountsAccountIdSipTrunkSettingsMutationKey() {
  return ['accounts', '/accounts/:accountId/sip_trunk/settings', 'PATCH'] as const
}

export function getPatchAccountsAccountIdSipTrunkSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['settings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsAccountIdSipTrunkSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['sip_trunk']['settings']['$patch']
      >,
    ) {
      return parseResponse(client.accounts[':accountId'].sip_trunk.settings.$patch(args, options))
    },
  })
}

export function createPatchAccountsAccountIdSipTrunkSettings<
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
                      (typeof client.accounts)[':accountId']['sip_trunk']['settings']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['sip_trunk']['settings']['$patch']
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
    const mutationDefaults = getPatchAccountsAccountIdSipTrunkSettingsMutationOptions<
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

export function getAccountsAccountIdSipTrunkTrunksQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/sip_trunk/trunks', args] as const
}

export function getAccountsAccountIdSipTrunkTrunksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdSipTrunkTrunksQueryKey>
  >({
    queryKey: getAccountsAccountIdSipTrunkTrunksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].sip_trunk.trunks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdSipTrunkTrunks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsAccountIdSipTrunkTrunksQueryKey>
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
      ...getAccountsAccountIdSipTrunkTrunksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountsAccountIdSipTrunkTrunksMutationKey() {
  return ['accounts', '/accounts/:accountId/sip_trunk/trunks', 'POST'] as const
}

export function getPostAccountsAccountIdSipTrunkTrunksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdSipTrunkTrunksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$post']
      >,
    ) {
      return parseResponse(client.accounts[':accountId'].sip_trunk.trunks.$post(args, options))
    },
  })
}

export function createPostAccountsAccountIdSipTrunkTrunks<
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
                  ReturnType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$post']>,
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
    const mutationDefaults = getPostAccountsAccountIdSipTrunkTrunksMutationOptions<
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

export function getDeleteAccountsAccountIdSipTrunkTrunksTrunkIdMutationKey() {
  return ['accounts', '/accounts/:accountId/sip_trunk/trunks/:trunkId', 'DELETE'] as const
}

export function getDeleteAccountsAccountIdSipTrunkTrunksTrunkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':accountId']['sip_trunk']['trunks'][':trunkId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdSipTrunkTrunksTrunkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['sip_trunk']['trunks'][':trunkId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].sip_trunk.trunks[':trunkId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountsAccountIdSipTrunkTrunksTrunkId<
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
                      (typeof client.accounts)[':accountId']['sip_trunk']['trunks'][':trunkId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['sip_trunk']['trunks'][':trunkId']['$delete']
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
    const mutationDefaults = getDeleteAccountsAccountIdSipTrunkTrunksTrunkIdMutationOptions<
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

export function getAccountsAccountIdTrustedDomainsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/trusted_domains', args] as const
}

export function getAccountsAccountIdTrustedDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdTrustedDomainsQueryKey>
  >({
    queryKey: getAccountsAccountIdTrustedDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].trusted_domains.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdTrustedDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsAccountIdTrustedDomainsQueryKey>
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
      ...getAccountsAccountIdTrustedDomainsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAccountsAccountIdUsersUserIdAccountMutationKey() {
  return ['accounts', '/accounts/:accountId/users/:userId/account', 'PUT'] as const
}

export function getPutAccountsAccountIdUsersUserIdAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['account']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAccountIdUsersUserIdAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['users'][':userId']['account']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].users[':userId'].account.$put(args, options),
      )
    },
  })
}

export function createPutAccountsAccountIdUsersUserIdAccount<
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
                      (typeof client.accounts)[':accountId']['users'][':userId']['account']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['users'][':userId']['account']['$put']
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
    const mutationDefaults = getPutAccountsAccountIdUsersUserIdAccountMutationOptions<
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

export function getApiDownloadBillingInvoicesInvoiceIdQueryKey(
  args: InferRequestType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>,
) {
  return ['api', '/api/download/billing/invoices/:invoiceId', args] as const
}

export function getApiDownloadBillingInvoicesInvoiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDownloadBillingInvoicesInvoiceIdQueryKey>
  >({
    queryKey: getApiDownloadBillingInvoicesInvoiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.download.billing.invoices[':invoiceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiDownloadBillingInvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiDownloadBillingInvoicesInvoiceIdQueryKey>
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
      ...getApiDownloadBillingInvoicesInvoiceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getArchiveFilesQueryKey(args: InferRequestType<typeof client.archive_files.$get>) {
  return ['archive_files', '/archive_files', args] as const
}

export function getArchiveFilesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive_files.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.archive_files.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive_files.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArchiveFilesQueryKey>
  >({
    queryKey: getArchiveFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.archive_files.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createArchiveFiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive_files.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.archive_files.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive_files.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getArchiveFilesQueryKey>
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
    return { ...getArchiveFilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getChatChannelsChannelIdQueryKey(
  args: InferRequestType<(typeof client.chat.channels)[':channelId']['$get']>,
) {
  return ['chat', '/chat/channels/:channelId', args] as const
}

export function getChatChannelsChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chat.channels)[':channelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatChannelsChannelIdQueryKey>
  >({
    queryKey: getChatChannelsChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.channels[':channelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChatChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.chat.channels)[':channelId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getChatChannelsChannelIdQueryKey>
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
      ...getChatChannelsChannelIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteChatChannelsChannelIdMutationKey() {
  return ['chat', '/chat/channels/:channelId', 'DELETE'] as const
}

export function getDeleteChatChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.chat.channels)[':channelId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChatChannelsChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.chat.channels)[':channelId']['$delete']>,
    ) {
      return parseResponse(client.chat.channels[':channelId'].$delete(args, options))
    },
  })
}

export function createDeleteChatChannelsChannelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.chat.channels)[':channelId']['$delete']>,
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
    const mutationDefaults = getDeleteChatChannelsChannelIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchChatChannelsChannelIdMutationKey() {
  return ['chat', '/chat/channels/:channelId', 'PATCH'] as const
}

export function getPatchChatChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.chat.channels)[':channelId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchChatChannelsChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.chat.channels)[':channelId']['$patch']>,
    ) {
      return parseResponse(client.chat.channels[':channelId'].$patch(args, options))
    },
  })
}

export function createPatchChatChannelsChannelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.chat.channels)[':channelId']['$patch']>,
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
    const mutationDefaults = getPatchChatChannelsChannelIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChatChannelsChannelIdMembersMeMutationKey() {
  return ['chat', '/chat/channels/:channelId/members/me', 'POST'] as const
}

export function getPostChatChannelsChannelIdMembersMeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['members']['me']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.chat.channels)[':channelId']['members']['me']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChatChannelsChannelIdMembersMeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.chat.channels)[':channelId']['members']['me']['$post']>,
    ) {
      return parseResponse(client.chat.channels[':channelId'].members.me.$post(args, options))
    },
  })
}

export function createPostChatChannelsChannelIdMembersMe<
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
                  ReturnType<(typeof client.chat.channels)[':channelId']['members']['me']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.chat.channels)[':channelId']['members']['me']['$post']>,
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
    const mutationDefaults = getPostChatChannelsChannelIdMembersMeMutationOptions<
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

export function getDeleteChatChannelsChannelIdMembersMeMutationKey() {
  return ['chat', '/chat/channels/:channelId/members/me', 'DELETE'] as const
}

export function getDeleteChatChannelsChannelIdMembersMeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.chat.channels)[':channelId']['members']['me']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChatChannelsChannelIdMembersMeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.chat.channels)[':channelId']['members']['me']['$delete']
      >,
    ) {
      return parseResponse(client.chat.channels[':channelId'].members.me.$delete(args, options))
    },
  })
}

export function createDeleteChatChannelsChannelIdMembersMe<
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
                      (typeof client.chat.channels)[':channelId']['members']['me']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.chat.channels)[':channelId']['members']['me']['$delete']>,
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
    const mutationDefaults = getDeleteChatChannelsChannelIdMembersMeMutationOptions<
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

export function getDeleteChatChannelsChannelIdMembersMemberIdMutationKey() {
  return ['chat', '/chat/channels/:channelId/members/:memberId', 'DELETE'] as const
}

export function getDeleteChatChannelsChannelIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.chat.channels)[':channelId']['members'][':memberId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteChatChannelsChannelIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.chat.channels)[':channelId']['members'][':memberId']['$delete']
      >,
    ) {
      return parseResponse(
        client.chat.channels[':channelId'].members[':memberId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteChatChannelsChannelIdMembersMemberId<
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
                      (typeof client.chat.channels)[':channelId']['members'][':memberId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.chat.channels)[':channelId']['members'][':memberId']['$delete']
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
    const mutationDefaults = getDeleteChatChannelsChannelIdMembersMemberIdMutationOptions<
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

export function getChatUsersMeContactsQueryKey(
  args: InferRequestType<typeof client.chat.users.me.contacts.$get>,
) {
  return ['chat', '/chat/users/me/contacts', args] as const
}

export function getChatUsersMeContactsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.users.me.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.chat.users.me.contacts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.chat.users.me.contacts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatUsersMeContactsQueryKey>
  >({
    queryKey: getChatUsersMeContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.users.me.contacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChatUsersMeContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.users.me.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.chat.users.me.contacts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.users.me.contacts.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getChatUsersMeContactsQueryKey>
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
    return { ...getChatUsersMeContactsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getChatUsersMeContactsContactIdQueryKey(
  args: InferRequestType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>,
) {
  return ['chat', '/chat/users/me/contacts/:contactId', args] as const
}

export function getChatUsersMeContactsContactIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatUsersMeContactsContactIdQueryKey>
  >({
    queryKey: getChatUsersMeContactsContactIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.users.me.contacts[':contactId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChatUsersMeContactsContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getChatUsersMeContactsContactIdQueryKey>
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
      ...getChatUsersMeContactsContactIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getChatUsersUserIdChannelsQueryKey(
  args: InferRequestType<(typeof client.chat.users)[':userId']['channels']['$get']>,
) {
  return ['chat', '/chat/users/:userId/channels', args] as const
}

export function getChatUsersUserIdChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chat.users)[':userId']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chat.users)[':userId']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.chat.users)[':userId']['channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatUsersUserIdChannelsQueryKey>
  >({
    queryKey: getChatUsersUserIdChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.users[':userId'].channels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChatUsersUserIdChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chat.users)[':userId']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.chat.users)[':userId']['channels']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chat.users)[':userId']['channels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getChatUsersUserIdChannelsQueryKey>
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
      ...getChatUsersUserIdChannelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostChatUsersUserIdChannelsMutationKey() {
  return ['chat', '/chat/users/:userId/channels', 'POST'] as const
}

export function getPostChatUsersUserIdChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.chat.users)[':userId']['channels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.chat.users)[':userId']['channels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChatUsersUserIdChannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.chat.users)[':userId']['channels']['$post']>,
    ) {
      return parseResponse(client.chat.users[':userId'].channels.$post(args, options))
    },
  })
}

export function createPostChatUsersUserIdChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chat.users)[':userId']['channels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.chat.users)[':userId']['channels']['$post']>,
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
    const mutationDefaults = getPostChatUsersUserIdChannelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getChatUsersUserIdChannelsChannelIdQueryKey(
  args: InferRequestType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$get']>,
) {
  return ['chat', '/chat/users/:userId/channels/:channelId', args] as const
}

export function getChatUsersUserIdChannelsChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatUsersUserIdChannelsChannelIdQueryKey>
  >({
    queryKey: getChatUsersUserIdChannelsChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.users[':userId'].channels[':channelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChatUsersUserIdChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.chat.users)[':userId']['channels'][':channelId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.chat.users)[':userId']['channels'][':channelId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getChatUsersUserIdChannelsChannelIdQueryKey>
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
      ...getChatUsersUserIdChannelsChannelIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteChatUsersUserIdChannelsChannelIdMutationKey() {
  return ['chat', '/chat/users/:userId/channels/:channelId', 'DELETE'] as const
}

export function getDeleteChatUsersUserIdChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChatUsersUserIdChannelsChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.chat.users)[':userId']['channels'][':channelId']['$delete']
      >,
    ) {
      return parseResponse(
        client.chat.users[':userId'].channels[':channelId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteChatUsersUserIdChannelsChannelId<
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
                      (typeof client.chat.users)[':userId']['channels'][':channelId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.chat.users)[':userId']['channels'][':channelId']['$delete']
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
    const mutationDefaults = getDeleteChatUsersUserIdChannelsChannelIdMutationOptions<
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

export function getPatchChatUsersUserIdChannelsChannelIdMutationKey() {
  return ['chat', '/chat/users/:userId/channels/:channelId', 'PATCH'] as const
}

export function getPatchChatUsersUserIdChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchChatUsersUserIdChannelsChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.chat.users)[':userId']['channels'][':channelId']['$patch']
      >,
    ) {
      return parseResponse(
        client.chat.users[':userId'].channels[':channelId'].$patch(args, options),
      )
    },
  })
}

export function createPatchChatUsersUserIdChannelsChannelId<
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
                      (typeof client.chat.users)[':userId']['channels'][':channelId']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.chat.users)[':userId']['channels'][':channelId']['$patch']
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
    const mutationDefaults = getPatchChatUsersUserIdChannelsChannelIdMutationOptions<
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

export function getChatUsersUserIdChannelsChannelIdMembersQueryKey(
  args: InferRequestType<
    (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$get']
  >,
) {
  return ['chat', '/chat/users/:userId/channels/:channelId/members', args] as const
}

export function getChatUsersUserIdChannelsChannelIdMembersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getChatUsersUserIdChannelsChannelIdMembersQueryKey>
  >({
    queryKey: getChatUsersUserIdChannelsChannelIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.users[':userId'].channels[':channelId'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChatUsersUserIdChannelsChannelIdMembers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getChatUsersUserIdChannelsChannelIdMembersQueryKey>
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
      ...getChatUsersUserIdChannelsChannelIdMembersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostChatUsersUserIdChannelsChannelIdMembersMutationKey() {
  return ['chat', '/chat/users/:userId/channels/:channelId/members', 'POST'] as const
}

export function getPostChatUsersUserIdChannelsChannelIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostChatUsersUserIdChannelsChannelIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$post']
      >,
    ) {
      return parseResponse(
        client.chat.users[':userId'].channels[':channelId'].members.$post(args, options),
      )
    },
  })
}

export function createPostChatUsersUserIdChannelsChannelIdMembers<
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
                    (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$post']
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
    const mutationDefaults = getPostChatUsersUserIdChannelsChannelIdMembersMutationOptions<
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

export function getDeleteChatUsersUserIdChannelsChannelIdMembersMemberIdMutationKey() {
  return ['chat', '/chat/users/:userId/channels/:channelId/members/:memberId', 'DELETE'] as const
}

export function getDeleteChatUsersUserIdChannelsChannelIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.chat.users)[':userId']['channels'][':channelId']['members'][':memberId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteChatUsersUserIdChannelsChannelIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.chat.users)[':userId']['channels'][':channelId']['members'][':memberId']['$delete']
      >,
    ) {
      return parseResponse(
        client.chat.users[':userId'].channels[':channelId'].members[':memberId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteChatUsersUserIdChannelsChannelIdMembersMemberId<
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
                      (typeof client.chat.users)[':userId']['channels'][':channelId']['members'][':memberId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.chat.users)[':userId']['channels'][':channelId']['members'][':memberId']['$delete']
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
    const mutationDefaults =
      getDeleteChatUsersUserIdChannelsChannelIdMembersMemberIdMutationOptions<
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

export function getChatUsersUserIdMessagesQueryKey(
  args: InferRequestType<(typeof client.chat.users)[':userId']['messages']['$get']>,
) {
  return ['chat', '/chat/users/:userId/messages', args] as const
}

export function getChatUsersUserIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chat.users)[':userId']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chat.users)[':userId']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.chat.users)[':userId']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatUsersUserIdMessagesQueryKey>
  >({
    queryKey: getChatUsersUserIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.users[':userId'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChatUsersUserIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chat.users)[':userId']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.chat.users)[':userId']['messages']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chat.users)[':userId']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getChatUsersUserIdMessagesQueryKey>
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
      ...getChatUsersUserIdMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostChatUsersUserIdMessagesMutationKey() {
  return ['chat', '/chat/users/:userId/messages', 'POST'] as const
}

export function getPostChatUsersUserIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.chat.users)[':userId']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.chat.users)[':userId']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChatUsersUserIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.chat.users)[':userId']['messages']['$post']>,
    ) {
      return parseResponse(client.chat.users[':userId'].messages.$post(args, options))
    },
  })
}

export function createPostChatUsersUserIdMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chat.users)[':userId']['messages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.chat.users)[':userId']['messages']['$post']>,
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
    const mutationDefaults = getPostChatUsersUserIdMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutChatUsersUserIdMessagesMessageIdMutationKey() {
  return ['chat', '/chat/users/:userId/messages/:messageId', 'PUT'] as const
}

export function getPutChatUsersUserIdMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.chat.users)[':userId']['messages'][':messageId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChatUsersUserIdMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.chat.users)[':userId']['messages'][':messageId']['$put']
      >,
    ) {
      return parseResponse(client.chat.users[':userId'].messages[':messageId'].$put(args, options))
    },
  })
}

export function createPutChatUsersUserIdMessagesMessageId<
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
                      (typeof client.chat.users)[':userId']['messages'][':messageId']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.chat.users)[':userId']['messages'][':messageId']['$put']>,
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
    const mutationDefaults = getPutChatUsersUserIdMessagesMessageIdMutationOptions<
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

export function getDeleteChatUsersUserIdMessagesMessageIdMutationKey() {
  return ['chat', '/chat/users/:userId/messages/:messageId', 'DELETE'] as const
}

export function getDeleteChatUsersUserIdMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.chat.users)[':userId']['messages'][':messageId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChatUsersUserIdMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.chat.users)[':userId']['messages'][':messageId']['$delete']
      >,
    ) {
      return parseResponse(
        client.chat.users[':userId'].messages[':messageId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteChatUsersUserIdMessagesMessageId<
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
                      (typeof client.chat.users)[':userId']['messages'][':messageId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.chat.users)[':userId']['messages'][':messageId']['$delete']
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
    const mutationDefaults = getDeleteChatUsersUserIdMessagesMessageIdMutationOptions<
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

export function getContactsQueryKey(args: InferRequestType<typeof client.contacts.$get>) {
  return ['contacts', '/contacts', args] as const
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

export function createContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.contacts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getContactsQueryKey>
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
    return { ...getContactsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGroupsQueryKey() {
  return ['groups', '/groups'] as const
}

export function getGroupsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >({
    queryKey: getGroupsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
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
    return { ...getGroupsQueryOptions<TData, TError>(clientOptions), ...query }
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

export function getGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
) {
  return ['groups', '/groups/:groupId', args] as const
}

export function getGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdQueryKey>
  >({
    queryKey: getGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':groupId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups)[':groupId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGroupsGroupIdQueryKey>
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
    return { ...getGroupsGroupIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteGroupsGroupIdMutationKey() {
  return ['groups', '/groups/:groupId', 'DELETE'] as const
}

export function getDeleteGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.groups)[':groupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':groupId']['$delete']>) {
      return parseResponse(client.groups[':groupId'].$delete(args, options))
    },
  })
}

export function createDeleteGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.groups)[':groupId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.groups)[':groupId']['$delete']>,
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
    const mutationDefaults = getDeleteGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchGroupsGroupIdMutationKey() {
  return ['groups', '/groups/:groupId', 'PATCH'] as const
}

export function getPatchGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.groups)[':groupId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGroupsGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':groupId']['$patch']>) {
      return parseResponse(client.groups[':groupId'].$patch(args, options))
    },
  })
}

export function createPatchGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.groups)[':groupId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.groups)[':groupId']['$patch']>,
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
    const mutationDefaults = getPatchGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupsGroupIdLockSettingsQueryKey(
  args: InferRequestType<(typeof client.groups)[':groupId']['lock_settings']['$get']>,
) {
  return ['groups', '/groups/:groupId/lock_settings', args] as const
}

export function getGroupsGroupIdLockSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':groupId']['lock_settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':groupId']['lock_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':groupId']['lock_settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdLockSettingsQueryKey>
  >({
    queryKey: getGroupsGroupIdLockSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':groupId'].lock_settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupsGroupIdLockSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':groupId']['lock_settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups)[':groupId']['lock_settings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':groupId']['lock_settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGroupsGroupIdLockSettingsQueryKey>
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
      ...getGroupsGroupIdLockSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchGroupsGroupIdLockSettingsMutationKey() {
  return ['groups', '/groups/:groupId/lock_settings', 'PATCH'] as const
}

export function getPatchGroupsGroupIdLockSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['lock_settings']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.groups)[':groupId']['lock_settings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGroupsGroupIdLockSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':groupId']['lock_settings']['$patch']>,
    ) {
      return parseResponse(client.groups[':groupId'].lock_settings.$patch(args, options))
    },
  })
}

export function createPatchGroupsGroupIdLockSettings<
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
                  Awaited<ReturnType<(typeof client.groups)[':groupId']['lock_settings']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.groups)[':groupId']['lock_settings']['$patch']>,
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
    const mutationDefaults = getPatchGroupsGroupIdLockSettingsMutationOptions<
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

export function getGroupsGroupIdMembersQueryKey(
  args: InferRequestType<(typeof client.groups)[':groupId']['members']['$get']>,
) {
  return ['groups', '/groups/:groupId/members', args] as const
}

export function getGroupsGroupIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':groupId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':groupId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':groupId']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdMembersQueryKey>
  >({
    queryKey: getGroupsGroupIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':groupId'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupsGroupIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':groupId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups)[':groupId']['members']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':groupId']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGroupsGroupIdMembersQueryKey>
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
      ...getGroupsGroupIdMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostGroupsGroupIdMembersMutationKey() {
  return ['groups', '/groups/:groupId/members', 'POST'] as const
}

export function getPostGroupsGroupIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':groupId']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':groupId']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsGroupIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':groupId']['members']['$post']>,
    ) {
      return parseResponse(client.groups[':groupId'].members.$post(args, options))
    },
  })
}

export function createPostGroupsGroupIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':groupId']['members']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':groupId']['members']['$post']>,
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
    const mutationDefaults = getPostGroupsGroupIdMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteGroupsGroupIdMembersMemberIdMutationKey() {
  return ['groups', '/groups/:groupId/members/:memberId', 'DELETE'] as const
}

export function getDeleteGroupsGroupIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.groups)[':groupId']['members'][':memberId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsGroupIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':groupId']['members'][':memberId']['$delete']>,
    ) {
      return parseResponse(client.groups[':groupId'].members[':memberId'].$delete(args, options))
    },
  })
}

export function createDeleteGroupsGroupIdMembersMemberId<
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
                      (typeof client.groups)[':groupId']['members'][':memberId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.groups)[':groupId']['members'][':memberId']['$delete']>,
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
    const mutationDefaults = getDeleteGroupsGroupIdMembersMemberIdMutationOptions<
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

export function getPatchGroupsGroupIdMembersMemberIdMutationKey() {
  return ['groups', '/groups/:groupId/members/:memberId', 'PATCH'] as const
}

export function getPatchGroupsGroupIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.groups)[':groupId']['members'][':memberId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGroupsGroupIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':groupId']['members'][':memberId']['$patch']>,
    ) {
      return parseResponse(client.groups[':groupId'].members[':memberId'].$patch(args, options))
    },
  })
}

export function createPatchGroupsGroupIdMembersMemberId<
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
                    ReturnType<(typeof client.groups)[':groupId']['members'][':memberId']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.groups)[':groupId']['members'][':memberId']['$patch']>,
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
    const mutationDefaults = getPatchGroupsGroupIdMembersMemberIdMutationOptions<
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

export function getGroupsGroupIdSettingsQueryKey(
  args: InferRequestType<(typeof client.groups)[':groupId']['settings']['$get']>,
) {
  return ['groups', '/groups/:groupId/settings', args] as const
}

export function getGroupsGroupIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':groupId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':groupId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':groupId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdSettingsQueryKey>
  >({
    queryKey: getGroupsGroupIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':groupId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupsGroupIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':groupId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups)[':groupId']['settings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':groupId']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGroupsGroupIdSettingsQueryKey>
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
      ...getGroupsGroupIdSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchGroupsGroupIdSettingsMutationKey() {
  return ['groups', '/groups/:groupId/settings', 'PATCH'] as const
}

export function getPatchGroupsGroupIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['settings']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.groups)[':groupId']['settings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGroupsGroupIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':groupId']['settings']['$patch']>,
    ) {
      return parseResponse(client.groups[':groupId'].settings.$patch(args, options))
    },
  })
}

export function createPatchGroupsGroupIdSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.groups)[':groupId']['settings']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.groups)[':groupId']['settings']['$patch']>,
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
    const mutationDefaults = getPatchGroupsGroupIdSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGroupsGroupIdSettingsVirtualBackgroundsMutationKey() {
  return ['groups', '/groups/:groupId/settings/virtual_backgrounds', 'POST'] as const
}

export function getPostGroupsGroupIdSettingsVirtualBackgroundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.groups)[':groupId']['settings']['virtual_backgrounds']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsGroupIdSettingsVirtualBackgroundsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':groupId']['settings']['virtual_backgrounds']['$post']
      >,
    ) {
      return parseResponse(
        client.groups[':groupId'].settings.virtual_backgrounds.$post(args, options),
      )
    },
  })
}

export function createPostGroupsGroupIdSettingsVirtualBackgrounds<
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
                    (typeof client.groups)[':groupId']['settings']['virtual_backgrounds']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.groups)[':groupId']['settings']['virtual_backgrounds']['$post']
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
    const mutationDefaults = getPostGroupsGroupIdSettingsVirtualBackgroundsMutationOptions<
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

export function getDeleteGroupsGroupIdSettingsVirtualBackgroundsMutationKey() {
  return ['groups', '/groups/:groupId/settings/virtual_backgrounds', 'DELETE'] as const
}

export function getDeleteGroupsGroupIdSettingsVirtualBackgroundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.groups)[':groupId']['settings']['virtual_backgrounds']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsGroupIdSettingsVirtualBackgroundsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':groupId']['settings']['virtual_backgrounds']['$delete']
      >,
    ) {
      return parseResponse(
        client.groups[':groupId'].settings.virtual_backgrounds.$delete(args, options),
      )
    },
  })
}

export function createDeleteGroupsGroupIdSettingsVirtualBackgrounds<
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
                      (typeof client.groups)[':groupId']['settings']['virtual_backgrounds']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.groups)[':groupId']['settings']['virtual_backgrounds']['$delete']
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
    const mutationDefaults = getDeleteGroupsGroupIdSettingsVirtualBackgroundsMutationOptions<
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

export function getH323DevicesQueryKey(args: InferRequestType<typeof client.h323.devices.$get>) {
  return ['h323', '/h323/devices', args] as const
}

export function getH323DevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.h323.devices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.h323.devices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.h323.devices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getH323DevicesQueryKey>
  >({
    queryKey: getH323DevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.h323.devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createH323Devices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.h323.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.h323.devices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.h323.devices.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getH323DevicesQueryKey>
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
    return { ...getH323DevicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostH323DevicesMutationKey() {
  return ['h323', '/h323/devices', 'POST'] as const
}

export function getPostH323DevicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.h323.devices.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.h323.devices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostH323DevicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.h323.devices.$post>) {
      return parseResponse(client.h323.devices.$post(args, options))
    },
  })
}

export function createPostH323Devices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.h323.devices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.h323.devices.$post>,
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
    const mutationDefaults = getPostH323DevicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteH323DevicesDeviceIdMutationKey() {
  return ['h323', '/h323/devices/:deviceId', 'DELETE'] as const
}

export function getDeleteH323DevicesDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.h323.devices)[':deviceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.h323.devices)[':deviceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteH323DevicesDeviceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.h323.devices)[':deviceId']['$delete']>) {
      return parseResponse(client.h323.devices[':deviceId'].$delete(args, options))
    },
  })
}

export function createDeleteH323DevicesDeviceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.h323.devices)[':deviceId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.h323.devices)[':deviceId']['$delete']>,
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
    const mutationDefaults = getDeleteH323DevicesDeviceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchH323DevicesDeviceIdMutationKey() {
  return ['h323', '/h323/devices/:deviceId', 'PATCH'] as const
}

export function getPatchH323DevicesDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.h323.devices)[':deviceId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.h323.devices)[':deviceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchH323DevicesDeviceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.h323.devices)[':deviceId']['$patch']>) {
      return parseResponse(client.h323.devices[':deviceId'].$patch(args, options))
    },
  })
}

export function createPatchH323DevicesDeviceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.h323.devices)[':deviceId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.h323.devices)[':deviceId']['$patch']>,
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
    const mutationDefaults = getPatchH323DevicesDeviceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostImChatMessagesMutationKey() {
  return ['im', '/im/chat/messages', 'POST'] as const
}

export function getPostImChatMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.chat.messages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.im.chat.messages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImChatMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.im.chat.messages.$post>) {
      return parseResponse(client.im.chat.messages.$post(args, options))
    },
  })
}

export function createPostImChatMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.im.chat.messages.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.im.chat.messages.$post>,
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
    const mutationDefaults = getPostImChatMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutImChatMessagesMessageIdMutationKey() {
  return ['im', '/im/chat/messages/:message_id', 'PUT'] as const
}

export function getPutImChatMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.im.chat.messages)[':message_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.im.chat.messages)[':message_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutImChatMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.im.chat.messages)[':message_id']['$put']>,
    ) {
      return parseResponse(client.im.chat.messages[':message_id'].$put(args, options))
    },
  })
}

export function createPutImChatMessagesMessageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.im.chat.messages)[':message_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.im.chat.messages)[':message_id']['$put']>,
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
    const mutationDefaults = getPutImChatMessagesMessageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteImChatMessagesMessageIdMutationKey() {
  return ['im', '/im/chat/messages/:message_id', 'DELETE'] as const
}

export function getDeleteImChatMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.im.chat.messages)[':message_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.im.chat.messages)[':message_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteImChatMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.im.chat.messages)[':message_id']['$delete']>,
    ) {
      return parseResponse(client.im.chat.messages[':message_id'].$delete(args, options))
    },
  })
}

export function createDeleteImChatMessagesMessageId<
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
                Awaited<ReturnType<(typeof client.im.chat.messages)[':message_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.im.chat.messages)[':message_id']['$delete']>,
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
    const mutationDefaults = getDeleteImChatMessagesMessageIdMutationOptions<
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

export function getImChatSessionsQueryKey(
  args: InferRequestType<typeof client.im.chat.sessions.$get>,
) {
  return ['im', '/im/chat/sessions', args] as const
}

export function getImChatSessionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.chat.sessions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.im.chat.sessions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.chat.sessions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImChatSessionsQueryKey>
  >({
    queryKey: getImChatSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.im.chat.sessions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createImChatSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.chat.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.im.chat.sessions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.im.chat.sessions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getImChatSessionsQueryKey>
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
    return { ...getImChatSessionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getImChatSessionsSessionIdQueryKey(
  args: InferRequestType<(typeof client.im.chat.sessions)[':sessionId']['$get']>,
) {
  return ['im', '/im/chat/sessions/:sessionId', args] as const
}

export function getImChatSessionsSessionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.im.chat.sessions)[':sessionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.im.chat.sessions)[':sessionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.im.chat.sessions)[':sessionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImChatSessionsSessionIdQueryKey>
  >({
    queryKey: getImChatSessionsSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.im.chat.sessions[':sessionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImChatSessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.im.chat.sessions)[':sessionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.im.chat.sessions)[':sessionId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.im.chat.sessions)[':sessionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getImChatSessionsSessionIdQueryKey>
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
      ...getImChatSessionsSessionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getImGroupsQueryKey() {
  return ['im', '/im/groups'] as const
}

export function getImGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.groups.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImGroupsQueryKey>
  >({
    queryKey: getImGroupsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.im.groups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createImGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.groups.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getImGroupsQueryKey>
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
    return { ...getImGroupsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostImGroupsMutationKey() {
  return ['im', '/im/groups', 'POST'] as const
}

export function getPostImGroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.groups.$post>>>>>,
    TError,
    InferRequestType<typeof client.im.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.im.groups.$post>) {
      return parseResponse(client.im.groups.$post(args, options))
    },
  })
}

export function createPostImGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.im.groups.$post>,
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
    const mutationDefaults = getPostImGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getImGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.im.groups)[':groupId']['$get']>,
) {
  return ['im', '/im/groups/:groupId', args] as const
}

export function getImGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.im.groups)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.im.groups)[':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.im.groups)[':groupId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImGroupsGroupIdQueryKey>
  >({
    queryKey: getImGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.im.groups[':groupId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createImGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.im.groups)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.im.groups)[':groupId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.im.groups)[':groupId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getImGroupsGroupIdQueryKey>
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
    return { ...getImGroupsGroupIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteImGroupsGroupIdMutationKey() {
  return ['im', '/im/groups/:groupId', 'DELETE'] as const
}

export function getDeleteImGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.im.groups)[':groupId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.im.groups)[':groupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteImGroupsGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.im.groups)[':groupId']['$delete']>) {
      return parseResponse(client.im.groups[':groupId'].$delete(args, options))
    },
  })
}

export function createDeleteImGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.im.groups)[':groupId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.im.groups)[':groupId']['$delete']>,
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
    const mutationDefaults = getDeleteImGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchImGroupsGroupIdMutationKey() {
  return ['im', '/im/groups/:groupId', 'PATCH'] as const
}

export function getPatchImGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.im.groups)[':groupId']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.im.groups)[':groupId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchImGroupsGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.im.groups)[':groupId']['$patch']>) {
      return parseResponse(client.im.groups[':groupId'].$patch(args, options))
    },
  })
}

export function createPatchImGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.im.groups)[':groupId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.im.groups)[':groupId']['$patch']>,
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
    const mutationDefaults = getPatchImGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getImGroupsGroupIdMembersQueryKey(
  args: InferRequestType<(typeof client.im.groups)[':groupId']['members']['$get']>,
) {
  return ['im', '/im/groups/:groupId/members', args] as const
}

export function getImGroupsGroupIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.im.groups)[':groupId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.im.groups)[':groupId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.im.groups)[':groupId']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImGroupsGroupIdMembersQueryKey>
  >({
    queryKey: getImGroupsGroupIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.im.groups[':groupId'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImGroupsGroupIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.im.groups)[':groupId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.im.groups)[':groupId']['members']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.im.groups)[':groupId']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getImGroupsGroupIdMembersQueryKey>
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
      ...getImGroupsGroupIdMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostImGroupsGroupIdMembersMutationKey() {
  return ['im', '/im/groups/:groupId/members', 'POST'] as const
}

export function getPostImGroupsGroupIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.im.groups)[':groupId']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.im.groups)[':groupId']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostImGroupsGroupIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.im.groups)[':groupId']['members']['$post']>,
    ) {
      return parseResponse(client.im.groups[':groupId'].members.$post(args, options))
    },
  })
}

export function createPostImGroupsGroupIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.im.groups)[':groupId']['members']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.im.groups)[':groupId']['members']['$post']>,
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
    const mutationDefaults = getPostImGroupsGroupIdMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteImGroupsGroupIdMembersMemberIdMutationKey() {
  return ['im', '/im/groups/:groupId/members/:memberId', 'DELETE'] as const
}

export function getDeleteImGroupsGroupIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.im.groups)[':groupId']['members'][':memberId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteImGroupsGroupIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.im.groups)[':groupId']['members'][':memberId']['$delete']
      >,
    ) {
      return parseResponse(client.im.groups[':groupId'].members[':memberId'].$delete(args, options))
    },
  })
}

export function createDeleteImGroupsGroupIdMembersMemberId<
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
                      (typeof client.im.groups)[':groupId']['members'][':memberId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.im.groups)[':groupId']['members'][':memberId']['$delete']
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
    const mutationDefaults = getDeleteImGroupsGroupIdMembersMemberIdMutationOptions<
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

export function getPostImUsersMeChatMessagesMutationKey() {
  return ['im', '/im/users/me/chat/messages', 'POST'] as const
}

export function getPostImUsersMeChatMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.im.users.me.chat.messages.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.im.users.me.chat.messages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImUsersMeChatMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.im.users.me.chat.messages.$post>) {
      return parseResponse(client.im.users.me.chat.messages.$post(args, options))
    },
  })
}

export function createPostImUsersMeChatMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.im.users.me.chat.messages.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.im.users.me.chat.messages.$post>,
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
    const mutationDefaults = getPostImUsersMeChatMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getImUsersUserIdChatMessagesQueryKey(
  args: InferRequestType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>,
) {
  return ['im', '/im/users/:userId/chat/messages', args] as const
}

export function getImUsersUserIdChatMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImUsersUserIdChatMessagesQueryKey>
  >({
    queryKey: getImUsersUserIdChatMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.im.users[':userId'].chat.messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImUsersUserIdChatMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getImUsersUserIdChatMessagesQueryKey>
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
      ...getImUsersUserIdChatMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchLiveMeetingsMeetingIdEventsMutationKey() {
  return ['live_meetings', '/live_meetings/:meetingId/events', 'PATCH'] as const
}

export function getPatchLiveMeetingsMeetingIdEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.live_meetings)[':meetingId']['events']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.live_meetings)[':meetingId']['events']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchLiveMeetingsMeetingIdEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.live_meetings)[':meetingId']['events']['$patch']>,
    ) {
      return parseResponse(client.live_meetings[':meetingId'].events.$patch(args, options))
    },
  })
}

export function createPatchLiveMeetingsMeetingIdEvents<
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
                Awaited<ReturnType<(typeof client.live_meetings)[':meetingId']['events']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.live_meetings)[':meetingId']['events']['$patch']>,
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
    const mutationDefaults = getPatchLiveMeetingsMeetingIdEventsMutationOptions<
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

export function getMeetingsMeetingIdQueryKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['$get']>,
) {
  return ['meetings', '/meetings/:meetingId', args] as const
}

export function getMeetingsMeetingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdQueryKey>
  >({
    queryKey: getMeetingsMeetingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meetings[':meetingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeetingsMeetingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.meetings)[':meetingId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeetingsMeetingIdQueryKey>
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
    return { ...getMeetingsMeetingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteMeetingsMeetingIdMutationKey() {
  return ['meetings', '/meetings/:meetingId', 'DELETE'] as const
}

export function getDeleteMeetingsMeetingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.meetings)[':meetingId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeetingsMeetingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.meetings)[':meetingId']['$delete']>) {
      return parseResponse(client.meetings[':meetingId'].$delete(args, options))
    },
  })
}

export function createDeleteMeetingsMeetingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['$delete']>,
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
    const mutationDefaults = getDeleteMeetingsMeetingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchMeetingsMeetingIdMutationKey() {
  return ['meetings', '/meetings/:meetingId', 'PATCH'] as const
}

export function getPatchMeetingsMeetingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.meetings)[':meetingId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMeetingsMeetingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.meetings)[':meetingId']['$patch']>) {
      return parseResponse(client.meetings[':meetingId'].$patch(args, options))
    },
  })
}

export function createPatchMeetingsMeetingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['$patch']>,
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
    const mutationDefaults = getPatchMeetingsMeetingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMeetingsMeetingIdBatchPollsMutationKey() {
  return ['meetings', '/meetings/:meetingId/batch_polls', 'POST'] as const
}

export function getPostMeetingsMeetingIdBatchPollsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['batch_polls']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.meetings)[':meetingId']['batch_polls']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMeetingsMeetingIdBatchPollsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.meetings)[':meetingId']['batch_polls']['$post']>,
    ) {
      return parseResponse(client.meetings[':meetingId'].batch_polls.$post(args, options))
    },
  })
}

export function createPostMeetingsMeetingIdBatchPolls<
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
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['batch_polls']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['batch_polls']['$post']>,
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
    const mutationDefaults = getPostMeetingsMeetingIdBatchPollsMutationOptions<
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

export function getMeetingsMeetingIdInvitationQueryKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['invitation']['$get']>,
) {
  return ['meetings', '/meetings/:meetingId/invitation', args] as const
}

export function getMeetingsMeetingIdInvitationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['invitation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['invitation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['invitation']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdInvitationQueryKey>
  >({
    queryKey: getMeetingsMeetingIdInvitationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meetings[':meetingId'].invitation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeetingsMeetingIdInvitation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['invitation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.meetings)[':meetingId']['invitation']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['invitation']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeetingsMeetingIdInvitationQueryKey>
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
      ...getMeetingsMeetingIdInvitationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMeetingsMeetingIdLivestreamQueryKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['$get']>,
) {
  return ['meetings', '/meetings/:meetingId/livestream', args] as const
}

export function getMeetingsMeetingIdLivestreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['livestream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['livestream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdLivestreamQueryKey>
  >({
    queryKey: getMeetingsMeetingIdLivestreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meetings[':meetingId'].livestream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeetingsMeetingIdLivestream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['livestream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['livestream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeetingsMeetingIdLivestreamQueryKey>
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
      ...getMeetingsMeetingIdLivestreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchMeetingsMeetingIdLivestreamMutationKey() {
  return ['meetings', '/meetings/:meetingId/livestream', 'PATCH'] as const
}

export function getPatchMeetingsMeetingIdLivestreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['livestream']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMeetingsMeetingIdLivestreamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['$patch']>,
    ) {
      return parseResponse(client.meetings[':meetingId'].livestream.$patch(args, options))
    },
  })
}

export function createPatchMeetingsMeetingIdLivestream<
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
                    ReturnType<(typeof client.meetings)[':meetingId']['livestream']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['$patch']>,
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
    const mutationDefaults = getPatchMeetingsMeetingIdLivestreamMutationOptions<
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

export function getPatchMeetingsMeetingIdLivestreamStatusMutationKey() {
  return ['meetings', '/meetings/:meetingId/livestream/status', 'PATCH'] as const
}

export function getPatchMeetingsMeetingIdLivestreamStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['status']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMeetingsMeetingIdLivestreamStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meetings)[':meetingId']['livestream']['status']['$patch']
      >,
    ) {
      return parseResponse(client.meetings[':meetingId'].livestream.status.$patch(args, options))
    },
  })
}

export function createPatchMeetingsMeetingIdLivestreamStatus<
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
                      (typeof client.meetings)[':meetingId']['livestream']['status']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.meetings)[':meetingId']['livestream']['status']['$patch']
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
    const mutationDefaults = getPatchMeetingsMeetingIdLivestreamStatusMutationOptions<
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

export function getMeetingsMeetingIdPollsQueryKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['polls']['$get']>,
) {
  return ['meetings', '/meetings/:meetingId/polls', args] as const
}

export function getMeetingsMeetingIdPollsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['polls']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdPollsQueryKey>
  >({
    queryKey: getMeetingsMeetingIdPollsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meetings[':meetingId'].polls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeetingsMeetingIdPolls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.meetings)[':meetingId']['polls']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeetingsMeetingIdPollsQueryKey>
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
      ...getMeetingsMeetingIdPollsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostMeetingsMeetingIdPollsMutationKey() {
  return ['meetings', '/meetings/:meetingId/polls', 'POST'] as const
}

export function getPostMeetingsMeetingIdPollsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.meetings)[':meetingId']['polls']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMeetingsMeetingIdPollsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.meetings)[':meetingId']['polls']['$post']>,
    ) {
      return parseResponse(client.meetings[':meetingId'].polls.$post(args, options))
    },
  })
}

export function createPostMeetingsMeetingIdPolls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['polls']['$post']>,
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
    const mutationDefaults = getPostMeetingsMeetingIdPollsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMeetingsMeetingIdPollsPollIdQueryKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>,
) {
  return ['meetings', '/meetings/:meetingId/polls/:pollId', args] as const
}

export function getMeetingsMeetingIdPollsPollIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdPollsPollIdQueryKey>
  >({
    queryKey: getMeetingsMeetingIdPollsPollIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meetings[':meetingId'].polls[':pollId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeetingsMeetingIdPollsPollId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeetingsMeetingIdPollsPollIdQueryKey>
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
      ...getMeetingsMeetingIdPollsPollIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutMeetingsMeetingIdPollsPollIdMutationKey() {
  return ['meetings', '/meetings/:meetingId/polls/:pollId', 'PUT'] as const
}

export function getPutMeetingsMeetingIdPollsPollIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMeetingsMeetingIdPollsPollIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$put']>,
    ) {
      return parseResponse(client.meetings[':meetingId'].polls[':pollId'].$put(args, options))
    },
  })
}

export function createPutMeetingsMeetingIdPollsPollId<
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
                    ReturnType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$put']>,
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
    const mutationDefaults = getPutMeetingsMeetingIdPollsPollIdMutationOptions<
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

export function getDeleteMeetingsMeetingIdPollsPollIdMutationKey() {
  return ['meetings', '/meetings/:meetingId/polls/:pollId', 'DELETE'] as const
}

export function getDeleteMeetingsMeetingIdPollsPollIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeetingsMeetingIdPollsPollIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$delete']>,
    ) {
      return parseResponse(client.meetings[':meetingId'].polls[':pollId'].$delete(args, options))
    },
  })
}

export function createDeleteMeetingsMeetingIdPollsPollId<
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
                      (typeof client.meetings)[':meetingId']['polls'][':pollId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$delete']>,
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
    const mutationDefaults = getDeleteMeetingsMeetingIdPollsPollIdMutationOptions<
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

export function getMeetingsMeetingIdRecordingsQueryKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['$get']>,
) {
  return ['meetings', '/meetings/:meetingId/recordings', args] as const
}

export function getMeetingsMeetingIdRecordingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['recordings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdRecordingsQueryKey>
  >({
    queryKey: getMeetingsMeetingIdRecordingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meetings[':meetingId'].recordings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeetingsMeetingIdRecordings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['recordings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeetingsMeetingIdRecordingsQueryKey>
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
      ...getMeetingsMeetingIdRecordingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteMeetingsMeetingIdRecordingsMutationKey() {
  return ['meetings', '/meetings/:meetingId/recordings', 'DELETE'] as const
}

export function getDeleteMeetingsMeetingIdRecordingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['recordings']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeetingsMeetingIdRecordingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['$delete']>,
    ) {
      return parseResponse(client.meetings[':meetingId'].recordings.$delete(args, options))
    },
  })
}

export function createDeleteMeetingsMeetingIdRecordings<
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
                    ReturnType<(typeof client.meetings)[':meetingId']['recordings']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['$delete']>,
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
    const mutationDefaults = getDeleteMeetingsMeetingIdRecordingsMutationOptions<
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

export function getMeetingsMeetingIdRecordingsRegistrantsQueryKey(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']
  >,
) {
  return ['meetings', '/meetings/:meetingId/recordings/registrants', args] as const
}

export function getMeetingsMeetingIdRecordingsRegistrantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdRecordingsRegistrantsQueryKey>
  >({
    queryKey: getMeetingsMeetingIdRecordingsRegistrantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meetings[':meetingId'].recordings.registrants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeetingsMeetingIdRecordingsRegistrants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getMeetingsMeetingIdRecordingsRegistrantsQueryKey>
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
      ...getMeetingsMeetingIdRecordingsRegistrantsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostMeetingsMeetingIdRecordingsRegistrantsMutationKey() {
  return ['meetings', '/meetings/:meetingId/recordings/registrants', 'POST'] as const
}

export function getPostMeetingsMeetingIdRecordingsRegistrantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['registrants']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMeetingsMeetingIdRecordingsRegistrantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meetings)[':meetingId']['recordings']['registrants']['$post']
      >,
    ) {
      return parseResponse(
        client.meetings[':meetingId'].recordings.registrants.$post(args, options),
      )
    },
  })
}

export function createPostMeetingsMeetingIdRecordingsRegistrants<
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
                    (typeof client.meetings)[':meetingId']['recordings']['registrants']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.meetings)[':meetingId']['recordings']['registrants']['$post']
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
    const mutationDefaults = getPostMeetingsMeetingIdRecordingsRegistrantsMutationOptions<
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

export function getMeetingsMeetingIdRecordingsRegistrantsQuestionsQueryKey(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$get']
  >,
) {
  return ['meetings', '/meetings/:meetingId/recordings/registrants/questions', args] as const
}

export function getMeetingsMeetingIdRecordingsRegistrantsQuestionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdRecordingsRegistrantsQuestionsQueryKey>
  >({
    queryKey: getMeetingsMeetingIdRecordingsRegistrantsQuestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meetings[':meetingId'].recordings.registrants.questions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeetingsMeetingIdRecordingsRegistrantsQuestions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getMeetingsMeetingIdRecordingsRegistrantsQuestionsQueryKey>
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
      ...getMeetingsMeetingIdRecordingsRegistrantsQuestionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPatchMeetingsMeetingIdRecordingsRegistrantsQuestionsMutationKey() {
  return ['meetings', '/meetings/:meetingId/recordings/registrants/questions', 'PATCH'] as const
}

export function getPatchMeetingsMeetingIdRecordingsRegistrantsQuestionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMeetingsMeetingIdRecordingsRegistrantsQuestionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$patch']
      >,
    ) {
      return parseResponse(
        client.meetings[':meetingId'].recordings.registrants.questions.$patch(args, options),
      )
    },
  })
}

export function createPatchMeetingsMeetingIdRecordingsRegistrantsQuestions<
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
                      (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$patch']
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
    const mutationDefaults = getPatchMeetingsMeetingIdRecordingsRegistrantsQuestionsMutationOptions<
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

export function getPutMeetingsMeetingIdRecordingsRegistrantsStatusMutationKey() {
  return ['meetings', '/meetings/:meetingId/recordings/registrants/status', 'PUT'] as const
}

export function getPutMeetingsMeetingIdRecordingsRegistrantsStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.meetings)[':meetingId']['recordings']['registrants']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMeetingsMeetingIdRecordingsRegistrantsStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meetings)[':meetingId']['recordings']['registrants']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.meetings[':meetingId'].recordings.registrants.status.$put(args, options),
      )
    },
  })
}

export function createPutMeetingsMeetingIdRecordingsRegistrantsStatus<
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
                      (typeof client.meetings)[':meetingId']['recordings']['registrants']['status']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.meetings)[':meetingId']['recordings']['registrants']['status']['$put']
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
    const mutationDefaults = getPutMeetingsMeetingIdRecordingsRegistrantsStatusMutationOptions<
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

export function getMeetingsMeetingIdRecordingsSettingsQueryKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$get']>,
) {
  return ['meetings', '/meetings/:meetingId/recordings/settings', args] as const
}

export function getMeetingsMeetingIdRecordingsSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdRecordingsSettingsQueryKey>
  >({
    queryKey: getMeetingsMeetingIdRecordingsSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meetings[':meetingId'].recordings.settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeetingsMeetingIdRecordingsSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.meetings)[':meetingId']['recordings']['settings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeetingsMeetingIdRecordingsSettingsQueryKey>
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
      ...getMeetingsMeetingIdRecordingsSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchMeetingsMeetingIdRecordingsSettingsMutationKey() {
  return ['meetings', '/meetings/:meetingId/recordings/settings', 'PATCH'] as const
}

export function getPatchMeetingsMeetingIdRecordingsSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMeetingsMeetingIdRecordingsSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meetings)[':meetingId']['recordings']['settings']['$patch']
      >,
    ) {
      return parseResponse(client.meetings[':meetingId'].recordings.settings.$patch(args, options))
    },
  })
}

export function createPatchMeetingsMeetingIdRecordingsSettings<
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
                      (typeof client.meetings)[':meetingId']['recordings']['settings']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.meetings)[':meetingId']['recordings']['settings']['$patch']
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
    const mutationDefaults = getPatchMeetingsMeetingIdRecordingsSettingsMutationOptions<
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

export function getPutMeetingsMeetingIdRecordingsStatusMutationKey() {
  return ['meetings', '/meetings/:meetingId/recordings/status', 'PUT'] as const
}

export function getPutMeetingsMeetingIdRecordingsStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMeetingsMeetingIdRecordingsStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meetings)[':meetingId']['recordings']['status']['$put']
      >,
    ) {
      return parseResponse(client.meetings[':meetingId'].recordings.status.$put(args, options))
    },
  })
}

export function createPutMeetingsMeetingIdRecordingsStatus<
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
                      (typeof client.meetings)[':meetingId']['recordings']['status']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['status']['$put']>,
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
    const mutationDefaults = getPutMeetingsMeetingIdRecordingsStatusMutationOptions<
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

export function getDeleteMeetingsMeetingIdRecordingsRecordingIdMutationKey() {
  return ['meetings', '/meetings/:meetingId/recordings/:recordingId', 'DELETE'] as const
}

export function getDeleteMeetingsMeetingIdRecordingsRecordingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.meetings)[':meetingId']['recordings'][':recordingId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeetingsMeetingIdRecordingsRecordingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meetings)[':meetingId']['recordings'][':recordingId']['$delete']
      >,
    ) {
      return parseResponse(
        client.meetings[':meetingId'].recordings[':recordingId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteMeetingsMeetingIdRecordingsRecordingId<
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
                      (typeof client.meetings)[':meetingId']['recordings'][':recordingId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.meetings)[':meetingId']['recordings'][':recordingId']['$delete']
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
    const mutationDefaults = getDeleteMeetingsMeetingIdRecordingsRecordingIdMutationOptions<
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

export function getPutMeetingsMeetingIdRecordingsRecordingIdStatusMutationKey() {
  return ['meetings', '/meetings/:meetingId/recordings/:recordingId/status', 'PUT'] as const
}

export function getPutMeetingsMeetingIdRecordingsRecordingIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.meetings)[':meetingId']['recordings'][':recordingId']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMeetingsMeetingIdRecordingsRecordingIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meetings)[':meetingId']['recordings'][':recordingId']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.meetings[':meetingId'].recordings[':recordingId'].status.$put(args, options),
      )
    },
  })
}

export function createPutMeetingsMeetingIdRecordingsRecordingIdStatus<
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
                      (typeof client.meetings)[':meetingId']['recordings'][':recordingId']['status']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.meetings)[':meetingId']['recordings'][':recordingId']['status']['$put']
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
    const mutationDefaults = getPutMeetingsMeetingIdRecordingsRecordingIdStatusMutationOptions<
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

export function getMeetingsMeetingIdRegistrantsQueryKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['$get']>,
) {
  return ['meetings', '/meetings/:meetingId/registrants', args] as const
}

export function getMeetingsMeetingIdRegistrantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['registrants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['registrants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdRegistrantsQueryKey>
  >({
    queryKey: getMeetingsMeetingIdRegistrantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meetings[':meetingId'].registrants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeetingsMeetingIdRegistrants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['registrants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['registrants']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeetingsMeetingIdRegistrantsQueryKey>
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
      ...getMeetingsMeetingIdRegistrantsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostMeetingsMeetingIdRegistrantsMutationKey() {
  return ['meetings', '/meetings/:meetingId/registrants', 'POST'] as const
}

export function getPostMeetingsMeetingIdRegistrantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['registrants']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMeetingsMeetingIdRegistrantsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['$post']>,
    ) {
      return parseResponse(client.meetings[':meetingId'].registrants.$post(args, options))
    },
  })
}

export function createPostMeetingsMeetingIdRegistrants<
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
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['registrants']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['$post']>,
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
    const mutationDefaults = getPostMeetingsMeetingIdRegistrantsMutationOptions<
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

export function getMeetingsMeetingIdRegistrantsQuestionsQueryKey(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['registrants']['questions']['$get']
  >,
) {
  return ['meetings', '/meetings/:meetingId/registrants/questions', args] as const
}

export function getMeetingsMeetingIdRegistrantsQuestionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.meetings)[':meetingId']['registrants']['questions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['registrants']['questions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.meetings)[':meetingId']['registrants']['questions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdRegistrantsQuestionsQueryKey>
  >({
    queryKey: getMeetingsMeetingIdRegistrantsQuestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meetings[':meetingId'].registrants.questions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeetingsMeetingIdRegistrantsQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.meetings)[':meetingId']['registrants']['questions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.meetings)[':meetingId']['registrants']['questions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.meetings)[':meetingId']['registrants']['questions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeetingsMeetingIdRegistrantsQuestionsQueryKey>
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
      ...getMeetingsMeetingIdRegistrantsQuestionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchMeetingsMeetingIdRegistrantsQuestionsMutationKey() {
  return ['meetings', '/meetings/:meetingId/registrants/questions', 'PATCH'] as const
}

export function getPatchMeetingsMeetingIdRegistrantsQuestionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['questions']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMeetingsMeetingIdRegistrantsQuestionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meetings)[':meetingId']['registrants']['questions']['$patch']
      >,
    ) {
      return parseResponse(
        client.meetings[':meetingId'].registrants.questions.$patch(args, options),
      )
    },
  })
}

export function createPatchMeetingsMeetingIdRegistrantsQuestions<
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
                      (typeof client.meetings)[':meetingId']['registrants']['questions']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.meetings)[':meetingId']['registrants']['questions']['$patch']
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
    const mutationDefaults = getPatchMeetingsMeetingIdRegistrantsQuestionsMutationOptions<
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

export function getPutMeetingsMeetingIdRegistrantsStatusMutationKey() {
  return ['meetings', '/meetings/:meetingId/registrants/status', 'PUT'] as const
}

export function getPutMeetingsMeetingIdRegistrantsStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMeetingsMeetingIdRegistrantsStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meetings)[':meetingId']['registrants']['status']['$put']
      >,
    ) {
      return parseResponse(client.meetings[':meetingId'].registrants.status.$put(args, options))
    },
  })
}

export function createPutMeetingsMeetingIdRegistrantsStatus<
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
                      (typeof client.meetings)[':meetingId']['registrants']['status']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['status']['$put']>,
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
    const mutationDefaults = getPutMeetingsMeetingIdRegistrantsStatusMutationOptions<
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

export function getDeleteMeetingsMeetingIdRegistrantsRegistrantIdMutationKey() {
  return ['meetings', '/meetings/:meetingId/registrants/:registrantId', 'DELETE'] as const
}

export function getDeleteMeetingsMeetingIdRegistrantsRegistrantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.meetings)[':meetingId']['registrants'][':registrantId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeetingsMeetingIdRegistrantsRegistrantIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meetings)[':meetingId']['registrants'][':registrantId']['$delete']
      >,
    ) {
      return parseResponse(
        client.meetings[':meetingId'].registrants[':registrantId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteMeetingsMeetingIdRegistrantsRegistrantId<
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
                      (typeof client.meetings)[':meetingId']['registrants'][':registrantId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.meetings)[':meetingId']['registrants'][':registrantId']['$delete']
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
    const mutationDefaults = getDeleteMeetingsMeetingIdRegistrantsRegistrantIdMutationOptions<
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

export function getPutMeetingsMeetingIdStatusMutationKey() {
  return ['meetings', '/meetings/:meetingId/status', 'PUT'] as const
}

export function getPutMeetingsMeetingIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.meetings)[':meetingId']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMeetingsMeetingIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.meetings)[':meetingId']['status']['$put']>,
    ) {
      return parseResponse(client.meetings[':meetingId'].status.$put(args, options))
    },
  })
}

export function createPutMeetingsMeetingIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.meetings)[':meetingId']['status']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['status']['$put']>,
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
    const mutationDefaults = getPutMeetingsMeetingIdStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMetricsClientFeedbackQueryKey(
  args: InferRequestType<typeof client.metrics.client.feedback.$get>,
) {
  return ['metrics', '/metrics/client/feedback', args] as const
}

export function getMetricsClientFeedbackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.feedback.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.client.feedback.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.feedback.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsClientFeedbackQueryKey>
  >({
    queryKey: getMetricsClientFeedbackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.client.feedback.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsClientFeedback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.feedback.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.client.feedback.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.feedback.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsClientFeedbackQueryKey>
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
      ...getMetricsClientFeedbackQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMetricsClientFeedbackFeedbackIdQueryKey(
  args: InferRequestType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>,
) {
  return ['metrics', '/metrics/client/feedback/:feedbackId', args] as const
}

export function getMetricsClientFeedbackFeedbackIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsClientFeedbackFeedbackIdQueryKey>
  >({
    queryKey: getMetricsClientFeedbackFeedbackIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.client.feedback[':feedbackId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsClientFeedbackFeedbackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsClientFeedbackFeedbackIdQueryKey>
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
      ...getMetricsClientFeedbackFeedbackIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMetricsClientSatisfactionQueryKey(
  args: InferRequestType<typeof client.metrics.client.satisfaction.$get>,
) {
  return ['metrics', '/metrics/client/satisfaction', args] as const
}

export function getMetricsClientSatisfactionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.satisfaction.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.client.satisfaction.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.satisfaction.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsClientSatisfactionQueryKey>
  >({
    queryKey: getMetricsClientSatisfactionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.client.satisfaction.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsClientSatisfaction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.satisfaction.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.client.satisfaction.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metrics.client.satisfaction.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsClientSatisfactionQueryKey>
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
      ...getMetricsClientSatisfactionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMetricsCrcQueryKey(args: InferRequestType<typeof client.metrics.crc.$get>) {
  return ['metrics', '/metrics/crc', args] as const
}

export function getMetricsCrcQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.crc.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.crc.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.crc.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsCrcQueryKey>
  >({
    queryKey: getMetricsCrcQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.crc.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetricsCrc<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.crc.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.crc.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.crc.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsCrcQueryKey>
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
    return { ...getMetricsCrcQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsImQueryKey(args: InferRequestType<typeof client.metrics.im.$get>) {
  return ['metrics', '/metrics/im', args] as const
}

export function getMetricsImQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.im.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.im.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.im.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsImQueryKey>
  >({
    queryKey: getMetricsImQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.im.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetricsIm<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.im.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.im.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.im.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsImQueryKey>
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
    return { ...getMetricsImQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsIssuesZoomroomsQueryKey(
  args: InferRequestType<typeof client.metrics.issues.zoomrooms.$get>,
) {
  return ['metrics', '/metrics/issues/zoomrooms', args] as const
}

export function getMetricsIssuesZoomroomsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.issues.zoomrooms.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.issues.zoomrooms.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metrics.issues.zoomrooms.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsIssuesZoomroomsQueryKey>
  >({
    queryKey: getMetricsIssuesZoomroomsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.issues.zoomrooms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsIssuesZoomrooms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.issues.zoomrooms.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.issues.zoomrooms.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.issues.zoomrooms.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsIssuesZoomroomsQueryKey>
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
      ...getMetricsIssuesZoomroomsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMetricsIssuesZoomroomsZoomroomIdQueryKey(
  args: InferRequestType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>,
) {
  return ['metrics', '/metrics/issues/zoomrooms/:zoomroomId', args] as const
}

export function getMetricsIssuesZoomroomsZoomroomIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsIssuesZoomroomsZoomroomIdQueryKey>
  >({
    queryKey: getMetricsIssuesZoomroomsZoomroomIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.issues.zoomrooms[':zoomroomId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsIssuesZoomroomsZoomroomId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsIssuesZoomroomsZoomroomIdQueryKey>
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
      ...getMetricsIssuesZoomroomsZoomroomIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMetricsMeetingsQueryKey(
  args: InferRequestType<typeof client.metrics.meetings.$get>,
) {
  return ['metrics', '/metrics/meetings', args] as const
}

export function getMetricsMeetingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.meetings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.meetings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.meetings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMeetingsQueryKey>
  >({
    queryKey: getMetricsMeetingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.meetings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetricsMeetings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.meetings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.meetings.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.meetings.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsMeetingsQueryKey>
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
    return { ...getMetricsMeetingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsMeetingsMeetingIdQueryKey(
  args: InferRequestType<(typeof client.metrics.meetings)[':meetingId']['$get']>,
) {
  return ['metrics', '/metrics/meetings/:meetingId', args] as const
}

export function getMetricsMeetingsMeetingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.meetings)[':meetingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics.meetings)[':meetingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics.meetings)[':meetingId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMeetingsMeetingIdQueryKey>
  >({
    queryKey: getMetricsMeetingsMeetingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.meetings[':meetingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsMeetingsMeetingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.meetings)[':meetingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics.meetings)[':meetingId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics.meetings)[':meetingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsMeetingsMeetingIdQueryKey>
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
      ...getMetricsMeetingsMeetingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMetricsMeetingsMeetingIdParticipantsQueryKey(
  args: InferRequestType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>,
) {
  return ['metrics', '/metrics/meetings/:meetingId/participants', args] as const
}

export function getMetricsMeetingsMeetingIdParticipantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsQueryKey>
  >({
    queryKey: getMetricsMeetingsMeetingIdParticipantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.meetings[':meetingId'].participants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsMeetingsMeetingIdParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsQueryKey>
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
      ...getMetricsMeetingsMeetingIdParticipantsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMetricsMeetingsMeetingIdParticipantsQosQueryKey(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']
  >,
) {
  return ['metrics', '/metrics/meetings/:meetingId/participants/qos', args] as const
}

export function getMetricsMeetingsMeetingIdParticipantsQosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsQosQueryKey>
  >({
    queryKey: getMetricsMeetingsMeetingIdParticipantsQosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.meetings[':meetingId'].participants.qos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsMeetingsMeetingIdParticipantsQos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsQosQueryKey>
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
      ...getMetricsMeetingsMeetingIdParticipantsQosQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMetricsMeetingsMeetingIdParticipantsSatisfactionQueryKey(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['satisfaction']['$get']
  >,
) {
  return ['metrics', '/metrics/meetings/:meetingId/participants/satisfaction', args] as const
}

export function getMetricsMeetingsMeetingIdParticipantsSatisfactionQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['satisfaction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsSatisfactionQueryKey>
  >({
    queryKey: getMetricsMeetingsMeetingIdParticipantsSatisfactionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.meetings[':meetingId'].participants.satisfaction.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsMeetingsMeetingIdParticipantsSatisfaction<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['satisfaction']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsSatisfactionQueryKey>
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
      ...getMetricsMeetingsMeetingIdParticipantsSatisfactionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMetricsMeetingsMeetingIdParticipantsSharingQueryKey(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['sharing']['$get']
  >,
) {
  return ['metrics', '/metrics/meetings/:meetingId/participants/sharing', args] as const
}

export function getMetricsMeetingsMeetingIdParticipantsSharingQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['sharing']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsSharingQueryKey>
  >({
    queryKey: getMetricsMeetingsMeetingIdParticipantsSharingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.meetings[':meetingId'].participants.sharing.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsMeetingsMeetingIdParticipantsSharing<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['sharing']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsSharingQueryKey>
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
      ...getMetricsMeetingsMeetingIdParticipantsSharingQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMetricsMeetingsMeetingIdParticipantsParticipantIdQosQueryKey(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants'][':participantId']['qos']['$get']
  >,
) {
  return ['metrics', '/metrics/meetings/:meetingId/participants/:participantId/qos', args] as const
}

export function getMetricsMeetingsMeetingIdParticipantsParticipantIdQosQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants'][':participantId']['qos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsParticipantIdQosQueryKey>
  >({
    queryKey: getMetricsMeetingsMeetingIdParticipantsParticipantIdQosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.meetings[':meetingId'].participants[':participantId'].qos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsMeetingsMeetingIdParticipantsParticipantIdQos<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants'][':participantId']['qos']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsParticipantIdQosQueryKey>
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
      ...getMetricsMeetingsMeetingIdParticipantsParticipantIdQosQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMetricsWebinarsQueryKey(
  args: InferRequestType<typeof client.metrics.webinars.$get>,
) {
  return ['metrics', '/metrics/webinars', args] as const
}

export function getMetricsWebinarsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.webinars.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.webinars.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.webinars.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsWebinarsQueryKey>
  >({
    queryKey: getMetricsWebinarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.webinars.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetricsWebinars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.webinars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.webinars.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.webinars.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsWebinarsQueryKey>
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
    return { ...getMetricsWebinarsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsWebinarsWebinarIdQueryKey(
  args: InferRequestType<(typeof client.metrics.webinars)[':webinarId']['$get']>,
) {
  return ['metrics', '/metrics/webinars/:webinarId', args] as const
}

export function getMetricsWebinarsWebinarIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.webinars)[':webinarId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics.webinars)[':webinarId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics.webinars)[':webinarId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsWebinarsWebinarIdQueryKey>
  >({
    queryKey: getMetricsWebinarsWebinarIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.webinars[':webinarId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsWebinarsWebinarId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.webinars)[':webinarId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics.webinars)[':webinarId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics.webinars)[':webinarId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsWebinarsWebinarIdQueryKey>
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
      ...getMetricsWebinarsWebinarIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMetricsWebinarsWebinarIdParticipantsQueryKey(
  args: InferRequestType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>,
) {
  return ['metrics', '/metrics/webinars/:webinarId/participants', args] as const
}

export function getMetricsWebinarsWebinarIdParticipantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsQueryKey>
  >({
    queryKey: getMetricsWebinarsWebinarIdParticipantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.webinars[':webinarId'].participants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsWebinarsWebinarIdParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsQueryKey>
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
      ...getMetricsWebinarsWebinarIdParticipantsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMetricsWebinarsWebinarIdParticipantsQosQueryKey(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']
  >,
) {
  return ['metrics', '/metrics/webinars/:webinarId/participants/qos', args] as const
}

export function getMetricsWebinarsWebinarIdParticipantsQosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsQosQueryKey>
  >({
    queryKey: getMetricsWebinarsWebinarIdParticipantsQosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.webinars[':webinarId'].participants.qos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsWebinarsWebinarIdParticipantsQos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsQosQueryKey>
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
      ...getMetricsWebinarsWebinarIdParticipantsQosQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMetricsWebinarsWebinarIdParticipantsSatisfactionQueryKey(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['satisfaction']['$get']
  >,
) {
  return ['metrics', '/metrics/webinars/:webinarId/participants/satisfaction', args] as const
}

export function getMetricsWebinarsWebinarIdParticipantsSatisfactionQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['satisfaction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsSatisfactionQueryKey>
  >({
    queryKey: getMetricsWebinarsWebinarIdParticipantsSatisfactionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.webinars[':webinarId'].participants.satisfaction.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsWebinarsWebinarIdParticipantsSatisfaction<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['satisfaction']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsSatisfactionQueryKey>
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
      ...getMetricsWebinarsWebinarIdParticipantsSatisfactionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMetricsWebinarsWebinarIdParticipantsSharingQueryKey(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['sharing']['$get']
  >,
) {
  return ['metrics', '/metrics/webinars/:webinarId/participants/sharing', args] as const
}

export function getMetricsWebinarsWebinarIdParticipantsSharingQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['sharing']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsSharingQueryKey>
  >({
    queryKey: getMetricsWebinarsWebinarIdParticipantsSharingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.webinars[':webinarId'].participants.sharing.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsWebinarsWebinarIdParticipantsSharing<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['sharing']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsSharingQueryKey>
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
      ...getMetricsWebinarsWebinarIdParticipantsSharingQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMetricsWebinarsWebinarIdParticipantsParticipantIdQosQueryKey(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants'][':participantId']['qos']['$get']
  >,
) {
  return ['metrics', '/metrics/webinars/:webinarId/participants/:participantId/qos', args] as const
}

export function getMetricsWebinarsWebinarIdParticipantsParticipantIdQosQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants'][':participantId']['qos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsParticipantIdQosQueryKey>
  >({
    queryKey: getMetricsWebinarsWebinarIdParticipantsParticipantIdQosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.webinars[':webinarId'].participants[':participantId'].qos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsWebinarsWebinarIdParticipantsParticipantIdQos<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants'][':participantId']['qos']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsParticipantIdQosQueryKey>
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
      ...getMetricsWebinarsWebinarIdParticipantsParticipantIdQosQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMetricsZoomroomsQueryKey(
  args: InferRequestType<typeof client.metrics.zoomrooms.$get>,
) {
  return ['metrics', '/metrics/zoomrooms', args] as const
}

export function getMetricsZoomroomsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.zoomrooms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsZoomroomsQueryKey>
  >({
    queryKey: getMetricsZoomroomsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.zoomrooms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetricsZoomrooms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.zoomrooms.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsZoomroomsQueryKey>
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
    return { ...getMetricsZoomroomsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsZoomroomsIssuesQueryKey(
  args: InferRequestType<typeof client.metrics.zoomrooms.issues.$get>,
) {
  return ['metrics', '/metrics/zoomrooms/issues', args] as const
}

export function getMetricsZoomroomsIssuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.issues.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.zoomrooms.issues.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.issues.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsZoomroomsIssuesQueryKey>
  >({
    queryKey: getMetricsZoomroomsIssuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.zoomrooms.issues.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsZoomroomsIssues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.issues.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.zoomrooms.issues.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.issues.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsZoomroomsIssuesQueryKey>
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
      ...getMetricsZoomroomsIssuesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMetricsZoomroomsZoomroomIdQueryKey(
  args: InferRequestType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>,
) {
  return ['metrics', '/metrics/zoomrooms/:zoomroomId', args] as const
}

export function getMetricsZoomroomsZoomroomIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsZoomroomsZoomroomIdQueryKey>
  >({
    queryKey: getMetricsZoomroomsZoomroomIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.zoomrooms[':zoomroomId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsZoomroomsZoomroomId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsZoomroomsZoomroomIdQueryKey>
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
      ...getMetricsZoomroomsZoomroomIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPastMeetingsMeetingIdFilesQueryKey(
  args: InferRequestType<(typeof client.past_meetings)[':meetingId']['files']['$get']>,
) {
  return ['past_meetings', '/past_meetings/:meetingId/files', args] as const
}

export function getPastMeetingsMeetingIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.past_meetings)[':meetingId']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastMeetingsMeetingIdFilesQueryKey>
  >({
    queryKey: getPastMeetingsMeetingIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.past_meetings[':meetingId'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPastMeetingsMeetingIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.past_meetings)[':meetingId']['files']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPastMeetingsMeetingIdFilesQueryKey>
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
      ...getPastMeetingsMeetingIdFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPastMeetingsMeetingIdInstancesQueryKey(
  args: InferRequestType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>,
) {
  return ['past_meetings', '/past_meetings/:meetingId/instances', args] as const
}

export function getPastMeetingsMeetingIdInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastMeetingsMeetingIdInstancesQueryKey>
  >({
    queryKey: getPastMeetingsMeetingIdInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.past_meetings[':meetingId'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPastMeetingsMeetingIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPastMeetingsMeetingIdInstancesQueryKey>
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
      ...getPastMeetingsMeetingIdInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPastMeetingsMeetingIdPollsQueryKey(
  args: InferRequestType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>,
) {
  return ['past_meetings', '/past_meetings/:meetingId/polls', args] as const
}

export function getPastMeetingsMeetingIdPollsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastMeetingsMeetingIdPollsQueryKey>
  >({
    queryKey: getPastMeetingsMeetingIdPollsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.past_meetings[':meetingId'].polls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPastMeetingsMeetingIdPolls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPastMeetingsMeetingIdPollsQueryKey>
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
      ...getPastMeetingsMeetingIdPollsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPastMeetingsMeetingUUIDQueryKey(
  args: InferRequestType<(typeof client.past_meetings)[':meetingUUID']['$get']>,
) {
  return ['past_meetings', '/past_meetings/:meetingUUID', args] as const
}

export function getPastMeetingsMeetingUUIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_meetings)[':meetingUUID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.past_meetings)[':meetingUUID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.past_meetings)[':meetingUUID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastMeetingsMeetingUUIDQueryKey>
  >({
    queryKey: getPastMeetingsMeetingUUIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.past_meetings[':meetingUUID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPastMeetingsMeetingUUID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_meetings)[':meetingUUID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.past_meetings)[':meetingUUID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.past_meetings)[':meetingUUID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPastMeetingsMeetingUUIDQueryKey>
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
      ...getPastMeetingsMeetingUUIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPastMeetingsMeetingUUIDParticipantsQueryKey(
  args: InferRequestType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>,
) {
  return ['past_meetings', '/past_meetings/:meetingUUID/participants', args] as const
}

export function getPastMeetingsMeetingUUIDParticipantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastMeetingsMeetingUUIDParticipantsQueryKey>
  >({
    queryKey: getPastMeetingsMeetingUUIDParticipantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.past_meetings[':meetingUUID'].participants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPastMeetingsMeetingUUIDParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.past_meetings)[':meetingUUID']['participants']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPastMeetingsMeetingUUIDParticipantsQueryKey>
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
      ...getPastMeetingsMeetingUUIDParticipantsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPastWebinarsWebinarUUIDAbsenteesQueryKey(
  args: InferRequestType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>,
) {
  return ['past_webinars', '/past_webinars/:WebinarUUID/absentees', args] as const
}

export function getPastWebinarsWebinarUUIDAbsenteesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastWebinarsWebinarUUIDAbsenteesQueryKey>
  >({
    queryKey: getPastWebinarsWebinarUUIDAbsenteesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.past_webinars[':WebinarUUID'].absentees.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPastWebinarsWebinarUUIDAbsentees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPastWebinarsWebinarUUIDAbsenteesQueryKey>
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
      ...getPastWebinarsWebinarUUIDAbsenteesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPastWebinarsWebinarIdFilesQueryKey(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['files']['$get']>,
) {
  return ['past_webinars', '/past_webinars/:webinarId/files', args] as const
}

export function getPastWebinarsWebinarIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastWebinarsWebinarIdFilesQueryKey>
  >({
    queryKey: getPastWebinarsWebinarIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.past_webinars[':webinarId'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPastWebinarsWebinarIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.past_webinars)[':webinarId']['files']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPastWebinarsWebinarIdFilesQueryKey>
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
      ...getPastWebinarsWebinarIdFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPastWebinarsWebinarIdInstancesQueryKey(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>,
) {
  return ['past_webinars', '/past_webinars/:webinarId/instances', args] as const
}

export function getPastWebinarsWebinarIdInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastWebinarsWebinarIdInstancesQueryKey>
  >({
    queryKey: getPastWebinarsWebinarIdInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.past_webinars[':webinarId'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPastWebinarsWebinarIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPastWebinarsWebinarIdInstancesQueryKey>
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
      ...getPastWebinarsWebinarIdInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPastWebinarsWebinarIdParticipantsQueryKey(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>,
) {
  return ['past_webinars', '/past_webinars/:webinarId/participants', args] as const
}

export function getPastWebinarsWebinarIdParticipantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastWebinarsWebinarIdParticipantsQueryKey>
  >({
    queryKey: getPastWebinarsWebinarIdParticipantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.past_webinars[':webinarId'].participants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPastWebinarsWebinarIdParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPastWebinarsWebinarIdParticipantsQueryKey>
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
      ...getPastWebinarsWebinarIdParticipantsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPastWebinarsWebinarIdPollsQueryKey(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>,
) {
  return ['past_webinars', '/past_webinars/:webinarId/polls', args] as const
}

export function getPastWebinarsWebinarIdPollsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastWebinarsWebinarIdPollsQueryKey>
  >({
    queryKey: getPastWebinarsWebinarIdPollsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.past_webinars[':webinarId'].polls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPastWebinarsWebinarIdPolls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPastWebinarsWebinarIdPollsQueryKey>
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
      ...getPastWebinarsWebinarIdPollsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPastWebinarsWebinarIdQaQueryKey(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>,
) {
  return ['past_webinars', '/past_webinars/:webinarId/qa', args] as const
}

export function getPastWebinarsWebinarIdQaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastWebinarsWebinarIdQaQueryKey>
  >({
    queryKey: getPastWebinarsWebinarIdQaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.past_webinars[':webinarId'].qa.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPastWebinarsWebinarIdQa<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPastWebinarsWebinarIdQaQueryKey>
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
      ...getPastWebinarsWebinarIdQaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPhoneAutoReceptionistsMutationKey() {
  return ['phone', '/phone/auto_receptionists', 'POST'] as const
}

export function getPostPhoneAutoReceptionistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.auto_receptionists.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.phone.auto_receptionists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneAutoReceptionistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.phone.auto_receptionists.$post>) {
      return parseResponse(client.phone.auto_receptionists.$post(args, options))
    },
  })
}

export function createPostPhoneAutoReceptionists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.phone.auto_receptionists.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.phone.auto_receptionists.$post>,
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
    const mutationDefaults = getPostPhoneAutoReceptionistsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchPhoneAutoReceptionistsAutoReceptionistIdMutationKey() {
  return ['phone', '/phone/auto_receptionists/:autoReceptionistId', 'PATCH'] as const
}

export function getPatchPhoneAutoReceptionistsAutoReceptionistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.phone.auto_receptionists)[':autoReceptionistId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPhoneAutoReceptionistsAutoReceptionistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.auto_receptionists)[':autoReceptionistId']['$patch']
      >,
    ) {
      return parseResponse(
        client.phone.auto_receptionists[':autoReceptionistId'].$patch(args, options),
      )
    },
  })
}

export function createPatchPhoneAutoReceptionistsAutoReceptionistId<
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
                      (typeof client.phone.auto_receptionists)[':autoReceptionistId']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.auto_receptionists)[':autoReceptionistId']['$patch']
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
    const mutationDefaults = getPatchPhoneAutoReceptionistsAutoReceptionistIdMutationOptions<
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

export function getPostPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersMutationKey() {
  return ['phone', '/phone/auto_receptionists/:autoReceptionistId/phone_numbers', 'POST'] as const
}

export function getPostPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers']['$post']
      >,
    ) {
      return parseResponse(
        client.phone.auto_receptionists[':autoReceptionistId'].phone_numbers.$post(args, options),
      )
    },
  })
}

export function createPostPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbers<
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
                      (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers']['$post']
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
    const mutationDefaults =
      getPostPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersMutationOptions<
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

export function getDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersMutationKey() {
  return ['phone', '/phone/auto_receptionists/:autoReceptionistId/phone_numbers', 'DELETE'] as const
}

export function getDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers']['$delete']
      >,
    ) {
      return parseResponse(
        client.phone.auto_receptionists[':autoReceptionistId'].phone_numbers.$delete(args, options),
      )
    },
  })
}

export function createDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbers<
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
                      (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers']['$delete']
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
    const mutationDefaults =
      getDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersMutationOptions<
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

export function getDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberIdMutationKey() {
  return [
    'phone',
    '/phone/auto_receptionists/:autoReceptionistId/phone_numbers/:phoneNumberId',
    'DELETE',
  ] as const
}

export function getDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers'][':phoneNumberId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers'][':phoneNumberId']['$delete']
      >,
    ) {
      return parseResponse(
        client.phone.auto_receptionists[':autoReceptionistId'].phone_numbers[
          ':phoneNumberId'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberId<
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
                      (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers'][':phoneNumberId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers'][':phoneNumberId']['$delete']
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
    const mutationDefaults =
      getDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberIdMutationOptions<
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

export function getPhoneBlockedListQueryKey(
  args: InferRequestType<typeof client.phone.blocked_list.$get>,
) {
  return ['phone', '/phone/blocked_list', args] as const
}

export function getPhoneBlockedListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.blocked_list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.phone.blocked_list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.blocked_list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneBlockedListQueryKey>
  >({
    queryKey: getPhoneBlockedListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.blocked_list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPhoneBlockedList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.blocked_list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.phone.blocked_list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.blocked_list.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneBlockedListQueryKey>
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
    return { ...getPhoneBlockedListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPhoneBlockedListMutationKey() {
  return ['phone', '/phone/blocked_list', 'POST'] as const
}

export function getPostPhoneBlockedListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.blocked_list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.phone.blocked_list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneBlockedListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.phone.blocked_list.$post>) {
      return parseResponse(client.phone.blocked_list.$post(args, options))
    },
  })
}

export function createPostPhoneBlockedList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.blocked_list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.phone.blocked_list.$post>,
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
    const mutationDefaults = getPostPhoneBlockedListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPhoneBlockedListBlockedListIdQueryKey(
  args: InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>,
) {
  return ['phone', '/phone/blocked_list/:blockedListId', args] as const
}

export function getPhoneBlockedListBlockedListIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneBlockedListBlockedListIdQueryKey>
  >({
    queryKey: getPhoneBlockedListBlockedListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.blocked_list[':blockedListId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneBlockedListBlockedListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneBlockedListBlockedListIdQueryKey>
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
      ...getPhoneBlockedListBlockedListIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeletePhoneBlockedListBlockedListIdMutationKey() {
  return ['phone', '/phone/blocked_list/:blockedListId', 'DELETE'] as const
}

export function getDeletePhoneBlockedListBlockedListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneBlockedListBlockedListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$delete']>,
    ) {
      return parseResponse(client.phone.blocked_list[':blockedListId'].$delete(args, options))
    },
  })
}

export function createDeletePhoneBlockedListBlockedListId<
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
                    ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$delete']>,
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
    const mutationDefaults = getDeletePhoneBlockedListBlockedListIdMutationOptions<
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

export function getPatchPhoneBlockedListBlockedListIdMutationKey() {
  return ['phone', '/phone/blocked_list/:blockedListId', 'PATCH'] as const
}

export function getPatchPhoneBlockedListBlockedListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPhoneBlockedListBlockedListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$patch']>,
    ) {
      return parseResponse(client.phone.blocked_list[':blockedListId'].$patch(args, options))
    },
  })
}

export function createPatchPhoneBlockedListBlockedListId<
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
                    ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$patch']>,
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
    const mutationDefaults = getPatchPhoneBlockedListBlockedListIdMutationOptions<
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

export function getPostPhoneByocNumbersMutationKey() {
  return ['phone', '/phone/byoc_numbers', 'POST'] as const
}

export function getPostPhoneByocNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.byoc_numbers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.phone.byoc_numbers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneByocNumbersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.phone.byoc_numbers.$post>) {
      return parseResponse(client.phone.byoc_numbers.$post(args, options))
    },
  })
}

export function createPostPhoneByocNumbers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.byoc_numbers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.phone.byoc_numbers.$post>,
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
    const mutationDefaults = getPostPhoneByocNumbersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPhoneCallLogsQueryKey(
  args: InferRequestType<typeof client.phone.call_logs.$get>,
) {
  return ['phone', '/phone/call_logs', args] as const
}

export function getPhoneCallLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_logs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.phone.call_logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneCallLogsQueryKey>
  >({
    queryKey: getPhoneCallLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.call_logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPhoneCallLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.phone.call_logs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_logs.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneCallLogsQueryKey>
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
    return { ...getPhoneCallLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPhoneCallQueuesQueryKey(
  args: InferRequestType<typeof client.phone.call_queues.$get>,
) {
  return ['phone', '/phone/call_queues', args] as const
}

export function getPhoneCallQueuesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_queues.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.phone.call_queues.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_queues.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneCallQueuesQueryKey>
  >({
    queryKey: getPhoneCallQueuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.call_queues.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPhoneCallQueues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_queues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.phone.call_queues.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_queues.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneCallQueuesQueryKey>
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
    return { ...getPhoneCallQueuesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPhoneCallQueuesMutationKey() {
  return ['phone', '/phone/call_queues', 'POST'] as const
}

export function getPostPhoneCallQueuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_queues.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.phone.call_queues.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneCallQueuesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.phone.call_queues.$post>) {
      return parseResponse(client.phone.call_queues.$post(args, options))
    },
  })
}

export function createPostPhoneCallQueues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_queues.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.phone.call_queues.$post>,
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
    const mutationDefaults = getPostPhoneCallQueuesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPhoneCallQueuesCallQueueIdQueryKey(
  args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$get']>,
) {
  return ['phone', '/phone/call_queues/:callQueueId', args] as const
}

export function getPhoneCallQueuesCallQueueIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneCallQueuesCallQueueIdQueryKey>
  >({
    queryKey: getPhoneCallQueuesCallQueueIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.call_queues[':callQueueId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneCallQueuesCallQueueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneCallQueuesCallQueueIdQueryKey>
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
      ...getPhoneCallQueuesCallQueueIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeletePhoneCallQueuesCallQueueIdMutationKey() {
  return ['phone', '/phone/call_queues/:callQueueId', 'DELETE'] as const
}

export function getDeletePhoneCallQueuesCallQueueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneCallQueuesCallQueueIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$delete']>,
    ) {
      return parseResponse(client.phone.call_queues[':callQueueId'].$delete(args, options))
    },
  })
}

export function createDeletePhoneCallQueuesCallQueueId<
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
                  Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$delete']>,
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
    const mutationDefaults = getDeletePhoneCallQueuesCallQueueIdMutationOptions<
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

export function getPatchPhoneCallQueuesCallQueueIdMutationKey() {
  return ['phone', '/phone/call_queues/:callQueueId', 'PATCH'] as const
}

export function getPatchPhoneCallQueuesCallQueueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPhoneCallQueuesCallQueueIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$patch']>,
    ) {
      return parseResponse(client.phone.call_queues[':callQueueId'].$patch(args, options))
    },
  })
}

export function createPatchPhoneCallQueuesCallQueueId<
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
                  Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$patch']>,
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
    const mutationDefaults = getPatchPhoneCallQueuesCallQueueIdMutationOptions<
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

export function getPutPhoneCallQueuesCallQueueIdManagerMutationKey() {
  return ['phone', '/phone/call_queues/:callQueueId/manager', 'PUT'] as const
}

export function getPutPhoneCallQueuesCallQueueIdManagerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['manager']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPhoneCallQueuesCallQueueIdManagerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['manager']['$put']>,
    ) {
      return parseResponse(client.phone.call_queues[':callQueueId'].manager.$put(args, options))
    },
  })
}

export function createPutPhoneCallQueuesCallQueueIdManager<
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
                    ReturnType<(typeof client.phone.call_queues)[':callQueueId']['manager']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['manager']['$put']>,
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
    const mutationDefaults = getPutPhoneCallQueuesCallQueueIdManagerMutationOptions<
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

export function getPostPhoneCallQueuesCallQueueIdMembersMutationKey() {
  return ['phone', '/phone/call_queues/:callQueueId/members', 'POST'] as const
}

export function getPostPhoneCallQueuesCallQueueIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneCallQueuesCallQueueIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['members']['$post']>,
    ) {
      return parseResponse(client.phone.call_queues[':callQueueId'].members.$post(args, options))
    },
  })
}

export function createPostPhoneCallQueuesCallQueueIdMembers<
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
                  ReturnType<(typeof client.phone.call_queues)[':callQueueId']['members']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['members']['$post']>,
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
    const mutationDefaults = getPostPhoneCallQueuesCallQueueIdMembersMutationOptions<
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

export function getDeletePhoneCallQueuesCallQueueIdMembersMutationKey() {
  return ['phone', '/phone/call_queues/:callQueueId/members', 'DELETE'] as const
}

export function getDeletePhoneCallQueuesCallQueueIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['members']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneCallQueuesCallQueueIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.call_queues)[':callQueueId']['members']['$delete']
      >,
    ) {
      return parseResponse(client.phone.call_queues[':callQueueId'].members.$delete(args, options))
    },
  })
}

export function createDeletePhoneCallQueuesCallQueueIdMembers<
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
                      (typeof client.phone.call_queues)[':callQueueId']['members']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['members']['$delete']>,
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
    const mutationDefaults = getDeletePhoneCallQueuesCallQueueIdMembersMutationOptions<
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

export function getDeletePhoneCallQueuesCallQueueIdMembersMemberIdMutationKey() {
  return ['phone', '/phone/call_queues/:callQueueId/members/:memberId', 'DELETE'] as const
}

export function getDeletePhoneCallQueuesCallQueueIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.phone.call_queues)[':callQueueId']['members'][':memberId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneCallQueuesCallQueueIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.call_queues)[':callQueueId']['members'][':memberId']['$delete']
      >,
    ) {
      return parseResponse(
        client.phone.call_queues[':callQueueId'].members[':memberId'].$delete(args, options),
      )
    },
  })
}

export function createDeletePhoneCallQueuesCallQueueIdMembersMemberId<
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
                      (typeof client.phone.call_queues)[':callQueueId']['members'][':memberId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.call_queues)[':callQueueId']['members'][':memberId']['$delete']
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
    const mutationDefaults = getDeletePhoneCallQueuesCallQueueIdMembersMemberIdMutationOptions<
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

export function getPostPhoneCallQueuesCallQueueIdPhoneNumbersMutationKey() {
  return ['phone', '/phone/call_queues/:callQueueId/phone_numbers', 'POST'] as const
}

export function getPostPhoneCallQueuesCallQueueIdPhoneNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['phone_numbers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneCallQueuesCallQueueIdPhoneNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.call_queues)[':callQueueId']['phone_numbers']['$post']
      >,
    ) {
      return parseResponse(
        client.phone.call_queues[':callQueueId'].phone_numbers.$post(args, options),
      )
    },
  })
}

export function createPostPhoneCallQueuesCallQueueIdPhoneNumbers<
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
                      (typeof client.phone.call_queues)[':callQueueId']['phone_numbers']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.call_queues)[':callQueueId']['phone_numbers']['$post']
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
    const mutationDefaults = getPostPhoneCallQueuesCallQueueIdPhoneNumbersMutationOptions<
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

export function getDeletePhoneCallQueuesCallQueueIdPhoneNumbersMutationKey() {
  return ['phone', '/phone/call_queues/:callQueueId/phone_numbers', 'DELETE'] as const
}

export function getDeletePhoneCallQueuesCallQueueIdPhoneNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['phone_numbers']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneCallQueuesCallQueueIdPhoneNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.call_queues)[':callQueueId']['phone_numbers']['$delete']
      >,
    ) {
      return parseResponse(
        client.phone.call_queues[':callQueueId'].phone_numbers.$delete(args, options),
      )
    },
  })
}

export function createDeletePhoneCallQueuesCallQueueIdPhoneNumbers<
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
                      (typeof client.phone.call_queues)[':callQueueId']['phone_numbers']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.call_queues)[':callQueueId']['phone_numbers']['$delete']
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
    const mutationDefaults = getDeletePhoneCallQueuesCallQueueIdPhoneNumbersMutationOptions<
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

export function getDeletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberIdMutationKey() {
  return [
    'phone',
    '/phone/call_queues/:callQueueId/phone_numbers/:phoneNumberId',
    'DELETE',
  ] as const
}

export function getDeletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.phone.call_queues)[':callQueueId']['phone_numbers'][':phoneNumberId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.call_queues)[':callQueueId']['phone_numbers'][':phoneNumberId']['$delete']
      >,
    ) {
      return parseResponse(
        client.phone.call_queues[':callQueueId'].phone_numbers[':phoneNumberId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberId<
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
                      (typeof client.phone.call_queues)[':callQueueId']['phone_numbers'][':phoneNumberId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.call_queues)[':callQueueId']['phone_numbers'][':phoneNumberId']['$delete']
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
    const mutationDefaults =
      getDeletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberIdMutationOptions<
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

export function getPhoneCallQueuesCallQueueIdRecordingsQueryKey(
  args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']>,
) {
  return ['phone', '/phone/call_queues/:callQueueId/recordings', args] as const
}

export function getPhoneCallQueuesCallQueueIdRecordingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneCallQueuesCallQueueIdRecordingsQueryKey>
  >({
    queryKey: getPhoneCallQueuesCallQueueIdRecordingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.call_queues[':callQueueId'].recordings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneCallQueuesCallQueueIdRecordings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneCallQueuesCallQueueIdRecordingsQueryKey>
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
      ...getPhoneCallQueuesCallQueueIdRecordingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPhoneCallingPlansQueryKey() {
  return ['phone', '/phone/calling_plans'] as const
}

export function getPhoneCallingPlansQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.calling_plans.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.calling_plans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneCallingPlansQueryKey>
  >({
    queryKey: getPhoneCallingPlansQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.calling_plans.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneCallingPlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.calling_plans.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.calling_plans.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneCallingPlansQueryKey>
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
    return { ...getPhoneCallingPlansQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPhoneCommonAreaPhonesQueryKey(
  args: InferRequestType<typeof client.phone.common_area_phones.$get>,
) {
  return ['phone', '/phone/common_area_phones', args] as const
}

export function getPhoneCommonAreaPhonesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone.common_area_phones.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone.common_area_phones.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.common_area_phones.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneCommonAreaPhonesQueryKey>
  >({
    queryKey: getPhoneCommonAreaPhonesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.common_area_phones.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneCommonAreaPhones<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone.common_area_phones.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.phone.common_area_phones.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.common_area_phones.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneCommonAreaPhonesQueryKey>
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
      ...getPhoneCommonAreaPhonesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPhoneCommonAreaPhonesMutationKey() {
  return ['phone', '/phone/common_area_phones', 'POST'] as const
}

export function getPostPhoneCommonAreaPhonesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.common_area_phones.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.phone.common_area_phones.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneCommonAreaPhonesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.phone.common_area_phones.$post>) {
      return parseResponse(client.phone.common_area_phones.$post(args, options))
    },
  })
}

export function createPostPhoneCommonAreaPhones<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.phone.common_area_phones.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.phone.common_area_phones.$post>,
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
    const mutationDefaults = getPostPhoneCommonAreaPhonesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPhoneCommonAreaPhonesCommonAreaPhoneIdQueryKey(
  args: InferRequestType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>,
) {
  return ['phone', '/phone/common_area_phones/:commonAreaPhoneId', args] as const
}

export function getPhoneCommonAreaPhonesCommonAreaPhoneIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneCommonAreaPhonesCommonAreaPhoneIdQueryKey>
  >({
    queryKey: getPhoneCommonAreaPhonesCommonAreaPhoneIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.common_area_phones[':commonAreaPhoneId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneCommonAreaPhonesCommonAreaPhoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneCommonAreaPhonesCommonAreaPhoneIdQueryKey>
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
      ...getPhoneCommonAreaPhonesCommonAreaPhoneIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeletePhoneCommonAreaPhonesCommonAreaPhoneIdMutationKey() {
  return ['phone', '/phone/common_area_phones/:commonAreaPhoneId', 'DELETE'] as const
}

export function getDeletePhoneCommonAreaPhonesCommonAreaPhoneIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneCommonAreaPhonesCommonAreaPhoneIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$delete']
      >,
    ) {
      return parseResponse(
        client.phone.common_area_phones[':commonAreaPhoneId'].$delete(args, options),
      )
    },
  })
}

export function createDeletePhoneCommonAreaPhonesCommonAreaPhoneId<
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
                      (typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$delete']
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
    const mutationDefaults = getDeletePhoneCommonAreaPhonesCommonAreaPhoneIdMutationOptions<
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

export function getPatchPhoneCommonAreaPhonesCommonAreaPhoneIdMutationKey() {
  return ['phone', '/phone/common_area_phones/:commonAreaPhoneId', 'PATCH'] as const
}

export function getPatchPhoneCommonAreaPhonesCommonAreaPhoneIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPhoneCommonAreaPhonesCommonAreaPhoneIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$patch']
      >,
    ) {
      return parseResponse(
        client.phone.common_area_phones[':commonAreaPhoneId'].$patch(args, options),
      )
    },
  })
}

export function createPatchPhoneCommonAreaPhonesCommonAreaPhoneId<
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
                      (typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$patch']
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
    const mutationDefaults = getPatchPhoneCommonAreaPhonesCommonAreaPhoneIdMutationOptions<
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

export function getPutPhoneCompanyNumberMutationKey() {
  return ['phone', '/phone/company_number', 'PUT'] as const
}

export function getPutPhoneCompanyNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.phone.company_number.$put>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.phone.company_number.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutPhoneCompanyNumberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.phone.company_number.$put>) {
      return parseResponse(client.phone.company_number.$put(args, options))
    },
  })
}

export function createPutPhoneCompanyNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.phone.company_number.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.phone.company_number.$put>,
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
    const mutationDefaults = getPutPhoneCompanyNumberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPhoneDevicesQueryKey(args: InferRequestType<typeof client.phone.devices.$get>) {
  return ['phone', '/phone/devices', args] as const
}

export function getPhoneDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.devices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.phone.devices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneDevicesQueryKey>
  >({
    queryKey: getPhoneDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPhoneDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.phone.devices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.devices.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneDevicesQueryKey>
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
    return { ...getPhoneDevicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPhoneDevicesMutationKey() {
  return ['phone', '/phone/devices', 'POST'] as const
}

export function getPostPhoneDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.devices.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.phone.devices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneDevicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.phone.devices.$post>) {
      return parseResponse(client.phone.devices.$post(args, options))
    },
  })
}

export function createPostPhoneDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.devices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.phone.devices.$post>,
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
    const mutationDefaults = getPostPhoneDevicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPhoneDevicesDeviceIdQueryKey(
  args: InferRequestType<(typeof client.phone.devices)[':deviceId']['$get']>,
) {
  return ['phone', '/phone/devices/:deviceId', args] as const
}

export function getPhoneDevicesDeviceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.phone.devices)[':deviceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone.devices)[':deviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone.devices)[':deviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneDevicesDeviceIdQueryKey>
  >({
    queryKey: getPhoneDevicesDeviceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.devices[':deviceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneDevicesDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.phone.devices)[':deviceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.phone.devices)[':deviceId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.devices)[':deviceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneDevicesDeviceIdQueryKey>
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
      ...getPhoneDevicesDeviceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeletePhoneDevicesDeviceIdMutationKey() {
  return ['phone', '/phone/devices/:deviceId', 'DELETE'] as const
}

export function getDeletePhoneDevicesDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.devices)[':deviceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.phone.devices)[':deviceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneDevicesDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.phone.devices)[':deviceId']['$delete']>,
    ) {
      return parseResponse(client.phone.devices[':deviceId'].$delete(args, options))
    },
  })
}

export function createDeletePhoneDevicesDeviceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.phone.devices)[':deviceId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.devices)[':deviceId']['$delete']>,
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
    const mutationDefaults = getDeletePhoneDevicesDeviceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchPhoneDevicesDeviceIdMutationKey() {
  return ['phone', '/phone/devices/:deviceId', 'PATCH'] as const
}

export function getPatchPhoneDevicesDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.devices)[':deviceId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.phone.devices)[':deviceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPhoneDevicesDeviceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.phone.devices)[':deviceId']['$patch']>) {
      return parseResponse(client.phone.devices[':deviceId'].$patch(args, options))
    },
  })
}

export function createPatchPhoneDevicesDeviceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.phone.devices)[':deviceId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.devices)[':deviceId']['$patch']>,
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
    const mutationDefaults = getPatchPhoneDevicesDeviceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPhoneMetricsCallLogsQueryKey(
  args: InferRequestType<typeof client.phone.metrics.call_logs.$get>,
) {
  return ['phone', '/phone/metrics/call_logs', args] as const
}

export function getPhoneMetricsCallLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone.metrics.call_logs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone.metrics.call_logs.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.metrics.call_logs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneMetricsCallLogsQueryKey>
  >({
    queryKey: getPhoneMetricsCallLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.metrics.call_logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneMetricsCallLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone.metrics.call_logs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.phone.metrics.call_logs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.metrics.call_logs.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneMetricsCallLogsQueryKey>
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
      ...getPhoneMetricsCallLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPhoneMetricsCallLogsCallIdQosQueryKey(
  args: InferRequestType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>,
) {
  return ['phone', '/phone/metrics/call_logs/:callId/qos', args] as const
}

export function getPhoneMetricsCallLogsCallIdQosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneMetricsCallLogsCallIdQosQueryKey>
  >({
    queryKey: getPhoneMetricsCallLogsCallIdQosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.metrics.call_logs[':callId'].qos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneMetricsCallLogsCallIdQos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneMetricsCallLogsCallIdQosQueryKey>
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
      ...getPhoneMetricsCallLogsCallIdQosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPhoneMetricsCallLogsCallIdQueryKey(
  args: InferRequestType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>,
) {
  return ['phone', '/phone/metrics/call_logs/:call_id', args] as const
}

export function getPhoneMetricsCallLogsCallIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneMetricsCallLogsCallIdQueryKey>
  >({
    queryKey: getPhoneMetricsCallLogsCallIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.metrics.call_logs[':call_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneMetricsCallLogsCallId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneMetricsCallLogsCallIdQueryKey>
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
      ...getPhoneMetricsCallLogsCallIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPhoneNumbersQueryKey(args: InferRequestType<typeof client.phone.numbers.$get>) {
  return ['phone', '/phone/numbers', args] as const
}

export function getPhoneNumbersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.numbers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.phone.numbers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.numbers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersQueryKey>
  >({
    queryKey: getPhoneNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.numbers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPhoneNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.phone.numbers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.numbers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneNumbersQueryKey>
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
    return { ...getPhoneNumbersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPhoneNumbersNumberIdQueryKey(
  args: InferRequestType<(typeof client.phone.numbers)[':numberId']['$get']>,
) {
  return ['phone', '/phone/numbers/:numberId', args] as const
}

export function getPhoneNumbersNumberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.phone.numbers)[':numberId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone.numbers)[':numberId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone.numbers)[':numberId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersNumberIdQueryKey>
  >({
    queryKey: getPhoneNumbersNumberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.numbers[':numberId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneNumbersNumberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.phone.numbers)[':numberId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.phone.numbers)[':numberId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.numbers)[':numberId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneNumbersNumberIdQueryKey>
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
      ...getPhoneNumbersNumberIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchPhoneNumbersNumberIdMutationKey() {
  return ['phone', '/phone/numbers/:numberId', 'PATCH'] as const
}

export function getPatchPhoneNumbersNumberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.numbers)[':numberId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.phone.numbers)[':numberId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPhoneNumbersNumberIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.phone.numbers)[':numberId']['$patch']>) {
      return parseResponse(client.phone.numbers[':numberId'].$patch(args, options))
    },
  })
}

export function createPatchPhoneNumbersNumberId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.phone.numbers)[':numberId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.numbers)[':numberId']['$patch']>,
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
    const mutationDefaults = getPatchPhoneNumbersNumberIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPhoneRecordingsQueryKey(
  args: InferRequestType<typeof client.phone.recordings.$get>,
) {
  return ['phone', '/phone/recordings', args] as const
}

export function getPhoneRecordingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.recordings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.phone.recordings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.recordings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneRecordingsQueryKey>
  >({
    queryKey: getPhoneRecordingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.recordings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPhoneRecordings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.recordings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.phone.recordings.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.recordings.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneRecordingsQueryKey>
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
    return { ...getPhoneRecordingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPhoneReportsOperationlogsQueryKey(
  args: InferRequestType<typeof client.phone.reports.operationlogs.$get>,
) {
  return ['phone', '/phone/reports/operationlogs', args] as const
}

export function getPhoneReportsOperationlogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone.reports.operationlogs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone.reports.operationlogs.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.reports.operationlogs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneReportsOperationlogsQueryKey>
  >({
    queryKey: getPhoneReportsOperationlogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.reports.operationlogs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneReportsOperationlogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone.reports.operationlogs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.phone.reports.operationlogs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.phone.reports.operationlogs.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneReportsOperationlogsQueryKey>
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
      ...getPhoneReportsOperationlogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPhoneSettingTemplatesQueryKey(
  args: InferRequestType<typeof client.phone.setting_templates.$get>,
) {
  return ['phone', '/phone/setting_templates', args] as const
}

export function getPhoneSettingTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone.setting_templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone.setting_templates.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.setting_templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneSettingTemplatesQueryKey>
  >({
    queryKey: getPhoneSettingTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.setting_templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneSettingTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone.setting_templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.phone.setting_templates.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.setting_templates.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneSettingTemplatesQueryKey>
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
      ...getPhoneSettingTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPhoneSettingTemplatesMutationKey() {
  return ['phone', '/phone/setting_templates', 'POST'] as const
}

export function getPostPhoneSettingTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.setting_templates.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.phone.setting_templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneSettingTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.phone.setting_templates.$post>) {
      return parseResponse(client.phone.setting_templates.$post(args, options))
    },
  })
}

export function createPostPhoneSettingTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.setting_templates.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.phone.setting_templates.$post>,
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
    const mutationDefaults = getPostPhoneSettingTemplatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPhoneSettingTemplatesTemplateIdQueryKey(
  args: InferRequestType<(typeof client.phone.setting_templates)[':templateId']['$get']>,
) {
  return ['phone', '/phone/setting_templates/:templateId', args] as const
}

export function getPhoneSettingTemplatesTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.setting_templates)[':templateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone.setting_templates)[':templateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone.setting_templates)[':templateId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneSettingTemplatesTemplateIdQueryKey>
  >({
    queryKey: getPhoneSettingTemplatesTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.setting_templates[':templateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneSettingTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.setting_templates)[':templateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.phone.setting_templates)[':templateId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.setting_templates)[':templateId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneSettingTemplatesTemplateIdQueryKey>
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
      ...getPhoneSettingTemplatesTemplateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchPhoneSettingTemplatesTemplateIdMutationKey() {
  return ['phone', '/phone/setting_templates/:templateId', 'PATCH'] as const
}

export function getPatchPhoneSettingTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.setting_templates)[':templateId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.phone.setting_templates)[':templateId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPhoneSettingTemplatesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.phone.setting_templates)[':templateId']['$patch']>,
    ) {
      return parseResponse(client.phone.setting_templates[':templateId'].$patch(args, options))
    },
  })
}

export function createPatchPhoneSettingTemplatesTemplateId<
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
                    ReturnType<(typeof client.phone.setting_templates)[':templateId']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.setting_templates)[':templateId']['$patch']>,
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
    const mutationDefaults = getPatchPhoneSettingTemplatesTemplateIdMutationOptions<
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

export function getPhoneSharedLineGroupsQueryKey(
  args: InferRequestType<typeof client.phone.shared_line_groups.$get>,
) {
  return ['phone', '/phone/shared_line_groups', args] as const
}

export function getPhoneSharedLineGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone.shared_line_groups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone.shared_line_groups.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.shared_line_groups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneSharedLineGroupsQueryKey>
  >({
    queryKey: getPhoneSharedLineGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.shared_line_groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneSharedLineGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone.shared_line_groups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.phone.shared_line_groups.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.shared_line_groups.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneSharedLineGroupsQueryKey>
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
      ...getPhoneSharedLineGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPhoneSharedLineGroupsMutationKey() {
  return ['phone', '/phone/shared_line_groups', 'POST'] as const
}

export function getPostPhoneSharedLineGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.shared_line_groups.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.phone.shared_line_groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneSharedLineGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.phone.shared_line_groups.$post>) {
      return parseResponse(client.phone.shared_line_groups.$post(args, options))
    },
  })
}

export function createPostPhoneSharedLineGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.phone.shared_line_groups.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.phone.shared_line_groups.$post>,
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
    const mutationDefaults = getPostPhoneSharedLineGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPhoneSharedLineGroupsSharedLineGroupIdQueryKey(
  args: InferRequestType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>,
) {
  return ['phone', '/phone/shared_line_groups/:sharedLineGroupId', args] as const
}

export function getPhoneSharedLineGroupsSharedLineGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneSharedLineGroupsSharedLineGroupIdQueryKey>
  >({
    queryKey: getPhoneSharedLineGroupsSharedLineGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.shared_line_groups[':sharedLineGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneSharedLineGroupsSharedLineGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneSharedLineGroupsSharedLineGroupIdQueryKey>
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
      ...getPhoneSharedLineGroupsSharedLineGroupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeletePhoneSharedLineGroupsSharedLineGroupIdMutationKey() {
  return ['phone', '/phone/shared_line_groups/:sharedLineGroupId', 'DELETE'] as const
}

export function getDeletePhoneSharedLineGroupsSharedLineGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneSharedLineGroupsSharedLineGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.phone.shared_line_groups[':sharedLineGroupId'].$delete(args, options),
      )
    },
  })
}

export function createDeletePhoneSharedLineGroupsSharedLineGroupId<
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
                      (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$delete']
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
    const mutationDefaults = getDeletePhoneSharedLineGroupsSharedLineGroupIdMutationOptions<
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

export function getPatchPhoneSharedLineGroupsSharedLineGroupIdMutationKey() {
  return ['phone', '/phone/shared_line_groups/:sharedLineGroupId', 'PATCH'] as const
}

export function getPatchPhoneSharedLineGroupsSharedLineGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPhoneSharedLineGroupsSharedLineGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$patch']
      >,
    ) {
      return parseResponse(
        client.phone.shared_line_groups[':sharedLineGroupId'].$patch(args, options),
      )
    },
  })
}

export function createPatchPhoneSharedLineGroupsSharedLineGroupId<
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
                      (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$patch']
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
    const mutationDefaults = getPatchPhoneSharedLineGroupsSharedLineGroupIdMutationOptions<
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

export function getPostPhoneSharedLineGroupsSharedLineGroupIdMembersMutationKey() {
  return ['phone', '/phone/shared_line_groups/:sharedLineGroupId/members', 'POST'] as const
}

export function getPostPhoneSharedLineGroupsSharedLineGroupIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneSharedLineGroupsSharedLineGroupIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members']['$post']
      >,
    ) {
      return parseResponse(
        client.phone.shared_line_groups[':sharedLineGroupId'].members.$post(args, options),
      )
    },
  })
}

export function createPostPhoneSharedLineGroupsSharedLineGroupIdMembers<
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
                    (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members']['$post']
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
    const mutationDefaults = getPostPhoneSharedLineGroupsSharedLineGroupIdMembersMutationOptions<
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

export function getDeletePhoneSharedLineGroupsSharedLineGroupIdMembersMutationKey() {
  return ['phone', '/phone/shared_line_groups/:sharedLineGroupId/members', 'DELETE'] as const
}

export function getDeletePhoneSharedLineGroupsSharedLineGroupIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneSharedLineGroupsSharedLineGroupIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members']['$delete']
      >,
    ) {
      return parseResponse(
        client.phone.shared_line_groups[':sharedLineGroupId'].members.$delete(args, options),
      )
    },
  })
}

export function createDeletePhoneSharedLineGroupsSharedLineGroupIdMembers<
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
                      (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members']['$delete']
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
    const mutationDefaults = getDeletePhoneSharedLineGroupsSharedLineGroupIdMembersMutationOptions<
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

export function getDeletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberIdMutationKey() {
  return [
    'phone',
    '/phone/shared_line_groups/:sharedLineGroupId/members/:memberId',
    'DELETE',
  ] as const
}

export function getDeletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members'][':memberId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members'][':memberId']['$delete']
      >,
    ) {
      return parseResponse(
        client.phone.shared_line_groups[':sharedLineGroupId'].members[':memberId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberId<
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
                      (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members'][':memberId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members'][':memberId']['$delete']
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
    const mutationDefaults =
      getDeletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberIdMutationOptions<
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

export function getPostPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersMutationKey() {
  return ['phone', '/phone/shared_line_groups/:sharedLineGroupId/phone_numbers', 'POST'] as const
}

export function getPostPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['phone_numbers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['phone_numbers']['$post']
      >,
    ) {
      return parseResponse(
        client.phone.shared_line_groups[':sharedLineGroupId'].phone_numbers.$post(args, options),
      )
    },
  })
}

export function createPostPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbers<
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
                    (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['phone_numbers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['phone_numbers']['$post']
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
    const mutationDefaults =
      getPostPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersMutationOptions<
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

export function getDeletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberIdMutationKey() {
  return [
    'phone',
    '/phone/shared_line_groups/:sharedLineGroupId/phone_numbers/:phoneNumberId',
    'DELETE',
  ] as const
}

export function getDeletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['phone_numbers'][':phoneNumberId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['phone_numbers'][':phoneNumberId']['$delete']
      >,
    ) {
      return parseResponse(
        client.phone.shared_line_groups[':sharedLineGroupId'].phone_numbers[
          ':phoneNumberId'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberId<
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
                      (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['phone_numbers'][':phoneNumberId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['phone_numbers'][':phoneNumberId']['$delete']
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
    const mutationDefaults =
      getDeletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberIdMutationOptions<
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

export function getPhoneSipTrunkTrunksQueryKey(
  args: InferRequestType<typeof client.phone.sip_trunk.trunks.$get>,
) {
  return ['phone', '/phone/sip_trunk/trunks', args] as const
}

export function getPhoneSipTrunkTrunksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sip_trunk.trunks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.phone.sip_trunk.trunks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.sip_trunk.trunks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneSipTrunkTrunksQueryKey>
  >({
    queryKey: getPhoneSipTrunkTrunksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.sip_trunk.trunks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneSipTrunkTrunks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sip_trunk.trunks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.phone.sip_trunk.trunks.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.sip_trunk.trunks.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneSipTrunkTrunksQueryKey>
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
    return { ...getPhoneSipTrunkTrunksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPhoneSitesQueryKey(args: InferRequestType<typeof client.phone.sites.$get>) {
  return ['phone', '/phone/sites', args] as const
}

export function getPhoneSitesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sites.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.phone.sites.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPhoneSitesQueryKey>
  >({
    queryKey: getPhoneSitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.sites.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPhoneSites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.phone.sites.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sites.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneSitesQueryKey>
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
    return { ...getPhoneSitesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPhoneSitesMutationKey() {
  return ['phone', '/phone/sites', 'POST'] as const
}

export function getPostPhoneSitesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sites.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.phone.sites.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneSitesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.phone.sites.$post>) {
      return parseResponse(client.phone.sites.$post(args, options))
    },
  })
}

export function createPostPhoneSites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sites.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.phone.sites.$post>,
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
    const mutationDefaults = getPostPhoneSitesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPhoneSitesSiteIdQueryKey(
  args: InferRequestType<(typeof client.phone.sites)[':siteId']['$get']>,
) {
  return ['phone', '/phone/sites/:siteId', args] as const
}

export function getPhoneSitesSiteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.phone.sites)[':siteId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone.sites)[':siteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.phone.sites)[':siteId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneSitesSiteIdQueryKey>
  >({
    queryKey: getPhoneSitesSiteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.sites[':siteId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneSitesSiteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.phone.sites)[':siteId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.phone.sites)[':siteId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.sites)[':siteId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneSitesSiteIdQueryKey>
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
    return { ...getPhoneSitesSiteIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeletePhoneSitesSiteIdMutationKey() {
  return ['phone', '/phone/sites/:siteId', 'DELETE'] as const
}

export function getDeletePhoneSitesSiteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.sites)[':siteId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.phone.sites)[':siteId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneSitesSiteIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.phone.sites)[':siteId']['$delete']>) {
      return parseResponse(client.phone.sites[':siteId'].$delete(args, options))
    },
  })
}

export function createDeletePhoneSitesSiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.phone.sites)[':siteId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.sites)[':siteId']['$delete']>,
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
    const mutationDefaults = getDeletePhoneSitesSiteIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchPhoneSitesSiteIdMutationKey() {
  return ['phone', '/phone/sites/:siteId', 'PATCH'] as const
}

export function getPatchPhoneSitesSiteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.sites)[':siteId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.phone.sites)[':siteId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPhoneSitesSiteIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.phone.sites)[':siteId']['$patch']>) {
      return parseResponse(client.phone.sites[':siteId'].$patch(args, options))
    },
  })
}

export function createPatchPhoneSitesSiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.phone.sites)[':siteId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.sites)[':siteId']['$patch']>,
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
    const mutationDefaults = getPatchPhoneSitesSiteIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPhoneUsersQueryKey(args: InferRequestType<typeof client.phone.users.$get>) {
  return ['phone', '/phone/users', args] as const
}

export function getPhoneUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.phone.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPhoneUsersQueryKey>
  >({
    queryKey: getPhoneUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPhoneUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.phone.users.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.users.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneUsersQueryKey>
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
    return { ...getPhoneUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPhoneUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.phone.users)[':userId']['$get']>,
) {
  return ['phone', '/phone/users/:userId', args] as const
}

export function getPhoneUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.phone.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.phone.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneUsersUserIdQueryKey>
  >({
    queryKey: getPhoneUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.users[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.phone.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.phone.users)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.users)[':userId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneUsersUserIdQueryKey>
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
    return { ...getPhoneUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchPhoneUsersUserIdMutationKey() {
  return ['phone', '/phone/users/:userId', 'PATCH'] as const
}

export function getPatchPhoneUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.users)[':userId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.phone.users)[':userId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPhoneUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.phone.users)[':userId']['$patch']>) {
      return parseResponse(client.phone.users[':userId'].$patch(args, options))
    },
  })
}

export function createPatchPhoneUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.phone.users)[':userId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.users)[':userId']['$patch']>,
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
    const mutationDefaults = getPatchPhoneUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPhoneUsersUserIdCallLogsQueryKey(
  args: InferRequestType<(typeof client.phone.users)[':userId']['call_logs']['$get']>,
) {
  return ['phone', '/phone/users/:userId/call_logs', args] as const
}

export function getPhoneUsersUserIdCallLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.users)[':userId']['call_logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone.users)[':userId']['call_logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone.users)[':userId']['call_logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneUsersUserIdCallLogsQueryKey>
  >({
    queryKey: getPhoneUsersUserIdCallLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.users[':userId'].call_logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneUsersUserIdCallLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.users)[':userId']['call_logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.phone.users)[':userId']['call_logs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.users)[':userId']['call_logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneUsersUserIdCallLogsQueryKey>
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
      ...getPhoneUsersUserIdCallLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeletePhoneUsersUserIdCallLogsCallLogIdMutationKey() {
  return ['phone', '/phone/users/:userId/call_logs/:callLogId', 'DELETE'] as const
}

export function getDeletePhoneUsersUserIdCallLogsCallLogIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.phone.users)[':userId']['call_logs'][':callLogId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneUsersUserIdCallLogsCallLogIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.users)[':userId']['call_logs'][':callLogId']['$delete']
      >,
    ) {
      return parseResponse(
        client.phone.users[':userId'].call_logs[':callLogId'].$delete(args, options),
      )
    },
  })
}

export function createDeletePhoneUsersUserIdCallLogsCallLogId<
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
                      (typeof client.phone.users)[':userId']['call_logs'][':callLogId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.users)[':userId']['call_logs'][':callLogId']['$delete']
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
    const mutationDefaults = getDeletePhoneUsersUserIdCallLogsCallLogIdMutationOptions<
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

export function getPostPhoneUsersUserIdCallingPlansMutationKey() {
  return ['phone', '/phone/users/:userId/calling_plans', 'POST'] as const
}

export function getPostPhoneUsersUserIdCallingPlansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone.users)[':userId']['calling_plans']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.phone.users)[':userId']['calling_plans']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneUsersUserIdCallingPlansMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.phone.users)[':userId']['calling_plans']['$post']>,
    ) {
      return parseResponse(client.phone.users[':userId'].calling_plans.$post(args, options))
    },
  })
}

export function createPostPhoneUsersUserIdCallingPlans<
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
                  ReturnType<(typeof client.phone.users)[':userId']['calling_plans']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.phone.users)[':userId']['calling_plans']['$post']>,
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
    const mutationDefaults = getPostPhoneUsersUserIdCallingPlansMutationOptions<
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

export function getDeletePhoneUsersUserIdCallingPlansTypeMutationKey() {
  return ['phone', '/phone/users/:userId/calling_plans/:type', 'DELETE'] as const
}

export function getDeletePhoneUsersUserIdCallingPlansTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.phone.users)[':userId']['calling_plans'][':type']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneUsersUserIdCallingPlansTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.users)[':userId']['calling_plans'][':type']['$delete']
      >,
    ) {
      return parseResponse(
        client.phone.users[':userId'].calling_plans[':type'].$delete(args, options),
      )
    },
  })
}

export function createDeletePhoneUsersUserIdCallingPlansType<
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
                      (typeof client.phone.users)[':userId']['calling_plans'][':type']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.users)[':userId']['calling_plans'][':type']['$delete']
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
    const mutationDefaults = getDeletePhoneUsersUserIdCallingPlansTypeMutationOptions<
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

export function getPostPhoneUsersUserIdPhoneNumbersMutationKey() {
  return ['phone', '/phone/users/:userId/phone_numbers', 'POST'] as const
}

export function getPostPhoneUsersUserIdPhoneNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone.users)[':userId']['phone_numbers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.phone.users)[':userId']['phone_numbers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneUsersUserIdPhoneNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.phone.users)[':userId']['phone_numbers']['$post']>,
    ) {
      return parseResponse(client.phone.users[':userId'].phone_numbers.$post(args, options))
    },
  })
}

export function createPostPhoneUsersUserIdPhoneNumbers<
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
                  ReturnType<(typeof client.phone.users)[':userId']['phone_numbers']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.phone.users)[':userId']['phone_numbers']['$post']>,
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
    const mutationDefaults = getPostPhoneUsersUserIdPhoneNumbersMutationOptions<
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

export function getDeletePhoneUsersUserIdPhoneNumbersPhoneNumberIdMutationKey() {
  return ['phone', '/phone/users/:userId/phone_numbers/:phoneNumberId', 'DELETE'] as const
}

export function getDeletePhoneUsersUserIdPhoneNumbersPhoneNumberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.phone.users)[':userId']['phone_numbers'][':phoneNumberId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneUsersUserIdPhoneNumbersPhoneNumberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.users)[':userId']['phone_numbers'][':phoneNumberId']['$delete']
      >,
    ) {
      return parseResponse(
        client.phone.users[':userId'].phone_numbers[':phoneNumberId'].$delete(args, options),
      )
    },
  })
}

export function createDeletePhoneUsersUserIdPhoneNumbersPhoneNumberId<
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
                      (typeof client.phone.users)[':userId']['phone_numbers'][':phoneNumberId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.users)[':userId']['phone_numbers'][':phoneNumberId']['$delete']
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
    const mutationDefaults = getDeletePhoneUsersUserIdPhoneNumbersPhoneNumberIdMutationOptions<
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

export function getPhoneUsersUserIdRecordingsQueryKey(
  args: InferRequestType<(typeof client.phone.users)[':userId']['recordings']['$get']>,
) {
  return ['phone', '/phone/users/:userId/recordings', args] as const
}

export function getPhoneUsersUserIdRecordingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.users)[':userId']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone.users)[':userId']['recordings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone.users)[':userId']['recordings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneUsersUserIdRecordingsQueryKey>
  >({
    queryKey: getPhoneUsersUserIdRecordingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.users[':userId'].recordings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneUsersUserIdRecordings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.users)[':userId']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.phone.users)[':userId']['recordings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.users)[':userId']['recordings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneUsersUserIdRecordingsQueryKey>
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
      ...getPhoneUsersUserIdRecordingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPhoneUsersUserIdSettingsQueryKey(
  args: InferRequestType<(typeof client.phone.users)[':userId']['settings']['$get']>,
) {
  return ['phone', '/phone/users/:userId/settings', args] as const
}

export function getPhoneUsersUserIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.users)[':userId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone.users)[':userId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone.users)[':userId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneUsersUserIdSettingsQueryKey>
  >({
    queryKey: getPhoneUsersUserIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.users[':userId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneUsersUserIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.users)[':userId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.phone.users)[':userId']['settings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.users)[':userId']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneUsersUserIdSettingsQueryKey>
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
      ...getPhoneUsersUserIdSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPhoneUsersUserIdSettingsSettingTypeMutationKey() {
  return ['phone', '/phone/users/:userId/settings/:settingType', 'POST'] as const
}

export function getPostPhoneUsersUserIdSettingsSettingTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.phone.users)[':userId']['settings'][':settingType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneUsersUserIdSettingsSettingTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.users)[':userId']['settings'][':settingType']['$post']
      >,
    ) {
      return parseResponse(
        client.phone.users[':userId'].settings[':settingType'].$post(args, options),
      )
    },
  })
}

export function createPostPhoneUsersUserIdSettingsSettingType<
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
                    (typeof client.phone.users)[':userId']['settings'][':settingType']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.phone.users)[':userId']['settings'][':settingType']['$post']
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
    const mutationDefaults = getPostPhoneUsersUserIdSettingsSettingTypeMutationOptions<
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

export function getDeletePhoneUsersUserIdSettingsSettingTypeMutationKey() {
  return ['phone', '/phone/users/:userId/settings/:settingType', 'DELETE'] as const
}

export function getDeletePhoneUsersUserIdSettingsSettingTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.phone.users)[':userId']['settings'][':settingType']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneUsersUserIdSettingsSettingTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.users)[':userId']['settings'][':settingType']['$delete']
      >,
    ) {
      return parseResponse(
        client.phone.users[':userId'].settings[':settingType'].$delete(args, options),
      )
    },
  })
}

export function createDeletePhoneUsersUserIdSettingsSettingType<
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
                      (typeof client.phone.users)[':userId']['settings'][':settingType']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.users)[':userId']['settings'][':settingType']['$delete']
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
    const mutationDefaults = getDeletePhoneUsersUserIdSettingsSettingTypeMutationOptions<
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

export function getPatchPhoneUsersUserIdSettingsSettingTypeMutationKey() {
  return ['phone', '/phone/users/:userId/settings/:settingType', 'PATCH'] as const
}

export function getPatchPhoneUsersUserIdSettingsSettingTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.phone.users)[':userId']['settings'][':settingType']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPhoneUsersUserIdSettingsSettingTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone.users)[':userId']['settings'][':settingType']['$patch']
      >,
    ) {
      return parseResponse(
        client.phone.users[':userId'].settings[':settingType'].$patch(args, options),
      )
    },
  })
}

export function createPatchPhoneUsersUserIdSettingsSettingType<
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
                      (typeof client.phone.users)[':userId']['settings'][':settingType']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.phone.users)[':userId']['settings'][':settingType']['$patch']
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
    const mutationDefaults = getPatchPhoneUsersUserIdSettingsSettingTypeMutationOptions<
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

export function getPhoneUsersUserIdVoiceMailsQueryKey(
  args: InferRequestType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>,
) {
  return ['phone', '/phone/users/:userId/voice_mails', args] as const
}

export function getPhoneUsersUserIdVoiceMailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneUsersUserIdVoiceMailsQueryKey>
  >({
    queryKey: getPhoneUsersUserIdVoiceMailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone.users[':userId'].voice_mails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneUsersUserIdVoiceMails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneUsersUserIdVoiceMailsQueryKey>
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
      ...getPhoneUsersUserIdVoiceMailsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeletePhoneVoiceMailsVoicemailIdMutationKey() {
  return ['phone', '/phone/voice_mails/:voicemailId', 'DELETE'] as const
}

export function getDeletePhoneVoiceMailsVoicemailIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone.voice_mails)[':voicemailId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.phone.voice_mails)[':voicemailId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneVoiceMailsVoicemailIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.phone.voice_mails)[':voicemailId']['$delete']>,
    ) {
      return parseResponse(client.phone.voice_mails[':voicemailId'].$delete(args, options))
    },
  })
}

export function createDeletePhoneVoiceMailsVoicemailId<
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
                  Awaited<ReturnType<(typeof client.phone.voice_mails)[':voicemailId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.voice_mails)[':voicemailId']['$delete']>,
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
    const mutationDefaults = getDeletePhoneVoiceMailsVoicemailIdMutationOptions<
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

export function getReportActivitiesQueryKey(
  args: InferRequestType<typeof client.report.activities.$get>,
) {
  return ['report', '/report/activities', args] as const
}

export function getReportActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.activities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.report.activities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.activities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportActivitiesQueryKey>
  >({
    queryKey: getReportActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.activities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReportActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.report.activities.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.activities.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportActivitiesQueryKey>
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
    return { ...getReportActivitiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReportCloudRecordingQueryKey(
  args: InferRequestType<typeof client.report.cloud_recording.$get>,
) {
  return ['report', '/report/cloud_recording', args] as const
}

export function getReportCloudRecordingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.cloud_recording.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.cloud_recording.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.report.cloud_recording.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportCloudRecordingQueryKey>
  >({
    queryKey: getReportCloudRecordingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.cloud_recording.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportCloudRecording<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.cloud_recording.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.report.cloud_recording.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.cloud_recording.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportCloudRecordingQueryKey>
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
      ...getReportCloudRecordingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getReportDailyQueryKey(args: InferRequestType<typeof client.report.daily.$get>) {
  return ['report', '/report/daily', args] as const
}

export function getReportDailyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.daily.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.report.daily.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.daily.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportDailyQueryKey>
  >({
    queryKey: getReportDailyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.daily.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReportDaily<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.daily.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.report.daily.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.daily.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getReportDailyQueryKey>
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
    return { ...getReportDailyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReportMeetingsMeetingIdQueryKey(
  args: InferRequestType<(typeof client.report.meetings)[':meetingId']['$get']>,
) {
  return ['report', '/report/meetings/:meetingId', args] as const
}

export function getReportMeetingsMeetingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report.meetings)[':meetingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportMeetingsMeetingIdQueryKey>
  >({
    queryKey: getReportMeetingsMeetingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.meetings[':meetingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportMeetingsMeetingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.report.meetings)[':meetingId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportMeetingsMeetingIdQueryKey>
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
      ...getReportMeetingsMeetingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getReportMeetingsMeetingIdParticipantsQueryKey(
  args: InferRequestType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>,
) {
  return ['report', '/report/meetings/:meetingId/participants', args] as const
}

export function getReportMeetingsMeetingIdParticipantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportMeetingsMeetingIdParticipantsQueryKey>
  >({
    queryKey: getReportMeetingsMeetingIdParticipantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.meetings[':meetingId'].participants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportMeetingsMeetingIdParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.report.meetings)[':meetingId']['participants']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportMeetingsMeetingIdParticipantsQueryKey>
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
      ...getReportMeetingsMeetingIdParticipantsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getReportMeetingsMeetingIdPollsQueryKey(
  args: InferRequestType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>,
) {
  return ['report', '/report/meetings/:meetingId/polls', args] as const
}

export function getReportMeetingsMeetingIdPollsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportMeetingsMeetingIdPollsQueryKey>
  >({
    queryKey: getReportMeetingsMeetingIdPollsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.meetings[':meetingId'].polls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportMeetingsMeetingIdPolls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportMeetingsMeetingIdPollsQueryKey>
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
      ...getReportMeetingsMeetingIdPollsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getReportOperationlogsQueryKey(
  args: InferRequestType<typeof client.report.operationlogs.$get>,
) {
  return ['report', '/report/operationlogs', args] as const
}

export function getReportOperationlogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.operationlogs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.report.operationlogs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.operationlogs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportOperationlogsQueryKey>
  >({
    queryKey: getReportOperationlogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.operationlogs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReportOperationlogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.operationlogs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.report.operationlogs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.operationlogs.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportOperationlogsQueryKey>
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
    return { ...getReportOperationlogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReportTelephoneQueryKey(
  args: InferRequestType<typeof client.report.telephone.$get>,
) {
  return ['report', '/report/telephone', args] as const
}

export function getReportTelephoneQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.telephone.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.report.telephone.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.telephone.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportTelephoneQueryKey>
  >({
    queryKey: getReportTelephoneQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.telephone.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReportTelephone<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.telephone.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.report.telephone.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.telephone.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportTelephoneQueryKey>
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
    return { ...getReportTelephoneQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReportUsersQueryKey(args: InferRequestType<typeof client.report.users.$get>) {
  return ['report', '/report/users', args] as const
}

export function getReportUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.report.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportUsersQueryKey>
  >({
    queryKey: getReportUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReportUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.report.users.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.users.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getReportUsersQueryKey>
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
    return { ...getReportUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReportUsersUserIdMeetingsQueryKey(
  args: InferRequestType<(typeof client.report.users)[':userId']['meetings']['$get']>,
) {
  return ['report', '/report/users/:userId/meetings', args] as const
}

export function getReportUsersUserIdMeetingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.users)[':userId']['meetings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report.users)[':userId']['meetings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.report.users)[':userId']['meetings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportUsersUserIdMeetingsQueryKey>
  >({
    queryKey: getReportUsersUserIdMeetingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.users[':userId'].meetings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportUsersUserIdMeetings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.users)[':userId']['meetings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.report.users)[':userId']['meetings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.users)[':userId']['meetings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportUsersUserIdMeetingsQueryKey>
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
      ...getReportUsersUserIdMeetingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getReportWebinarsWebinarIdQueryKey(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['$get']>,
) {
  return ['report', '/report/webinars/:webinarId', args] as const
}

export function getReportWebinarsWebinarIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportWebinarsWebinarIdQueryKey>
  >({
    queryKey: getReportWebinarsWebinarIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.webinars[':webinarId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportWebinarsWebinarId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.report.webinars)[':webinarId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportWebinarsWebinarIdQueryKey>
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
      ...getReportWebinarsWebinarIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getReportWebinarsWebinarIdParticipantsQueryKey(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>,
) {
  return ['report', '/report/webinars/:webinarId/participants', args] as const
}

export function getReportWebinarsWebinarIdParticipantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportWebinarsWebinarIdParticipantsQueryKey>
  >({
    queryKey: getReportWebinarsWebinarIdParticipantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.webinars[':webinarId'].participants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportWebinarsWebinarIdParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.report.webinars)[':webinarId']['participants']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportWebinarsWebinarIdParticipantsQueryKey>
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
      ...getReportWebinarsWebinarIdParticipantsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getReportWebinarsWebinarIdPollsQueryKey(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>,
) {
  return ['report', '/report/webinars/:webinarId/polls', args] as const
}

export function getReportWebinarsWebinarIdPollsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportWebinarsWebinarIdPollsQueryKey>
  >({
    queryKey: getReportWebinarsWebinarIdPollsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.webinars[':webinarId'].polls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportWebinarsWebinarIdPolls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportWebinarsWebinarIdPollsQueryKey>
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
      ...getReportWebinarsWebinarIdPollsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getReportWebinarsWebinarIdQaQueryKey(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>,
) {
  return ['report', '/report/webinars/:webinarId/qa', args] as const
}

export function getReportWebinarsWebinarIdQaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportWebinarsWebinarIdQaQueryKey>
  >({
    queryKey: getReportWebinarsWebinarIdQaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.webinars[':webinarId'].qa.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportWebinarsWebinarIdQa<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportWebinarsWebinarIdQaQueryKey>
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
      ...getReportWebinarsWebinarIdQaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRolesQueryKey() {
  return ['roles', '/roles'] as const
}

export function getRolesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRolesQueryKey>
  >({
    queryKey: getRolesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.roles.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRoles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getRolesQueryKey>
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
    return { ...getRolesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$post>>>>>,
          TError,
          InferRequestType<typeof client.roles.$post>,
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
    const mutationDefaults = getPostRolesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRolesRoleIdQueryKey(
  args: InferRequestType<(typeof client.roles)[':roleId']['$get']>,
) {
  return ['roles', '/roles/:roleId', args] as const
}

export function getRolesRoleIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.roles)[':roleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRolesRoleIdQueryKey>
  >({
    queryKey: getRolesRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.roles[':roleId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRolesRoleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.roles)[':roleId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRolesRoleIdQueryKey>
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
    return { ...getRolesRoleIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteRolesRoleIdMutationKey() {
  return ['roles', '/roles/:roleId', 'DELETE'] as const
}

export function getDeleteRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.roles)[':roleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRolesRoleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.roles)[':roleId']['$delete']>) {
      return parseResponse(client.roles[':roleId'].$delete(args, options))
    },
  })
}

export function createDeleteRolesRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.roles)[':roleId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.roles)[':roleId']['$delete']>,
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
    const mutationDefaults = getDeleteRolesRoleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchRolesRoleIdMutationKey() {
  return ['roles', '/roles/:roleId', 'PATCH'] as const
}

export function getPatchRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.roles)[':roleId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRolesRoleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.roles)[':roleId']['$patch']>) {
      return parseResponse(client.roles[':roleId'].$patch(args, options))
    },
  })
}

export function createPatchRolesRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.roles)[':roleId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.roles)[':roleId']['$patch']>,
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
    const mutationDefaults = getPatchRolesRoleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRolesRoleIdMembersQueryKey(
  args: InferRequestType<(typeof client.roles)[':roleId']['members']['$get']>,
) {
  return ['roles', '/roles/:roleId/members', args] as const
}

export function getRolesRoleIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.roles)[':roleId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.roles)[':roleId']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRolesRoleIdMembersQueryKey>
  >({
    queryKey: getRolesRoleIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.roles[':roleId'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRolesRoleIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.roles)[':roleId']['members']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.roles)[':roleId']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRolesRoleIdMembersQueryKey>
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
    return { ...getRolesRoleIdMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRolesRoleIdMembersMutationKey() {
  return ['roles', '/roles/:roleId/members', 'POST'] as const
}

export function getPostRolesRoleIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.roles)[':roleId']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.roles)[':roleId']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRolesRoleIdMembersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.roles)[':roleId']['members']['$post']>) {
      return parseResponse(client.roles[':roleId'].members.$post(args, options))
    },
  })
}

export function createPostRolesRoleIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.roles)[':roleId']['members']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.roles)[':roleId']['members']['$post']>,
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
    const mutationDefaults = getPostRolesRoleIdMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteRolesRoleIdMembersMemberIdMutationKey() {
  return ['roles', '/roles/:roleId/members/:memberId', 'DELETE'] as const
}

export function getDeleteRolesRoleIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.roles)[':roleId']['members'][':memberId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.roles)[':roleId']['members'][':memberId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRolesRoleIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.roles)[':roleId']['members'][':memberId']['$delete']>,
    ) {
      return parseResponse(client.roles[':roleId'].members[':memberId'].$delete(args, options))
    },
  })
}

export function createDeleteRolesRoleIdMembersMemberId<
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
                    ReturnType<(typeof client.roles)[':roleId']['members'][':memberId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.roles)[':roleId']['members'][':memberId']['$delete']>,
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
    const mutationDefaults = getDeleteRolesRoleIdMembersMemberIdMutationOptions<
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

export function getRoomsQueryKey(args: InferRequestType<typeof client.rooms.$get>) {
  return ['rooms', '/rooms', args] as const
}

export function getRoomsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rooms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRoomsQueryKey>
  >({
    queryKey: getRoomsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rooms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRooms<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rooms.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getRoomsQueryKey>
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
    return { ...getRoomsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRoomsMutationKey() {
  return ['rooms', '/rooms', 'POST'] as const
}

export function getPostRoomsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$post>>>>>,
    TError,
    InferRequestType<typeof client.rooms.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRoomsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rooms.$post>) {
      return parseResponse(client.rooms.$post(args, options))
    },
  })
}

export function createPostRooms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$post>>>>>,
          TError,
          InferRequestType<typeof client.rooms.$post>,
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
    const mutationDefaults = getPostRoomsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRoomsAccountProfileQueryKey() {
  return ['rooms', '/rooms/account_profile'] as const
}

export function getRoomsAccountProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_profile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_profile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsAccountProfileQueryKey>
  >({
    queryKey: getRoomsAccountProfileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.rooms.account_profile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRoomsAccountProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_profile.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRoomsAccountProfileQueryKey>
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
    return { ...getRoomsAccountProfileQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPatchRoomsAccountProfileMutationKey() {
  return ['rooms', '/rooms/account_profile', 'PATCH'] as const
}

export function getPatchRoomsAccountProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_profile.$patch>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.rooms.account_profile.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchRoomsAccountProfileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rooms.account_profile.$patch>) {
      return parseResponse(client.rooms.account_profile.$patch(args, options))
    },
  })
}

export function createPatchRoomsAccountProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.rooms.account_profile.$patch>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.rooms.account_profile.$patch>,
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
    const mutationDefaults = getPatchRoomsAccountProfileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRoomsAccountSettingsQueryKey(
  args: InferRequestType<typeof client.rooms.account_settings.$get>,
) {
  return ['rooms', '/rooms/account_settings', args] as const
}

export function getRoomsAccountSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rooms.account_settings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsAccountSettingsQueryKey>
  >({
    queryKey: getRoomsAccountSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rooms.account_settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRoomsAccountSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rooms.account_settings.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_settings.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRoomsAccountSettingsQueryKey>
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
      ...getRoomsAccountSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchRoomsAccountSettingsMutationKey() {
  return ['rooms', '/rooms/account_settings', 'PATCH'] as const
}

export function getPatchRoomsAccountSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_settings.$patch>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.rooms.account_settings.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchRoomsAccountSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rooms.account_settings.$patch>) {
      return parseResponse(client.rooms.account_settings.$patch(args, options))
    },
  })
}

export function createPatchRoomsAccountSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.rooms.account_settings.$patch>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.rooms.account_settings.$patch>,
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
    const mutationDefaults = getPatchRoomsAccountSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRoomsDigitalSignageQueryKey(
  args: InferRequestType<typeof client.rooms.digital_signage.$get>,
) {
  return ['rooms', '/rooms/digital_signage', args] as const
}

export function getRoomsDigitalSignageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.digital_signage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rooms.digital_signage.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rooms.digital_signage.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsDigitalSignageQueryKey>
  >({
    queryKey: getRoomsDigitalSignageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rooms.digital_signage.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRoomsDigitalSignage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.digital_signage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rooms.digital_signage.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rooms.digital_signage.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRoomsDigitalSignageQueryKey>
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
    return { ...getRoomsDigitalSignageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchRoomsEventsMutationKey() {
  return ['rooms', '/rooms/events', 'PATCH'] as const
}

export function getPatchRoomsEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.events.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.rooms.events.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchRoomsEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rooms.events.$patch>) {
      return parseResponse(client.rooms.events.$patch(args, options))
    },
  })
}

export function createPatchRoomsEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.events.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.rooms.events.$patch>,
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
    const mutationDefaults = getPatchRoomsEventsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRoomsLocationsQueryKey(
  args: InferRequestType<typeof client.rooms.locations.$get>,
) {
  return ['rooms', '/rooms/locations', args] as const
}

export function getRoomsLocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rooms.locations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsLocationsQueryKey>
  >({
    queryKey: getRoomsLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rooms.locations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRoomsLocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rooms.locations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRoomsLocationsQueryKey>
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
    return { ...getRoomsLocationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRoomsLocationsMutationKey() {
  return ['rooms', '/rooms/locations', 'POST'] as const
}

export function getPostRoomsLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rooms.locations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRoomsLocationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rooms.locations.$post>) {
      return parseResponse(client.rooms.locations.$post(args, options))
    },
  })
}

export function createPostRoomsLocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.rooms.locations.$post>,
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
    const mutationDefaults = getPostRoomsLocationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRoomsLocationsStructureQueryKey() {
  return ['rooms', '/rooms/locations/structure'] as const
}

export function getRoomsLocationsStructureQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.structure.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.structure.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsLocationsStructureQueryKey>
  >({
    queryKey: getRoomsLocationsStructureQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.rooms.locations.structure.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRoomsLocationsStructure<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.structure.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rooms.locations.structure.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRoomsLocationsStructureQueryKey>
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
    return { ...getRoomsLocationsStructureQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPatchRoomsLocationsStructureMutationKey() {
  return ['rooms', '/rooms/locations/structure', 'PATCH'] as const
}

export function getPatchRoomsLocationsStructureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.structure.$patch>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.rooms.locations.structure.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchRoomsLocationsStructureMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rooms.locations.structure.$patch>) {
      return parseResponse(client.rooms.locations.structure.$patch(args, options))
    },
  })
}

export function createPatchRoomsLocationsStructure<
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
                  Awaited<ReturnType<typeof client.rooms.locations.structure.$patch>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.rooms.locations.structure.$patch>,
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
    const mutationDefaults = getPatchRoomsLocationsStructureMutationOptions<
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

export function getRoomsLocationsLocationIdQueryKey(
  args: InferRequestType<(typeof client.rooms.locations)[':locationId']['$get']>,
) {
  return ['rooms', '/rooms/locations/:locationId', args] as const
}

export function getRoomsLocationsLocationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rooms.locations)[':locationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsLocationsLocationIdQueryKey>
  >({
    queryKey: getRoomsLocationsLocationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rooms.locations[':locationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRoomsLocationsLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.rooms.locations)[':locationId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRoomsLocationsLocationIdQueryKey>
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
      ...getRoomsLocationsLocationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchRoomsLocationsLocationIdMutationKey() {
  return ['rooms', '/rooms/locations/:locationId', 'PATCH'] as const
}

export function getPatchRoomsLocationsLocationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.rooms.locations)[':locationId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRoomsLocationsLocationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.rooms.locations)[':locationId']['$patch']>,
    ) {
      return parseResponse(client.rooms.locations[':locationId'].$patch(args, options))
    },
  })
}

export function createPatchRoomsLocationsLocationId<
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
                Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.rooms.locations)[':locationId']['$patch']>,
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
    const mutationDefaults = getPatchRoomsLocationsLocationIdMutationOptions<
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

export function getPutRoomsLocationsLocationIdLocationMutationKey() {
  return ['rooms', '/rooms/locations/:locationId/location', 'PUT'] as const
}

export function getPutRoomsLocationsLocationIdLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['location']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.rooms.locations)[':locationId']['location']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRoomsLocationsLocationIdLocationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.rooms.locations)[':locationId']['location']['$put']>,
    ) {
      return parseResponse(client.rooms.locations[':locationId'].location.$put(args, options))
    },
  })
}

export function createPutRoomsLocationsLocationIdLocation<
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
                    ReturnType<(typeof client.rooms.locations)[':locationId']['location']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.rooms.locations)[':locationId']['location']['$put']>,
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
    const mutationDefaults = getPutRoomsLocationsLocationIdLocationMutationOptions<
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

export function getRoomsLocationsLocationIdSettingsQueryKey(
  args: InferRequestType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>,
) {
  return ['rooms', '/rooms/locations/:locationId/settings', args] as const
}

export function getRoomsLocationsLocationIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsLocationsLocationIdSettingsQueryKey>
  >({
    queryKey: getRoomsLocationsLocationIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rooms.locations[':locationId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRoomsLocationsLocationIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRoomsLocationsLocationIdSettingsQueryKey>
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
      ...getRoomsLocationsLocationIdSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchRoomsLocationsLocationIdSettingsMutationKey() {
  return ['rooms', '/rooms/locations/:locationId/settings', 'PATCH'] as const
}

export function getPatchRoomsLocationsLocationIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.rooms.locations)[':locationId']['settings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRoomsLocationsLocationIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.rooms.locations)[':locationId']['settings']['$patch']>,
    ) {
      return parseResponse(client.rooms.locations[':locationId'].settings.$patch(args, options))
    },
  })
}

export function createPatchRoomsLocationsLocationIdSettings<
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
                    ReturnType<(typeof client.rooms.locations)[':locationId']['settings']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.rooms.locations)[':locationId']['settings']['$patch']>,
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
    const mutationDefaults = getPatchRoomsLocationsLocationIdSettingsMutationOptions<
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

export function getPatchRoomsIdEventsMutationKey() {
  return ['rooms', '/rooms/:id/events', 'PATCH'] as const
}

export function getPatchRoomsIdEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':id']['events']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.rooms)[':id']['events']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRoomsIdEventsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rooms)[':id']['events']['$patch']>) {
      return parseResponse(client.rooms[':id'].events.$patch(args, options))
    },
  })
}

export function createPatchRoomsIdEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rooms)[':id']['events']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.rooms)[':id']['events']['$patch']>,
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
    const mutationDefaults = getPatchRoomsIdEventsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRoomsRoomIdQueryKey(
  args: InferRequestType<(typeof client.rooms)[':roomId']['$get']>,
) {
  return ['rooms', '/rooms/:roomId', args] as const
}

export function getRoomsRoomIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rooms)[':roomId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsRoomIdQueryKey>
  >({
    queryKey: getRoomsRoomIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rooms[':roomId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRoomsRoomId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.rooms)[':roomId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRoomsRoomIdQueryKey>
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
    return { ...getRoomsRoomIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteRoomsRoomIdMutationKey() {
  return ['rooms', '/rooms/:roomId', 'DELETE'] as const
}

export function getDeleteRoomsRoomIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.rooms)[':roomId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRoomsRoomIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rooms)[':roomId']['$delete']>) {
      return parseResponse(client.rooms[':roomId'].$delete(args, options))
    },
  })
}

export function createDeleteRoomsRoomId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.rooms)[':roomId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.rooms)[':roomId']['$delete']>,
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
    const mutationDefaults = getDeleteRoomsRoomIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchRoomsRoomIdMutationKey() {
  return ['rooms', '/rooms/:roomId', 'PATCH'] as const
}

export function getPatchRoomsRoomIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.rooms)[':roomId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRoomsRoomIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rooms)[':roomId']['$patch']>) {
      return parseResponse(client.rooms[':roomId'].$patch(args, options))
    },
  })
}

export function createPatchRoomsRoomId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.rooms)[':roomId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.rooms)[':roomId']['$patch']>,
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
    const mutationDefaults = getPatchRoomsRoomIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRoomsRoomIdDevicesQueryKey(
  args: InferRequestType<(typeof client.rooms)[':roomId']['devices']['$get']>,
) {
  return ['rooms', '/rooms/:roomId/devices', args] as const
}

export function getRoomsRoomIdDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['devices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rooms)[':roomId']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rooms)[':roomId']['devices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsRoomIdDevicesQueryKey>
  >({
    queryKey: getRoomsRoomIdDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rooms[':roomId'].devices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRoomsRoomIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['devices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.rooms)[':roomId']['devices']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rooms)[':roomId']['devices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRoomsRoomIdDevicesQueryKey>
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
    return { ...getRoomsRoomIdDevicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutRoomsRoomIdDevicesDeviceIdAppVersionMutationKey() {
  return ['rooms', '/rooms/:roomId/devices/:deviceId/app_version', 'PUT'] as const
}

export function getPutRoomsRoomIdDevicesDeviceIdAppVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.rooms)[':roomId']['devices'][':deviceId']['app_version']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRoomsRoomIdDevicesDeviceIdAppVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rooms)[':roomId']['devices'][':deviceId']['app_version']['$put']
      >,
    ) {
      return parseResponse(
        client.rooms[':roomId'].devices[':deviceId'].app_version.$put(args, options),
      )
    },
  })
}

export function createPutRoomsRoomIdDevicesDeviceIdAppVersion<
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
                      (typeof client.rooms)[':roomId']['devices'][':deviceId']['app_version']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.rooms)[':roomId']['devices'][':deviceId']['app_version']['$put']
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
    const mutationDefaults = getPutRoomsRoomIdDevicesDeviceIdAppVersionMutationOptions<
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

export function getPutRoomsRoomIdLocationMutationKey() {
  return ['rooms', '/rooms/:roomId/location', 'PUT'] as const
}

export function getPutRoomsRoomIdLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms)[':roomId']['location']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.rooms)[':roomId']['location']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRoomsRoomIdLocationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rooms)[':roomId']['location']['$put']>) {
      return parseResponse(client.rooms[':roomId'].location.$put(args, options))
    },
  })
}

export function createPutRoomsRoomIdLocation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.rooms)[':roomId']['location']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.rooms)[':roomId']['location']['$put']>,
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
    const mutationDefaults = getPutRoomsRoomIdLocationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRoomsRoomIdSettingsQueryKey(
  args: InferRequestType<(typeof client.rooms)[':roomId']['settings']['$get']>,
) {
  return ['rooms', '/rooms/:roomId/settings', args] as const
}

export function getRoomsRoomIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rooms)[':roomId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rooms)[':roomId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rooms)[':roomId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsRoomIdSettingsQueryKey>
  >({
    queryKey: getRoomsRoomIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rooms[':roomId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRoomsRoomIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rooms)[':roomId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.rooms)[':roomId']['settings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rooms)[':roomId']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRoomsRoomIdSettingsQueryKey>
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
    return { ...getRoomsRoomIdSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchRoomsRoomIdSettingsMutationKey() {
  return ['rooms', '/rooms/:roomId/settings', 'PATCH'] as const
}

export function getPatchRoomsRoomIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rooms)[':roomId']['settings']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.rooms)[':roomId']['settings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRoomsRoomIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.rooms)[':roomId']['settings']['$patch']>,
    ) {
      return parseResponse(client.rooms[':roomId'].settings.$patch(args, options))
    },
  })
}

export function createPatchRoomsRoomIdSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.rooms)[':roomId']['settings']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.rooms)[':roomId']['settings']['$patch']>,
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
    const mutationDefaults = getPatchRoomsRoomIdSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSipPhonesQueryKey(args: InferRequestType<typeof client.sip_phones.$get>) {
  return ['sip_phones', '/sip_phones', args] as const
}

export function getSipPhonesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_phones.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sip_phones.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_phones.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSipPhonesQueryKey>
  >({
    queryKey: getSipPhonesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sip_phones.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSipPhones<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_phones.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sip_phones.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_phones.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSipPhonesQueryKey>
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
    return { ...getSipPhonesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSipPhonesMutationKey() {
  return ['sip_phones', '/sip_phones', 'POST'] as const
}

export function getPostSipPhonesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_phones.$post>>>>>,
    TError,
    InferRequestType<typeof client.sip_phones.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSipPhonesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sip_phones.$post>) {
      return parseResponse(client.sip_phones.$post(args, options))
    },
  })
}

export function createPostSipPhones<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_phones.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sip_phones.$post>,
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
    const mutationDefaults = getPostSipPhonesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteSipPhonesPhoneIdMutationKey() {
  return ['sip_phones', '/sip_phones/:phoneId', 'DELETE'] as const
}

export function getDeleteSipPhonesPhoneIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sip_phones)[':phoneId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sip_phones)[':phoneId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSipPhonesPhoneIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sip_phones)[':phoneId']['$delete']>) {
      return parseResponse(client.sip_phones[':phoneId'].$delete(args, options))
    },
  })
}

export function createDeleteSipPhonesPhoneId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.sip_phones)[':phoneId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sip_phones)[':phoneId']['$delete']>,
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
    const mutationDefaults = getDeleteSipPhonesPhoneIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchSipPhonesPhoneIdMutationKey() {
  return ['sip_phones', '/sip_phones/:phoneId', 'PATCH'] as const
}

export function getPatchSipPhonesPhoneIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sip_phones)[':phoneId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sip_phones)[':phoneId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSipPhonesPhoneIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sip_phones)[':phoneId']['$patch']>) {
      return parseResponse(client.sip_phones[':phoneId'].$patch(args, options))
    },
  })
}

export function createPatchSipPhonesPhoneId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.sip_phones)[':phoneId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sip_phones)[':phoneId']['$patch']>,
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
    const mutationDefaults = getPatchSipPhonesPhoneIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSipTrunkNumbersQueryKey() {
  return ['sip_trunk', '/sip_trunk/numbers'] as const
}

export function getSipTrunkNumbersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_trunk.numbers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_trunk.numbers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSipTrunkNumbersQueryKey>
  >({
    queryKey: getSipTrunkNumbersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sip_trunk.numbers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSipTrunkNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_trunk.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sip_trunk.numbers.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSipTrunkNumbersQueryKey>
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
    return { ...getSipTrunkNumbersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getTrackingFieldsQueryKey() {
  return ['tracking_fields', '/tracking_fields'] as const
}

export function getTrackingFieldsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_fields.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_fields.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingFieldsQueryKey>
  >({
    queryKey: getTrackingFieldsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tracking_fields.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTrackingFields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_fields.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tracking_fields.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTrackingFieldsQueryKey>
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
    return { ...getTrackingFieldsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostTrackingFieldsMutationKey() {
  return ['tracking_fields', '/tracking_fields', 'POST'] as const
}

export function getPostTrackingFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_fields.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tracking_fields.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTrackingFieldsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tracking_fields.$post>) {
      return parseResponse(client.tracking_fields.$post(args, options))
    },
  })
}

export function createPostTrackingFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tracking_fields.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.tracking_fields.$post>,
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
    const mutationDefaults = getPostTrackingFieldsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTrackingFieldsFieldIdQueryKey(
  args: InferRequestType<(typeof client.tracking_fields)[':fieldId']['$get']>,
) {
  return ['tracking_fields', '/tracking_fields/:fieldId', args] as const
}

export function getTrackingFieldsFieldIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tracking_fields)[':fieldId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tracking_fields)[':fieldId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tracking_fields)[':fieldId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingFieldsFieldIdQueryKey>
  >({
    queryKey: getTrackingFieldsFieldIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tracking_fields[':fieldId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTrackingFieldsFieldId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tracking_fields)[':fieldId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tracking_fields)[':fieldId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tracking_fields)[':fieldId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTrackingFieldsFieldIdQueryKey>
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
      ...getTrackingFieldsFieldIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteTrackingFieldsFieldIdMutationKey() {
  return ['tracking_fields', '/tracking_fields/:fieldId', 'DELETE'] as const
}

export function getDeleteTrackingFieldsFieldIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracking_fields)[':fieldId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tracking_fields)[':fieldId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTrackingFieldsFieldIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tracking_fields)[':fieldId']['$delete']>,
    ) {
      return parseResponse(client.tracking_fields[':fieldId'].$delete(args, options))
    },
  })
}

export function createDeleteTrackingFieldsFieldId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tracking_fields)[':fieldId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tracking_fields)[':fieldId']['$delete']>,
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
    const mutationDefaults = getDeleteTrackingFieldsFieldIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchTrackingFieldsFieldIdMutationKey() {
  return ['tracking_fields', '/tracking_fields/:fieldId', 'PATCH'] as const
}

export function getPatchTrackingFieldsFieldIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracking_fields)[':fieldId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tracking_fields)[':fieldId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTrackingFieldsFieldIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tracking_fields)[':fieldId']['$patch']>,
    ) {
      return parseResponse(client.tracking_fields[':fieldId'].$patch(args, options))
    },
  })
}

export function createPatchTrackingFieldsFieldId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tracking_fields)[':fieldId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tracking_fields)[':fieldId']['$patch']>,
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
    const mutationDefaults = getPatchTrackingFieldsFieldIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTspQueryKey() {
  return ['tsp', '/tsp'] as const
}

export function getTspQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsp.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTspQueryKey>
  >({
    queryKey: getTspQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tsp.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTsp<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsp.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsp.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getTspQueryKey>
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
    return { ...getTspQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPatchTspMutationKey() {
  return ['tsp', '/tsp', 'PATCH'] as const
}

export function getPatchTspMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsp.$patch>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.tsp.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchTspMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tsp.$patch>) {
      return parseResponse(client.tsp.$patch(args, options))
    },
  })
}

export function createPatchTsp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsp.$patch>>>>>
          | undefined,
          TError,
          InferRequestType<typeof client.tsp.$patch>,
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
    const mutationDefaults = getPatchTspMutationOptions<TError, TOnMutateResult>(clientOptions)
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

export function getUsersEmailQueryKey(args: InferRequestType<typeof client.users.email.$get>) {
  return ['users', '/users/email', args] as const
}

export function getUsersEmailQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.email.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.email.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.email.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersEmailQueryKey>
  >({
    queryKey: getUsersEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.email.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersEmail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.email.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.email.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.email.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getUsersEmailQueryKey>
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
    return { ...getUsersEmailQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersMeZakQueryKey() {
  return ['users', '/users/me/zak'] as const
}

export function getUsersMeZakQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.zak.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.zak.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeZakQueryKey>
  >({
    queryKey: getUsersMeZakQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.zak.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersMeZak<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.zak.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.zak.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getUsersMeZakQueryKey>
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
    return { ...getUsersMeZakQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getUsersVanityNameQueryKey(
  args: InferRequestType<typeof client.users.vanity_name.$get>,
) {
  return ['users', '/users/vanity_name', args] as const
}

export function getUsersVanityNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.vanity_name.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.vanity_name.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.vanity_name.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersVanityNameQueryKey>
  >({
    queryKey: getUsersVanityNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.vanity_name.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersVanityName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.vanity_name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.vanity_name.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.vanity_name.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersVanityNameQueryKey>
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
    return { ...getUsersVanityNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
) {
  return ['users', '/users/:userId', args] as const
}

export function getUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >({
    queryKey: getUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdQueryKey>
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
    return { ...getUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteUsersUserIdMutationKey() {
  return ['users', '/users/:userId', 'DELETE'] as const
}

export function getDeleteUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['$delete']>) {
      return parseResponse(client.users[':userId'].$delete(args, options))
    },
  })
}

export function createDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['$delete']>,
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
    const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchUsersUserIdMutationKey() {
  return ['users', '/users/:userId', 'PATCH'] as const
}

export function getPatchUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['$patch']>) {
      return parseResponse(client.users[':userId'].$patch(args, options))
    },
  })
}

export function createPatchUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['$patch']>,
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
    const mutationDefaults = getPatchUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdAssistantsQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['assistants']['$get']>,
) {
  return ['users', '/users/:userId/assistants', args] as const
}

export function getUsersUserIdAssistantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['assistants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['assistants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['assistants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAssistantsQueryKey>
  >({
    queryKey: getUsersUserIdAssistantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].assistants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdAssistants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['assistants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['assistants']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['assistants']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdAssistantsQueryKey>
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
      ...getUsersUserIdAssistantsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostUsersUserIdAssistantsMutationKey() {
  return ['users', '/users/:userId/assistants', 'POST'] as const
}

export function getPostUsersUserIdAssistantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['assistants']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['assistants']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdAssistantsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['assistants']['$post']>,
    ) {
      return parseResponse(client.users[':userId'].assistants.$post(args, options))
    },
  })
}

export function createPostUsersUserIdAssistants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['assistants']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['assistants']['$post']>,
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
    const mutationDefaults = getPostUsersUserIdAssistantsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteUsersUserIdAssistantsMutationKey() {
  return ['users', '/users/:userId/assistants', 'DELETE'] as const
}

export function getDeleteUsersUserIdAssistantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['assistants']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['assistants']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdAssistantsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['assistants']['$delete']>,
    ) {
      return parseResponse(client.users[':userId'].assistants.$delete(args, options))
    },
  })
}

export function createDeleteUsersUserIdAssistants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['assistants']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['assistants']['$delete']>,
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
    const mutationDefaults = getDeleteUsersUserIdAssistantsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteUsersUserIdAssistantsAssistantIdMutationKey() {
  return ['users', '/users/:userId/assistants/:assistantId', 'DELETE'] as const
}

export function getDeleteUsersUserIdAssistantsAssistantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.users)[':userId']['assistants'][':assistantId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdAssistantsAssistantIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':userId']['assistants'][':assistantId']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':userId'].assistants[':assistantId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteUsersUserIdAssistantsAssistantId<
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
                      (typeof client.users)[':userId']['assistants'][':assistantId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.users)[':userId']['assistants'][':assistantId']['$delete']
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
    const mutationDefaults = getDeleteUsersUserIdAssistantsAssistantIdMutationOptions<
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

export function getPutUsersUserIdEmailMutationKey() {
  return ['users', '/users/:userId/email', 'PUT'] as const
}

export function getPutUsersUserIdEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['email']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['email']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['email']['$put']>) {
      return parseResponse(client.users[':userId'].email.$put(args, options))
    },
  })
}

export function createPutUsersUserIdEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['email']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['email']['$put']>,
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
    const mutationDefaults = getPutUsersUserIdEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdMeetingTemplatesQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['meeting_templates']['$get']>,
) {
  return ['users', '/users/:userId/meeting_templates', args] as const
}

export function getUsersUserIdMeetingTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['meeting_templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['meeting_templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['meeting_templates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdMeetingTemplatesQueryKey>
  >({
    queryKey: getUsersUserIdMeetingTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].meeting_templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdMeetingTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['meeting_templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['meeting_templates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['meeting_templates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdMeetingTemplatesQueryKey>
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
      ...getUsersUserIdMeetingTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserIdMeetingsQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['meetings']['$get']>,
) {
  return ['users', '/users/:userId/meetings', args] as const
}

export function getUsersUserIdMeetingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['meetings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['meetings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['meetings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdMeetingsQueryKey>
  >({
    queryKey: getUsersUserIdMeetingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].meetings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdMeetings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['meetings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['meetings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['meetings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdMeetingsQueryKey>
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
    return { ...getUsersUserIdMeetingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUsersUserIdMeetingsMutationKey() {
  return ['users', '/users/:userId/meetings', 'POST'] as const
}

export function getPostUsersUserIdMeetingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['meetings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['meetings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdMeetingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['meetings']['$post']>,
    ) {
      return parseResponse(client.users[':userId'].meetings.$post(args, options))
    },
  })
}

export function createPostUsersUserIdMeetings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['meetings']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['meetings']['$post']>,
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
    const mutationDefaults = getPostUsersUserIdMeetingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdPacQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['pac']['$get']>,
) {
  return ['users', '/users/:userId/pac', args] as const
}

export function getUsersUserIdPacQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['pac']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['pac']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['pac']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPacQueryKey>
  >({
    queryKey: getUsersUserIdPacQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].pac.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersUserIdPac<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['pac']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['pac']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['pac']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdPacQueryKey>
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
    return { ...getUsersUserIdPacQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutUsersUserIdPasswordMutationKey() {
  return ['users', '/users/:userId/password', 'PUT'] as const
}

export function getPutUsersUserIdPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['password']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['password']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdPasswordMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['password']['$put']>) {
      return parseResponse(client.users[':userId'].password.$put(args, options))
    },
  })
}

export function createPutUsersUserIdPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['password']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['password']['$put']>,
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
    const mutationDefaults = getPutUsersUserIdPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdPermissionsQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['permissions']['$get']>,
) {
  return ['users', '/users/:userId/permissions', args] as const
}

export function getUsersUserIdPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['permissions']['$get']>>
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
        client.users[':userId'].permissions.$get(args, {
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
        Awaited<ReturnType<(typeof client.users)[':userId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['permissions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['permissions']['$get']>>
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

export function getPostUsersUserIdPictureMutationKey() {
  return ['users', '/users/:userId/picture', 'POST'] as const
}

export function getPostUsersUserIdPictureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['picture']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['picture']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdPictureMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['picture']['$post']>) {
      return parseResponse(client.users[':userId'].picture.$post(args, options))
    },
  })
}

export function createPostUsersUserIdPicture<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['picture']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['picture']['$post']>,
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
    const mutationDefaults = getPostUsersUserIdPictureMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutUsersUserIdPresenceStatusMutationKey() {
  return ['users', '/users/:userId/presence_status', 'PUT'] as const
}

export function getPutUsersUserIdPresenceStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['presence_status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['presence_status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdPresenceStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['presence_status']['$put']>,
    ) {
      return parseResponse(client.users[':userId'].presence_status.$put(args, options))
    },
  })
}

export function createPutUsersUserIdPresenceStatus<
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
                  Awaited<ReturnType<(typeof client.users)[':userId']['presence_status']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['presence_status']['$put']>,
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
    const mutationDefaults = getPutUsersUserIdPresenceStatusMutationOptions<
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

export function getUsersUserIdRecordingsQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['recordings']['$get']>,
) {
  return ['users', '/users/:userId/recordings', args] as const
}

export function getUsersUserIdRecordingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['recordings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['recordings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdRecordingsQueryKey>
  >({
    queryKey: getUsersUserIdRecordingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].recordings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdRecordings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['recordings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['recordings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdRecordingsQueryKey>
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
      ...getUsersUserIdRecordingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserIdSchedulersQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['schedulers']['$get']>,
) {
  return ['users', '/users/:userId/schedulers', args] as const
}

export function getUsersUserIdSchedulersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['schedulers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['schedulers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['schedulers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdSchedulersQueryKey>
  >({
    queryKey: getUsersUserIdSchedulersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].schedulers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdSchedulers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['schedulers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['schedulers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['schedulers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdSchedulersQueryKey>
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
      ...getUsersUserIdSchedulersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteUsersUserIdSchedulersMutationKey() {
  return ['users', '/users/:userId/schedulers', 'DELETE'] as const
}

export function getDeleteUsersUserIdSchedulersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['schedulers']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['schedulers']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdSchedulersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['schedulers']['$delete']>,
    ) {
      return parseResponse(client.users[':userId'].schedulers.$delete(args, options))
    },
  })
}

export function createDeleteUsersUserIdSchedulers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['schedulers']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['schedulers']['$delete']>,
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
    const mutationDefaults = getDeleteUsersUserIdSchedulersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteUsersUserIdSchedulersSchedulerIdMutationKey() {
  return ['users', '/users/:userId/schedulers/:schedulerId', 'DELETE'] as const
}

export function getDeleteUsersUserIdSchedulersSchedulerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.users)[':userId']['schedulers'][':schedulerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdSchedulersSchedulerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':userId']['schedulers'][':schedulerId']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':userId'].schedulers[':schedulerId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteUsersUserIdSchedulersSchedulerId<
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
                      (typeof client.users)[':userId']['schedulers'][':schedulerId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.users)[':userId']['schedulers'][':schedulerId']['$delete']
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
    const mutationDefaults = getDeleteUsersUserIdSchedulersSchedulerIdMutationOptions<
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

export function getUsersUserIdSettingsQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['settings']['$get']>,
) {
  return ['users', '/users/:userId/settings', args] as const
}

export function getUsersUserIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdSettingsQueryKey>
  >({
    queryKey: getUsersUserIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['settings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdSettingsQueryKey>
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
    return { ...getUsersUserIdSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchUsersUserIdSettingsMutationKey() {
  return ['users', '/users/:userId/settings', 'PATCH'] as const
}

export function getPatchUsersUserIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['settings']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['settings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['settings']['$patch']>,
    ) {
      return parseResponse(client.users[':userId'].settings.$patch(args, options))
    },
  })
}

export function createPatchUsersUserIdSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['settings']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['settings']['$patch']>,
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
    const mutationDefaults = getPatchUsersUserIdSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersUserIdSettingsVirtualBackgroundsMutationKey() {
  return ['users', '/users/:userId/settings/virtual_backgrounds', 'POST'] as const
}

export function getPostUsersUserIdSettingsVirtualBackgroundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.users)[':userId']['settings']['virtual_backgrounds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdSettingsVirtualBackgroundsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':userId']['settings']['virtual_backgrounds']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':userId'].settings.virtual_backgrounds.$post(args, options),
      )
    },
  })
}

export function createPostUsersUserIdSettingsVirtualBackgrounds<
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
                    (typeof client.users)[':userId']['settings']['virtual_backgrounds']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':userId']['settings']['virtual_backgrounds']['$post']
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
    const mutationDefaults = getPostUsersUserIdSettingsVirtualBackgroundsMutationOptions<
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

export function getDeleteUsersUserIdSettingsVirtualBackgroundsMutationKey() {
  return ['users', '/users/:userId/settings/virtual_backgrounds', 'DELETE'] as const
}

export function getDeleteUsersUserIdSettingsVirtualBackgroundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.users)[':userId']['settings']['virtual_backgrounds']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdSettingsVirtualBackgroundsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':userId']['settings']['virtual_backgrounds']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':userId'].settings.virtual_backgrounds.$delete(args, options),
      )
    },
  })
}

export function createDeleteUsersUserIdSettingsVirtualBackgrounds<
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
                      (typeof client.users)[':userId']['settings']['virtual_backgrounds']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.users)[':userId']['settings']['virtual_backgrounds']['$delete']
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
    const mutationDefaults = getDeleteUsersUserIdSettingsVirtualBackgroundsMutationOptions<
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

export function getPutUsersUserIdStatusMutationKey() {
  return ['users', '/users/:userId/status', 'PUT'] as const
}

export function getPutUsersUserIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdStatusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['status']['$put']>) {
      return parseResponse(client.users[':userId'].status.$put(args, options))
    },
  })
}

export function createPutUsersUserIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['status']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['status']['$put']>,
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
    const mutationDefaults = getPutUsersUserIdStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdTokenQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['token']['$get']>,
) {
  return ['users', '/users/:userId/token', args] as const
}

export function getUsersUserIdTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdTokenQueryKey>
  >({
    queryKey: getUsersUserIdTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].token.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['token']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdTokenQueryKey>
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
    return { ...getUsersUserIdTokenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteUsersUserIdTokenMutationKey() {
  return ['users', '/users/:userId/token', 'DELETE'] as const
}

export function getDeleteUsersUserIdTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['token']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['token']['$delete']>) {
      return parseResponse(client.users[':userId'].token.$delete(args, options))
    },
  })
}

export function createDeleteUsersUserIdToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['token']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['token']['$delete']>,
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
    const mutationDefaults = getDeleteUsersUserIdTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdTspQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['tsp']['$get']>,
) {
  return ['users', '/users/:userId/tsp', args] as const
}

export function getUsersUserIdTspQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['tsp']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['tsp']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['tsp']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdTspQueryKey>
  >({
    queryKey: getUsersUserIdTspQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].tsp.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersUserIdTsp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['tsp']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['tsp']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['tsp']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdTspQueryKey>
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
    return { ...getUsersUserIdTspQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUsersUserIdTspMutationKey() {
  return ['users', '/users/:userId/tsp', 'POST'] as const
}

export function getPostUsersUserIdTspMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['tsp']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['tsp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdTspMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['tsp']['$post']>) {
      return parseResponse(client.users[':userId'].tsp.$post(args, options))
    },
  })
}

export function createPostUsersUserIdTsp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['tsp']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['tsp']['$post']>,
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
    const mutationDefaults = getPostUsersUserIdTspMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchUsersUserIdTspSettingsMutationKey() {
  return ['users', '/users/:userId/tsp/settings', 'PATCH'] as const
}

export function getPatchUsersUserIdTspSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['tsp']['settings']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['tsp']['settings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdTspSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['tsp']['settings']['$patch']>,
    ) {
      return parseResponse(client.users[':userId'].tsp.settings.$patch(args, options))
    },
  })
}

export function createPatchUsersUserIdTspSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['tsp']['settings']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['tsp']['settings']['$patch']>,
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
    const mutationDefaults = getPatchUsersUserIdTspSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdTspTspIdQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>,
) {
  return ['users', '/users/:userId/tsp/:tspId', args] as const
}

export function getUsersUserIdTspTspIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdTspTspIdQueryKey>
  >({
    queryKey: getUsersUserIdTspTspIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].tsp[':tspId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdTspTspId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdTspTspIdQueryKey>
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
    return { ...getUsersUserIdTspTspIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteUsersUserIdTspTspIdMutationKey() {
  return ['users', '/users/:userId/tsp/:tspId', 'DELETE'] as const
}

export function getDeleteUsersUserIdTspTspIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['tsp'][':tspId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdTspTspIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$delete']>,
    ) {
      return parseResponse(client.users[':userId'].tsp[':tspId'].$delete(args, options))
    },
  })
}

export function createDeleteUsersUserIdTspTspId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['tsp'][':tspId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$delete']>,
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
    const mutationDefaults = getDeleteUsersUserIdTspTspIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchUsersUserIdTspTspIdMutationKey() {
  return ['users', '/users/:userId/tsp/:tspId', 'PATCH'] as const
}

export function getPatchUsersUserIdTspTspIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['tsp'][':tspId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdTspTspIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$patch']>,
    ) {
      return parseResponse(client.users[':userId'].tsp[':tspId'].$patch(args, options))
    },
  })
}

export function createPatchUsersUserIdTspTspId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['tsp'][':tspId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$patch']>,
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
    const mutationDefaults = getPatchUsersUserIdTspTspIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdWebinarTemplatesQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['webinar_templates']['$get']>,
) {
  return ['users', '/users/:userId/webinar_templates', args] as const
}

export function getUsersUserIdWebinarTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['webinar_templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['webinar_templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['webinar_templates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdWebinarTemplatesQueryKey>
  >({
    queryKey: getUsersUserIdWebinarTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].webinar_templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdWebinarTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['webinar_templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['webinar_templates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['webinar_templates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdWebinarTemplatesQueryKey>
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
      ...getUsersUserIdWebinarTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserIdWebinarsQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['webinars']['$get']>,
) {
  return ['users', '/users/:userId/webinars', args] as const
}

export function getUsersUserIdWebinarsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['webinars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['webinars']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['webinars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdWebinarsQueryKey>
  >({
    queryKey: getUsersUserIdWebinarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].webinars.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdWebinars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['webinars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['webinars']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['webinars']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdWebinarsQueryKey>
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
    return { ...getUsersUserIdWebinarsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUsersUserIdWebinarsMutationKey() {
  return ['users', '/users/:userId/webinars', 'POST'] as const
}

export function getPostUsersUserIdWebinarsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['webinars']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['webinars']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdWebinarsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['webinars']['$post']>,
    ) {
      return parseResponse(client.users[':userId'].webinars.$post(args, options))
    },
  })
}

export function createPostUsersUserIdWebinars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['webinars']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['webinars']['$post']>,
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
    const mutationDefaults = getPostUsersUserIdWebinarsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWebinarsWebinarIdQueryKey(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['$get']>,
) {
  return ['webinars', '/webinars/:webinarId', args] as const
}

export function getWebinarsWebinarIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webinars)[':webinarId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webinars)[':webinarId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebinarsWebinarIdQueryKey>
  >({
    queryKey: getWebinarsWebinarIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webinars[':webinarId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebinarsWebinarId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webinars)[':webinarId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webinars)[':webinarId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webinars)[':webinarId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWebinarsWebinarIdQueryKey>
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
    return { ...getWebinarsWebinarIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteWebinarsWebinarIdMutationKey() {
  return ['webinars', '/webinars/:webinarId', 'DELETE'] as const
}

export function getDeleteWebinarsWebinarIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webinars)[':webinarId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebinarsWebinarIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webinars)[':webinarId']['$delete']>) {
      return parseResponse(client.webinars[':webinarId'].$delete(args, options))
    },
  })
}

export function createDeleteWebinarsWebinarId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.webinars)[':webinarId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webinars)[':webinarId']['$delete']>,
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
    const mutationDefaults = getDeleteWebinarsWebinarIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchWebinarsWebinarIdMutationKey() {
  return ['webinars', '/webinars/:webinarId', 'PATCH'] as const
}

export function getPatchWebinarsWebinarIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webinars)[':webinarId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWebinarsWebinarIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webinars)[':webinarId']['$patch']>) {
      return parseResponse(client.webinars[':webinarId'].$patch(args, options))
    },
  })
}

export function createPatchWebinarsWebinarId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.webinars)[':webinarId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webinars)[':webinarId']['$patch']>,
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
    const mutationDefaults = getPatchWebinarsWebinarIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostWebinarsWebinarIdBatchRegistrantsMutationKey() {
  return ['webinars', '/webinars/:webinarId/batch_registrants', 'POST'] as const
}

export function getPostWebinarsWebinarIdBatchRegistrantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webinars)[':webinarId']['batch_registrants']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webinars)[':webinarId']['batch_registrants']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebinarsWebinarIdBatchRegistrantsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webinars)[':webinarId']['batch_registrants']['$post']>,
    ) {
      return parseResponse(client.webinars[':webinarId'].batch_registrants.$post(args, options))
    },
  })
}

export function createPostWebinarsWebinarIdBatchRegistrants<
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
                  ReturnType<(typeof client.webinars)[':webinarId']['batch_registrants']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webinars)[':webinarId']['batch_registrants']['$post']>,
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
    const mutationDefaults = getPostWebinarsWebinarIdBatchRegistrantsMutationOptions<
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

export function getWebinarsWebinarIdPanelistsQueryKey(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$get']>,
) {
  return ['webinars', '/webinars/:webinarId/panelists', args] as const
}

export function getWebinarsWebinarIdPanelistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebinarsWebinarIdPanelistsQueryKey>
  >({
    queryKey: getWebinarsWebinarIdPanelistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webinars[':webinarId'].panelists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebinarsWebinarIdPanelists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWebinarsWebinarIdPanelistsQueryKey>
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
      ...getWebinarsWebinarIdPanelistsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostWebinarsWebinarIdPanelistsMutationKey() {
  return ['webinars', '/webinars/:webinarId/panelists', 'POST'] as const
}

export function getPostWebinarsWebinarIdPanelistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebinarsWebinarIdPanelistsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$post']>,
    ) {
      return parseResponse(client.webinars[':webinarId'].panelists.$post(args, options))
    },
  })
}

export function createPostWebinarsWebinarIdPanelists<
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
                Awaited<ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$post']>,
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
    const mutationDefaults = getPostWebinarsWebinarIdPanelistsMutationOptions<
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

export function getDeleteWebinarsWebinarIdPanelistsMutationKey() {
  return ['webinars', '/webinars/:webinarId/panelists', 'DELETE'] as const
}

export function getDeleteWebinarsWebinarIdPanelistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebinarsWebinarIdPanelistsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$delete']>,
    ) {
      return parseResponse(client.webinars[':webinarId'].panelists.$delete(args, options))
    },
  })
}

export function createDeleteWebinarsWebinarIdPanelists<
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
                    ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$delete']>,
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
    const mutationDefaults = getDeleteWebinarsWebinarIdPanelistsMutationOptions<
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

export function getDeleteWebinarsWebinarIdPanelistsPanelistIdMutationKey() {
  return ['webinars', '/webinars/:webinarId/panelists/:panelistId', 'DELETE'] as const
}

export function getDeleteWebinarsWebinarIdPanelistsPanelistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.webinars)[':webinarId']['panelists'][':panelistId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebinarsWebinarIdPanelistsPanelistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webinars)[':webinarId']['panelists'][':panelistId']['$delete']
      >,
    ) {
      return parseResponse(
        client.webinars[':webinarId'].panelists[':panelistId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteWebinarsWebinarIdPanelistsPanelistId<
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
                      (typeof client.webinars)[':webinarId']['panelists'][':panelistId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.webinars)[':webinarId']['panelists'][':panelistId']['$delete']
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
    const mutationDefaults = getDeleteWebinarsWebinarIdPanelistsPanelistIdMutationOptions<
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

export function getWebinarsWebinarIdPollsQueryKey(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['polls']['$get']>,
) {
  return ['webinars', '/webinars/:webinarId/polls', args] as const
}

export function getWebinarsWebinarIdPollsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['polls']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebinarsWebinarIdPollsQueryKey>
  >({
    queryKey: getWebinarsWebinarIdPollsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webinars[':webinarId'].polls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebinarsWebinarIdPolls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webinars)[':webinarId']['polls']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWebinarsWebinarIdPollsQueryKey>
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
      ...getWebinarsWebinarIdPollsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostWebinarsWebinarIdPollsMutationKey() {
  return ['webinars', '/webinars/:webinarId/polls', 'POST'] as const
}

export function getPostWebinarsWebinarIdPollsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webinars)[':webinarId']['polls']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebinarsWebinarIdPollsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webinars)[':webinarId']['polls']['$post']>,
    ) {
      return parseResponse(client.webinars[':webinarId'].polls.$post(args, options))
    },
  })
}

export function createPostWebinarsWebinarIdPolls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webinars)[':webinarId']['polls']['$post']>,
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
    const mutationDefaults = getPostWebinarsWebinarIdPollsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWebinarsWebinarIdPollsPollIdQueryKey(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>,
) {
  return ['webinars', '/webinars/:webinarId/polls/:pollId', args] as const
}

export function getWebinarsWebinarIdPollsPollIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebinarsWebinarIdPollsPollIdQueryKey>
  >({
    queryKey: getWebinarsWebinarIdPollsPollIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webinars[':webinarId'].polls[':pollId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebinarsWebinarIdPollsPollId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWebinarsWebinarIdPollsPollIdQueryKey>
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
      ...getWebinarsWebinarIdPollsPollIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutWebinarsWebinarIdPollsPollIdMutationKey() {
  return ['webinars', '/webinars/:webinarId/polls/:pollId', 'PUT'] as const
}

export function getPutWebinarsWebinarIdPollsPollIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebinarsWebinarIdPollsPollIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$put']>,
    ) {
      return parseResponse(client.webinars[':webinarId'].polls[':pollId'].$put(args, options))
    },
  })
}

export function createPutWebinarsWebinarIdPollsPollId<
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
                    ReturnType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$put']>,
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
    const mutationDefaults = getPutWebinarsWebinarIdPollsPollIdMutationOptions<
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

export function getDeleteWebinarsWebinarIdPollsPollIdMutationKey() {
  return ['webinars', '/webinars/:webinarId/polls/:pollId', 'DELETE'] as const
}

export function getDeleteWebinarsWebinarIdPollsPollIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebinarsWebinarIdPollsPollIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$delete']>,
    ) {
      return parseResponse(client.webinars[':webinarId'].polls[':pollId'].$delete(args, options))
    },
  })
}

export function createDeleteWebinarsWebinarIdPollsPollId<
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
                      (typeof client.webinars)[':webinarId']['polls'][':pollId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$delete']>,
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
    const mutationDefaults = getDeleteWebinarsWebinarIdPollsPollIdMutationOptions<
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

export function getWebinarsWebinarIdRegistrantsQueryKey(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['$get']>,
) {
  return ['webinars', '/webinars/:webinarId/registrants', args] as const
}

export function getWebinarsWebinarIdRegistrantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webinars)[':webinarId']['registrants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webinars)[':webinarId']['registrants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebinarsWebinarIdRegistrantsQueryKey>
  >({
    queryKey: getWebinarsWebinarIdRegistrantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webinars[':webinarId'].registrants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebinarsWebinarIdRegistrants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webinars)[':webinarId']['registrants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webinars)[':webinarId']['registrants']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWebinarsWebinarIdRegistrantsQueryKey>
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
      ...getWebinarsWebinarIdRegistrantsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostWebinarsWebinarIdRegistrantsMutationKey() {
  return ['webinars', '/webinars/:webinarId/registrants', 'POST'] as const
}

export function getPostWebinarsWebinarIdRegistrantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webinars)[':webinarId']['registrants']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebinarsWebinarIdRegistrantsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['$post']>,
    ) {
      return parseResponse(client.webinars[':webinarId'].registrants.$post(args, options))
    },
  })
}

export function createPostWebinarsWebinarIdRegistrants<
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
                Awaited<ReturnType<(typeof client.webinars)[':webinarId']['registrants']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['$post']>,
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
    const mutationDefaults = getPostWebinarsWebinarIdRegistrantsMutationOptions<
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

export function getWebinarsWebinarIdRegistrantsQuestionsQueryKey(
  args: InferRequestType<
    (typeof client.webinars)[':webinarId']['registrants']['questions']['$get']
  >,
) {
  return ['webinars', '/webinars/:webinarId/registrants/questions', args] as const
}

export function getWebinarsWebinarIdRegistrantsQuestionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.webinars)[':webinarId']['registrants']['questions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.webinars)[':webinarId']['registrants']['questions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.webinars)[':webinarId']['registrants']['questions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebinarsWebinarIdRegistrantsQuestionsQueryKey>
  >({
    queryKey: getWebinarsWebinarIdRegistrantsQuestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webinars[':webinarId'].registrants.questions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebinarsWebinarIdRegistrantsQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.webinars)[':webinarId']['registrants']['questions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.webinars)[':webinarId']['registrants']['questions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.webinars)[':webinarId']['registrants']['questions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWebinarsWebinarIdRegistrantsQuestionsQueryKey>
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
      ...getWebinarsWebinarIdRegistrantsQuestionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchWebinarsWebinarIdRegistrantsQuestionsMutationKey() {
  return ['webinars', '/webinars/:webinarId/registrants/questions', 'PATCH'] as const
}

export function getPatchWebinarsWebinarIdRegistrantsQuestionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['questions']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWebinarsWebinarIdRegistrantsQuestionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webinars)[':webinarId']['registrants']['questions']['$patch']
      >,
    ) {
      return parseResponse(
        client.webinars[':webinarId'].registrants.questions.$patch(args, options),
      )
    },
  })
}

export function createPatchWebinarsWebinarIdRegistrantsQuestions<
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
                      (typeof client.webinars)[':webinarId']['registrants']['questions']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.webinars)[':webinarId']['registrants']['questions']['$patch']
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
    const mutationDefaults = getPatchWebinarsWebinarIdRegistrantsQuestionsMutationOptions<
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

export function getPutWebinarsWebinarIdRegistrantsStatusMutationKey() {
  return ['webinars', '/webinars/:webinarId/registrants/status', 'PUT'] as const
}

export function getPutWebinarsWebinarIdRegistrantsStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebinarsWebinarIdRegistrantsStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webinars)[':webinarId']['registrants']['status']['$put']
      >,
    ) {
      return parseResponse(client.webinars[':webinarId'].registrants.status.$put(args, options))
    },
  })
}

export function createPutWebinarsWebinarIdRegistrantsStatus<
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
                    (typeof client.webinars)[':webinarId']['registrants']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['status']['$put']>,
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
    const mutationDefaults = getPutWebinarsWebinarIdRegistrantsStatusMutationOptions<
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

export function getWebinarsWebinarIdRegistrantsRegistrantIdQueryKey(
  args: InferRequestType<
    (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']
  >,
) {
  return ['webinars', '/webinars/:webinarId/registrants/:registrantId', args] as const
}

export function getWebinarsWebinarIdRegistrantsRegistrantIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getWebinarsWebinarIdRegistrantsRegistrantIdQueryKey>
  >({
    queryKey: getWebinarsWebinarIdRegistrantsRegistrantIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webinars[':webinarId'].registrants[':registrantId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebinarsWebinarIdRegistrantsRegistrantId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getWebinarsWebinarIdRegistrantsRegistrantIdQueryKey>
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
      ...getWebinarsWebinarIdRegistrantsRegistrantIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteWebinarsWebinarIdRegistrantsRegistrantIdMutationKey() {
  return ['webinars', '/webinars/:webinarId/registrants/:registrantId', 'DELETE'] as const
}

export function getDeleteWebinarsWebinarIdRegistrantsRegistrantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebinarsWebinarIdRegistrantsRegistrantIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$delete']
      >,
    ) {
      return parseResponse(
        client.webinars[':webinarId'].registrants[':registrantId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteWebinarsWebinarIdRegistrantsRegistrantId<
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
                      (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$delete']
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
    const mutationDefaults = getDeleteWebinarsWebinarIdRegistrantsRegistrantIdMutationOptions<
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

export function getPutWebinarsWebinarIdStatusMutationKey() {
  return ['webinars', '/webinars/:webinarId/status', 'PUT'] as const
}

export function getPutWebinarsWebinarIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webinars)[':webinarId']['status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webinars)[':webinarId']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebinarsWebinarIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webinars)[':webinarId']['status']['$put']>,
    ) {
      return parseResponse(client.webinars[':webinarId'].status.$put(args, options))
    },
  })
}

export function createPutWebinarsWebinarIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.webinars)[':webinarId']['status']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webinars)[':webinarId']['status']['$put']>,
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
    const mutationDefaults = getPutWebinarsWebinarIdStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWebinarsWebinarIdTrackingSourcesQueryKey(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>,
) {
  return ['webinars', '/webinars/:webinarId/tracking_sources', args] as const
}

export function getWebinarsWebinarIdTrackingSourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebinarsWebinarIdTrackingSourcesQueryKey>
  >({
    queryKey: getWebinarsWebinarIdTrackingSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webinars[':webinarId'].tracking_sources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebinarsWebinarIdTrackingSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWebinarsWebinarIdTrackingSourcesQueryKey>
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
      ...getWebinarsWebinarIdTrackingSourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
