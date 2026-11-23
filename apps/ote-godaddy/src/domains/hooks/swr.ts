import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV1DomainsKey(args: InferRequestType<typeof client.v1.domains.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/domains', keyArgs] as const
}

export function useGetV1Domains<TError = unknown>(
  args: InferRequestType<typeof client.v1.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Domains<TError = unknown>(
  args: InferRequestType<typeof client.v1.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DomainsAgreementsKey(
  args: InferRequestType<typeof client.v1.domains.agreements.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/domains/agreements', keyArgs] as const
}

export function useGetV1DomainsAgreements<TError = unknown>(
  args: InferRequestType<typeof client.v1.domains.agreements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.agreements.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainsAgreementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.agreements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domains.agreements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DomainsAgreements<TError = unknown>(
  args: InferRequestType<typeof client.v1.domains.agreements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.agreements.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainsAgreementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.agreements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domains.agreements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DomainsAvailableKey(
  args: InferRequestType<typeof client.v1.domains.available.$get>,
) {
  return ['v1', '/v1/domains/available', args] as const
}

export function useGetV1DomainsAvailable<TError = unknown>(
  args: InferRequestType<typeof client.v1.domains.available.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.available.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainsAvailableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.available.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domains.available.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DomainsAvailable<TError = unknown>(
  args: InferRequestType<typeof client.v1.domains.available.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.available.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainsAvailableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.available.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domains.available.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DomainsAvailableKey() {
  return ['v1', '/v1/domains/available', 'POST'] as const
}

export function usePostV1DomainsAvailable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.available.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.domains.available.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainsAvailableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.domains.available.$post> },
      ) => parseResponse(client.v1.domains.available.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DomainsContactsValidateKey() {
  return ['v1', '/v1/domains/contacts/validate', 'POST'] as const
}

export function usePostV1DomainsContactsValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.domains.contacts.validate.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.domains.contacts.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainsContactsValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.domains.contacts.validate.$post> },
      ) => parseResponse(client.v1.domains.contacts.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DomainsPurchaseKey() {
  return ['v1', '/v1/domains/purchase', 'POST'] as const
}

export function usePostV1DomainsPurchase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.purchase.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.domains.purchase.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainsPurchaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.domains.purchase.$post> }) =>
        parseResponse(client.v1.domains.purchase.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DomainsPurchaseSchemaTldKey(
  args: InferRequestType<(typeof client.v1.domains.purchase.schema)[':tld']['$get']>,
) {
  return ['v1', '/v1/domains/purchase/schema/:tld', args] as const
}

export function useGetV1DomainsPurchaseSchemaTld<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domains.purchase.schema)[':tld']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains.purchase.schema)[':tld']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainsPurchaseSchemaTldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains.purchase.schema)[':tld']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.domains.purchase.schema[':tld'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DomainsPurchaseSchemaTld<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domains.purchase.schema)[':tld']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains.purchase.schema)[':tld']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainsPurchaseSchemaTldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains.purchase.schema)[':tld']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.domains.purchase.schema[':tld'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DomainsPurchaseValidateKey() {
  return ['v1', '/v1/domains/purchase/validate', 'POST'] as const
}

export function usePostV1DomainsPurchaseValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.purchase.validate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.domains.purchase.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainsPurchaseValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.domains.purchase.validate.$post> },
      ) => parseResponse(client.v1.domains.purchase.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DomainsSuggestKey(
  args: InferRequestType<typeof client.v1.domains.suggest.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/domains/suggest', keyArgs] as const
}

export function useGetV1DomainsSuggest<TError = unknown>(
  args: InferRequestType<typeof client.v1.domains.suggest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.suggest.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainsSuggestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.suggest.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domains.suggest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DomainsSuggest<TError = unknown>(
  args: InferRequestType<typeof client.v1.domains.suggest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.suggest.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainsSuggestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.suggest.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domains.suggest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DomainsTldsKey() {
  return ['v1', '/v1/domains/tlds'] as const
}

export function useGetV1DomainsTlds<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.tlds.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DomainsTldsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.tlds.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domains.tlds.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DomainsTlds<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.tlds.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DomainsTldsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.tlds.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domains.tlds.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DomainsDomainKey(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/domains/:domain', keyArgs] as const
}

export function useGetV1DomainsDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainsDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domains[':domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DomainsDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainsDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domains[':domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1DomainsDomainKey() {
  return ['v1', '/v1/domains/:domain', 'DELETE'] as const
}

export function useDeleteV1DomainsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DomainsDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.domains)[':domain']['$delete']> },
      ) => parseResponse(client.v1.domains[':domain'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1DomainsDomainKey() {
  return ['v1', '/v1/domains/:domain', 'PATCH'] as const
}

export function usePatchV1DomainsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1DomainsDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.domains)[':domain']['$patch']> },
      ) => parseResponse(client.v1.domains[':domain'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1DomainsDomainContactsKey() {
  return ['v1', '/v1/domains/:domain/contacts', 'PATCH'] as const
}

export function usePatchV1DomainsDomainContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['contacts']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['contacts']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1DomainsDomainContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.domains)[':domain']['contacts']['$patch']> },
      ) => parseResponse(client.v1.domains[':domain'].contacts.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1DomainsDomainPrivacyKey() {
  return ['v1', '/v1/domains/:domain/privacy', 'DELETE'] as const
}

export function useDeleteV1DomainsDomainPrivacy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['privacy']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['privacy']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DomainsDomainPrivacyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.domains)[':domain']['privacy']['$delete']> },
      ) => parseResponse(client.v1.domains[':domain'].privacy.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DomainsDomainPrivacyPurchaseKey() {
  return ['v1', '/v1/domains/:domain/privacy/purchase', 'POST'] as const
}

export function usePostV1DomainsDomainPrivacyPurchase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['privacy']['purchase']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['privacy']['purchase']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainsDomainPrivacyPurchaseKey()
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
            (typeof client.v1.domains)[':domain']['privacy']['purchase']['$post']
          >
        },
      ) => parseResponse(client.v1.domains[':domain'].privacy.purchase.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1DomainsDomainRecordsKey() {
  return ['v1', '/v1/domains/:domain/records', 'PUT'] as const
}

export function usePutV1DomainsDomainRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['records']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['records']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DomainsDomainRecordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.domains)[':domain']['records']['$put']> },
      ) => parseResponse(client.v1.domains[':domain'].records.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1DomainsDomainRecordsKey() {
  return ['v1', '/v1/domains/:domain/records', 'PATCH'] as const
}

export function usePatchV1DomainsDomainRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['records']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['records']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1DomainsDomainRecordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.domains)[':domain']['records']['$patch']> },
      ) => parseResponse(client.v1.domains[':domain'].records.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1DomainsDomainRecordsTypeKey() {
  return ['v1', '/v1/domains/:domain/records/:type', 'PUT'] as const
}

export function usePutV1DomainsDomainRecordsType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['records'][':type']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['records'][':type']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DomainsDomainRecordsTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.domains)[':domain']['records'][':type']['$put']>
        },
      ) => parseResponse(client.v1.domains[':domain'].records[':type'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DomainsDomainRecordsTypeNameKey(
  args: InferRequestType<
    (typeof client.v1.domains)[':domain']['records'][':type'][':name']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/domains/:domain/records/:type/:name', keyArgs] as const
}

export function useGetV1DomainsDomainRecordsTypeName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.domains)[':domain']['records'][':type'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.domains)[':domain']['records'][':type'][':name']['$get']>
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
        ? getGetV1DomainsDomainRecordsTypeNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.domains)[':domain']['records'][':type'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.domains[':domain'].records[':type'][':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DomainsDomainRecordsTypeName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.domains)[':domain']['records'][':type'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.domains)[':domain']['records'][':type'][':name']['$get']>
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
        ? getGetV1DomainsDomainRecordsTypeNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.domains)[':domain']['records'][':type'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.domains[':domain'].records[':type'][':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1DomainsDomainRecordsTypeNameKey() {
  return ['v1', '/v1/domains/:domain/records/:type/:name', 'PUT'] as const
}

export function usePutV1DomainsDomainRecordsTypeName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.domains)[':domain']['records'][':type'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['records'][':type'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DomainsDomainRecordsTypeNameKey()
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
            (typeof client.v1.domains)[':domain']['records'][':type'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.domains[':domain'].records[':type'][':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1DomainsDomainRecordsTypeNameKey() {
  return ['v1', '/v1/domains/:domain/records/:type/:name', 'DELETE'] as const
}

export function useDeleteV1DomainsDomainRecordsTypeName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.domains)[':domain']['records'][':type'][':name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['records'][':type'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DomainsDomainRecordsTypeNameKey()
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
            (typeof client.v1.domains)[':domain']['records'][':type'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.domains[':domain'].records[':type'][':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DomainsDomainRenewKey() {
  return ['v1', '/v1/domains/:domain/renew', 'POST'] as const
}

export function usePostV1DomainsDomainRenew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['renew']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['renew']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainsDomainRenewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.domains)[':domain']['renew']['$post']> },
      ) => parseResponse(client.v1.domains[':domain'].renew.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DomainsDomainTransferKey() {
  return ['v1', '/v1/domains/:domain/transfer', 'POST'] as const
}

export function usePostV1DomainsDomainTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['transfer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['transfer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainsDomainTransferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.domains)[':domain']['transfer']['$post']> },
      ) => parseResponse(client.v1.domains[':domain'].transfer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DomainsDomainVerifyRegistrantEmailKey() {
  return ['v1', '/v1/domains/:domain/verifyRegistrantEmail', 'POST'] as const
}

export function usePostV1DomainsDomainVerifyRegistrantEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.domains)[':domain']['verifyRegistrantEmail']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['verifyRegistrantEmail']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainsDomainVerifyRegistrantEmailKey()
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
            (typeof client.v1.domains)[':domain']['verifyRegistrantEmail']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.domains[':domain'].verifyRegistrantEmail.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdDomainsForwardsFqdnKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$get']
  >,
) {
  return ['v2', '/v2/customers/:customerId/domains/forwards/:fqdn', args] as const
}

