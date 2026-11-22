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

export function getV2Key() {
  return ['v2'] as const
}

export function getV2AccountsQueryKey(args: InferRequestType<typeof client.v2.accounts.$get>) {
  return ['v2', '/v2/accounts', args] as const
}

export function getV2AccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2AccountsQueryKey>
  >({
    queryKey: getV2AccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.accounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2AccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2AccountsMutationKey() {
  return ['v2', '/v2/accounts', 'POST'] as const
}

export function getPostV2AccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.accounts.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.accounts.$post>) {
      return parseResponse(client.v2.accounts.$post(args, options))
    },
  })
}

export function injectPostV2Accounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.accounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.accounts.$post>,
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
    const mutationDefaults = getPostV2AccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2AccountsAccountIdQueryKey(
  args: InferRequestType<(typeof client.v2.accounts)[':accountId']['$get']>,
) {
  return ['v2', '/v2/accounts/:accountId', args] as const
}

export function getV2AccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.accounts)[':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AccountsAccountIdQueryKey>
  >({
    queryKey: getV2AccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.accounts[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.accounts)[':accountId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AccountsAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AccountsAccountIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2AccountsAccountIdBalancesQueryKey(
  args: InferRequestType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>,
) {
  return ['v2', '/v2/accounts/:accountId/balances', args] as const
}

export function getV2AccountsAccountIdBalancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AccountsAccountIdBalancesQueryKey>
  >({
    queryKey: getV2AccountsAccountIdBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.accounts[':accountId'].balances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AccountsAccountIdBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AccountsAccountIdBalancesQueryKey>
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
      ...getV2AccountsAccountIdBalancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2AccountsAccountIdBalancesAssetQueryKey(
  args: InferRequestType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>,
) {
  return ['v2', '/v2/accounts/:accountId/balances/:asset', args] as const
}

export function getV2AccountsAccountIdBalancesAssetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AccountsAccountIdBalancesAssetQueryKey>
  >({
    queryKey: getV2AccountsAccountIdBalancesAssetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.accounts[':accountId'].balances[':asset'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AccountsAccountIdBalancesAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AccountsAccountIdBalancesAssetQueryKey>
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
      ...getV2AccountsAccountIdBalancesAssetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomersQueryKey(args: InferRequestType<typeof client.v2.customers.$get>) {
  return ['v2', '/v2/customers', args] as const
}

export function getV2CustomersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.customers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2CustomersQueryKey>
  >({
    queryKey: getV2CustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Customers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.customers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2CustomersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2CustomersMutationKey() {
  return ['v2', '/v2/customers', 'POST'] as const
}

export function getPostV2CustomersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.customers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.customers.$post>) {
      return parseResponse(client.v2.customers.$post(args, options))
    },
  })
}

export function injectPostV2Customers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.customers.$post>,
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
    const mutationDefaults = getPostV2CustomersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2CustomersRequirementsQueryKey(
  args: InferRequestType<typeof client.v2.customers.requirements.$get>,
) {
  return ['v2', '/v2/customers/requirements', args] as const
}

export function getV2CustomersRequirementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.requirements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.customers.requirements.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.requirements.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersRequirementsQueryKey>
  >({
    queryKey: getV2CustomersRequirementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers.requirements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomersRequirements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.requirements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.customers.requirements.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.requirements.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersRequirementsQueryKey>
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
      ...getV2CustomersRequirementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomersCustomerIdQueryKey(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['$get']>,
) {
  return ['v2', '/v2/customers/:customerId', args] as const
}

export function getV2CustomersCustomerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdQueryKey>
  >({
    queryKey: getV2CustomersCustomerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers[':customerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.customers)[':customerId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdQueryKey>
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
      ...getV2CustomersCustomerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2CustomersCustomerIdMutationKey() {
  return ['v2', '/v2/customers/:customerId', 'PUT'] as const
}

export function getPutV2CustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.customers)[':customerId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2CustomersCustomerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.customers)[':customerId']['$put']>) {
      return parseResponse(client.v2.customers[':customerId'].$put(args, options))
    },
  })
}

export function injectPutV2CustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.customers)[':customerId']['$put']>,
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
    const mutationDefaults = getPutV2CustomersCustomerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV2CustomersCustomerIdMutationKey() {
  return ['v2', '/v2/customers/:customerId', 'DELETE'] as const
}

export function getDeleteV2CustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.customers)[':customerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CustomersCustomerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.customers)[':customerId']['$delete']>,
    ) {
      return parseResponse(client.v2.customers[':customerId'].$delete(args, options))
    },
  })
}

export function injectDeleteV2CustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.customers)[':customerId']['$delete']>,
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
    const mutationDefaults = getDeleteV2CustomersCustomerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2DepositDestinationsQueryKey(
  args: InferRequestType<(typeof client.v2)['deposit-destinations']['$get']>,
) {
  return ['v2', '/v2/deposit-destinations', args] as const
}

export function getV2DepositDestinationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['deposit-destinations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['deposit-destinations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['deposit-destinations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DepositDestinationsQueryKey>
  >({
    queryKey: getV2DepositDestinationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['deposit-destinations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DepositDestinations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['deposit-destinations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['deposit-destinations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['deposit-destinations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DepositDestinationsQueryKey>
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
      ...getV2DepositDestinationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2DepositDestinationsMutationKey() {
  return ['v2', '/v2/deposit-destinations', 'POST'] as const
}

export function getPostV2DepositDestinationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['deposit-destinations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['deposit-destinations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DepositDestinationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['deposit-destinations']['$post']>) {
      return parseResponse(client.v2['deposit-destinations'].$post(args, options))
    },
  })
}

export function injectPostV2DepositDestinations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['deposit-destinations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['deposit-destinations']['$post']>,
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
    const mutationDefaults = getPostV2DepositDestinationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2DepositDestinationsDepositDestinationIdQueryKey(
  args: InferRequestType<
    (typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']
  >,
) {
  return ['v2', '/v2/deposit-destinations/:depositDestinationId', args] as const
}

export function getV2DepositDestinationsDepositDestinationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DepositDestinationsDepositDestinationIdQueryKey>
  >({
    queryKey: getV2DepositDestinationsDepositDestinationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['deposit-destinations'][':depositDestinationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DepositDestinationsDepositDestinationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DepositDestinationsDepositDestinationIdQueryKey>
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
      ...getV2DepositDestinationsDepositDestinationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2TransfersQueryKey(args: InferRequestType<typeof client.v2.transfers.$get>) {
  return ['v2', '/v2/transfers', args] as const
}

export function getV2TransfersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.transfers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.transfers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.transfers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2TransfersQueryKey>
  >({
    queryKey: getV2TransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.transfers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Transfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.transfers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.transfers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2TransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2TransfersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2TransfersMutationKey() {
  return ['v2', '/v2/transfers', 'POST'] as const
}

export function getPostV2TransfersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.transfers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.transfers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TransfersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.transfers.$post>) {
      return parseResponse(client.v2.transfers.$post(args, options))
    },
  })
}

export function injectPostV2Transfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.transfers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.transfers.$post>,
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
    const mutationDefaults = getPostV2TransfersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2TransfersTransferIdQueryKey(
  args: InferRequestType<(typeof client.v2.transfers)[':transferId']['$get']>,
) {
  return ['v2', '/v2/transfers/:transferId', args] as const
}

export function getV2TransfersTransferIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.transfers)[':transferId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.transfers)[':transferId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.transfers)[':transferId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TransfersTransferIdQueryKey>
  >({
    queryKey: getV2TransfersTransferIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.transfers[':transferId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2TransfersTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.transfers)[':transferId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.transfers)[':transferId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.transfers)[':transferId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TransfersTransferIdQueryKey>
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
      ...getV2TransfersTransferIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2TransfersTransferIdExecuteMutationKey() {
  return ['v2', '/v2/transfers/:transferId/execute', 'POST'] as const
}

export function getPostV2TransfersTransferIdExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.transfers)[':transferId']['execute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.transfers)[':transferId']['execute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TransfersTransferIdExecuteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.transfers)[':transferId']['execute']['$post']>,
    ) {
      return parseResponse(client.v2.transfers[':transferId'].execute.$post(args, options))
    },
  })
}

export function injectPostV2TransfersTransferIdExecute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.transfers)[':transferId']['execute']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.transfers)[':transferId']['execute']['$post']>,
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
    const mutationDefaults = getPostV2TransfersTransferIdExecuteMutationOptions<
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

export function getPostV2TransfersTransferIdTravelRuleMutationKey() {
  return ['v2', '/v2/transfers/:transferId/travel-rule', 'POST'] as const
}

export function getPostV2TransfersTransferIdTravelRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.transfers)[':transferId']['travel-rule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.transfers)[':transferId']['travel-rule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TransfersTransferIdTravelRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.transfers)[':transferId']['travel-rule']['$post']>,
    ) {
      return parseResponse(client.v2.transfers[':transferId']['travel-rule'].$post(args, options))
    },
  })
}

export function injectPostV2TransfersTransferIdTravelRule<
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
                ReturnType<(typeof client.v2.transfers)[':transferId']['travel-rule']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.transfers)[':transferId']['travel-rule']['$post']>,
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
    const mutationDefaults = getPostV2TransfersTransferIdTravelRuleMutationOptions<
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

export function getV2PaymentSessionsQueryKey(
  args: InferRequestType<(typeof client.v2)['payment-sessions']['$get']>,
) {
  return ['v2', '/v2/payment-sessions', args] as const
}

export function getV2PaymentSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-sessions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['payment-sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-sessions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsQueryKey>
  >({
    queryKey: getV2PaymentSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['payment-sessions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2PaymentSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-sessions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['payment-sessions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['payment-sessions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2PaymentSessionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2PaymentSessionsMutationKey() {
  return ['v2', '/v2/payment-sessions', 'POST'] as const
}

export function getPostV2PaymentSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-sessions']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['payment-sessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentSessionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['payment-sessions']['$post']>) {
      return parseResponse(client.v2['payment-sessions'].$post(args, options))
    },
  })
}

export function injectPostV2PaymentSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['payment-sessions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['payment-sessions']['$post']>,
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
    const mutationDefaults = getPostV2PaymentSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2PaymentSessionsPaymentSessionIdQueryKey(
  args: InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId', args] as const
}

export function getV2PaymentSessionsPaymentSessionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdQueryKey>
  >({
    queryKey: getV2PaymentSessionsPaymentSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2PaymentSessionsPaymentSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentSessionsPaymentSessionIdQueryKey>
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
      ...getV2PaymentSessionsPaymentSessionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2PaymentSessionsPaymentSessionIdCancelMutationKey() {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/cancel', 'POST'] as const
}

export function getPostV2PaymentSessionsPaymentSessionIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentSessionsPaymentSessionIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['payment-sessions'][':paymentSessionId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].cancel.$post(args, options),
      )
    },
  })
}

export function injectPostV2PaymentSessionsPaymentSessionIdCancel<
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
                  (typeof client.v2)['payment-sessions'][':paymentSessionId']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['payment-sessions'][':paymentSessionId']['cancel']['$post']
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
    const mutationDefaults = getPostV2PaymentSessionsPaymentSessionIdCancelMutationOptions<
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

export function getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
  >,
) {
  return [
    'v2',
    '/v2/payment-sessions/:paymentSessionId/authorizations/wallet/options',
    args,
  ] as const
}

export function getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsQueryKey>
  >({
    queryKey: getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].authorizations.wallet.options.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsQueryKey>
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
      ...getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2PaymentSessionsPaymentSessionIdAuthorizationsWalletMutationKey() {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/authorizations/wallet', 'POST'] as const
}

export function getPostV2PaymentSessionsPaymentSessionIdAuthorizationsWalletMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentSessionsPaymentSessionIdAuthorizationsWalletMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].authorizations.wallet.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2PaymentSessionsPaymentSessionIdAuthorizationsWallet<
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
                  (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['$post']
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
    const mutationDefaults =
      getPostV2PaymentSessionsPaymentSessionIdAuthorizationsWalletMutationOptions<
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

export function getPostV2PaymentSessionsPaymentSessionIdAuthorizationsX402MutationKey() {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/authorizations/x402', 'POST'] as const
}

export function getPostV2PaymentSessionsPaymentSessionIdAuthorizationsX402MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['x402']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['x402']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentSessionsPaymentSessionIdAuthorizationsX402MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['x402']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].authorizations.x402.$post(args, options),
      )
    },
  })
}

