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

export function getDnsKey() {
  return ['dns'] as const
}

export function getDomainsKey() {
  return ['domains'] as const
}

export function getLinuxhostingsKey() {
  return ['linuxhostings'] as const
}

export function getMailboxesKey() {
  return ['mailboxes'] as const
}

export function getMailzonesKey() {
  return ['mailzones'] as const
}

export function getMysqldatabasesKey() {
  return ['mysqldatabases'] as const
}

export function getProvisioningjobsKey() {
  return ['provisioningjobs'] as const
}

export function getServicepacksKey() {
  return ['servicepacks'] as const
}

export function getSshKey() {
  return ['ssh'] as const
}

export function getSslcertificaterequestsKey() {
  return ['sslcertificaterequests'] as const
}

export function getSslcertificatesKey() {
  return ['sslcertificates'] as const
}

export function getWindowshostingsKey() {
  return ['windowshostings'] as const
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

export function getGetDnsDomainNameRecordsKey(
  args: InferRequestType<(typeof client.dns)[':domainName']['records']['$get']>,
) {
  return ['dns', '/dns/:domainName/records', args] as const
}

export function useGetDnsDomainNameRecords<TError = unknown>(
  args: InferRequestType<(typeof client.dns)[':domainName']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dns)[':domainName']['records']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDnsDomainNameRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dns)[':domainName']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dns[':domainName'].records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsDomainNameRecords<TError = unknown>(
  args: InferRequestType<(typeof client.dns)[':domainName']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dns)[':domainName']['records']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDnsDomainNameRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dns)[':domainName']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dns[':domainName'].records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDnsDomainNameRecordsKey() {
  return ['dns', '/dns/:domainName/records', 'POST'] as const
}

export function usePostDnsDomainNameRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dns)[':domainName']['records']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dns)[':domainName']['records']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDnsDomainNameRecordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dns)[':domainName']['records']['$post']> },
      ) => parseResponse(client.dns[':domainName'].records.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDnsDomainNameRecordsRecordIdKey(
  args: InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>,
) {
  return ['dns', '/dns/:domainName/records/:recordId', args] as const
}

export function useGetDnsDomainNameRecordsRecordId<TError = unknown>(
  args: InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDnsDomainNameRecordsRecordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dns[':domainName'].records[':recordId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsDomainNameRecordsRecordId<TError = unknown>(
  args: InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDnsDomainNameRecordsRecordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dns[':domainName'].records[':recordId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDnsDomainNameRecordsRecordIdKey() {
  return ['dns', '/dns/:domainName/records/:recordId', 'PUT'] as const
}

export function usePutDnsDomainNameRecordsRecordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dns)[':domainName']['records'][':recordId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDnsDomainNameRecordsRecordIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$put']>
        },
      ) => parseResponse(client.dns[':domainName'].records[':recordId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDnsDomainNameRecordsRecordIdKey() {
  return ['dns', '/dns/:domainName/records/:recordId', 'DELETE'] as const
}

export function useDeleteDnsDomainNameRecordsRecordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dns)[':domainName']['records'][':recordId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDnsDomainNameRecordsRecordIdKey()
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
            (typeof client.dns)[':domainName']['records'][':recordId']['$delete']
          >
        },
      ) =>
        parseResponse(client.dns[':domainName'].records[':recordId'].$delete(arg, clientOptions)),
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

export function getPostDomainsRegistrationsKey() {
  return ['domains', '/domains/registrations', 'POST'] as const
}

export function usePostDomainsRegistrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.domains.registrations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.domains.registrations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsRegistrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.domains.registrations.$post> },
      ) => parseResponse(client.domains.registrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsTransfersKey() {
  return ['domains', '/domains/transfers', 'POST'] as const
}

export function usePostDomainsTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.transfers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.domains.transfers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.domains.transfers.$post> }) =>
        parseResponse(client.domains.transfers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomainsDomainNameKey(
  args: InferRequestType<(typeof client.domains)[':domainName']['$get']>,
) {
  return ['domains', '/domains/:domainName', args] as const
}

export function useGetDomainsDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':domainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainName']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':domainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':domainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainName']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':domainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDomainsDomainNameNameserversKey() {
  return ['domains', '/domains/:domainName/nameservers', 'PUT'] as const
}