export function useGetV2CustomersCustomerIdDomainsForwardsFqdn<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$get']
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
        ? getGetV2CustomersCustomerIdDomainsForwardsFqdnKey(args)
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
                (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$get']
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
          client.v2.customers[':customerId'].domains.forwards[':fqdn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerIdDomainsForwardsFqdn<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$get']
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
        ? getGetV2CustomersCustomerIdDomainsForwardsFqdnKey(args)
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
                (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$get']
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
          client.v2.customers[':customerId'].domains.forwards[':fqdn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2CustomersCustomerIdDomainsForwardsFqdnKey() {
  return ['v2', '/v2/customers/:customerId/domains/forwards/:fqdn', 'PUT'] as const
}

export function usePutV2CustomersCustomerIdDomainsForwardsFqdn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2CustomersCustomerIdDomainsForwardsFqdnKey()
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
            (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.customers[':customerId'].domains.forwards[':fqdn'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2CustomersCustomerIdDomainsForwardsFqdnKey() {
  return ['v2', '/v2/customers/:customerId/domains/forwards/:fqdn', 'POST'] as const
}

export function usePostV2CustomersCustomerIdDomainsForwardsFqdn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomersCustomerIdDomainsForwardsFqdnKey()
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
            (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.customers[':customerId'].domains.forwards[':fqdn'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2CustomersCustomerIdDomainsForwardsFqdnKey() {
  return ['v2', '/v2/customers/:customerId/domains/forwards/:fqdn', 'DELETE'] as const
}

export function useDeleteV2CustomersCustomerIdDomainsForwardsFqdn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CustomersCustomerIdDomainsForwardsFqdnKey()
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
            (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.customers[':customerId'].domains.forwards[':fqdn'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdDomainsNotificationsKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['notifications']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers/:customerId/domains/notifications', keyArgs] as const
}

export function useGetV2CustomersCustomerIdDomainsNotifications<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['notifications']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains']['notifications']['$get']
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
        ? getGetV2CustomersCustomerIdDomainsNotificationsKey(args)
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
                (typeof client.v2.customers)[':customerId']['domains']['notifications']['$get']
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
          client.v2.customers[':customerId'].domains.notifications.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerIdDomainsNotifications<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['notifications']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains']['notifications']['$get']
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
        ? getGetV2CustomersCustomerIdDomainsNotificationsKey(args)
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
                (typeof client.v2.customers)[':customerId']['domains']['notifications']['$get']
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
          client.v2.customers[':customerId'].domains.notifications.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdDomainsNotificationsOptInKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers/:customerId/domains/notifications/optIn', keyArgs] as const
}

export function useGetV2CustomersCustomerIdDomainsNotificationsOptIn<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$get']
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
        ? getGetV2CustomersCustomerIdDomainsNotificationsOptInKey(args)
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
                (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$get']
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
          client.v2.customers[':customerId'].domains.notifications.optIn.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerIdDomainsNotificationsOptIn<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$get']
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
        ? getGetV2CustomersCustomerIdDomainsNotificationsOptInKey(args)
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
                (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$get']
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
          client.v2.customers[':customerId'].domains.notifications.optIn.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2CustomersCustomerIdDomainsNotificationsOptInKey() {
  return ['v2', '/v2/customers/:customerId/domains/notifications/optIn', 'PUT'] as const
}

export function usePutV2CustomersCustomerIdDomainsNotificationsOptIn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2CustomersCustomerIdDomainsNotificationsOptInKey()
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
            (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.customers[':customerId'].domains.notifications.optIn.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdDomainsNotificationsSchemasTypeKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['notifications']['schemas'][':type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers/:customerId/domains/notifications/schemas/:type', keyArgs] as const
}

export function useGetV2CustomersCustomerIdDomainsNotificationsSchemasType<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['notifications']['schemas'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains']['notifications']['schemas'][':type']['$get']
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
        ? getGetV2CustomersCustomerIdDomainsNotificationsSchemasTypeKey(args)
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
                (typeof client.v2.customers)[':customerId']['domains']['notifications']['schemas'][':type']['$get']
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
          client.v2.customers[':customerId'].domains.notifications.schemas[':type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerIdDomainsNotificationsSchemasType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains']['notifications']['schemas'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains']['notifications']['schemas'][':type']['$get']
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
        ? getGetV2CustomersCustomerIdDomainsNotificationsSchemasTypeKey(args)
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
                (typeof client.v2.customers)[':customerId']['domains']['notifications']['schemas'][':type']['$get']
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
          client.v2.customers[':customerId'].domains.notifications.schemas[':type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2CustomersCustomerIdDomainsNotificationsNotificationIdAcknowledgeKey() {
  return [
    'v2',
    '/v2/customers/:customerId/domains/notifications/:notificationId/acknowledge',
    'POST',
  ] as const
}

export function usePostV2CustomersCustomerIdDomainsNotificationsNotificationIdAcknowledge<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains']['notifications'][':notificationId']['acknowledge']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['notifications'][':notificationId']['acknowledge']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2CustomersCustomerIdDomainsNotificationsNotificationIdAcknowledgeKey()
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
            (typeof client.v2.customers)[':customerId']['domains']['notifications'][':notificationId']['acknowledge']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.customers[':customerId'].domains.notifications[
            ':notificationId'
          ].acknowledge.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdDomainsDomainKey(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['domains'][':domain']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers/:customerId/domains/:domain', keyArgs] as const
}

export function useGetV2CustomersCustomerIdDomainsDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['domains'][':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customers)[':customerId']['domains'][':domain']['$get']>
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
        ? getGetV2CustomersCustomerIdDomainsDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customers)[':customerId']['domains'][':domain']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.customers[':customerId'].domains[':domain'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerIdDomainsDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['domains'][':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customers)[':customerId']['domains'][':domain']['$get']>
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
        ? getGetV2CustomersCustomerIdDomainsDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customers)[':customerId']['domains'][':domain']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.customers[':customerId'].domains[':domain'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdDomainsDomainActionsKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers/:customerId/domains/:domain/actions', keyArgs] as const
}

export function useGetV2CustomersCustomerIdDomainsDomainActions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions']['$get']
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
        ? getGetV2CustomersCustomerIdDomainsDomainActionsKey(args)
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
                (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions']['$get']
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
          client.v2.customers[':customerId'].domains[':domain'].actions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerIdDomainsDomainActions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions']['$get']
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
        ? getGetV2CustomersCustomerIdDomainsDomainActionsKey(args)
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
                (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions']['$get']
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
          client.v2.customers[':customerId'].domains[':domain'].actions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdDomainsDomainActionsTypeKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers/:customerId/domains/:domain/actions/:type', keyArgs] as const
}

export function useGetV2CustomersCustomerIdDomainsDomainActionsType<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$get']
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
        ? getGetV2CustomersCustomerIdDomainsDomainActionsTypeKey(args)
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
                (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$get']
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
          client.v2.customers[':customerId'].domains[':domain'].actions[':type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerIdDomainsDomainActionsType<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$get']
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
        ? getGetV2CustomersCustomerIdDomainsDomainActionsTypeKey(args)
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
                (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$get']
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
          client.v2.customers[':customerId'].domains[':domain'].actions[':type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2CustomersCustomerIdDomainsDomainActionsTypeKey() {
  return ['v2', '/v2/customers/:customerId/domains/:domain/actions/:type', 'DELETE'] as const
}

export function useDeleteV2CustomersCustomerIdDomainsDomainActionsType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CustomersCustomerIdDomainsDomainActionsTypeKey()
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
            (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.customers[':customerId'].domains[':domain'].actions[':type'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2CustomersCustomerIdDomainsDomainRedeemKey() {
  return ['v2', '/v2/customers/:customerId/domains/:domain/redeem', 'POST'] as const
}

export function usePostV2CustomersCustomerIdDomainsDomainRedeem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customers)[':customerId']['domains'][':domain']['redeem']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains'][':domain']['redeem']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomersCustomerIdDomainsDomainRedeemKey()
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
            (typeof client.v2.customers)[':customerId']['domains'][':domain']['redeem']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.customers[':customerId'].domains[':domain'].redeem.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2CustomersCustomerIdDomainsDomainTransferOutKey() {
  return ['v2', '/v2/customers/:customerId/domains/:domain/transferOut', 'POST'] as const
}

export function usePostV2CustomersCustomerIdDomainsDomainTransferOut<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customers)[':customerId']['domains'][':domain']['transferOut']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains'][':domain']['transferOut']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomersCustomerIdDomainsDomainTransferOutKey()
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
            (typeof client.v2.customers)[':customerId']['domains'][':domain']['transferOut']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.customers[':customerId'].domains[':domain'].transferOut.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DomainsMaintenancesKey(
  args: InferRequestType<typeof client.v2.domains.maintenances.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/domains/maintenances', keyArgs] as const
}

export function useGetV2DomainsMaintenances<TError = unknown>(
  args: InferRequestType<typeof client.v2.domains.maintenances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.maintenances.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2DomainsMaintenancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.maintenances.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.domains.maintenances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DomainsMaintenances<TError = unknown>(
  args: InferRequestType<typeof client.v2.domains.maintenances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.maintenances.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2DomainsMaintenancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.maintenances.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.domains.maintenances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2DomainsMaintenancesMaintenanceIdKey(
  args: InferRequestType<(typeof client.v2.domains.maintenances)[':maintenanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/domains/maintenances/:maintenanceId', keyArgs] as const
}

export function useGetV2DomainsMaintenancesMaintenanceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.domains.maintenances)[':maintenanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domains.maintenances)[':maintenanceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2DomainsMaintenancesMaintenanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domains.maintenances)[':maintenanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.domains.maintenances[':maintenanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DomainsMaintenancesMaintenanceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.domains.maintenances)[':maintenanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domains.maintenances)[':maintenanceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2DomainsMaintenancesMaintenanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domains.maintenances)[':maintenanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.domains.maintenances[':maintenanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
