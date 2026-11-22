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

export function getV2Key() {
  return ['v2'] as const
}

export function getV2AccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.accounts.$get>>,
) {
  return ['v2', '/v2/accounts', toValue(args)] as const
}

export function getV2AccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.accounts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.accounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.accounts.$get>>>>
          >,
          ReturnType<typeof getV2AccountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2AccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2Accounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.accounts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.accounts.$post>,
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
  const mutationDefaults = getPostV2AccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2AccountsAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.accounts)[':accountId']['$get']>>,
) {
  return ['v2', '/v2/accounts/:accountId', toValue(args)] as const
}

export function getV2AccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.accounts)[':accountId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.accounts[':accountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.accounts)[':accountId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2AccountsAccountIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AccountsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AccountsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.accounts[':accountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AccountsAccountIdBalancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>
  >,
) {
  return ['v2', '/v2/accounts/:accountId/balances', toValue(args)] as const
}

export function getV2AccountsAccountIdBalancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AccountsAccountIdBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.accounts[':accountId'].balances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AccountsAccountIdBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2AccountsAccountIdBalancesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AccountsAccountIdBalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AccountsAccountIdBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.accounts[':accountId'].balances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AccountsAccountIdBalancesAssetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>
  >,
) {
  return ['v2', '/v2/accounts/:accountId/balances/:asset', toValue(args)] as const
}

export function getV2AccountsAccountIdBalancesAssetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AccountsAccountIdBalancesAssetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.accounts[':accountId'].balances[':asset'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AccountsAccountIdBalancesAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>
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
                    (typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']
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
                    (typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AccountsAccountIdBalancesAssetQueryKey>
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
            ReturnType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AccountsAccountIdBalancesAssetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AccountsAccountIdBalancesAssetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.accounts[':accountId'].balances[':asset'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customers.$get>>,
) {
  return ['v2', '/v2/customers', toValue(args)] as const
}

export function getV2CustomersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Customers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
          >,
          ReturnType<typeof getV2CustomersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2CustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2Customers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.customers.$post>,
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
  const mutationDefaults = getPostV2CustomersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2CustomersRequirementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customers.requirements.$get>>,
) {
  return ['v2', '/v2/customers/requirements', toValue(args)] as const
}

export function getV2CustomersRequirementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customers.requirements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersRequirementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers.requirements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomersRequirements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.requirements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customers.requirements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.customers.requirements.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.customers.requirements.$get>>
              >
            >
          >,
          ReturnType<typeof getV2CustomersRequirementsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.requirements.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersRequirementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersRequirementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers.requirements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomersCustomerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.customers)[':customerId']['$get']>>,
) {
  return ['v2', '/v2/customers/:customerId', toValue(args)] as const
}

export function getV2CustomersCustomerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.customers)[':customerId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersCustomerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers[':customerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.customers)[':customerId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2CustomersCustomerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersCustomerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers[':customerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2CustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2CustomersCustomerIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteV2CustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2CustomersCustomerIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2DepositDestinationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['deposit-destinations']['$get']>>,
) {
  return ['v2', '/v2/deposit-destinations', toValue(args)] as const
}

export function getV2DepositDestinationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['deposit-destinations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DepositDestinationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['deposit-destinations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DepositDestinations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['deposit-destinations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['deposit-destinations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['deposit-destinations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['deposit-destinations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2DepositDestinationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['deposit-destinations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DepositDestinationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DepositDestinationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['deposit-destinations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2DepositDestinations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2DepositDestinationsMutationOptions<TError, TOnMutateResult>(
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

export function getV2DepositDestinationsDepositDestinationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']>
  >,
) {
  return ['v2', '/v2/deposit-destinations/:depositDestinationId', toValue(args)] as const
}

export function getV2DepositDestinationsDepositDestinationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DepositDestinationsDepositDestinationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['deposit-destinations'][':depositDestinationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DepositDestinationsDepositDestinationId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']>
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
                    (typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']
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
                    (typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DepositDestinationsDepositDestinationIdQueryKey>
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
            ReturnType<(typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DepositDestinationsDepositDestinationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DepositDestinationsDepositDestinationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['deposit-destinations'][':depositDestinationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2TransfersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.transfers.$get>>,
) {
  return ['v2', '/v2/transfers', toValue(args)] as const
}

export function getV2TransfersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.transfers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.transfers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Transfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.transfers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.transfers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.transfers.$get>>>>
          >,
          ReturnType<typeof getV2TransfersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.transfers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2TransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.transfers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2Transfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.transfers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.transfers.$post>,
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
  const mutationDefaults = getPostV2TransfersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2TransfersTransferIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.transfers)[':transferId']['$get']>>,
) {
  return ['v2', '/v2/transfers/:transferId', toValue(args)] as const
}

export function getV2TransfersTransferIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.transfers)[':transferId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TransfersTransferIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.transfers[':transferId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2TransfersTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.transfers)[':transferId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.transfers)[':transferId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.transfers)[':transferId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.transfers)[':transferId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2TransfersTransferIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.transfers)[':transferId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TransfersTransferIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TransfersTransferIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.transfers[':transferId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2TransfersTransferIdExecute<
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
                Awaited<ReturnType<(typeof client.v2.transfers)[':transferId']['execute']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.transfers)[':transferId']['execute']['$post']>,
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
  const mutationDefaults = getPostV2TransfersTransferIdExecuteMutationOptions<
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

export function usePostV2TransfersTransferIdTravelRule<
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
                  ReturnType<(typeof client.v2.transfers)[':transferId']['travel-rule']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.transfers)[':transferId']['travel-rule']['$post']>,
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
  const mutationDefaults = getPostV2TransfersTransferIdTravelRuleMutationOptions<
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

export function getV2PaymentSessionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['payment-sessions']['$get']>>,
) {
  return ['v2', '/v2/payment-sessions', toValue(args)] as const
}

export function getV2PaymentSessionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['payment-sessions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PaymentSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['payment-sessions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PaymentSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-sessions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['payment-sessions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['payment-sessions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['payment-sessions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2PaymentSessionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-sessions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PaymentSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['payment-sessions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2PaymentSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PaymentSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getV2PaymentSessionsPaymentSessionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId', toValue(args)] as const
}

export function getV2PaymentSessionsPaymentSessionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PaymentSessionsPaymentSessionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PaymentSessionsPaymentSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2PaymentSessionsPaymentSessionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PaymentSessionsPaymentSessionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2PaymentSessionsPaymentSessionIdCancel<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PaymentSessionsPaymentSessionIdCancelMutationOptions<
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

export function getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/payment-sessions/:paymentSessionId/authorizations/wallet/options',
    toValue(args),
  ] as const
}

export function getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].authorizations.wallet.options.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
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
                    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
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
                    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsQueryKey>
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
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].authorizations.wallet.options.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2PaymentSessionsPaymentSessionIdAuthorizationsWallet<
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
    getPostV2PaymentSessionsPaymentSessionIdAuthorizationsWalletMutationOptions<
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