export function injectPostV2PaymentSessionsPaymentSessionIdAuthorizationsX402<
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
                  (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['x402']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['x402']['$post']
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
    const mutationDefaults =
      getPostV2PaymentSessionsPaymentSessionIdAuthorizationsX402MutationOptions<
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

export function getPostV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbaseMutationKey() {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/authorizations/coinbase', 'POST'] as const
}

export function getPostV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['coinbase']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['coinbase']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['coinbase']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].authorizations.coinbase.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbase<
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
                  (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['coinbase']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['coinbase']['$post']
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
    const mutationDefaults =
      getPostV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbaseMutationOptions<
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

export function getPostV2PaymentSessionsPaymentSessionIdAuthorizationsMandateMutationKey() {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/authorizations/mandate', 'POST'] as const
}

export function getPostV2PaymentSessionsPaymentSessionIdAuthorizationsMandateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['mandate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['mandate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentSessionsPaymentSessionIdAuthorizationsMandateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['mandate']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].authorizations.mandate.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2PaymentSessionsPaymentSessionIdAuthorizationsMandate<
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
                  (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['mandate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['mandate']['$post']
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
    const mutationDefaults =
      getPostV2PaymentSessionsPaymentSessionIdAuthorizationsMandateMutationOptions<
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

export function getV2PaymentSessionsPaymentSessionIdAuthorizationsQueryKey(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/authorizations', args] as const
}

export function getV2PaymentSessionsPaymentSessionIdAuthorizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdAuthorizationsQueryKey>
  >({
    queryKey: getV2PaymentSessionsPaymentSessionIdAuthorizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].authorizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2PaymentSessionsPaymentSessionIdAuthorizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentSessionsPaymentSessionIdAuthorizationsQueryKey>
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
      ...getV2PaymentSessionsPaymentSessionIdAuthorizationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdQueryKey(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
  >,
) {
  return [
    'v2',
    '/v2/payment-sessions/:paymentSessionId/authorizations/:authorizationId',
    args,
  ] as const
}

export function getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdQueryKey>
  >({
    queryKey: getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].authorizations[':authorizationId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdQueryKey>
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
      ...getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2PaymentSessionsPaymentSessionIdCapturesQueryKey(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/captures', args] as const
}

export function getV2PaymentSessionsPaymentSessionIdCapturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdCapturesQueryKey>
  >({
    queryKey: getV2PaymentSessionsPaymentSessionIdCapturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].captures.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2PaymentSessionsPaymentSessionIdCaptures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentSessionsPaymentSessionIdCapturesQueryKey>
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
      ...getV2PaymentSessionsPaymentSessionIdCapturesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2PaymentSessionsPaymentSessionIdCapturesMutationKey() {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/captures', 'POST'] as const
}

export function getPostV2PaymentSessionsPaymentSessionIdCapturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentSessionsPaymentSessionIdCapturesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].captures.$post(args, options),
      )
    },
  })
}

export function injectPostV2PaymentSessionsPaymentSessionIdCaptures<
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
                  (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$post']
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
    const mutationDefaults = getPostV2PaymentSessionsPaymentSessionIdCapturesMutationOptions<
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

export function getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdQueryKey(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/captures/:captureId', args] as const
}

export function getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdQueryKey>
  >({
    queryKey: getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].captures[':captureId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2PaymentSessionsPaymentSessionIdCapturesCaptureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdQueryKey>
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
      ...getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2PaymentSessionsPaymentSessionIdVoidsQueryKey(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/voids', args] as const
}

export function getV2PaymentSessionsPaymentSessionIdVoidsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdVoidsQueryKey>
  >({
    queryKey: getV2PaymentSessionsPaymentSessionIdVoidsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].voids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2PaymentSessionsPaymentSessionIdVoids<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentSessionsPaymentSessionIdVoidsQueryKey>
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
      ...getV2PaymentSessionsPaymentSessionIdVoidsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2PaymentSessionsPaymentSessionIdVoidsMutationKey() {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/voids', 'POST'] as const
}

export function getPostV2PaymentSessionsPaymentSessionIdVoidsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentSessionsPaymentSessionIdVoidsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].voids.$post(args, options),
      )
    },
  })
}

export function injectPostV2PaymentSessionsPaymentSessionIdVoids<
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
                  (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$post']
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
    const mutationDefaults = getPostV2PaymentSessionsPaymentSessionIdVoidsMutationOptions<
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

export function getV2PaymentSessionsPaymentSessionIdVoidsVoidIdQueryKey(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/voids/:voidId', args] as const
}

export function getV2PaymentSessionsPaymentSessionIdVoidsVoidIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdVoidsVoidIdQueryKey>
  >({
    queryKey: getV2PaymentSessionsPaymentSessionIdVoidsVoidIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].voids[':voidId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2PaymentSessionsPaymentSessionIdVoidsVoidId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentSessionsPaymentSessionIdVoidsVoidIdQueryKey>
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
      ...getV2PaymentSessionsPaymentSessionIdVoidsVoidIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2PaymentSessionsPaymentSessionIdRefundsQueryKey(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/refunds', args] as const
}

export function getV2PaymentSessionsPaymentSessionIdRefundsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdRefundsQueryKey>
  >({
    queryKey: getV2PaymentSessionsPaymentSessionIdRefundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].refunds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2PaymentSessionsPaymentSessionIdRefunds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentSessionsPaymentSessionIdRefundsQueryKey>
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
      ...getV2PaymentSessionsPaymentSessionIdRefundsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2PaymentSessionsPaymentSessionIdRefundsMutationKey() {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/refunds', 'POST'] as const
}

export function getPostV2PaymentSessionsPaymentSessionIdRefundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentSessionsPaymentSessionIdRefundsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].refunds.$post(args, options),
      )
    },
  })
}

export function injectPostV2PaymentSessionsPaymentSessionIdRefunds<
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
                  (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$post']
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
    const mutationDefaults = getPostV2PaymentSessionsPaymentSessionIdRefundsMutationOptions<
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

export function getV2PaymentSessionsPaymentSessionIdRefundsRefundIdQueryKey(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/refunds/:refundId', args] as const
}

export function getV2PaymentSessionsPaymentSessionIdRefundsRefundIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdRefundsRefundIdQueryKey>
  >({
    queryKey: getV2PaymentSessionsPaymentSessionIdRefundsRefundIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].refunds[':refundId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2PaymentSessionsPaymentSessionIdRefundsRefundId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentSessionsPaymentSessionIdRefundsRefundIdQueryKey>
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
      ...getV2PaymentSessionsPaymentSessionIdRefundsRefundIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2MandatesQueryKey(args: InferRequestType<typeof client.v2.mandates.$get>) {
  return ['v2', '/v2/mandates', args] as const
}

export function getV2MandatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.mandates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.mandates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.mandates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2MandatesQueryKey>
  >({
    queryKey: getV2MandatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.mandates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Mandates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.mandates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.mandates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.mandates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2MandatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2MandatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2MandatesMutationKey() {
  return ['v2', '/v2/mandates', 'POST'] as const
}

export function getPostV2MandatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.mandates.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.mandates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2MandatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.mandates.$post>) {
      return parseResponse(client.v2.mandates.$post(args, options))
    },
  })
}

export function injectPostV2Mandates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.mandates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.mandates.$post>,
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
    const mutationDefaults = getPostV2MandatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2MandatesMandateIdQueryKey(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['$get']>,
) {
  return ['v2', '/v2/mandates/:mandateId', args] as const
}

export function getV2MandatesMandateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MandatesMandateIdQueryKey>
  >({
    queryKey: getV2MandatesMandateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.mandates[':mandateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MandatesMandateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.mandates)[':mandateId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MandatesMandateIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2MandatesMandateIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2MandatesMandateIdCancelMutationKey() {
  return ['v2', '/v2/mandates/:mandateId/cancel', 'POST'] as const
}

export function getPostV2MandatesMandateIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.mandates)[':mandateId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2MandatesMandateIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['cancel']['$post']>,
    ) {
      return parseResponse(client.v2.mandates[':mandateId'].cancel.$post(args, options))
    },
  })
}

export function injectPostV2MandatesMandateIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.mandates)[':mandateId']['cancel']['$post']>,
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
    const mutationDefaults = getPostV2MandatesMandateIdCancelMutationOptions<
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

export function getV2MandatesMandateIdRevocationsQueryKey(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>,
) {
  return ['v2', '/v2/mandates/:mandateId/revocations', args] as const
}

export function getV2MandatesMandateIdRevocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MandatesMandateIdRevocationsQueryKey>
  >({
    queryKey: getV2MandatesMandateIdRevocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.mandates[':mandateId'].revocations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MandatesMandateIdRevocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MandatesMandateIdRevocationsQueryKey>
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
      ...getV2MandatesMandateIdRevocationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2MandatesMandateIdRevocationsRevocationIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
  >,
) {
  return ['v2', '/v2/mandates/:mandateId/revocations/:revocationId', args] as const
}

export function getV2MandatesMandateIdRevocationsRevocationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MandatesMandateIdRevocationsRevocationIdQueryKey>
  >({
    queryKey: getV2MandatesMandateIdRevocationsRevocationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.mandates[':mandateId'].revocations[':revocationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MandatesMandateIdRevocationsRevocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MandatesMandateIdRevocationsRevocationIdQueryKey>
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
      ...getV2MandatesMandateIdRevocationsRevocationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2MandatesMandateIdRevocationsWalletMutationKey() {
  return ['v2', '/v2/mandates/:mandateId/revocations/wallet', 'POST'] as const
}

export function getPostV2MandatesMandateIdRevocationsWalletMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2MandatesMandateIdRevocationsWalletMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['$post']
      >,
    ) {
      return parseResponse(client.v2.mandates[':mandateId'].revocations.wallet.$post(args, options))
    },
  })
}

export function injectPostV2MandatesMandateIdRevocationsWallet<
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
                  (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['$post']
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
    const mutationDefaults = getPostV2MandatesMandateIdRevocationsWalletMutationOptions<
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

export function getV2MandatesMandateIdRevocationsWalletOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
  >,
) {
  return ['v2', '/v2/mandates/:mandateId/revocations/wallet/options', args] as const
}

export function getV2MandatesMandateIdRevocationsWalletOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MandatesMandateIdRevocationsWalletOptionsQueryKey>
  >({
    queryKey: getV2MandatesMandateIdRevocationsWalletOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.mandates[':mandateId'].revocations.wallet.options.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MandatesMandateIdRevocationsWalletOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MandatesMandateIdRevocationsWalletOptionsQueryKey>
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
      ...getV2MandatesMandateIdRevocationsWalletOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2MandatesMandateIdApprovalsQueryKey(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>,
) {
  return ['v2', '/v2/mandates/:mandateId/approvals', args] as const
}

export function getV2MandatesMandateIdApprovalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MandatesMandateIdApprovalsQueryKey>
  >({
    queryKey: getV2MandatesMandateIdApprovalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.mandates[':mandateId'].approvals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MandatesMandateIdApprovals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MandatesMandateIdApprovalsQueryKey>
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
      ...getV2MandatesMandateIdApprovalsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2MandatesMandateIdApprovalsApprovalIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']
  >,
) {
  return ['v2', '/v2/mandates/:mandateId/approvals/:approvalId', args] as const
}

export function getV2MandatesMandateIdApprovalsApprovalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MandatesMandateIdApprovalsApprovalIdQueryKey>
  >({
    queryKey: getV2MandatesMandateIdApprovalsApprovalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.mandates[':mandateId'].approvals[':approvalId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MandatesMandateIdApprovalsApprovalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MandatesMandateIdApprovalsApprovalIdQueryKey>
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
      ...getV2MandatesMandateIdApprovalsApprovalIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2MandatesMandateIdApprovalsWalletMutationKey() {
  return ['v2', '/v2/mandates/:mandateId/approvals/wallet', 'POST'] as const
}

export function getPostV2MandatesMandateIdApprovalsWalletMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2MandatesMandateIdApprovalsWalletMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['$post']
      >,
    ) {
      return parseResponse(client.v2.mandates[':mandateId'].approvals.wallet.$post(args, options))
    },
  })
}

export function injectPostV2MandatesMandateIdApprovalsWallet<
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
                  (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['$post']>,
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
    const mutationDefaults = getPostV2MandatesMandateIdApprovalsWalletMutationOptions<
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

export function getV2MandatesMandateIdApprovalsWalletOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
  >,
) {
  return ['v2', '/v2/mandates/:mandateId/approvals/wallet/options', args] as const
}

export function getV2MandatesMandateIdApprovalsWalletOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MandatesMandateIdApprovalsWalletOptionsQueryKey>
  >({
    queryKey: getV2MandatesMandateIdApprovalsWalletOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.mandates[':mandateId'].approvals.wallet.options.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MandatesMandateIdApprovalsWalletOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MandatesMandateIdApprovalsWalletOptionsQueryKey>
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
      ...getV2MandatesMandateIdApprovalsWalletOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2TopUpLinksMutationKey() {
  return ['v2', '/v2/top-up-links', 'POST'] as const
}

export function getPostV2TopUpLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['top-up-links']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['top-up-links']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TopUpLinksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['top-up-links']['$post']>) {
      return parseResponse(client.v2['top-up-links'].$post(args, options))
    },
  })
}

