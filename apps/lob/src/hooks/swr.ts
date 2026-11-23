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

export function getGetAccountsKey() {
  return ['accounts', '/accounts'] as const
}

export function useGetAccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAddressesKey(args: InferRequestType<typeof client.addresses.$get>) {
  return ['addresses', '/addresses', args] as const
}

export function useGetAddresses<TError = unknown>(
  args: InferRequestType<typeof client.addresses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddressesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddresses<TError = unknown>(
  args: InferRequestType<typeof client.addresses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddressesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAddressesKey() {
  return ['addresses', '/addresses', 'POST'] as const
}

export function usePostAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.addresses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAddressesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.addresses.$post> }) =>
        parseResponse(client.addresses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAddressesAdrIdKey(
  args: InferRequestType<(typeof client.addresses)[':adr_id']['$get']>,
) {
  return ['addresses', '/addresses/:adr_id', args] as const
}

export function useGetAddressesAdrId<TError = unknown>(
  args: InferRequestType<(typeof client.addresses)[':adr_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':adr_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddressesAdrIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':adr_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses[':adr_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddressesAdrId<TError = unknown>(
  args: InferRequestType<(typeof client.addresses)[':adr_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':adr_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddressesAdrIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':adr_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses[':adr_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAddressesAdrIdKey() {
  return ['addresses', '/addresses/:adr_id', 'DELETE'] as const
}

export function useDeleteAddressesAdrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':adr_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.addresses)[':adr_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAddressesAdrIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.addresses)[':adr_id']['$delete']> },
      ) => parseResponse(client.addresses[':adr_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBankAccountsBankIdVerifyKey() {
  return ['bank_accounts', '/bank_accounts/:bank_id/verify', 'POST'] as const
}

export function usePostBankAccountsBankIdVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bank_accounts)[':bank_id']['verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bank_accounts)[':bank_id']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankAccountsBankIdVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.bank_accounts)[':bank_id']['verify']['$post']> },
      ) => parseResponse(client.bank_accounts[':bank_id'].verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBankAccountsBankIdKey(
  args: InferRequestType<(typeof client.bank_accounts)[':bank_id']['$get']>,
) {
  return ['bank_accounts', '/bank_accounts/:bank_id', args] as const
}

export function useGetBankAccountsBankId<TError = unknown>(
  args: InferRequestType<(typeof client.bank_accounts)[':bank_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bank_accounts)[':bank_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBankAccountsBankIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bank_accounts)[':bank_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bank_accounts[':bank_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankAccountsBankId<TError = unknown>(
  args: InferRequestType<(typeof client.bank_accounts)[':bank_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bank_accounts)[':bank_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBankAccountsBankIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bank_accounts)[':bank_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bank_accounts[':bank_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBankAccountsBankIdKey() {
  return ['bank_accounts', '/bank_accounts/:bank_id', 'DELETE'] as const
}

export function useDeleteBankAccountsBankId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bank_accounts)[':bank_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bank_accounts)[':bank_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBankAccountsBankIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bank_accounts)[':bank_id']['$delete']> },
      ) => parseResponse(client.bank_accounts[':bank_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBankAccountsKey(args: InferRequestType<typeof client.bank_accounts.$get>) {
  return ['bank_accounts', '/bank_accounts', args] as const
}

export function useGetBankAccounts<TError = unknown>(
  args: InferRequestType<typeof client.bank_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBankAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bank_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankAccounts<TError = unknown>(
  args: InferRequestType<typeof client.bank_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBankAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bank_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBankAccountsKey() {
  return ['bank_accounts', '/bank_accounts', 'POST'] as const
}

export function usePostBankAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_accounts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bank_accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bank_accounts.$post> }) =>
        parseResponse(client.bank_accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBillingGroupsBgIdKey(
  args: InferRequestType<(typeof client.billing_groups)[':bg_id']['$get']>,
) {
  return ['billing_groups', '/billing_groups/:bg_id', args] as const
}

export function useGetBillingGroupsBgId<TError = unknown>(
  args: InferRequestType<(typeof client.billing_groups)[':bg_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing_groups)[':bg_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBillingGroupsBgIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing_groups)[':bg_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing_groups[':bg_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingGroupsBgId<TError = unknown>(
  args: InferRequestType<(typeof client.billing_groups)[':bg_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing_groups)[':bg_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBillingGroupsBgIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing_groups)[':bg_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing_groups[':bg_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBillingGroupsBgIdKey() {
  return ['billing_groups', '/billing_groups/:bg_id', 'POST'] as const
}

export function usePostBillingGroupsBgId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.billing_groups)[':bg_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.billing_groups)[':bg_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBillingGroupsBgIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.billing_groups)[':bg_id']['$post']> },
      ) => parseResponse(client.billing_groups[':bg_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBillingGroupsKey(args: InferRequestType<typeof client.billing_groups.$get>) {
  return ['billing_groups', '/billing_groups', args] as const
}

export function useGetBillingGroups<TError = unknown>(
  args: InferRequestType<typeof client.billing_groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBillingGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingGroups<TError = unknown>(
  args: InferRequestType<typeof client.billing_groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBillingGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBillingGroupsKey() {
  return ['billing_groups', '/billing_groups', 'POST'] as const
}

export function usePostBillingGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_groups.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.billing_groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBillingGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.billing_groups.$post> }) =>
        parseResponse(client.billing_groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBookletsBookletIdKey(
  args: InferRequestType<(typeof client.booklets)[':booklet_id']['$get']>,
) {
  return ['booklets', '/booklets/:booklet_id', args] as const
}

export function useGetBookletsBookletId<TError = unknown>(
  args: InferRequestType<(typeof client.booklets)[':booklet_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.booklets)[':booklet_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBookletsBookletIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.booklets)[':booklet_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.booklets[':booklet_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookletsBookletId<TError = unknown>(
  args: InferRequestType<(typeof client.booklets)[':booklet_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.booklets)[':booklet_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBookletsBookletIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.booklets)[':booklet_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.booklets[':booklet_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBookletsBookletIdKey() {
  return ['booklets', '/booklets/:booklet_id', 'DELETE'] as const
}

export function useDeleteBookletsBookletId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.booklets)[':booklet_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.booklets)[':booklet_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBookletsBookletIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.booklets)[':booklet_id']['$delete']> },
      ) => parseResponse(client.booklets[':booklet_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBookletsKey(args: InferRequestType<typeof client.booklets.$get>) {
  return ['booklets', '/booklets', args] as const
}

export function useGetBooklets<TError = unknown>(
  args: InferRequestType<typeof client.booklets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booklets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookletsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booklets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.booklets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBooklets<TError = unknown>(
  args: InferRequestType<typeof client.booklets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booklets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookletsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booklets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.booklets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostBookletsKey() {
  return ['booklets', '/booklets', 'POST'] as const
}

export function usePostBooklets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booklets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.booklets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookletsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.booklets.$post> }) =>
        parseResponse(client.booklets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBuckslipsKey(args: InferRequestType<typeof client.buckslips.$get>) {
  return ['buckslips', '/buckslips', args] as const
}

export function useGetBuckslips<TError = unknown>(
  args: InferRequestType<typeof client.buckslips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckslips.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBuckslipsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckslips.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.buckslips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuckslips<TError = unknown>(
  args: InferRequestType<typeof client.buckslips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckslips.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBuckslipsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckslips.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.buckslips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBuckslipsKey() {
  return ['buckslips', '/buckslips', 'POST'] as const
}

export function usePostBuckslips<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckslips.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.buckslips.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBuckslipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.buckslips.$post> }) =>
        parseResponse(client.buckslips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBuckslipsBuckslipIdKey(
  args: InferRequestType<(typeof client.buckslips)[':buckslip_id']['$get']>,
) {
  return ['buckslips', '/buckslips/:buckslip_id', args] as const
}

export function useGetBuckslipsBuckslipId<TError = unknown>(
  args: InferRequestType<(typeof client.buckslips)[':buckslip_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBuckslipsBuckslipIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.buckslips[':buckslip_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuckslipsBuckslipId<TError = unknown>(
  args: InferRequestType<(typeof client.buckslips)[':buckslip_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBuckslipsBuckslipIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.buckslips[':buckslip_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBuckslipsBuckslipIdKey() {
  return ['buckslips', '/buckslips/:buckslip_id', 'DELETE'] as const
}

export function useDeleteBuckslipsBuckslipId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.buckslips)[':buckslip_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBuckslipsBuckslipIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.buckslips)[':buckslip_id']['$delete']> },
      ) => parseResponse(client.buckslips[':buckslip_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBuckslipsBuckslipIdKey() {
  return ['buckslips', '/buckslips/:buckslip_id', 'PATCH'] as const
}

export function usePatchBuckslipsBuckslipId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.buckslips)[':buckslip_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBuckslipsBuckslipIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.buckslips)[':buckslip_id']['$patch']> },
      ) => parseResponse(client.buckslips[':buckslip_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBuckslipsBuckslipIdOrdersKey(
  args: InferRequestType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>,
) {
  return ['buckslips', '/buckslips/:buckslip_id/orders', args] as const
}

export function useGetBuckslipsBuckslipIdOrders<TError = unknown>(
  args: InferRequestType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBuckslipsBuckslipIdOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.buckslips[':buckslip_id'].orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuckslipsBuckslipIdOrders<TError = unknown>(
  args: InferRequestType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBuckslipsBuckslipIdOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.buckslips[':buckslip_id'].orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBuckslipsBuckslipIdOrdersKey() {
  return ['buckslips', '/buckslips/:buckslip_id/orders', 'POST'] as const
}

export function usePostBuckslipsBuckslipIdOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.buckslips)[':buckslip_id']['orders']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.buckslips)[':buckslip_id']['orders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBuckslipsBuckslipIdOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.buckslips)[':buckslip_id']['orders']['$post']> },
      ) => parseResponse(client.buckslips[':buckslip_id'].orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBulkUsVerificationsKey() {
  return ['bulk', '/bulk/us_verifications', 'POST'] as const
}

export function usePostBulkUsVerifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bulk.us_verifications.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.bulk.us_verifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBulkUsVerificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.bulk.us_verifications.$post> },
      ) => parseResponse(client.bulk.us_verifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBulkIntlVerificationsKey() {
  return ['bulk', '/bulk/intl_verifications', 'POST'] as const
}

export function usePostBulkIntlVerifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bulk.intl_verifications.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.bulk.intl_verifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBulkIntlVerificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.bulk.intl_verifications.$post> },
      ) => parseResponse(client.bulk.intl_verifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCampaignsKey(args: InferRequestType<typeof client.campaigns.$get>) {
  return ['campaigns', '/campaigns', args] as const
}

export function useGetCampaigns<TError = unknown>(
  args: InferRequestType<typeof client.campaigns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCampaignsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCampaigns<TError = unknown>(
  args: InferRequestType<typeof client.campaigns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCampaignsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCampaignsKey() {
  return ['campaigns', '/campaigns', 'POST'] as const
}

export function usePostCampaigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.campaigns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCampaignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.campaigns.$post> }) =>
        parseResponse(client.campaigns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCampaignsCmpIdKey(
  args: InferRequestType<(typeof client.campaigns)[':cmp_id']['$get']>,
) {
  return ['campaigns', '/campaigns/:cmp_id', args] as const
}

export function useGetCampaignsCmpId<TError = unknown>(
  args: InferRequestType<(typeof client.campaigns)[':cmp_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCampaignsCmpIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.campaigns[':cmp_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCampaignsCmpId<TError = unknown>(
  args: InferRequestType<(typeof client.campaigns)[':cmp_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCampaignsCmpIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.campaigns[':cmp_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCampaignsCmpIdKey() {
  return ['campaigns', '/campaigns/:cmp_id', 'DELETE'] as const
}

export function useDeleteCampaignsCmpId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.campaigns)[':cmp_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCampaignsCmpIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.campaigns)[':cmp_id']['$delete']> },
      ) => parseResponse(client.campaigns[':cmp_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCampaignsCmpIdKey() {
  return ['campaigns', '/campaigns/:cmp_id', 'PATCH'] as const
}

export function usePatchCampaignsCmpId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.campaigns)[':cmp_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCampaignsCmpIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.campaigns)[':cmp_id']['$patch']> },
      ) => parseResponse(client.campaigns[':cmp_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCampaignsCmpIdSendKey() {
  return ['campaigns', '/campaigns/:cmp_id/send', 'POST'] as const
}

export function usePostCampaignsCmpIdSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.campaigns)[':cmp_id']['send']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.campaigns)[':cmp_id']['send']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCampaignsCmpIdSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.campaigns)[':cmp_id']['send']['$post']> },
      ) => parseResponse(client.campaigns[':cmp_id'].send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsKey(args: InferRequestType<typeof client.cards.$get>) {
  return ['cards', '/cards', args] as const
}

export function useGetCards<TError = unknown>(
  args: InferRequestType<typeof client.cards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.cards.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCards<TError = unknown>(
  args: InferRequestType<typeof client.cards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.cards.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostCardsKey() {
  return ['cards', '/cards', 'POST'] as const
}

export function usePostCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.cards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cards.$post> }) =>
        parseResponse(client.cards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsCardIdKey(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
) {
  return ['cards', '/cards/:card_id', args] as const
}

export function useGetCardsCardId<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsCardIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':card_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsCardId<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsCardIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':card_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCardsCardIdKey() {
  return ['cards', '/cards/:card_id', 'POST'] as const
}

export function usePostCardsCardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':card_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsCardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':card_id']['$post']> },
      ) => parseResponse(client.cards[':card_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardsCardIdKey() {
  return ['cards', '/cards/:card_id', 'DELETE'] as const
}

export function useDeleteCardsCardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':card_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsCardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':card_id']['$delete']> },
      ) => parseResponse(client.cards[':card_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsCardIdOrdersKey(
  args: InferRequestType<(typeof client.cards)[':card_id']['orders']['$get']>,
) {
  return ['cards', '/cards/:card_id/orders', args] as const
}

export function useGetCardsCardIdOrders<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':card_id']['orders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['orders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsCardIdOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['orders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':card_id'].orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsCardIdOrders<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':card_id']['orders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['orders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsCardIdOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['orders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':card_id'].orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCardsCardIdOrdersKey() {
  return ['cards', '/cards/:card_id/orders', 'POST'] as const
}

export function usePostCardsCardIdOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':card_id']['orders']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':card_id']['orders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsCardIdOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':card_id']['orders']['$post']> },
      ) => parseResponse(client.cards[':card_id'].orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChecksKey(args: InferRequestType<typeof client.checks.$get>) {
  return ['checks', '/checks', args] as const
}

export function useGetChecks<TError = unknown>(
  args: InferRequestType<typeof client.checks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChecksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.checks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetChecks<TError = unknown>(
  args: InferRequestType<typeof client.checks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChecksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.checks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostChecksKey() {
  return ['checks', '/checks', 'POST'] as const
}

export function usePostChecks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.checks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChecksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.checks.$post> }) =>
        parseResponse(client.checks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChecksChkIdKey(
  args: InferRequestType<(typeof client.checks)[':chk_id']['$get']>,
) {
  return ['checks', '/checks/:chk_id', args] as const
}

export function useGetChecksChkId<TError = unknown>(
  args: InferRequestType<(typeof client.checks)[':chk_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':chk_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChecksChkIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':chk_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checks[':chk_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecksChkId<TError = unknown>(
  args: InferRequestType<(typeof client.checks)[':chk_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':chk_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChecksChkIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':chk_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checks[':chk_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteChecksChkIdKey() {
  return ['checks', '/checks/:chk_id', 'DELETE'] as const
}

export function useDeleteChecksChkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':chk_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.checks)[':chk_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChecksChkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.checks)[':chk_id']['$delete']> },
      ) => parseResponse(client.checks[':chk_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreativesKey() {
  return ['creatives', '/creatives', 'POST'] as const
}

export function usePostCreatives<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.creatives.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreativesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.creatives.$post> }) =>
        parseResponse(client.creatives.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreativesCrvIdKey(
  args: InferRequestType<(typeof client.creatives)[':crv_id']['$get']>,
) {
  return ['creatives', '/creatives/:crv_id', args] as const
}

export function useGetCreativesCrvId<TError = unknown>(
  args: InferRequestType<(typeof client.creatives)[':crv_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.creatives)[':crv_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreativesCrvIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.creatives)[':crv_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.creatives[':crv_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreativesCrvId<TError = unknown>(
  args: InferRequestType<(typeof client.creatives)[':crv_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.creatives)[':crv_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreativesCrvIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.creatives)[':crv_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.creatives[':crv_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchCreativesCrvIdKey() {
  return ['creatives', '/creatives/:crv_id', 'PATCH'] as const
}

export function usePatchCreativesCrvId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.creatives)[':crv_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.creatives)[':crv_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCreativesCrvIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.creatives)[':crv_id']['$patch']> },
      ) => parseResponse(client.creatives[':crv_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIdentityValidationKey() {
  return ['identity_validation', '/identity_validation', 'POST'] as const
}

export function usePostIdentityValidation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identity_validation.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.identity_validation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdentityValidationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.identity_validation.$post> }) =>
        parseResponse(client.identity_validation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInformedDeliveryCampaignsKey() {
  return ['informed_delivery_campaigns', '/informed_delivery_campaigns'] as const
}

export function useGetInformedDeliveryCampaigns<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.informed_delivery_campaigns.$get>>>
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
        ? getGetInformedDeliveryCampaignsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.informed_delivery_campaigns.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.informed_delivery_campaigns.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInformedDeliveryCampaigns<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.informed_delivery_campaigns.$get>>>
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
        ? getGetInformedDeliveryCampaignsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.informed_delivery_campaigns.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.informed_delivery_campaigns.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInformedDeliveryCampaignsKey() {
  return ['informed_delivery_campaigns', '/informed_delivery_campaigns', 'POST'] as const
}

export function usePostInformedDeliveryCampaigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.informed_delivery_campaigns.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.informed_delivery_campaigns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInformedDeliveryCampaignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.informed_delivery_campaigns.$post> },
      ) => parseResponse(client.informed_delivery_campaigns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInformedDeliveryCampaignsUspsCampaignIdKey(
  args: InferRequestType<(typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$get']>,
) {
  return [
    'informed_delivery_campaigns',
    '/informed_delivery_campaigns/:usps_campaign_id',
    args,
  ] as const
}

export function useGetInformedDeliveryCampaignsUspsCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$get']>
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
        ? getGetInformedDeliveryCampaignsUspsCampaignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.informed_delivery_campaigns[':usps_campaign_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInformedDeliveryCampaignsUspsCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$get']>
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
        ? getGetInformedDeliveryCampaignsUspsCampaignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.informed_delivery_campaigns[':usps_campaign_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchInformedDeliveryCampaignsUspsCampaignIdKey() {
  return [
    'informed_delivery_campaigns',
    '/informed_delivery_campaigns/:usps_campaign_id',
    'PATCH',
  ] as const
}

export function usePatchInformedDeliveryCampaignsUspsCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchInformedDeliveryCampaignsUspsCampaignIdKey()
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
            (typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.informed_delivery_campaigns[':usps_campaign_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostIntlVerificationsKey() {
  return ['intl_verifications', '/intl_verifications', 'POST'] as const
}

export function usePostIntlVerifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intl_verifications.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.intl_verifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntlVerificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.intl_verifications.$post> }) =>
        parseResponse(client.intl_verifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLettersLtrIdKey(
  args: InferRequestType<(typeof client.letters)[':ltr_id']['$get']>,
) {
  return ['letters', '/letters/:ltr_id', args] as const
}

export function useGetLettersLtrId<TError = unknown>(
  args: InferRequestType<(typeof client.letters)[':ltr_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.letters)[':ltr_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLettersLtrIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.letters)[':ltr_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.letters[':ltr_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLettersLtrId<TError = unknown>(
  args: InferRequestType<(typeof client.letters)[':ltr_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.letters)[':ltr_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLettersLtrIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.letters)[':ltr_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.letters[':ltr_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteLettersLtrIdKey() {
  return ['letters', '/letters/:ltr_id', 'DELETE'] as const
}

export function useDeleteLettersLtrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.letters)[':ltr_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.letters)[':ltr_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLettersLtrIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.letters)[':ltr_id']['$delete']> },
      ) => parseResponse(client.letters[':ltr_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLettersKey(args: InferRequestType<typeof client.letters.$get>) {
  return ['letters', '/letters', args] as const
}

export function useGetLetters<TError = unknown>(
  args: InferRequestType<typeof client.letters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.letters.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLettersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.letters.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.letters.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLetters<TError = unknown>(
  args: InferRequestType<typeof client.letters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.letters.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLettersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.letters.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.letters.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostLettersKey() {
  return ['letters', '/letters', 'POST'] as const
}

export function usePostLetters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.letters.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.letters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLettersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.letters.$post> }) =>
        parseResponse(client.letters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostcardsPscIdKey(
  args: InferRequestType<(typeof client.postcards)[':psc_id']['$get']>,
) {
  return ['postcards', '/postcards/:psc_id', args] as const
}

export function useGetPostcardsPscId<TError = unknown>(
  args: InferRequestType<(typeof client.postcards)[':psc_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.postcards)[':psc_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostcardsPscIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.postcards)[':psc_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.postcards[':psc_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostcardsPscId<TError = unknown>(
  args: InferRequestType<(typeof client.postcards)[':psc_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.postcards)[':psc_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostcardsPscIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.postcards)[':psc_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.postcards[':psc_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePostcardsPscIdKey() {
  return ['postcards', '/postcards/:psc_id', 'DELETE'] as const
}

export function useDeletePostcardsPscId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.postcards)[':psc_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.postcards)[':psc_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePostcardsPscIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.postcards)[':psc_id']['$delete']> },
      ) => parseResponse(client.postcards[':psc_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostcardsKey(args: InferRequestType<typeof client.postcards.$get>) {
  return ['postcards', '/postcards', args] as const
}

export function useGetPostcards<TError = unknown>(
  args: InferRequestType<typeof client.postcards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postcards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostcardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postcards.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.postcards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostcards<TError = unknown>(
  args: InferRequestType<typeof client.postcards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postcards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostcardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postcards.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.postcards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPostcardsKey() {
  return ['postcards', '/postcards', 'POST'] as const
}

export function usePostPostcards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postcards.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.postcards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostcardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.postcards.$post> }) =>
        parseResponse(client.postcards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQrCodeAnalyticsKey(
  args: InferRequestType<typeof client.qr_code_analytics.$get>,
) {
  return ['qr_code_analytics', '/qr_code_analytics', args] as const
}

export function useGetQrCodeAnalytics<TError = unknown>(
  args: InferRequestType<typeof client.qr_code_analytics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr_code_analytics.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQrCodeAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr_code_analytics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.qr_code_analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQrCodeAnalytics<TError = unknown>(
  args: InferRequestType<typeof client.qr_code_analytics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr_code_analytics.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQrCodeAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr_code_analytics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.qr_code_analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDomainsDomainIdKey(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$get']>,
) {
  return ['domains', '/domains/:domain_id', args] as const
}

export function useGetDomainsDomainId<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':domain_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsDomainId<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':domain_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDomainsDomainIdKey() {
  return ['domains', '/domains/:domain_id', 'DELETE'] as const
}

export function useDeleteDomainsDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':domain_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDomainsDomainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.domains)[':domain_id']['$delete']> },
      ) => parseResponse(client.domains[':domain_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomainsKey(args: InferRequestType<typeof client.domains.$get>) {
  return ['domains', '/domains', args] as const
}

export function useGetDomains<TError = unknown>(
  args: InferRequestType<typeof client.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.domains.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDomains<TError = unknown>(
  args: InferRequestType<typeof client.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.domains.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostDomainsKey() {
  return ['domains', '/domains', 'POST'] as const
}

export function usePostDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.domains.$post> }) =>
        parseResponse(client.domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLinksLinkIdKey(
  args: InferRequestType<(typeof client.links)[':link_id']['$get']>,
) {
  return ['links', '/links/:link_id', args] as const
}

export function useGetLinksLinkId<TError = unknown>(
  args: InferRequestType<(typeof client.links)[':link_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLinksLinkIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.links[':link_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinksLinkId<TError = unknown>(
  args: InferRequestType<(typeof client.links)[':link_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLinksLinkIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.links[':link_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteLinksLinkIdKey() {
  return ['links', '/links/:link_id', 'DELETE'] as const
}

export function useDeleteLinksLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.links)[':link_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLinksLinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.links)[':link_id']['$delete']> },
      ) => parseResponse(client.links[':link_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchLinksLinkIdKey() {
  return ['links', '/links/:link_id', 'PATCH'] as const
}

export function usePatchLinksLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':link_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.links)[':link_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLinksLinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.links)[':link_id']['$patch']> },
      ) => parseResponse(client.links[':link_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLinksKey(args: InferRequestType<typeof client.links.$get>) {
  return ['links', '/links', args] as const
}

export function useGetLinks<TError = unknown>(
  args: InferRequestType<typeof client.links.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLinksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.links.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLinks<TError = unknown>(
  args: InferRequestType<typeof client.links.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLinksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.links.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostLinksKey() {
  return ['links', '/links', 'POST'] as const
}

export function usePostLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.links.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.links.$post> }) =>
        parseResponse(client.links.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResourceProofsResPrfIdKey(
  args: InferRequestType<(typeof client.resource_proofs)[':res_prf_id']['$get']>,
) {
  return ['resource_proofs', '/resource_proofs/:res_prf_id', args] as const
}

export function useGetResourceProofsResPrfId<TError = unknown>(
  args: InferRequestType<(typeof client.resource_proofs)[':res_prf_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resource_proofs)[':res_prf_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResourceProofsResPrfIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resource_proofs)[':res_prf_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resource_proofs[':res_prf_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourceProofsResPrfId<TError = unknown>(
  args: InferRequestType<(typeof client.resource_proofs)[':res_prf_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resource_proofs)[':res_prf_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResourceProofsResPrfIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resource_proofs)[':res_prf_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resource_proofs[':res_prf_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchResourceProofsResPrfIdKey() {
  return ['resource_proofs', '/resource_proofs/:res_prf_id', 'PATCH'] as const
}

export function usePatchResourceProofsResPrfId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resource_proofs)[':res_prf_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.resource_proofs)[':res_prf_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchResourceProofsResPrfIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.resource_proofs)[':res_prf_id']['$patch']> },
      ) => parseResponse(client.resource_proofs[':res_prf_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResourceProofsKey() {
  return ['resource_proofs', '/resource_proofs', 'POST'] as const
}

export function usePostResourceProofs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resource_proofs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.resource_proofs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResourceProofsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.resource_proofs.$post> }) =>
        parseResponse(client.resource_proofs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfMailersSfmIdKey(
  args: InferRequestType<(typeof client.self_mailers)[':sfm_id']['$get']>,
) {
  return ['self_mailers', '/self_mailers/:sfm_id', args] as const
}

export function useGetSelfMailersSfmId<TError = unknown>(
  args: InferRequestType<(typeof client.self_mailers)[':sfm_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.self_mailers)[':sfm_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSelfMailersSfmIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.self_mailers)[':sfm_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self_mailers[':sfm_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfMailersSfmId<TError = unknown>(
  args: InferRequestType<(typeof client.self_mailers)[':sfm_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.self_mailers)[':sfm_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSelfMailersSfmIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.self_mailers)[':sfm_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self_mailers[':sfm_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSelfMailersSfmIdKey() {
  return ['self_mailers', '/self_mailers/:sfm_id', 'DELETE'] as const
}

export function useDeleteSelfMailersSfmId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self_mailers)[':sfm_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self_mailers)[':sfm_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfMailersSfmIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.self_mailers)[':sfm_id']['$delete']> },
      ) => parseResponse(client.self_mailers[':sfm_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfMailersKey(args: InferRequestType<typeof client.self_mailers.$get>) {
  return ['self_mailers', '/self_mailers', args] as const
}

export function useGetSelfMailers<TError = unknown>(
  args: InferRequestType<typeof client.self_mailers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self_mailers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfMailersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self_mailers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self_mailers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfMailers<TError = unknown>(
  args: InferRequestType<typeof client.self_mailers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self_mailers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfMailersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self_mailers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self_mailers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSelfMailersKey() {
  return ['self_mailers', '/self_mailers', 'POST'] as const
}

export function usePostSelfMailers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self_mailers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.self_mailers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSelfMailersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.self_mailers.$post> }) =>
        parseResponse(client.self_mailers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSnapPacksSnapPackIdKey(
  args: InferRequestType<(typeof client.snap_packs)[':snap_pack_id']['$get']>,
) {
  return ['snap_packs', '/snap_packs/:snap_pack_id', args] as const
}

export function useGetSnapPacksSnapPackId<TError = unknown>(
  args: InferRequestType<(typeof client.snap_packs)[':snap_pack_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snap_packs)[':snap_pack_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSnapPacksSnapPackIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snap_packs)[':snap_pack_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snap_packs[':snap_pack_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnapPacksSnapPackId<TError = unknown>(
  args: InferRequestType<(typeof client.snap_packs)[':snap_pack_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snap_packs)[':snap_pack_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSnapPacksSnapPackIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snap_packs)[':snap_pack_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snap_packs[':snap_pack_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSnapPacksSnapPackIdKey() {
  return ['snap_packs', '/snap_packs/:snap_pack_id', 'DELETE'] as const
}

export function useDeleteSnapPacksSnapPackId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.snap_packs)[':snap_pack_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.snap_packs)[':snap_pack_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSnapPacksSnapPackIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.snap_packs)[':snap_pack_id']['$delete']> },
      ) => parseResponse(client.snap_packs[':snap_pack_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSnapPacksKey(args: InferRequestType<typeof client.snap_packs.$get>) {
  return ['snap_packs', '/snap_packs', args] as const
}

export function useGetSnapPacks<TError = unknown>(
  args: InferRequestType<typeof client.snap_packs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snap_packs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnapPacksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snap_packs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snap_packs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnapPacks<TError = unknown>(
  args: InferRequestType<typeof client.snap_packs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snap_packs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnapPacksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snap_packs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snap_packs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSnapPacksKey() {
  return ['snap_packs', '/snap_packs', 'POST'] as const
}

export function usePostSnapPacks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snap_packs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.snap_packs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSnapPacksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.snap_packs.$post> }) =>
        parseResponse(client.snap_packs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesTmplIdVersionsVrsnIdKey(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>,
) {
  return ['templates', '/templates/:tmpl_id/versions/:vrsn_id', args] as const
}

export function useGetTemplatesTmplIdVersionsVrsnId<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>
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
        ? getGetTemplatesTmplIdVersionsVrsnIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates[':tmpl_id'].versions[':vrsn_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTmplIdVersionsVrsnId<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>
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
        ? getGetTemplatesTmplIdVersionsVrsnIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates[':tmpl_id'].versions[':vrsn_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTemplatesTmplIdVersionsVrsnIdKey() {
  return ['templates', '/templates/:tmpl_id/versions/:vrsn_id', 'POST'] as const
}

export function usePostTemplatesTmplIdVersionsVrsnId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesTmplIdVersionsVrsnIdKey()
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
            (typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$post']
          >
        },
      ) =>
        parseResponse(client.templates[':tmpl_id'].versions[':vrsn_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTemplatesTmplIdVersionsVrsnIdKey() {
  return ['templates', '/templates/:tmpl_id/versions/:vrsn_id', 'DELETE'] as const
}

export function useDeleteTemplatesTmplIdVersionsVrsnId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTemplatesTmplIdVersionsVrsnIdKey()
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
            (typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.templates[':tmpl_id'].versions[':vrsn_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesTmplIdVersionsKey(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['versions']['$get']>,
) {
  return ['templates', '/templates/:tmpl_id/versions', args] as const
}

export function useGetTemplatesTmplIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesTmplIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':tmpl_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTmplIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesTmplIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':tmpl_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTemplatesTmplIdVersionsKey() {
  return ['templates', '/templates/:tmpl_id/versions', 'POST'] as const
}

export function usePostTemplatesTmplIdVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['versions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':tmpl_id']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesTmplIdVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.templates)[':tmpl_id']['versions']['$post']> },
      ) => parseResponse(client.templates[':tmpl_id'].versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesTmplIdKey(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['$get']>,
) {
  return ['templates', '/templates/:tmpl_id', args] as const
}

export function useGetTemplatesTmplId<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesTmplIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':tmpl_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTmplId<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesTmplIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':tmpl_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTemplatesTmplIdKey() {
  return ['templates', '/templates/:tmpl_id', 'POST'] as const
}

export function usePostTemplatesTmplId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':tmpl_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesTmplIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':tmpl_id']['$post']> },
      ) => parseResponse(client.templates[':tmpl_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTemplatesTmplIdKey() {
  return ['templates', '/templates/:tmpl_id', 'DELETE'] as const
}

export function useDeleteTemplatesTmplId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':tmpl_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':tmpl_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTemplatesTmplIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':tmpl_id']['$delete']> },
      ) => parseResponse(client.templates[':tmpl_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesKey(args: InferRequestType<typeof client.templates.$get>) {
  return ['templates', '/templates', args] as const
}

export function useGetTemplates<TError = unknown>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplates<TError = unknown>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTemplatesKey() {
  return ['templates', '/templates', 'POST'] as const
}

export function usePostTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.templates.$post> }) =>
        parseResponse(client.templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUploadsKey(args: InferRequestType<typeof client.uploads.$get>) {
  return ['uploads', '/uploads', args] as const
}

export function useGetUploads<TError = unknown>(
  args: InferRequestType<typeof client.uploads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUploadsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.uploads.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUploads<TError = unknown>(
  args: InferRequestType<typeof client.uploads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUploadsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.uploads.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostUploadsKey() {
  return ['uploads', '/uploads', 'POST'] as const
}

export function usePostUploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.uploads.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.uploads.$post> }) =>
        parseResponse(client.uploads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUploadsUplIdKey(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['$get']>,
) {
  return ['uploads', '/uploads/:upl_id', args] as const
}

export function useGetUploadsUplId<TError = unknown>(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUploadsUplIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.uploads[':upl_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUploadsUplId<TError = unknown>(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUploadsUplIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.uploads[':upl_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUploadsUplIdKey() {
  return ['uploads', '/uploads/:upl_id', 'DELETE'] as const
}

export function useDeleteUploadsUplId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.uploads)[':upl_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUploadsUplIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.uploads)[':upl_id']['$delete']> },
      ) => parseResponse(client.uploads[':upl_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUploadsUplIdKey() {
  return ['uploads', '/uploads/:upl_id', 'PATCH'] as const
}

export function usePatchUploadsUplId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.uploads)[':upl_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.uploads)[':upl_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUploadsUplIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.uploads)[':upl_id']['$patch']> },
      ) => parseResponse(client.uploads[':upl_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUploadsUplIdFileKey() {
  return ['uploads', '/uploads/:upl_id/file', 'POST'] as const
}

export function usePostUploadsUplIdFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)[':upl_id']['file']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.uploads)[':upl_id']['file']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadsUplIdFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.uploads)[':upl_id']['file']['$post']> },
      ) => parseResponse(client.uploads[':upl_id'].file.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUploadsUplIdExportsKey() {
  return ['uploads', '/uploads/:upl_id/exports', 'POST'] as const
}

export function usePostUploadsUplIdExports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)[':upl_id']['exports']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.uploads)[':upl_id']['exports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadsUplIdExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.uploads)[':upl_id']['exports']['$post']> },
      ) => parseResponse(client.uploads[':upl_id'].exports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUploadsUplIdReportKey(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['report']['$get']>,
) {
  return ['uploads', '/uploads/:upl_id/report', args] as const
}

export function useGetUploadsUplIdReport<TError = unknown>(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.uploads)[':upl_id']['report']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUploadsUplIdReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.uploads)[':upl_id']['report']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.uploads[':upl_id'].report.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUploadsUplIdReport<TError = unknown>(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.uploads)[':upl_id']['report']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUploadsUplIdReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.uploads)[':upl_id']['report']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.uploads[':upl_id'].report.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUploadsUplIdExportsExIdKey(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>,
) {
  return ['uploads', '/uploads/:upl_id/exports/:ex_id', args] as const
}

export function useGetUploadsUplIdExportsExId<TError = unknown>(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUploadsUplIdExportsExIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.uploads[':upl_id'].exports[':ex_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUploadsUplIdExportsExId<TError = unknown>(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUploadsUplIdExportsExIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.uploads[':upl_id'].exports[':ex_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsAutocompletionsKey() {
  return ['us_autocompletions', '/us_autocompletions', 'POST'] as const
}

export function usePostUsAutocompletions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.us_autocompletions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.us_autocompletions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsAutocompletionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.us_autocompletions.$post> }) =>
        parseResponse(client.us_autocompletions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsReverseGeocodeLookupsKey() {
  return ['us_reverse_geocode_lookups', '/us_reverse_geocode_lookups', 'POST'] as const
}

export function usePostUsReverseGeocodeLookups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.us_reverse_geocode_lookups.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.us_reverse_geocode_lookups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsReverseGeocodeLookupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.us_reverse_geocode_lookups.$post> },
      ) => parseResponse(client.us_reverse_geocode_lookups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsVerificationsKey() {
  return ['us_verifications', '/us_verifications', 'POST'] as const
}

export function usePostUsVerifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.us_verifications.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.us_verifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsVerificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.us_verifications.$post> }) =>
        parseResponse(client.us_verifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsZipLookupsKey() {
  return ['us_zip_lookups', '/us_zip_lookups', 'POST'] as const
}

export function usePostUsZipLookups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.us_zip_lookups.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.us_zip_lookups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsZipLookupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.us_zip_lookups.$post> }) =>
        parseResponse(client.us_zip_lookups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
