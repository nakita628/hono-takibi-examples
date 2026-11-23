import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function useAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.accounts.$post>,
        TOnMutateResult
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

export function useAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountsAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountsAccountIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountsAccountIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDnsDomainNameRecordsQueryKey(
  args: InferRequestType<(typeof client.dns)[':domainName']['records']['$get']>,
) {
  return ['dns', '/dns/:domainName/records', args] as const
}

export function getDnsDomainNameRecordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dns)[':domainName']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dns)[':domainName']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dns)[':domainName']['records']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsDomainNameRecordsQueryKey>
  >({
    queryKey: getDnsDomainNameRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns[':domainName'].records.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDnsDomainNameRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dns)[':domainName']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dns)[':domainName']['records']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dns)[':domainName']['records']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDnsDomainNameRecordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDnsDomainNameRecordsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDnsDomainNameRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dns)[':domainName']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dns)[':domainName']['records']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dns)[':domainName']['records']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDnsDomainNameRecordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDnsDomainNameRecordsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDnsDomainNameRecordsMutationKey() {
  return ['dns', '/dns/:domainName/records', 'POST'] as const
}

export function getPostDnsDomainNameRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dns)[':domainName']['records']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dns)[':domainName']['records']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDnsDomainNameRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dns)[':domainName']['records']['$post']>,
    ) {
      return parseResponse(client.dns[':domainName'].records.$post(args, options))
    },
  })
}

export function usePostDnsDomainNameRecords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dns)[':domainName']['records']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.dns)[':domainName']['records']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDnsDomainNameRecordsMutationOptions<TError, TOnMutateResult>(
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

export function getDnsDomainNameRecordsRecordIdQueryKey(
  args: InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>,
) {
  return ['dns', '/dns/:domainName/records/:recordId', args] as const
}

export function getDnsDomainNameRecordsRecordIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsDomainNameRecordsRecordIdQueryKey>
  >({
    queryKey: getDnsDomainNameRecordsRecordIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns[':domainName'].records[':recordId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDnsDomainNameRecordsRecordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDnsDomainNameRecordsRecordIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDnsDomainNameRecordsRecordIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDnsDomainNameRecordsRecordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDnsDomainNameRecordsRecordIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDnsDomainNameRecordsRecordIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutDnsDomainNameRecordsRecordIdMutationKey() {
  return ['dns', '/dns/:domainName/records/:recordId', 'PUT'] as const
}

export function getPutDnsDomainNameRecordsRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dns)[':domainName']['records'][':recordId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDnsDomainNameRecordsRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$put']>,
    ) {
      return parseResponse(client.dns[':domainName'].records[':recordId'].$put(args, options))
    },
  })
}

export function usePutDnsDomainNameRecordsRecordId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.dns)[':domainName']['records'][':recordId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDnsDomainNameRecordsRecordIdMutationOptions<
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

export function getDeleteDnsDomainNameRecordsRecordIdMutationKey() {
  return ['dns', '/dns/:domainName/records/:recordId', 'DELETE'] as const
}

export function getDeleteDnsDomainNameRecordsRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDnsDomainNameRecordsRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$delete']>,
    ) {
      return parseResponse(client.dns[':domainName'].records[':recordId'].$delete(args, options))
    },
  })
}

export function useDeleteDnsDomainNameRecordsRecordId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDnsDomainNameRecordsRecordIdMutationOptions<
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

export function useDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDomainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDomainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDomainsRegistrationsMutationKey() {
  return ['domains', '/domains/registrations', 'POST'] as const
}

export function getPostDomainsRegistrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.domains.registrations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.domains.registrations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsRegistrationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.domains.registrations.$post>) {
      return parseResponse(client.domains.registrations.$post(args, options))
    },
  })
}

export function usePostDomainsRegistrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.domains.registrations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.domains.registrations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsRegistrationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostDomainsTransfersMutationKey() {
  return ['domains', '/domains/transfers', 'POST'] as const
}

export function getPostDomainsTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.transfers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.domains.transfers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsTransfersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.domains.transfers.$post>) {
      return parseResponse(client.domains.transfers.$post(args, options))
    },
  })
}

export function usePostDomainsTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.domains.transfers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.domains.transfers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsTransfersMutationOptions<TError, TOnMutateResult>(
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

export function getDomainsDomainNameQueryKey(
  args: InferRequestType<(typeof client.domains)[':domainName']['$get']>,
) {
  return ['domains', '/domains/:domainName', args] as const
}

export function getDomainsDomainNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainNameQueryKey>
  >({
    queryKey: getDomainsDomainNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':domainName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDomainsDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domainName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains)[':domainName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsDomainNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDomainsDomainNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDomainsDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domainName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains)[':domainName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsDomainNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDomainsDomainNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutDomainsDomainNameNameserversMutationKey() {
  return ['domains', '/domains/:domainName/nameservers', 'PUT'] as const
}

export function getPutDomainsDomainNameNameserversMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':domainName']['nameservers']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.domains)[':domainName']['nameservers']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDomainsDomainNameNameserversMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':domainName']['nameservers']['$put']>,
    ) {
      return parseResponse(client.domains[':domainName'].nameservers.$put(args, options))
    },
  })
}

export function usePutDomainsDomainNameNameservers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domainName']['nameservers']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.domains)[':domainName']['nameservers']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDomainsDomainNameNameserversMutationOptions<
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

export function getPutDomainsDomainNameRenewMutationKey() {
  return ['domains', '/domains/:domainName/renew', 'PUT'] as const
}

export function getPutDomainsDomainNameRenewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':domainName']['renew']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.domains)[':domainName']['renew']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDomainsDomainNameRenewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':domainName']['renew']['$put']>,
    ) {
      return parseResponse(client.domains[':domainName'].renew.$put(args, options))
    },
  })
}

export function usePutDomainsDomainNameRenew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domainName']['renew']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.domains)[':domainName']['renew']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDomainsDomainNameRenewMutationOptions<TError, TOnMutateResult>(
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