export function injectPostV2TopUpLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['top-up-links']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['top-up-links']['$post']>,
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
    const mutationDefaults = getPostV2TopUpLinksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2DisbursementsQueryKey(
  args: InferRequestType<typeof client.v2.disbursements.$get>,
) {
  return ['v2', '/v2/disbursements', args] as const
}

export function getV2DisbursementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disbursements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.disbursements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disbursements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2DisbursementsQueryKey>
  >({
    queryKey: getV2DisbursementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.disbursements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Disbursements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disbursements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.disbursements.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disbursements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2DisbursementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2DisbursementsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2DisbursementsMutationKey() {
  return ['v2', '/v2/disbursements', 'POST'] as const
}

export function getPostV2DisbursementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disbursements.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.disbursements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DisbursementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.disbursements.$post>) {
      return parseResponse(client.v2.disbursements.$post(args, options))
    },
  })
}

export function injectPostV2Disbursements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.disbursements.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.disbursements.$post>,
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
    const mutationDefaults = getPostV2DisbursementsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2DisbursementsDisbursementIdQueryKey(
  args: InferRequestType<(typeof client.v2.disbursements)[':disbursementId']['$get']>,
) {
  return ['v2', '/v2/disbursements/:disbursementId', args] as const
}

export function getV2DisbursementsDisbursementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.disbursements)[':disbursementId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.disbursements)[':disbursementId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.disbursements)[':disbursementId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DisbursementsDisbursementIdQueryKey>
  >({
    queryKey: getV2DisbursementsDisbursementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.disbursements[':disbursementId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DisbursementsDisbursementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.disbursements)[':disbursementId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.disbursements)[':disbursementId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.disbursements)[':disbursementId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DisbursementsDisbursementIdQueryKey>
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
      ...getV2DisbursementsDisbursementIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2EndUsersQueryKey(
  args: InferRequestType<(typeof client.v2)['end-users']['$get']>,
) {
  return ['v2', '/v2/end-users', args] as const
}

export function getV2EndUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v2)['end-users']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EndUsersQueryKey>
  >({
    queryKey: getV2EndUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['end-users'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2EndUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['end-users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EndUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EndUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2EndUsersMutationKey() {
  return ['v2', '/v2/end-users', 'POST'] as const
}

export function getPostV2EndUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['end-users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EndUsersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['end-users']['$post']>) {
      return parseResponse(client.v2['end-users'].$post(args, options))
    },
  })
}

export function injectPostV2EndUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['end-users']['$post']>,
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
    const mutationDefaults = getPostV2EndUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2EndUsersAuthValidateTokenMutationKey() {
  return ['v2', '/v2/end-users/auth/validate-token', 'POST'] as const
}

export function getPostV2EndUsersAuthValidateTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['end-users']['auth']['validate-token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['end-users']['auth']['validate-token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EndUsersAuthValidateTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['end-users']['auth']['validate-token']['$post']>,
    ) {
      return parseResponse(client.v2['end-users'].auth['validate-token'].$post(args, options))
    },
  })
}

export function injectPostV2EndUsersAuthValidateToken<
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
                ReturnType<(typeof client.v2)['end-users']['auth']['validate-token']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['end-users']['auth']['validate-token']['$post']>,
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
    const mutationDefaults = getPostV2EndUsersAuthValidateTokenMutationOptions<
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

export function getV2EndUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.v2)['end-users'][':userId']['$get']>,
) {
  return ['v2', '/v2/end-users/:userId', args] as const
}

export function getV2EndUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users'][':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['end-users'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['end-users'][':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EndUsersUserIdQueryKey>
  >({
    queryKey: getV2EndUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['end-users'][':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2EndUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users'][':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['end-users'][':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['end-users'][':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EndUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EndUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2EndUsersLookupQueryKey(
  args: InferRequestType<(typeof client.v2)['end-users']['lookup']['$get']>,
) {
  return ['v2', '/v2/end-users/lookup', args] as const
}

export function getV2EndUsersLookupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['lookup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['end-users']['lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['lookup']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EndUsersLookupQueryKey>
  >({
    queryKey: getV2EndUsersLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['end-users'].lookup.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2EndUsersLookup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['lookup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['end-users']['lookup']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['end-users']['lookup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EndUsersLookupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EndUsersLookupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2EndUsersUserIdEvmMutationKey() {
  return ['v2', '/v2/end-users/:userId/evm', 'POST'] as const
}

export function getPostV2EndUsersUserIdEvmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['end-users'][':userId']['evm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['end-users'][':userId']['evm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EndUsersUserIdEvmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['end-users'][':userId']['evm']['$post']>,
    ) {
      return parseResponse(client.v2['end-users'][':userId'].evm.$post(args, options))
    },
  })
}

export function injectPostV2EndUsersUserIdEvm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['end-users'][':userId']['evm']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['end-users'][':userId']['evm']['$post']>,
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
    const mutationDefaults = getPostV2EndUsersUserIdEvmMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2EndUsersUserIdEvmSmartAccountMutationKey() {
  return ['v2', '/v2/end-users/:userId/evm-smart-account', 'POST'] as const
}

export function getPostV2EndUsersUserIdEvmSmartAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['end-users'][':userId']['evm-smart-account']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['end-users'][':userId']['evm-smart-account']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EndUsersUserIdEvmSmartAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['end-users'][':userId']['evm-smart-account']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['end-users'][':userId']['evm-smart-account'].$post(args, options),
      )
    },
  })
}

export function injectPostV2EndUsersUserIdEvmSmartAccount<
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
                ReturnType<(typeof client.v2)['end-users'][':userId']['evm-smart-account']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['end-users'][':userId']['evm-smart-account']['$post']>,
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
    const mutationDefaults = getPostV2EndUsersUserIdEvmSmartAccountMutationOptions<
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

export function getPostV2EndUsersUserIdSolanaMutationKey() {
  return ['v2', '/v2/end-users/:userId/solana', 'POST'] as const
}

export function getPostV2EndUsersUserIdSolanaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['end-users'][':userId']['solana']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['end-users'][':userId']['solana']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EndUsersUserIdSolanaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['end-users'][':userId']['solana']['$post']>,
    ) {
      return parseResponse(client.v2['end-users'][':userId'].solana.$post(args, options))
    },
  })
}

export function injectPostV2EndUsersUserIdSolana<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['end-users'][':userId']['solana']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['end-users'][':userId']['solana']['$post']>,
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
    const mutationDefaults = getPostV2EndUsersUserIdSolanaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2EndUsersImportMutationKey() {
  return ['v2', '/v2/end-users/import', 'POST'] as const
}

export function getPostV2EndUsersImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['end-users']['import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['end-users']['import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EndUsersImportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['end-users']['import']['$post']>) {
      return parseResponse(client.v2['end-users'].import.$post(args, options))
    },
  })
}

export function injectPostV2EndUsersImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['end-users']['import']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['end-users']['import']['$post']>,
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
    const mutationDefaults = getPostV2EndUsersImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2EmbeddedWalletApiEvmBorrowProductsQueryKey(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']
  >,
) {
  return ['v2', '/v2/embedded-wallet-api/evm/borrow-products', args] as const
}

export function getV2EmbeddedWalletApiEvmBorrowProductsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmbeddedWalletApiEvmBorrowProductsQueryKey>
  >({
    queryKey: getV2EmbeddedWalletApiEvmBorrowProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['embedded-wallet-api'].evm['borrow-products'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2EmbeddedWalletApiEvmBorrowProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmbeddedWalletApiEvmBorrowProductsQueryKey>
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
      ...getV2EmbeddedWalletApiEvmBorrowProductsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdQueryKey(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
  >,
) {
  return ['v2', '/v2/embedded-wallet-api/evm/borrow-products/:borrowProductId', args] as const
}

export function getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdQueryKey>
  >({
    queryKey: getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['embedded-wallet-api'].evm['borrow-products'][':borrowProductId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2EmbeddedWalletApiEvmBorrowProductsBorrowProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdQueryKey>
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
      ...getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignTransactionMutationKey() {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/evm/sign/transaction', 'POST'] as const
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['transaction']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['transaction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['transaction']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].evm.sign.transaction.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2EmbeddedWalletApiEndUsersUserIdEvmSignTransaction<
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
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['transaction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['transaction']['$post']
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
    const mutationDefaults =
      getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignTransactionMutationOptions<
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

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSendTransactionMutationKey() {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/evm/send/transaction', 'POST'] as const
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSendTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['send']['transaction']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['send']['transaction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmbeddedWalletApiEndUsersUserIdEvmSendTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['send']['transaction']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].evm.send.transaction.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2EmbeddedWalletApiEndUsersUserIdEvmSendTransaction<
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
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['send']['transaction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['send']['transaction']['$post']
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
    const mutationDefaults =
      getPostV2EmbeddedWalletApiEndUsersUserIdEvmSendTransactionMutationOptions<
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

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAssetMutationKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/evm/:address/send/:asset',
    'POST',
  ] as const
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAssetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm'][':address']['send'][':asset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm'][':address']['send'][':asset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAssetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm'][':address']['send'][':asset']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].evm[':address'].send[
          ':asset'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAsset<
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
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm'][':address']['send'][':asset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm'][':address']['send'][':asset']['$post']
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
    const mutationDefaults =
      getPostV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAssetMutationOptions<
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

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignMessageMutationKey() {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/evm/sign/message', 'POST'] as const
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['message']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['message']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['message']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].evm.sign.message.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2EmbeddedWalletApiEndUsersUserIdEvmSignMessage<
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
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['message']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['message']['$post']
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
    const mutationDefaults = getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignMessageMutationOptions<
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

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedDataMutationKey() {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/evm/sign/typed-data', 'POST'] as const
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['typed-data']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['typed-data']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['typed-data']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].evm.sign['typed-data'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedData<
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
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['typed-data']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['typed-data']['$post']
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
    const mutationDefaults =
      getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedDataMutationOptions<
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

export function getV2EmbeddedWalletApiEndUsersUserIdDelegationQueryKey(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
  >,
) {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/delegation', args] as const
}

export function getV2EmbeddedWalletApiEndUsersUserIdDelegationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmbeddedWalletApiEndUsersUserIdDelegationQueryKey>
  >({
    queryKey: getV2EmbeddedWalletApiEndUsersUserIdDelegationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].delegation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2EmbeddedWalletApiEndUsersUserIdDelegation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmbeddedWalletApiEndUsersUserIdDelegationQueryKey>
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
      ...getV2EmbeddedWalletApiEndUsersUserIdDelegationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV2EmbeddedWalletApiEndUsersUserIdDelegationMutationKey() {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/delegation', 'DELETE'] as const
}

export function getDeleteV2EmbeddedWalletApiEndUsersUserIdDelegationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2EmbeddedWalletApiEndUsersUserIdDelegationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].delegation.$delete(args, options),
      )
    },
  })
}

export function injectDeleteV2EmbeddedWalletApiEndUsersUserIdDelegation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$delete']
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
    const mutationDefaults = getDeleteV2EmbeddedWalletApiEndUsersUserIdDelegationMutationOptions<
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

export function getPostV2EmbeddedWalletApiEndUsersUserIdDelegationRevokeMutationKey() {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/delegation/revoke', 'POST'] as const
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdDelegationRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['revoke']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['revoke']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmbeddedWalletApiEndUsersUserIdDelegationRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['revoke']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].delegation.revoke.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2EmbeddedWalletApiEndUsersUserIdDelegationRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['revoke']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['revoke']['$post']
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
    const mutationDefaults =
      getPostV2EmbeddedWalletApiEndUsersUserIdDelegationRevokeMutationOptions<
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

export function getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationQueryKey(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
  >,
) {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/address/:address/delegation',
    args,
  ] as const
}

export function getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationQueryKey>
  >({
    queryKey: getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].address[
          ':address'
        ].delegation.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationQueryKey>
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
      ...getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationMutationKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/address/:address/delegation',
    'POST',
  ] as const
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].address[
          ':address'
        ].delegation.$post(args, options),
      )
    },
  })
}

export function injectPostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegation<
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
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$post']
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
    const mutationDefaults =
      getPostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationMutationOptions<
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

export function getDeleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationMutationKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/address/:address/delegation',
    'DELETE',
  ] as const
}

export function getDeleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].address[
          ':address'
        ].delegation.$delete(args, options),
      )
    },
  })
}

export function injectDeleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$delete']
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
    const mutationDefaults =
      getDeleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationMutationOptions<
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

export function getPostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevokeMutationKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/address/:address/delegation/revoke',
    'POST',
  ] as const
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['revoke']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['revoke']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['revoke']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].address[
          ':address'
        ].delegation.revoke.$post(args, options),
      )
    },
  })
}

