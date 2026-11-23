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

export function getAtmsKey() {
  return ['atms'] as const
}

export function getBranchesKey() {
  return ['branches'] as const
}

export function getBusinessCurrentAccountsKey() {
  return ['business-current-accounts'] as const
}

export function getCommercialCreditCardsKey() {
  return ['commercial-credit-cards'] as const
}

export function getPersonalCurrentAccountsKey() {
  return ['personal-current-accounts'] as const
}

export function getUnsecuredSmeLoansKey() {
  return ['unsecured-sme-loans'] as const
}

export function getAtmsQueryKey(args: InferRequestType<typeof client.atms.$get>) {
  const { header: _, ...keyArgs } = args
  return ['atms', '/atms', keyArgs] as const
}

export function getAtmsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atms.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.atms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAtmsQueryKey>
  >({
    queryKey: getAtmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.atms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAtms<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atms.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.atms.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atms.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAtmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAtmsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAtms<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atms.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.atms.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atms.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAtmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAtmsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHeadAtmsMutationKey() {
  return ['atms', '/atms', 'HEAD'] as const
}

export function getHeadAtmsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atms.$head>>>>>,
    TError,
    InferRequestType<typeof client.atms.$head>,
    TOnMutateResult
  >({
    mutationKey: getHeadAtmsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.atms.$head>) {
      return parseResponse(client.atms.$head(args, options))
    },
  })
}

export function useHeadAtms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atms.$head>>>>>,
        TError,
        InferRequestType<typeof client.atms.$head>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getHeadAtmsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBranchesQueryKey(args: InferRequestType<typeof client.branches.$get>) {
  const { header: _, ...keyArgs } = args
  return ['branches', '/branches', keyArgs] as const
}

export function getBranchesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branches.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.branches.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBranchesQueryKey>
  >({
    queryKey: getBranchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.branches.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBranches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.branches.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branches.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBranchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBranchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBranches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.branches.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branches.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBranchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBranchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHeadBranchesMutationKey() {
  return ['branches', '/branches', 'HEAD'] as const
}

export function getHeadBranchesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branches.$head>>>>>,
    TError,
    InferRequestType<typeof client.branches.$head>,
    TOnMutateResult
  >({
    mutationKey: getHeadBranchesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.branches.$head>) {
      return parseResponse(client.branches.$head(args, options))
    },
  })
}