export function getLinuxhostingsQueryKey(args: InferRequestType<typeof client.linuxhostings.$get>) {
  return ['linuxhostings', '/linuxhostings', args] as const
}

export function getLinuxhostingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linuxhostings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.linuxhostings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linuxhostings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLinuxhostingsQueryKey>
  >({
    queryKey: getLinuxhostingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linuxhostings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLinuxhostings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linuxhostings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.linuxhostings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linuxhostings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLinuxhostingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLinuxhostingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLinuxhostings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linuxhostings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.linuxhostings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linuxhostings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLinuxhostingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLinuxhostingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLinuxhostingsDomainNameQueryKey(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['$get']>,
) {
  return ['linuxhostings', '/linuxhostings/:domainName', args] as const
}

export function getLinuxhostingsDomainNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinuxhostingsDomainNameQueryKey>
  >({
    queryKey: getLinuxhostingsDomainNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linuxhostings[':domainName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinuxhostingsDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinuxhostingsDomainNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getLinuxhostingsDomainNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinuxhostingsDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinuxhostingsDomainNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getLinuxhostingsDomainNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutLinuxhostingsDomainNameFtpConfigurationMutationKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/ftp/configuration', 'PUT'] as const
}

export function getPutLinuxhostingsDomainNameFtpConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.linuxhostings)[':domainName']['ftp']['configuration']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLinuxhostingsDomainNameFtpConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linuxhostings)[':domainName']['ftp']['configuration']['$put']
      >,
    ) {
      return parseResponse(
        client.linuxhostings[':domainName'].ftp.configuration.$put(args, options),
      )
    },
  })
}

export function usePutLinuxhostingsDomainNameFtpConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.linuxhostings)[':domainName']['ftp']['configuration']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLinuxhostingsDomainNameFtpConfigurationMutationOptions<
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

export function getPutLinuxhostingsDomainNamePhpsettingsApcuMutationKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/phpsettings/apcu', 'PUT'] as const
}

export function getPutLinuxhostingsDomainNamePhpsettingsApcuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.linuxhostings)[':domainName']['phpsettings']['apcu']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLinuxhostingsDomainNamePhpsettingsApcuMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linuxhostings)[':domainName']['phpsettings']['apcu']['$put']
      >,
    ) {
      return parseResponse(client.linuxhostings[':domainName'].phpsettings.apcu.$put(args, options))
    },
  })
}

export function usePutLinuxhostingsDomainNamePhpsettingsApcu<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.linuxhostings)[':domainName']['phpsettings']['apcu']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLinuxhostingsDomainNamePhpsettingsApcuMutationOptions<
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

export function getLinuxhostingsDomainNamePhpsettingsAvailableversionsQueryKey(
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

export function getLinuxhostingsDomainNamePhpsettingsAvailableversionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['phpsettings']['availableversions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getLinuxhostingsDomainNamePhpsettingsAvailableversionsQueryKey>
  >({
    queryKey: getLinuxhostingsDomainNamePhpsettingsAvailableversionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linuxhostings[':domainName'].phpsettings.availableversions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinuxhostingsDomainNamePhpsettingsAvailableversions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['phpsettings']['availableversions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getLinuxhostingsDomainNamePhpsettingsAvailableversionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getLinuxhostingsDomainNamePhpsettingsAvailableversionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinuxhostingsDomainNamePhpsettingsAvailableversions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['phpsettings']['availableversions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getLinuxhostingsDomainNamePhpsettingsAvailableversionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getLinuxhostingsDomainNamePhpsettingsAvailableversionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutLinuxhostingsDomainNamePhpsettingsMemorylimitMutationKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/phpsettings/memorylimit', 'PUT'] as const
}

export function getPutLinuxhostingsDomainNamePhpsettingsMemorylimitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['phpsettings']['memorylimit']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutLinuxhostingsDomainNamePhpsettingsMemorylimitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linuxhostings)[':domainName']['phpsettings']['memorylimit']['$put']
      >,
    ) {
      return parseResponse(
        client.linuxhostings[':domainName'].phpsettings.memorylimit.$put(args, options),
      )
    },
  })
}

export function usePutLinuxhostingsDomainNamePhpsettingsMemorylimit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.linuxhostings)[':domainName']['phpsettings']['memorylimit']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLinuxhostingsDomainNamePhpsettingsMemorylimitMutationOptions<
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

export function getPutLinuxhostingsDomainNamePhpsettingsVersionMutationKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/phpsettings/version', 'PUT'] as const
}

export function getPutLinuxhostingsDomainNamePhpsettingsVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['phpsettings']['version']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutLinuxhostingsDomainNamePhpsettingsVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linuxhostings)[':domainName']['phpsettings']['version']['$put']
      >,
    ) {
      return parseResponse(
        client.linuxhostings[':domainName'].phpsettings.version.$put(args, options),
      )
    },
  })
}

export function usePutLinuxhostingsDomainNamePhpsettingsVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.linuxhostings)[':domainName']['phpsettings']['version']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLinuxhostingsDomainNamePhpsettingsVersionMutationOptions<
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

export function getLinuxhostingsDomainNameScheduledtasksQueryKey(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>,
) {
  return ['linuxhostings', '/linuxhostings/:domainName/scheduledtasks', args] as const
}

export function getLinuxhostingsDomainNameScheduledtasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinuxhostingsDomainNameScheduledtasksQueryKey>
  >({
    queryKey: getLinuxhostingsDomainNameScheduledtasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linuxhostings[':domainName'].scheduledtasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinuxhostingsDomainNameScheduledtasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinuxhostingsDomainNameScheduledtasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getLinuxhostingsDomainNameScheduledtasksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinuxhostingsDomainNameScheduledtasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinuxhostingsDomainNameScheduledtasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getLinuxhostingsDomainNameScheduledtasksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLinuxhostingsDomainNameScheduledtasksMutationKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/scheduledtasks', 'POST'] as const
}

export function getPostLinuxhostingsDomainNameScheduledtasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinuxhostingsDomainNameScheduledtasksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linuxhostings)[':domainName']['scheduledtasks']['$post']
      >,
    ) {
      return parseResponse(client.linuxhostings[':domainName'].scheduledtasks.$post(args, options))
    },
  })
}

