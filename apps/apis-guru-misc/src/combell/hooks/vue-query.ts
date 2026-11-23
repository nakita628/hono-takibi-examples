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

export function getDnsDomainNameRecordsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dns)[':domainName']['records']['$get']>>,
) {
  return ['dns', '/dns/:domainName/records', toValue(args)] as const
}

export function getDnsDomainNameRecordsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dns)[':domainName']['records']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDnsDomainNameRecordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns[':domainName'].records.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dns)[':domainName']['records']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dns)[':domainName']['records']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDnsDomainNameRecordsQueryKey>
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
          Awaited<ReturnType<(typeof client.dns)[':domainName']['records']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsDomainNameRecordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDnsDomainNameRecordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dns[':domainName'].records.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>
  >,
) {
  return ['dns', '/dns/:domainName/records/:recordId', toValue(args)] as const
}

export function getDnsDomainNameRecordsRecordIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDnsDomainNameRecordsRecordIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns[':domainName'].records[':recordId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDnsDomainNameRecordsRecordIdQueryKey>
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
          Awaited<ReturnType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsDomainNameRecordsRecordIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDnsDomainNameRecordsRecordIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dns[':domainName'].records[':recordId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.dns)[':domainName']['records'][':recordId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domainName']['$get']>>,
) {
  return ['domains', '/domains/:domainName', toValue(args)] as const
}

export function getDomainsDomainNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domainName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':domainName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domainName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domainName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainsDomainNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':domainName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getLinuxhostingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linuxhostings.$get>>,
) {
  return ['linuxhostings', '/linuxhostings', toValue(args)] as const
}

export function getLinuxhostingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linuxhostings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinuxhostingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linuxhostings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinuxhostings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linuxhostings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linuxhostings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linuxhostings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linuxhostings.$get>>>>
          >,
          ReturnType<typeof getLinuxhostingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linuxhostings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLinuxhostingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinuxhostingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linuxhostings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinuxhostingsDomainNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.linuxhostings)[':domainName']['$get']>>,
) {
  return ['linuxhostings', '/linuxhostings/:domainName', toValue(args)] as const
}

export function getLinuxhostingsDomainNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.linuxhostings)[':domainName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinuxhostingsDomainNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linuxhostings[':domainName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.linuxhostings)[':domainName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLinuxhostingsDomainNameQueryKey>
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
          Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinuxhostingsDomainNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinuxhostingsDomainNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linuxhostings[':domainName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['phpsettings']['availableversions']['$get']
    >
  >,
) {
  return [
    'linuxhostings',
    '/linuxhostings/:domainName/phpsettings/availableversions',
    toValue(args),
  ] as const
}

export function getLinuxhostingsDomainNamePhpsettingsAvailableversionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['phpsettings']['availableversions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinuxhostingsDomainNamePhpsettingsAvailableversionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linuxhostings[':domainName'].phpsettings.availableversions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['phpsettings']['availableversions']['$get']
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
                    (typeof client.linuxhostings)[':domainName']['phpsettings']['availableversions']['$get']
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
                    (typeof client.linuxhostings)[':domainName']['phpsettings']['availableversions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLinuxhostingsDomainNamePhpsettingsAvailableversionsQueryKey>
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
              (typeof client.linuxhostings)[':domainName']['phpsettings']['availableversions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinuxhostingsDomainNamePhpsettingsAvailableversionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getLinuxhostingsDomainNamePhpsettingsAvailableversionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.linuxhostings[':domainName'].phpsettings.availableversions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>
  >,
) {
  return ['linuxhostings', '/linuxhostings/:domainName/scheduledtasks', toValue(args)] as const
}

export function getLinuxhostingsDomainNameScheduledtasksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinuxhostingsDomainNameScheduledtasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linuxhostings[':domainName'].scheduledtasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLinuxhostingsDomainNameScheduledtasksQueryKey>
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
            ReturnType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinuxhostingsDomainNameScheduledtasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinuxhostingsDomainNameScheduledtasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linuxhostings[':domainName'].scheduledtasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.linuxhostings)[':domainName']['scheduledtasks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$get']
    >
  >,
) {
  return [
    'linuxhostings',
    '/linuxhostings/:domainName/scheduledtasks/:scheduledTaskId',
    toValue(args),
  ] as const
}

export function getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linuxhostings[':domainName'].scheduledtasks[':scheduledTaskId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$get']
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
                    (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$get']
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
                    (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdQueryKey>
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
              (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.linuxhostings[':domainName'].scheduledtasks[':scheduledTaskId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>
  >,
) {
  return ['linuxhostings', '/linuxhostings/:domainName/ssh/keys', toValue(args)] as const
}

export function getLinuxhostingsDomainNameSshKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinuxhostingsDomainNameSshKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linuxhostings[':domainName'].ssh.keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLinuxhostingsDomainNameSshKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinuxhostingsDomainNameSshKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinuxhostingsDomainNameSshKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linuxhostings[':domainName'].ssh.keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.linuxhostings)[':domainName']['subsites']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linuxhostings)[':domainName']['subsites']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getMailboxesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mailboxes.$get>>,
) {
  return ['mailboxes', '/mailboxes', toValue(args)] as const
}

export function getMailboxesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mailboxes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMailboxesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mailboxes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMailboxes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mailboxes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mailboxes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mailboxes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mailboxes.$get>>>>
          >,
          ReturnType<typeof getMailboxesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mailboxes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMailboxesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMailboxesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mailboxes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mailboxes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.mailboxes.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mailboxes)[':mailboxName']['$get']>>,
) {
  return ['mailboxes', '/mailboxes/:mailboxName', toValue(args)] as const
}