export function usePostV2PaymentSessionsPaymentSessionIdAuthorizationsX402<
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
    getPostV2PaymentSessionsPaymentSessionIdAuthorizationsX402MutationOptions<
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

export function usePostV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbase<
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
    getPostV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbaseMutationOptions<
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

export function usePostV2PaymentSessionsPaymentSessionIdAuthorizationsMandate<
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
    getPostV2PaymentSessionsPaymentSessionIdAuthorizationsMandateMutationOptions<
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

export function getV2PaymentSessionsPaymentSessionIdAuthorizationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
    >
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/authorizations', toValue(args)] as const
}

export function getV2PaymentSessionsPaymentSessionIdAuthorizationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PaymentSessionsPaymentSessionIdAuthorizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].authorizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PaymentSessionsPaymentSessionIdAuthorizations<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
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
                    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
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
                    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2PaymentSessionsPaymentSessionIdAuthorizationsQueryKey>
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
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdAuthorizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PaymentSessionsPaymentSessionIdAuthorizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].authorizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/payment-sessions/:paymentSessionId/authorizations/:authorizationId',
    toValue(args),
  ] as const
}

export function getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].authorizations[':authorizationId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
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
                    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
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
                    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdQueryKey
          >
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
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].authorizations[
            ':authorizationId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV2PaymentSessionsPaymentSessionIdCapturesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
    >
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/captures', toValue(args)] as const
}

export function getV2PaymentSessionsPaymentSessionIdCapturesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PaymentSessionsPaymentSessionIdCapturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].captures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PaymentSessionsPaymentSessionIdCaptures<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
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
                    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
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
                    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2PaymentSessionsPaymentSessionIdCapturesQueryKey>
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
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdCapturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PaymentSessionsPaymentSessionIdCapturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].captures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2PaymentSessionsPaymentSessionIdCaptures<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PaymentSessionsPaymentSessionIdCapturesMutationOptions<
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

export function getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/payment-sessions/:paymentSessionId/captures/:captureId',
    toValue(args),
  ] as const
}

export function getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].captures[':captureId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2PaymentSessionsPaymentSessionIdCapturesCaptureId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
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
                    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
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
                    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdQueryKey>
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
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].captures[':captureId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2PaymentSessionsPaymentSessionIdVoidsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']>
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/voids', toValue(args)] as const
}

export function getV2PaymentSessionsPaymentSessionIdVoidsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PaymentSessionsPaymentSessionIdVoidsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].voids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PaymentSessionsPaymentSessionIdVoids<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']>
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
                    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']
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
                    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2PaymentSessionsPaymentSessionIdVoidsQueryKey>
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
            ReturnType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdVoidsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PaymentSessionsPaymentSessionIdVoidsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].voids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2PaymentSessionsPaymentSessionIdVoids<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PaymentSessionsPaymentSessionIdVoidsMutationOptions<
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

export function getV2PaymentSessionsPaymentSessionIdVoidsVoidIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
    >
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/voids/:voidId', toValue(args)] as const
}

export function getV2PaymentSessionsPaymentSessionIdVoidsVoidIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PaymentSessionsPaymentSessionIdVoidsVoidIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].voids[':voidId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PaymentSessionsPaymentSessionIdVoidsVoidId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
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
                    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
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
                    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2PaymentSessionsPaymentSessionIdVoidsVoidIdQueryKey>
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
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdVoidsVoidIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PaymentSessionsPaymentSessionIdVoidsVoidIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].voids[':voidId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2PaymentSessionsPaymentSessionIdRefundsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']>
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/refunds', toValue(args)] as const
}

export function getV2PaymentSessionsPaymentSessionIdRefundsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PaymentSessionsPaymentSessionIdRefundsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].refunds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PaymentSessionsPaymentSessionIdRefunds<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']>
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
                    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']
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
                    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2PaymentSessionsPaymentSessionIdRefundsQueryKey>
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
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdRefundsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PaymentSessionsPaymentSessionIdRefundsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].refunds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2PaymentSessionsPaymentSessionIdRefunds<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PaymentSessionsPaymentSessionIdRefundsMutationOptions<
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

export function getV2PaymentSessionsPaymentSessionIdRefundsRefundIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
    >
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/refunds/:refundId', toValue(args)] as const
}

export function getV2PaymentSessionsPaymentSessionIdRefundsRefundIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PaymentSessionsPaymentSessionIdRefundsRefundIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['payment-sessions'][':paymentSessionId'].refunds[':refundId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2PaymentSessionsPaymentSessionIdRefundsRefundId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
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
                    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
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
                    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2PaymentSessionsPaymentSessionIdRefundsRefundIdQueryKey>
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
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentSessionsPaymentSessionIdRefundsRefundIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PaymentSessionsPaymentSessionIdRefundsRefundIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].refunds[':refundId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2MandatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.mandates.$get>>,
) {
  return ['v2', '/v2/mandates', toValue(args)] as const
}

export function getV2MandatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.mandates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MandatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.mandates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Mandates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.mandates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.mandates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.mandates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.mandates.$get>>>>
          >,
          ReturnType<typeof getV2MandatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.mandates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2MandatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MandatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.mandates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2Mandates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.mandates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.mandates.$post>,
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
  const mutationDefaults = getPostV2MandatesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2MandatesMandateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.mandates)[':mandateId']['$get']>>,
) {
  return ['v2', '/v2/mandates/:mandateId', toValue(args)] as const
}

export function getV2MandatesMandateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.mandates)[':mandateId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MandatesMandateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.mandates[':mandateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MandatesMandateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.mandates)[':mandateId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2MandatesMandateIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MandatesMandateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MandatesMandateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.mandates[':mandateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2MandatesMandateIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2MandatesMandateIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getV2MandatesMandateIdRevocationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>
  >,
) {
  return ['v2', '/v2/mandates/:mandateId/revocations', toValue(args)] as const
}

export function getV2MandatesMandateIdRevocationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MandatesMandateIdRevocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.mandates[':mandateId'].revocations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MandatesMandateIdRevocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>
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
                  ReturnType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2MandatesMandateIdRevocationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MandatesMandateIdRevocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MandatesMandateIdRevocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.mandates[':mandateId'].revocations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2MandatesMandateIdRevocationsRevocationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
    >
  >,
) {
  return ['v2', '/v2/mandates/:mandateId/revocations/:revocationId', toValue(args)] as const
}