export function usePostLinuxhostingsDomainNameScheduledtasks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinuxhostingsDomainNameScheduledtasksMutationOptions<
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

export function getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdQueryKey(
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

export function getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdQueryKey>
  >({
    queryKey: getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linuxhostings[':domainName'].scheduledtasks[':scheduledTaskId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinuxhostingsDomainNameScheduledtasksScheduledTaskId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinuxhostingsDomainNameScheduledtasksScheduledTaskId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutLinuxhostingsDomainNameScheduledtasksScheduledTaskIdMutationKey() {
  return [
    'linuxhostings',
    '/linuxhostings/:domainName/scheduledtasks/:scheduledTaskId',
    'PUT',
  ] as const
}

export function getPutLinuxhostingsDomainNameScheduledtasksScheduledTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutLinuxhostingsDomainNameScheduledtasksScheduledTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$put']
      >,
    ) {
      return parseResponse(
        client.linuxhostings[':domainName'].scheduledtasks[':scheduledTaskId'].$put(args, options),
      )
    },
  })
}

export function usePutLinuxhostingsDomainNameScheduledtasksScheduledTaskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutLinuxhostingsDomainNameScheduledtasksScheduledTaskIdMutationOptions<
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

export function getDeleteLinuxhostingsDomainNameScheduledtasksScheduledTaskIdMutationKey() {
  return [
    'linuxhostings',
    '/linuxhostings/:domainName/scheduledtasks/:scheduledTaskId',
    'DELETE',
  ] as const
}

export function getDeleteLinuxhostingsDomainNameScheduledtasksScheduledTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteLinuxhostingsDomainNameScheduledtasksScheduledTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$delete']
      >,
    ) {
      return parseResponse(
        client.linuxhostings[':domainName'].scheduledtasks[':scheduledTaskId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteLinuxhostingsDomainNameScheduledtasksScheduledTaskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteLinuxhostingsDomainNameScheduledtasksScheduledTaskIdMutationOptions<
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

export function getPutLinuxhostingsDomainNameSettingsGzipcompressionMutationKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/settings/gzipcompression', 'PUT'] as const
}

export function getPutLinuxhostingsDomainNameSettingsGzipcompressionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['settings']['gzipcompression']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutLinuxhostingsDomainNameSettingsGzipcompressionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linuxhostings)[':domainName']['settings']['gzipcompression']['$put']
      >,
    ) {
      return parseResponse(
        client.linuxhostings[':domainName'].settings.gzipcompression.$put(args, options),
      )
    },
  })
}

export function usePutLinuxhostingsDomainNameSettingsGzipcompression<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.linuxhostings)[':domainName']['settings']['gzipcompression']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLinuxhostingsDomainNameSettingsGzipcompressionMutationOptions<
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

export function getPostLinuxhostingsDomainNameSitesSiteNameHostheadersMutationKey() {
  return [
    'linuxhostings',
    '/linuxhostings/:domainName/sites/:siteName/hostheaders',
    'POST',
  ] as const
}

export function getPostLinuxhostingsDomainNameSitesSiteNameHostheadersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['sites'][':siteName']['hostheaders']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLinuxhostingsDomainNameSitesSiteNameHostheadersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linuxhostings)[':domainName']['sites'][':siteName']['hostheaders']['$post']
      >,
    ) {
      return parseResponse(
        client.linuxhostings[':domainName'].sites[':siteName'].hostheaders.$post(args, options),
      )
    },
  })
}

export function usePostLinuxhostingsDomainNameSitesSiteNameHostheaders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.linuxhostings)[':domainName']['sites'][':siteName']['hostheaders']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinuxhostingsDomainNameSitesSiteNameHostheadersMutationOptions<
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

export function getPutLinuxhostingsDomainNameSitesSiteNameHttp2ConfigurationMutationKey() {
  return [
    'linuxhostings',
    '/linuxhostings/:domainName/sites/:siteName/http2/configuration',
    'PUT',
  ] as const
}

export function getPutLinuxhostingsDomainNameSitesSiteNameHttp2ConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['sites'][':siteName']['http2']['configuration']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutLinuxhostingsDomainNameSitesSiteNameHttp2ConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linuxhostings)[':domainName']['sites'][':siteName']['http2']['configuration']['$put']
      >,
    ) {
      return parseResponse(
        client.linuxhostings[':domainName'].sites[':siteName'].http2.configuration.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutLinuxhostingsDomainNameSitesSiteNameHttp2Configuration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.linuxhostings)[':domainName']['sites'][':siteName']['http2']['configuration']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutLinuxhostingsDomainNameSitesSiteNameHttp2ConfigurationMutationOptions<
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

export function getPutLinuxhostingsDomainNameSshConfigurationMutationKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/ssh/configuration', 'PUT'] as const
}

export function getPutLinuxhostingsDomainNameSshConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.linuxhostings)[':domainName']['ssh']['configuration']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLinuxhostingsDomainNameSshConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linuxhostings)[':domainName']['ssh']['configuration']['$put']
      >,
    ) {
      return parseResponse(
        client.linuxhostings[':domainName'].ssh.configuration.$put(args, options),
      )
    },
  })
}

export function usePutLinuxhostingsDomainNameSshConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.linuxhostings)[':domainName']['ssh']['configuration']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLinuxhostingsDomainNameSshConfigurationMutationOptions<
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

export function getLinuxhostingsDomainNameSshKeysQueryKey(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>,
) {
  return ['linuxhostings', '/linuxhostings/:domainName/ssh/keys', args] as const
}

export function getLinuxhostingsDomainNameSshKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinuxhostingsDomainNameSshKeysQueryKey>
  >({
    queryKey: getLinuxhostingsDomainNameSshKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linuxhostings[':domainName'].ssh.keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinuxhostingsDomainNameSshKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinuxhostingsDomainNameSshKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getLinuxhostingsDomainNameSshKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinuxhostingsDomainNameSshKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinuxhostingsDomainNameSshKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getLinuxhostingsDomainNameSshKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLinuxhostingsDomainNameSshKeysMutationKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/ssh/keys', 'POST'] as const
}

export function getPostLinuxhostingsDomainNameSshKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinuxhostingsDomainNameSshKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$post']>,
    ) {
      return parseResponse(client.linuxhostings[':domainName'].ssh.keys.$post(args, options))
    },
  })
}

export function usePostLinuxhostingsDomainNameSshKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinuxhostingsDomainNameSshKeysMutationOptions<
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

export function getDeleteLinuxhostingsDomainNameSshKeysFingerprintMutationKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/ssh/keys/:fingerprint', 'DELETE'] as const
}

export function getDeleteLinuxhostingsDomainNameSshKeysFingerprintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['ssh']['keys'][':fingerprint']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteLinuxhostingsDomainNameSshKeysFingerprintMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linuxhostings)[':domainName']['ssh']['keys'][':fingerprint']['$delete']
      >,
    ) {
      return parseResponse(
        client.linuxhostings[':domainName'].ssh.keys[':fingerprint'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLinuxhostingsDomainNameSshKeysFingerprint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.linuxhostings)[':domainName']['ssh']['keys'][':fingerprint']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLinuxhostingsDomainNameSshKeysFingerprintMutationOptions<
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

export function getPutLinuxhostingsDomainNameSslsettingsHostnameAutoredirectMutationKey() {
  return [
    'linuxhostings',
    '/linuxhostings/:domainName/sslsettings/:hostname/autoredirect',
    'PUT',
  ] as const
}

export function getPutLinuxhostingsDomainNameSslsettingsHostnameAutoredirectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['sslsettings'][':hostname']['autoredirect']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutLinuxhostingsDomainNameSslsettingsHostnameAutoredirectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linuxhostings)[':domainName']['sslsettings'][':hostname']['autoredirect']['$put']
      >,
    ) {
      return parseResponse(
        client.linuxhostings[':domainName'].sslsettings[':hostname'].autoredirect.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutLinuxhostingsDomainNameSslsettingsHostnameAutoredirect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.linuxhostings)[':domainName']['sslsettings'][':hostname']['autoredirect']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutLinuxhostingsDomainNameSslsettingsHostnameAutoredirectMutationOptions<
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

export function getPutLinuxhostingsDomainNameSslsettingsHostnameLetsencryptMutationKey() {
  return [
    'linuxhostings',
    '/linuxhostings/:domainName/sslsettings/:hostname/letsencrypt',
    'PUT',
  ] as const
}

export function getPutLinuxhostingsDomainNameSslsettingsHostnameLetsencryptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['sslsettings'][':hostname']['letsencrypt']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutLinuxhostingsDomainNameSslsettingsHostnameLetsencryptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linuxhostings)[':domainName']['sslsettings'][':hostname']['letsencrypt']['$put']
      >,
    ) {
      return parseResponse(
        client.linuxhostings[':domainName'].sslsettings[':hostname'].letsencrypt.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutLinuxhostingsDomainNameSslsettingsHostnameLetsencrypt<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.linuxhostings)[':domainName']['sslsettings'][':hostname']['letsencrypt']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutLinuxhostingsDomainNameSslsettingsHostnameLetsencryptMutationOptions<
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

export function getPostLinuxhostingsDomainNameSubsitesMutationKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/subsites', 'POST'] as const
}

export function getPostLinuxhostingsDomainNameSubsitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['subsites']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linuxhostings)[':domainName']['subsites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinuxhostingsDomainNameSubsitesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linuxhostings)[':domainName']['subsites']['$post']>,
    ) {
      return parseResponse(client.linuxhostings[':domainName'].subsites.$post(args, options))
    },
  })
}

export function usePostLinuxhostingsDomainNameSubsites<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['subsites']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linuxhostings)[':domainName']['subsites']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinuxhostingsDomainNameSubsitesMutationOptions<
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

export function getDeleteLinuxhostingsDomainNameSubsitesSiteNameMutationKey() {
  return ['linuxhostings', '/linuxhostings/:domainName/subsites/:siteName', 'DELETE'] as const
}

export function getDeleteLinuxhostingsDomainNameSubsitesSiteNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['subsites'][':siteName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteLinuxhostingsDomainNameSubsitesSiteNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linuxhostings)[':domainName']['subsites'][':siteName']['$delete']
      >,
    ) {
      return parseResponse(
        client.linuxhostings[':domainName'].subsites[':siteName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLinuxhostingsDomainNameSubsitesSiteName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.linuxhostings)[':domainName']['subsites'][':siteName']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLinuxhostingsDomainNameSubsitesSiteNameMutationOptions<
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

export function getMailboxesQueryKey(args: InferRequestType<typeof client.mailboxes.$get>) {
  return ['mailboxes', '/mailboxes', args] as const
}

export function getMailboxesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mailboxes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mailboxes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mailboxes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMailboxesQueryKey>
  >({
    queryKey: getMailboxesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mailboxes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMailboxes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mailboxes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mailboxes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mailboxes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMailboxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMailboxesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMailboxes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mailboxes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mailboxes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mailboxes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMailboxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMailboxesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMailboxesMutationKey() {
  return ['mailboxes', '/mailboxes', 'POST'] as const
}

export function getPostMailboxesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mailboxes.$post>>>>>,
    TError,
    InferRequestType<typeof client.mailboxes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMailboxesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mailboxes.$post>) {
      return parseResponse(client.mailboxes.$post(args, options))
    },
  })
}

export function usePostMailboxes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mailboxes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.mailboxes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMailboxesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMailboxesMailboxNameQueryKey(
  args: InferRequestType<(typeof client.mailboxes)[':mailboxName']['$get']>,
) {
  return ['mailboxes', '/mailboxes/:mailboxName', args] as const
}

export function getMailboxesMailboxNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mailboxes)[':mailboxName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMailboxesMailboxNameQueryKey>
  >({
    queryKey: getMailboxesMailboxNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mailboxes[':mailboxName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMailboxesMailboxName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mailboxes)[':mailboxName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMailboxesMailboxNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMailboxesMailboxNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMailboxesMailboxName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mailboxes)[':mailboxName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMailboxesMailboxNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMailboxesMailboxNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteMailboxesMailboxNameMutationKey() {
  return ['mailboxes', '/mailboxes/:mailboxName', 'DELETE'] as const
}

export function getDeleteMailboxesMailboxNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.mailboxes)[':mailboxName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMailboxesMailboxNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.mailboxes)[':mailboxName']['$delete']>) {
      return parseResponse(client.mailboxes[':mailboxName'].$delete(args, options))
    },
  })
}

