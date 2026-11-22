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

export function getAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
) {
  return ['accounts', '/accounts', toValue(args)] as const
}

export function getAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          ReturnType<typeof getAccountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.accounts.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountsAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['$get']>>,
) {
  return ['accounts', '/accounts/:accountId', toValue(args)] as const
}

export function getAccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAccountsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountsAccountIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountsAccountIdBillingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['billing']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/billing', toValue(args)] as const
}

export function getAccountsAccountIdBillingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['billing']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdBillingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].billing.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdBilling<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['billing']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdBillingQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdBillingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdBillingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].billing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchAccountsAccountIdBilling<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountsAccountIdBillingMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountsAccountIdBillingInvoicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/billing/invoices', toValue(args)] as const
}

export function getAccountsAccountIdBillingInvoicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdBillingInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].billing.invoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdBillingInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdBillingInvoicesQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdBillingInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdBillingInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].billing.invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdBillingInvoicesInvoiceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['billing']['invoices'][':invoiceId']['$get']
    >
  >,
) {
  return ['accounts', '/accounts/:accountId/billing/invoices/:invoiceId', toValue(args)] as const
}

export function getAccountsAccountIdBillingInvoicesInvoiceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['billing']['invoices'][':invoiceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdBillingInvoicesInvoiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].billing.invoices[':invoiceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdBillingInvoicesInvoiceId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['billing']['invoices'][':invoiceId']['$get']
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
                    (typeof client.accounts)[':accountId']['billing']['invoices'][':invoiceId']['$get']
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
                    (typeof client.accounts)[':accountId']['billing']['invoices'][':invoiceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdBillingInvoicesInvoiceIdQueryKey>
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
              (typeof client.accounts)[':accountId']['billing']['invoices'][':invoiceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdBillingInvoicesInvoiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdBillingInvoicesInvoiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].billing.invoices[':invoiceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdLockSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/lock_settings', toValue(args)] as const
}

export function getAccountsAccountIdLockSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdLockSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].lock_settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdLockSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdLockSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdLockSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdLockSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].lock_settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchAccountsAccountIdLockSettings<
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
                    ReturnType<(typeof client.accounts)[':accountId']['lock_settings']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['lock_settings']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountsAccountIdLockSettingsMutationOptions<
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

export function getAccountsAccountIdManagedDomainsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/managed_domains', toValue(args)] as const
}

export function getAccountsAccountIdManagedDomainsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdManagedDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].managed_domains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdManagedDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdManagedDomainsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdManagedDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdManagedDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].managed_domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchAccountsAccountIdOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountsAccountIdOptionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutAccountsAccountIdOwner<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountsAccountIdOwnerMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAccountsAccountIdPhoneSettings<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountsAccountIdPhoneSettingsMutationOptions<
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

export function usePostAccountsAccountIdPhoneSetup<
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
                  ReturnType<(typeof client.accounts)[':accountId']['phone']['setup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['phone']['setup']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsAccountIdPhoneSetupMutationOptions<
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

export function usePostAccountsAccountIdPhoneSipTrunkTrunks<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsAccountIdPhoneSipTrunkTrunksMutationOptions<
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

export function usePatchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkIdMutationOptions<
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

export function getAccountsAccountIdPlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['plans']['$get']>>,
) {
  return ['accounts', '/accounts/:accountId/plans', toValue(args)] as const
}

export function getAccountsAccountIdPlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['plans']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdPlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].plans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdPlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['plans']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdPlansQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdPlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdPlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountsAccountIdPlans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsAccountIdPlansMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutAccountsAccountIdPlansAddons<
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
                    ReturnType<(typeof client.accounts)[':accountId']['plans']['addons']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['plans']['addons']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountsAccountIdPlansAddonsMutationOptions<
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

export function usePostAccountsAccountIdPlansAddons<
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
                  ReturnType<(typeof client.accounts)[':accountId']['plans']['addons']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['plans']['addons']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsAccountIdPlansAddonsMutationOptions<
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

export function usePatchAccountsAccountIdPlansAddonsStatus<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountsAccountIdPlansAddonsStatusMutationOptions<
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

export function usePutAccountsAccountIdPlansBase<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountsAccountIdPlansBaseMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAccountsAccountIdPlansBaseStatus<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountsAccountIdPlansBaseStatusMutationOptions<
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

export function getAccountsAccountIdPlansUsageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/plans/usage', toValue(args)] as const
}

export function getAccountsAccountIdPlansUsageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdPlansUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].plans.usage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdPlansUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdPlansUsageQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdPlansUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdPlansUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].plans.usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdRecordingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['recordings']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/recordings', toValue(args)] as const
}

export function getAccountsAccountIdRecordingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['recordings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdRecordingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].recordings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdRecordings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['recordings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['recordings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['recordings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdRecordingsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['recordings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdRecordingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdRecordingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].recordings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/settings', toValue(args)] as const
}

export function getAccountsAccountIdSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchAccountsAccountIdSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountsAccountIdSettingsMutationOptions<
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

export function usePostAccountsAccountIdSettingsVirtualBackgrounds<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsAccountIdSettingsVirtualBackgroundsMutationOptions<
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

export function useDeleteAccountsAccountIdSettingsVirtualBackgrounds<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountsAccountIdSettingsVirtualBackgroundsMutationOptions<
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

export function getAccountsAccountIdSipTrunkCalloutCountriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$get']
    >
  >,
) {
  return ['accounts', '/accounts/:accountId/sip_trunk/callout_countries', toValue(args)] as const
}

export function getAccountsAccountIdSipTrunkCalloutCountriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdSipTrunkCalloutCountriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].sip_trunk.callout_countries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdSipTrunkCalloutCountries<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$get']
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
                    (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$get']
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
                    (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdSipTrunkCalloutCountriesQueryKey>
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
              (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdSipTrunkCalloutCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdSipTrunkCalloutCountriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].sip_trunk.callout_countries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountsAccountIdSipTrunkCalloutCountries<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsAccountIdSipTrunkCalloutCountriesMutationOptions<
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

export function useDeleteAccountsAccountIdSipTrunkCalloutCountriesCountryId<
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
        >,
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
    getDeleteAccountsAccountIdSipTrunkCalloutCountriesCountryIdMutationOptions<
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

export function getAccountsAccountIdSipTrunkInternalNumbersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$get']
    >
  >,
) {
  return ['accounts', '/accounts/:accountId/sip_trunk/internal_numbers', toValue(args)] as const
}

export function getAccountsAccountIdSipTrunkInternalNumbersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdSipTrunkInternalNumbersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].sip_trunk.internal_numbers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdSipTrunkInternalNumbers<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$get']
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
                    (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$get']
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
                    (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdSipTrunkInternalNumbersQueryKey>
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
              (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdSipTrunkInternalNumbersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdSipTrunkInternalNumbersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].sip_trunk.internal_numbers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountsAccountIdSipTrunkInternalNumbers<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsAccountIdSipTrunkInternalNumbersMutationOptions<
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

export function useDeleteAccountsAccountIdSipTrunkInternalNumbersNumberId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountsAccountIdSipTrunkInternalNumbersNumberIdMutationOptions<
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

export function usePostAccountsAccountIdSipTrunkNumbers<
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
                    (typeof client.accounts)[':accountId']['sip_trunk']['numbers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['numbers']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsAccountIdSipTrunkNumbersMutationOptions<
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

export function useDeleteAccountsAccountIdSipTrunkNumbers<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountsAccountIdSipTrunkNumbersMutationOptions<
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

export function usePatchAccountsAccountIdSipTrunkSettings<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountsAccountIdSipTrunkSettingsMutationOptions<
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

export function getAccountsAccountIdSipTrunkTrunksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/sip_trunk/trunks', toValue(args)] as const
}

export function getAccountsAccountIdSipTrunkTrunksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdSipTrunkTrunksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].sip_trunk.trunks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdSipTrunkTrunks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdSipTrunkTrunksQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdSipTrunkTrunksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdSipTrunkTrunksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].sip_trunk.trunks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountsAccountIdSipTrunkTrunks<
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
                  ReturnType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsAccountIdSipTrunkTrunksMutationOptions<
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

export function useDeleteAccountsAccountIdSipTrunkTrunksTrunkId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountsAccountIdSipTrunkTrunksTrunkIdMutationOptions<
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

export function getAccountsAccountIdTrustedDomainsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/trusted_domains', toValue(args)] as const
}

export function getAccountsAccountIdTrustedDomainsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdTrustedDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].trusted_domains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdTrustedDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdTrustedDomainsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdTrustedDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdTrustedDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].trusted_domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccountsAccountIdUsersUserIdAccount<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountsAccountIdUsersUserIdAccountMutationOptions<
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

export function getApiDownloadBillingInvoicesInvoiceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>
  >,
) {
  return ['api', '/api/download/billing/invoices/:invoiceId', toValue(args)] as const
}

export function getApiDownloadBillingInvoicesInvoiceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDownloadBillingInvoicesInvoiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.download.billing.invoices[':invoiceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDownloadBillingInvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiDownloadBillingInvoicesInvoiceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDownloadBillingInvoicesInvoiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDownloadBillingInvoicesInvoiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.download.billing.invoices[':invoiceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArchiveFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archive_files.$get>>,
) {
  return ['archive_files', '/archive_files', toValue(args)] as const
}

export function getArchiveFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archive_files.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArchiveFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.archive_files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArchiveFiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive_files.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archive_files.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive_files.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive_files.$get>>>>
          >,
          ReturnType<typeof getArchiveFilesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive_files.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArchiveFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArchiveFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.archive_files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChatChannelsChannelIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chat.channels)[':channelId']['$get']>>,
) {
  return ['chat', '/chat/channels/:channelId', toValue(args)] as const
}

export function getChatChannelsChannelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chat.channels)[':channelId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatChannelsChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.channels[':channelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chat.channels)[':channelId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChatChannelsChannelIdQueryKey>
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
          Awaited<ReturnType<(typeof client.chat.channels)[':channelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatChannelsChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatChannelsChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.channels[':channelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteChatChannelsChannelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChatChannelsChannelIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchChatChannelsChannelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchChatChannelsChannelIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostChatChannelsChannelIdMembersMe<
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
                  ReturnType<(typeof client.chat.channels)[':channelId']['members']['me']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.chat.channels)[':channelId']['members']['me']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChatChannelsChannelIdMembersMeMutationOptions<
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

export function useDeleteChatChannelsChannelIdMembersMe<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChatChannelsChannelIdMembersMeMutationOptions<
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

export function useDeleteChatChannelsChannelIdMembersMemberId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChatChannelsChannelIdMembersMemberIdMutationOptions<
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

export function getChatUsersMeContactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.users.me.contacts.$get>>,
) {
  return ['chat', '/chat/users/me/contacts', toValue(args)] as const
}

export function getChatUsersMeContactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.users.me.contacts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatUsersMeContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.users.me.contacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatUsersMeContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.users.me.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.users.me.contacts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.users.me.contacts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.users.me.contacts.$get>>>
            >
          >,
          ReturnType<typeof getChatUsersMeContactsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.chat.users.me.contacts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatUsersMeContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatUsersMeContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.users.me.contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChatUsersMeContactsContactIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>
  >,
) {
  return ['chat', '/chat/users/me/contacts/:contactId', toValue(args)] as const
}

export function getChatUsersMeContactsContactIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatUsersMeContactsContactIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.users.me.contacts[':contactId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatUsersMeContactsContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChatUsersMeContactsContactIdQueryKey>
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
          Awaited<ReturnType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatUsersMeContactsContactIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatUsersMeContactsContactIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.users.me.contacts[':contactId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChatUsersUserIdChannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chat.users)[':userId']['channels']['$get']>
  >,
) {
  return ['chat', '/chat/users/:userId/channels', toValue(args)] as const
}

export function getChatUsersUserIdChannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chat.users)[':userId']['channels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatUsersUserIdChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.users[':userId'].channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatUsersUserIdChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chat.users)[':userId']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chat.users)[':userId']['channels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chat.users)[':userId']['channels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chat.users)[':userId']['channels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChatUsersUserIdChannelsQueryKey>
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
          Awaited<ReturnType<(typeof client.chat.users)[':userId']['channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatUsersUserIdChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatUsersUserIdChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.users[':userId'].channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostChatUsersUserIdChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChatUsersUserIdChannelsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChatUsersUserIdChannelsChannelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$get']>
  >,
) {
  return ['chat', '/chat/users/:userId/channels/:channelId', toValue(args)] as const
}

export function getChatUsersUserIdChannelsChannelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatUsersUserIdChannelsChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.users[':userId'].channels[':channelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatUsersUserIdChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$get']>
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
                    (typeof client.chat.users)[':userId']['channels'][':channelId']['$get']
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
                    (typeof client.chat.users)[':userId']['channels'][':channelId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChatUsersUserIdChannelsChannelIdQueryKey>
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
            ReturnType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatUsersUserIdChannelsChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatUsersUserIdChannelsChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.users[':userId'].channels[':channelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteChatUsersUserIdChannelsChannelId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChatUsersUserIdChannelsChannelIdMutationOptions<
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

export function usePatchChatUsersUserIdChannelsChannelId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchChatUsersUserIdChannelsChannelIdMutationOptions<
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

export function getChatUsersUserIdChannelsChannelIdMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$get']
    >
  >,
) {
  return ['chat', '/chat/users/:userId/channels/:channelId/members', toValue(args)] as const
}

export function getChatUsersUserIdChannelsChannelIdMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatUsersUserIdChannelsChannelIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.users[':userId'].channels[':channelId'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatUsersUserIdChannelsChannelIdMembers<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$get']
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
                    (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$get']
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
                    (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChatUsersUserIdChannelsChannelIdMembersQueryKey>
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
              (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatUsersUserIdChannelsChannelIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatUsersUserIdChannelsChannelIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.users[':userId'].channels[':channelId'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostChatUsersUserIdChannelsChannelIdMembers<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChatUsersUserIdChannelsChannelIdMembersMutationOptions<
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

export function useDeleteChatUsersUserIdChannelsChannelIdMembersMemberId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChatUsersUserIdChannelsChannelIdMembersMemberIdMutationOptions<
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

export function getChatUsersUserIdMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chat.users)[':userId']['messages']['$get']>
  >,
) {
  return ['chat', '/chat/users/:userId/messages', toValue(args)] as const
}

export function getChatUsersUserIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chat.users)[':userId']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatUsersUserIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.users[':userId'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatUsersUserIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chat.users)[':userId']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chat.users)[':userId']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chat.users)[':userId']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chat.users)[':userId']['messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChatUsersUserIdMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.chat.users)[':userId']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatUsersUserIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatUsersUserIdMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.users[':userId'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostChatUsersUserIdMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChatUsersUserIdMessagesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutChatUsersUserIdMessagesMessageId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutChatUsersUserIdMessagesMessageIdMutationOptions<
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

export function useDeleteChatUsersUserIdMessagesMessageId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChatUsersUserIdMessagesMessageIdMutationOptions<
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

export function getContactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.$get>>,
) {
  return ['contacts', '/contacts', toValue(args)] as const
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

export function getGroupsQueryKey() {
  return ['groups', '/groups'] as const
}

export function getGroupsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGroupsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          ReturnType<typeof getGroupsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGroupsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.groups.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':groupId']['$get']>>,
) {
  return ['groups', '/groups/:groupId', toValue(args)] as const
}

export function getGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':groupId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':groupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':groupId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
            >
          >,
          ReturnType<typeof getGroupsGroupIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':groupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGroupsGroupIdLockSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':groupId']['lock_settings']['$get']>
  >,
) {
  return ['groups', '/groups/:groupId/lock_settings', toValue(args)] as const
}

export function getGroupsGroupIdLockSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':groupId']['lock_settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdLockSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':groupId'].lock_settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupIdLockSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':groupId']['lock_settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':groupId']['lock_settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':groupId']['lock_settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':groupId']['lock_settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdLockSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.groups)[':groupId']['lock_settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdLockSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdLockSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':groupId'].lock_settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchGroupsGroupIdLockSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchGroupsGroupIdLockSettingsMutationOptions<
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

export function getGroupsGroupIdMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':groupId']['members']['$get']>>,
) {
  return ['groups', '/groups/:groupId/members', toValue(args)] as const
}

export function getGroupsGroupIdMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':groupId']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':groupId'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':groupId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':groupId']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':groupId']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':groupId']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.groups)[':groupId']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':groupId'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGroupsGroupIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupsGroupIdMembersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteGroupsGroupIdMembersMemberId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupsGroupIdMembersMemberIdMutationOptions<
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

export function usePatchGroupsGroupIdMembersMemberId<
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
                    ReturnType<(typeof client.groups)[':groupId']['members'][':memberId']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.groups)[':groupId']['members'][':memberId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchGroupsGroupIdMembersMemberIdMutationOptions<
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

export function getGroupsGroupIdSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':groupId']['settings']['$get']>>,
) {
  return ['groups', '/groups/:groupId/settings', toValue(args)] as const
}

export function getGroupsGroupIdSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':groupId']['settings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':groupId'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':groupId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':groupId']['settings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':groupId']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':groupId']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.groups)[':groupId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':groupId'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchGroupsGroupIdSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchGroupsGroupIdSettingsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostGroupsGroupIdSettingsVirtualBackgrounds<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupsGroupIdSettingsVirtualBackgroundsMutationOptions<
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

export function useDeleteGroupsGroupIdSettingsVirtualBackgrounds<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupsGroupIdSettingsVirtualBackgroundsMutationOptions<
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

export function getH323DevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.h323.devices.$get>>,
) {
  return ['h323', '/h323/devices', toValue(args)] as const
}

export function getH323DevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.h323.devices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getH323DevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.h323.devices.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useH323Devices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.h323.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.h323.devices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.h323.devices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.h323.devices.$get>>>>
          >,
          ReturnType<typeof getH323DevicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.h323.devices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getH323DevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getH323DevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.h323.devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostH323Devices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.h323.devices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.h323.devices.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostH323DevicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteH323DevicesDeviceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteH323DevicesDeviceIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchH323DevicesDeviceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchH323DevicesDeviceIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostImChatMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.im.chat.messages.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.im.chat.messages.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImChatMessagesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutImChatMessagesMessageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutImChatMessagesMessageIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteImChatMessagesMessageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteImChatMessagesMessageIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getImChatSessionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.im.chat.sessions.$get>>,
) {
  return ['im', '/im/chat/sessions', toValue(args)] as const
}

export function getImChatSessionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.im.chat.sessions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImChatSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.im.chat.sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImChatSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.chat.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.im.chat.sessions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.im.chat.sessions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.im.chat.sessions.$get>>>
            >
          >,
          ReturnType<typeof getImChatSessionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.chat.sessions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImChatSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImChatSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.im.chat.sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImChatSessionsSessionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.im.chat.sessions)[':sessionId']['$get']>>,
) {
  return ['im', '/im/chat/sessions/:sessionId', toValue(args)] as const
}

export function getImChatSessionsSessionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.im.chat.sessions)[':sessionId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImChatSessionsSessionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.im.chat.sessions[':sessionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImChatSessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.im.chat.sessions)[':sessionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.im.chat.sessions)[':sessionId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.im.chat.sessions)[':sessionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.im.chat.sessions)[':sessionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImChatSessionsSessionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.im.chat.sessions)[':sessionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImChatSessionsSessionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImChatSessionsSessionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.im.chat.sessions[':sessionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImGroupsQueryKey() {
  return ['im', '/im/groups'] as const
}

export function getImGroupsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getImGroupsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.im.groups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useImGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.groups.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.groups.$get>>>>
          >,
          ReturnType<typeof getImGroupsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getImGroupsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.im.groups.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostImGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.im.groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.im.groups.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getImGroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.im.groups)[':groupId']['$get']>>,
) {
  return ['im', '/im/groups/:groupId', toValue(args)] as const
}

export function getImGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.im.groups)[':groupId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.im.groups[':groupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.im.groups)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.im.groups)[':groupId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.im.groups)[':groupId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.im.groups)[':groupId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImGroupsGroupIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.im.groups)[':groupId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.im.groups[':groupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteImGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteImGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchImGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchImGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getImGroupsGroupIdMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.im.groups)[':groupId']['members']['$get']>
  >,
) {
  return ['im', '/im/groups/:groupId/members', toValue(args)] as const
}

export function getImGroupsGroupIdMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.im.groups)[':groupId']['members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImGroupsGroupIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.im.groups[':groupId'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImGroupsGroupIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.im.groups)[':groupId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.im.groups)[':groupId']['members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.im.groups)[':groupId']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.im.groups)[':groupId']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImGroupsGroupIdMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.im.groups)[':groupId']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImGroupsGroupIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImGroupsGroupIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.im.groups[':groupId'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostImGroupsGroupIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImGroupsGroupIdMembersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteImGroupsGroupIdMembersMemberId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteImGroupsGroupIdMembersMemberIdMutationOptions<
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

export function usePostImUsersMeChatMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImUsersMeChatMessagesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getImUsersUserIdChatMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>
  >,
) {
  return ['im', '/im/users/:userId/chat/messages', toValue(args)] as const
}

export function getImUsersUserIdChatMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImUsersUserIdChatMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.im.users[':userId'].chat.messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImUsersUserIdChatMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImUsersUserIdChatMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImUsersUserIdChatMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImUsersUserIdChatMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.im.users[':userId'].chat.messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchLiveMeetingsMeetingIdEvents<
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
                Awaited<ReturnType<(typeof client.live_meetings)[':meetingId']['events']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.live_meetings)[':meetingId']['events']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchLiveMeetingsMeetingIdEventsMutationOptions<
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

export function getMeetingsMeetingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.meetings)[':meetingId']['$get']>>,
) {
  return ['meetings', '/meetings/:meetingId', toValue(args)] as const
}

export function getMeetingsMeetingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.meetings)[':meetingId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeetingsMeetingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meetings[':meetingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeetingsMeetingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.meetings)[':meetingId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeetingsMeetingIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeetingsMeetingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meetings[':meetingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteMeetingsMeetingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeetingsMeetingIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchMeetingsMeetingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMeetingsMeetingIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostMeetingsMeetingIdBatchPolls<
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
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['batch_polls']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['batch_polls']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMeetingsMeetingIdBatchPollsMutationOptions<
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

export function getMeetingsMeetingIdInvitationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['invitation']['$get']>
  >,
) {
  return ['meetings', '/meetings/:meetingId/invitation', toValue(args)] as const
}

export function getMeetingsMeetingIdInvitationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['invitation']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeetingsMeetingIdInvitationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meetings[':meetingId'].invitation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeetingsMeetingIdInvitation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['invitation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['invitation']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['invitation']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['invitation']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeetingsMeetingIdInvitationQueryKey>
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
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['invitation']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdInvitationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeetingsMeetingIdInvitationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meetings[':meetingId'].invitation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeetingsMeetingIdLivestreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['$get']>
  >,
) {
  return ['meetings', '/meetings/:meetingId/livestream', toValue(args)] as const
}

export function getMeetingsMeetingIdLivestreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeetingsMeetingIdLivestreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meetings[':meetingId'].livestream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeetingsMeetingIdLivestream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['livestream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['livestream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['livestream']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeetingsMeetingIdLivestreamQueryKey>
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
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['livestream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdLivestreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeetingsMeetingIdLivestreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meetings[':meetingId'].livestream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchMeetingsMeetingIdLivestream<
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
                    ReturnType<(typeof client.meetings)[':meetingId']['livestream']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMeetingsMeetingIdLivestreamMutationOptions<
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

export function usePatchMeetingsMeetingIdLivestreamStatus<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMeetingsMeetingIdLivestreamStatusMutationOptions<
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

export function getMeetingsMeetingIdPollsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.meetings)[':meetingId']['polls']['$get']>>,
) {
  return ['meetings', '/meetings/:meetingId/polls', toValue(args)] as const
}

export function getMeetingsMeetingIdPollsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.meetings)[':meetingId']['polls']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeetingsMeetingIdPollsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meetings[':meetingId'].polls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeetingsMeetingIdPolls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.meetings)[':meetingId']['polls']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeetingsMeetingIdPollsQueryKey>
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
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdPollsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeetingsMeetingIdPollsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meetings[':meetingId'].polls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMeetingsMeetingIdPolls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMeetingsMeetingIdPollsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMeetingsMeetingIdPollsPollIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>
  >,
) {
  return ['meetings', '/meetings/:meetingId/polls/:pollId', toValue(args)] as const
}

export function getMeetingsMeetingIdPollsPollIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeetingsMeetingIdPollsPollIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meetings[':meetingId'].polls[':pollId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeetingsMeetingIdPollsPollId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMeetingsMeetingIdPollsPollIdQueryKey>
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
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdPollsPollIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeetingsMeetingIdPollsPollIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meetings[':meetingId'].polls[':pollId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMeetingsMeetingIdPollsPollId<
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
                    ReturnType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMeetingsMeetingIdPollsPollIdMutationOptions<
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

export function useDeleteMeetingsMeetingIdPollsPollId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeetingsMeetingIdPollsPollIdMutationOptions<
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

export function getMeetingsMeetingIdRecordingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['$get']>
  >,
) {
  return ['meetings', '/meetings/:meetingId/recordings', toValue(args)] as const
}

export function getMeetingsMeetingIdRecordingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeetingsMeetingIdRecordingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meetings[':meetingId'].recordings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeetingsMeetingIdRecordings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['recordings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['recordings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeetingsMeetingIdRecordingsQueryKey>
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
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['recordings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdRecordingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeetingsMeetingIdRecordingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meetings[':meetingId'].recordings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteMeetingsMeetingIdRecordings<
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
                    ReturnType<(typeof client.meetings)[':meetingId']['recordings']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeetingsMeetingIdRecordingsMutationOptions<
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

export function getMeetingsMeetingIdRecordingsRegistrantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']>
  >,
) {
  return ['meetings', '/meetings/:meetingId/recordings/registrants', toValue(args)] as const
}

export function getMeetingsMeetingIdRecordingsRegistrantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeetingsMeetingIdRecordingsRegistrantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meetings[':meetingId'].recordings.registrants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeetingsMeetingIdRecordingsRegistrants<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']>
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
                    (typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']
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
                    (typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMeetingsMeetingIdRecordingsRegistrantsQueryKey>
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
            ReturnType<(typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdRecordingsRegistrantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeetingsMeetingIdRecordingsRegistrantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meetings[':meetingId'].recordings.registrants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMeetingsMeetingIdRecordingsRegistrants<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMeetingsMeetingIdRecordingsRegistrantsMutationOptions<
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

export function getMeetingsMeetingIdRecordingsRegistrantsQuestionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$get']
    >
  >,
) {
  return [
    'meetings',
    '/meetings/:meetingId/recordings/registrants/questions',
    toValue(args),
  ] as const
}

export function getMeetingsMeetingIdRecordingsRegistrantsQuestionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeetingsMeetingIdRecordingsRegistrantsQuestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meetings[':meetingId'].recordings.registrants.questions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeetingsMeetingIdRecordingsRegistrantsQuestions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$get']
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
                    (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$get']
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
                    (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMeetingsMeetingIdRecordingsRegistrantsQuestionsQueryKey>
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
              (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdRecordingsRegistrantsQuestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeetingsMeetingIdRecordingsRegistrantsQuestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meetings[':meetingId'].recordings.registrants.questions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchMeetingsMeetingIdRecordingsRegistrantsQuestions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMeetingsMeetingIdRecordingsRegistrantsQuestionsMutationOptions<
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

export function usePutMeetingsMeetingIdRecordingsRegistrantsStatus<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMeetingsMeetingIdRecordingsRegistrantsStatusMutationOptions<
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

export function getMeetingsMeetingIdRecordingsSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$get']>
  >,
) {
  return ['meetings', '/meetings/:meetingId/recordings/settings', toValue(args)] as const
}

export function getMeetingsMeetingIdRecordingsSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeetingsMeetingIdRecordingsSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meetings[':meetingId'].recordings.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeetingsMeetingIdRecordingsSettings<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$get']>
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
                    (typeof client.meetings)[':meetingId']['recordings']['settings']['$get']
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
                    (typeof client.meetings)[':meetingId']['recordings']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMeetingsMeetingIdRecordingsSettingsQueryKey>
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
            ReturnType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdRecordingsSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeetingsMeetingIdRecordingsSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meetings[':meetingId'].recordings.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchMeetingsMeetingIdRecordingsSettings<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMeetingsMeetingIdRecordingsSettingsMutationOptions<
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

export function usePutMeetingsMeetingIdRecordingsStatus<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMeetingsMeetingIdRecordingsStatusMutationOptions<
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

export function useDeleteMeetingsMeetingIdRecordingsRecordingId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeetingsMeetingIdRecordingsRecordingIdMutationOptions<
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

export function usePutMeetingsMeetingIdRecordingsRecordingIdStatus<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMeetingsMeetingIdRecordingsRecordingIdStatusMutationOptions<
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

export function getMeetingsMeetingIdRegistrantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['$get']>
  >,
) {
  return ['meetings', '/meetings/:meetingId/registrants', toValue(args)] as const
}

export function getMeetingsMeetingIdRegistrantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeetingsMeetingIdRegistrantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meetings[':meetingId'].registrants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeetingsMeetingIdRegistrants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['registrants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['registrants']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['registrants']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeetingsMeetingIdRegistrantsQueryKey>
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
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['registrants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdRegistrantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeetingsMeetingIdRegistrantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meetings[':meetingId'].registrants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMeetingsMeetingIdRegistrants<
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
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['registrants']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMeetingsMeetingIdRegistrantsMutationOptions<
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

export function getMeetingsMeetingIdRegistrantsQuestionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['questions']['$get']>
  >,
) {
  return ['meetings', '/meetings/:meetingId/registrants/questions', toValue(args)] as const
}

export function getMeetingsMeetingIdRegistrantsQuestionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['questions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeetingsMeetingIdRegistrantsQuestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meetings[':meetingId'].registrants.questions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeetingsMeetingIdRegistrantsQuestions<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['questions']['$get']>
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
                    (typeof client.meetings)[':meetingId']['registrants']['questions']['$get']
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
                    (typeof client.meetings)[':meetingId']['registrants']['questions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMeetingsMeetingIdRegistrantsQuestionsQueryKey>
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
            ReturnType<(typeof client.meetings)[':meetingId']['registrants']['questions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdRegistrantsQuestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeetingsMeetingIdRegistrantsQuestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meetings[':meetingId'].registrants.questions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchMeetingsMeetingIdRegistrantsQuestions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMeetingsMeetingIdRegistrantsQuestionsMutationOptions<
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

export function usePutMeetingsMeetingIdRegistrantsStatus<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMeetingsMeetingIdRegistrantsStatusMutationOptions<
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

export function useDeleteMeetingsMeetingIdRegistrantsRegistrantId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeetingsMeetingIdRegistrantsRegistrantIdMutationOptions<
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

export function usePutMeetingsMeetingIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMeetingsMeetingIdStatusMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMetricsClientFeedbackQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.client.feedback.$get>>,
) {
  return ['metrics', '/metrics/client/feedback', toValue(args)] as const
}

export function getMetricsClientFeedbackQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.client.feedback.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsClientFeedbackQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.client.feedback.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsClientFeedback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.feedback.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.client.feedback.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.feedback.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.feedback.$get>>>
            >
          >,
          ReturnType<typeof getMetricsClientFeedbackQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.feedback.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsClientFeedbackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsClientFeedbackQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.client.feedback.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsClientFeedbackFeedbackIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>
  >,
) {
  return ['metrics', '/metrics/client/feedback/:feedbackId', toValue(args)] as const
}

export function getMetricsClientFeedbackFeedbackIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsClientFeedbackFeedbackIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.client.feedback[':feedbackId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsClientFeedbackFeedbackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsClientFeedbackFeedbackIdQueryKey>
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
          Awaited<ReturnType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsClientFeedbackFeedbackIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsClientFeedbackFeedbackIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.client.feedback[':feedbackId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsClientSatisfactionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.client.satisfaction.$get>>,
) {
  return ['metrics', '/metrics/client/satisfaction', toValue(args)] as const
}

export function getMetricsClientSatisfactionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.client.satisfaction.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsClientSatisfactionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.client.satisfaction.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsClientSatisfaction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.satisfaction.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.client.satisfaction.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metrics.client.satisfaction.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metrics.client.satisfaction.$get>>
              >
            >
          >,
          ReturnType<typeof getMetricsClientSatisfactionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.metrics.client.satisfaction.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsClientSatisfactionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsClientSatisfactionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.client.satisfaction.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsCrcQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.crc.$get>>,
) {
  return ['metrics', '/metrics/crc', toValue(args)] as const
}

export function getMetricsCrcQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.crc.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsCrcQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.crc.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMetricsCrc<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.crc.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.crc.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.crc.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.crc.$get>>>>
          >,
          ReturnType<typeof getMetricsCrcQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.crc.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsCrcQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsCrcQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.crc.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsImQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.im.$get>>,
) {
  return ['metrics', '/metrics/im', toValue(args)] as const
}

export function getMetricsImQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.im.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsImQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.im.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMetricsIm<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.im.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.im.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.im.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.im.$get>>>>
          >,
          ReturnType<typeof getMetricsImQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.im.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsImQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsImQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.im.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsIssuesZoomroomsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.issues.zoomrooms.$get>>,
) {
  return ['metrics', '/metrics/issues/zoomrooms', toValue(args)] as const
}

export function getMetricsIssuesZoomroomsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.issues.zoomrooms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsIssuesZoomroomsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.issues.zoomrooms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsIssuesZoomrooms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.issues.zoomrooms.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.issues.zoomrooms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.issues.zoomrooms.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.issues.zoomrooms.$get>>>
            >
          >,
          ReturnType<typeof getMetricsIssuesZoomroomsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.metrics.issues.zoomrooms.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsIssuesZoomroomsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsIssuesZoomroomsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.issues.zoomrooms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsIssuesZoomroomsZoomroomIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>
  >,
) {
  return ['metrics', '/metrics/issues/zoomrooms/:zoomroomId', toValue(args)] as const
}

export function getMetricsIssuesZoomroomsZoomroomIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsIssuesZoomroomsZoomroomIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.issues.zoomrooms[':zoomroomId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsIssuesZoomroomsZoomroomId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsIssuesZoomroomsZoomroomIdQueryKey>
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
          Awaited<ReturnType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsIssuesZoomroomsZoomroomIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsIssuesZoomroomsZoomroomIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.issues.zoomrooms[':zoomroomId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsMeetingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.meetings.$get>>,
) {
  return ['metrics', '/metrics/meetings', toValue(args)] as const
}

export function getMetricsMeetingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.meetings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsMeetingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.meetings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsMeetings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.meetings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.meetings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.meetings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.meetings.$get>>>
            >
          >,
          ReturnType<typeof getMetricsMeetingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.meetings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMeetingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsMeetingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.meetings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsMeetingsMeetingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics.meetings)[':meetingId']['$get']>>,
) {
  return ['metrics', '/metrics/meetings/:meetingId', toValue(args)] as const
}

export function getMetricsMeetingsMeetingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics.meetings)[':meetingId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsMeetingsMeetingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.meetings[':meetingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsMeetingsMeetingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.meetings)[':meetingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics.meetings)[':meetingId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics.meetings)[':meetingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics.meetings)[':meetingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsMeetingsMeetingIdQueryKey>
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
          Awaited<ReturnType<(typeof client.metrics.meetings)[':meetingId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMeetingsMeetingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsMeetingsMeetingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.meetings[':meetingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsMeetingsMeetingIdParticipantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>
  >,
) {
  return ['metrics', '/metrics/meetings/:meetingId/participants', toValue(args)] as const
}

export function getMetricsMeetingsMeetingIdParticipantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsMeetingsMeetingIdParticipantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.meetings[':meetingId'].participants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsMeetingsMeetingIdParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsQueryKey>
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
            ReturnType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsMeetingsMeetingIdParticipantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.meetings[':meetingId'].participants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsMeetingsMeetingIdParticipantsQosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']>
  >,
) {
  return ['metrics', '/metrics/meetings/:meetingId/participants/qos', toValue(args)] as const
}

export function getMetricsMeetingsMeetingIdParticipantsQosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsMeetingsMeetingIdParticipantsQosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.meetings[':meetingId'].participants.qos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsMeetingsMeetingIdParticipantsQos<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']>
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
                    (typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']
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
                    (typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsQosQueryKey>
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
              (typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsQosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsMeetingsMeetingIdParticipantsQosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.meetings[':meetingId'].participants.qos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsMeetingsMeetingIdParticipantsSatisfactionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metrics.meetings)[':meetingId']['participants']['satisfaction']['$get']
    >
  >,
) {
  return [
    'metrics',
    '/metrics/meetings/:meetingId/participants/satisfaction',
    toValue(args),
  ] as const
}

export function getMetricsMeetingsMeetingIdParticipantsSatisfactionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metrics.meetings)[':meetingId']['participants']['satisfaction']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsMeetingsMeetingIdParticipantsSatisfactionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.meetings[':meetingId'].participants.satisfaction.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsMeetingsMeetingIdParticipantsSatisfaction<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metrics.meetings)[':meetingId']['participants']['satisfaction']['$get']
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
                    (typeof client.metrics.meetings)[':meetingId']['participants']['satisfaction']['$get']
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
                    (typeof client.metrics.meetings)[':meetingId']['participants']['satisfaction']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsSatisfactionQueryKey>
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
              (typeof client.metrics.meetings)[':meetingId']['participants']['satisfaction']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsSatisfactionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsMeetingsMeetingIdParticipantsSatisfactionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.meetings[':meetingId'].participants.satisfaction.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsMeetingsMeetingIdParticipantsSharingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metrics.meetings)[':meetingId']['participants']['sharing']['$get']
    >
  >,
) {
  return ['metrics', '/metrics/meetings/:meetingId/participants/sharing', toValue(args)] as const
}

export function getMetricsMeetingsMeetingIdParticipantsSharingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metrics.meetings)[':meetingId']['participants']['sharing']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsMeetingsMeetingIdParticipantsSharingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.meetings[':meetingId'].participants.sharing.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsMeetingsMeetingIdParticipantsSharing<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metrics.meetings)[':meetingId']['participants']['sharing']['$get']
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
                    (typeof client.metrics.meetings)[':meetingId']['participants']['sharing']['$get']
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
                    (typeof client.metrics.meetings)[':meetingId']['participants']['sharing']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsSharingQueryKey>
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
              (typeof client.metrics.meetings)[':meetingId']['participants']['sharing']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsSharingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsMeetingsMeetingIdParticipantsSharingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.meetings[':meetingId'].participants.sharing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsMeetingsMeetingIdParticipantsParticipantIdQosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metrics.meetings)[':meetingId']['participants'][':participantId']['qos']['$get']
    >
  >,
) {
  return [
    'metrics',
    '/metrics/meetings/:meetingId/participants/:participantId/qos',
    toValue(args),
  ] as const
}

