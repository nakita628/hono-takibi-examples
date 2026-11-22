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

export function getAddressesKey() {
  return ['addresses'] as const
}

export function getBankAccountsKey() {
  return ['bank_accounts'] as const
}

export function getBillingGroupsKey() {
  return ['billing_groups'] as const
}

export function getBookletsKey() {
  return ['booklets'] as const
}

export function getBuckslipsKey() {
  return ['buckslips'] as const
}

export function getBulkKey() {
  return ['bulk'] as const
}

export function getCampaignsKey() {
  return ['campaigns'] as const
}

export function getCardsKey() {
  return ['cards'] as const
}

export function getChecksKey() {
  return ['checks'] as const
}

export function getCreativesKey() {
  return ['creatives'] as const
}

export function getDomainsKey() {
  return ['domains'] as const
}

export function getIdentityValidationKey() {
  return ['identity_validation'] as const
}

export function getInformedDeliveryCampaignsKey() {
  return ['informed_delivery_campaigns'] as const
}

export function getIntlVerificationsKey() {
  return ['intl_verifications'] as const
}

export function getLettersKey() {
  return ['letters'] as const
}

export function getLinksKey() {
  return ['links'] as const
}

export function getPostcardsKey() {
  return ['postcards'] as const
}

export function getQrCodeAnalyticsKey() {
  return ['qr_code_analytics'] as const
}

export function getResourceProofsKey() {
  return ['resource_proofs'] as const
}

export function getSelfMailersKey() {
  return ['self_mailers'] as const
}

export function getSnapPacksKey() {
  return ['snap_packs'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getUploadsKey() {
  return ['uploads'] as const
}

export function getUsAutocompletionsKey() {
  return ['us_autocompletions'] as const
}

export function getUsReverseGeocodeLookupsKey() {
  return ['us_reverse_geocode_lookups'] as const
}

export function getUsVerificationsKey() {
  return ['us_verifications'] as const
}

export function getUsZipLookupsKey() {
  return ['us_zip_lookups'] as const
}

export function getAccountsQueryKey() {
  return ['accounts', '/accounts'] as const
}

export function getAccountsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
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
      queryKey: getAccountsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAddressesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.addresses.$get>>,
) {
  return ['addresses', '/addresses', toValue(args)] as const
}

export function getAddressesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.addresses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.addresses.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAddresses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.addresses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
          >,
          ReturnType<typeof getAddressesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.addresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAddressesMutationKey() {
  return ['addresses', '/addresses', 'POST'] as const
}

export function getPostAddressesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$post>>>>>,
    TError,
    InferRequestType<typeof client.addresses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAddressesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.addresses.$post>) {
      return parseResponse(client.addresses.$post(args, options))
    },
  })
}

export function usePostAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.addresses.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAddressesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAddressesAdrIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addresses)[':adr_id']['$get']>>,
) {
  return ['addresses', '/addresses/:adr_id', toValue(args)] as const
}

export function getAddressesAdrIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addresses)[':adr_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddressesAdrIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.addresses[':adr_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAddressesAdrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':adr_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addresses)[':adr_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':adr_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':adr_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAddressesAdrIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':adr_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddressesAdrIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddressesAdrIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.addresses[':adr_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAddressesAdrIdMutationKey() {
  return ['addresses', '/addresses/:adr_id', 'DELETE'] as const
}

export function getDeleteAddressesAdrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':adr_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.addresses)[':adr_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAddressesAdrIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.addresses)[':adr_id']['$delete']>) {
      return parseResponse(client.addresses[':adr_id'].$delete(args, options))
    },
  })
}

export function useDeleteAddressesAdrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':adr_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.addresses)[':adr_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAddressesAdrIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBankAccountsBankIdVerifyMutationKey() {
  return ['bank_accounts', '/bank_accounts/:bank_id/verify', 'POST'] as const
}

export function getPostBankAccountsBankIdVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bank_accounts)[':bank_id']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bank_accounts)[':bank_id']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBankAccountsBankIdVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bank_accounts)[':bank_id']['verify']['$post']>,
    ) {
      return parseResponse(client.bank_accounts[':bank_id'].verify.$post(args, options))
    },
  })
}

export function usePostBankAccountsBankIdVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bank_accounts)[':bank_id']['verify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bank_accounts)[':bank_id']['verify']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBankAccountsBankIdVerifyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBankAccountsBankIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bank_accounts)[':bank_id']['$get']>>,
) {
  return ['bank_accounts', '/bank_accounts/:bank_id', toValue(args)] as const
}

export function getBankAccountsBankIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bank_accounts)[':bank_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBankAccountsBankIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bank_accounts[':bank_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBankAccountsBankId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bank_accounts)[':bank_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bank_accounts)[':bank_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bank_accounts)[':bank_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bank_accounts)[':bank_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBankAccountsBankIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bank_accounts)[':bank_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankAccountsBankIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBankAccountsBankIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bank_accounts[':bank_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteBankAccountsBankIdMutationKey() {
  return ['bank_accounts', '/bank_accounts/:bank_id', 'DELETE'] as const
}

export function getDeleteBankAccountsBankIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bank_accounts)[':bank_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bank_accounts)[':bank_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBankAccountsBankIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bank_accounts)[':bank_id']['$delete']>) {
      return parseResponse(client.bank_accounts[':bank_id'].$delete(args, options))
    },
  })
}

export function useDeleteBankAccountsBankId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bank_accounts)[':bank_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bank_accounts)[':bank_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBankAccountsBankIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBankAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bank_accounts.$get>>,
) {
  return ['bank_accounts', '/bank_accounts', toValue(args)] as const
}

export function getBankAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bank_accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBankAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bank_accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBankAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bank_accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_accounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_accounts.$get>>>>
          >,
          ReturnType<typeof getBankAccountsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBankAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBankAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bank_accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBankAccountsMutationKey() {
  return ['bank_accounts', '/bank_accounts', 'POST'] as const
}

export function getPostBankAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_accounts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bank_accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBankAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bank_accounts.$post>) {
      return parseResponse(client.bank_accounts.$post(args, options))
    },
  })
}