export function getMailboxesMailboxNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mailboxes)[':mailboxName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMailboxesMailboxNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mailboxes[':mailboxName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMailboxesMailboxName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mailboxes)[':mailboxName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMailboxesMailboxNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.mailboxes)[':mailboxName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMailboxesMailboxNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMailboxesMailboxNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mailboxes[':mailboxName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.mailboxes)[':mailboxName']['autoreply']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.mailboxes)[':mailboxName']['autoreply']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mailzones)[':domainName']['$get']>>,
) {
  return ['mailzones', '/mailzones/:domainName', toValue(args)] as const
}

export function getMailzonesDomainNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mailzones)[':domainName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMailzonesDomainNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mailzones[':domainName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMailzonesDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mailzones)[':domainName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mailzones)[':domainName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mailzones)[':domainName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMailzonesDomainNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.mailzones)[':domainName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMailzonesDomainNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMailzonesDomainNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mailzones[':domainName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mailzones)[':domainName']['smtpdomains']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mailzones)[':domainName']['smtpdomains']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.mysqldatabases.$get>>,
) {
  return ['mysqldatabases', '/mysqldatabases', toValue(args)] as const
}

export function getMysqldatabasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mysqldatabases.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMysqldatabasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mysqldatabases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMysqldatabases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mysqldatabases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mysqldatabases.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mysqldatabases.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mysqldatabases.$get>>>>
          >,
          ReturnType<typeof getMysqldatabasesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mysqldatabases.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMysqldatabasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMysqldatabasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mysqldatabases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mysqldatabases.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.mysqldatabases.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mysqldatabases)[':databaseName']['$get']>>,
) {
  return ['mysqldatabases', '/mysqldatabases/:databaseName', toValue(args)] as const
}

export function getMysqldatabasesDatabaseNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mysqldatabases)[':databaseName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMysqldatabasesDatabaseNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mysqldatabases[':databaseName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mysqldatabases)[':databaseName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMysqldatabasesDatabaseNameQueryKey>
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
          Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMysqldatabasesDatabaseNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMysqldatabasesDatabaseNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mysqldatabases[':databaseName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>
  >,
) {
  return ['mysqldatabases', '/mysqldatabases/:databaseName/users', toValue(args)] as const
}

export function getMysqldatabasesDatabaseNameUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMysqldatabasesDatabaseNameUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mysqldatabases[':databaseName'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>
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
                  ReturnType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMysqldatabasesDatabaseNameUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMysqldatabasesDatabaseNameUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMysqldatabasesDatabaseNameUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mysqldatabases[':databaseName'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mysqldatabases)[':databaseName']['users']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mysqldatabases)[':databaseName']['users']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.provisioningjobs)[':jobId']['$get']>>,
) {
  return ['provisioningjobs', '/provisioningjobs/:jobId', toValue(args)] as const
}