export function useDeleteMailboxesMailboxName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.mailboxes)[':mailboxName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMailboxesMailboxNameMutationOptions<TError, TOnMutateResult>(
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

export function getPutMailboxesMailboxNameAutoforwardMutationKey() {
  return ['mailboxes', '/mailboxes/:mailboxName/autoforward', 'PUT'] as const
}

export function getPutMailboxesMailboxNameAutoforwardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['autoforward']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.mailboxes)[':mailboxName']['autoforward']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMailboxesMailboxNameAutoforwardMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mailboxes)[':mailboxName']['autoforward']['$put']>,
    ) {
      return parseResponse(client.mailboxes[':mailboxName'].autoforward.$put(args, options))
    },
  })
}

export function usePutMailboxesMailboxNameAutoforward<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mailboxes)[':mailboxName']['autoforward']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.mailboxes)[':mailboxName']['autoforward']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMailboxesMailboxNameAutoforwardMutationOptions<
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

export function getPutMailboxesMailboxNameAutoreplyMutationKey() {
  return ['mailboxes', '/mailboxes/:mailboxName/autoreply', 'PUT'] as const
}

export function getPutMailboxesMailboxNameAutoreplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['autoreply']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.mailboxes)[':mailboxName']['autoreply']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMailboxesMailboxNameAutoreplyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mailboxes)[':mailboxName']['autoreply']['$put']>,
    ) {
      return parseResponse(client.mailboxes[':mailboxName'].autoreply.$put(args, options))
    },
  })
}

export function usePutMailboxesMailboxNameAutoreply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['autoreply']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.mailboxes)[':mailboxName']['autoreply']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMailboxesMailboxNameAutoreplyMutationOptions<
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

export function getPutMailboxesMailboxNamePasswordMutationKey() {
  return ['mailboxes', '/mailboxes/:mailboxName/password', 'PUT'] as const
}

export function getPutMailboxesMailboxNamePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['password']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.mailboxes)[':mailboxName']['password']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMailboxesMailboxNamePasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mailboxes)[':mailboxName']['password']['$put']>,
    ) {
      return parseResponse(client.mailboxes[':mailboxName'].password.$put(args, options))
    },
  })
}

export function usePutMailboxesMailboxNamePassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['password']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.mailboxes)[':mailboxName']['password']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMailboxesMailboxNamePasswordMutationOptions<
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

export function getMailzonesDomainNameQueryKey(
  args: InferRequestType<(typeof client.mailzones)[':domainName']['$get']>,
) {
  return ['mailzones', '/mailzones/:domainName', args] as const
}

export function getMailzonesDomainNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mailzones)[':domainName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mailzones)[':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mailzones)[':domainName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMailzonesDomainNameQueryKey>
  >({
    queryKey: getMailzonesDomainNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mailzones[':domainName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMailzonesDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mailzones)[':domainName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mailzones)[':domainName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mailzones)[':domainName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMailzonesDomainNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMailzonesDomainNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMailzonesDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mailzones)[':domainName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mailzones)[':domainName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mailzones)[':domainName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMailzonesDomainNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMailzonesDomainNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMailzonesDomainNameAliasesMutationKey() {
  return ['mailzones', '/mailzones/:domainName/aliases', 'POST'] as const
}

export function getPostMailzonesDomainNameAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mailzones)[':domainName']['aliases']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mailzones)[':domainName']['aliases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMailzonesDomainNameAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mailzones)[':domainName']['aliases']['$post']>,
    ) {
      return parseResponse(client.mailzones[':domainName'].aliases.$post(args, options))
    },
  })
}

export function usePostMailzonesDomainNameAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mailzones)[':domainName']['aliases']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mailzones)[':domainName']['aliases']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMailzonesDomainNameAliasesMutationOptions<
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

export function getPutMailzonesDomainNameAliasesEmailAddressMutationKey() {
  return ['mailzones', '/mailzones/:domainName/aliases/:emailAddress', 'PUT'] as const
}

export function getPutMailzonesDomainNameAliasesEmailAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.mailzones)[':domainName']['aliases'][':emailAddress']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMailzonesDomainNameAliasesEmailAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mailzones)[':domainName']['aliases'][':emailAddress']['$put']
      >,
    ) {
      return parseResponse(
        client.mailzones[':domainName'].aliases[':emailAddress'].$put(args, options),
      )
    },
  })
}

export function usePutMailzonesDomainNameAliasesEmailAddress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.mailzones)[':domainName']['aliases'][':emailAddress']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.mailzones)[':domainName']['aliases'][':emailAddress']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMailzonesDomainNameAliasesEmailAddressMutationOptions<
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

export function getDeleteMailzonesDomainNameAliasesEmailAddressMutationKey() {
  return ['mailzones', '/mailzones/:domainName/aliases/:emailAddress', 'DELETE'] as const
}