export function getMetricsMeetingsMeetingIdParticipantsParticipantIdQosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metrics.meetings)[':meetingId']['participants'][':participantId']['qos']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsMeetingsMeetingIdParticipantsParticipantIdQosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.meetings[':meetingId'].participants[':participantId'].qos.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMetricsMeetingsMeetingIdParticipantsParticipantIdQos<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metrics.meetings)[':meetingId']['participants'][':participantId']['qos']['$get']
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
                    (typeof client.metrics.meetings)[':meetingId']['participants'][':participantId']['qos']['$get']
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
                    (typeof client.metrics.meetings)[':meetingId']['participants'][':participantId']['qos']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsParticipantIdQosQueryKey>
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
              (typeof client.metrics.meetings)[':meetingId']['participants'][':participantId']['qos']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMeetingsMeetingIdParticipantsParticipantIdQosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMetricsMeetingsMeetingIdParticipantsParticipantIdQosQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.meetings[':meetingId'].participants[':participantId'].qos.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsWebinarsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.webinars.$get>>,
) {
  return ['metrics', '/metrics/webinars', toValue(args)] as const
}

export function getMetricsWebinarsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.webinars.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsWebinarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.webinars.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsWebinars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.webinars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.webinars.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.webinars.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.webinars.$get>>>
            >
          >,
          ReturnType<typeof getMetricsWebinarsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.webinars.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsWebinarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsWebinarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.webinars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsWebinarsWebinarIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics.webinars)[':webinarId']['$get']>>,
) {
  return ['metrics', '/metrics/webinars/:webinarId', toValue(args)] as const
}

export function getMetricsWebinarsWebinarIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics.webinars)[':webinarId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsWebinarsWebinarIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.webinars[':webinarId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsWebinarsWebinarId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.webinars)[':webinarId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics.webinars)[':webinarId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics.webinars)[':webinarId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics.webinars)[':webinarId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsWebinarsWebinarIdQueryKey>
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
          Awaited<ReturnType<(typeof client.metrics.webinars)[':webinarId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsWebinarsWebinarIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsWebinarsWebinarIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.webinars[':webinarId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsWebinarsWebinarIdParticipantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>
  >,
) {
  return ['metrics', '/metrics/webinars/:webinarId/participants', toValue(args)] as const
}

export function getMetricsWebinarsWebinarIdParticipantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsWebinarsWebinarIdParticipantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.webinars[':webinarId'].participants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsWebinarsWebinarIdParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsQueryKey>
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
            ReturnType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsWebinarsWebinarIdParticipantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.webinars[':webinarId'].participants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsWebinarsWebinarIdParticipantsQosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']>
  >,
) {
  return ['metrics', '/metrics/webinars/:webinarId/participants/qos', toValue(args)] as const
}

export function getMetricsWebinarsWebinarIdParticipantsQosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsWebinarsWebinarIdParticipantsQosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.webinars[':webinarId'].participants.qos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsWebinarsWebinarIdParticipantsQos<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']>
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
                    (typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']
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
                    (typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsQosQueryKey>
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
              (typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsQosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsWebinarsWebinarIdParticipantsQosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.webinars[':webinarId'].participants.qos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsWebinarsWebinarIdParticipantsSatisfactionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metrics.webinars)[':webinarId']['participants']['satisfaction']['$get']
    >
  >,
) {
  return [
    'metrics',
    '/metrics/webinars/:webinarId/participants/satisfaction',
    toValue(args),
  ] as const
}

export function getMetricsWebinarsWebinarIdParticipantsSatisfactionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metrics.webinars)[':webinarId']['participants']['satisfaction']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsWebinarsWebinarIdParticipantsSatisfactionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.webinars[':webinarId'].participants.satisfaction.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsWebinarsWebinarIdParticipantsSatisfaction<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metrics.webinars)[':webinarId']['participants']['satisfaction']['$get']
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
                    (typeof client.metrics.webinars)[':webinarId']['participants']['satisfaction']['$get']
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
                    (typeof client.metrics.webinars)[':webinarId']['participants']['satisfaction']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsSatisfactionQueryKey>
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
              (typeof client.metrics.webinars)[':webinarId']['participants']['satisfaction']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsSatisfactionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsWebinarsWebinarIdParticipantsSatisfactionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.webinars[':webinarId'].participants.satisfaction.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsWebinarsWebinarIdParticipantsSharingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metrics.webinars)[':webinarId']['participants']['sharing']['$get']
    >
  >,
) {
  return ['metrics', '/metrics/webinars/:webinarId/participants/sharing', toValue(args)] as const
}

export function getMetricsWebinarsWebinarIdParticipantsSharingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metrics.webinars)[':webinarId']['participants']['sharing']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsWebinarsWebinarIdParticipantsSharingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.webinars[':webinarId'].participants.sharing.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsWebinarsWebinarIdParticipantsSharing<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metrics.webinars)[':webinarId']['participants']['sharing']['$get']
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
                    (typeof client.metrics.webinars)[':webinarId']['participants']['sharing']['$get']
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
                    (typeof client.metrics.webinars)[':webinarId']['participants']['sharing']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsSharingQueryKey>
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
              (typeof client.metrics.webinars)[':webinarId']['participants']['sharing']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsSharingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsWebinarsWebinarIdParticipantsSharingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.webinars[':webinarId'].participants.sharing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsWebinarsWebinarIdParticipantsParticipantIdQosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metrics.webinars)[':webinarId']['participants'][':participantId']['qos']['$get']
    >
  >,
) {
  return [
    'metrics',
    '/metrics/webinars/:webinarId/participants/:participantId/qos',
    toValue(args),
  ] as const
}

export function getMetricsWebinarsWebinarIdParticipantsParticipantIdQosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metrics.webinars)[':webinarId']['participants'][':participantId']['qos']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsWebinarsWebinarIdParticipantsParticipantIdQosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.webinars[':webinarId'].participants[':participantId'].qos.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMetricsWebinarsWebinarIdParticipantsParticipantIdQos<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.metrics.webinars)[':webinarId']['participants'][':participantId']['qos']['$get']
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
                    (typeof client.metrics.webinars)[':webinarId']['participants'][':participantId']['qos']['$get']
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
                    (typeof client.metrics.webinars)[':webinarId']['participants'][':participantId']['qos']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsParticipantIdQosQueryKey>
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
              (typeof client.metrics.webinars)[':webinarId']['participants'][':participantId']['qos']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsWebinarsWebinarIdParticipantsParticipantIdQosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMetricsWebinarsWebinarIdParticipantsParticipantIdQosQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.webinars[':webinarId'].participants[':participantId'].qos.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsZoomroomsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.zoomrooms.$get>>,
) {
  return ['metrics', '/metrics/zoomrooms', toValue(args)] as const
}

export function getMetricsZoomroomsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.zoomrooms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsZoomroomsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.zoomrooms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsZoomrooms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.zoomrooms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.$get>>>
            >
          >,
          ReturnType<typeof getMetricsZoomroomsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsZoomroomsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsZoomroomsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.zoomrooms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsZoomroomsIssuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.zoomrooms.issues.$get>>,
) {
  return ['metrics', '/metrics/zoomrooms/issues', toValue(args)] as const
}

export function getMetricsZoomroomsIssuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.zoomrooms.issues.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsZoomroomsIssuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.zoomrooms.issues.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsZoomroomsIssues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.issues.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.zoomrooms.issues.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.issues.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.issues.$get>>>
            >
          >,
          ReturnType<typeof getMetricsZoomroomsIssuesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.metrics.zoomrooms.issues.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsZoomroomsIssuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsZoomroomsIssuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.zoomrooms.issues.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsZoomroomsZoomroomIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>
  >,
) {
  return ['metrics', '/metrics/zoomrooms/:zoomroomId', toValue(args)] as const
}

export function getMetricsZoomroomsZoomroomIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsZoomroomsZoomroomIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.zoomrooms[':zoomroomId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsZoomroomsZoomroomId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsZoomroomsZoomroomIdQueryKey>
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
          Awaited<ReturnType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsZoomroomsZoomroomIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsZoomroomsZoomroomIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.zoomrooms[':zoomroomId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPastMeetingsMeetingIdFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_meetings)[':meetingId']['files']['$get']>
  >,
) {
  return ['past_meetings', '/past_meetings/:meetingId/files', toValue(args)] as const
}

export function getPastMeetingsMeetingIdFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_meetings)[':meetingId']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPastMeetingsMeetingIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.past_meetings[':meetingId'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePastMeetingsMeetingIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_meetings)[':meetingId']['files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPastMeetingsMeetingIdFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastMeetingsMeetingIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPastMeetingsMeetingIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.past_meetings[':meetingId'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPastMeetingsMeetingIdInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>
  >,
) {
  return ['past_meetings', '/past_meetings/:meetingId/instances', toValue(args)] as const
}

export function getPastMeetingsMeetingIdInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPastMeetingsMeetingIdInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.past_meetings[':meetingId'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePastMeetingsMeetingIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPastMeetingsMeetingIdInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastMeetingsMeetingIdInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPastMeetingsMeetingIdInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.past_meetings[':meetingId'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPastMeetingsMeetingIdPollsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>
  >,
) {
  return ['past_meetings', '/past_meetings/:meetingId/polls', toValue(args)] as const
}

export function getPastMeetingsMeetingIdPollsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPastMeetingsMeetingIdPollsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.past_meetings[':meetingId'].polls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePastMeetingsMeetingIdPolls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPastMeetingsMeetingIdPollsQueryKey>
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
          Awaited<ReturnType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastMeetingsMeetingIdPollsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPastMeetingsMeetingIdPollsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.past_meetings[':meetingId'].polls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPastMeetingsMeetingUUIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.past_meetings)[':meetingUUID']['$get']>>,
) {
  return ['past_meetings', '/past_meetings/:meetingUUID', toValue(args)] as const
}

export function getPastMeetingsMeetingUUIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.past_meetings)[':meetingUUID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPastMeetingsMeetingUUIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.past_meetings[':meetingUUID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePastMeetingsMeetingUUID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_meetings)[':meetingUUID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.past_meetings)[':meetingUUID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.past_meetings)[':meetingUUID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.past_meetings)[':meetingUUID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPastMeetingsMeetingUUIDQueryKey>
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
          Awaited<ReturnType<(typeof client.past_meetings)[':meetingUUID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastMeetingsMeetingUUIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPastMeetingsMeetingUUIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.past_meetings[':meetingUUID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPastMeetingsMeetingUUIDParticipantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>
  >,
) {
  return ['past_meetings', '/past_meetings/:meetingUUID/participants', toValue(args)] as const
}

export function getPastMeetingsMeetingUUIDParticipantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPastMeetingsMeetingUUIDParticipantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.past_meetings[':meetingUUID'].participants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePastMeetingsMeetingUUIDParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPastMeetingsMeetingUUIDParticipantsQueryKey>
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
          Awaited<ReturnType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastMeetingsMeetingUUIDParticipantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPastMeetingsMeetingUUIDParticipantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.past_meetings[':meetingUUID'].participants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPastWebinarsWebinarUUIDAbsenteesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>
  >,
) {
  return ['past_webinars', '/past_webinars/:WebinarUUID/absentees', toValue(args)] as const
}

export function getPastWebinarsWebinarUUIDAbsenteesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPastWebinarsWebinarUUIDAbsenteesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.past_webinars[':WebinarUUID'].absentees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePastWebinarsWebinarUUIDAbsentees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPastWebinarsWebinarUUIDAbsenteesQueryKey>
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
          Awaited<ReturnType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastWebinarsWebinarUUIDAbsenteesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPastWebinarsWebinarUUIDAbsenteesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.past_webinars[':WebinarUUID'].absentees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPastWebinarsWebinarIdFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_webinars)[':webinarId']['files']['$get']>
  >,
) {
  return ['past_webinars', '/past_webinars/:webinarId/files', toValue(args)] as const
}

export function getPastWebinarsWebinarIdFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_webinars)[':webinarId']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPastWebinarsWebinarIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.past_webinars[':webinarId'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePastWebinarsWebinarIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_webinars)[':webinarId']['files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPastWebinarsWebinarIdFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastWebinarsWebinarIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPastWebinarsWebinarIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.past_webinars[':webinarId'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPastWebinarsWebinarIdInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>
  >,
) {
  return ['past_webinars', '/past_webinars/:webinarId/instances', toValue(args)] as const
}

export function getPastWebinarsWebinarIdInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPastWebinarsWebinarIdInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.past_webinars[':webinarId'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePastWebinarsWebinarIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPastWebinarsWebinarIdInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastWebinarsWebinarIdInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPastWebinarsWebinarIdInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.past_webinars[':webinarId'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPastWebinarsWebinarIdParticipantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>
  >,
) {
  return ['past_webinars', '/past_webinars/:webinarId/participants', toValue(args)] as const
}

export function getPastWebinarsWebinarIdParticipantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPastWebinarsWebinarIdParticipantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.past_webinars[':webinarId'].participants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePastWebinarsWebinarIdParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPastWebinarsWebinarIdParticipantsQueryKey>
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
          Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastWebinarsWebinarIdParticipantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPastWebinarsWebinarIdParticipantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.past_webinars[':webinarId'].participants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPastWebinarsWebinarIdPollsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>
  >,
) {
  return ['past_webinars', '/past_webinars/:webinarId/polls', toValue(args)] as const
}

export function getPastWebinarsWebinarIdPollsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPastWebinarsWebinarIdPollsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.past_webinars[':webinarId'].polls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePastWebinarsWebinarIdPolls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPastWebinarsWebinarIdPollsQueryKey>
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
          Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastWebinarsWebinarIdPollsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPastWebinarsWebinarIdPollsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.past_webinars[':webinarId'].polls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPastWebinarsWebinarIdQaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>
  >,
) {
  return ['past_webinars', '/past_webinars/:webinarId/qa', toValue(args)] as const
}

export function getPastWebinarsWebinarIdQaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPastWebinarsWebinarIdQaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.past_webinars[':webinarId'].qa.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePastWebinarsWebinarIdQa<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPastWebinarsWebinarIdQaQueryKey>
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
          Awaited<ReturnType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPastWebinarsWebinarIdQaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPastWebinarsWebinarIdQaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.past_webinars[':webinarId'].qa.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPhoneAutoReceptionists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneAutoReceptionistsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchPhoneAutoReceptionistsAutoReceptionistId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPhoneAutoReceptionistsAutoReceptionistIdMutationOptions<
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

export function usePostPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbers<
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
        >,
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
    getPostPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersMutationOptions<
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

export function useDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbers<
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
        >,
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
    getDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersMutationOptions<
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

export function useDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberId<
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
        >,
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
    getDeletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberIdMutationOptions<
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

export function getPhoneBlockedListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.blocked_list.$get>>,
) {
  return ['phone', '/phone/blocked_list', toValue(args)] as const
}

export function getPhoneBlockedListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.blocked_list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneBlockedListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.blocked_list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneBlockedList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.blocked_list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.blocked_list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.blocked_list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.blocked_list.$get>>>
            >
          >,
          ReturnType<typeof getPhoneBlockedListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.blocked_list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneBlockedListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneBlockedListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.blocked_list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPhoneBlockedList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.blocked_list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.phone.blocked_list.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneBlockedListMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPhoneBlockedListBlockedListIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>
  >,
) {
  return ['phone', '/phone/blocked_list/:blockedListId', toValue(args)] as const
}

export function getPhoneBlockedListBlockedListIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneBlockedListBlockedListIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.blocked_list[':blockedListId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneBlockedListBlockedListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPhoneBlockedListBlockedListIdQueryKey>
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
          Awaited<ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneBlockedListBlockedListIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneBlockedListBlockedListIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.blocked_list[':blockedListId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePhoneBlockedListBlockedListId<
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
                    ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePhoneBlockedListBlockedListIdMutationOptions<
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

export function usePatchPhoneBlockedListBlockedListId<
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
                    ReturnType<(typeof client.phone.blocked_list)[':blockedListId']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPhoneBlockedListBlockedListIdMutationOptions<
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

export function usePostPhoneByocNumbers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.byoc_numbers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.phone.byoc_numbers.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneByocNumbersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPhoneCallLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.call_logs.$get>>,
) {
  return ['phone', '/phone/call_logs', toValue(args)] as const
}

export function getPhoneCallLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.call_logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneCallLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.call_logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneCallLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.call_logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_logs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_logs.$get>>>
            >
          >,
          ReturnType<typeof getPhoneCallLogsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneCallLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneCallLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.call_logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhoneCallQueuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.call_queues.$get>>,
) {
  return ['phone', '/phone/call_queues', toValue(args)] as const
}

export function getPhoneCallQueuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.call_queues.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneCallQueuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.call_queues.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneCallQueues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_queues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.call_queues.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_queues.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_queues.$get>>>
            >
          >,
          ReturnType<typeof getPhoneCallQueuesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_queues.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneCallQueuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneCallQueuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.call_queues.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPhoneCallQueues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.call_queues.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.phone.call_queues.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneCallQueuesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPhoneCallQueuesCallQueueIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$get']>
  >,
) {
  return ['phone', '/phone/call_queues/:callQueueId', toValue(args)] as const
}

export function getPhoneCallQueuesCallQueueIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneCallQueuesCallQueueIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.call_queues[':callQueueId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneCallQueuesCallQueueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPhoneCallQueuesCallQueueIdQueryKey>
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
          Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneCallQueuesCallQueueIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneCallQueuesCallQueueIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.call_queues[':callQueueId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePhoneCallQueuesCallQueueId<
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
                  Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePhoneCallQueuesCallQueueIdMutationOptions<
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

export function usePatchPhoneCallQueuesCallQueueId<
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
                  Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPhoneCallQueuesCallQueueIdMutationOptions<
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

export function usePutPhoneCallQueuesCallQueueIdManager<
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
                    ReturnType<(typeof client.phone.call_queues)[':callQueueId']['manager']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['manager']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPhoneCallQueuesCallQueueIdManagerMutationOptions<
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

export function usePostPhoneCallQueuesCallQueueIdMembers<
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
                  ReturnType<(typeof client.phone.call_queues)[':callQueueId']['members']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['members']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneCallQueuesCallQueueIdMembersMutationOptions<
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

export function useDeletePhoneCallQueuesCallQueueIdMembers<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePhoneCallQueuesCallQueueIdMembersMutationOptions<
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

export function useDeletePhoneCallQueuesCallQueueIdMembersMemberId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePhoneCallQueuesCallQueueIdMembersMemberIdMutationOptions<
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

export function usePostPhoneCallQueuesCallQueueIdPhoneNumbers<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneCallQueuesCallQueueIdPhoneNumbersMutationOptions<
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

export function useDeletePhoneCallQueuesCallQueueIdPhoneNumbers<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePhoneCallQueuesCallQueueIdPhoneNumbersMutationOptions<
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

export function useDeletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberId<
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
        >,
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
    getDeletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberIdMutationOptions<
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

export function getPhoneCallQueuesCallQueueIdRecordingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']>
  >,
) {
  return ['phone', '/phone/call_queues/:callQueueId/recordings', toValue(args)] as const
}

export function getPhoneCallQueuesCallQueueIdRecordingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneCallQueuesCallQueueIdRecordingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.call_queues[':callQueueId'].recordings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneCallQueuesCallQueueIdRecordings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']>
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
                    (typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']
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
                    (typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPhoneCallQueuesCallQueueIdRecordingsQueryKey>
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
            ReturnType<(typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneCallQueuesCallQueueIdRecordingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneCallQueuesCallQueueIdRecordingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.call_queues[':callQueueId'].recordings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhoneCallingPlansQueryKey() {
  return ['phone', '/phone/calling_plans'] as const
}

export function getPhoneCallingPlansQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPhoneCallingPlansQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.calling_plans.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneCallingPlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.calling_plans.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.calling_plans.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.calling_plans.$get>>>
            >
          >,
          ReturnType<typeof getPhoneCallingPlansQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.calling_plans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneCallingPlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPhoneCallingPlansQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.calling_plans.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhoneCommonAreaPhonesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.common_area_phones.$get>>,
) {
  return ['phone', '/phone/common_area_phones', toValue(args)] as const
}

export function getPhoneCommonAreaPhonesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.common_area_phones.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneCommonAreaPhonesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.common_area_phones.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneCommonAreaPhones<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone.common_area_phones.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.common_area_phones.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.common_area_phones.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.common_area_phones.$get>>>
            >
          >,
          ReturnType<typeof getPhoneCommonAreaPhonesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.common_area_phones.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneCommonAreaPhonesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneCommonAreaPhonesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.common_area_phones.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPhoneCommonAreaPhones<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneCommonAreaPhonesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPhoneCommonAreaPhonesCommonAreaPhoneIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>
  >,
) {
  return ['phone', '/phone/common_area_phones/:commonAreaPhoneId', toValue(args)] as const
}

export function getPhoneCommonAreaPhonesCommonAreaPhoneIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneCommonAreaPhonesCommonAreaPhoneIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.common_area_phones[':commonAreaPhoneId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneCommonAreaPhonesCommonAreaPhoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPhoneCommonAreaPhonesCommonAreaPhoneIdQueryKey>
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
            ReturnType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneCommonAreaPhonesCommonAreaPhoneIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneCommonAreaPhonesCommonAreaPhoneIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.common_area_phones[':commonAreaPhoneId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePhoneCommonAreaPhonesCommonAreaPhoneId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePhoneCommonAreaPhonesCommonAreaPhoneIdMutationOptions<
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

export function usePatchPhoneCommonAreaPhonesCommonAreaPhoneId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPhoneCommonAreaPhonesCommonAreaPhoneIdMutationOptions<
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

export function usePutPhoneCompanyNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.phone.company_number.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.phone.company_number.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPhoneCompanyNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPhoneDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.devices.$get>>,
) {
  return ['phone', '/phone/devices', toValue(args)] as const
}

export function getPhoneDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.devices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.devices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.devices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.devices.$get>>>>
          >,
          ReturnType<typeof getPhoneDevicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPhoneDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.devices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.phone.devices.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneDevicesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPhoneDevicesDeviceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.phone.devices)[':deviceId']['$get']>>,
) {
  return ['phone', '/phone/devices/:deviceId', toValue(args)] as const
}

export function getPhoneDevicesDeviceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.phone.devices)[':deviceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneDevicesDeviceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.devices[':deviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneDevicesDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.phone.devices)[':deviceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.phone.devices)[':deviceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.devices)[':deviceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.devices)[':deviceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPhoneDevicesDeviceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.phone.devices)[':deviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneDevicesDeviceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneDevicesDeviceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.devices[':deviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePhoneDevicesDeviceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePhoneDevicesDeviceIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchPhoneDevicesDeviceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPhoneDevicesDeviceIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPhoneMetricsCallLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.metrics.call_logs.$get>>,
) {
  return ['phone', '/phone/metrics/call_logs', toValue(args)] as const
}

export function getPhoneMetricsCallLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.metrics.call_logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneMetricsCallLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.metrics.call_logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneMetricsCallLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone.metrics.call_logs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.metrics.call_logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.metrics.call_logs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.metrics.call_logs.$get>>>
            >
          >,
          ReturnType<typeof getPhoneMetricsCallLogsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.metrics.call_logs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneMetricsCallLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneMetricsCallLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.metrics.call_logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhoneMetricsCallLogsCallIdQosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>
  >,
) {
  return ['phone', '/phone/metrics/call_logs/:callId/qos', toValue(args)] as const
}

export function getPhoneMetricsCallLogsCallIdQosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneMetricsCallLogsCallIdQosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.metrics.call_logs[':callId'].qos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneMetricsCallLogsCallIdQos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPhoneMetricsCallLogsCallIdQosQueryKey>
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
          Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneMetricsCallLogsCallIdQosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneMetricsCallLogsCallIdQosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.metrics.call_logs[':callId'].qos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhoneMetricsCallLogsCallIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>
  >,
) {
  return ['phone', '/phone/metrics/call_logs/:call_id', toValue(args)] as const
}

export function getPhoneMetricsCallLogsCallIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneMetricsCallLogsCallIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.metrics.call_logs[':call_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneMetricsCallLogsCallId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPhoneMetricsCallLogsCallIdQueryKey>
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
          Awaited<ReturnType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneMetricsCallLogsCallIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneMetricsCallLogsCallIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.metrics.call_logs[':call_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhoneNumbersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.numbers.$get>>,
) {
  return ['phone', '/phone/numbers', toValue(args)] as const
}

export function getPhoneNumbersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.numbers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneNumbersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.numbers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.numbers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.numbers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.numbers.$get>>>>
          >,
          ReturnType<typeof getPhoneNumbersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.numbers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneNumbersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.numbers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhoneNumbersNumberIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.phone.numbers)[':numberId']['$get']>>,
) {
  return ['phone', '/phone/numbers/:numberId', toValue(args)] as const
}

export function getPhoneNumbersNumberIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.phone.numbers)[':numberId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneNumbersNumberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.numbers[':numberId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneNumbersNumberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.phone.numbers)[':numberId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.phone.numbers)[':numberId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.numbers)[':numberId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.numbers)[':numberId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPhoneNumbersNumberIdQueryKey>
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
          Awaited<ReturnType<(typeof client.phone.numbers)[':numberId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersNumberIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneNumbersNumberIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.numbers[':numberId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchPhoneNumbersNumberId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPhoneNumbersNumberIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPhoneRecordingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.recordings.$get>>,
) {
  return ['phone', '/phone/recordings', toValue(args)] as const
}

export function getPhoneRecordingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.recordings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneRecordingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.recordings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneRecordings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.recordings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.recordings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.recordings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.recordings.$get>>>
            >
          >,
          ReturnType<typeof getPhoneRecordingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.recordings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneRecordingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneRecordingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.recordings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhoneReportsOperationlogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.reports.operationlogs.$get>>,
) {
  return ['phone', '/phone/reports/operationlogs', toValue(args)] as const
}

export function getPhoneReportsOperationlogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.reports.operationlogs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneReportsOperationlogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.reports.operationlogs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneReportsOperationlogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone.reports.operationlogs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.reports.operationlogs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.phone.reports.operationlogs.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.phone.reports.operationlogs.$get>>
              >
            >
          >,
          ReturnType<typeof getPhoneReportsOperationlogsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.reports.operationlogs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneReportsOperationlogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneReportsOperationlogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.reports.operationlogs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhoneSettingTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.setting_templates.$get>>,
) {
  return ['phone', '/phone/setting_templates', toValue(args)] as const
}

export function getPhoneSettingTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.setting_templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneSettingTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.setting_templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneSettingTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone.setting_templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.setting_templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.setting_templates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.setting_templates.$get>>>
            >
          >,
          ReturnType<typeof getPhoneSettingTemplatesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.setting_templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneSettingTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneSettingTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.setting_templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPhoneSettingTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.setting_templates.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.phone.setting_templates.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneSettingTemplatesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPhoneSettingTemplatesTemplateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.setting_templates)[':templateId']['$get']>
  >,
) {
  return ['phone', '/phone/setting_templates/:templateId', toValue(args)] as const
}

export function getPhoneSettingTemplatesTemplateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.setting_templates)[':templateId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneSettingTemplatesTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.setting_templates[':templateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneSettingTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.setting_templates)[':templateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.setting_templates)[':templateId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.setting_templates)[':templateId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.setting_templates)[':templateId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPhoneSettingTemplatesTemplateIdQueryKey>
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
          Awaited<ReturnType<(typeof client.phone.setting_templates)[':templateId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneSettingTemplatesTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneSettingTemplatesTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.setting_templates[':templateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchPhoneSettingTemplatesTemplateId<
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
                    ReturnType<(typeof client.phone.setting_templates)[':templateId']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.setting_templates)[':templateId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPhoneSettingTemplatesTemplateIdMutationOptions<
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

export function getPhoneSharedLineGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.shared_line_groups.$get>>,
) {
  return ['phone', '/phone/shared_line_groups', toValue(args)] as const
}

export function getPhoneSharedLineGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.shared_line_groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneSharedLineGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.shared_line_groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneSharedLineGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.phone.shared_line_groups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.shared_line_groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.shared_line_groups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.shared_line_groups.$get>>>
            >
          >,
          ReturnType<typeof getPhoneSharedLineGroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.shared_line_groups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneSharedLineGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneSharedLineGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.shared_line_groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPhoneSharedLineGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneSharedLineGroupsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPhoneSharedLineGroupsSharedLineGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>
  >,
) {
  return ['phone', '/phone/shared_line_groups/:sharedLineGroupId', toValue(args)] as const
}

export function getPhoneSharedLineGroupsSharedLineGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneSharedLineGroupsSharedLineGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.shared_line_groups[':sharedLineGroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneSharedLineGroupsSharedLineGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPhoneSharedLineGroupsSharedLineGroupIdQueryKey>
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
            ReturnType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneSharedLineGroupsSharedLineGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneSharedLineGroupsSharedLineGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.shared_line_groups[':sharedLineGroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePhoneSharedLineGroupsSharedLineGroupId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePhoneSharedLineGroupsSharedLineGroupIdMutationOptions<
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

export function usePatchPhoneSharedLineGroupsSharedLineGroupId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPhoneSharedLineGroupsSharedLineGroupIdMutationOptions<
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

export function usePostPhoneSharedLineGroupsSharedLineGroupIdMembers<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneSharedLineGroupsSharedLineGroupIdMembersMutationOptions<
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

export function useDeletePhoneSharedLineGroupsSharedLineGroupIdMembers<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePhoneSharedLineGroupsSharedLineGroupIdMembersMutationOptions<
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

export function useDeletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberId<
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
        >,
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
    getDeletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberIdMutationOptions<
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

export function usePostPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbers<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersMutationOptions<
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

export function useDeletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberId<
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
        >,
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
    getDeletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberIdMutationOptions<
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

export function getPhoneSipTrunkTrunksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.sip_trunk.trunks.$get>>,
) {
  return ['phone', '/phone/sip_trunk/trunks', toValue(args)] as const
}

export function getPhoneSipTrunkTrunksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.sip_trunk.trunks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneSipTrunkTrunksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.sip_trunk.trunks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneSipTrunkTrunks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sip_trunk.trunks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.sip_trunk.trunks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.sip_trunk.trunks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phone.sip_trunk.trunks.$get>>>
            >
          >,
          ReturnType<typeof getPhoneSipTrunkTrunksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.phone.sip_trunk.trunks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneSipTrunkTrunksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneSipTrunkTrunksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.sip_trunk.trunks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhoneSitesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.sites.$get>>,
) {
  return ['phone', '/phone/sites', toValue(args)] as const
}

export function getPhoneSitesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.sites.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneSitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.sites.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePhoneSites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.sites.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sites.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sites.$get>>>>
          >,
          ReturnType<typeof getPhoneSitesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPhoneSitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneSitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.sites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPhoneSites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.sites.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.phone.sites.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneSitesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPhoneSitesSiteIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.phone.sites)[':siteId']['$get']>>,
) {
  return ['phone', '/phone/sites/:siteId', toValue(args)] as const
}

export function getPhoneSitesSiteIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.phone.sites)[':siteId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneSitesSiteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.sites[':siteId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneSitesSiteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.phone.sites)[':siteId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.phone.sites)[':siteId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.sites)[':siteId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.sites)[':siteId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPhoneSitesSiteIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.phone.sites)[':siteId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneSitesSiteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneSitesSiteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.sites[':siteId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePhoneSitesSiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePhoneSitesSiteIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchPhoneSitesSiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPhoneSitesSiteIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPhoneUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.users.$get>>,
) {
  return ['phone', '/phone/users', toValue(args)] as const
}

export function getPhoneUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePhoneUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.users.$get>>>>
          >,
          ReturnType<typeof getPhoneUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPhoneUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhoneUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.phone.users)[':userId']['$get']>>,
) {
  return ['phone', '/phone/users/:userId', toValue(args)] as const
}

export function getPhoneUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.phone.users)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.phone.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.phone.users)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.users)[':userId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.users)[':userId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPhoneUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.phone.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchPhoneUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPhoneUsersUserIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPhoneUsersUserIdCallLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.users)[':userId']['call_logs']['$get']>
  >,
) {
  return ['phone', '/phone/users/:userId/call_logs', toValue(args)] as const
}

export function getPhoneUsersUserIdCallLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.users)[':userId']['call_logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneUsersUserIdCallLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.users[':userId'].call_logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneUsersUserIdCallLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.users)[':userId']['call_logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.users)[':userId']['call_logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.users)[':userId']['call_logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.users)[':userId']['call_logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPhoneUsersUserIdCallLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.phone.users)[':userId']['call_logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneUsersUserIdCallLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneUsersUserIdCallLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.users[':userId'].call_logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePhoneUsersUserIdCallLogsCallLogId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePhoneUsersUserIdCallLogsCallLogIdMutationOptions<
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

export function usePostPhoneUsersUserIdCallingPlans<
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
                  ReturnType<(typeof client.phone.users)[':userId']['calling_plans']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.phone.users)[':userId']['calling_plans']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneUsersUserIdCallingPlansMutationOptions<
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

export function useDeletePhoneUsersUserIdCallingPlansType<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePhoneUsersUserIdCallingPlansTypeMutationOptions<
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

export function usePostPhoneUsersUserIdPhoneNumbers<
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
                  ReturnType<(typeof client.phone.users)[':userId']['phone_numbers']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.phone.users)[':userId']['phone_numbers']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneUsersUserIdPhoneNumbersMutationOptions<
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

export function useDeletePhoneUsersUserIdPhoneNumbersPhoneNumberId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePhoneUsersUserIdPhoneNumbersPhoneNumberIdMutationOptions<
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

export function getPhoneUsersUserIdRecordingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.users)[':userId']['recordings']['$get']>
  >,
) {
  return ['phone', '/phone/users/:userId/recordings', toValue(args)] as const
}

export function getPhoneUsersUserIdRecordingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.users)[':userId']['recordings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneUsersUserIdRecordingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.users[':userId'].recordings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneUsersUserIdRecordings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.users)[':userId']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.users)[':userId']['recordings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.users)[':userId']['recordings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.users)[':userId']['recordings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPhoneUsersUserIdRecordingsQueryKey>
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
          Awaited<ReturnType<(typeof client.phone.users)[':userId']['recordings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneUsersUserIdRecordingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneUsersUserIdRecordingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.users[':userId'].recordings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhoneUsersUserIdSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.users)[':userId']['settings']['$get']>
  >,
) {
  return ['phone', '/phone/users/:userId/settings', toValue(args)] as const
}

export function getPhoneUsersUserIdSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.users)[':userId']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneUsersUserIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.users[':userId'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneUsersUserIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.users)[':userId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.users)[':userId']['settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.users)[':userId']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.users)[':userId']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPhoneUsersUserIdSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.phone.users)[':userId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneUsersUserIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneUsersUserIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.users[':userId'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPhoneUsersUserIdSettingsSettingType<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneUsersUserIdSettingsSettingTypeMutationOptions<
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

export function useDeletePhoneUsersUserIdSettingsSettingType<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePhoneUsersUserIdSettingsSettingTypeMutationOptions<
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

export function usePatchPhoneUsersUserIdSettingsSettingType<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPhoneUsersUserIdSettingsSettingTypeMutationOptions<
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

export function getPhoneUsersUserIdVoiceMailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>
  >,
) {
  return ['phone', '/phone/users/:userId/voice_mails', toValue(args)] as const
}

export function getPhoneUsersUserIdVoiceMailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneUsersUserIdVoiceMailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone.users[':userId'].voice_mails.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneUsersUserIdVoiceMails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPhoneUsersUserIdVoiceMailsQueryKey>
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
          Awaited<ReturnType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneUsersUserIdVoiceMailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneUsersUserIdVoiceMailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone.users[':userId'].voice_mails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePhoneVoiceMailsVoicemailId<
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
                  Awaited<ReturnType<(typeof client.phone.voice_mails)[':voicemailId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.phone.voice_mails)[':voicemailId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePhoneVoiceMailsVoicemailIdMutationOptions<
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

export function getReportActivitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.activities.$get>>,
) {
  return ['report', '/report/activities', toValue(args)] as const
}

export function getReportActivitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.activities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.activities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.activities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.activities.$get>>>
            >
          >,
          ReturnType<typeof getReportActivitiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.activities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportCloudRecordingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.cloud_recording.$get>>,
) {
  return ['report', '/report/cloud_recording', toValue(args)] as const
}

export function getReportCloudRecordingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.cloud_recording.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportCloudRecordingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.cloud_recording.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportCloudRecording<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.cloud_recording.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.cloud_recording.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.cloud_recording.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.cloud_recording.$get>>>
            >
          >,
          ReturnType<typeof getReportCloudRecordingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.report.cloud_recording.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportCloudRecordingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportCloudRecordingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.cloud_recording.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportDailyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.daily.$get>>,
) {
  return ['report', '/report/daily', toValue(args)] as const
}

export function getReportDailyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.daily.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportDailyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.daily.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReportDaily<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.daily.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.daily.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.daily.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.daily.$get>>>>
          >,
          ReturnType<typeof getReportDailyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.daily.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportDailyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportDailyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.daily.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportMeetingsMeetingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.report.meetings)[':meetingId']['$get']>>,
) {
  return ['report', '/report/meetings/:meetingId', toValue(args)] as const
}

export function getReportMeetingsMeetingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.report.meetings)[':meetingId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportMeetingsMeetingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.meetings[':meetingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportMeetingsMeetingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.report.meetings)[':meetingId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportMeetingsMeetingIdQueryKey>
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
          Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportMeetingsMeetingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportMeetingsMeetingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.meetings[':meetingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportMeetingsMeetingIdParticipantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>
  >,
) {
  return ['report', '/report/meetings/:meetingId/participants', toValue(args)] as const
}

export function getReportMeetingsMeetingIdParticipantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportMeetingsMeetingIdParticipantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.meetings[':meetingId'].participants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportMeetingsMeetingIdParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getReportMeetingsMeetingIdParticipantsQueryKey>
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
          Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportMeetingsMeetingIdParticipantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportMeetingsMeetingIdParticipantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.meetings[':meetingId'].participants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportMeetingsMeetingIdPollsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>
  >,
) {
  return ['report', '/report/meetings/:meetingId/polls', toValue(args)] as const
}

export function getReportMeetingsMeetingIdPollsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportMeetingsMeetingIdPollsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.meetings[':meetingId'].polls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportMeetingsMeetingIdPolls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportMeetingsMeetingIdPollsQueryKey>
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
          Awaited<ReturnType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportMeetingsMeetingIdPollsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportMeetingsMeetingIdPollsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.meetings[':meetingId'].polls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportOperationlogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.operationlogs.$get>>,
) {
  return ['report', '/report/operationlogs', toValue(args)] as const
}

export function getReportOperationlogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.operationlogs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportOperationlogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.operationlogs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportOperationlogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.operationlogs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.operationlogs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.operationlogs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.operationlogs.$get>>>
            >
          >,
          ReturnType<typeof getReportOperationlogsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.operationlogs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportOperationlogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportOperationlogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.operationlogs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportTelephoneQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.telephone.$get>>,
) {
  return ['report', '/report/telephone', toValue(args)] as const
}

export function getReportTelephoneQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.telephone.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportTelephoneQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.telephone.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportTelephone<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.telephone.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.telephone.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.telephone.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.telephone.$get>>>
            >
          >,
          ReturnType<typeof getReportTelephoneQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.telephone.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportTelephoneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportTelephoneQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.telephone.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.users.$get>>,
) {
  return ['report', '/report/users', toValue(args)] as const
}

export function getReportUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReportUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.users.$get>>>>
          >,
          ReturnType<typeof getReportUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportUsersUserIdMeetingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.users)[':userId']['meetings']['$get']>
  >,
) {
  return ['report', '/report/users/:userId/meetings', toValue(args)] as const
}

export function getReportUsersUserIdMeetingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.users)[':userId']['meetings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportUsersUserIdMeetingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.users[':userId'].meetings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportUsersUserIdMeetings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.users)[':userId']['meetings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.users)[':userId']['meetings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.users)[':userId']['meetings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.users)[':userId']['meetings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportUsersUserIdMeetingsQueryKey>
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
          Awaited<ReturnType<(typeof client.report.users)[':userId']['meetings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportUsersUserIdMeetingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportUsersUserIdMeetingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.users[':userId'].meetings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportWebinarsWebinarIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.report.webinars)[':webinarId']['$get']>>,
) {
  return ['report', '/report/webinars/:webinarId', toValue(args)] as const
}

export function getReportWebinarsWebinarIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.report.webinars)[':webinarId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportWebinarsWebinarIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.webinars[':webinarId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportWebinarsWebinarId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.report.webinars)[':webinarId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportWebinarsWebinarIdQueryKey>
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
          Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportWebinarsWebinarIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportWebinarsWebinarIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.webinars[':webinarId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportWebinarsWebinarIdParticipantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>
  >,
) {
  return ['report', '/report/webinars/:webinarId/participants', toValue(args)] as const
}

export function getReportWebinarsWebinarIdParticipantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportWebinarsWebinarIdParticipantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.webinars[':webinarId'].participants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportWebinarsWebinarIdParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getReportWebinarsWebinarIdParticipantsQueryKey>
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
          Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportWebinarsWebinarIdParticipantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportWebinarsWebinarIdParticipantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.webinars[':webinarId'].participants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportWebinarsWebinarIdPollsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>
  >,
) {
  return ['report', '/report/webinars/:webinarId/polls', toValue(args)] as const
}

export function getReportWebinarsWebinarIdPollsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportWebinarsWebinarIdPollsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.webinars[':webinarId'].polls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportWebinarsWebinarIdPolls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportWebinarsWebinarIdPollsQueryKey>
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
          Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportWebinarsWebinarIdPollsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportWebinarsWebinarIdPollsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.webinars[':webinarId'].polls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportWebinarsWebinarIdQaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>
  >,
) {
  return ['report', '/report/webinars/:webinarId/qa', toValue(args)] as const
}

export function getReportWebinarsWebinarIdQaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportWebinarsWebinarIdQaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.webinars[':webinarId'].qa.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportWebinarsWebinarIdQa<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportWebinarsWebinarIdQaQueryKey>
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
          Awaited<ReturnType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportWebinarsWebinarIdQaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportWebinarsWebinarIdQaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.webinars[':webinarId'].qa.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRolesQueryKey() {
  return ['roles', '/roles'] as const
}

export function getRolesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRolesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.roles.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRoles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
          ReturnType<typeof getRolesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRolesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.roles.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$post>>>>>,
          TError,
          InferRequestType<typeof client.roles.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRolesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRolesRoleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.roles)[':roleId']['$get']>>,
) {
  return ['roles', '/roles/:roleId', toValue(args)] as const
}

export function getRolesRoleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.roles)[':roleId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRolesRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.roles[':roleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRolesRoleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.roles)[':roleId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['$get']>>>
            >
          >,
          ReturnType<typeof getRolesRoleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRolesRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRolesRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.roles[':roleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteRolesRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRolesRoleIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchRolesRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchRolesRoleIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRolesRoleIdMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.roles)[':roleId']['members']['$get']>>,
) {
  return ['roles', '/roles/:roleId/members', toValue(args)] as const
}

export function getRolesRoleIdMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.roles)[':roleId']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRolesRoleIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.roles[':roleId'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRolesRoleIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':roleId']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.roles)[':roleId']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.roles)[':roleId']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.roles)[':roleId']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRolesRoleIdMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.roles)[':roleId']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRolesRoleIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRolesRoleIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.roles[':roleId'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRolesRoleIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRolesRoleIdMembersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteRolesRoleIdMembersMemberId<
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
                    ReturnType<(typeof client.roles)[':roleId']['members'][':memberId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.roles)[':roleId']['members'][':memberId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRolesRoleIdMembersMemberIdMutationOptions<
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

export function getRoomsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rooms.$get>>,
) {
  return ['rooms', '/rooms', toValue(args)] as const
}

export function getRoomsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rooms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoomsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rooms.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRooms<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rooms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
          ReturnType<typeof getRoomsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRoomsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoomsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rooms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRooms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.$post>>>>>,
          TError,
          InferRequestType<typeof client.rooms.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRoomsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRoomsAccountProfileQueryKey() {
  return ['rooms', '/rooms/account_profile'] as const
}

export function getRoomsAccountProfileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRoomsAccountProfileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rooms.account_profile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoomsAccountProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_profile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_profile.$get>>>
            >
          >,
          ReturnType<typeof getRoomsAccountProfileQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_profile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsAccountProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRoomsAccountProfileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.rooms.account_profile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchRoomsAccountProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchRoomsAccountProfileMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRoomsAccountSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rooms.account_settings.$get>>,
) {
  return ['rooms', '/rooms/account_settings', toValue(args)] as const
}

export function getRoomsAccountSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rooms.account_settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoomsAccountSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rooms.account_settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoomsAccountSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rooms.account_settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_settings.$get>>>
            >
          >,
          ReturnType<typeof getRoomsAccountSettingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.rooms.account_settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsAccountSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoomsAccountSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rooms.account_settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchRoomsAccountSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchRoomsAccountSettingsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRoomsDigitalSignageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rooms.digital_signage.$get>>,
) {
  return ['rooms', '/rooms/digital_signage', toValue(args)] as const
}

export function getRoomsDigitalSignageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rooms.digital_signage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoomsDigitalSignageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rooms.digital_signage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoomsDigitalSignage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.digital_signage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rooms.digital_signage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rooms.digital_signage.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rooms.digital_signage.$get>>>
            >
          >,
          ReturnType<typeof getRoomsDigitalSignageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.rooms.digital_signage.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsDigitalSignageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoomsDigitalSignageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rooms.digital_signage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchRoomsEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.events.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.rooms.events.$patch>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchRoomsEventsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRoomsLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rooms.locations.$get>>,
) {
  return ['rooms', '/rooms/locations', toValue(args)] as const
}

export function getRoomsLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rooms.locations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoomsLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rooms.locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoomsLocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rooms.locations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.$get>>>
            >
          >,
          ReturnType<typeof getRoomsLocationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoomsLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rooms.locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRoomsLocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.rooms.locations.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRoomsLocationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRoomsLocationsStructureQueryKey() {
  return ['rooms', '/rooms/locations/structure'] as const
}

export function getRoomsLocationsStructureQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRoomsLocationsStructureQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rooms.locations.structure.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoomsLocationsStructure<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.structure.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rooms.locations.structure.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rooms.locations.structure.$get>>
              >
            >
          >,
          ReturnType<typeof getRoomsLocationsStructureQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.rooms.locations.structure.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsLocationsStructureQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRoomsLocationsStructureQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.rooms.locations.structure.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchRoomsLocationsStructure<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchRoomsLocationsStructureMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRoomsLocationsLocationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rooms.locations)[':locationId']['$get']>>,
) {
  return ['rooms', '/rooms/locations/:locationId', toValue(args)] as const
}

export function getRoomsLocationsLocationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rooms.locations)[':locationId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoomsLocationsLocationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rooms.locations[':locationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoomsLocationsLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rooms.locations)[':locationId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRoomsLocationsLocationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsLocationsLocationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoomsLocationsLocationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rooms.locations[':locationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchRoomsLocationsLocationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchRoomsLocationsLocationIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutRoomsLocationsLocationIdLocation<
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
                    ReturnType<(typeof client.rooms.locations)[':locationId']['location']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.rooms.locations)[':locationId']['location']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRoomsLocationsLocationIdLocationMutationOptions<
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

export function getRoomsLocationsLocationIdSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>
  >,
) {
  return ['rooms', '/rooms/locations/:locationId/settings', toValue(args)] as const
}

export function getRoomsLocationsLocationIdSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoomsLocationsLocationIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rooms.locations[':locationId'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoomsLocationsLocationIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRoomsLocationsLocationIdSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsLocationsLocationIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoomsLocationsLocationIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rooms.locations[':locationId'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchRoomsLocationsLocationIdSettings<
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
                    ReturnType<(typeof client.rooms.locations)[':locationId']['settings']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.rooms.locations)[':locationId']['settings']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchRoomsLocationsLocationIdSettingsMutationOptions<
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

export function usePatchRoomsIdEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchRoomsIdEventsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRoomsRoomIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rooms)[':roomId']['$get']>>,
) {
  return ['rooms', '/rooms/:roomId', toValue(args)] as const
}

export function getRoomsRoomIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rooms)[':roomId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoomsRoomIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rooms[':roomId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoomsRoomId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rooms)[':roomId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['$get']>>>
            >
          >,
          ReturnType<typeof getRoomsRoomIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsRoomIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoomsRoomIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rooms[':roomId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteRoomsRoomId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRoomsRoomIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchRoomsRoomId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchRoomsRoomIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRoomsRoomIdDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rooms)[':roomId']['devices']['$get']>>,
) {
  return ['rooms', '/rooms/:roomId/devices', toValue(args)] as const
}

export function getRoomsRoomIdDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rooms)[':roomId']['devices']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoomsRoomIdDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rooms[':roomId'].devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoomsRoomIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rooms)[':roomId']['devices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rooms)[':roomId']['devices']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rooms)[':roomId']['devices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rooms)[':roomId']['devices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRoomsRoomIdDevicesQueryKey>
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
          Awaited<ReturnType<(typeof client.rooms)[':roomId']['devices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsRoomIdDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoomsRoomIdDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rooms[':roomId'].devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRoomsRoomIdDevicesDeviceIdAppVersion<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRoomsRoomIdDevicesDeviceIdAppVersionMutationOptions<
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

export function usePutRoomsRoomIdLocation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRoomsRoomIdLocationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRoomsRoomIdSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rooms)[':roomId']['settings']['$get']>>,
) {
  return ['rooms', '/rooms/:roomId/settings', toValue(args)] as const
}

export function getRoomsRoomIdSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rooms)[':roomId']['settings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoomsRoomIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rooms[':roomId'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoomsRoomIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rooms)[':roomId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rooms)[':roomId']['settings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rooms)[':roomId']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rooms)[':roomId']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRoomsRoomIdSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.rooms)[':roomId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoomsRoomIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoomsRoomIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rooms[':roomId'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchRoomsRoomIdSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchRoomsRoomIdSettingsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSipPhonesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sip_phones.$get>>,
) {
  return ['sip_phones', '/sip_phones', toValue(args)] as const
}

export function getSipPhonesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sip_phones.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSipPhonesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sip_phones.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSipPhones<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_phones.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sip_phones.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_phones.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_phones.$get>>>>
          >,
          ReturnType<typeof getSipPhonesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_phones.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSipPhonesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSipPhonesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sip_phones.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSipPhones<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_phones.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sip_phones.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSipPhonesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteSipPhonesPhoneId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSipPhonesPhoneIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchSipPhonesPhoneId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSipPhonesPhoneIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSipTrunkNumbersQueryKey() {
  return ['sip_trunk', '/sip_trunk/numbers'] as const
}

export function getSipTrunkNumbersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSipTrunkNumbersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sip_trunk.numbers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSipTrunkNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_trunk.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sip_trunk.numbers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sip_trunk.numbers.$get>>>
            >
          >,
          ReturnType<typeof getSipTrunkNumbersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip_trunk.numbers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSipTrunkNumbersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSipTrunkNumbersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sip_trunk.numbers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrackingFieldsQueryKey() {
  return ['tracking_fields', '/tracking_fields'] as const
}

export function getTrackingFieldsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTrackingFieldsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tracking_fields.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTrackingFields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_fields.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tracking_fields.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tracking_fields.$get>>>
            >
          >,
          ReturnType<typeof getTrackingFieldsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking_fields.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTrackingFieldsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tracking_fields.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTrackingFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tracking_fields.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.tracking_fields.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTrackingFieldsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTrackingFieldsFieldIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tracking_fields)[':fieldId']['$get']>>,
) {
  return ['tracking_fields', '/tracking_fields/:fieldId', toValue(args)] as const
}

export function getTrackingFieldsFieldIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tracking_fields)[':fieldId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrackingFieldsFieldIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tracking_fields[':fieldId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrackingFieldsFieldId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tracking_fields)[':fieldId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tracking_fields)[':fieldId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tracking_fields)[':fieldId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tracking_fields)[':fieldId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTrackingFieldsFieldIdQueryKey>
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
          Awaited<ReturnType<(typeof client.tracking_fields)[':fieldId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingFieldsFieldIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrackingFieldsFieldIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tracking_fields[':fieldId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteTrackingFieldsFieldId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTrackingFieldsFieldIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchTrackingFieldsFieldId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTrackingFieldsFieldIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTspQueryKey() {
  return ['tsp', '/tsp'] as const
}

export function getTspQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTspQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tsp.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTsp<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsp.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsp.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsp.$get>>>>>,
          ReturnType<typeof getTspQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTspQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTspQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tsp.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchTsp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsp.$patch>>>>>
          | undefined,
          TError,
          InferRequestType<typeof client.tsp.$patch>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTspMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersEmailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.email.$get>>,
) {
  return ['users', '/users/email', toValue(args)] as const
}

export function getUsersEmailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.email.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.email.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersEmail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.email.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.email.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.email.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.email.$get>>>>
          >,
          ReturnType<typeof getUsersEmailQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.email.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.email.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersMeZakQueryKey() {
  return ['users', '/users/me/zak'] as const
}

export function getUsersMeZakQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeZakQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.zak.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersMeZak<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.zak.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.zak.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.zak.$get>>>>
          >,
          ReturnType<typeof getUsersMeZakQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.zak.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeZakQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeZakQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.zak.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersVanityNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.vanity_name.$get>>,
) {
  return ['users', '/users/vanity_name', toValue(args)] as const
}