export function injectPostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['revoke']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['revoke']['$post']
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
    const mutationDefaults =
      getPostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevokeMutationOptions<
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

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmEip7702DelegationMutationKey() {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/evm/eip7702/delegation', 'POST'] as const
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmEip7702DelegationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['eip7702']['delegation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['eip7702']['delegation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmbeddedWalletApiEndUsersUserIdEvmEip7702DelegationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['eip7702']['delegation']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].evm.eip7702.delegation.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2EmbeddedWalletApiEndUsersUserIdEvmEip7702Delegation<
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
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['eip7702']['delegation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['eip7702']['delegation']['$post']
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
    const mutationDefaults =
      getPostV2EmbeddedWalletApiEndUsersUserIdEvmEip7702DelegationMutationOptions<
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

export function getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashQueryKey(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
  >,
) {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/user-operations/:userOpHash',
    args,
  ] as const
}

export function getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashQueryKey
    >
  >({
    queryKey:
      getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][':address'][
          'user-operations'
        ][':userOpHash'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashQueryKey
        >
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
      ...getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSendMutationKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/send',
    'POST',
  ] as const
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['send']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['send']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['send']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][
          ':address'
        ].send.$post(args, options),
      )
    },
  })
}

export function injectPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSend<
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
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['send']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['send']['$post']
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
    const mutationDefaults =
      getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSendMutationOptions<
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

export function getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsQueryKey(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
  >,
) {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/borrow-positions',
    args,
  ] as const
}

export function getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsQueryKey
    >
  >({
    queryKey:
      getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][':address'][
          'borrow-positions'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsQueryKey
        >
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
      ...getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsMutationKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/borrow-positions',
    'POST',
  ] as const
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][':address'][
          'borrow-positions'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositions<
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
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$post']
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
    const mutationDefaults =
      getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsMutationOptions<
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

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjustMutationKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/borrow-positions/adjust',
    'POST',
  ] as const
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjustMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['adjust']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['adjust']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjustMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['adjust']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][':address'][
          'borrow-positions'
        ].adjust.$post(args, options),
      )
    },
  })
}

export function injectPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjust<
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
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['adjust']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['adjust']['$post']
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
    const mutationDefaults =
      getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjustMutationOptions<
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

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsCloseMutationKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/borrow-positions/close',
    'POST',
  ] as const
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['close']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['close']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsCloseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['close']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][':address'][
          'borrow-positions'
        ].close.$post(args, options),
      )
    },
  })
}

export function injectPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsClose<
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
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['close']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['close']['$post']
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
    const mutationDefaults =
      getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsCloseMutationOptions<
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

export function getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessageMutationKey() {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/solana/sign/message', 'POST'] as const
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['message']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['message']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['message']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].solana.sign.message.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessage<
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
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['message']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['message']['$post']
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
    const mutationDefaults =
      getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessageMutationOptions<
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

export function getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransactionMutationKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/solana/sign/transaction',
    'POST',
  ] as const
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['transaction']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['transaction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['transaction']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].solana.sign.transaction.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransaction<
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
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['transaction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['transaction']['$post']
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
    const mutationDefaults =
      getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransactionMutationOptions<
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

export function getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402PaymentMutationKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/solana/sign/x402-payment',
    'POST',
  ] as const
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402PaymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['x402-payment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['x402-payment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402PaymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['x402-payment']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].solana.sign['x402-payment'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402Payment<
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
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['x402-payment']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['x402-payment']['$post']
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
    const mutationDefaults =
      getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402PaymentMutationOptions<
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

export function getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransactionMutationKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/solana/send/transaction',
    'POST',
  ] as const
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['send']['transaction']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['send']['transaction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['send']['transaction']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].solana.send.transaction.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransaction<
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
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['send']['transaction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['send']['transaction']['$post']
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
    const mutationDefaults =
      getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransactionMutationOptions<
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

export function getPostV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAssetMutationKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/solana/:address/send/:asset',
    'POST',
  ] as const
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAssetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana'][':address']['send'][':asset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana'][':address']['send'][':asset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAssetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana'][':address']['send'][':asset']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].solana[':address'].send[
          ':asset'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAsset<
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
                  (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana'][':address']['send'][':asset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana'][':address']['send'][':asset']['$post']
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
    const mutationDefaults =
      getPostV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAssetMutationOptions<
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

export function getV2EvmAccountsQueryKey(
  args: InferRequestType<typeof client.v2.evm.accounts.$get>,
) {
  return ['v2', '/v2/evm/accounts', args] as const
}

export function getV2EvmAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.evm.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmAccountsQueryKey>
  >({
    queryKey: getV2EvmAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.evm.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2EvmAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.evm.accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2EvmAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EvmAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2EvmAccountsMutationKey() {
  return ['v2', '/v2/evm/accounts', 'POST'] as const
}

export function getPostV2EvmAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.evm.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.evm.accounts.$post>) {
      return parseResponse(client.v2.evm.accounts.$post(args, options))
    },
  })
}

export function injectPostV2EvmAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.evm.accounts.$post>,
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
    const mutationDefaults = getPostV2EvmAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2EvmAccountsAddressQueryKey(
  args: InferRequestType<(typeof client.v2.evm.accounts)[':address']['$get']>,
) {
  return ['v2', '/v2/evm/accounts/:address', args] as const
}

export function getV2EvmAccountsAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.evm.accounts)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmAccountsAddressQueryKey>
  >({
    queryKey: getV2EvmAccountsAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.evm.accounts[':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2EvmAccountsAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.evm.accounts)[':address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EvmAccountsAddressQueryKey>
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
      ...getV2EvmAccountsAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2EvmAccountsAddressMutationKey() {
  return ['v2', '/v2/evm/accounts/:address', 'PUT'] as const
}

export function getPutV2EvmAccountsAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2EvmAccountsAddressMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.evm.accounts)[':address']['$put']>) {
      return parseResponse(client.v2.evm.accounts[':address'].$put(args, options))
    },
  })
}

export function injectPutV2EvmAccountsAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.evm.accounts)[':address']['$put']>,
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
    const mutationDefaults = getPutV2EvmAccountsAddressMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2EvmAccountsByNameNameQueryKey(
  args: InferRequestType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>,
) {
  return ['v2', '/v2/evm/accounts/by-name/:name', args] as const
}

export function getV2EvmAccountsByNameNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmAccountsByNameNameQueryKey>
  >({
    queryKey: getV2EvmAccountsByNameNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.evm.accounts['by-name'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2EvmAccountsByNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EvmAccountsByNameNameQueryKey>
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
      ...getV2EvmAccountsByNameNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2EvmAccountsAddressSendTransactionMutationKey() {
  return ['v2', '/v2/evm/accounts/:address/send/transaction', 'POST'] as const
}

export function getPostV2EvmAccountsAddressSendTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.evm.accounts)[':address']['send']['transaction']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['send']['transaction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmAccountsAddressSendTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.evm.accounts)[':address']['send']['transaction']['$post']
      >,
    ) {
      return parseResponse(client.v2.evm.accounts[':address'].send.transaction.$post(args, options))
    },
  })
}

export function injectPostV2EvmAccountsAddressSendTransaction<
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
                  (typeof client.v2.evm.accounts)[':address']['send']['transaction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.evm.accounts)[':address']['send']['transaction']['$post']
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
    const mutationDefaults = getPostV2EvmAccountsAddressSendTransactionMutationOptions<
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

export function getPostV2EvmAccountsAddressSignTransactionMutationKey() {
  return ['v2', '/v2/evm/accounts/:address/sign/transaction', 'POST'] as const
}

export function getPostV2EvmAccountsAddressSignTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.evm.accounts)[':address']['sign']['transaction']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['sign']['transaction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmAccountsAddressSignTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.evm.accounts)[':address']['sign']['transaction']['$post']
      >,
    ) {
      return parseResponse(client.v2.evm.accounts[':address'].sign.transaction.$post(args, options))
    },
  })
}

export function injectPostV2EvmAccountsAddressSignTransaction<
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
                  (typeof client.v2.evm.accounts)[':address']['sign']['transaction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.evm.accounts)[':address']['sign']['transaction']['$post']
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
    const mutationDefaults = getPostV2EvmAccountsAddressSignTransactionMutationOptions<
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

export function getPostV2EvmAccountsAddressSignMutationKey() {
  return ['v2', '/v2/evm/accounts/:address/sign', 'POST'] as const
}

export function getPostV2EvmAccountsAddressSignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['sign']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['sign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmAccountsAddressSignMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.evm.accounts)[':address']['sign']['$post']>,
    ) {
      return parseResponse(client.v2.evm.accounts[':address'].sign.$post(args, options))
    },
  })
}

export function injectPostV2EvmAccountsAddressSign<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['sign']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.evm.accounts)[':address']['sign']['$post']>,
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
    const mutationDefaults = getPostV2EvmAccountsAddressSignMutationOptions<
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

export function getPostV2EvmAccountsAddressSignMessageMutationKey() {
  return ['v2', '/v2/evm/accounts/:address/sign/message', 'POST'] as const
}

export function getPostV2EvmAccountsAddressSignMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.evm.accounts)[':address']['sign']['message']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['sign']['message']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmAccountsAddressSignMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.evm.accounts)[':address']['sign']['message']['$post']
      >,
    ) {
      return parseResponse(client.v2.evm.accounts[':address'].sign.message.$post(args, options))
    },
  })
}

export function injectPostV2EvmAccountsAddressSignMessage<
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
                ReturnType<(typeof client.v2.evm.accounts)[':address']['sign']['message']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.evm.accounts)[':address']['sign']['message']['$post']>,
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
    const mutationDefaults = getPostV2EvmAccountsAddressSignMessageMutationOptions<
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

export function getPostV2EvmAccountsAddressSignTypedDataMutationKey() {
  return ['v2', '/v2/evm/accounts/:address/sign/typed-data', 'POST'] as const
}

export function getPostV2EvmAccountsAddressSignTypedDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.evm.accounts)[':address']['sign']['typed-data']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['sign']['typed-data']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmAccountsAddressSignTypedDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.evm.accounts)[':address']['sign']['typed-data']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.evm.accounts[':address'].sign['typed-data'].$post(args, options),
      )
    },
  })
}

export function injectPostV2EvmAccountsAddressSignTypedData<
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
                  (typeof client.v2.evm.accounts)[':address']['sign']['typed-data']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.evm.accounts)[':address']['sign']['typed-data']['$post']
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
    const mutationDefaults = getPostV2EvmAccountsAddressSignTypedDataMutationOptions<
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

export function getPostV2EvmAccountsAddressEip7702DelegationMutationKey() {
  return ['v2', '/v2/evm/accounts/:address/eip7702/delegation', 'POST'] as const
}

export function getPostV2EvmAccountsAddressEip7702DelegationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm.accounts)[':address']['eip7702']['delegation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['eip7702']['delegation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmAccountsAddressEip7702DelegationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.evm.accounts)[':address']['eip7702']['delegation']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.evm.accounts[':address'].eip7702.delegation.$post(args, options),
      )
    },
  })
}

export function injectPostV2EvmAccountsAddressEip7702Delegation<
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
                  (typeof client.v2.evm.accounts)[':address']['eip7702']['delegation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.evm.accounts)[':address']['eip7702']['delegation']['$post']
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
    const mutationDefaults = getPostV2EvmAccountsAddressEip7702DelegationMutationOptions<
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

export function getV2EvmEip7702DelegationOperationsDelegationOperationIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
  >,
) {
  return ['v2', '/v2/evm/eip7702/delegation-operations/:delegationOperationId', args] as const
}

export function getV2EvmEip7702DelegationOperationsDelegationOperationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmEip7702DelegationOperationsDelegationOperationIdQueryKey>
  >({
    queryKey: getV2EvmEip7702DelegationOperationsDelegationOperationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.evm.eip7702['delegation-operations'][':delegationOperationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2EvmEip7702DelegationOperationsDelegationOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EvmEip7702DelegationOperationsDelegationOperationIdQueryKey>
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
      ...getV2EvmEip7702DelegationOperationsDelegationOperationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2EvmSmartAccountsQueryKey(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts']['$get']>,
) {
  return ['v2', '/v2/evm/smart-accounts', args] as const
}

export function getV2EvmSmartAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmSmartAccountsQueryKey>
  >({
    queryKey: getV2EvmSmartAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.evm['smart-accounts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2EvmSmartAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.evm)['smart-accounts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EvmSmartAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EvmSmartAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2EvmSmartAccountsMutationKey() {
  return ['v2', '/v2/evm/smart-accounts', 'POST'] as const
}

export function getPostV2EvmSmartAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.evm)['smart-accounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmSmartAccountsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.evm)['smart-accounts']['$post']>) {
      return parseResponse(client.v2.evm['smart-accounts'].$post(args, options))
    },
  })
}

export function injectPostV2EvmSmartAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.evm)['smart-accounts']['$post']>,
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
    const mutationDefaults = getPostV2EvmSmartAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2EvmSmartAccountsByNameNameQueryKey(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>,
) {
  return ['v2', '/v2/evm/smart-accounts/by-name/:name', args] as const
}

export function getV2EvmSmartAccountsByNameNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmSmartAccountsByNameNameQueryKey>
  >({
    queryKey: getV2EvmSmartAccountsByNameNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.evm['smart-accounts']['by-name'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2EvmSmartAccountsByNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EvmSmartAccountsByNameNameQueryKey>
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
      ...getV2EvmSmartAccountsByNameNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2EvmAccountsImportMutationKey() {
  return ['v2', '/v2/evm/accounts/import', 'POST'] as const
}

export function getPostV2EvmAccountsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.import.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.evm.accounts.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmAccountsImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.evm.accounts.import.$post>) {
      return parseResponse(client.v2.evm.accounts.import.$post(args, options))
    },
  })
}

