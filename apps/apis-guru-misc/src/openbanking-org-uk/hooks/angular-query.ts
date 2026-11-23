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

export function injectAtms<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atms.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.atms.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atms.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAtmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAtmsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectHeadAtms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atms.$head>>>>>,
        TError,
        InferRequestType<typeof client.atms.$head>,
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
    const mutationDefaults = getHeadAtmsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectBranches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.branches.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branches.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBranchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBranchesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectHeadBranches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadBranchesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectBusinessCurrentAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['business-current-accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['business-current-accounts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBusinessCurrentAccountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHeadBusinessCurrentAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadBusinessCurrentAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectCommercialCreditCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['commercial-credit-cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['commercial-credit-cards']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCommercialCreditCardsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHeadCommercialCreditCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadCommercialCreditCardsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPersonalCurrentAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['personal-current-accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['personal-current-accounts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPersonalCurrentAccountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHeadPersonalCurrentAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadPersonalCurrentAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectUnsecuredSmeLoans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['unsecured-sme-loans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['unsecured-sme-loans']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUnsecuredSmeLoansQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectHeadUnsecuredSmeLoans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadUnsecuredSmeLoansMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