export function getUsersVanityNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.vanity_name.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersVanityNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.vanity_name.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersVanityName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.vanity_name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.vanity_name.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.vanity_name.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.vanity_name.$get>>>
            >
          >,
          ReturnType<typeof getUsersVanityNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.vanity_name.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersVanityNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersVanityNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.vanity_name.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
) {
  return ['users', '/users/:userId', toValue(args)] as const
}

export function getUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIdAssistantsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['assistants']['$get']>>,
) {
  return ['users', '/users/:userId/assistants', toValue(args)] as const
}

export function getUsersUserIdAssistantsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['assistants']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdAssistantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].assistants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdAssistants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['assistants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['assistants']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['assistants']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['assistants']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdAssistantsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['assistants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAssistantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdAssistantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].assistants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUsersUserIdAssistants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdAssistantsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteUsersUserIdAssistants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdAssistantsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteUsersUserIdAssistantsAssistantId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdAssistantsAssistantIdMutationOptions<
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

export function usePutUsersUserIdEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserIdEmailMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIdMeetingTemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['meeting_templates']['$get']>
  >,
) {
  return ['users', '/users/:userId/meeting_templates', toValue(args)] as const
}

export function getUsersUserIdMeetingTemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['meeting_templates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdMeetingTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].meeting_templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdMeetingTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['meeting_templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['meeting_templates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['meeting_templates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['meeting_templates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdMeetingTemplatesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['meeting_templates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdMeetingTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdMeetingTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].meeting_templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdMeetingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['meetings']['$get']>>,
) {
  return ['users', '/users/:userId/meetings', toValue(args)] as const
}

export function getUsersUserIdMeetingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['meetings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdMeetingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].meetings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdMeetings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['meetings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['meetings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['meetings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['meetings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdMeetingsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['meetings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdMeetingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdMeetingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].meetings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUsersUserIdMeetings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdMeetingsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIdPacQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['pac']['$get']>>,
) {
  return ['users', '/users/:userId/pac', toValue(args)] as const
}

export function getUsersUserIdPacQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['pac']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdPacQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].pac.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdPac<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['pac']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['pac']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['pac']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['pac']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdPacQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['pac']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPacQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdPacQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].pac.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutUsersUserIdPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserIdPasswordMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIdPermissionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['permissions']['$get']>>,
) {
  return ['users', '/users/:userId/permissions', toValue(args)] as const
}

export function getUsersUserIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['permissions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['permissions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['permissions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdPermissionsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUsersUserIdPicture<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdPictureMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutUsersUserIdPresenceStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserIdPresenceStatusMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIdRecordingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['recordings']['$get']>>,
) {
  return ['users', '/users/:userId/recordings', toValue(args)] as const
}

export function getUsersUserIdRecordingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['recordings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdRecordingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].recordings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdRecordings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['recordings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['recordings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['recordings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdRecordingsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['recordings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdRecordingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdRecordingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].recordings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdSchedulersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['schedulers']['$get']>>,
) {
  return ['users', '/users/:userId/schedulers', toValue(args)] as const
}

export function getUsersUserIdSchedulersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['schedulers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdSchedulersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].schedulers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdSchedulers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['schedulers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['schedulers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['schedulers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['schedulers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdSchedulersQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['schedulers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdSchedulersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdSchedulersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].schedulers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteUsersUserIdSchedulers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdSchedulersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteUsersUserIdSchedulersSchedulerId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdSchedulersSchedulerIdMutationOptions<
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

export function getUsersUserIdSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['settings']['$get']>>,
) {
  return ['users', '/users/:userId/settings', toValue(args)] as const
}

export function getUsersUserIdSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['settings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['settings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchUsersUserIdSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdSettingsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostUsersUserIdSettingsVirtualBackgrounds<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdSettingsVirtualBackgroundsMutationOptions<
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

export function useDeleteUsersUserIdSettingsVirtualBackgrounds<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdSettingsVirtualBackgroundsMutationOptions<
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

export function usePutUsersUserIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserIdStatusMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIdTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['token']['$get']>>,
) {
  return ['users', '/users/:userId/token', toValue(args)] as const
}

export function getUsersUserIdTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['token']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].token.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['token']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdTokenQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].token.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteUsersUserIdToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdTokenMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIdTspQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['tsp']['$get']>>,
) {
  return ['users', '/users/:userId/tsp', toValue(args)] as const
}

export function getUsersUserIdTspQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['tsp']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdTspQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].tsp.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdTsp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['tsp']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['tsp']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['tsp']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['tsp']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdTspQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['tsp']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdTspQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdTspQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].tsp.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUsersUserIdTsp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdTspMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchUsersUserIdTspSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdTspSettingsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIdTspTspIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>
  >,
) {
  return ['users', '/users/:userId/tsp/:tspId', toValue(args)] as const
}

export function getUsersUserIdTspTspIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdTspTspIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].tsp[':tspId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdTspTspId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdTspTspIdQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdTspTspIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdTspTspIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].tsp[':tspId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteUsersUserIdTspTspId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdTspTspIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchUsersUserIdTspTspId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdTspTspIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIdWebinarTemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['webinar_templates']['$get']>
  >,
) {
  return ['users', '/users/:userId/webinar_templates', toValue(args)] as const
}

export function getUsersUserIdWebinarTemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['webinar_templates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdWebinarTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].webinar_templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdWebinarTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['webinar_templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['webinar_templates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['webinar_templates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['webinar_templates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdWebinarTemplatesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['webinar_templates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdWebinarTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdWebinarTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].webinar_templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdWebinarsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['webinars']['$get']>>,
) {
  return ['users', '/users/:userId/webinars', toValue(args)] as const
}

export function getUsersUserIdWebinarsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['webinars']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdWebinarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].webinars.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdWebinars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['webinars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['webinars']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['webinars']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['webinars']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdWebinarsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['webinars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdWebinarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdWebinarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].webinars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUsersUserIdWebinars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdWebinarsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebinarsWebinarIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webinars)[':webinarId']['$get']>>,
) {
  return ['webinars', '/webinars/:webinarId', toValue(args)] as const
}

export function getWebinarsWebinarIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webinars)[':webinarId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebinarsWebinarIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webinars[':webinarId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebinarsWebinarId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webinars)[':webinarId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webinars)[':webinarId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webinars)[':webinarId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webinars)[':webinarId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebinarsWebinarIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.webinars)[':webinarId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebinarsWebinarIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebinarsWebinarIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webinars[':webinarId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteWebinarsWebinarId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebinarsWebinarIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchWebinarsWebinarId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWebinarsWebinarIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostWebinarsWebinarIdBatchRegistrants<
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
                  ReturnType<(typeof client.webinars)[':webinarId']['batch_registrants']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webinars)[':webinarId']['batch_registrants']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebinarsWebinarIdBatchRegistrantsMutationOptions<
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

export function getWebinarsWebinarIdPanelistsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$get']>
  >,
) {
  return ['webinars', '/webinars/:webinarId/panelists', toValue(args)] as const
}

export function getWebinarsWebinarIdPanelistsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebinarsWebinarIdPanelistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webinars[':webinarId'].panelists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebinarsWebinarIdPanelists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebinarsWebinarIdPanelistsQueryKey>
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
          Awaited<ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebinarsWebinarIdPanelistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebinarsWebinarIdPanelistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webinars[':webinarId'].panelists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWebinarsWebinarIdPanelists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebinarsWebinarIdPanelistsMutationOptions<
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

export function useDeleteWebinarsWebinarIdPanelists<
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
                    ReturnType<(typeof client.webinars)[':webinarId']['panelists']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebinarsWebinarIdPanelistsMutationOptions<
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

export function useDeleteWebinarsWebinarIdPanelistsPanelistId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebinarsWebinarIdPanelistsPanelistIdMutationOptions<
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

export function getWebinarsWebinarIdPollsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webinars)[':webinarId']['polls']['$get']>>,
) {
  return ['webinars', '/webinars/:webinarId/polls', toValue(args)] as const
}

export function getWebinarsWebinarIdPollsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webinars)[':webinarId']['polls']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebinarsWebinarIdPollsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webinars[':webinarId'].polls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebinarsWebinarIdPolls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webinars)[':webinarId']['polls']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebinarsWebinarIdPollsQueryKey>
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
          Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebinarsWebinarIdPollsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebinarsWebinarIdPollsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webinars[':webinarId'].polls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWebinarsWebinarIdPolls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebinarsWebinarIdPollsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebinarsWebinarIdPollsPollIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>
  >,
) {
  return ['webinars', '/webinars/:webinarId/polls/:pollId', toValue(args)] as const
}

export function getWebinarsWebinarIdPollsPollIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebinarsWebinarIdPollsPollIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webinars[':webinarId'].polls[':pollId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebinarsWebinarIdPollsPollId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWebinarsWebinarIdPollsPollIdQueryKey>
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
          Awaited<ReturnType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebinarsWebinarIdPollsPollIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebinarsWebinarIdPollsPollIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webinars[':webinarId'].polls[':pollId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutWebinarsWebinarIdPollsPollId<
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
                    ReturnType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWebinarsWebinarIdPollsPollIdMutationOptions<
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

export function useDeleteWebinarsWebinarIdPollsPollId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebinarsWebinarIdPollsPollIdMutationOptions<
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

export function getWebinarsWebinarIdRegistrantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['$get']>
  >,
) {
  return ['webinars', '/webinars/:webinarId/registrants', toValue(args)] as const
}

export function getWebinarsWebinarIdRegistrantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebinarsWebinarIdRegistrantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webinars[':webinarId'].registrants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebinarsWebinarIdRegistrants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webinars)[':webinarId']['registrants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webinars)[':webinarId']['registrants']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webinars)[':webinarId']['registrants']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebinarsWebinarIdRegistrantsQueryKey>
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
          Awaited<ReturnType<(typeof client.webinars)[':webinarId']['registrants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebinarsWebinarIdRegistrantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebinarsWebinarIdRegistrantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webinars[':webinarId'].registrants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWebinarsWebinarIdRegistrants<
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
                Awaited<ReturnType<(typeof client.webinars)[':webinarId']['registrants']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebinarsWebinarIdRegistrantsMutationOptions<
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

export function getWebinarsWebinarIdRegistrantsQuestionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['questions']['$get']>
  >,
) {
  return ['webinars', '/webinars/:webinarId/registrants/questions', toValue(args)] as const
}

export function getWebinarsWebinarIdRegistrantsQuestionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['questions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebinarsWebinarIdRegistrantsQuestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webinars[':webinarId'].registrants.questions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebinarsWebinarIdRegistrantsQuestions<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['questions']['$get']>
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
                    (typeof client.webinars)[':webinarId']['registrants']['questions']['$get']
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
                    (typeof client.webinars)[':webinarId']['registrants']['questions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebinarsWebinarIdRegistrantsQuestionsQueryKey>
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
            ReturnType<(typeof client.webinars)[':webinarId']['registrants']['questions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebinarsWebinarIdRegistrantsQuestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebinarsWebinarIdRegistrantsQuestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webinars[':webinarId'].registrants.questions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchWebinarsWebinarIdRegistrantsQuestions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWebinarsWebinarIdRegistrantsQuestionsMutationOptions<
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

export function usePutWebinarsWebinarIdRegistrantsStatus<
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
                    (typeof client.webinars)[':webinarId']['registrants']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['status']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWebinarsWebinarIdRegistrantsStatusMutationOptions<
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

export function getWebinarsWebinarIdRegistrantsRegistrantIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']>
  >,
) {
  return ['webinars', '/webinars/:webinarId/registrants/:registrantId', toValue(args)] as const
}

export function getWebinarsWebinarIdRegistrantsRegistrantIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebinarsWebinarIdRegistrantsRegistrantIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webinars[':webinarId'].registrants[':registrantId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebinarsWebinarIdRegistrantsRegistrantId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']>
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
                    (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']
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
                    (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebinarsWebinarIdRegistrantsRegistrantIdQueryKey>
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
              (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebinarsWebinarIdRegistrantsRegistrantIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebinarsWebinarIdRegistrantsRegistrantIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webinars[':webinarId'].registrants[':registrantId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteWebinarsWebinarIdRegistrantsRegistrantId<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebinarsWebinarIdRegistrantsRegistrantIdMutationOptions<
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

export function usePutWebinarsWebinarIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWebinarsWebinarIdStatusMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebinarsWebinarIdTrackingSourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>
  >,
) {
  return ['webinars', '/webinars/:webinarId/tracking_sources', toValue(args)] as const
}

export function getWebinarsWebinarIdTrackingSourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebinarsWebinarIdTrackingSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webinars[':webinarId'].tracking_sources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebinarsWebinarIdTrackingSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWebinarsWebinarIdTrackingSourcesQueryKey>
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
          Awaited<ReturnType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebinarsWebinarIdTrackingSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebinarsWebinarIdTrackingSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webinars[':webinarId'].tracking_sources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