export function getDeleteMailzonesDomainNameAliasesEmailAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mailzones)[':domainName']['aliases'][':emailAddress']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMailzonesDomainNameAliasesEmailAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mailzones)[':domainName']['aliases'][':emailAddress']['$delete']
      >,
    ) {
      return parseResponse(
        client.mailzones[':domainName'].aliases[':emailAddress'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMailzonesDomainNameAliasesEmailAddress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.mailzones)[':domainName']['aliases'][':emailAddress']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMailzonesDomainNameAliasesEmailAddressMutationOptions<
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

export function getPutMailzonesDomainNameAntispamMutationKey() {
  return ['mailzones', '/mailzones/:domainName/antispam', 'PUT'] as const
}

export function getPutMailzonesDomainNameAntispamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mailzones)[':domainName']['antispam']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.mailzones)[':domainName']['antispam']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMailzonesDomainNameAntispamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mailzones)[':domainName']['antispam']['$put']>,
    ) {
      return parseResponse(client.mailzones[':domainName'].antispam.$put(args, options))
    },
  })
}

export function usePutMailzonesDomainNameAntispam<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mailzones)[':domainName']['antispam']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.mailzones)[':domainName']['antispam']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMailzonesDomainNameAntispamMutationOptions<
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

export function getPostMailzonesDomainNameCatchallMutationKey() {
  return ['mailzones', '/mailzones/:domainName/catchall', 'POST'] as const
}

export function getPostMailzonesDomainNameCatchallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mailzones)[':domainName']['catchall']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mailzones)[':domainName']['catchall']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMailzonesDomainNameCatchallMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mailzones)[':domainName']['catchall']['$post']>,
    ) {
      return parseResponse(client.mailzones[':domainName'].catchall.$post(args, options))
    },
  })
}

export function usePostMailzonesDomainNameCatchall<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mailzones)[':domainName']['catchall']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mailzones)[':domainName']['catchall']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMailzonesDomainNameCatchallMutationOptions<
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

export function getDeleteMailzonesDomainNameCatchallEmailAddressMutationKey() {
  return ['mailzones', '/mailzones/:domainName/catchall/:emailAddress', 'DELETE'] as const
}

export function getDeleteMailzonesDomainNameCatchallEmailAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mailzones)[':domainName']['catchall'][':emailAddress']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMailzonesDomainNameCatchallEmailAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mailzones)[':domainName']['catchall'][':emailAddress']['$delete']
      >,
    ) {
      return parseResponse(
        client.mailzones[':domainName'].catchall[':emailAddress'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMailzonesDomainNameCatchallEmailAddress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.mailzones)[':domainName']['catchall'][':emailAddress']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMailzonesDomainNameCatchallEmailAddressMutationOptions<
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

export function getPostMailzonesDomainNameSmtpdomainsMutationKey() {
  return ['mailzones', '/mailzones/:domainName/smtpdomains', 'POST'] as const
}

export function getPostMailzonesDomainNameSmtpdomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mailzones)[':domainName']['smtpdomains']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mailzones)[':domainName']['smtpdomains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMailzonesDomainNameSmtpdomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mailzones)[':domainName']['smtpdomains']['$post']>,
    ) {
      return parseResponse(client.mailzones[':domainName'].smtpdomains.$post(args, options))
    },
  })
}

export function usePostMailzonesDomainNameSmtpdomains<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mailzones)[':domainName']['smtpdomains']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mailzones)[':domainName']['smtpdomains']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMailzonesDomainNameSmtpdomainsMutationOptions<
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

export function getPutMailzonesDomainNameSmtpdomainsHostnameMutationKey() {
  return ['mailzones', '/mailzones/:domainName/smtpdomains/:hostname', 'PUT'] as const
}

export function getPutMailzonesDomainNameSmtpdomainsHostnameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.mailzones)[':domainName']['smtpdomains'][':hostname']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMailzonesDomainNameSmtpdomainsHostnameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mailzones)[':domainName']['smtpdomains'][':hostname']['$put']
      >,
    ) {
      return parseResponse(
        client.mailzones[':domainName'].smtpdomains[':hostname'].$put(args, options),
      )
    },
  })
}

export function usePutMailzonesDomainNameSmtpdomainsHostname<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.mailzones)[':domainName']['smtpdomains'][':hostname']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.mailzones)[':domainName']['smtpdomains'][':hostname']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMailzonesDomainNameSmtpdomainsHostnameMutationOptions<
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

export function getDeleteMailzonesDomainNameSmtpdomainsHostnameMutationKey() {
  return ['mailzones', '/mailzones/:domainName/smtpdomains/:hostname', 'DELETE'] as const
}

export function getDeleteMailzonesDomainNameSmtpdomainsHostnameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mailzones)[':domainName']['smtpdomains'][':hostname']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMailzonesDomainNameSmtpdomainsHostnameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mailzones)[':domainName']['smtpdomains'][':hostname']['$delete']
      >,
    ) {
      return parseResponse(
        client.mailzones[':domainName'].smtpdomains[':hostname'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMailzonesDomainNameSmtpdomainsHostname<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.mailzones)[':domainName']['smtpdomains'][':hostname']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMailzonesDomainNameSmtpdomainsHostnameMutationOptions<
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

export function getMysqldatabasesQueryKey(
  args: InferRequestType<typeof client.mysqldatabases.$get>,
) {
  return ['mysqldatabases', '/mysqldatabases', args] as const
}

export function getMysqldatabasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mysqldatabases.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mysqldatabases.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mysqldatabases.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMysqldatabasesQueryKey>
  >({
    queryKey: getMysqldatabasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mysqldatabases.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMysqldatabases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mysqldatabases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mysqldatabases.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mysqldatabases.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMysqldatabasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMysqldatabasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMysqldatabases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mysqldatabases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mysqldatabases.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mysqldatabases.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMysqldatabasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMysqldatabasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMysqldatabasesMutationKey() {
  return ['mysqldatabases', '/mysqldatabases', 'POST'] as const
}

export function getPostMysqldatabasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mysqldatabases.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.mysqldatabases.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMysqldatabasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mysqldatabases.$post>) {
      return parseResponse(client.mysqldatabases.$post(args, options))
    },
  })
}