export function injectPostV2EvmAccountsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.import.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.evm.accounts.import.$post>,
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
    const mutationDefaults = getPostV2EvmAccountsImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2EvmAccountsAddressExportMutationKey() {
  return ['v2', '/v2/evm/accounts/:address/export', 'POST'] as const
}

export function getPostV2EvmAccountsAddressExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmAccountsAddressExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.evm.accounts)[':address']['export']['$post']>,
    ) {
      return parseResponse(client.v2.evm.accounts[':address'].export.$post(args, options))
    },
  })
}

export function injectPostV2EvmAccountsAddressExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['export']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.evm.accounts)[':address']['export']['$post']>,
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
    const mutationDefaults = getPostV2EvmAccountsAddressExportMutationOptions<
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

export function getPostV2EvmAccountsExportByNameNameMutationKey() {
  return ['v2', '/v2/evm/accounts/export/by-name/:name', 'POST'] as const
}

export function getPostV2EvmAccountsExportByNameNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.evm.accounts.export)['by-name'][':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.evm.accounts.export)['by-name'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmAccountsExportByNameNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.evm.accounts.export)['by-name'][':name']['$post']>,
    ) {
      return parseResponse(client.v2.evm.accounts.export['by-name'][':name'].$post(args, options))
    },
  })
}

export function injectPostV2EvmAccountsExportByNameName<
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
                ReturnType<(typeof client.v2.evm.accounts.export)['by-name'][':name']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.evm.accounts.export)['by-name'][':name']['$post']>,
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
    const mutationDefaults = getPostV2EvmAccountsExportByNameNameMutationOptions<
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

export function getV2EvmSmartAccountsAddressQueryKey(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>,
) {
  return ['v2', '/v2/evm/smart-accounts/:address', args] as const
}

export function getV2EvmSmartAccountsAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmSmartAccountsAddressQueryKey>
  >({
    queryKey: getV2EvmSmartAccountsAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.evm['smart-accounts'][':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2EvmSmartAccountsAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EvmSmartAccountsAddressQueryKey>
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
      ...getV2EvmSmartAccountsAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2EvmSmartAccountsAddressMutationKey() {
  return ['v2', '/v2/evm/smart-accounts/:address', 'PUT'] as const
}

export function getPutV2EvmSmartAccountsAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts'][':address']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.evm)['smart-accounts'][':address']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2EvmSmartAccountsAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.evm)['smart-accounts'][':address']['$put']>,
    ) {
      return parseResponse(client.v2.evm['smart-accounts'][':address'].$put(args, options))
    },
  })
}

export function injectPutV2EvmSmartAccountsAddress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts'][':address']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.evm)['smart-accounts'][':address']['$put']>,
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
    const mutationDefaults = getPutV2EvmSmartAccountsAddressMutationOptions<
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

export function getPostV2EvmSmartAccountsAddressUserOperationsMutationKey() {
  return ['v2', '/v2/evm/smart-accounts/:address/user-operations', 'POST'] as const
}

export function getPostV2EvmSmartAccountsAddressUserOperationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm)['smart-accounts'][':address']['user-operations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['user-operations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmSmartAccountsAddressUserOperationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.evm)['smart-accounts'][':address']['user-operations']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.evm['smart-accounts'][':address']['user-operations'].$post(args, options),
      )
    },
  })
}

export function injectPostV2EvmSmartAccountsAddressUserOperations<
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
                  (typeof client.v2.evm)['smart-accounts'][':address']['user-operations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.evm)['smart-accounts'][':address']['user-operations']['$post']
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
    const mutationDefaults = getPostV2EvmSmartAccountsAddressUserOperationsMutationOptions<
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

export function getPostV2EvmSmartAccountsAddressUserOperationsPrepareAndSendMutationKey() {
  return ['v2', '/v2/evm/smart-accounts/:address/user-operations/prepare-and-send', 'POST'] as const
}

export function getPostV2EvmSmartAccountsAddressUserOperationsPrepareAndSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm)['smart-accounts'][':address']['user-operations']['prepare-and-send']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['user-operations']['prepare-and-send']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmSmartAccountsAddressUserOperationsPrepareAndSendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.evm)['smart-accounts'][':address']['user-operations']['prepare-and-send']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.evm['smart-accounts'][':address']['user-operations']['prepare-and-send'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2EvmSmartAccountsAddressUserOperationsPrepareAndSend<
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
                  (typeof client.v2.evm)['smart-accounts'][':address']['user-operations']['prepare-and-send']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.evm)['smart-accounts'][':address']['user-operations']['prepare-and-send']['$post']
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
    const mutationDefaults =
      getPostV2EvmSmartAccountsAddressUserOperationsPrepareAndSendMutationOptions<
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

export function getV2EvmSmartAccountsAddressUserOperationsUserOpHashQueryKey(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
  >,
) {
  return ['v2', '/v2/evm/smart-accounts/:address/user-operations/:userOpHash', args] as const
}

export function getV2EvmSmartAccountsAddressUserOperationsUserOpHashQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmSmartAccountsAddressUserOperationsUserOpHashQueryKey>
  >({
    queryKey: getV2EvmSmartAccountsAddressUserOperationsUserOpHashQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.evm['smart-accounts'][':address']['user-operations'][':userOpHash'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2EvmSmartAccountsAddressUserOperationsUserOpHash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EvmSmartAccountsAddressUserOperationsUserOpHashQueryKey>
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
      ...getV2EvmSmartAccountsAddressUserOperationsUserOpHashQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2EvmSmartAccountsAddressUserOperationsUserOpHashSendMutationKey() {
  return ['v2', '/v2/evm/smart-accounts/:address/user-operations/:userOpHash/send', 'POST'] as const
}

export function getPostV2EvmSmartAccountsAddressUserOperationsUserOpHashSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['send']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['send']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmSmartAccountsAddressUserOperationsUserOpHashSendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['send']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.evm['smart-accounts'][':address']['user-operations'][':userOpHash'].send.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2EvmSmartAccountsAddressUserOperationsUserOpHashSend<
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
                  (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['send']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['send']['$post']
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
    const mutationDefaults =
      getPostV2EvmSmartAccountsAddressUserOperationsUserOpHashSendMutationOptions<
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

export function getPostV2EvmSmartAccountsAddressSpendPermissionsMutationKey() {
  return ['v2', '/v2/evm/smart-accounts/:address/spend-permissions', 'POST'] as const
}

export function getPostV2EvmSmartAccountsAddressSpendPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmSmartAccountsAddressSpendPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.evm['smart-accounts'][':address']['spend-permissions'].$post(args, options),
      )
    },
  })
}

export function injectPostV2EvmSmartAccountsAddressSpendPermissions<
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
                  (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['$post']
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
    const mutationDefaults = getPostV2EvmSmartAccountsAddressSpendPermissionsMutationOptions<
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

export function getV2EvmSmartAccountsAddressSpendPermissionsListQueryKey(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
  >,
) {
  return ['v2', '/v2/evm/smart-accounts/:address/spend-permissions/list', args] as const
}

export function getV2EvmSmartAccountsAddressSpendPermissionsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmSmartAccountsAddressSpendPermissionsListQueryKey>
  >({
    queryKey: getV2EvmSmartAccountsAddressSpendPermissionsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.evm['smart-accounts'][':address']['spend-permissions'].list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2EvmSmartAccountsAddressSpendPermissionsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EvmSmartAccountsAddressSpendPermissionsListQueryKey>
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
      ...getV2EvmSmartAccountsAddressSpendPermissionsListQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2EvmSmartAccountsAddressSpendPermissionsRevokeMutationKey() {
  return ['v2', '/v2/evm/smart-accounts/:address/spend-permissions/revoke', 'POST'] as const
}

export function getPostV2EvmSmartAccountsAddressSpendPermissionsRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['revoke']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmSmartAccountsAddressSpendPermissionsRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['revoke']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.evm['smart-accounts'][':address']['spend-permissions'].revoke.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2EvmSmartAccountsAddressSpendPermissionsRevoke<
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
                  (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['revoke']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['revoke']['$post']
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
    const mutationDefaults = getPostV2EvmSmartAccountsAddressSpendPermissionsRevokeMutationOptions<
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

export function getV2LendPositionsQueryKey(
  args: InferRequestType<typeof client.v2.lend.positions.$get>,
) {
  return ['v2', '/v2/lend/positions', args] as const
}

export function getV2LendPositionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.positions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.lend.positions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.positions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2LendPositionsQueryKey>
  >({
    queryKey: getV2LendPositionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.lend.positions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2LendPositions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.positions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.lend.positions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.positions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LendPositionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2LendPositionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2LendVaultsQueryKey(args: InferRequestType<typeof client.v2.lend.vaults.$get>) {
  return ['v2', '/v2/lend/vaults', args] as const
}

export function getV2LendVaultsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.vaults.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.lend.vaults.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.vaults.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2LendVaultsQueryKey>
  >({
    queryKey: getV2LendVaultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.lend.vaults.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2LendVaults<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.vaults.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.lend.vaults.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.vaults.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2LendVaultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2LendVaultsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2LendVaultsVaultIdQueryKey(
  args: InferRequestType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>,
) {
  return ['v2', '/v2/lend/vaults/:vaultId', args] as const
}

export function getV2LendVaultsVaultIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LendVaultsVaultIdQueryKey>
  >({
    queryKey: getV2LendVaultsVaultIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.lend.vaults[':vaultId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2LendVaultsVaultId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LendVaultsVaultIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2LendVaultsVaultIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2EvmAccountsAddressLendRedeemFeesMutationKey() {
  return ['v2', '/v2/evm/accounts/:address/lend/redeem-fees', 'POST'] as const
}

export function getPostV2EvmAccountsAddressLendRedeemFeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.evm.accounts)[':address']['lend']['redeem-fees']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['lend']['redeem-fees']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmAccountsAddressLendRedeemFeesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.evm.accounts)[':address']['lend']['redeem-fees']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.evm.accounts[':address'].lend['redeem-fees'].$post(args, options),
      )
    },
  })
}

export function injectPostV2EvmAccountsAddressLendRedeemFees<
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
                  (typeof client.v2.evm.accounts)[':address']['lend']['redeem-fees']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.evm.accounts)[':address']['lend']['redeem-fees']['$post']
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
    const mutationDefaults = getPostV2EvmAccountsAddressLendRedeemFeesMutationOptions<
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

export function getPostV2EvmSmartAccountsAddressLendRedeemFeesMutationKey() {
  return ['v2', '/v2/evm/smart-accounts/:address/lend/redeem-fees', 'POST'] as const
}

export function getPostV2EvmSmartAccountsAddressLendRedeemFeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm)['smart-accounts'][':address']['lend']['redeem-fees']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['lend']['redeem-fees']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmSmartAccountsAddressLendRedeemFeesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.evm)['smart-accounts'][':address']['lend']['redeem-fees']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.evm['smart-accounts'][':address'].lend['redeem-fees'].$post(args, options),
      )
    },
  })
}

export function injectPostV2EvmSmartAccountsAddressLendRedeemFees<
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
                  (typeof client.v2.evm)['smart-accounts'][':address']['lend']['redeem-fees']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.evm)['smart-accounts'][':address']['lend']['redeem-fees']['$post']
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
    const mutationDefaults = getPostV2EvmSmartAccountsAddressLendRedeemFeesMutationOptions<
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

export function getPostV2EvmAccountsAddressLendDepositMutationKey() {
  return ['v2', '/v2/evm/accounts/:address/lend/deposit', 'POST'] as const
}

export function getPostV2EvmAccountsAddressLendDepositMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.evm.accounts)[':address']['lend']['deposit']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['lend']['deposit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmAccountsAddressLendDepositMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.evm.accounts)[':address']['lend']['deposit']['$post']
      >,
    ) {
      return parseResponse(client.v2.evm.accounts[':address'].lend.deposit.$post(args, options))
    },
  })
}

export function injectPostV2EvmAccountsAddressLendDeposit<
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
                ReturnType<(typeof client.v2.evm.accounts)[':address']['lend']['deposit']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.evm.accounts)[':address']['lend']['deposit']['$post']>,
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
    const mutationDefaults = getPostV2EvmAccountsAddressLendDepositMutationOptions<
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