export function getProvisioningjobsJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.provisioningjobs)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvisioningjobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.provisioningjobs[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvisioningjobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.provisioningjobs)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.provisioningjobs)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.provisioningjobs)[':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProvisioningjobsJobIdQueryKey>
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
          Awaited<ReturnType<(typeof client.provisioningjobs)[':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvisioningjobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvisioningjobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.provisioningjobs[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServicepacksQueryKey() {
  return ['servicepacks', '/servicepacks'] as const
}

export function getServicepacksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServicepacksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.servicepacks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServicepacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servicepacks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servicepacks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servicepacks.$get>>>>
          >,
          ReturnType<typeof getServicepacksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servicepacks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServicepacksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServicepacksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.servicepacks.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSshQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.ssh.$get>>) {
  return ['ssh', '/ssh', toValue(args)] as const
}

export function getSshQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ssh.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSshQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ssh.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSsh<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ssh.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh.$get>>>>>,
          ReturnType<typeof getSshQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSshQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSshQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ssh.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSslcertificaterequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sslcertificaterequests.$get>>,
) {
  return ['sslcertificaterequests', '/sslcertificaterequests', toValue(args)] as const
}

export function getSslcertificaterequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sslcertificaterequests.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSslcertificaterequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sslcertificaterequests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSslcertificaterequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificaterequests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sslcertificaterequests.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificaterequests.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificaterequests.$get>>>
            >
          >,
          ReturnType<typeof getSslcertificaterequestsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificaterequests.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSslcertificaterequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSslcertificaterequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sslcertificaterequests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sslcertificaterequests)[':id']['$get']>>,
) {
  return ['sslcertificaterequests', '/sslcertificaterequests/:id', toValue(args)] as const
}

export function getSslcertificaterequestsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sslcertificaterequests)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSslcertificaterequestsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sslcertificaterequests[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sslcertificaterequests)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sslcertificaterequests)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSslcertificaterequestsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sslcertificaterequests)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSslcertificaterequestsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSslcertificaterequestsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sslcertificaterequests[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sslcertificates.$get>>,
) {
  return ['sslcertificates', '/sslcertificates', toValue(args)] as const
}

export function getSslcertificatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sslcertificates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSslcertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sslcertificates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSslcertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sslcertificates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificates.$get>>>
            >
          >,
          ReturnType<typeof getSslcertificatesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcertificates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSslcertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSslcertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sslcertificates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSslcertificatesSha1FingerprintQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>
  >,
) {
  return ['sslcertificates', '/sslcertificates/:sha1Fingerprint', toValue(args)] as const
}

export function getSslcertificatesSha1FingerprintQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSslcertificatesSha1FingerprintQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sslcertificates[':sha1Fingerprint'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSslcertificatesSha1FingerprintQueryKey>
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
          Awaited<ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSslcertificatesSha1FingerprintQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSslcertificatesSha1FingerprintQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sslcertificates[':sha1Fingerprint'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSslcertificatesSha1FingerprintDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>
  >,
) {
  return ['sslcertificates', '/sslcertificates/:sha1Fingerprint/download', toValue(args)] as const
}

export function getSslcertificatesSha1FingerprintDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSslcertificatesSha1FingerprintDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sslcertificates[':sha1Fingerprint'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>
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
                    (typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']
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
                    (typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSslcertificatesSha1FingerprintDownloadQueryKey>
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
            ReturnType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSslcertificatesSha1FingerprintDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSslcertificatesSha1FingerprintDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sslcertificates[':sha1Fingerprint'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWindowshostingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.windowshostings.$get>>,
) {
  return ['windowshostings', '/windowshostings', toValue(args)] as const
}

export function getWindowshostingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.windowshostings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWindowshostingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.windowshostings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWindowshostings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.windowshostings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.windowshostings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.windowshostings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.windowshostings.$get>>>
            >
          >,
          ReturnType<typeof getWindowshostingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.windowshostings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWindowshostingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWindowshostingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.windowshostings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWindowshostingsDomainNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.windowshostings)[':domainName']['$get']>>,
) {
  return ['windowshostings', '/windowshostings/:domainName', toValue(args)] as const
}

export function getWindowshostingsDomainNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.windowshostings)[':domainName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWindowshostingsDomainNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.windowshostings[':domainName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.windowshostings)[':domainName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.windowshostings)[':domainName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWindowshostingsDomainNameQueryKey>
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
          Awaited<ReturnType<(typeof client.windowshostings)[':domainName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWindowshostingsDomainNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWindowshostingsDomainNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.windowshostings[':domainName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