export function usePostBankAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_accounts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.bank_accounts.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBankAccountsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBillingGroupsBgIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.billing_groups)[':bg_id']['$get']>>,
) {
  return ['billing_groups', '/billing_groups/:bg_id', toValue(args)] as const
}

export function getBillingGroupsBgIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.billing_groups)[':bg_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillingGroupsBgIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billing_groups[':bg_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBillingGroupsBgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':bg_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.billing_groups)[':bg_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billing_groups)[':bg_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billing_groups)[':bg_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBillingGroupsBgIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':bg_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingGroupsBgIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillingGroupsBgIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.billing_groups[':bg_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBillingGroupsBgIdMutationKey() {
  return ['billing_groups', '/billing_groups/:bg_id', 'POST'] as const
}

export function getPostBillingGroupsBgIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':bg_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.billing_groups)[':bg_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBillingGroupsBgIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.billing_groups)[':bg_id']['$post']>) {
      return parseResponse(client.billing_groups[':bg_id'].$post(args, options))
    },
  })
}

export function usePostBillingGroupsBgId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billing_groups)[':bg_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.billing_groups)[':bg_id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBillingGroupsBgIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBillingGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billing_groups.$get>>,
) {
  return ['billing_groups', '/billing_groups', toValue(args)] as const
}

export function getBillingGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billing_groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillingGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billing_groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBillingGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billing_groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
          >,
          ReturnType<typeof getBillingGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBillingGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillingGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.billing_groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBillingGroupsMutationKey() {
  return ['billing_groups', '/billing_groups', 'POST'] as const
}

export function getPostBillingGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.billing_groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBillingGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.billing_groups.$post>) {
      return parseResponse(client.billing_groups.$post(args, options))
    },
  })
}

export function usePostBillingGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.billing_groups.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBillingGroupsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBookletsBookletIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.booklets)[':booklet_id']['$get']>>,
) {
  return ['booklets', '/booklets/:booklet_id', toValue(args)] as const
}

export function getBookletsBookletIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.booklets)[':booklet_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookletsBookletIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.booklets[':booklet_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookletsBookletId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.booklets)[':booklet_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.booklets)[':booklet_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.booklets)[':booklet_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.booklets)[':booklet_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBookletsBookletIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.booklets)[':booklet_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookletsBookletIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookletsBookletIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.booklets[':booklet_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteBookletsBookletIdMutationKey() {
  return ['booklets', '/booklets/:booklet_id', 'DELETE'] as const
}

export function getDeleteBookletsBookletIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.booklets)[':booklet_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.booklets)[':booklet_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBookletsBookletIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.booklets)[':booklet_id']['$delete']>) {
      return parseResponse(client.booklets[':booklet_id'].$delete(args, options))
    },
  })
}

export function useDeleteBookletsBookletId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.booklets)[':booklet_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.booklets)[':booklet_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBookletsBookletIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBookletsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.booklets.$get>>,
) {
  return ['booklets', '/booklets', toValue(args)] as const
}

export function getBookletsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.booklets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookletsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.booklets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBooklets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booklets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.booklets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booklets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booklets.$get>>>>
          >,
          ReturnType<typeof getBookletsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booklets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBookletsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookletsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.booklets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBookletsMutationKey() {
  return ['booklets', '/booklets', 'POST'] as const
}

export function getPostBookletsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booklets.$post>>>>>,
    TError,
    InferRequestType<typeof client.booklets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBookletsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.booklets.$post>) {
      return parseResponse(client.booklets.$post(args, options))
    },
  })
}

export function usePostBooklets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booklets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.booklets.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBookletsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBuckslipsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.buckslips.$get>>,
) {
  return ['buckslips', '/buckslips', toValue(args)] as const
}

export function getBuckslipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.buckslips.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuckslipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckslips.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBuckslips<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckslips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.buckslips.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckslips.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckslips.$get>>>>
          >,
          ReturnType<typeof getBuckslipsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckslips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBuckslipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuckslipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckslips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBuckslipsMutationKey() {
  return ['buckslips', '/buckslips', 'POST'] as const
}

export function getPostBuckslipsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckslips.$post>>>>>,
    TError,
    InferRequestType<typeof client.buckslips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBuckslipsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.buckslips.$post>) {
      return parseResponse(client.buckslips.$post(args, options))
    },
  })
}

export function usePostBuckslips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckslips.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.buckslips.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBuckslipsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBuckslipsBuckslipIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckslips)[':buckslip_id']['$get']>>,
) {
  return ['buckslips', '/buckslips/:buckslip_id', toValue(args)] as const
}

export function getBuckslipsBuckslipIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckslips)[':buckslip_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuckslipsBuckslipIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckslips[':buckslip_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBuckslipsBuckslipId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckslips)[':buckslip_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBuckslipsBuckslipIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuckslipsBuckslipIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuckslipsBuckslipIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckslips[':buckslip_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteBuckslipsBuckslipIdMutationKey() {
  return ['buckslips', '/buckslips/:buckslip_id', 'DELETE'] as const
}

export function getDeleteBuckslipsBuckslipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.buckslips)[':buckslip_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBuckslipsBuckslipIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.buckslips)[':buckslip_id']['$delete']>) {
      return parseResponse(client.buckslips[':buckslip_id'].$delete(args, options))
    },
  })
}

export function useDeleteBuckslipsBuckslipId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.buckslips)[':buckslip_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBuckslipsBuckslipIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchBuckslipsBuckslipIdMutationKey() {
  return ['buckslips', '/buckslips/:buckslip_id', 'PATCH'] as const
}

export function getPatchBuckslipsBuckslipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.buckslips)[':buckslip_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBuckslipsBuckslipIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.buckslips)[':buckslip_id']['$patch']>) {
      return parseResponse(client.buckslips[':buckslip_id'].$patch(args, options))
    },
  })
}

export function usePatchBuckslipsBuckslipId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.buckslips)[':buckslip_id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBuckslipsBuckslipIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBuckslipsBuckslipIdOrdersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>
  >,
) {
  return ['buckslips', '/buckslips/:buckslip_id/orders', toValue(args)] as const
}

export function getBuckslipsBuckslipIdOrdersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuckslipsBuckslipIdOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckslips[':buckslip_id'].orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBuckslipsBuckslipIdOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBuckslipsBuckslipIdOrdersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuckslipsBuckslipIdOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuckslipsBuckslipIdOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckslips[':buckslip_id'].orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBuckslipsBuckslipIdOrdersMutationKey() {
  return ['buckslips', '/buckslips/:buckslip_id/orders', 'POST'] as const
}

export function getPostBuckslipsBuckslipIdOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['orders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.buckslips)[':buckslip_id']['orders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBuckslipsBuckslipIdOrdersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.buckslips)[':buckslip_id']['orders']['$post']>,
    ) {
      return parseResponse(client.buckslips[':buckslip_id'].orders.$post(args, options))
    },
  })
}

export function usePostBuckslipsBuckslipIdOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['orders']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.buckslips)[':buckslip_id']['orders']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBuckslipsBuckslipIdOrdersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBulkUsVerificationsMutationKey() {
  return ['bulk', '/bulk/us_verifications', 'POST'] as const
}

export function getPostBulkUsVerificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bulk.us_verifications.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.bulk.us_verifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBulkUsVerificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bulk.us_verifications.$post>) {
      return parseResponse(client.bulk.us_verifications.$post(args, options))
    },
  })
}

export function usePostBulkUsVerifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulk.us_verifications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bulk.us_verifications.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBulkUsVerificationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBulkIntlVerificationsMutationKey() {
  return ['bulk', '/bulk/intl_verifications', 'POST'] as const
}

export function getPostBulkIntlVerificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bulk.intl_verifications.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.bulk.intl_verifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBulkIntlVerificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bulk.intl_verifications.$post>) {
      return parseResponse(client.bulk.intl_verifications.$post(args, options))
    },
  })
}

export function usePostBulkIntlVerifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulk.intl_verifications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bulk.intl_verifications.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBulkIntlVerificationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCampaignsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.campaigns.$get>>,
) {
  return ['campaigns', '/campaigns', toValue(args)] as const
}

export function getCampaignsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.campaigns.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCampaignsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.campaigns.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.campaigns.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
          >,
          ReturnType<typeof getCampaignsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCampaignsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCampaignsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.campaigns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCampaignsMutationKey() {
  return ['campaigns', '/campaigns', 'POST'] as const
}

export function getPostCampaignsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$post>>>>>,
    TError,
    InferRequestType<typeof client.campaigns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCampaignsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.campaigns.$post>) {
      return parseResponse(client.campaigns.$post(args, options))
    },
  })
}

export function usePostCampaigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.campaigns.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCampaignsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCampaignsCmpIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.campaigns)[':cmp_id']['$get']>>,
) {
  return ['campaigns', '/campaigns/:cmp_id', toValue(args)] as const
}

export function getCampaignsCmpIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.campaigns)[':cmp_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCampaignsCmpIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.campaigns[':cmp_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCampaignsCmpId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.campaigns)[':cmp_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCampaignsCmpIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCampaignsCmpIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCampaignsCmpIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.campaigns[':cmp_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCampaignsCmpIdMutationKey() {
  return ['campaigns', '/campaigns/:cmp_id', 'DELETE'] as const
}

export function getDeleteCampaignsCmpIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':cmp_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCampaignsCmpIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaigns)[':cmp_id']['$delete']>) {
      return parseResponse(client.campaigns[':cmp_id'].$delete(args, options))
    },
  })
}

export function useDeleteCampaignsCmpId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.campaigns)[':cmp_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCampaignsCmpIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchCampaignsCmpIdMutationKey() {
  return ['campaigns', '/campaigns/:cmp_id', 'PATCH'] as const
}

export function getPatchCampaignsCmpIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':cmp_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCampaignsCmpIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaigns)[':cmp_id']['$patch']>) {
      return parseResponse(client.campaigns[':cmp_id'].$patch(args, options))
    },
  })
}

export function usePatchCampaignsCmpId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.campaigns)[':cmp_id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCampaignsCmpIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCampaignsCmpIdSendMutationKey() {
  return ['campaigns', '/campaigns/:cmp_id/send', 'POST'] as const
}

export function getPostCampaignsCmpIdSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['send']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':cmp_id']['send']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCampaignsCmpIdSendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.campaigns)[':cmp_id']['send']['$post']>,
    ) {
      return parseResponse(client.campaigns[':cmp_id'].send.$post(args, options))
    },
  })
}

export function usePostCampaignsCmpIdSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['send']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.campaigns)[':cmp_id']['send']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCampaignsCmpIdSendMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cards.$get>>,
) {
  return ['cards', '/cards', toValue(args)] as const
}

export function getCardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cards.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCards<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cards.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
          ReturnType<typeof getCardsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCardsMutationKey() {
  return ['cards', '/cards', 'POST'] as const
}

export function getPostCardsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$post>>>>>,
    TError,
    InferRequestType<typeof client.cards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cards.$post>) {
      return parseResponse(client.cards.$post(args, options))
    },
  })
}

export function usePostCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$post>>>>>,
          TError,
          InferRequestType<typeof client.cards.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCardsCardIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':card_id']['$get']>>,
) {
  return ['cards', '/cards/:card_id', toValue(args)] as const
}

export function getCardsCardIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':card_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsCardIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':card_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsCardId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':card_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
            >
          >,
          ReturnType<typeof getCardsCardIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsCardIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsCardIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':card_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCardsCardIdMutationKey() {
  return ['cards', '/cards/:card_id', 'POST'] as const
}

export function getPostCardsCardIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':card_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsCardIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':card_id']['$post']>) {
      return parseResponse(client.cards[':card_id'].$post(args, options))
    },
  })
}

export function usePostCardsCardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':card_id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsCardIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCardsCardIdMutationKey() {
  return ['cards', '/cards/:card_id', 'DELETE'] as const
}

export function getDeleteCardsCardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':card_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsCardIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':card_id']['$delete']>) {
      return parseResponse(client.cards[':card_id'].$delete(args, options))
    },
  })
}