export function getPostV2EvmSmartAccountsAddressLendDepositMutationKey() {
  return ['v2', '/v2/evm/smart-accounts/:address/lend/deposit', 'POST'] as const
}

export function getPostV2EvmSmartAccountsAddressLendDepositMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm)['smart-accounts'][':address']['lend']['deposit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['lend']['deposit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmSmartAccountsAddressLendDepositMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.evm)['smart-accounts'][':address']['lend']['deposit']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.evm['smart-accounts'][':address'].lend.deposit.$post(args, options),
      )
    },
  })
}

export function injectPostV2EvmSmartAccountsAddressLendDeposit<
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
                  (typeof client.v2.evm)['smart-accounts'][':address']['lend']['deposit']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.evm)['smart-accounts'][':address']['lend']['deposit']['$post']
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
    const mutationDefaults = getPostV2EvmSmartAccountsAddressLendDepositMutationOptions<
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

export function getPostV2EvmAccountsAddressLendWithdrawMutationKey() {
  return ['v2', '/v2/evm/accounts/:address/lend/withdraw', 'POST'] as const
}

export function getPostV2EvmAccountsAddressLendWithdrawMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.evm.accounts)[':address']['lend']['withdraw']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['lend']['withdraw']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmAccountsAddressLendWithdrawMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.evm.accounts)[':address']['lend']['withdraw']['$post']
      >,
    ) {
      return parseResponse(client.v2.evm.accounts[':address'].lend.withdraw.$post(args, options))
    },
  })
}

export function injectPostV2EvmAccountsAddressLendWithdraw<
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
                ReturnType<(typeof client.v2.evm.accounts)[':address']['lend']['withdraw']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.evm.accounts)[':address']['lend']['withdraw']['$post']>,
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
    const mutationDefaults = getPostV2EvmAccountsAddressLendWithdrawMutationOptions<
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

export function getPostV2EvmSmartAccountsAddressLendWithdrawMutationKey() {
  return ['v2', '/v2/evm/smart-accounts/:address/lend/withdraw', 'POST'] as const
}

export function getPostV2EvmSmartAccountsAddressLendWithdrawMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm)['smart-accounts'][':address']['lend']['withdraw']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['lend']['withdraw']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmSmartAccountsAddressLendWithdrawMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.evm)['smart-accounts'][':address']['lend']['withdraw']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.evm['smart-accounts'][':address'].lend.withdraw.$post(args, options),
      )
    },
  })
}

export function injectPostV2EvmSmartAccountsAddressLendWithdraw<
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
                  (typeof client.v2.evm)['smart-accounts'][':address']['lend']['withdraw']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.evm)['smart-accounts'][':address']['lend']['withdraw']['$post']
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
    const mutationDefaults = getPostV2EvmSmartAccountsAddressLendWithdrawMutationOptions<
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

export function getV2EvmSwapsQuoteQueryKey(
  args: InferRequestType<typeof client.v2.evm.swaps.quote.$get>,
) {
  return ['v2', '/v2/evm/swaps/quote', args] as const
}

export function getV2EvmSwapsQuoteQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.swaps.quote.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.evm.swaps.quote.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.swaps.quote.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmSwapsQuoteQueryKey>
  >({
    queryKey: getV2EvmSwapsQuoteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.evm.swaps.quote.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2EvmSwapsQuote<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.swaps.quote.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.evm.swaps.quote.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.swaps.quote.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EvmSwapsQuoteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EvmSwapsQuoteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2EvmSwapsMutationKey() {
  return ['v2', '/v2/evm/swaps', 'POST'] as const
}

export function getPostV2EvmSwapsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.swaps.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.evm.swaps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmSwapsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.evm.swaps.$post>) {
      return parseResponse(client.v2.evm.swaps.$post(args, options))
    },
  })
}

export function injectPostV2EvmSwaps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.swaps.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.evm.swaps.$post>,
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
    const mutationDefaults = getPostV2EvmSwapsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2EvmTokenBalancesNetworkAddressQueryKey(
  args: InferRequestType<(typeof client.v2.evm)['token-balances'][':network'][':address']['$get']>,
) {
  return ['v2', '/v2/evm/token-balances/:network/:address', args] as const
}

export function getV2EvmTokenBalancesNetworkAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.evm)['token-balances'][':network'][':address']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.evm)['token-balances'][':network'][':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.evm)['token-balances'][':network'][':address']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmTokenBalancesNetworkAddressQueryKey>
  >({
    queryKey: getV2EvmTokenBalancesNetworkAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.evm['token-balances'][':network'][':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2EvmTokenBalancesNetworkAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.evm)['token-balances'][':network'][':address']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.evm)['token-balances'][':network'][':address']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.evm)['token-balances'][':network'][':address']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EvmTokenBalancesNetworkAddressQueryKey>
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
      ...getV2EvmTokenBalancesNetworkAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2EvmFaucetMutationKey() {
  return ['v2', '/v2/evm/faucet', 'POST'] as const
}

export function getPostV2EvmFaucetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.faucet.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.evm.faucet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EvmFaucetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.evm.faucet.$post>) {
      return parseResponse(client.v2.evm.faucet.$post(args, options))
    },
  })
}

export function injectPostV2EvmFaucet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.faucet.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.evm.faucet.$post>,
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
    const mutationDefaults = getPostV2EvmFaucetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2PolicyEnginePoliciesQueryKey(
  args: InferRequestType<(typeof client.v2)['policy-engine']['policies']['$get']>,
) {
  return ['v2', '/v2/policy-engine/policies', args] as const
}

export function getV2PolicyEnginePoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['policy-engine']['policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PolicyEnginePoliciesQueryKey>
  >({
    queryKey: getV2PolicyEnginePoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['policy-engine'].policies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2PolicyEnginePolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['policy-engine']['policies']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PolicyEnginePoliciesQueryKey>
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
      ...getV2PolicyEnginePoliciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2PolicyEnginePoliciesMutationKey() {
  return ['v2', '/v2/policy-engine/policies', 'POST'] as const
}

export function getPostV2PolicyEnginePoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['policy-engine']['policies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PolicyEnginePoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['policy-engine']['policies']['$post']>,
    ) {
      return parseResponse(client.v2['policy-engine'].policies.$post(args, options))
    },
  })
}

export function injectPostV2PolicyEnginePolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['policy-engine']['policies']['$post']>,
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
    const mutationDefaults = getPostV2PolicyEnginePoliciesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2PolicyEngineSimulateMutationKey() {
  return ['v2', '/v2/policy-engine/simulate', 'POST'] as const
}

export function getPostV2PolicyEngineSimulateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['policy-engine']['simulate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['policy-engine']['simulate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PolicyEngineSimulateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['policy-engine']['simulate']['$post']>,
    ) {
      return parseResponse(client.v2['policy-engine'].simulate.$post(args, options))
    },
  })
}

export function injectPostV2PolicyEngineSimulate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['policy-engine']['simulate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['policy-engine']['simulate']['$post']>,
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
    const mutationDefaults = getPostV2PolicyEngineSimulateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2PolicyEnginePoliciesPolicyIdQueryKey(
  args: InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>,
) {
  return ['v2', '/v2/policy-engine/policies/:policyId', args] as const
}

export function getV2PolicyEnginePoliciesPolicyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PolicyEnginePoliciesPolicyIdQueryKey>
  >({
    queryKey: getV2PolicyEnginePoliciesPolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['policy-engine'].policies[':policyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2PolicyEnginePoliciesPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['policy-engine']['policies'][':policyId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PolicyEnginePoliciesPolicyIdQueryKey>
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
      ...getV2PolicyEnginePoliciesPolicyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2PolicyEnginePoliciesPolicyIdMutationKey() {
  return ['v2', '/v2/policy-engine/policies/:policyId', 'PUT'] as const
}

export function getPutV2PolicyEnginePoliciesPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2PolicyEnginePoliciesPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$put']>,
    ) {
      return parseResponse(client.v2['policy-engine'].policies[':policyId'].$put(args, options))
    },
  })
}

export function injectPutV2PolicyEnginePoliciesPolicyId<
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
                ReturnType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$put']>,
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
    const mutationDefaults = getPutV2PolicyEnginePoliciesPolicyIdMutationOptions<
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

export function getDeleteV2PolicyEnginePoliciesPolicyIdMutationKey() {
  return ['v2', '/v2/policy-engine/policies/:policyId', 'DELETE'] as const
}

export function getDeleteV2PolicyEnginePoliciesPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2PolicyEnginePoliciesPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['policy-engine']['policies'][':policyId']['$delete']
      >,
    ) {
      return parseResponse(client.v2['policy-engine'].policies[':policyId'].$delete(args, options))
    },
  })
}

export function injectDeleteV2PolicyEnginePoliciesPolicyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2)['policy-engine']['policies'][':policyId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$delete']>,
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
    const mutationDefaults = getDeleteV2PolicyEnginePoliciesPolicyIdMutationOptions<
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

export function getPostV2PolicyEnginePoliciesPolicyIdPauseMutationKey() {
  return ['v2', '/v2/policy-engine/policies/:policyId/pause', 'POST'] as const
}

export function getPostV2PolicyEnginePoliciesPolicyIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['policy-engine']['policies'][':policyId']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['policy-engine']['policies'][':policyId']['pause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2PolicyEnginePoliciesPolicyIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['policy-engine']['policies'][':policyId']['pause']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['policy-engine'].policies[':policyId'].pause.$post(args, options),
      )
    },
  })
}

export function injectPostV2PolicyEnginePoliciesPolicyIdPause<
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
                  (typeof client.v2)['policy-engine']['policies'][':policyId']['pause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['policy-engine']['policies'][':policyId']['pause']['$post']
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
    const mutationDefaults = getPostV2PolicyEnginePoliciesPolicyIdPauseMutationOptions<
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

export function getPostV2PolicyEnginePoliciesPolicyIdResumeMutationKey() {
  return ['v2', '/v2/policy-engine/policies/:policyId/resume', 'POST'] as const
}

export function getPostV2PolicyEnginePoliciesPolicyIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['policy-engine']['policies'][':policyId']['resume']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['policy-engine']['policies'][':policyId']['resume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2PolicyEnginePoliciesPolicyIdResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['policy-engine']['policies'][':policyId']['resume']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['policy-engine'].policies[':policyId'].resume.$post(args, options),
      )
    },
  })
}

export function injectPostV2PolicyEnginePoliciesPolicyIdResume<
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
                  (typeof client.v2)['policy-engine']['policies'][':policyId']['resume']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['policy-engine']['policies'][':policyId']['resume']['$post']
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
    const mutationDefaults = getPostV2PolicyEnginePoliciesPolicyIdResumeMutationOptions<
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

export function getV2SolanaAccountsQueryKey(
  args: InferRequestType<typeof client.v2.solana.accounts.$get>,
) {
  return ['v2', '/v2/solana/accounts', args] as const
}

export function getV2SolanaAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.solana.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2SolanaAccountsQueryKey>
  >({
    queryKey: getV2SolanaAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.solana.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2SolanaAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.solana.accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SolanaAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2SolanaAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2SolanaAccountsMutationKey() {
  return ['v2', '/v2/solana/accounts', 'POST'] as const
}

export function getPostV2SolanaAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.solana.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SolanaAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.solana.accounts.$post>) {
      return parseResponse(client.v2.solana.accounts.$post(args, options))
    },
  })
}

export function injectPostV2SolanaAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.solana.accounts.$post>,
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
    const mutationDefaults = getPostV2SolanaAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2SolanaAccountsAddressQueryKey(
  args: InferRequestType<(typeof client.v2.solana.accounts)[':address']['$get']>,
) {
  return ['v2', '/v2/solana/accounts/:address', args] as const
}

export function getV2SolanaAccountsAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.solana.accounts)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.solana.accounts)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.solana.accounts)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SolanaAccountsAddressQueryKey>
  >({
    queryKey: getV2SolanaAccountsAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.solana.accounts[':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2SolanaAccountsAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.solana.accounts)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.solana.accounts)[':address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.solana.accounts)[':address']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SolanaAccountsAddressQueryKey>
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
      ...getV2SolanaAccountsAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2SolanaAccountsAddressMutationKey() {
  return ['v2', '/v2/solana/accounts/:address', 'PUT'] as const
}

export function getPutV2SolanaAccountsAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.solana.accounts)[':address']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.solana.accounts)[':address']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2SolanaAccountsAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.solana.accounts)[':address']['$put']>,
    ) {
      return parseResponse(client.v2.solana.accounts[':address'].$put(args, options))
    },
  })
}