export function usePutDomainsDomainNameNameservers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':domainName']['nameservers']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':domainName']['nameservers']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDomainsDomainNameNameserversKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.domains)[':domainName']['nameservers']['$put']> },
      ) => parseResponse(client.domains[':domainName'].nameservers.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDomainsDomainNameRenewKey() {
  return ['domains', '/domains/:domainName/renew', 'PUT'] as const
}

export function usePutDomainsDomainNameRenew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':domainName']['renew']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':domainName']['renew']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDomainsDomainNameRenewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.domains)[':domainName']['renew']['$put']> },
      ) => parseResponse(client.domains[':domainName'].renew.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLinuxhostingsKey(args: InferRequestType<typeof client.linuxhostings.$get>) {
  return ['linuxhostings', '/linuxhostings', args] as const
}

export function useGetLinuxhostings<TError = unknown>(
  args: InferRequestType<typeof client.linuxhostings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linuxhostings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLinuxhostingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linuxhostings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linuxhostings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinuxhostings<TError = unknown>(
  args: InferRequestType<typeof client.linuxhostings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linuxhostings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLinuxhostingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linuxhostings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linuxhostings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLinuxhostingsDomainNameKey(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['$get']>,
) {
  return ['linuxhostings', '/linuxhostings/:domainName', args] as const
}

export function useGetLinuxhostingsDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinuxhostingsDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linuxhostings[':domainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinuxhostingsDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinuxhostingsDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linuxhostings[':domainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLinuxhostingsDomainNameFtpConfigurationKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/ftp/configuration', 'PUT'] as const
}

export function usePutLinuxhostingsDomainNameFtpConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linuxhostings)[':domainName']['ftp']['configuration']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.linuxhostings)[':domainName']['ftp']['configuration']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLinuxhostingsDomainNameFtpConfigurationKey()
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
            (typeof client.linuxhostings)[':domainName']['ftp']['configuration']['$put']
          >
        },
      ) =>
        parseResponse(
          client.linuxhostings[':domainName'].ftp.configuration.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutLinuxhostingsDomainNamePhpsettingsApcuKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/phpsettings/apcu', 'PUT'] as const
}

export function usePutLinuxhostingsDomainNamePhpsettingsApcu<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linuxhostings)[':domainName']['phpsettings']['apcu']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.linuxhostings)[':domainName']['phpsettings']['apcu']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLinuxhostingsDomainNamePhpsettingsApcuKey()
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
            (typeof client.linuxhostings)[':domainName']['phpsettings']['apcu']['$put']
          >
        },
      ) =>
        parseResponse(
          client.linuxhostings[':domainName'].phpsettings.apcu.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLinuxhostingsDomainNamePhpsettingsAvailableversionsKey(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['phpsettings']['availableversions']['$get']
  >,
) {
  return [
    'linuxhostings',
    '/linuxhostings/:domainName/phpsettings/availableversions',
    args,
  ] as const
}

export function useGetLinuxhostingsDomainNamePhpsettingsAvailableversions<TError = unknown>(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['phpsettings']['availableversions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linuxhostings)[':domainName']['phpsettings']['availableversions']['$get']
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
        ? getGetLinuxhostingsDomainNamePhpsettingsAvailableversionsKey(args)
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
                (typeof client.linuxhostings)[':domainName']['phpsettings']['availableversions']['$get']
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
          client.linuxhostings[':domainName'].phpsettings.availableversions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinuxhostingsDomainNamePhpsettingsAvailableversions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['phpsettings']['availableversions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linuxhostings)[':domainName']['phpsettings']['availableversions']['$get']
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
        ? getGetLinuxhostingsDomainNamePhpsettingsAvailableversionsKey(args)
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
                (typeof client.linuxhostings)[':domainName']['phpsettings']['availableversions']['$get']
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
          client.linuxhostings[':domainName'].phpsettings.availableversions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutLinuxhostingsDomainNamePhpsettingsMemorylimitKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/phpsettings/memorylimit', 'PUT'] as const
}

export function usePutLinuxhostingsDomainNamePhpsettingsMemorylimit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linuxhostings)[':domainName']['phpsettings']['memorylimit']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['phpsettings']['memorylimit']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLinuxhostingsDomainNamePhpsettingsMemorylimitKey()
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
            (typeof client.linuxhostings)[':domainName']['phpsettings']['memorylimit']['$put']
          >
        },
      ) =>
        parseResponse(
          client.linuxhostings[':domainName'].phpsettings.memorylimit.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutLinuxhostingsDomainNamePhpsettingsVersionKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/phpsettings/version', 'PUT'] as const
}

