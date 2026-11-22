import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >({
    queryKey: getAccountsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getAddressesQueryKey(args: InferRequestType<typeof client.addresses.$get>) {
  return ['addresses', '/addresses', args] as const
}

export function getAddressesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.addresses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAddressesQueryKey>
  >({
    queryKey: getAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addresses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAddresses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.addresses.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAddressesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAddressesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.addresses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAddressesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAddressesAdrIdQueryKey(
  args: InferRequestType<(typeof client.addresses)[':adr_id']['$get']>,
) {
  return ['addresses', '/addresses/:adr_id', args] as const
}

export function getAddressesAdrIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':adr_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.addresses)[':adr_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':adr_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddressesAdrIdQueryKey>
  >({
    queryKey: getAddressesAdrIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addresses[':adr_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAddressesAdrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':adr_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.addresses)[':adr_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':adr_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAddressesAdrIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAddressesAdrIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteAddressesAdrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAddressesAdrIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostBankAccountsBankIdVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBankAccountsBankIdVerifyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBankAccountsBankIdQueryKey(
  args: InferRequestType<(typeof client.bank_accounts)[':bank_id']['$get']>,
) {
  return ['bank_accounts', '/bank_accounts/:bank_id', args] as const
}

export function getBankAccountsBankIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bank_accounts)[':bank_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bank_accounts)[':bank_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bank_accounts)[':bank_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankAccountsBankIdQueryKey>
  >({
    queryKey: getBankAccountsBankIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bank_accounts[':bank_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBankAccountsBankId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bank_accounts)[':bank_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bank_accounts)[':bank_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.bank_accounts)[':bank_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBankAccountsBankIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBankAccountsBankIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteBankAccountsBankId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBankAccountsBankIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBankAccountsQueryKey(args: InferRequestType<typeof client.bank_accounts.$get>) {
  return ['bank_accounts', '/bank_accounts', args] as const
}

export function getBankAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bank_accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBankAccountsQueryKey>
  >({
    queryKey: getBankAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bank_accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBankAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bank_accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_accounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBankAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBankAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostBankAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_accounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.bank_accounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBankAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBillingGroupsBgIdQueryKey(
  args: InferRequestType<(typeof client.billing_groups)[':bg_id']['$get']>,
) {
  return ['billing_groups', '/billing_groups/:bg_id', args] as const
}

export function getBillingGroupsBgIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':bg_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing_groups)[':bg_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':bg_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingGroupsBgIdQueryKey>
  >({
    queryKey: getBillingGroupsBgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billing_groups[':bg_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBillingGroupsBgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':bg_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.billing_groups)[':bg_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.billing_groups)[':bg_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingGroupsBgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBillingGroupsBgIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostBillingGroupsBgId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBillingGroupsBgIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBillingGroupsQueryKey(
  args: InferRequestType<typeof client.billing_groups.$get>,
) {
  return ['billing_groups', '/billing_groups', args] as const
}

export function getBillingGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.billing_groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBillingGroupsQueryKey>
  >({
    queryKey: getBillingGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billing_groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBillingGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.billing_groups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBillingGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBillingGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostBillingGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.billing_groups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBillingGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBookletsBookletIdQueryKey(
  args: InferRequestType<(typeof client.booklets)[':booklet_id']['$get']>,
) {
  return ['booklets', '/booklets/:booklet_id', args] as const
}

export function getBookletsBookletIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.booklets)[':booklet_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.booklets)[':booklet_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.booklets)[':booklet_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookletsBookletIdQueryKey>
  >({
    queryKey: getBookletsBookletIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.booklets[':booklet_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBookletsBookletId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.booklets)[':booklet_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.booklets)[':booklet_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.booklets)[':booklet_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBookletsBookletIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBookletsBookletIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteBookletsBookletId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBookletsBookletIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBookletsQueryKey(args: InferRequestType<typeof client.booklets.$get>) {
  return ['booklets', '/booklets', args] as const
}

export function getBookletsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booklets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.booklets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booklets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBookletsQueryKey>
  >({
    queryKey: getBookletsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.booklets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBooklets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booklets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.booklets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booklets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBookletsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBookletsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostBooklets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booklets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.booklets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBookletsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBuckslipsQueryKey(args: InferRequestType<typeof client.buckslips.$get>) {
  return ['buckslips', '/buckslips', args] as const
}

export function getBuckslipsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckslips.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.buckslips.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckslips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBuckslipsQueryKey>
  >({
    queryKey: getBuckslipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckslips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBuckslips<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckslips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.buckslips.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckslips.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBuckslipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBuckslipsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostBuckslips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckslips.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.buckslips.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBuckslipsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBuckslipsBuckslipIdQueryKey(
  args: InferRequestType<(typeof client.buckslips)[':buckslip_id']['$get']>,
) {
  return ['buckslips', '/buckslips/:buckslip_id', args] as const
}

export function getBuckslipsBuckslipIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.buckslips)[':buckslip_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuckslipsBuckslipIdQueryKey>
  >({
    queryKey: getBuckslipsBuckslipIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckslips[':buckslip_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBuckslipsBuckslipId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.buckslips)[':buckslip_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuckslipsBuckslipIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBuckslipsBuckslipIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteBuckslipsBuckslipId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBuckslipsBuckslipIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchBuckslipsBuckslipId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBuckslipsBuckslipIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBuckslipsBuckslipIdOrdersQueryKey(
  args: InferRequestType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>,
) {
  return ['buckslips', '/buckslips/:buckslip_id/orders', args] as const
}

export function getBuckslipsBuckslipIdOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBuckslipsBuckslipIdOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckslips[':buckslip_id'].orders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBuckslipsBuckslipIdOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBuckslipsBuckslipIdOrdersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostBuckslipsBuckslipIdOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBuckslipsBuckslipIdOrdersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostBulkUsVerifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bulk.us_verifications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.bulk.us_verifications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBulkUsVerificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostBulkIntlVerifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bulk.intl_verifications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.bulk.intl_verifications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBulkIntlVerificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCampaignsQueryKey(args: InferRequestType<typeof client.campaigns.$get>) {
  return ['campaigns', '/campaigns', args] as const
}

export function getCampaignsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.campaigns.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCampaignsQueryKey>
  >({
    queryKey: getCampaignsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.campaigns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.campaigns.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCampaignsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCampaigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.campaigns.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCampaignsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCampaignsCmpIdQueryKey(
  args: InferRequestType<(typeof client.campaigns)[':cmp_id']['$get']>,
) {
  return ['campaigns', '/campaigns/:cmp_id', args] as const
}

export function getCampaignsCmpIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.campaigns)[':cmp_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCampaignsCmpIdQueryKey>
  >({
    queryKey: getCampaignsCmpIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.campaigns[':cmp_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCampaignsCmpId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.campaigns)[':cmp_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsCmpIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCampaignsCmpIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteCampaignsCmpId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCampaignsCmpIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchCampaignsCmpId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCampaignsCmpIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCampaignsCmpIdSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCampaignsCmpIdSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCardsQueryKey(args: InferRequestType<typeof client.cards.$get>) {
  return ['cards', '/cards', args] as const
}

export function getCardsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cards.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCardsQueryKey>
  >({
    queryKey: getCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCards<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cards.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCardsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$post>>>>>,
        TError,
        InferRequestType<typeof client.cards.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCardsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCardsCardIdQueryKey(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
) {
  return ['cards', '/cards/:card_id', args] as const
}

export function getCardsCardIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsCardIdQueryKey>
  >({
    queryKey: getCardsCardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':card_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCardsCardId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cards)[':card_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsCardIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCardsCardIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCardsCardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':card_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCardsCardIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteCardsCardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':card_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCardsCardIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCardsCardIdOrdersQueryKey(
  args: InferRequestType<(typeof client.cards)[':card_id']['orders']['$get']>,
) {
  return ['cards', '/cards/:card_id/orders', args] as const
}

export function getCardsCardIdOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['orders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':card_id']['orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCardsCardIdOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':card_id'].orders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCardsCardIdOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['orders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cards)[':card_id']['orders']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCardsCardIdOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCardsCardIdOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCardsCardIdOrdersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChecksQueryKey(args: InferRequestType<typeof client.checks.$get>) {
  return ['checks', '/checks', args] as const
}

export function getChecksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.checks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChecksQueryKey>
  >({
    queryKey: getChecksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChecks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.checks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChecksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChecksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostChecks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$post>>>>>,
        TError,
        InferRequestType<typeof client.checks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChecksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChecksChkIdQueryKey(
  args: InferRequestType<(typeof client.checks)[':chk_id']['$get']>,
) {
  return ['checks', '/checks/:chk_id', args] as const
}

export function getChecksChkIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':chk_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checks)[':chk_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':chk_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecksChkIdQueryKey>
  >({
    queryKey: getChecksChkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checks[':chk_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChecksChkId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':chk_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.checks)[':chk_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':chk_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecksChkIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChecksChkIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteChecksChkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':chk_id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.checks)[':chk_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteChecksChkIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCreatives<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.creatives.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreativesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCreativesCrvIdQueryKey(
  args: InferRequestType<(typeof client.creatives)[':crv_id']['$get']>,
) {
  return ['creatives', '/creatives/:crv_id', args] as const
}

export function getCreativesCrvIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.creatives)[':crv_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.creatives)[':crv_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.creatives)[':crv_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreativesCrvIdQueryKey>
  >({
    queryKey: getCreativesCrvIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.creatives[':crv_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCreativesCrvId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.creatives)[':crv_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.creatives)[':crv_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.creatives)[':crv_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCreativesCrvIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCreativesCrvIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPatchCreativesCrvId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCreativesCrvIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostIdentityValidation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.identity_validation.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.identity_validation.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIdentityValidationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getInformedDeliveryCampaignsQueryKey() {
  return ['informed_delivery_campaigns', '/informed_delivery_campaigns'] as const
}

export function getInformedDeliveryCampaignsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.informed_delivery_campaigns.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.informed_delivery_campaigns.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInformedDeliveryCampaignsQueryKey>
  >({
    queryKey: getInformedDeliveryCampaignsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.informed_delivery_campaigns.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectInformedDeliveryCampaigns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.informed_delivery_campaigns.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.informed_delivery_campaigns.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInformedDeliveryCampaignsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInformedDeliveryCampaignsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostInformedDeliveryCampaigns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInformedDeliveryCampaignsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getInformedDeliveryCampaignsUspsCampaignIdQueryKey(
  args: InferRequestType<(typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$get']>,
) {
  return [
    'informed_delivery_campaigns',
    '/informed_delivery_campaigns/:usps_campaign_id',
    args,
  ] as const
}

export function getInformedDeliveryCampaignsUspsCampaignIdQueryOptions<
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
  args: InferRequestType<(typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getInformedDeliveryCampaignsUspsCampaignIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.informed_delivery_campaigns[':usps_campaign_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectInformedDeliveryCampaignsUspsCampaignId<
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
  args: () => InferRequestType<
    (typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getInformedDeliveryCampaignsUspsCampaignIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchInformedDeliveryCampaignsUspsCampaignId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchInformedDeliveryCampaignsUspsCampaignIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostIntlVerifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.intl_verifications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.intl_verifications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIntlVerificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLettersLtrIdQueryKey(
  args: InferRequestType<(typeof client.letters)[':ltr_id']['$get']>,
) {
  return ['letters', '/letters/:ltr_id', args] as const
}

export function getLettersLtrIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.letters)[':ltr_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.letters)[':ltr_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.letters)[':ltr_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLettersLtrIdQueryKey>
  >({
    queryKey: getLettersLtrIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.letters[':ltr_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLettersLtrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.letters)[':ltr_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.letters)[':ltr_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.letters)[':ltr_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLettersLtrIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLettersLtrIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteLettersLtrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.letters)[':ltr_id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.letters)[':ltr_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLettersLtrIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLettersQueryKey(args: InferRequestType<typeof client.letters.$get>) {
  return ['letters', '/letters', args] as const
}

export function getLettersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.letters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.letters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.letters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLettersQueryKey>
  >({
    queryKey: getLettersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.letters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLetters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.letters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.letters.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.letters.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLettersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLettersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostLetters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.letters.$post>>>>>,
        TError,
        InferRequestType<typeof client.letters.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLettersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostcardsPscIdQueryKey(
  args: InferRequestType<(typeof client.postcards)[':psc_id']['$get']>,
) {
  return ['postcards', '/postcards/:psc_id', args] as const
}

export function getPostcardsPscIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.postcards)[':psc_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.postcards)[':psc_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.postcards)[':psc_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostcardsPscIdQueryKey>
  >({
    queryKey: getPostcardsPscIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.postcards[':psc_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPostcardsPscId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.postcards)[':psc_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.postcards)[':psc_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.postcards)[':psc_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostcardsPscIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPostcardsPscIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeletePostcardsPscId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePostcardsPscIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostcardsQueryKey(args: InferRequestType<typeof client.postcards.$get>) {
  return ['postcards', '/postcards', args] as const
}

export function getPostcardsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postcards.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.postcards.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postcards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPostcardsQueryKey>
  >({
    queryKey: getPostcardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.postcards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPostcards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postcards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.postcards.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postcards.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPostcardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPostcardsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostPostcards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postcards.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.postcards.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPostcardsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getQrCodeAnalyticsQueryKey(
  args: InferRequestType<typeof client.qr_code_analytics.$get>,
) {
  return ['qr_code_analytics', '/qr_code_analytics', args] as const
}

export function getQrCodeAnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr_code_analytics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.qr_code_analytics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr_code_analytics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQrCodeAnalyticsQueryKey>
  >({
    queryKey: getQrCodeAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.qr_code_analytics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectQrCodeAnalytics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr_code_analytics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.qr_code_analytics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.qr_code_analytics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQrCodeAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQrCodeAnalyticsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDomainsDomainIdQueryKey(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$get']>,
) {
  return ['domains', '/domains/:domain_id', args] as const
}

export function getDomainsDomainIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainIdQueryKey>
  >({
    queryKey: getDomainsDomainIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':domain_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDomainsDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.domains)[':domain_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsDomainIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDomainsDomainIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteDomainsDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDomainsDomainIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDomainsQueryKey(args: InferRequestType<typeof client.domains.$get>) {
  return ['domains', '/domains', args] as const
}

export function getDomainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.domains.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDomainsQueryKey>
  >({
    queryKey: getDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.domains.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDomainsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>>,
        TError,
        InferRequestType<typeof client.domains.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomainsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLinksLinkIdQueryKey(
  args: InferRequestType<(typeof client.links)[':link_id']['$get']>,
) {
  return ['links', '/links/:link_id', args] as const
}

export function getLinksLinkIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.links)[':link_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinksLinkIdQueryKey>
  >({
    queryKey: getLinksLinkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.links[':link_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLinksLinkId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.links)[':link_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinksLinkIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLinksLinkIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteLinksLinkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.links)[':link_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLinksLinkIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchLinksLinkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.links)[':link_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchLinksLinkIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLinksQueryKey(args: InferRequestType<typeof client.links.$get>) {
  return ['links', '/links', args] as const
}

export function getLinksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.links.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLinksQueryKey>
  >({
    queryKey: getLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.links.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLinks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.links.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLinksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$post>>>>>,
        TError,
        InferRequestType<typeof client.links.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLinksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getResourceProofsResPrfIdQueryKey(
  args: InferRequestType<(typeof client.resource_proofs)[':res_prf_id']['$get']>,
) {
  return ['resource_proofs', '/resource_proofs/:res_prf_id', args] as const
}

export function getResourceProofsResPrfIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resource_proofs)[':res_prf_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resource_proofs)[':res_prf_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getResourceProofsResPrfIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resource_proofs[':res_prf_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourceProofsResPrfId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resource_proofs)[':res_prf_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resource_proofs)[':res_prf_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourceProofsResPrfIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchResourceProofsResPrfId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchResourceProofsResPrfIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostResourceProofs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resource_proofs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.resource_proofs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResourceProofsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSelfMailersSfmIdQueryKey(
  args: InferRequestType<(typeof client.self_mailers)[':sfm_id']['$get']>,
) {
  return ['self_mailers', '/self_mailers/:sfm_id', args] as const
}

export function getSelfMailersSfmIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self_mailers)[':sfm_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self_mailers)[':sfm_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self_mailers)[':sfm_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfMailersSfmIdQueryKey>
  >({
    queryKey: getSelfMailersSfmIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self_mailers[':sfm_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfMailersSfmId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self_mailers)[':sfm_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self_mailers)[':sfm_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self_mailers)[':sfm_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfMailersSfmIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfMailersSfmIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteSelfMailersSfmId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSelfMailersSfmIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSelfMailersQueryKey(args: InferRequestType<typeof client.self_mailers.$get>) {
  return ['self_mailers', '/self_mailers', args] as const
}

export function getSelfMailersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self_mailers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.self_mailers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self_mailers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfMailersQueryKey>
  >({
    queryKey: getSelfMailersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self_mailers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSelfMailers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self_mailers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.self_mailers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self_mailers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfMailersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfMailersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSelfMailers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self_mailers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.self_mailers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSelfMailersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSnapPacksSnapPackIdQueryKey(
  args: InferRequestType<(typeof client.snap_packs)[':snap_pack_id']['$get']>,
) {
  return ['snap_packs', '/snap_packs/:snap_pack_id', args] as const
}

export function getSnapPacksSnapPackIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.snap_packs)[':snap_pack_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.snap_packs)[':snap_pack_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSnapPacksSnapPackIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snap_packs[':snap_pack_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSnapPacksSnapPackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.snap_packs)[':snap_pack_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.snap_packs)[':snap_pack_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSnapPacksSnapPackIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteSnapPacksSnapPackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSnapPacksSnapPackIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSnapPacksQueryKey(args: InferRequestType<typeof client.snap_packs.$get>) {
  return ['snap_packs', '/snap_packs', args] as const
}

export function getSnapPacksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snap_packs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.snap_packs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snap_packs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSnapPacksQueryKey>
  >({
    queryKey: getSnapPacksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snap_packs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSnapPacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snap_packs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.snap_packs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snap_packs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSnapPacksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSnapPacksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSnapPacks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snap_packs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.snap_packs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSnapPacksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTemplatesTmplIdVersionsVrsnIdQueryKey(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>,
) {
  return ['templates', '/templates/:tmpl_id/versions/:vrsn_id', args] as const
}

export function getTemplatesTmplIdVersionsVrsnIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTemplatesTmplIdVersionsVrsnIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':tmpl_id'].versions[':vrsn_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTemplatesTmplIdVersionsVrsnId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getTemplatesTmplIdVersionsVrsnIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTemplatesTmplIdVersionsVrsnIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostTemplatesTmplIdVersionsVrsnId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesTmplIdVersionsVrsnIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteTemplatesTmplIdVersionsVrsnId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTemplatesTmplIdVersionsVrsnIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTemplatesTmplIdVersionsQueryKey(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['versions']['$get']>,
) {
  return ['templates', '/templates/:tmpl_id/versions', args] as const
}

export function getTemplatesTmplIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTemplatesTmplIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':tmpl_id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTemplatesTmplIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.templates)[':tmpl_id']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTemplatesTmplIdVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostTemplatesTmplIdVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesTmplIdVersionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTemplatesTmplIdQueryKey(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['$get']>,
) {
  return ['templates', '/templates/:tmpl_id', args] as const
}

export function getTemplatesTmplIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTmplIdQueryKey>
  >({
    queryKey: getTemplatesTmplIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':tmpl_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTemplatesTmplId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.templates)[':tmpl_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTmplIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTemplatesTmplIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTemplatesTmplId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesTmplIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteTemplatesTmplId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTemplatesTmplIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTemplatesQueryKey(args: InferRequestType<typeof client.templates.$get>) {
  return ['templates', '/templates', args] as const
}

export function getTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemplatesQueryKey>
  >({
    queryKey: getTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.templates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUploadsQueryKey(args: InferRequestType<typeof client.uploads.$get>) {
  return ['uploads', '/uploads', args] as const
}

export function getUploadsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.uploads.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUploadsQueryKey>
  >({
    queryKey: getUploadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.uploads.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUploads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.uploads.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUploadsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUploadsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$post>>>>>,
        TError,
        InferRequestType<typeof client.uploads.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUploadsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUploadsUplIdQueryKey(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['$get']>,
) {
  return ['uploads', '/uploads/:upl_id', args] as const
}

export function getUploadsUplIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUploadsUplIdQueryKey>
  >({
    queryKey: getUploadsUplIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.uploads[':upl_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUploadsUplId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.uploads)[':upl_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUploadsUplIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUploadsUplIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteUploadsUplId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUploadsUplIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchUploadsUplId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.uploads)[':upl_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUploadsUplIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUploadsUplIdFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUploadsUplIdFileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUploadsUplIdExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUploadsUplIdExportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUploadsUplIdReportQueryKey(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['report']['$get']>,
) {
  return ['uploads', '/uploads/:upl_id/report', args] as const
}

export function getUploadsUplIdReportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.uploads)[':upl_id']['report']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['report']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUploadsUplIdReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.uploads[':upl_id'].report.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUploadsUplIdReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.uploads)[':upl_id']['report']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.uploads)[':upl_id']['report']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUploadsUplIdReportQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUploadsUplIdExportsExIdQueryKey(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>,
) {
  return ['uploads', '/uploads/:upl_id/exports/:ex_id', args] as const
}

export function getUploadsUplIdExportsExIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUploadsUplIdExportsExIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.uploads[':upl_id'].exports[':ex_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUploadsUplIdExportsExId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUploadsUplIdExportsExIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostUsAutocompletions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.us_autocompletions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.us_autocompletions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsAutocompletionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUsReverseGeocodeLookups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsReverseGeocodeLookupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUsVerifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.us_verifications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.us_verifications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsVerificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUsZipLookups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.us_zip_lookups.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.us_zip_lookups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsZipLookupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