export function injectPutV2SolanaAccountsAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.solana.accounts)[':address']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.solana.accounts)[':address']['$put']>,
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
    const mutationDefaults = getPutV2SolanaAccountsAddressMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2SolanaAccountsByNameNameQueryKey(
  args: InferRequestType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>,
) {
  return ['v2', '/v2/solana/accounts/by-name/:name', args] as const
}

export function getV2SolanaAccountsByNameNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SolanaAccountsByNameNameQueryKey>
  >({
    queryKey: getV2SolanaAccountsByNameNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.solana.accounts['by-name'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2SolanaAccountsByNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SolanaAccountsByNameNameQueryKey>
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
      ...getV2SolanaAccountsByNameNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2SolanaAccountsImportMutationKey() {
  return ['v2', '/v2/solana/accounts/import', 'POST'] as const
}

export function getPostV2SolanaAccountsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.import.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.solana.accounts.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SolanaAccountsImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.solana.accounts.import.$post>) {
      return parseResponse(client.v2.solana.accounts.import.$post(args, options))
    },
  })
}

export function injectPostV2SolanaAccountsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.import.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.solana.accounts.import.$post>,
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
    const mutationDefaults = getPostV2SolanaAccountsImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2SolanaAccountsAddressExportMutationKey() {
  return ['v2', '/v2/solana/accounts/:address/export', 'POST'] as const
}

export function getPostV2SolanaAccountsAddressExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.solana.accounts)[':address']['export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.solana.accounts)[':address']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SolanaAccountsAddressExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.solana.accounts)[':address']['export']['$post']>,
    ) {
      return parseResponse(client.v2.solana.accounts[':address'].export.$post(args, options))
    },
  })
}

export function injectPostV2SolanaAccountsAddressExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.solana.accounts)[':address']['export']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.solana.accounts)[':address']['export']['$post']>,
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
    const mutationDefaults = getPostV2SolanaAccountsAddressExportMutationOptions<
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

export function getPostV2SolanaAccountsExportByNameNameMutationKey() {
  return ['v2', '/v2/solana/accounts/export/by-name/:name', 'POST'] as const
}

export function getPostV2SolanaAccountsExportByNameNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.solana.accounts.export)['by-name'][':name']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.solana.accounts.export)['by-name'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SolanaAccountsExportByNameNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.solana.accounts.export)['by-name'][':name']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.solana.accounts.export['by-name'][':name'].$post(args, options),
      )
    },
  })
}

export function injectPostV2SolanaAccountsExportByNameName<
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
                ReturnType<(typeof client.v2.solana.accounts.export)['by-name'][':name']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.solana.accounts.export)['by-name'][':name']['$post']>,
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
    const mutationDefaults = getPostV2SolanaAccountsExportByNameNameMutationOptions<
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

export function getPostV2SolanaAccountsAddressSignTransactionMutationKey() {
  return ['v2', '/v2/solana/accounts/:address/sign/transaction', 'POST'] as const
}

export function getPostV2SolanaAccountsAddressSignTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.solana.accounts)[':address']['sign']['transaction']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.solana.accounts)[':address']['sign']['transaction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2SolanaAccountsAddressSignTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.solana.accounts)[':address']['sign']['transaction']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.solana.accounts[':address'].sign.transaction.$post(args, options),
      )
    },
  })
}

export function injectPostV2SolanaAccountsAddressSignTransaction<
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
                  (typeof client.v2.solana.accounts)[':address']['sign']['transaction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.solana.accounts)[':address']['sign']['transaction']['$post']
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
    const mutationDefaults = getPostV2SolanaAccountsAddressSignTransactionMutationOptions<
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

export function getPostV2SolanaAccountsAddressSignMessageMutationKey() {
  return ['v2', '/v2/solana/accounts/:address/sign/message', 'POST'] as const
}

export function getPostV2SolanaAccountsAddressSignMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.solana.accounts)[':address']['sign']['message']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.solana.accounts)[':address']['sign']['message']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SolanaAccountsAddressSignMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.solana.accounts)[':address']['sign']['message']['$post']
      >,
    ) {
      return parseResponse(client.v2.solana.accounts[':address'].sign.message.$post(args, options))
    },
  })
}

export function injectPostV2SolanaAccountsAddressSignMessage<
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
                  (typeof client.v2.solana.accounts)[':address']['sign']['message']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.solana.accounts)[':address']['sign']['message']['$post']
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
    const mutationDefaults = getPostV2SolanaAccountsAddressSignMessageMutationOptions<
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

export function getPostV2SolanaAccountsSendTransactionMutationKey() {
  return ['v2', '/v2/solana/accounts/send/transaction', 'POST'] as const
}

export function getPostV2SolanaAccountsSendTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.solana.accounts.send.transaction.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.solana.accounts.send.transaction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SolanaAccountsSendTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.solana.accounts.send.transaction.$post>,
    ) {
      return parseResponse(client.v2.solana.accounts.send.transaction.$post(args, options))
    },
  })
}

export function injectPostV2SolanaAccountsSendTransaction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.solana.accounts.send.transaction.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.solana.accounts.send.transaction.$post>,
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
    const mutationDefaults = getPostV2SolanaAccountsSendTransactionMutationOptions<
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

export function getPostV2SolanaFaucetMutationKey() {
  return ['v2', '/v2/solana/faucet', 'POST'] as const
}

export function getPostV2SolanaFaucetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.faucet.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.solana.faucet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SolanaFaucetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.solana.faucet.$post>) {
      return parseResponse(client.v2.solana.faucet.$post(args, options))
    },
  })
}

export function injectPostV2SolanaFaucet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.faucet.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.solana.faucet.$post>,
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
    const mutationDefaults = getPostV2SolanaFaucetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2SolanaTokenBalancesNetworkAddressQueryKey(
  args: InferRequestType<
    (typeof client.v2.solana)['token-balances'][':network'][':address']['$get']
  >,
) {
  return ['v2', '/v2/solana/token-balances/:network/:address', args] as const
}

export function getV2SolanaTokenBalancesNetworkAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.solana)['token-balances'][':network'][':address']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.solana)['token-balances'][':network'][':address']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.solana)['token-balances'][':network'][':address']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SolanaTokenBalancesNetworkAddressQueryKey>
  >({
    queryKey: getV2SolanaTokenBalancesNetworkAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.solana['token-balances'][':network'][':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2SolanaTokenBalancesNetworkAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.solana)['token-balances'][':network'][':address']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.solana)['token-balances'][':network'][':address']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.solana)['token-balances'][':network'][':address']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SolanaTokenBalancesNetworkAddressQueryKey>
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
      ...getV2SolanaTokenBalancesNetworkAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2DataQueryRunMutationKey() {
  return ['v2', '/v2/data/query/run', 'POST'] as const
}

export function getPostV2DataQueryRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.run.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.data.query.run.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DataQueryRunMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.data.query.run.$post>) {
      return parseResponse(client.v2.data.query.run.$post(args, options))
    },
  })
}

export function injectPostV2DataQueryRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.run.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.data.query.run.$post>,
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
    const mutationDefaults = getPostV2DataQueryRunMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2DataQueryGrammarQueryKey() {
  return ['v2', '/v2/data/query/grammar'] as const
}