export function usePostMysqldatabases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mysqldatabases.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.mysqldatabases.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMysqldatabasesMutationOptions<TError, TOnMutateResult>(
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

export function getMysqldatabasesDatabaseNameQueryKey(
  args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['$get']>,
) {
  return ['mysqldatabases', '/mysqldatabases/:databaseName', args] as const
}

export function getMysqldatabasesDatabaseNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMysqldatabasesDatabaseNameQueryKey>
  >({
    queryKey: getMysqldatabasesDatabaseNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mysqldatabases[':databaseName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMysqldatabasesDatabaseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMysqldatabasesDatabaseNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMysqldatabasesDatabaseNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMysqldatabasesDatabaseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMysqldatabasesDatabaseNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMysqldatabasesDatabaseNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMysqldatabasesDatabaseNameMutationKey() {
  return ['mysqldatabases', '/mysqldatabases/:databaseName', 'DELETE'] as const
}

export function getDeleteMysqldatabasesDatabaseNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.mysqldatabases)[':databaseName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMysqldatabasesDatabaseNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['$delete']>,
    ) {
      return parseResponse(client.mysqldatabases[':databaseName'].$delete(args, options))
    },
  })
}

export function useDeleteMysqldatabasesDatabaseName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.mysqldatabases)[':databaseName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMysqldatabasesDatabaseNameMutationOptions<
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

export function getMysqldatabasesDatabaseNameUsersQueryKey(
  args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>,
) {
  return ['mysqldatabases', '/mysqldatabases/:databaseName/users', args] as const
}

export function getMysqldatabasesDatabaseNameUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMysqldatabasesDatabaseNameUsersQueryKey>
  >({
    queryKey: getMysqldatabasesDatabaseNameUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mysqldatabases[':databaseName'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMysqldatabasesDatabaseNameUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMysqldatabasesDatabaseNameUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMysqldatabasesDatabaseNameUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMysqldatabasesDatabaseNameUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMysqldatabasesDatabaseNameUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMysqldatabasesDatabaseNameUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMysqldatabasesDatabaseNameUsersMutationKey() {
  return ['mysqldatabases', '/mysqldatabases/:databaseName/users', 'POST'] as const
}

export function getPostMysqldatabasesDatabaseNameUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['users']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mysqldatabases)[':databaseName']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMysqldatabasesDatabaseNameUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['users']['$post']>,
    ) {
      return parseResponse(client.mysqldatabases[':databaseName'].users.$post(args, options))
    },
  })
}

export function usePostMysqldatabasesDatabaseNameUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['users']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mysqldatabases)[':databaseName']['users']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMysqldatabasesDatabaseNameUsersMutationOptions<
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

export function getDeleteMysqldatabasesDatabaseNameUsersUserNameMutationKey() {
  return ['mysqldatabases', '/mysqldatabases/:databaseName/users/:userName', 'DELETE'] as const
}

export function getDeleteMysqldatabasesDatabaseNameUsersUserNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMysqldatabasesDatabaseNameUsersUserNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['$delete']
      >,
    ) {
      return parseResponse(
        client.mysqldatabases[':databaseName'].users[':userName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMysqldatabasesDatabaseNameUsersUserName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMysqldatabasesDatabaseNameUsersUserNameMutationOptions<
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

export function getPutMysqldatabasesDatabaseNameUsersUserNamePasswordMutationKey() {
  return [
    'mysqldatabases',
    '/mysqldatabases/:databaseName/users/:userName/password',
    'PUT',
  ] as const
}

export function getPutMysqldatabasesDatabaseNameUsersUserNamePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['password']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMysqldatabasesDatabaseNameUsersUserNamePasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['password']['$put']
      >,
    ) {
      return parseResponse(
        client.mysqldatabases[':databaseName'].users[':userName'].password.$put(args, options),
      )
    },
  })
}

export function usePutMysqldatabasesDatabaseNameUsersUserNamePassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['password']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMysqldatabasesDatabaseNameUsersUserNamePasswordMutationOptions<
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

export function getPutMysqldatabasesDatabaseNameUsersUserNameStatusMutationKey() {
  return ['mysqldatabases', '/mysqldatabases/:databaseName/users/:userName/status', 'PUT'] as const
}

export function getPutMysqldatabasesDatabaseNameUsersUserNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMysqldatabasesDatabaseNameUsersUserNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.mysqldatabases[':databaseName'].users[':userName'].status.$put(args, options),
      )
    },
  })
}

export function usePutMysqldatabasesDatabaseNameUsersUserNameStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['status']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMysqldatabasesDatabaseNameUsersUserNameStatusMutationOptions<
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

export function getProvisioningjobsJobIdQueryKey(
  args: InferRequestType<(typeof client.provisioningjobs)[':jobId']['$get']>,
) {
  return ['provisioningjobs', '/provisioningjobs/:jobId', args] as const
}