export function useDeleteCardsCardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':card_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':card_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCardsCardIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCardsCardIdOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':card_id']['orders']['$get']>>,
) {
  return ['cards', '/cards/:card_id/orders', toValue(args)] as const
}

export function getCardsCardIdOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':card_id']['orders']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsCardIdOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':card_id'].orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsCardIdOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['orders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':card_id']['orders']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':card_id']['orders']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':card_id']['orders']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsCardIdOrdersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.cards)[':card_id']['orders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsCardIdOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsCardIdOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':card_id'].orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCardsCardIdOrdersMutationKey() {
  return ['cards', '/cards/:card_id/orders', 'POST'] as const
}

export function getPostCardsCardIdOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':card_id']['orders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':card_id']['orders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsCardIdOrdersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':card_id']['orders']['$post']>) {
      return parseResponse(client.cards[':card_id'].orders.$post(args, options))
    },
  })
}

export function usePostCardsCardIdOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':card_id']['orders']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':card_id']['orders']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsCardIdOrdersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChecksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.checks.$get>>,
) {
  return ['checks', '/checks', toValue(args)] as const
}

export function getChecksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.checks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChecks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.checks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
          ReturnType<typeof getChecksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChecksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChecksMutationKey() {
  return ['checks', '/checks', 'POST'] as const
}

export function getPostChecksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$post>>>>>,
    TError,
    InferRequestType<typeof client.checks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChecksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.checks.$post>) {
      return parseResponse(client.checks.$post(args, options))
    },
  })
}

export function usePostChecks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.checks.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChecksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChecksChkIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checks)[':chk_id']['$get']>>,
) {
  return ['checks', '/checks/:chk_id', toValue(args)] as const
}

export function getChecksChkIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checks)[':chk_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecksChkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checks[':chk_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChecksChkId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':chk_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checks)[':chk_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':chk_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':chk_id']['$get']>>>
            >
          >,
          ReturnType<typeof getChecksChkIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':chk_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecksChkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecksChkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checks[':chk_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteChecksChkIdMutationKey() {
  return ['checks', '/checks/:chk_id', 'DELETE'] as const
}

export function getDeleteChecksChkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':chk_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.checks)[':chk_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChecksChkIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.checks)[':chk_id']['$delete']>) {
      return parseResponse(client.checks[':chk_id'].$delete(args, options))
    },
  })
}

export function useDeleteChecksChkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checks)[':chk_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.checks)[':chk_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChecksChkIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCreativesMutationKey() {
  return ['creatives', '/creatives', 'POST'] as const
}

export function getPostCreativesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$post>>>>>,
    TError,
    InferRequestType<typeof client.creatives.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreativesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.creatives.$post>) {
      return parseResponse(client.creatives.$post(args, options))
    },
  })
}

export function usePostCreatives<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.creatives.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreativesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCreativesCrvIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.creatives)[':crv_id']['$get']>>,
) {
  return ['creatives', '/creatives/:crv_id', toValue(args)] as const
}

export function getCreativesCrvIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.creatives)[':crv_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreativesCrvIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.creatives[':crv_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreativesCrvId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.creatives)[':crv_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.creatives)[':crv_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.creatives)[':crv_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.creatives)[':crv_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCreativesCrvIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.creatives)[':crv_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreativesCrvIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreativesCrvIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.creatives[':crv_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchCreativesCrvIdMutationKey() {
  return ['creatives', '/creatives/:crv_id', 'PATCH'] as const
}

export function getPatchCreativesCrvIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.creatives)[':crv_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.creatives)[':crv_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCreativesCrvIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.creatives)[':crv_id']['$patch']>) {
      return parseResponse(client.creatives[':crv_id'].$patch(args, options))
    },
  })
}

export function usePatchCreativesCrvId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.creatives)[':crv_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.creatives)[':crv_id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCreativesCrvIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostIdentityValidationMutationKey() {
  return ['identity_validation', '/identity_validation', 'POST'] as const
}

export function getPostIdentityValidationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identity_validation.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.identity_validation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIdentityValidationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.identity_validation.$post>) {
      return parseResponse(client.identity_validation.$post(args, options))
    },
  })
}

export function usePostIdentityValidation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.identity_validation.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.identity_validation.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIdentityValidationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInformedDeliveryCampaignsQueryKey() {
  return ['informed_delivery_campaigns', '/informed_delivery_campaigns'] as const
}

export function getInformedDeliveryCampaignsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInformedDeliveryCampaignsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.informed_delivery_campaigns.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInformedDeliveryCampaigns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.informed_delivery_campaigns.$get>>>
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
                Awaited<ReturnType<typeof client.informed_delivery_campaigns.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.informed_delivery_campaigns.$get>>
              >
            >
          >,
          ReturnType<typeof getInformedDeliveryCampaignsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.informed_delivery_campaigns.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInformedDeliveryCampaignsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInformedDeliveryCampaignsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.informed_delivery_campaigns.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostInformedDeliveryCampaignsMutationKey() {
  return ['informed_delivery_campaigns', '/informed_delivery_campaigns', 'POST'] as const
}

export function getPostInformedDeliveryCampaignsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.informed_delivery_campaigns.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.informed_delivery_campaigns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInformedDeliveryCampaignsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.informed_delivery_campaigns.$post>) {
      return parseResponse(client.informed_delivery_campaigns.$post(args, options))
    },
  })
}

export function usePostInformedDeliveryCampaigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.informed_delivery_campaigns.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.informed_delivery_campaigns.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInformedDeliveryCampaignsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInformedDeliveryCampaignsUspsCampaignIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$get']>
  >,
) {
  return [
    'informed_delivery_campaigns',
    '/informed_delivery_campaigns/:usps_campaign_id',
    toValue(args),
  ] as const
}