export function getV2MandatesMandateIdRevocationsRevocationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MandatesMandateIdRevocationsRevocationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.mandates[':mandateId'].revocations[':revocationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MandatesMandateIdRevocationsRevocationId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
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
                    (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
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
                    (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2MandatesMandateIdRevocationsRevocationIdQueryKey>
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
              (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MandatesMandateIdRevocationsRevocationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MandatesMandateIdRevocationsRevocationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.mandates[':mandateId'].revocations[':revocationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2MandatesMandateIdRevocationsWallet<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2MandatesMandateIdRevocationsWalletMutationOptions<
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

export function getV2MandatesMandateIdRevocationsWalletOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
    >
  >,
) {
  return ['v2', '/v2/mandates/:mandateId/revocations/wallet/options', toValue(args)] as const
}

export function getV2MandatesMandateIdRevocationsWalletOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MandatesMandateIdRevocationsWalletOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.mandates[':mandateId'].revocations.wallet.options.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MandatesMandateIdRevocationsWalletOptions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
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
                    (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
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
                    (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2MandatesMandateIdRevocationsWalletOptionsQueryKey>
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
              (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MandatesMandateIdRevocationsWalletOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MandatesMandateIdRevocationsWalletOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.mandates[':mandateId'].revocations.wallet.options.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2MandatesMandateIdApprovalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>
  >,
) {
  return ['v2', '/v2/mandates/:mandateId/approvals', toValue(args)] as const
}

export function getV2MandatesMandateIdApprovalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MandatesMandateIdApprovalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.mandates[':mandateId'].approvals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MandatesMandateIdApprovals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2MandatesMandateIdApprovalsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MandatesMandateIdApprovalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MandatesMandateIdApprovalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.mandates[':mandateId'].approvals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2MandatesMandateIdApprovalsApprovalIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']>
  >,
) {
  return ['v2', '/v2/mandates/:mandateId/approvals/:approvalId', toValue(args)] as const
}

export function getV2MandatesMandateIdApprovalsApprovalIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MandatesMandateIdApprovalsApprovalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.mandates[':mandateId'].approvals[':approvalId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MandatesMandateIdApprovalsApprovalId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']>
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
                    (typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']
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
                    (typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2MandatesMandateIdApprovalsApprovalIdQueryKey>
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
              (typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MandatesMandateIdApprovalsApprovalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MandatesMandateIdApprovalsApprovalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.mandates[':mandateId'].approvals[':approvalId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2MandatesMandateIdApprovalsWallet<
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
                    (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['$post']
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
  const mutationDefaults = getPostV2MandatesMandateIdApprovalsWalletMutationOptions<
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

export function getV2MandatesMandateIdApprovalsWalletOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
    >
  >,
) {
  return ['v2', '/v2/mandates/:mandateId/approvals/wallet/options', toValue(args)] as const
}

export function getV2MandatesMandateIdApprovalsWalletOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MandatesMandateIdApprovalsWalletOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.mandates[':mandateId'].approvals.wallet.options.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MandatesMandateIdApprovalsWalletOptions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
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
                    (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
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
                    (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2MandatesMandateIdApprovalsWalletOptionsQueryKey>
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
              (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MandatesMandateIdApprovalsWalletOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MandatesMandateIdApprovalsWalletOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.mandates[':mandateId'].approvals.wallet.options.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2TopUpLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['top-up-links']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['top-up-links']['$post']>,
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
  const mutationDefaults = getPostV2TopUpLinksMutationOptions<TError, TOnMutateResult>(
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

export function getV2DisbursementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.disbursements.$get>>,
) {
  return ['v2', '/v2/disbursements', toValue(args)] as const
}

export function getV2DisbursementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.disbursements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DisbursementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.disbursements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2Disbursements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disbursements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.disbursements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.disbursements.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.disbursements.$get>>>
            >
          >,
          ReturnType<typeof getV2DisbursementsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disbursements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2DisbursementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DisbursementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.disbursements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2Disbursements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.disbursements.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.disbursements.$post>,
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
  const mutationDefaults = getPostV2DisbursementsMutationOptions<TError, TOnMutateResult>(
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

export function getV2DisbursementsDisbursementIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.disbursements)[':disbursementId']['$get']>
  >,
) {
  return ['v2', '/v2/disbursements/:disbursementId', toValue(args)] as const
}

export function getV2DisbursementsDisbursementIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.disbursements)[':disbursementId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DisbursementsDisbursementIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.disbursements[':disbursementId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DisbursementsDisbursementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.disbursements)[':disbursementId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.disbursements)[':disbursementId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.disbursements)[':disbursementId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.disbursements)[':disbursementId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2DisbursementsDisbursementIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.disbursements)[':disbursementId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DisbursementsDisbursementIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DisbursementsDisbursementIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.disbursements[':disbursementId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EndUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['end-users']['$get']>>,
) {
  return ['v2', '/v2/end-users', toValue(args)] as const
}

export function getV2EndUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['end-users']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EndUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['end-users'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EndUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['end-users']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['$get']>>>
            >
          >,
          ReturnType<typeof getV2EndUsersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EndUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EndUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['end-users'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2EndUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['end-users']['$post']>,
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
  const mutationDefaults = getPostV2EndUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2EndUsersAuthValidateToken<
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
                  ReturnType<(typeof client.v2)['end-users']['auth']['validate-token']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['end-users']['auth']['validate-token']['$post']>,
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
  const mutationDefaults = getPostV2EndUsersAuthValidateTokenMutationOptions<
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

export function getV2EndUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['end-users'][':userId']['$get']>>,
) {
  return ['v2', '/v2/end-users/:userId', toValue(args)] as const
}

export function getV2EndUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['end-users'][':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EndUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['end-users'][':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EndUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users'][':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['end-users'][':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['end-users'][':userId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['end-users'][':userId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2EndUsersUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['end-users'][':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EndUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EndUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['end-users'][':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EndUsersLookupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['end-users']['lookup']['$get']>>,
) {
  return ['v2', '/v2/end-users/lookup', toValue(args)] as const
}

export function getV2EndUsersLookupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['end-users']['lookup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EndUsersLookupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['end-users'].lookup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EndUsersLookup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['lookup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['end-users']['lookup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['end-users']['lookup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['end-users']['lookup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2EndUsersLookupQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['lookup']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EndUsersLookupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EndUsersLookupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['end-users'].lookup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2EndUsersUserIdEvm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EndUsersUserIdEvmMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2EndUsersUserIdEvmSmartAccount<
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
                    (typeof client.v2)['end-users'][':userId']['evm-smart-account']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2)['end-users'][':userId']['evm-smart-account']['$post']
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
  const mutationDefaults = getPostV2EndUsersUserIdEvmSmartAccountMutationOptions<
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

export function usePostV2EndUsersUserIdSolana<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EndUsersUserIdSolanaMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2EndUsersImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EndUsersImportMutationOptions<TError, TOnMutateResult>(
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

export function getV2EmbeddedWalletApiEvmBorrowProductsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']>
  >,
) {
  return ['v2', '/v2/embedded-wallet-api/evm/borrow-products', toValue(args)] as const
}

export function getV2EmbeddedWalletApiEvmBorrowProductsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EmbeddedWalletApiEvmBorrowProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['embedded-wallet-api'].evm['borrow-products'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EmbeddedWalletApiEvmBorrowProducts<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']>
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
                    (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']
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
                    (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2EmbeddedWalletApiEvmBorrowProductsQueryKey>
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
            ReturnType<(typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmbeddedWalletApiEvmBorrowProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EmbeddedWalletApiEvmBorrowProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['embedded-wallet-api'].evm['borrow-products'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/embedded-wallet-api/evm/borrow-products/:borrowProductId',
    toValue(args),
  ] as const
}

export function getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['embedded-wallet-api'].evm['borrow-products'][':borrowProductId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2EmbeddedWalletApiEvmBorrowProductsBorrowProductId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
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
                    (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
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
                    (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdQueryKey>
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
              (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['embedded-wallet-api'].evm['borrow-products'][':borrowProductId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmSignTransaction<
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
    getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignTransactionMutationOptions<
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

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmSendTransaction<
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
    getPostV2EmbeddedWalletApiEndUsersUserIdEvmSendTransactionMutationOptions<
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

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAsset<
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
    getPostV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAssetMutationOptions<
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

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmSignMessage<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignMessageMutationOptions<
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

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedData<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedDataMutationOptions<
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

export function getV2EmbeddedWalletApiEndUsersUserIdDelegationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
    >
  >,
) {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/delegation', toValue(args)] as const
}

export function getV2EmbeddedWalletApiEndUsersUserIdDelegationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EmbeddedWalletApiEndUsersUserIdDelegationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].delegation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EmbeddedWalletApiEndUsersUserIdDelegation<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
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
                    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
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
                    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2EmbeddedWalletApiEndUsersUserIdDelegationQueryKey>
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
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmbeddedWalletApiEndUsersUserIdDelegationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EmbeddedWalletApiEndUsersUserIdDelegationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].delegation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV2EmbeddedWalletApiEndUsersUserIdDelegation<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2EmbeddedWalletApiEndUsersUserIdDelegationMutationOptions<
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

export function usePostV2EmbeddedWalletApiEndUsersUserIdDelegationRevoke<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmbeddedWalletApiEndUsersUserIdDelegationRevokeMutationOptions<
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

export function getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/address/:address/delegation',
    toValue(args),
  ] as const
}

export function getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].address[
          ':address'
        ].delegation.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegation<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
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
                    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
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
                    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationQueryKey>
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
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].address[
            ':address'
          ].delegation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegation<
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
    getPostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationMutationOptions<
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

export function useDeleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegation<
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
    getDeleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationMutationOptions<
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

export function usePostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevoke<
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
    getPostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevokeMutationOptions<
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

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmEip7702Delegation<
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
    getPostV2EmbeddedWalletApiEndUsersUserIdEvmEip7702DelegationMutationOptions<
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

export function getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/user-operations/:userOpHash',
    toValue(args),
  ] as const
}

export function getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][':address'][
          'user-operations'
        ][':userOpHash'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHash<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
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
                    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
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
                    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][
            ':address'
          ]['user-operations'][':userOpHash'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSend<
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
    getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSendMutationOptions<
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

export function getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/borrow-positions',
    toValue(args),
  ] as const
}

export function getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][':address'][
          'borrow-positions'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
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
                    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
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
                    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][
            ':address'
          ]['borrow-positions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositions<
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
    getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsMutationOptions<
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

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjust<
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
    getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjustMutationOptions<
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

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsClose<
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
    getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsCloseMutationOptions<
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

export function usePostV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessage<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessageMutationOptions<
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

export function usePostV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransaction<
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
    getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransactionMutationOptions<
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

export function usePostV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402Payment<
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
    getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402PaymentMutationOptions<
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

export function usePostV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransaction<
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
    getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransactionMutationOptions<
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

export function usePostV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAsset<
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
    getPostV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAssetMutationOptions<
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

export function getV2EvmAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.evm.accounts.$get>>,
) {
  return ['v2', '/v2/evm/accounts', toValue(args)] as const
}

export function getV2EvmAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.evm.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EvmAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.evm.accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EvmAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.evm.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.$get>>>
            >
          >,
          ReturnType<typeof getV2EvmAccountsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EvmAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.evm.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2EvmAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.evm.accounts.$post>,
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
  const mutationDefaults = getPostV2EvmAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getV2EvmAccountsAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.evm.accounts)[':address']['$get']>>,
) {
  return ['v2', '/v2/evm/accounts/:address', toValue(args)] as const
}

export function getV2EvmAccountsAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.evm.accounts)[':address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EvmAccountsAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.evm.accounts[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EvmAccountsAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.evm.accounts)[':address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2EvmAccountsAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmAccountsAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EvmAccountsAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.evm.accounts[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2EvmAccountsAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EvmAccountsAddressMutationOptions<TError, TOnMutateResult>(
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

export function getV2EvmAccountsByNameNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>
  >,
) {
  return ['v2', '/v2/evm/accounts/by-name/:name', toValue(args)] as const
}

export function getV2EvmAccountsByNameNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EvmAccountsByNameNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.evm.accounts['by-name'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EvmAccountsByNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2EvmAccountsByNameNameQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmAccountsByNameNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EvmAccountsByNameNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.evm.accounts['by-name'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2EvmAccountsAddressSendTransaction<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EvmAccountsAddressSendTransactionMutationOptions<
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

export function usePostV2EvmAccountsAddressSignTransaction<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EvmAccountsAddressSignTransactionMutationOptions<
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

export function usePostV2EvmAccountsAddressSign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EvmAccountsAddressSignMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2EvmAccountsAddressSignMessage<
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
                    (typeof client.v2.evm.accounts)[':address']['sign']['message']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.evm.accounts)[':address']['sign']['message']['$post']>,
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
  const mutationDefaults = getPostV2EvmAccountsAddressSignMessageMutationOptions<
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

export function usePostV2EvmAccountsAddressSignTypedData<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EvmAccountsAddressSignTypedDataMutationOptions<
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

export function usePostV2EvmAccountsAddressEip7702Delegation<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EvmAccountsAddressEip7702DelegationMutationOptions<
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

export function getV2EvmEip7702DelegationOperationsDelegationOperationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/evm/eip7702/delegation-operations/:delegationOperationId',
    toValue(args),
  ] as const
}

export function getV2EvmEip7702DelegationOperationsDelegationOperationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2EvmEip7702DelegationOperationsDelegationOperationIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.evm.eip7702['delegation-operations'][':delegationOperationId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2EvmEip7702DelegationOperationsDelegationOperationId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
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
                    (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
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
                    (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2EvmEip7702DelegationOperationsDelegationOperationIdQueryKey>
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
              (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmEip7702DelegationOperationsDelegationOperationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2EvmEip7702DelegationOperationsDelegationOperationIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.evm.eip7702['delegation-operations'][':delegationOperationId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2EvmSmartAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.evm)['smart-accounts']['$get']>>,
) {
  return ['v2', '/v2/evm/smart-accounts', toValue(args)] as const
}

export function getV2EvmSmartAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.evm)['smart-accounts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EvmSmartAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.evm['smart-accounts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EvmSmartAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.evm)['smart-accounts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2EvmSmartAccountsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmSmartAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EvmSmartAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.evm['smart-accounts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2EvmSmartAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EvmSmartAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getV2EvmSmartAccountsByNameNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>
  >,
) {
  return ['v2', '/v2/evm/smart-accounts/by-name/:name', toValue(args)] as const
}

export function getV2EvmSmartAccountsByNameNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EvmSmartAccountsByNameNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.evm['smart-accounts']['by-name'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EvmSmartAccountsByNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2EvmSmartAccountsByNameNameQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmSmartAccountsByNameNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EvmSmartAccountsByNameNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.evm['smart-accounts']['by-name'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2EvmAccountsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.import.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.evm.accounts.import.$post>,
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
  const mutationDefaults = getPostV2EvmAccountsImportMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2EvmAccountsAddressExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EvmAccountsAddressExportMutationOptions<
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

export function usePostV2EvmAccountsExportByNameName<
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
                  ReturnType<(typeof client.v2.evm.accounts.export)['by-name'][':name']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.evm.accounts.export)['by-name'][':name']['$post']>,
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
  const mutationDefaults = getPostV2EvmAccountsExportByNameNameMutationOptions<
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

export function getV2EvmSmartAccountsAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>
  >,
) {
  return ['v2', '/v2/evm/smart-accounts/:address', toValue(args)] as const
}

export function getV2EvmSmartAccountsAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EvmSmartAccountsAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.evm['smart-accounts'][':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EvmSmartAccountsAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2EvmSmartAccountsAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmSmartAccountsAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EvmSmartAccountsAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.evm['smart-accounts'][':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2EvmSmartAccountsAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EvmSmartAccountsAddressMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2EvmSmartAccountsAddressUserOperations<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EvmSmartAccountsAddressUserOperationsMutationOptions<
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

export function usePostV2EvmSmartAccountsAddressUserOperationsPrepareAndSend<
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
    getPostV2EvmSmartAccountsAddressUserOperationsPrepareAndSendMutationOptions<
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

export function getV2EvmSmartAccountsAddressUserOperationsUserOpHashQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/evm/smart-accounts/:address/user-operations/:userOpHash',
    toValue(args),
  ] as const
}

export function getV2EvmSmartAccountsAddressUserOperationsUserOpHashQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EvmSmartAccountsAddressUserOperationsUserOpHashQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.evm['smart-accounts'][':address']['user-operations'][':userOpHash'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2EvmSmartAccountsAddressUserOperationsUserOpHash<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
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
                    (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
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
                    (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2EvmSmartAccountsAddressUserOperationsUserOpHashQueryKey>
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
              (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmSmartAccountsAddressUserOperationsUserOpHashQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EvmSmartAccountsAddressUserOperationsUserOpHashQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.evm['smart-accounts'][':address']['user-operations'][':userOpHash'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2EvmSmartAccountsAddressUserOperationsUserOpHashSend<
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
    getPostV2EvmSmartAccountsAddressUserOperationsUserOpHashSendMutationOptions<
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

export function usePostV2EvmSmartAccountsAddressSpendPermissions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EvmSmartAccountsAddressSpendPermissionsMutationOptions<
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

export function getV2EvmSmartAccountsAddressSpendPermissionsListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
    >
  >,
) {
  return ['v2', '/v2/evm/smart-accounts/:address/spend-permissions/list', toValue(args)] as const
}

export function getV2EvmSmartAccountsAddressSpendPermissionsListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EvmSmartAccountsAddressSpendPermissionsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.evm['smart-accounts'][':address']['spend-permissions'].list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EvmSmartAccountsAddressSpendPermissionsList<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
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
                    (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
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
                    (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2EvmSmartAccountsAddressSpendPermissionsListQueryKey>
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
              (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmSmartAccountsAddressSpendPermissionsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EvmSmartAccountsAddressSpendPermissionsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.evm['smart-accounts'][':address']['spend-permissions'].list.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2EvmSmartAccountsAddressSpendPermissionsRevoke<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EvmSmartAccountsAddressSpendPermissionsRevokeMutationOptions<
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

export function getV2LendPositionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.lend.positions.$get>>,
) {
  return ['v2', '/v2/lend/positions', toValue(args)] as const
}

export function getV2LendPositionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.lend.positions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LendPositionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.lend.positions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LendPositions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.positions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.lend.positions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.positions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.positions.$get>>>
            >
          >,
          ReturnType<typeof getV2LendPositionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.positions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2LendPositionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LendPositionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.lend.positions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LendVaultsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.lend.vaults.$get>>,
) {
  return ['v2', '/v2/lend/vaults', toValue(args)] as const
}

export function getV2LendVaultsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.lend.vaults.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LendVaultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.lend.vaults.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LendVaults<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.vaults.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.lend.vaults.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.vaults.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.vaults.$get>>>>
          >,
          ReturnType<typeof getV2LendVaultsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.vaults.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2LendVaultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LendVaultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.lend.vaults.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LendVaultsVaultIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>>,
) {
  return ['v2', '/v2/lend/vaults/:vaultId', toValue(args)] as const
}

export function getV2LendVaultsVaultIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LendVaultsVaultIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.lend.vaults[':vaultId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LendVaultsVaultId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LendVaultsVaultIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LendVaultsVaultIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LendVaultsVaultIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.lend.vaults[':vaultId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2EvmAccountsAddressLendRedeemFees<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EvmAccountsAddressLendRedeemFeesMutationOptions<
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

export function usePostV2EvmSmartAccountsAddressLendRedeemFees<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EvmSmartAccountsAddressLendRedeemFeesMutationOptions<
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

export function usePostV2EvmAccountsAddressLendDeposit<
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
                    (typeof client.v2.evm.accounts)[':address']['lend']['deposit']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.evm.accounts)[':address']['lend']['deposit']['$post']>,
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
  const mutationDefaults = getPostV2EvmAccountsAddressLendDepositMutationOptions<
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

export function usePostV2EvmSmartAccountsAddressLendDeposit<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EvmSmartAccountsAddressLendDepositMutationOptions<
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

export function usePostV2EvmAccountsAddressLendWithdraw<
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
                    (typeof client.v2.evm.accounts)[':address']['lend']['withdraw']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.evm.accounts)[':address']['lend']['withdraw']['$post']
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
  const mutationDefaults = getPostV2EvmAccountsAddressLendWithdrawMutationOptions<
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

export function usePostV2EvmSmartAccountsAddressLendWithdraw<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EvmSmartAccountsAddressLendWithdrawMutationOptions<
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

export function getV2EvmSwapsQuoteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.evm.swaps.quote.$get>>,
) {
  return ['v2', '/v2/evm/swaps/quote', toValue(args)] as const
}

export function getV2EvmSwapsQuoteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.evm.swaps.quote.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EvmSwapsQuoteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.evm.swaps.quote.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EvmSwapsQuote<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.swaps.quote.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.evm.swaps.quote.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.swaps.quote.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.swaps.quote.$get>>>
            >
          >,
          ReturnType<typeof getV2EvmSwapsQuoteQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.swaps.quote.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmSwapsQuoteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EvmSwapsQuoteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.evm.swaps.quote.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2EvmSwaps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.swaps.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.evm.swaps.$post>,
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
  const mutationDefaults = getPostV2EvmSwapsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2EvmTokenBalancesNetworkAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.evm)['token-balances'][':network'][':address']['$get']>
  >,
) {
  return ['v2', '/v2/evm/token-balances/:network/:address', toValue(args)] as const
}

export function getV2EvmTokenBalancesNetworkAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.evm)['token-balances'][':network'][':address']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EvmTokenBalancesNetworkAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.evm['token-balances'][':network'][':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EvmTokenBalancesNetworkAddress<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.evm)['token-balances'][':network'][':address']['$get']>
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
                    (typeof client.v2.evm)['token-balances'][':network'][':address']['$get']
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
                    (typeof client.v2.evm)['token-balances'][':network'][':address']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2EvmTokenBalancesNetworkAddressQueryKey>
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
            ReturnType<(typeof client.v2.evm)['token-balances'][':network'][':address']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EvmTokenBalancesNetworkAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EvmTokenBalancesNetworkAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.evm['token-balances'][':network'][':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2EvmFaucet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.faucet.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.evm.faucet.$post>,
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
  const mutationDefaults = getPostV2EvmFaucetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2PolicyEnginePoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['policy-engine']['policies']['$get']>>,
) {
  return ['v2', '/v2/policy-engine/policies', toValue(args)] as const
}

export function getV2PolicyEnginePoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['policy-engine']['policies']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PolicyEnginePoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['policy-engine'].policies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PolicyEnginePolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['policy-engine']['policies']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2PolicyEnginePoliciesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PolicyEnginePoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PolicyEnginePoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['policy-engine'].policies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2PolicyEnginePolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PolicyEnginePoliciesMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2PolicyEngineSimulate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PolicyEngineSimulateMutationOptions<TError, TOnMutateResult>(
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

export function getV2PolicyEnginePoliciesPolicyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>
  >,
) {
  return ['v2', '/v2/policy-engine/policies/:policyId', toValue(args)] as const
}

export function getV2PolicyEnginePoliciesPolicyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PolicyEnginePoliciesPolicyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['policy-engine'].policies[':policyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PolicyEnginePoliciesPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2PolicyEnginePoliciesPolicyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PolicyEnginePoliciesPolicyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PolicyEnginePoliciesPolicyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['policy-engine'].policies[':policyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2PolicyEnginePoliciesPolicyId<
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
                  ReturnType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$put']>,
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
  const mutationDefaults = getPutV2PolicyEnginePoliciesPolicyIdMutationOptions<
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

export function useDeleteV2PolicyEnginePoliciesPolicyId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2PolicyEnginePoliciesPolicyIdMutationOptions<
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

export function usePostV2PolicyEnginePoliciesPolicyIdPause<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PolicyEnginePoliciesPolicyIdPauseMutationOptions<
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

export function usePostV2PolicyEnginePoliciesPolicyIdResume<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PolicyEnginePoliciesPolicyIdResumeMutationOptions<
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

export function getV2SolanaAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.solana.accounts.$get>>,
) {
  return ['v2', '/v2/solana/accounts', toValue(args)] as const
}

export function getV2SolanaAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.solana.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SolanaAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.solana.accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SolanaAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.solana.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.$get>>>
            >
          >,
          ReturnType<typeof getV2SolanaAccountsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2SolanaAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SolanaAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.solana.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2SolanaAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.solana.accounts.$post>,
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
  const mutationDefaults = getPostV2SolanaAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getV2SolanaAccountsAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.solana.accounts)[':address']['$get']>>,
) {
  return ['v2', '/v2/solana/accounts/:address', toValue(args)] as const
}

export function getV2SolanaAccountsAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.solana.accounts)[':address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SolanaAccountsAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.solana.accounts[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SolanaAccountsAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.solana.accounts)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.solana.accounts)[':address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.solana.accounts)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.solana.accounts)[':address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2SolanaAccountsAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.solana.accounts)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SolanaAccountsAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SolanaAccountsAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.solana.accounts[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2SolanaAccountsAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2SolanaAccountsAddressMutationOptions<TError, TOnMutateResult>(
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

export function getV2SolanaAccountsByNameNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>
  >,
) {
  return ['v2', '/v2/solana/accounts/by-name/:name', toValue(args)] as const
}

export function getV2SolanaAccountsByNameNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SolanaAccountsByNameNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.solana.accounts['by-name'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SolanaAccountsByNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2SolanaAccountsByNameNameQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SolanaAccountsByNameNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SolanaAccountsByNameNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.solana.accounts['by-name'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2SolanaAccountsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.solana.accounts.import.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.solana.accounts.import.$post>,
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
  const mutationDefaults = getPostV2SolanaAccountsImportMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2SolanaAccountsAddressExport<
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
                  ReturnType<(typeof client.v2.solana.accounts)[':address']['export']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.solana.accounts)[':address']['export']['$post']>,
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
  const mutationDefaults = getPostV2SolanaAccountsAddressExportMutationOptions<
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

export function usePostV2SolanaAccountsExportByNameName<
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
                  ReturnType<(typeof client.v2.solana.accounts.export)['by-name'][':name']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.solana.accounts.export)['by-name'][':name']['$post']>,
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
  const mutationDefaults = getPostV2SolanaAccountsExportByNameNameMutationOptions<
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

export function usePostV2SolanaAccountsAddressSignTransaction<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2SolanaAccountsAddressSignTransactionMutationOptions<
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

export function usePostV2SolanaAccountsAddressSignMessage<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2SolanaAccountsAddressSignMessageMutationOptions<
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

export function usePostV2SolanaAccountsSendTransaction<
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
                Awaited<ReturnType<typeof client.v2.solana.accounts.send.transaction.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.solana.accounts.send.transaction.$post>,
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
  const mutationDefaults = getPostV2SolanaAccountsSendTransactionMutationOptions<
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

export function usePostV2SolanaFaucet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.faucet.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.solana.faucet.$post>,
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
  const mutationDefaults = getPostV2SolanaFaucetMutationOptions<TError, TOnMutateResult>(
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

export function getV2SolanaTokenBalancesNetworkAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.solana)['token-balances'][':network'][':address']['$get']>
  >,
) {
  return ['v2', '/v2/solana/token-balances/:network/:address', toValue(args)] as const
}

export function getV2SolanaTokenBalancesNetworkAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.solana)['token-balances'][':network'][':address']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SolanaTokenBalancesNetworkAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.solana['token-balances'][':network'][':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SolanaTokenBalancesNetworkAddress<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.solana)['token-balances'][':network'][':address']['$get']>
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
                    (typeof client.v2.solana)['token-balances'][':network'][':address']['$get']
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
                    (typeof client.v2.solana)['token-balances'][':network'][':address']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2SolanaTokenBalancesNetworkAddressQueryKey>
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
            ReturnType<(typeof client.v2.solana)['token-balances'][':network'][':address']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SolanaTokenBalancesNetworkAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SolanaTokenBalancesNetworkAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.solana['token-balances'][':network'][':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2DataQueryRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.run.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.data.query.run.$post>,
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
  const mutationDefaults = getPostV2DataQueryRunMutationOptions<TError, TOnMutateResult>(
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

export function getV2DataQueryGrammarQueryKey() {
  return ['v2', '/v2/data/query/grammar'] as const
}

export function getV2DataQueryGrammarQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2DataQueryGrammarQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.data.query.grammar.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DataQueryGrammar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.grammar.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.grammar.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.grammar.$get>>>
            >
          >,
          ReturnType<typeof getV2DataQueryGrammarQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.grammar.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DataQueryGrammarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2DataQueryGrammarQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.data.query.grammar.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DataQuerySchemaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.data.query.schema.$get>>,
) {
  return ['v2', '/v2/data/query/schema', toValue(args)] as const
}

export function getV2DataQuerySchemaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.data.query.schema.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DataQuerySchemaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.data.query.schema.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DataQuerySchema<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.schema.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.data.query.schema.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.schema.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.schema.$get>>>
            >
          >,
          ReturnType<typeof getV2DataQuerySchemaQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.schema.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2DataQuerySchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DataQuerySchemaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.data.query.schema.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DataEvmTokenOwnershipNetworkAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']>
  >,
) {
  return ['v2', '/v2/data/evm/token-ownership/:network/:address', toValue(args)] as const
}

export function getV2DataEvmTokenOwnershipNetworkAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DataEvmTokenOwnershipNetworkAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.data.evm['token-ownership'][':network'][':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DataEvmTokenOwnershipNetworkAddress<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']>
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
                    (typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']
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
                    (typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DataEvmTokenOwnershipNetworkAddressQueryKey>
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
              (typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DataEvmTokenOwnershipNetworkAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DataEvmTokenOwnershipNetworkAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.data.evm['token-ownership'][':network'][':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DataEvmTokenBalancesNetworkAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']>
  >,
) {
  return ['v2', '/v2/data/evm/token-balances/:network/:address', toValue(args)] as const
}

export function getV2DataEvmTokenBalancesNetworkAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DataEvmTokenBalancesNetworkAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.data.evm['token-balances'][':network'][':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DataEvmTokenBalancesNetworkAddress<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']>
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
                    (typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']
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
                    (typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DataEvmTokenBalancesNetworkAddressQueryKey>
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
              (typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DataEvmTokenBalancesNetworkAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DataEvmTokenBalancesNetworkAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.data.evm['token-balances'][':network'][':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DataWebhooksSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.data.webhooks.subscriptions.$get>>,
) {
  return ['v2', '/v2/data/webhooks/subscriptions', toValue(args)] as const
}

export function getV2DataWebhooksSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.data.webhooks.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DataWebhooksSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.data.webhooks.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DataWebhooksSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.webhooks.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.data.webhooks.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.data.webhooks.subscriptions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.data.webhooks.subscriptions.$get>>
              >
            >
          >,
          ReturnType<typeof getV2DataWebhooksSubscriptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.webhooks.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DataWebhooksSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DataWebhooksSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.data.webhooks.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2DataWebhooksSubscriptions<
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
                Awaited<ReturnType<typeof client.v2.data.webhooks.subscriptions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.data.webhooks.subscriptions.$post>,
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
  const mutationDefaults = getPostV2DataWebhooksSubscriptionsMutationOptions<
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

export function getV2DataWebhooksSubscriptionsSubscriptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']>
  >,
) {
  return ['v2', '/v2/data/webhooks/subscriptions/:subscriptionId', toValue(args)] as const
}

export function getV2DataWebhooksSubscriptionsSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DataWebhooksSubscriptionsSubscriptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.data.webhooks.subscriptions[':subscriptionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DataWebhooksSubscriptionsSubscriptionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']>
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
                    (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']
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
                    (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DataWebhooksSubscriptionsSubscriptionIdQueryKey>
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
            ReturnType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DataWebhooksSubscriptionsSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DataWebhooksSubscriptionsSubscriptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.data.webhooks.subscriptions[':subscriptionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2DataWebhooksSubscriptionsSubscriptionId<
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
                    (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$put']
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
  const mutationDefaults = getPutV2DataWebhooksSubscriptionsSubscriptionIdMutationOptions<
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

export function useDeleteV2DataWebhooksSubscriptionsSubscriptionId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2DataWebhooksSubscriptionsSubscriptionIdMutationOptions<
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

export function getV2DataWebhooksSubscriptionsSubscriptionIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
    >
  >,
) {
  return ['v2', '/v2/data/webhooks/subscriptions/:subscriptionId/events', toValue(args)] as const
}

export function getV2DataWebhooksSubscriptionsSubscriptionIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DataWebhooksSubscriptionsSubscriptionIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.data.webhooks.subscriptions[':subscriptionId'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DataWebhooksSubscriptionsSubscriptionIdEvents<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
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
                    (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
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
                    (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DataWebhooksSubscriptionsSubscriptionIdEventsQueryKey>
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
              (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DataWebhooksSubscriptionsSubscriptionIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DataWebhooksSubscriptionsSubscriptionIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.data.webhooks.subscriptions[':subscriptionId'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2X402Verify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.verify.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.x402.verify.$post>,
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
  const mutationDefaults = getPostV2X402VerifyMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2X402Settle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.settle.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.x402.settle.$post>,
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
  const mutationDefaults = getPostV2X402SettleMutationOptions<TError, TOnMutateResult>(
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

export function getV2X402SupportedQueryKey() {
  return ['v2', '/v2/x402/supported'] as const
}

export function getV2X402SupportedQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2X402SupportedQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.x402.supported.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2X402Supported<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.supported.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.supported.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.supported.$get>>>
            >
          >,
          ReturnType<typeof getV2X402SupportedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.supported.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2X402SupportedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2X402SupportedQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.x402.supported.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2X402DiscoveryResourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.x402.discovery.resources.$get>>,
) {
  return ['v2', '/v2/x402/discovery/resources', toValue(args)] as const
}

export function getV2X402DiscoveryResourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.x402.discovery.resources.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2X402DiscoveryResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.x402.discovery.resources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2X402DiscoveryResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.resources.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.x402.discovery.resources.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.x402.discovery.resources.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.x402.discovery.resources.$get>>
              >
            >
          >,
          ReturnType<typeof getV2X402DiscoveryResourcesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.resources.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2X402DiscoveryResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2X402DiscoveryResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.x402.discovery.resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2X402DiscoveryMerchantQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.x402.discovery.merchant.$get>>,
) {
  return ['v2', '/v2/x402/discovery/merchant', toValue(args)] as const
}

export function getV2X402DiscoveryMerchantQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.x402.discovery.merchant.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2X402DiscoveryMerchantQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.x402.discovery.merchant.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2X402DiscoveryMerchant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.merchant.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.x402.discovery.merchant.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.x402.discovery.merchant.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.x402.discovery.merchant.$get>>
              >
            >
          >,
          ReturnType<typeof getV2X402DiscoveryMerchantQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.merchant.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2X402DiscoveryMerchantQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2X402DiscoveryMerchantQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.x402.discovery.merchant.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2X402DiscoverySearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.x402.discovery.search.$get>>,
) {
  return ['v2', '/v2/x402/discovery/search', toValue(args)] as const
}

export function getV2X402DiscoverySearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.x402.discovery.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2X402DiscoverySearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.x402.discovery.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2X402DiscoverySearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.x402.discovery.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.search.$get>>>
            >
          >,
          ReturnType<typeof getV2X402DiscoverySearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2X402DiscoverySearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2X402DiscoverySearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.x402.discovery.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2X402DiscoveryMcp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.mcp.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.x402.discovery.mcp.$post>,
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
  const mutationDefaults = getPostV2X402DiscoveryMcpMutationOptions<TError, TOnMutateResult>(
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

export function getV2X402DiscoveryBundlesQueryKey() {
  return ['v2', '/v2/x402/discovery/bundles'] as const
}

export function getV2X402DiscoveryBundlesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2X402DiscoveryBundlesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.x402.discovery.bundles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2X402DiscoveryBundles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.bundles.$get>>>
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
                Awaited<ReturnType<typeof client.v2.x402.discovery.bundles.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.x402.discovery.bundles.$get>>
              >
            >
          >,
          ReturnType<typeof getV2X402DiscoveryBundlesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.bundles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2X402DiscoveryBundlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2X402DiscoveryBundlesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.x402.discovery.bundles.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2X402DiscoveryBundlesBundleSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>
  >,
) {
  return ['v2', '/v2/x402/discovery/bundles/:bundleSlug', toValue(args)] as const
}

export function getV2X402DiscoveryBundlesBundleSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2X402DiscoveryBundlesBundleSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.x402.discovery.bundles[':bundleSlug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2X402DiscoveryBundlesBundleSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>
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
                  ReturnType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2X402DiscoveryBundlesBundleSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2X402DiscoveryBundlesBundleSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2X402DiscoveryBundlesBundleSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.x402.discovery.bundles[':bundleSlug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2X402Validate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.validate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.x402.validate.$post>,
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
  const mutationDefaults = getPostV2X402ValidateMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2OnrampVerifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.verifications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.onramp.verifications.$post>,
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
  const mutationDefaults = getPostV2OnrampVerificationsMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2OnrampVerificationsVerificationIdSubmit<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2OnrampVerificationsVerificationIdSubmitMutationOptions<
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

export function usePostV2OnrampOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.orders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.onramp.orders.$post>,
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
  const mutationDefaults = getPostV2OnrampOrdersMutationOptions<TError, TOnMutateResult>(
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

export function getV2OnrampOrdersOrderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.onramp.orders)[':orderId']['$get']>>,
) {
  return ['v2', '/v2/onramp/orders/:orderId', toValue(args)] as const
}

export function getV2OnrampOrdersOrderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.onramp.orders)[':orderId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2OnrampOrdersOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.onramp.orders[':orderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2OnrampOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.onramp.orders)[':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.onramp.orders)[':orderId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.onramp.orders)[':orderId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.onramp.orders)[':orderId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2OnrampOrdersOrderIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.onramp.orders)[':orderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2OnrampOrdersOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2OnrampOrdersOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.onramp.orders[':orderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2OnrampSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.sessions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.onramp.sessions.$post>,
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
  const mutationDefaults = getPostV2OnrampSessionsMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2OnrampMobileSessionsChallenges<
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
                Awaited<ReturnType<typeof client.v2.onramp.mobile.sessions.challenges.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.onramp.mobile.sessions.challenges.$post>,
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
  const mutationDefaults = getPostV2OnrampMobileSessionsChallengesMutationOptions<
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

export function usePostV2OnrampMobileSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.onramp.mobile.sessions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.onramp.mobile.sessions.$post>,
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
  const mutationDefaults = getPostV2OnrampMobileSessionsMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2OnrampMobileAttestationChallenges<
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
                Awaited<ReturnType<typeof client.v2.onramp.mobile.attestation.challenges.$post>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostV2OnrampMobileAttestationChallengesMutationOptions<
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

export function usePostV2OnrampMobileAttestationRegistrations<
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
                Awaited<ReturnType<typeof client.v2.onramp.mobile.attestation.registrations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.onramp.mobile.attestation.registrations.$post>,
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
  const mutationDefaults = getPostV2OnrampMobileAttestationRegistrationsMutationOptions<
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

export function usePostV2OnrampLimits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.limits.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.onramp.limits.$post>,
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
  const mutationDefaults = getPostV2OnrampLimitsMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2OnrampLimitsUpgrade<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.onramp.limits.upgrade.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.onramp.limits.upgrade.$post>,
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
  const mutationDefaults = getPostV2OnrampLimitsUpgradeMutationOptions<TError, TOnMutateResult>(
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

export function getV2PaymentMethodsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['payment-methods']['$get']>>,
) {
  return ['v2', '/v2/payment-methods', toValue(args)] as const
}

export function getV2PaymentMethodsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['payment-methods']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PaymentMethodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['payment-methods'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-methods']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['payment-methods']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['payment-methods']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['payment-methods']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2PaymentMethodsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-methods']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PaymentMethodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['payment-methods'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2PaymentMethodsPaymentMethodIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>
  >,
) {
  return ['v2', '/v2/payment-methods/:paymentMethodId', toValue(args)] as const
}

export function getV2PaymentMethodsPaymentMethodIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PaymentMethodsPaymentMethodIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['payment-methods'][':paymentMethodId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PaymentMethodsPaymentMethodId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>
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
                  ReturnType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2PaymentMethodsPaymentMethodIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentMethodsPaymentMethodIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PaymentMethodsPaymentMethodIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['payment-methods'][':paymentMethodId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