export function usePutLinuxhostingsDomainNamePhpsettingsVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linuxhostings)[':domainName']['phpsettings']['version']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.linuxhostings)[':domainName']['phpsettings']['version']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLinuxhostingsDomainNamePhpsettingsVersionKey()
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
            (typeof client.linuxhostings)[':domainName']['phpsettings']['version']['$put']
          >
        },
      ) =>
        parseResponse(
          client.linuxhostings[':domainName'].phpsettings.version.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLinuxhostingsDomainNameScheduledtasksKey(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>,
) {
  return ['linuxhostings', '/linuxhostings/:domainName/scheduledtasks', args] as const
}

export function useGetLinuxhostingsDomainNameScheduledtasks<TError = unknown>(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>
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
        ? getGetLinuxhostingsDomainNameScheduledtasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linuxhostings[':domainName'].scheduledtasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinuxhostingsDomainNameScheduledtasks<TError = unknown>(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>
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
        ? getGetLinuxhostingsDomainNameScheduledtasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linuxhostings[':domainName'].scheduledtasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLinuxhostingsDomainNameScheduledtasksKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/scheduledtasks', 'POST'] as const
}

export function usePostLinuxhostingsDomainNameScheduledtasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinuxhostingsDomainNameScheduledtasksKey()
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
            (typeof client.linuxhostings)[':domainName']['scheduledtasks']['$post']
          >
        },
      ) =>
        parseResponse(client.linuxhostings[':domainName'].scheduledtasks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLinuxhostingsDomainNameScheduledtasksScheduledTaskIdKey(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$get']
  >,
) {
  return [
    'linuxhostings',
    '/linuxhostings/:domainName/scheduledtasks/:scheduledTaskId',
    args,
  ] as const
}

export function useGetLinuxhostingsDomainNameScheduledtasksScheduledTaskId<TError = unknown>(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$get']
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
        ? getGetLinuxhostingsDomainNameScheduledtasksScheduledTaskIdKey(args)
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
                (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$get']
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
          client.linuxhostings[':domainName'].scheduledtasks[':scheduledTaskId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinuxhostingsDomainNameScheduledtasksScheduledTaskId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$get']
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
        ? getGetLinuxhostingsDomainNameScheduledtasksScheduledTaskIdKey(args)
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
                (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$get']
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
          client.linuxhostings[':domainName'].scheduledtasks[':scheduledTaskId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutLinuxhostingsDomainNameScheduledtasksScheduledTaskIdKey() {
  return [
    'linuxhostings',
    '/linuxhostings/:domainName/scheduledtasks/:scheduledTaskId',
    'PUT',
  ] as const
}

export function usePutLinuxhostingsDomainNameScheduledtasksScheduledTaskId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLinuxhostingsDomainNameScheduledtasksScheduledTaskIdKey()
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
            (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.linuxhostings[':domainName'].scheduledtasks[':scheduledTaskId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteLinuxhostingsDomainNameScheduledtasksScheduledTaskIdKey() {
  return [
    'linuxhostings',
    '/linuxhostings/:domainName/scheduledtasks/:scheduledTaskId',
    'DELETE',
  ] as const
}

export function useDeleteLinuxhostingsDomainNameScheduledtasksScheduledTaskId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLinuxhostingsDomainNameScheduledtasksScheduledTaskIdKey()
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
            (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.linuxhostings[':domainName'].scheduledtasks[':scheduledTaskId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutLinuxhostingsDomainNameSettingsGzipcompressionKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/settings/gzipcompression', 'PUT'] as const
}

export function usePutLinuxhostingsDomainNameSettingsGzipcompression<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linuxhostings)[':domainName']['settings']['gzipcompression']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['settings']['gzipcompression']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLinuxhostingsDomainNameSettingsGzipcompressionKey()
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
            (typeof client.linuxhostings)[':domainName']['settings']['gzipcompression']['$put']
          >
        },
      ) =>
        parseResponse(
          client.linuxhostings[':domainName'].settings.gzipcompression.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLinuxhostingsDomainNameSitesSiteNameHostheadersKey() {
  return [
    'linuxhostings',
    '/linuxhostings/:domainName/sites/:siteName/hostheaders',
    'POST',
  ] as const
}

export function usePostLinuxhostingsDomainNameSitesSiteNameHostheaders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linuxhostings)[':domainName']['sites'][':siteName']['hostheaders']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['sites'][':siteName']['hostheaders']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinuxhostingsDomainNameSitesSiteNameHostheadersKey()
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
            (typeof client.linuxhostings)[':domainName']['sites'][':siteName']['hostheaders']['$post']
          >
        },
      ) =>
        parseResponse(
          client.linuxhostings[':domainName'].sites[':siteName'].hostheaders.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutLinuxhostingsDomainNameSitesSiteNameHttp2ConfigurationKey() {
  return [
    'linuxhostings',
    '/linuxhostings/:domainName/sites/:siteName/http2/configuration',
    'PUT',
  ] as const
}

export function usePutLinuxhostingsDomainNameSitesSiteNameHttp2Configuration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linuxhostings)[':domainName']['sites'][':siteName']['http2']['configuration']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['sites'][':siteName']['http2']['configuration']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLinuxhostingsDomainNameSitesSiteNameHttp2ConfigurationKey()
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
            (typeof client.linuxhostings)[':domainName']['sites'][':siteName']['http2']['configuration']['$put']
          >
        },
      ) =>
        parseResponse(
          client.linuxhostings[':domainName'].sites[':siteName'].http2.configuration.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutLinuxhostingsDomainNameSshConfigurationKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/ssh/configuration', 'PUT'] as const
}

export function usePutLinuxhostingsDomainNameSshConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linuxhostings)[':domainName']['ssh']['configuration']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.linuxhostings)[':domainName']['ssh']['configuration']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLinuxhostingsDomainNameSshConfigurationKey()
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
            (typeof client.linuxhostings)[':domainName']['ssh']['configuration']['$put']
          >
        },
      ) =>
        parseResponse(
          client.linuxhostings[':domainName'].ssh.configuration.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLinuxhostingsDomainNameSshKeysKey(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>,
) {
  return ['linuxhostings', '/linuxhostings/:domainName/ssh/keys', args] as const
}

export function useGetLinuxhostingsDomainNameSshKeys<TError = unknown>(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinuxhostingsDomainNameSshKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linuxhostings[':domainName'].ssh.keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinuxhostingsDomainNameSshKeys<TError = unknown>(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinuxhostingsDomainNameSshKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linuxhostings[':domainName'].ssh.keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLinuxhostingsDomainNameSshKeysKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/ssh/keys', 'POST'] as const
}

export function usePostLinuxhostingsDomainNameSshKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinuxhostingsDomainNameSshKeysKey()
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
            (typeof client.linuxhostings)[':domainName']['ssh']['keys']['$post']
          >
        },
      ) => parseResponse(client.linuxhostings[':domainName'].ssh.keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLinuxhostingsDomainNameSshKeysFingerprintKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/ssh/keys/:fingerprint', 'DELETE'] as const
}

export function useDeleteLinuxhostingsDomainNameSshKeysFingerprint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linuxhostings)[':domainName']['ssh']['keys'][':fingerprint']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['ssh']['keys'][':fingerprint']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLinuxhostingsDomainNameSshKeysFingerprintKey()
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
            (typeof client.linuxhostings)[':domainName']['ssh']['keys'][':fingerprint']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.linuxhostings[':domainName'].ssh.keys[':fingerprint'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutLinuxhostingsDomainNameSslsettingsHostnameAutoredirectKey() {
  return [
    'linuxhostings',
    '/linuxhostings/:domainName/sslsettings/:hostname/autoredirect',
    'PUT',
  ] as const
}

export function usePutLinuxhostingsDomainNameSslsettingsHostnameAutoredirect<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linuxhostings)[':domainName']['sslsettings'][':hostname']['autoredirect']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['sslsettings'][':hostname']['autoredirect']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLinuxhostingsDomainNameSslsettingsHostnameAutoredirectKey()
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
            (typeof client.linuxhostings)[':domainName']['sslsettings'][':hostname']['autoredirect']['$put']
          >
        },
      ) =>
        parseResponse(
          client.linuxhostings[':domainName'].sslsettings[':hostname'].autoredirect.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutLinuxhostingsDomainNameSslsettingsHostnameLetsencryptKey() {
  return [
    'linuxhostings',
    '/linuxhostings/:domainName/sslsettings/:hostname/letsencrypt',
    'PUT',
  ] as const
}

export function usePutLinuxhostingsDomainNameSslsettingsHostnameLetsencrypt<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linuxhostings)[':domainName']['sslsettings'][':hostname']['letsencrypt']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['sslsettings'][':hostname']['letsencrypt']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLinuxhostingsDomainNameSslsettingsHostnameLetsencryptKey()
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
            (typeof client.linuxhostings)[':domainName']['sslsettings'][':hostname']['letsencrypt']['$put']
          >
        },
      ) =>
        parseResponse(
          client.linuxhostings[':domainName'].sslsettings[':hostname'].letsencrypt.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLinuxhostingsDomainNameSubsitesKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/subsites', 'POST'] as const
}

export function usePostLinuxhostingsDomainNameSubsites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['subsites']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linuxhostings)[':domainName']['subsites']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinuxhostingsDomainNameSubsitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.linuxhostings)[':domainName']['subsites']['$post']>
        },
      ) => parseResponse(client.linuxhostings[':domainName'].subsites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLinuxhostingsDomainNameSubsitesSiteNameKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/subsites/:siteName', 'DELETE'] as const
}