export function getProvisioningjobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.provisioningjobs)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.provisioningjobs)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.provisioningjobs)[':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvisioningjobsJobIdQueryKey>
  >({
    queryKey: getProvisioningjobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.provisioningjobs[':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProvisioningjobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.provisioningjobs)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.provisioningjobs)[':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.provisioningjobs)[':jobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProvisioningjobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getProvisioningjobsJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProvisioningjobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.provisioningjobs)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.provisioningjobs)[':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.provisioningjobs)[':jobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProvisioningjobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getProvisioningjobsJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getServicepacksQueryKey() {
  return ['servicepacks', '/servicepacks'] as const
}

export function getServicepacksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servicepacks.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servicepacks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServicepacksQueryKey>
  >({
    queryKey: getServicepacksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.servicepacks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useServicepacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servicepacks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servicepacks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getServicepacksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServicepacksQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServicepacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servicepacks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servicepacks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getServicepacksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServicepacksQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSshQueryKey(args: InferRequestType<typeof client.ssh.$get>) {
  return ['ssh', '/ssh', args] as const
}

export function getSshQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ssh.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSshQueryKey>
  >({
    queryKey: getSshQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ssh.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSsh<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ssh.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSshQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSshQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSsh<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ssh.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSshQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSshQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSslcertificaterequestsQueryKey(
  args: InferRequestType<typeof client.sslcertificaterequests.$get>,
) {
  return ['sslcertificaterequests', '/sslcertificaterequests', args] as const
}

export function getSslcertificaterequestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificaterequests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sslcertificaterequests.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificaterequests.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSslcertificaterequestsQueryKey>
  >({
    queryKey: getSslcertificaterequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sslcertificaterequests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSslcertificaterequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificaterequests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sslcertificaterequests.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificaterequests.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSslcertificaterequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSslcertificaterequestsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSslcertificaterequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificaterequests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sslcertificaterequests.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificaterequests.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSslcertificaterequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSslcertificaterequestsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSslcertificaterequestsMutationKey() {
  return ['sslcertificaterequests', '/sslcertificaterequests', 'POST'] as const
}

export function getPostSslcertificaterequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificaterequests.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sslcertificaterequests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSslcertificaterequestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sslcertificaterequests.$post>) {
      return parseResponse(client.sslcertificaterequests.$post(args, options))
    },
  })
}

export function usePostSslcertificaterequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificaterequests.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sslcertificaterequests.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSslcertificaterequestsMutationOptions<TError, TOnMutateResult>(
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

export function getSslcertificaterequestsIdQueryKey(
  args: InferRequestType<(typeof client.sslcertificaterequests)[':id']['$get']>,
) {
  return ['sslcertificaterequests', '/sslcertificaterequests/:id', args] as const
}

export function getSslcertificaterequestsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sslcertificaterequests)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sslcertificaterequests)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sslcertificaterequests)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSslcertificaterequestsIdQueryKey>
  >({
    queryKey: getSslcertificaterequestsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sslcertificaterequests[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSslcertificaterequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sslcertificaterequests)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sslcertificaterequests)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sslcertificaterequests)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSslcertificaterequestsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSslcertificaterequestsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSslcertificaterequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sslcertificaterequests)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sslcertificaterequests)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sslcertificaterequests)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSslcertificaterequestsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSslcertificaterequestsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSslcertificaterequestsIdMutationKey() {
  return ['sslcertificaterequests', '/sslcertificaterequests/:id', 'PUT'] as const
}

export function getPutSslcertificaterequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sslcertificaterequests)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sslcertificaterequests)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSslcertificaterequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sslcertificaterequests)[':id']['$put']>,
    ) {
      return parseResponse(client.sslcertificaterequests[':id'].$put(args, options))
    },
  })
}

export function usePutSslcertificaterequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sslcertificaterequests)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sslcertificaterequests)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSslcertificaterequestsIdMutationOptions<TError, TOnMutateResult>(
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

export function getSslcertificatesQueryKey(
  args: InferRequestType<typeof client.sslcertificates.$get>,
) {
  return ['sslcertificates', '/sslcertificates', args] as const
}

export function getSslcertificatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sslcertificates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSslcertificatesQueryKey>
  >({
    queryKey: getSslcertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sslcertificates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSslcertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sslcertificates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSslcertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSslcertificatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSslcertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sslcertificates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSslcertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSslcertificatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSslcertificatesSha1FingerprintQueryKey(
  args: InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>,
) {
  return ['sslcertificates', '/sslcertificates/:sha1Fingerprint', args] as const
}

export function getSslcertificatesSha1FingerprintQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSslcertificatesSha1FingerprintQueryKey>
  >({
    queryKey: getSslcertificatesSha1FingerprintQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sslcertificates[':sha1Fingerprint'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSslcertificatesSha1Fingerprint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSslcertificatesSha1FingerprintQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSslcertificatesSha1FingerprintQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSslcertificatesSha1Fingerprint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSslcertificatesSha1FingerprintQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSslcertificatesSha1FingerprintQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSslcertificatesSha1FingerprintDownloadQueryKey(
  args: InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>,
) {
  return ['sslcertificates', '/sslcertificates/:sha1Fingerprint/download', args] as const
}

export function getSslcertificatesSha1FingerprintDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSslcertificatesSha1FingerprintDownloadQueryKey>
  >({
    queryKey: getSslcertificatesSha1FingerprintDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sslcertificates[':sha1Fingerprint'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSslcertificatesSha1FingerprintDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSslcertificatesSha1FingerprintDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSslcertificatesSha1FingerprintDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSslcertificatesSha1FingerprintDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSslcertificatesSha1FingerprintDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSslcertificatesSha1FingerprintDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWindowshostingsQueryKey(
  args: InferRequestType<typeof client.windowshostings.$get>,
) {
  return ['windowshostings', '/windowshostings', args] as const
}

export function getWindowshostingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.windowshostings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.windowshostings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.windowshostings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWindowshostingsQueryKey>
  >({
    queryKey: getWindowshostingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.windowshostings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWindowshostings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.windowshostings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.windowshostings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.windowshostings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWindowshostingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWindowshostingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWindowshostings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.windowshostings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.windowshostings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.windowshostings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWindowshostingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWindowshostingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWindowshostingsDomainNameQueryKey(
  args: InferRequestType<(typeof client.windowshostings)[':domainName']['$get']>,
) {
  return ['windowshostings', '/windowshostings/:domainName', args] as const
}

export function getWindowshostingsDomainNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.windowshostings)[':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.windowshostings)[':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.windowshostings)[':domainName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWindowshostingsDomainNameQueryKey>
  >({
    queryKey: getWindowshostingsDomainNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.windowshostings[':domainName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWindowshostingsDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.windowshostings)[':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.windowshostings)[':domainName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.windowshostings)[':domainName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWindowshostingsDomainNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWindowshostingsDomainNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWindowshostingsDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.windowshostings)[':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.windowshostings)[':domainName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.windowshostings)[':domainName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWindowshostingsDomainNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWindowshostingsDomainNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