export function getInformedDeliveryCampaignsUspsCampaignIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInformedDeliveryCampaignsUspsCampaignIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.informed_delivery_campaigns[':usps_campaign_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInformedDeliveryCampaignsUspsCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$get']>
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
                    (typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$get']
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
                    (typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInformedDeliveryCampaignsUspsCampaignIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInformedDeliveryCampaignsUspsCampaignIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInformedDeliveryCampaignsUspsCampaignIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.informed_delivery_campaigns[':usps_campaign_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchInformedDeliveryCampaignsUspsCampaignIdMutationKey() {
  return [
    'informed_delivery_campaigns',
    '/informed_delivery_campaigns/:usps_campaign_id',
    'PATCH',
  ] as const
}

export function getPatchInformedDeliveryCampaignsUspsCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchInformedDeliveryCampaignsUspsCampaignIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.informed_delivery_campaigns[':usps_campaign_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchInformedDeliveryCampaignsUspsCampaignId<
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
                    (typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$patch']
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
  const mutationDefaults = getPatchInformedDeliveryCampaignsUspsCampaignIdMutationOptions<
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

export function getPostIntlVerificationsMutationKey() {
  return ['intl_verifications', '/intl_verifications', 'POST'] as const
}

export function getPostIntlVerificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intl_verifications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.intl_verifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntlVerificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.intl_verifications.$post>) {
      return parseResponse(client.intl_verifications.$post(args, options))
    },
  })
}

export function usePostIntlVerifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.intl_verifications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.intl_verifications.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIntlVerificationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLettersLtrIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.letters)[':ltr_id']['$get']>>,
) {
  return ['letters', '/letters/:ltr_id', toValue(args)] as const
}

export function getLettersLtrIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.letters)[':ltr_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLettersLtrIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.letters[':ltr_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLettersLtrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.letters)[':ltr_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.letters)[':ltr_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.letters)[':ltr_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.letters)[':ltr_id']['$get']>>>
            >
          >,
          ReturnType<typeof getLettersLtrIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.letters)[':ltr_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLettersLtrIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLettersLtrIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.letters[':ltr_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteLettersLtrIdMutationKey() {
  return ['letters', '/letters/:ltr_id', 'DELETE'] as const
}

export function getDeleteLettersLtrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.letters)[':ltr_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.letters)[':ltr_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLettersLtrIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.letters)[':ltr_id']['$delete']>) {
      return parseResponse(client.letters[':ltr_id'].$delete(args, options))
    },
  })
}

export function useDeleteLettersLtrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.letters)[':ltr_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.letters)[':ltr_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLettersLtrIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLettersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.letters.$get>>,
) {
  return ['letters', '/letters', toValue(args)] as const
}

export function getLettersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.letters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLettersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.letters.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLetters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.letters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.letters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.letters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.letters.$get>>>>
          >,
          ReturnType<typeof getLettersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.letters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLettersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLettersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.letters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLettersMutationKey() {
  return ['letters', '/letters', 'POST'] as const
}

export function getPostLettersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.letters.$post>>>>>,
    TError,
    InferRequestType<typeof client.letters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLettersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.letters.$post>) {
      return parseResponse(client.letters.$post(args, options))
    },
  })
}

export function usePostLetters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.letters.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.letters.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLettersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostcardsPscIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.postcards)[':psc_id']['$get']>>,
) {
  return ['postcards', '/postcards/:psc_id', toValue(args)] as const
}

export function getPostcardsPscIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.postcards)[':psc_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostcardsPscIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.postcards[':psc_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostcardsPscId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.postcards)[':psc_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.postcards)[':psc_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.postcards)[':psc_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.postcards)[':psc_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPostcardsPscIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.postcards)[':psc_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostcardsPscIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostcardsPscIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.postcards[':psc_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeletePostcardsPscIdMutationKey() {
  return ['postcards', '/postcards/:psc_id', 'DELETE'] as const
}

export function getDeletePostcardsPscIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.postcards)[':psc_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.postcards)[':psc_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePostcardsPscIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.postcards)[':psc_id']['$delete']>) {
      return parseResponse(client.postcards[':psc_id'].$delete(args, options))
    },
  })
}

export function useDeletePostcardsPscId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.postcards)[':psc_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.postcards)[':psc_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePostcardsPscIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostcardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.postcards.$get>>,
) {
  return ['postcards', '/postcards', toValue(args)] as const
}

export function getPostcardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.postcards.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostcardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.postcards.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePostcards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postcards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.postcards.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postcards.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postcards.$get>>>>
          >,
          ReturnType<typeof getPostcardsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postcards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPostcardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostcardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.postcards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPostcardsMutationKey() {
  return ['postcards', '/postcards', 'POST'] as const
}

export function getPostPostcardsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postcards.$post>>>>>,
    TError,
    InferRequestType<typeof client.postcards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPostcardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.postcards.$post>) {
      return parseResponse(client.postcards.$post(args, options))
    },
  })
}

export function usePostPostcards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postcards.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.postcards.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostcardsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQrCodeAnalyticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qr_code_analytics.$get>>,
) {
  return ['qr_code_analytics', '/qr_code_analytics', toValue(args)] as const
}

export function getQrCodeAnalyticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qr_code_analytics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQrCodeAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.qr_code_analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQrCodeAnalytics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr_code_analytics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qr_code_analytics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.qr_code_analytics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.qr_code_analytics.$get>>>
            >
          >,
          ReturnType<typeof getQrCodeAnalyticsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr_code_analytics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQrCodeAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQrCodeAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.qr_code_analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsDomainIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domain_id']['$get']>>,
) {
  return ['domains', '/domains/:domain_id', toValue(args)] as const
}

export function getDomainsDomainIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domain_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':domain_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domain_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainsDomainIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':domain_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDomainsDomainIdMutationKey() {
  return ['domains', '/domains/:domain_id', 'DELETE'] as const
}

export function getDeleteDomainsDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domain_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDomainsDomainIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.domains)[':domain_id']['$delete']>) {
      return parseResponse(client.domains[':domain_id'].$delete(args, options))
    },
  })
}

export function useDeleteDomainsDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domain_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':domain_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDomainsDomainIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.$get>>,
) {
  return ['domains', '/domains', toValue(args)] as const
}

export function getDomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
          >,
          ReturnType<typeof getDomainsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDomainsMutationKey() {
  return ['domains', '/domains', 'POST'] as const
}