export function getV2DataQueryGrammarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.grammar.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.grammar.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DataQueryGrammarQueryKey>
  >({
    queryKey: getV2DataQueryGrammarQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.data.query.grammar.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DataQueryGrammar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.grammar.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.grammar.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DataQueryGrammarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2DataQueryGrammarQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV2DataQuerySchemaQueryKey(
  args: InferRequestType<typeof client.v2.data.query.schema.$get>,
) {
  return ['v2', '/v2/data/query/schema', args] as const
}

export function getV2DataQuerySchemaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.schema.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.data.query.schema.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.schema.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2DataQuerySchemaQueryKey>
  >({
    queryKey: getV2DataQuerySchemaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.data.query.schema.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2DataQuerySchema<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.schema.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.data.query.schema.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.schema.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DataQuerySchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2DataQuerySchemaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2DataEvmTokenOwnershipNetworkAddressQueryKey(
  args: InferRequestType<
    (typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']
  >,
) {
  return ['v2', '/v2/data/evm/token-ownership/:network/:address', args] as const
}

export function getV2DataEvmTokenOwnershipNetworkAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DataEvmTokenOwnershipNetworkAddressQueryKey>
  >({
    queryKey: getV2DataEvmTokenOwnershipNetworkAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.data.evm['token-ownership'][':network'][':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DataEvmTokenOwnershipNetworkAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DataEvmTokenOwnershipNetworkAddressQueryKey>
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
      ...getV2DataEvmTokenOwnershipNetworkAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2DataEvmTokenBalancesNetworkAddressQueryKey(
  args: InferRequestType<
    (typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']
  >,
) {
  return ['v2', '/v2/data/evm/token-balances/:network/:address', args] as const
}

export function getV2DataEvmTokenBalancesNetworkAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DataEvmTokenBalancesNetworkAddressQueryKey>
  >({
    queryKey: getV2DataEvmTokenBalancesNetworkAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.data.evm['token-balances'][':network'][':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DataEvmTokenBalancesNetworkAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DataEvmTokenBalancesNetworkAddressQueryKey>
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
      ...getV2DataEvmTokenBalancesNetworkAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2DataWebhooksSubscriptionsQueryKey(
  args: InferRequestType<typeof client.v2.data.webhooks.subscriptions.$get>,
) {
  return ['v2', '/v2/data/webhooks/subscriptions', args] as const
}

export function getV2DataWebhooksSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.webhooks.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.data.webhooks.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.webhooks.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DataWebhooksSubscriptionsQueryKey>
  >({
    queryKey: getV2DataWebhooksSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.data.webhooks.subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DataWebhooksSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.webhooks.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.data.webhooks.subscriptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.data.webhooks.subscriptions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DataWebhooksSubscriptionsQueryKey>
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
      ...getV2DataWebhooksSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2DataWebhooksSubscriptionsMutationKey() {
  return ['v2', '/v2/data/webhooks/subscriptions', 'POST'] as const
}

export function getPostV2DataWebhooksSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.data.webhooks.subscriptions.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.data.webhooks.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DataWebhooksSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.data.webhooks.subscriptions.$post>) {
      return parseResponse(client.v2.data.webhooks.subscriptions.$post(args, options))
    },
  })
}

export function injectPostV2DataWebhooksSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.data.webhooks.subscriptions.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.data.webhooks.subscriptions.$post>,
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
    const mutationDefaults = getPostV2DataWebhooksSubscriptionsMutationOptions<
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

export function getV2DataWebhooksSubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']>,
) {
  return ['v2', '/v2/data/webhooks/subscriptions/:subscriptionId', args] as const
}

export function getV2DataWebhooksSubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DataWebhooksSubscriptionsSubscriptionIdQueryKey>
  >({
    queryKey: getV2DataWebhooksSubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.data.webhooks.subscriptions[':subscriptionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DataWebhooksSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DataWebhooksSubscriptionsSubscriptionIdQueryKey>
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
      ...getV2DataWebhooksSubscriptionsSubscriptionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2DataWebhooksSubscriptionsSubscriptionIdMutationKey() {
  return ['v2', '/v2/data/webhooks/subscriptions/:subscriptionId', 'PUT'] as const
}

export function getPutV2DataWebhooksSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2DataWebhooksSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.data.webhooks.subscriptions[':subscriptionId'].$put(args, options),
      )
    },
  })
}

export function injectPutV2DataWebhooksSubscriptionsSubscriptionId<
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
                  (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$put']>,
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
    const mutationDefaults = getPutV2DataWebhooksSubscriptionsSubscriptionIdMutationOptions<
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

export function getDeleteV2DataWebhooksSubscriptionsSubscriptionIdMutationKey() {
  return ['v2', '/v2/data/webhooks/subscriptions/:subscriptionId', 'DELETE'] as const
}

export function getDeleteV2DataWebhooksSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DataWebhooksSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.data.webhooks.subscriptions[':subscriptionId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV2DataWebhooksSubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$delete']
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
    const mutationDefaults = getDeleteV2DataWebhooksSubscriptionsSubscriptionIdMutationOptions<
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

export function getV2DataWebhooksSubscriptionsSubscriptionIdEventsQueryKey(
  args: InferRequestType<
    (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
  >,
) {
  return ['v2', '/v2/data/webhooks/subscriptions/:subscriptionId/events', args] as const
}

export function getV2DataWebhooksSubscriptionsSubscriptionIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DataWebhooksSubscriptionsSubscriptionIdEventsQueryKey>
  >({
    queryKey: getV2DataWebhooksSubscriptionsSubscriptionIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.data.webhooks.subscriptions[':subscriptionId'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DataWebhooksSubscriptionsSubscriptionIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DataWebhooksSubscriptionsSubscriptionIdEventsQueryKey>
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
      ...getV2DataWebhooksSubscriptionsSubscriptionIdEventsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2X402VerifyMutationKey() {
  return ['v2', '/v2/x402/verify', 'POST'] as const
}

export function getPostV2X402VerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.verify.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.x402.verify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2X402VerifyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.x402.verify.$post>) {
      return parseResponse(client.v2.x402.verify.$post(args, options))
    },
  })
}

export function injectPostV2X402Verify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.verify.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.x402.verify.$post>,
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
    const mutationDefaults = getPostV2X402VerifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2X402SettleMutationKey() {
  return ['v2', '/v2/x402/settle', 'POST'] as const
}

export function getPostV2X402SettleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.settle.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.x402.settle.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2X402SettleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.x402.settle.$post>) {
      return parseResponse(client.v2.x402.settle.$post(args, options))
    },
  })
}

export function injectPostV2X402Settle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.settle.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.x402.settle.$post>,
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
    const mutationDefaults = getPostV2X402SettleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2X402SupportedQueryKey() {
  return ['v2', '/v2/x402/supported'] as const
}

export function getV2X402SupportedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.supported.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.supported.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2X402SupportedQueryKey>
  >({
    queryKey: getV2X402SupportedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.x402.supported.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2X402Supported<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.supported.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.supported.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2X402SupportedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2X402SupportedQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV2X402DiscoveryResourcesQueryKey(
  args: InferRequestType<typeof client.v2.x402.discovery.resources.$get>,
) {
  return ['v2', '/v2/x402/discovery/resources', args] as const
}

export function getV2X402DiscoveryResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.resources.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.x402.discovery.resources.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.resources.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2X402DiscoveryResourcesQueryKey>
  >({
    queryKey: getV2X402DiscoveryResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.x402.discovery.resources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2X402DiscoveryResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.resources.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.x402.discovery.resources.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.x402.discovery.resources.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2X402DiscoveryResourcesQueryKey>
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
      ...getV2X402DiscoveryResourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2X402DiscoveryMerchantQueryKey(
  args: InferRequestType<typeof client.v2.x402.discovery.merchant.$get>,
) {
  return ['v2', '/v2/x402/discovery/merchant', args] as const
}

export function getV2X402DiscoveryMerchantQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.merchant.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.x402.discovery.merchant.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.merchant.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2X402DiscoveryMerchantQueryKey>
  >({
    queryKey: getV2X402DiscoveryMerchantQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.x402.discovery.merchant.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2X402DiscoveryMerchant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.merchant.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.x402.discovery.merchant.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.merchant.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2X402DiscoveryMerchantQueryKey>
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
      ...getV2X402DiscoveryMerchantQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2X402DiscoverySearchQueryKey(
  args: InferRequestType<typeof client.v2.x402.discovery.search.$get>,
) {
  return ['v2', '/v2/x402/discovery/search', args] as const
}

export function getV2X402DiscoverySearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.x402.discovery.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2X402DiscoverySearchQueryKey>
  >({
    queryKey: getV2X402DiscoverySearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.x402.discovery.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2X402DiscoverySearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.x402.discovery.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2X402DiscoverySearchQueryKey>
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
      ...getV2X402DiscoverySearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2X402DiscoveryMcpMutationKey() {
  return ['v2', '/v2/x402/discovery/mcp', 'POST'] as const
}

export function getPostV2X402DiscoveryMcpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.mcp.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.x402.discovery.mcp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2X402DiscoveryMcpMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.x402.discovery.mcp.$post>) {
      return parseResponse(client.v2.x402.discovery.mcp.$post(args, options))
    },
  })
}

export function injectPostV2X402DiscoveryMcp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.mcp.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.x402.discovery.mcp.$post>,
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
    const mutationDefaults = getPostV2X402DiscoveryMcpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2X402DiscoveryBundlesQueryKey() {
  return ['v2', '/v2/x402/discovery/bundles'] as const
}

export function getV2X402DiscoveryBundlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.bundles.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.bundles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2X402DiscoveryBundlesQueryKey>
  >({
    queryKey: getV2X402DiscoveryBundlesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.x402.discovery.bundles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2X402DiscoveryBundles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.bundles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.bundles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2X402DiscoveryBundlesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2X402DiscoveryBundlesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV2X402DiscoveryBundlesBundleSlugQueryKey(
  args: InferRequestType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>,
) {
  return ['v2', '/v2/x402/discovery/bundles/:bundleSlug', args] as const
}

export function getV2X402DiscoveryBundlesBundleSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2X402DiscoveryBundlesBundleSlugQueryKey>
  >({
    queryKey: getV2X402DiscoveryBundlesBundleSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.x402.discovery.bundles[':bundleSlug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2X402DiscoveryBundlesBundleSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2X402DiscoveryBundlesBundleSlugQueryKey>
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
      ...getV2X402DiscoveryBundlesBundleSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2X402ValidateMutationKey() {
  return ['v2', '/v2/x402/validate', 'POST'] as const
}

export function getPostV2X402ValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.validate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.x402.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2X402ValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.x402.validate.$post>) {
      return parseResponse(client.v2.x402.validate.$post(args, options))
    },
  })
}

export function injectPostV2X402Validate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.validate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.x402.validate.$post>,
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
    const mutationDefaults = getPostV2X402ValidateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2OnrampVerificationsMutationKey() {
  return ['v2', '/v2/onramp/verifications', 'POST'] as const
}

export function getPostV2OnrampVerificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.verifications.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.onramp.verifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OnrampVerificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.onramp.verifications.$post>) {
      return parseResponse(client.v2.onramp.verifications.$post(args, options))
    },
  })
}

export function injectPostV2OnrampVerifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.verifications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.onramp.verifications.$post>,
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
    const mutationDefaults = getPostV2OnrampVerificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2OnrampVerificationsVerificationIdSubmitMutationKey() {
  return ['v2', '/v2/onramp/verifications/:verificationId/submit', 'POST'] as const
}

export function getPostV2OnrampVerificationsVerificationIdSubmitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.onramp.verifications)[':verificationId']['submit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.onramp.verifications)[':verificationId']['submit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OnrampVerificationsVerificationIdSubmitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.onramp.verifications)[':verificationId']['submit']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.onramp.verifications[':verificationId'].submit.$post(args, options),
      )
    },
  })
}

export function injectPostV2OnrampVerificationsVerificationIdSubmit<
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
                  (typeof client.v2.onramp.verifications)[':verificationId']['submit']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.onramp.verifications)[':verificationId']['submit']['$post']
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
    const mutationDefaults = getPostV2OnrampVerificationsVerificationIdSubmitMutationOptions<
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

export function getPostV2OnrampOrdersMutationKey() {
  return ['v2', '/v2/onramp/orders', 'POST'] as const
}

export function getPostV2OnrampOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.orders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.onramp.orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OnrampOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.onramp.orders.$post>) {
      return parseResponse(client.v2.onramp.orders.$post(args, options))
    },
  })
}

export function injectPostV2OnrampOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.orders.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.onramp.orders.$post>,
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
    const mutationDefaults = getPostV2OnrampOrdersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2OnrampOrdersOrderIdQueryKey(
  args: InferRequestType<(typeof client.v2.onramp.orders)[':orderId']['$get']>,
) {
  return ['v2', '/v2/onramp/orders/:orderId', args] as const
}

export function getV2OnrampOrdersOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.onramp.orders)[':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.onramp.orders)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.onramp.orders)[':orderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2OnrampOrdersOrderIdQueryKey>
  >({
    queryKey: getV2OnrampOrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.onramp.orders[':orderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2OnrampOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.onramp.orders)[':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.onramp.orders)[':orderId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.onramp.orders)[':orderId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OnrampOrdersOrderIdQueryKey>
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
      ...getV2OnrampOrdersOrderIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2OnrampSessionsMutationKey() {
  return ['v2', '/v2/onramp/sessions', 'POST'] as const
}

export function getPostV2OnrampSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.sessions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.onramp.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OnrampSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.onramp.sessions.$post>) {
      return parseResponse(client.v2.onramp.sessions.$post(args, options))
    },
  })
}

export function injectPostV2OnrampSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.sessions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.onramp.sessions.$post>,
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
    const mutationDefaults = getPostV2OnrampSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2OnrampMobileSessionsChallengesMutationKey() {
  return ['v2', '/v2/onramp/mobile/sessions/challenges', 'POST'] as const
}

export function getPostV2OnrampMobileSessionsChallengesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.onramp.mobile.sessions.challenges.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.onramp.mobile.sessions.challenges.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OnrampMobileSessionsChallengesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.onramp.mobile.sessions.challenges.$post>,
    ) {
      return parseResponse(client.v2.onramp.mobile.sessions.challenges.$post(args, options))
    },
  })
}

export function injectPostV2OnrampMobileSessionsChallenges<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.onramp.mobile.sessions.challenges.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.onramp.mobile.sessions.challenges.$post>,
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
    const mutationDefaults = getPostV2OnrampMobileSessionsChallengesMutationOptions<
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

export function getPostV2OnrampMobileSessionsMutationKey() {
  return ['v2', '/v2/onramp/mobile/sessions', 'POST'] as const
}

export function getPostV2OnrampMobileSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.mobile.sessions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.onramp.mobile.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OnrampMobileSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.onramp.mobile.sessions.$post>) {
      return parseResponse(client.v2.onramp.mobile.sessions.$post(args, options))
    },
  })
}

export function injectPostV2OnrampMobileSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.mobile.sessions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.onramp.mobile.sessions.$post>,
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
    const mutationDefaults = getPostV2OnrampMobileSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2OnrampMobileAttestationChallengesMutationKey() {
  return ['v2', '/v2/onramp/mobile/attestation/challenges', 'POST'] as const
}

export function getPostV2OnrampMobileAttestationChallengesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.onramp.mobile.attestation.challenges.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV2OnrampMobileAttestationChallengesMutationKey(),
    async mutationFn() {
      return parseResponse(client.v2.onramp.mobile.attestation.challenges.$post(undefined, options))
    },
  })
}

export function injectPostV2OnrampMobileAttestationChallenges<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.onramp.mobile.attestation.challenges.$post>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostV2OnrampMobileAttestationChallengesMutationOptions<
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

export function getPostV2OnrampMobileAttestationRegistrationsMutationKey() {
  return ['v2', '/v2/onramp/mobile/attestation/registrations', 'POST'] as const
}

export function getPostV2OnrampMobileAttestationRegistrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.onramp.mobile.attestation.registrations.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.onramp.mobile.attestation.registrations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OnrampMobileAttestationRegistrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.onramp.mobile.attestation.registrations.$post>,
    ) {
      return parseResponse(client.v2.onramp.mobile.attestation.registrations.$post(args, options))
    },
  })
}

export function injectPostV2OnrampMobileAttestationRegistrations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.onramp.mobile.attestation.registrations.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.onramp.mobile.attestation.registrations.$post>,
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
    const mutationDefaults = getPostV2OnrampMobileAttestationRegistrationsMutationOptions<
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

export function getPostV2OnrampLimitsMutationKey() {
  return ['v2', '/v2/onramp/limits', 'POST'] as const
}

export function getPostV2OnrampLimitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.limits.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.onramp.limits.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OnrampLimitsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.onramp.limits.$post>) {
      return parseResponse(client.v2.onramp.limits.$post(args, options))
    },
  })
}

export function injectPostV2OnrampLimits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.limits.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.onramp.limits.$post>,
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
    const mutationDefaults = getPostV2OnrampLimitsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2OnrampLimitsUpgradeMutationKey() {
  return ['v2', '/v2/onramp/limits/upgrade', 'POST'] as const
}

export function getPostV2OnrampLimitsUpgradeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.limits.upgrade.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.onramp.limits.upgrade.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OnrampLimitsUpgradeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.onramp.limits.upgrade.$post>) {
      return parseResponse(client.v2.onramp.limits.upgrade.$post(args, options))
    },
  })
}

export function injectPostV2OnrampLimitsUpgrade<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.limits.upgrade.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.onramp.limits.upgrade.$post>,
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
    const mutationDefaults = getPostV2OnrampLimitsUpgradeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2PaymentMethodsQueryKey(
  args: InferRequestType<(typeof client.v2)['payment-methods']['$get']>,
) {
  return ['v2', '/v2/payment-methods', args] as const
}

export function getV2PaymentMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-methods']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['payment-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-methods']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentMethodsQueryKey>
  >({
    queryKey: getV2PaymentMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['payment-methods'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2PaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-methods']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['payment-methods']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-methods']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2PaymentMethodsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2PaymentMethodsPaymentMethodIdQueryKey(
  args: InferRequestType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>,
) {
  return ['v2', '/v2/payment-methods/:paymentMethodId', args] as const
}

export function getV2PaymentMethodsPaymentMethodIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentMethodsPaymentMethodIdQueryKey>
  >({
    queryKey: getV2PaymentMethodsPaymentMethodIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['payment-methods'][':paymentMethodId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2PaymentMethodsPaymentMethodId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentMethodsPaymentMethodIdQueryKey>
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
      ...getV2PaymentMethodsPaymentMethodIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