export function useHeadBranches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branches.$head>>>>
        >,
        TError,
        InferRequestType<typeof client.branches.$head>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getHeadBranchesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBusinessCurrentAccountsQueryKey(
  args: InferRequestType<(typeof client)['business-current-accounts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['business-current-accounts', '/business-current-accounts', keyArgs] as const
}

export function getBusinessCurrentAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['business-current-accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['business-current-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['business-current-accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessCurrentAccountsQueryKey>
  >({
    queryKey: getBusinessCurrentAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['business-current-accounts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBusinessCurrentAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['business-current-accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['business-current-accounts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['business-current-accounts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessCurrentAccountsQueryKey>
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
      ...getBusinessCurrentAccountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBusinessCurrentAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['business-current-accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['business-current-accounts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['business-current-accounts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessCurrentAccountsQueryKey>
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
      ...getBusinessCurrentAccountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHeadBusinessCurrentAccountsMutationKey() {
  return ['business-current-accounts', '/business-current-accounts', 'HEAD'] as const
}

export function getHeadBusinessCurrentAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['business-current-accounts']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['business-current-accounts']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadBusinessCurrentAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['business-current-accounts']['$head']>,
    ) {
      return parseResponse(client['business-current-accounts'].$head(args, options))
    },
  })
}

export function useHeadBusinessCurrentAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['business-current-accounts']['$head']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['business-current-accounts']['$head']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getHeadBusinessCurrentAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getCommercialCreditCardsQueryKey(
  args: InferRequestType<(typeof client)['commercial-credit-cards']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['commercial-credit-cards', '/commercial-credit-cards', keyArgs] as const
}

export function getCommercialCreditCardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['commercial-credit-cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['commercial-credit-cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['commercial-credit-cards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommercialCreditCardsQueryKey>
  >({
    queryKey: getCommercialCreditCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['commercial-credit-cards'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCommercialCreditCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['commercial-credit-cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['commercial-credit-cards']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['commercial-credit-cards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommercialCreditCardsQueryKey>
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
      ...getCommercialCreditCardsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommercialCreditCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['commercial-credit-cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['commercial-credit-cards']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['commercial-credit-cards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommercialCreditCardsQueryKey>
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
      ...getCommercialCreditCardsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHeadCommercialCreditCardsMutationKey() {
  return ['commercial-credit-cards', '/commercial-credit-cards', 'HEAD'] as const
}

export function getHeadCommercialCreditCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['commercial-credit-cards']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['commercial-credit-cards']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadCommercialCreditCardsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['commercial-credit-cards']['$head']>) {
      return parseResponse(client['commercial-credit-cards'].$head(args, options))
    },
  })
}

export function useHeadCommercialCreditCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['commercial-credit-cards']['$head']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['commercial-credit-cards']['$head']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getHeadCommercialCreditCardsMutationOptions<TError, TOnMutateResult>(
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

export function getPersonalCurrentAccountsQueryKey(
  args: InferRequestType<(typeof client)['personal-current-accounts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['personal-current-accounts', '/personal-current-accounts', keyArgs] as const
}

export function getPersonalCurrentAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['personal-current-accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['personal-current-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['personal-current-accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPersonalCurrentAccountsQueryKey>
  >({
    queryKey: getPersonalCurrentAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['personal-current-accounts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePersonalCurrentAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['personal-current-accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['personal-current-accounts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['personal-current-accounts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPersonalCurrentAccountsQueryKey>
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
      ...getPersonalCurrentAccountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePersonalCurrentAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['personal-current-accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['personal-current-accounts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['personal-current-accounts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPersonalCurrentAccountsQueryKey>
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
      ...getPersonalCurrentAccountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHeadPersonalCurrentAccountsMutationKey() {
  return ['personal-current-accounts', '/personal-current-accounts', 'HEAD'] as const
}

export function getHeadPersonalCurrentAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['personal-current-accounts']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['personal-current-accounts']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadPersonalCurrentAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['personal-current-accounts']['$head']>,
    ) {
      return parseResponse(client['personal-current-accounts'].$head(args, options))
    },
  })
}

export function useHeadPersonalCurrentAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['personal-current-accounts']['$head']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['personal-current-accounts']['$head']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getHeadPersonalCurrentAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getUnsecuredSmeLoansQueryKey(
  args: InferRequestType<(typeof client)['unsecured-sme-loans']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['unsecured-sme-loans', '/unsecured-sme-loans', keyArgs] as const
}

export function getUnsecuredSmeLoansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['unsecured-sme-loans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['unsecured-sme-loans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['unsecured-sme-loans']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnsecuredSmeLoansQueryKey>
  >({
    queryKey: getUnsecuredSmeLoansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['unsecured-sme-loans'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnsecuredSmeLoans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['unsecured-sme-loans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['unsecured-sme-loans']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['unsecured-sme-loans']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnsecuredSmeLoansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUnsecuredSmeLoansQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUnsecuredSmeLoans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['unsecured-sme-loans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['unsecured-sme-loans']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['unsecured-sme-loans']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnsecuredSmeLoansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUnsecuredSmeLoansQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHeadUnsecuredSmeLoansMutationKey() {
  return ['unsecured-sme-loans', '/unsecured-sme-loans', 'HEAD'] as const
}

export function getHeadUnsecuredSmeLoansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['unsecured-sme-loans']['$head']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['unsecured-sme-loans']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadUnsecuredSmeLoansMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['unsecured-sme-loans']['$head']>) {
      return parseResponse(client['unsecured-sme-loans'].$head(args, options))
    },
  })
}

export function useHeadUnsecuredSmeLoans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['unsecured-sme-loans']['$head']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['unsecured-sme-loans']['$head']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getHeadUnsecuredSmeLoansMutationOptions<TError, TOnMutateResult>(
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