export function getPostDomainsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>>,
    TError,
    InferRequestType<typeof client.domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.domains.$post>) {
      return parseResponse(client.domains.$post(args, options))
    },
  })
}

export function usePostDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.domains.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLinksLinkIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.links)[':link_id']['$get']>>,
) {
  return ['links', '/links/:link_id', toValue(args)] as const
}

export function getLinksLinkIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.links)[':link_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinksLinkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.links[':link_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinksLinkId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.links)[':link_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$get']>>>
            >
          >,
          ReturnType<typeof getLinksLinkIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinksLinkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinksLinkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.links[':link_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteLinksLinkIdMutationKey() {
  return ['links', '/links/:link_id', 'DELETE'] as const
}

export function getDeleteLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.links)[':link_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLinksLinkIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.links)[':link_id']['$delete']>) {
      return parseResponse(client.links[':link_id'].$delete(args, options))
    },
  })
}

export function useDeleteLinksLinkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.links)[':link_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.links)[':link_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLinksLinkIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchLinksLinkIdMutationKey() {
  return ['links', '/links/:link_id', 'PATCH'] as const
}

export function getPatchLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.links)[':link_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchLinksLinkIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.links)[':link_id']['$patch']>) {
      return parseResponse(client.links[':link_id'].$patch(args, options))
    },
  })
}

export function usePatchLinksLinkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.links)[':link_id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchLinksLinkIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLinksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.links.$get>>,
) {
  return ['links', '/links', toValue(args)] as const
}

export function getLinksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.links.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.links.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLinks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.links.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
          ReturnType<typeof getLinksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.links.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLinksMutationKey() {
  return ['links', '/links', 'POST'] as const
}

export function getPostLinksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$post>>>>>,
    TError,
    InferRequestType<typeof client.links.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLinksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.links.$post>) {
      return parseResponse(client.links.$post(args, options))
    },
  })
}

export function usePostLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$post>>>>>,
          TError,
          InferRequestType<typeof client.links.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getResourceProofsResPrfIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resource_proofs)[':res_prf_id']['$get']>>,
) {
  return ['resource_proofs', '/resource_proofs/:res_prf_id', toValue(args)] as const
}

export function getResourceProofsResPrfIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resource_proofs)[':res_prf_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourceProofsResPrfIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resource_proofs[':res_prf_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourceProofsResPrfId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resource_proofs)[':res_prf_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resource_proofs)[':res_prf_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resource_proofs)[':res_prf_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resource_proofs)[':res_prf_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourceProofsResPrfIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.resource_proofs)[':res_prf_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourceProofsResPrfIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourceProofsResPrfIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resource_proofs[':res_prf_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchResourceProofsResPrfIdMutationKey() {
  return ['resource_proofs', '/resource_proofs/:res_prf_id', 'PATCH'] as const
}

export function getPatchResourceProofsResPrfIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resource_proofs)[':res_prf_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.resource_proofs)[':res_prf_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchResourceProofsResPrfIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.resource_proofs)[':res_prf_id']['$patch']>,
    ) {
      return parseResponse(client.resource_proofs[':res_prf_id'].$patch(args, options))
    },
  })
}

export function usePatchResourceProofsResPrfId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resource_proofs)[':res_prf_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.resource_proofs)[':res_prf_id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchResourceProofsResPrfIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostResourceProofsMutationKey() {
  return ['resource_proofs', '/resource_proofs', 'POST'] as const
}

export function getPostResourceProofsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resource_proofs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.resource_proofs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResourceProofsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.resource_proofs.$post>) {
      return parseResponse(client.resource_proofs.$post(args, options))
    },
  })
}

export function usePostResourceProofs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.resource_proofs.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.resource_proofs.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostResourceProofsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSelfMailersSfmIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self_mailers)[':sfm_id']['$get']>>,
) {
  return ['self_mailers', '/self_mailers/:sfm_id', toValue(args)] as const
}

export function getSelfMailersSfmIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self_mailers)[':sfm_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfMailersSfmIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self_mailers[':sfm_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfMailersSfmId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self_mailers)[':sfm_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self_mailers)[':sfm_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self_mailers)[':sfm_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self_mailers)[':sfm_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfMailersSfmIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self_mailers)[':sfm_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfMailersSfmIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfMailersSfmIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self_mailers[':sfm_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSelfMailersSfmIdMutationKey() {
  return ['self_mailers', '/self_mailers/:sfm_id', 'DELETE'] as const
}

export function getDeleteSelfMailersSfmIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self_mailers)[':sfm_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self_mailers)[':sfm_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfMailersSfmIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self_mailers)[':sfm_id']['$delete']>) {
      return parseResponse(client.self_mailers[':sfm_id'].$delete(args, options))
    },
  })
}

export function useDeleteSelfMailersSfmId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self_mailers)[':sfm_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self_mailers)[':sfm_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSelfMailersSfmIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSelfMailersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.self_mailers.$get>>,
) {
  return ['self_mailers', '/self_mailers', toValue(args)] as const
}

export function getSelfMailersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.self_mailers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfMailersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self_mailers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSelfMailers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self_mailers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.self_mailers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self_mailers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self_mailers.$get>>>>
          >,
          ReturnType<typeof getSelfMailersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self_mailers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfMailersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfMailersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self_mailers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSelfMailersMutationKey() {
  return ['self_mailers', '/self_mailers', 'POST'] as const
}

export function getPostSelfMailersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self_mailers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.self_mailers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfMailersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self_mailers.$post>) {
      return parseResponse(client.self_mailers.$post(args, options))
    },
  })
}

export function usePostSelfMailers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self_mailers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.self_mailers.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSelfMailersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSnapPacksSnapPackIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snap_packs)[':snap_pack_id']['$get']>>,
) {
  return ['snap_packs', '/snap_packs/:snap_pack_id', toValue(args)] as const
}

export function getSnapPacksSnapPackIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snap_packs)[':snap_pack_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnapPacksSnapPackIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snap_packs[':snap_pack_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnapPacksSnapPackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.snap_packs)[':snap_pack_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snap_packs)[':snap_pack_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snap_packs)[':snap_pack_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snap_packs)[':snap_pack_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSnapPacksSnapPackIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.snap_packs)[':snap_pack_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnapPacksSnapPackIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnapPacksSnapPackIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snap_packs[':snap_pack_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSnapPacksSnapPackIdMutationKey() {
  return ['snap_packs', '/snap_packs/:snap_pack_id', 'DELETE'] as const
}

export function getDeleteSnapPacksSnapPackIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.snap_packs)[':snap_pack_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.snap_packs)[':snap_pack_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSnapPacksSnapPackIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.snap_packs)[':snap_pack_id']['$delete']>,
    ) {
      return parseResponse(client.snap_packs[':snap_pack_id'].$delete(args, options))
    },
  })
}

export function useDeleteSnapPacksSnapPackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snap_packs)[':snap_pack_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.snap_packs)[':snap_pack_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSnapPacksSnapPackIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSnapPacksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.snap_packs.$get>>,
) {
  return ['snap_packs', '/snap_packs', toValue(args)] as const
}

export function getSnapPacksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.snap_packs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnapPacksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snap_packs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSnapPacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snap_packs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.snap_packs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snap_packs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snap_packs.$get>>>>
          >,
          ReturnType<typeof getSnapPacksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snap_packs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSnapPacksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnapPacksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snap_packs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSnapPacksMutationKey() {
  return ['snap_packs', '/snap_packs', 'POST'] as const
}

export function getPostSnapPacksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snap_packs.$post>>>>>,
    TError,
    InferRequestType<typeof client.snap_packs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSnapPacksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.snap_packs.$post>) {
      return parseResponse(client.snap_packs.$post(args, options))
    },
  })
}

export function usePostSnapPacks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snap_packs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.snap_packs.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSnapPacksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTemplatesTmplIdVersionsVrsnIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>
  >,
) {
  return ['templates', '/templates/:tmpl_id/versions/:vrsn_id', toValue(args)] as const
}

export function getTemplatesTmplIdVersionsVrsnIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesTmplIdVersionsVrsnIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates[':tmpl_id'].versions[':vrsn_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesTmplIdVersionsVrsnId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>
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
                  ReturnType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTemplatesTmplIdVersionsVrsnIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTmplIdVersionsVrsnIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesTmplIdVersionsVrsnIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates[':tmpl_id'].versions[':vrsn_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTemplatesTmplIdVersionsVrsnIdMutationKey() {
  return ['templates', '/templates/:tmpl_id/versions/:vrsn_id', 'POST'] as const
}

export function getPostTemplatesTmplIdVersionsVrsnIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTmplIdVersionsVrsnIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$post']
      >,
    ) {
      return parseResponse(client.templates[':tmpl_id'].versions[':vrsn_id'].$post(args, options))
    },
  })
}

export function usePostTemplatesTmplIdVersionsVrsnId<
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
                  ReturnType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemplatesTmplIdVersionsVrsnIdMutationOptions<
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

export function getDeleteTemplatesTmplIdVersionsVrsnIdMutationKey() {
  return ['templates', '/templates/:tmpl_id/versions/:vrsn_id', 'DELETE'] as const
}

export function getDeleteTemplatesTmplIdVersionsVrsnIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTemplatesTmplIdVersionsVrsnIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$delete']
      >,
    ) {
      return parseResponse(client.templates[':tmpl_id'].versions[':vrsn_id'].$delete(args, options))
    },
  })
}

export function useDeleteTemplatesTmplIdVersionsVrsnId<
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
                    (typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$delete']
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
  const mutationDefaults = getDeleteTemplatesTmplIdVersionsVrsnIdMutationOptions<
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

export function getTemplatesTmplIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':tmpl_id']['versions']['$get']>
  >,
) {
  return ['templates', '/templates/:tmpl_id/versions', toValue(args)] as const
}

export function getTemplatesTmplIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':tmpl_id']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesTmplIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates[':tmpl_id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesTmplIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':tmpl_id']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTemplatesTmplIdVersionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTmplIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesTmplIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates[':tmpl_id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTemplatesTmplIdVersionsMutationKey() {
  return ['templates', '/templates/:tmpl_id/versions', 'POST'] as const
}

export function getPostTemplatesTmplIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':tmpl_id']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTmplIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.templates)[':tmpl_id']['versions']['$post']>,
    ) {
      return parseResponse(client.templates[':tmpl_id'].versions.$post(args, options))
    },
  })
}

export function usePostTemplatesTmplIdVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['versions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':tmpl_id']['versions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemplatesTmplIdVersionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTemplatesTmplIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':tmpl_id']['$get']>>,
) {
  return ['templates', '/templates/:tmpl_id', toValue(args)] as const
}

export function getTemplatesTmplIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':tmpl_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesTmplIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates[':tmpl_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesTmplId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':tmpl_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTemplatesTmplIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTmplIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesTmplIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates[':tmpl_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTemplatesTmplIdMutationKey() {
  return ['templates', '/templates/:tmpl_id', 'POST'] as const
}

export function getPostTemplatesTmplIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':tmpl_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTmplIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)[':tmpl_id']['$post']>) {
      return parseResponse(client.templates[':tmpl_id'].$post(args, options))
    },
  })
}

export function usePostTemplatesTmplId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':tmpl_id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemplatesTmplIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTemplatesTmplIdMutationKey() {
  return ['templates', '/templates/:tmpl_id', 'DELETE'] as const
}

export function getDeleteTemplatesTmplIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':tmpl_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTemplatesTmplIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)[':tmpl_id']['$delete']>) {
      return parseResponse(client.templates[':tmpl_id'].$delete(args, options))
    },
  })
}

export function useDeleteTemplatesTmplId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':tmpl_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTemplatesTmplIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.$get>>,
) {
  return ['templates', '/templates', toValue(args)] as const
}

export function getTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
          >,
          ReturnType<typeof getTemplatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTemplatesMutationKey() {
  return ['templates', '/templates', 'POST'] as const
}

export function getPostTemplatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>>,
    TError,
    InferRequestType<typeof client.templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.$post>) {
      return parseResponse(client.templates.$post(args, options))
    },
  })
}

export function usePostTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.templates.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemplatesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUploadsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.uploads.$get>>,
) {
  return ['uploads', '/uploads', toValue(args)] as const
}