export function useDeleteLinuxhostingsDomainNameSubsitesSiteName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linuxhostings)[':domainName']['subsites'][':siteName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['subsites'][':siteName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLinuxhostingsDomainNameSubsitesSiteNameKey()
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
            (typeof client.linuxhostings)[':domainName']['subsites'][':siteName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.linuxhostings[':domainName'].subsites[':siteName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMailboxesKey(args: InferRequestType<typeof client.mailboxes.$get>) {
  return ['mailboxes', '/mailboxes', args] as const
}

export function useGetMailboxes<TError = unknown>(
  args: InferRequestType<typeof client.mailboxes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mailboxes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMailboxesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mailboxes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mailboxes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMailboxes<TError = unknown>(
  args: InferRequestType<typeof client.mailboxes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mailboxes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMailboxesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mailboxes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mailboxes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMailboxesKey() {
  return ['mailboxes', '/mailboxes', 'POST'] as const
}

export function usePostMailboxes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mailboxes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.mailboxes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMailboxesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mailboxes.$post> }) =>
        parseResponse(client.mailboxes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMailboxesMailboxNameKey(
  args: InferRequestType<(typeof client.mailboxes)[':mailboxName']['$get']>,
) {
  return ['mailboxes', '/mailboxes/:mailboxName', args] as const
}

export function useGetMailboxesMailboxName<TError = unknown>(
  args: InferRequestType<(typeof client.mailboxes)[':mailboxName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMailboxesMailboxNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mailboxes[':mailboxName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMailboxesMailboxName<TError = unknown>(
  args: InferRequestType<(typeof client.mailboxes)[':mailboxName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMailboxesMailboxNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mailboxes[':mailboxName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMailboxesMailboxNameKey() {
  return ['mailboxes', '/mailboxes/:mailboxName', 'DELETE'] as const
}

export function useDeleteMailboxesMailboxName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.mailboxes)[':mailboxName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMailboxesMailboxNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.mailboxes)[':mailboxName']['$delete']> },
      ) => parseResponse(client.mailboxes[':mailboxName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMailboxesMailboxNameAutoforwardKey() {
  return ['mailboxes', '/mailboxes/:mailboxName/autoforward', 'PUT'] as const
}

export function usePutMailboxesMailboxNameAutoforward<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['autoforward']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.mailboxes)[':mailboxName']['autoforward']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMailboxesMailboxNameAutoforwardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mailboxes)[':mailboxName']['autoforward']['$put']>
        },
      ) => parseResponse(client.mailboxes[':mailboxName'].autoforward.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMailboxesMailboxNameAutoreplyKey() {
  return ['mailboxes', '/mailboxes/:mailboxName/autoreply', 'PUT'] as const
}

export function usePutMailboxesMailboxNameAutoreply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['autoreply']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.mailboxes)[':mailboxName']['autoreply']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMailboxesMailboxNameAutoreplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mailboxes)[':mailboxName']['autoreply']['$put']>
        },
      ) => parseResponse(client.mailboxes[':mailboxName'].autoreply.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMailboxesMailboxNamePasswordKey() {
  return ['mailboxes', '/mailboxes/:mailboxName/password', 'PUT'] as const
}

export function usePutMailboxesMailboxNamePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['password']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.mailboxes)[':mailboxName']['password']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMailboxesMailboxNamePasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.mailboxes)[':mailboxName']['password']['$put']> },
      ) => parseResponse(client.mailboxes[':mailboxName'].password.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMailzonesDomainNameKey(
  args: InferRequestType<(typeof client.mailzones)[':domainName']['$get']>,
) {
  return ['mailzones', '/mailzones/:domainName', args] as const
}

export function useGetMailzonesDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.mailzones)[':domainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mailzones)[':domainName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMailzonesDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mailzones)[':domainName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mailzones[':domainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMailzonesDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.mailzones)[':domainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mailzones)[':domainName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMailzonesDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mailzones)[':domainName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mailzones[':domainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMailzonesDomainNameAliasesKey() {
  return ['mailzones', '/mailzones/:domainName/aliases', 'POST'] as const
}

export function usePostMailzonesDomainNameAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mailzones)[':domainName']['aliases']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mailzones)[':domainName']['aliases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMailzonesDomainNameAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.mailzones)[':domainName']['aliases']['$post']> },
      ) => parseResponse(client.mailzones[':domainName'].aliases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMailzonesDomainNameAliasesEmailAddressKey() {
  return ['mailzones', '/mailzones/:domainName/aliases/:emailAddress', 'PUT'] as const
}

export function usePutMailzonesDomainNameAliasesEmailAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mailzones)[':domainName']['aliases'][':emailAddress']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mailzones)[':domainName']['aliases'][':emailAddress']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMailzonesDomainNameAliasesEmailAddressKey()
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
            (typeof client.mailzones)[':domainName']['aliases'][':emailAddress']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mailzones[':domainName'].aliases[':emailAddress'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMailzonesDomainNameAliasesEmailAddressKey() {
  return ['mailzones', '/mailzones/:domainName/aliases/:emailAddress', 'DELETE'] as const
}

export function useDeleteMailzonesDomainNameAliasesEmailAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mailzones)[':domainName']['aliases'][':emailAddress']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.mailzones)[':domainName']['aliases'][':emailAddress']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMailzonesDomainNameAliasesEmailAddressKey()
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
            (typeof client.mailzones)[':domainName']['aliases'][':emailAddress']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mailzones[':domainName'].aliases[':emailAddress'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMailzonesDomainNameAntispamKey() {
  return ['mailzones', '/mailzones/:domainName/antispam', 'PUT'] as const
}

export function usePutMailzonesDomainNameAntispam<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mailzones)[':domainName']['antispam']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.mailzones)[':domainName']['antispam']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMailzonesDomainNameAntispamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.mailzones)[':domainName']['antispam']['$put']> },
      ) => parseResponse(client.mailzones[':domainName'].antispam.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMailzonesDomainNameCatchallKey() {
  return ['mailzones', '/mailzones/:domainName/catchall', 'POST'] as const
}

export function usePostMailzonesDomainNameCatchall<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mailzones)[':domainName']['catchall']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mailzones)[':domainName']['catchall']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMailzonesDomainNameCatchallKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.mailzones)[':domainName']['catchall']['$post']> },
      ) => parseResponse(client.mailzones[':domainName'].catchall.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMailzonesDomainNameCatchallEmailAddressKey() {
  return ['mailzones', '/mailzones/:domainName/catchall/:emailAddress', 'DELETE'] as const
}

export function useDeleteMailzonesDomainNameCatchallEmailAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mailzones)[':domainName']['catchall'][':emailAddress']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.mailzones)[':domainName']['catchall'][':emailAddress']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMailzonesDomainNameCatchallEmailAddressKey()
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
            (typeof client.mailzones)[':domainName']['catchall'][':emailAddress']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mailzones[':domainName'].catchall[':emailAddress'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMailzonesDomainNameSmtpdomainsKey() {
  return ['mailzones', '/mailzones/:domainName/smtpdomains', 'POST'] as const
}

export function usePostMailzonesDomainNameSmtpdomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mailzones)[':domainName']['smtpdomains']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mailzones)[':domainName']['smtpdomains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMailzonesDomainNameSmtpdomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mailzones)[':domainName']['smtpdomains']['$post']>
        },
      ) => parseResponse(client.mailzones[':domainName'].smtpdomains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMailzonesDomainNameSmtpdomainsHostnameKey() {
  return ['mailzones', '/mailzones/:domainName/smtpdomains/:hostname', 'PUT'] as const
}

export function usePutMailzonesDomainNameSmtpdomainsHostname<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mailzones)[':domainName']['smtpdomains'][':hostname']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mailzones)[':domainName']['smtpdomains'][':hostname']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMailzonesDomainNameSmtpdomainsHostnameKey()
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
            (typeof client.mailzones)[':domainName']['smtpdomains'][':hostname']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mailzones[':domainName'].smtpdomains[':hostname'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMailzonesDomainNameSmtpdomainsHostnameKey() {
  return ['mailzones', '/mailzones/:domainName/smtpdomains/:hostname', 'DELETE'] as const
}

export function useDeleteMailzonesDomainNameSmtpdomainsHostname<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mailzones)[':domainName']['smtpdomains'][':hostname']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.mailzones)[':domainName']['smtpdomains'][':hostname']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMailzonesDomainNameSmtpdomainsHostnameKey()
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
            (typeof client.mailzones)[':domainName']['smtpdomains'][':hostname']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mailzones[':domainName'].smtpdomains[':hostname'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMysqldatabasesKey(args: InferRequestType<typeof client.mysqldatabases.$get>) {
  return ['mysqldatabases', '/mysqldatabases', args] as const
}

export function useGetMysqldatabases<TError = unknown>(
  args: InferRequestType<typeof client.mysqldatabases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mysqldatabases.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMysqldatabasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mysqldatabases.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mysqldatabases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMysqldatabases<TError = unknown>(
  args: InferRequestType<typeof client.mysqldatabases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mysqldatabases.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMysqldatabasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mysqldatabases.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mysqldatabases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMysqldatabasesKey() {
  return ['mysqldatabases', '/mysqldatabases', 'POST'] as const
}

export function usePostMysqldatabases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mysqldatabases.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.mysqldatabases.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMysqldatabasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mysqldatabases.$post> }) =>
        parseResponse(client.mysqldatabases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMysqldatabasesDatabaseNameKey(
  args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['$get']>,
) {
  return ['mysqldatabases', '/mysqldatabases/:databaseName', args] as const
}

export function useGetMysqldatabasesDatabaseName<TError = unknown>(
  args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMysqldatabasesDatabaseNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mysqldatabases[':databaseName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMysqldatabasesDatabaseName<TError = unknown>(
  args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMysqldatabasesDatabaseNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mysqldatabases[':databaseName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMysqldatabasesDatabaseNameKey() {
  return ['mysqldatabases', '/mysqldatabases/:databaseName', 'DELETE'] as const
}

export function useDeleteMysqldatabasesDatabaseName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.mysqldatabases)[':databaseName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMysqldatabasesDatabaseNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['$delete']> },
      ) => parseResponse(client.mysqldatabases[':databaseName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMysqldatabasesDatabaseNameUsersKey(
  args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>,
) {
  return ['mysqldatabases', '/mysqldatabases/:databaseName/users', args] as const
}

export function useGetMysqldatabasesDatabaseNameUsers<TError = unknown>(
  args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMysqldatabasesDatabaseNameUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mysqldatabases[':databaseName'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMysqldatabasesDatabaseNameUsers<TError = unknown>(
  args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMysqldatabasesDatabaseNameUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mysqldatabases[':databaseName'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMysqldatabasesDatabaseNameUsersKey() {
  return ['mysqldatabases', '/mysqldatabases/:databaseName/users', 'POST'] as const
}

export function usePostMysqldatabasesDatabaseNameUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['users']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mysqldatabases)[':databaseName']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMysqldatabasesDatabaseNameUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['users']['$post']>
        },
      ) => parseResponse(client.mysqldatabases[':databaseName'].users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMysqldatabasesDatabaseNameUsersUserNameKey() {
  return ['mysqldatabases', '/mysqldatabases/:databaseName/users/:userName', 'DELETE'] as const
}

export function useDeleteMysqldatabasesDatabaseNameUsersUserName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMysqldatabasesDatabaseNameUsersUserNameKey()
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
            (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mysqldatabases[':databaseName'].users[':userName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMysqldatabasesDatabaseNameUsersUserNamePasswordKey() {
  return [
    'mysqldatabases',
    '/mysqldatabases/:databaseName/users/:userName/password',
    'PUT',
  ] as const
}

export function usePutMysqldatabasesDatabaseNameUsersUserNamePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['password']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['password']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMysqldatabasesDatabaseNameUsersUserNamePasswordKey()
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
            (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['password']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mysqldatabases[':databaseName'].users[':userName'].password.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMysqldatabasesDatabaseNameUsersUserNameStatusKey() {
  return ['mysqldatabases', '/mysqldatabases/:databaseName/users/:userName/status', 'PUT'] as const
}

export function usePutMysqldatabasesDatabaseNameUsersUserNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['status']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMysqldatabasesDatabaseNameUsersUserNameStatusKey()
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
            (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mysqldatabases[':databaseName'].users[':userName'].status.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProvisioningjobsJobIdKey(
  args: InferRequestType<(typeof client.provisioningjobs)[':jobId']['$get']>,
) {
  return ['provisioningjobs', '/provisioningjobs/:jobId', args] as const
}

export function useGetProvisioningjobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.provisioningjobs)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.provisioningjobs)[':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProvisioningjobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.provisioningjobs)[':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.provisioningjobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvisioningjobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.provisioningjobs)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.provisioningjobs)[':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProvisioningjobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.provisioningjobs)[':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.provisioningjobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServicepacksKey() {
  return ['servicepacks', '/servicepacks'] as const
}

export function useGetServicepacks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servicepacks.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServicepacksKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servicepacks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.servicepacks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicepacks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servicepacks.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServicepacksKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servicepacks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.servicepacks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSshKey(args: InferRequestType<typeof client.ssh.$get>) {
  return ['ssh', '/ssh', args] as const
}

export function useGetSsh<TError = unknown>(
  args: InferRequestType<typeof client.ssh.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSshKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ssh.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSsh<TError = unknown>(
  args: InferRequestType<typeof client.ssh.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSshKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ssh.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSslcertificaterequestsKey(
  args: InferRequestType<typeof client.sslcertificaterequests.$get>,
) {
  return ['sslcertificaterequests', '/sslcertificaterequests', args] as const
}

export function useGetSslcertificaterequests<TError = unknown>(
  args: InferRequestType<typeof client.sslcertificaterequests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificaterequests.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSslcertificaterequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificaterequests.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sslcertificaterequests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSslcertificaterequests<TError = unknown>(
  args: InferRequestType<typeof client.sslcertificaterequests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificaterequests.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSslcertificaterequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificaterequests.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sslcertificaterequests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSslcertificaterequestsKey() {
  return ['sslcertificaterequests', '/sslcertificaterequests', 'POST'] as const
}

export function usePostSslcertificaterequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificaterequests.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sslcertificaterequests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSslcertificaterequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sslcertificaterequests.$post> },
      ) => parseResponse(client.sslcertificaterequests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSslcertificaterequestsIdKey(
  args: InferRequestType<(typeof client.sslcertificaterequests)[':id']['$get']>,
) {
  return ['sslcertificaterequests', '/sslcertificaterequests/:id', args] as const
}

export function useGetSslcertificaterequestsId<TError = unknown>(
  args: InferRequestType<(typeof client.sslcertificaterequests)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sslcertificaterequests)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSslcertificaterequestsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sslcertificaterequests)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sslcertificaterequests[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSslcertificaterequestsId<TError = unknown>(
  args: InferRequestType<(typeof client.sslcertificaterequests)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sslcertificaterequests)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSslcertificaterequestsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sslcertificaterequests)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sslcertificaterequests[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSslcertificaterequestsIdKey() {
  return ['sslcertificaterequests', '/sslcertificaterequests/:id', 'PUT'] as const
}

export function usePutSslcertificaterequestsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sslcertificaterequests)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sslcertificaterequests)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSslcertificaterequestsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sslcertificaterequests)[':id']['$put']> },
      ) => parseResponse(client.sslcertificaterequests[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSslcertificatesKey(
  args: InferRequestType<typeof client.sslcertificates.$get>,
) {
  return ['sslcertificates', '/sslcertificates', args] as const
}

export function useGetSslcertificates<TError = unknown>(
  args: InferRequestType<typeof client.sslcertificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSslcertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sslcertificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSslcertificates<TError = unknown>(
  args: InferRequestType<typeof client.sslcertificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSslcertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sslcertificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSslcertificatesSha1FingerprintKey(
  args: InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>,
) {
  return ['sslcertificates', '/sslcertificates/:sha1Fingerprint', args] as const
}

export function useGetSslcertificatesSha1Fingerprint<TError = unknown>(
  args: InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSslcertificatesSha1FingerprintKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sslcertificates[':sha1Fingerprint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSslcertificatesSha1Fingerprint<TError = unknown>(
  args: InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSslcertificatesSha1FingerprintKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sslcertificates[':sha1Fingerprint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSslcertificatesSha1FingerprintDownloadKey(
  args: InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>,
) {
  return ['sslcertificates', '/sslcertificates/:sha1Fingerprint/download', args] as const
}

export function useGetSslcertificatesSha1FingerprintDownload<TError = unknown>(
  args: InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>
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
        ? getGetSslcertificatesSha1FingerprintDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sslcertificates[':sha1Fingerprint'].download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSslcertificatesSha1FingerprintDownload<TError = unknown>(
  args: InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>
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
        ? getGetSslcertificatesSha1FingerprintDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sslcertificates[':sha1Fingerprint'].download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWindowshostingsKey(
  args: InferRequestType<typeof client.windowshostings.$get>,
) {
  return ['windowshostings', '/windowshostings', args] as const
}

export function useGetWindowshostings<TError = unknown>(
  args: InferRequestType<typeof client.windowshostings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.windowshostings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWindowshostingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.windowshostings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.windowshostings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWindowshostings<TError = unknown>(
  args: InferRequestType<typeof client.windowshostings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.windowshostings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWindowshostingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.windowshostings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.windowshostings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWindowshostingsDomainNameKey(
  args: InferRequestType<(typeof client.windowshostings)[':domainName']['$get']>,
) {
  return ['windowshostings', '/windowshostings/:domainName', args] as const
}

export function useGetWindowshostingsDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.windowshostings)[':domainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.windowshostings)[':domainName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWindowshostingsDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.windowshostings)[':domainName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.windowshostings[':domainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWindowshostingsDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.windowshostings)[':domainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.windowshostings)[':domainName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWindowshostingsDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.windowshostings)[':domainName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.windowshostings[':domainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