export function getUploadsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.uploads.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUploadsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.uploads.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUploads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.uploads.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$get>>>>
          >,
          ReturnType<typeof getUploadsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUploadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUploadsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.uploads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUploadsMutationKey() {
  return ['uploads', '/uploads', 'POST'] as const
}

export function getPostUploadsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$post>>>>>,
    TError,
    InferRequestType<typeof client.uploads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.uploads.$post>) {
      return parseResponse(client.uploads.$post(args, options))
    },
  })
}

export function usePostUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.uploads.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUploadsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUploadsUplIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.uploads)[':upl_id']['$get']>>,
) {
  return ['uploads', '/uploads/:upl_id', toValue(args)] as const
}

export function getUploadsUplIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.uploads)[':upl_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUploadsUplIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.uploads[':upl_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUploadsUplId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.uploads)[':upl_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$get']>>>
            >
          >,
          ReturnType<typeof getUploadsUplIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUploadsUplIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUploadsUplIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.uploads[':upl_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUploadsUplIdMutationKey() {
  return ['uploads', '/uploads/:upl_id', 'DELETE'] as const
}

export function getDeleteUploadsUplIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.uploads)[':upl_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUploadsUplIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.uploads)[':upl_id']['$delete']>) {
      return parseResponse(client.uploads[':upl_id'].$delete(args, options))
    },
  })
}

export function useDeleteUploadsUplId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.uploads)[':upl_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUploadsUplIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchUploadsUplIdMutationKey() {
  return ['uploads', '/uploads/:upl_id', 'PATCH'] as const
}

export function getPatchUploadsUplIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.uploads)[':upl_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUploadsUplIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.uploads)[':upl_id']['$patch']>) {
      return parseResponse(client.uploads[':upl_id'].$patch(args, options))
    },
  })
}

export function usePatchUploadsUplId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.uploads)[':upl_id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUploadsUplIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUploadsUplIdFileMutationKey() {
  return ['uploads', '/uploads/:upl_id/file', 'POST'] as const
}

export function getPostUploadsUplIdFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)[':upl_id']['file']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.uploads)[':upl_id']['file']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadsUplIdFileMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.uploads)[':upl_id']['file']['$post']>) {
      return parseResponse(client.uploads[':upl_id'].file.$post(args, options))
    },
  })
}

export function usePostUploadsUplIdFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.uploads)[':upl_id']['file']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.uploads)[':upl_id']['file']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUploadsUplIdFileMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUploadsUplIdExportsMutationKey() {
  return ['uploads', '/uploads/:upl_id/exports', 'POST'] as const
}

export function getPostUploadsUplIdExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)[':upl_id']['exports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.uploads)[':upl_id']['exports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadsUplIdExportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.uploads)[':upl_id']['exports']['$post']>,
    ) {
      return parseResponse(client.uploads[':upl_id'].exports.$post(args, options))
    },
  })
}

export function usePostUploadsUplIdExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.uploads)[':upl_id']['exports']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.uploads)[':upl_id']['exports']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUploadsUplIdExportsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUploadsUplIdReportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.uploads)[':upl_id']['report']['$get']>>,
) {
  return ['uploads', '/uploads/:upl_id/report', toValue(args)] as const
}

export function getUploadsUplIdReportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.uploads)[':upl_id']['report']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUploadsUplIdReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.uploads[':upl_id'].report.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUploadsUplIdReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.uploads)[':upl_id']['report']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.uploads)[':upl_id']['report']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.uploads)[':upl_id']['report']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.uploads)[':upl_id']['report']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUploadsUplIdReportQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.uploads)[':upl_id']['report']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUploadsUplIdReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUploadsUplIdReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.uploads[':upl_id'].report.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUploadsUplIdExportsExIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>
  >,
) {
  return ['uploads', '/uploads/:upl_id/exports/:ex_id', toValue(args)] as const
}

export function getUploadsUplIdExportsExIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUploadsUplIdExportsExIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.uploads[':upl_id'].exports[':ex_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUploadsUplIdExportsExId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUploadsUplIdExportsExIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUploadsUplIdExportsExIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUploadsUplIdExportsExIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.uploads[':upl_id'].exports[':ex_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsAutocompletionsMutationKey() {
  return ['us_autocompletions', '/us_autocompletions', 'POST'] as const
}

export function getPostUsAutocompletionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.us_autocompletions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.us_autocompletions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsAutocompletionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.us_autocompletions.$post>) {
      return parseResponse(client.us_autocompletions.$post(args, options))
    },
  })
}

export function usePostUsAutocompletions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.us_autocompletions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.us_autocompletions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsAutocompletionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUsReverseGeocodeLookupsMutationKey() {
  return ['us_reverse_geocode_lookups', '/us_reverse_geocode_lookups', 'POST'] as const
}

export function getPostUsReverseGeocodeLookupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.us_reverse_geocode_lookups.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.us_reverse_geocode_lookups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsReverseGeocodeLookupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.us_reverse_geocode_lookups.$post>) {
      return parseResponse(client.us_reverse_geocode_lookups.$post(args, options))
    },
  })
}

export function usePostUsReverseGeocodeLookups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.us_reverse_geocode_lookups.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.us_reverse_geocode_lookups.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsReverseGeocodeLookupsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUsVerificationsMutationKey() {
  return ['us_verifications', '/us_verifications', 'POST'] as const
}

export function getPostUsVerificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.us_verifications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.us_verifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsVerificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.us_verifications.$post>) {
      return parseResponse(client.us_verifications.$post(args, options))
    },
  })
}

export function usePostUsVerifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.us_verifications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.us_verifications.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsVerificationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUsZipLookupsMutationKey() {
  return ['us_zip_lookups', '/us_zip_lookups', 'POST'] as const
}

export function getPostUsZipLookupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.us_zip_lookups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.us_zip_lookups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsZipLookupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.us_zip_lookups.$post>) {
      return parseResponse(client.us_zip_lookups.$post(args, options))
    },
  })
}

export function usePostUsZipLookups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.us_zip_lookups.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.us_zip_lookups.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsZipLookupsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
