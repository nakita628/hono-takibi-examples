import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getAdjustmentsKey() {
  return ['adjustments'] as const
}

export function getCheckoutDomainsKey() {
  return ['checkout-domains'] as const
}

export function getClientTokensKey() {
  return ['client-tokens'] as const
}

export function getCountriesKey() {
  return ['countries'] as const
}

export function getCurrenciesKey() {
  return ['currencies'] as const
}

export function getCustomersKey() {
  return ['customers'] as const
}

export function getDiscountGroupsKey() {
  return ['discount-groups'] as const
}

export function getDiscountsKey() {
  return ['discounts'] as const
}

export function getEventTypesKey() {
  return ['event-types'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getIpsKey() {
  return ['ips'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getNotificationSettingsKey() {
  return ['notification-settings'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getPricesKey() {
  return ['prices'] as const
}

export function getPricingPreviewKey() {
  return ['pricing-preview'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getReportsKey() {
  return ['reports'] as const
}

export function getSettingsKey() {
  return ['settings'] as const
}

export function getSimulationTypesKey() {
  return ['simulation-types'] as const
}

export function getSimulationsKey() {
  return ['simulations'] as const
}

export function getSubscriptionsKey() {
  return ['subscriptions'] as const
}

export function getTransactionsKey() {
  return ['transactions'] as const
}

export function getVerificationsKey() {
  return ['verifications'] as const
}

export function getAccountQueryKey() {
  return ['account', '/account'] as const
}

export function getAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >({
    queryKey: getAccountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchAccountMutationKey() {
  return ['account', '/account', 'PATCH'] as const
}

export function getPatchAccountMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$patch>>>>>,
    TError,
    InferRequestType<typeof client.account.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.$patch>) {
      return parseResponse(client.account.$patch(args, options))
    },
  })
}

export function usePatchAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.account.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCustomersCustomerIdAddressesQueryKey(
  args: InferRequestType<(typeof client.customers)[':customer_id']['addresses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:customer_id/addresses', keyArgs] as const
}

export function getCustomersCustomerIdAddressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customer_id']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['addresses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdAddressesQueryKey>
  >({
    queryKey: getCustomersCustomerIdAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customer_id'].addresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCustomersCustomerIdAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customer_id']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['addresses']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.customers)[':customer_id']['addresses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersCustomerIdAddressesQueryKey>
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
      ...getCustomersCustomerIdAddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomersCustomerIdAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customer_id']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['addresses']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.customers)[':customer_id']['addresses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersCustomerIdAddressesQueryKey>
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
      ...getCustomersCustomerIdAddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCustomersCustomerIdAddressesMutationKey() {
  return ['customers', '/customers/:customer_id/addresses', 'POST'] as const
}

export function getPostCustomersCustomerIdAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['addresses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers)[':customer_id']['addresses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomersCustomerIdAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customers)[':customer_id']['addresses']['$post']>,
    ) {
      return parseResponse(client.customers[':customer_id'].addresses.$post(args, options))
    },
  })
}

export function usePostCustomersCustomerIdAddresses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.customers)[':customer_id']['addresses']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.customers)[':customer_id']['addresses']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomersCustomerIdAddressesMutationOptions<
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

export function getCustomersCustomerIdAddressesAddressIdQueryKey(
  args: InferRequestType<
    (typeof client.customers)[':customer_id']['addresses'][':address_id']['$get']
  >,
) {
  return ['customers', '/customers/:customer_id/addresses/:address_id', args] as const
}

export function getCustomersCustomerIdAddressesAddressIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customers)[':customer_id']['addresses'][':address_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.customers)[':customer_id']['addresses'][':address_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':customer_id']['addresses'][':address_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdAddressesAddressIdQueryKey>
  >({
    queryKey: getCustomersCustomerIdAddressesAddressIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customer_id'].addresses[':address_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCustomersCustomerIdAddressesAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customers)[':customer_id']['addresses'][':address_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.customers)[':customer_id']['addresses'][':address_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.customers)[':customer_id']['addresses'][':address_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersCustomerIdAddressesAddressIdQueryKey>
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
      ...getCustomersCustomerIdAddressesAddressIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomersCustomerIdAddressesAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customers)[':customer_id']['addresses'][':address_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.customers)[':customer_id']['addresses'][':address_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.customers)[':customer_id']['addresses'][':address_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersCustomerIdAddressesAddressIdQueryKey>
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
      ...getCustomersCustomerIdAddressesAddressIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchCustomersCustomerIdAddressesAddressIdMutationKey() {
  return ['customers', '/customers/:customer_id/addresses/:address_id', 'PATCH'] as const
}

export function getPatchCustomersCustomerIdAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':customer_id']['addresses'][':address_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.customers)[':customer_id']['addresses'][':address_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCustomersCustomerIdAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':customer_id']['addresses'][':address_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.customers[':customer_id'].addresses[':address_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchCustomersCustomerIdAddressesAddressId<
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
                  (typeof client.customers)[':customer_id']['addresses'][':address_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.customers)[':customer_id']['addresses'][':address_id']['$patch']
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
  const mutationDefaults = getPatchCustomersCustomerIdAddressesAddressIdMutationOptions<
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

export function getAdjustmentsQueryKey(args: InferRequestType<typeof client.adjustments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['adjustments', '/adjustments', keyArgs] as const
}

export function getAdjustmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adjustments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.adjustments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adjustments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdjustmentsQueryKey>
  >({
    queryKey: getAdjustmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adjustments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdjustments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adjustments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.adjustments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adjustments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdjustmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdjustmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdjustments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adjustments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.adjustments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adjustments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdjustmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdjustmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAdjustmentsMutationKey() {
  return ['adjustments', '/adjustments', 'POST'] as const
}

export function getPostAdjustmentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adjustments.$post>>>>>,
    TError,
    InferRequestType<typeof client.adjustments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdjustmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.adjustments.$post>) {
      return parseResponse(client.adjustments.$post(args, options))
    },
  })
}

export function usePostAdjustments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adjustments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.adjustments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdjustmentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdjustmentsAdjustmentIdCreditNoteQueryKey(
  args: InferRequestType<(typeof client.adjustments)[':adjustment_id']['credit-note']['$get']>,
) {
  return ['adjustments', '/adjustments/:adjustment_id/credit-note', args] as const
}

export function getAdjustmentsAdjustmentIdCreditNoteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.adjustments)[':adjustment_id']['credit-note']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.adjustments)[':adjustment_id']['credit-note']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adjustments)[':adjustment_id']['credit-note']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdjustmentsAdjustmentIdCreditNoteQueryKey>
  >({
    queryKey: getAdjustmentsAdjustmentIdCreditNoteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adjustments[':adjustment_id']['credit-note'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdjustmentsAdjustmentIdCreditNote<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.adjustments)[':adjustment_id']['credit-note']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.adjustments)[':adjustment_id']['credit-note']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.adjustments)[':adjustment_id']['credit-note']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdjustmentsAdjustmentIdCreditNoteQueryKey>
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
      ...getAdjustmentsAdjustmentIdCreditNoteQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdjustmentsAdjustmentIdCreditNote<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.adjustments)[':adjustment_id']['credit-note']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.adjustments)[':adjustment_id']['credit-note']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.adjustments)[':adjustment_id']['credit-note']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdjustmentsAdjustmentIdCreditNoteQueryKey>
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
      ...getAdjustmentsAdjustmentIdCreditNoteQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSettingsBalanceCurrencyQueryKey() {
  return ['settings', '/settings/balance-currency'] as const
}

export function getSettingsBalanceCurrencyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['balance-currency']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings)['balance-currency']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsBalanceCurrencyQueryKey>
  >({
    queryKey: getSettingsBalanceCurrencyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings['balance-currency'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsBalanceCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['balance-currency']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['balance-currency']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsBalanceCurrencyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSettingsBalanceCurrencyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSettingsBalanceCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['balance-currency']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['balance-currency']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsBalanceCurrencyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSettingsBalanceCurrencyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchSettingsBalanceCurrencyMutationKey() {
  return ['settings', '/settings/balance-currency', 'PATCH'] as const
}

export function getPatchSettingsBalanceCurrencyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings)['balance-currency']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings)['balance-currency']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSettingsBalanceCurrencyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings)['balance-currency']['$patch']>,
    ) {
      return parseResponse(client.settings['balance-currency'].$patch(args, options))
    },
  })
}

export function usePatchSettingsBalanceCurrency<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['balance-currency']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings)['balance-currency']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSettingsBalanceCurrencyMutationOptions<TError, TOnMutateResult>(
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

export function getCustomersCustomerIdBusinessesQueryKey(
  args: InferRequestType<(typeof client.customers)[':customer_id']['businesses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:customer_id/businesses', keyArgs] as const
}

export function getCustomersCustomerIdBusinessesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customer_id']['businesses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['businesses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['businesses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdBusinessesQueryKey>
  >({
    queryKey: getCustomersCustomerIdBusinessesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customer_id'].businesses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCustomersCustomerIdBusinesses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customer_id']['businesses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['businesses']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.customers)[':customer_id']['businesses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersCustomerIdBusinessesQueryKey>
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
      ...getCustomersCustomerIdBusinessesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomersCustomerIdBusinesses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customer_id']['businesses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['businesses']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.customers)[':customer_id']['businesses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersCustomerIdBusinessesQueryKey>
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
      ...getCustomersCustomerIdBusinessesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCustomersCustomerIdBusinessesMutationKey() {
  return ['customers', '/customers/:customer_id/businesses', 'POST'] as const
}

export function getPostCustomersCustomerIdBusinessesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['businesses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers)[':customer_id']['businesses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomersCustomerIdBusinessesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customers)[':customer_id']['businesses']['$post']>,
    ) {
      return parseResponse(client.customers[':customer_id'].businesses.$post(args, options))
    },
  })
}

export function usePostCustomersCustomerIdBusinesses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.customers)[':customer_id']['businesses']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.customers)[':customer_id']['businesses']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomersCustomerIdBusinessesMutationOptions<
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

export function getCustomersCustomerIdBusinessesBusinessIdQueryKey(
  args: InferRequestType<
    (typeof client.customers)[':customer_id']['businesses'][':business_id']['$get']
  >,
) {
  return ['customers', '/customers/:customer_id/businesses/:business_id', args] as const
}

export function getCustomersCustomerIdBusinessesBusinessIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.customers)[':customer_id']['businesses'][':business_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.customers)[':customer_id']['businesses'][':business_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':customer_id']['businesses'][':business_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdBusinessesBusinessIdQueryKey>
  >({
    queryKey: getCustomersCustomerIdBusinessesBusinessIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customer_id'].businesses[':business_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCustomersCustomerIdBusinessesBusinessId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.customers)[':customer_id']['businesses'][':business_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.customers)[':customer_id']['businesses'][':business_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.customers)[':customer_id']['businesses'][':business_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersCustomerIdBusinessesBusinessIdQueryKey>
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
      ...getCustomersCustomerIdBusinessesBusinessIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomersCustomerIdBusinessesBusinessId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.customers)[':customer_id']['businesses'][':business_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.customers)[':customer_id']['businesses'][':business_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.customers)[':customer_id']['businesses'][':business_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersCustomerIdBusinessesBusinessIdQueryKey>
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
      ...getCustomersCustomerIdBusinessesBusinessIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchCustomersCustomerIdBusinessesBusinessIdMutationKey() {
  return ['customers', '/customers/:customer_id/businesses/:business_id', 'PATCH'] as const
}

export function getPatchCustomersCustomerIdBusinessesBusinessIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':customer_id']['businesses'][':business_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.customers)[':customer_id']['businesses'][':business_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCustomersCustomerIdBusinessesBusinessIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':customer_id']['businesses'][':business_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.customers[':customer_id'].businesses[':business_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchCustomersCustomerIdBusinessesBusinessId<
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
                  (typeof client.customers)[':customer_id']['businesses'][':business_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.customers)[':customer_id']['businesses'][':business_id']['$patch']
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
  const mutationDefaults = getPatchCustomersCustomerIdBusinessesBusinessIdMutationOptions<
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

export function getCheckoutDomainsQueryKey(
  args: InferRequestType<(typeof client)['checkout-domains']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['checkout-domains', '/checkout-domains', keyArgs] as const
}

export function getCheckoutDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['checkout-domains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['checkout-domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['checkout-domains']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCheckoutDomainsQueryKey>
  >({
    queryKey: getCheckoutDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['checkout-domains'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCheckoutDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['checkout-domains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['checkout-domains']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['checkout-domains']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCheckoutDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCheckoutDomainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCheckoutDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['checkout-domains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['checkout-domains']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['checkout-domains']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCheckoutDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCheckoutDomainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCheckoutDomainsDomainIdQueryKey(
  args: InferRequestType<(typeof client)['checkout-domains'][':domain_id']['$get']>,
) {
  return ['checkout-domains', '/checkout-domains/:domain_id', args] as const
}

export function getCheckoutDomainsDomainIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['checkout-domains'][':domain_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['checkout-domains'][':domain_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['checkout-domains'][':domain_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCheckoutDomainsDomainIdQueryKey>
  >({
    queryKey: getCheckoutDomainsDomainIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['checkout-domains'][':domain_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCheckoutDomainsDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['checkout-domains'][':domain_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['checkout-domains'][':domain_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['checkout-domains'][':domain_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCheckoutDomainsDomainIdQueryKey>
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
      ...getCheckoutDomainsDomainIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCheckoutDomainsDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['checkout-domains'][':domain_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['checkout-domains'][':domain_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['checkout-domains'][':domain_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCheckoutDomainsDomainIdQueryKey>
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
      ...getCheckoutDomainsDomainIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCheckoutDomainsDomainIdMutationKey() {
  return ['checkout-domains', '/checkout-domains/:domain_id', 'DELETE'] as const
}

export function getDeleteCheckoutDomainsDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['checkout-domains'][':domain_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['checkout-domains'][':domain_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCheckoutDomainsDomainIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['checkout-domains'][':domain_id']['$delete']>,
    ) {
      return parseResponse(client['checkout-domains'][':domain_id'].$delete(args, options))
    },
  })
}

export function useDeleteCheckoutDomainsDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['checkout-domains'][':domain_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['checkout-domains'][':domain_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCheckoutDomainsDomainIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostCheckoutDomainsDomainIdVerifyPaymentMethodMutationKey() {
  return ['checkout-domains', '/checkout-domains/:domain_id/verify-payment-method', 'POST'] as const
}

export function getPostCheckoutDomainsDomainIdVerifyPaymentMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['checkout-domains'][':domain_id']['verify-payment-method']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['checkout-domains'][':domain_id']['verify-payment-method']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCheckoutDomainsDomainIdVerifyPaymentMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['checkout-domains'][':domain_id']['verify-payment-method']['$post']
      >,
    ) {
      return parseResponse(
        client['checkout-domains'][':domain_id']['verify-payment-method'].$post(args, options),
      )
    },
  })
}

export function usePostCheckoutDomainsDomainIdVerifyPaymentMethod<
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
                  (typeof client)['checkout-domains'][':domain_id']['verify-payment-method']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['checkout-domains'][':domain_id']['verify-payment-method']['$post']
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
  const mutationDefaults = getPostCheckoutDomainsDomainIdVerifyPaymentMethodMutationOptions<
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

export function getSettingsCheckoutFeaturesQueryKey() {
  return ['settings', '/settings/checkout-features'] as const
}

export function getSettingsCheckoutFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['checkout-features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings)['checkout-features']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCheckoutFeaturesQueryKey>
  >({
    queryKey: getSettingsCheckoutFeaturesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings['checkout-features'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsCheckoutFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['checkout-features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['checkout-features']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCheckoutFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSettingsCheckoutFeaturesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSettingsCheckoutFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['checkout-features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['checkout-features']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCheckoutFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSettingsCheckoutFeaturesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchSettingsCheckoutFeaturesMutationKey() {
  return ['settings', '/settings/checkout-features', 'PATCH'] as const
}

export function getPatchSettingsCheckoutFeaturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings)['checkout-features']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings)['checkout-features']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSettingsCheckoutFeaturesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings)['checkout-features']['$patch']>,
    ) {
      return parseResponse(client.settings['checkout-features'].$patch(args, options))
    },
  })
}

export function usePatchSettingsCheckoutFeatures<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['checkout-features']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings)['checkout-features']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSettingsCheckoutFeaturesMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsCheckoutPaymentMethodsQueryKey() {
  return ['settings', '/settings/checkout-payment-methods'] as const
}

export function getSettingsCheckoutPaymentMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['checkout-payment-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings)['checkout-payment-methods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCheckoutPaymentMethodsQueryKey>
  >({
    queryKey: getSettingsCheckoutPaymentMethodsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings['checkout-payment-methods'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsCheckoutPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['checkout-payment-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['checkout-payment-methods']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCheckoutPaymentMethodsQueryKey>
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
      ...getSettingsCheckoutPaymentMethodsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsCheckoutPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['checkout-payment-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['checkout-payment-methods']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCheckoutPaymentMethodsQueryKey>
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
      ...getSettingsCheckoutPaymentMethodsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchSettingsCheckoutPaymentMethodsMutationKey() {
  return ['settings', '/settings/checkout-payment-methods', 'PATCH'] as const
}

export function getPatchSettingsCheckoutPaymentMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings)['checkout-payment-methods']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings)['checkout-payment-methods']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSettingsCheckoutPaymentMethodsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings)['checkout-payment-methods']['$patch']>,
    ) {
      return parseResponse(client.settings['checkout-payment-methods'].$patch(args, options))
    },
  })
}

export function usePatchSettingsCheckoutPaymentMethods<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['checkout-payment-methods']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings)['checkout-payment-methods']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSettingsCheckoutPaymentMethodsMutationOptions<
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

export function getSettingsCheckoutRecoveryQueryKey() {
  return ['settings', '/settings/checkout-recovery'] as const
}

export function getSettingsCheckoutRecoveryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['checkout-recovery']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings)['checkout-recovery']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCheckoutRecoveryQueryKey>
  >({
    queryKey: getSettingsCheckoutRecoveryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings['checkout-recovery'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsCheckoutRecovery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['checkout-recovery']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['checkout-recovery']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCheckoutRecoveryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSettingsCheckoutRecoveryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSettingsCheckoutRecovery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['checkout-recovery']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['checkout-recovery']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCheckoutRecoveryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSettingsCheckoutRecoveryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchSettingsCheckoutRecoveryMutationKey() {
  return ['settings', '/settings/checkout-recovery', 'PATCH'] as const
}

export function getPatchSettingsCheckoutRecoveryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings)['checkout-recovery']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings)['checkout-recovery']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSettingsCheckoutRecoveryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings)['checkout-recovery']['$patch']>,
    ) {
      return parseResponse(client.settings['checkout-recovery'].$patch(args, options))
    },
  })
}

export function usePatchSettingsCheckoutRecovery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['checkout-recovery']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings)['checkout-recovery']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSettingsCheckoutRecoveryMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsCheckoutStylesOverlayQueryKey() {
  return ['settings', '/settings/checkout-styles-overlay'] as const
}

export function getSettingsCheckoutStylesOverlayQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['checkout-styles-overlay']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings)['checkout-styles-overlay']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCheckoutStylesOverlayQueryKey>
  >({
    queryKey: getSettingsCheckoutStylesOverlayQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings['checkout-styles-overlay'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsCheckoutStylesOverlay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['checkout-styles-overlay']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['checkout-styles-overlay']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCheckoutStylesOverlayQueryKey>
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
      ...getSettingsCheckoutStylesOverlayQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsCheckoutStylesOverlay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['checkout-styles-overlay']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['checkout-styles-overlay']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCheckoutStylesOverlayQueryKey>
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
      ...getSettingsCheckoutStylesOverlayQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchSettingsCheckoutStylesOverlayMutationKey() {
  return ['settings', '/settings/checkout-styles-overlay', 'PATCH'] as const
}

export function getPatchSettingsCheckoutStylesOverlayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings)['checkout-styles-overlay']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings)['checkout-styles-overlay']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSettingsCheckoutStylesOverlayMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings)['checkout-styles-overlay']['$patch']>,
    ) {
      return parseResponse(client.settings['checkout-styles-overlay'].$patch(args, options))
    },
  })
}

export function usePatchSettingsCheckoutStylesOverlay<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['checkout-styles-overlay']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings)['checkout-styles-overlay']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSettingsCheckoutStylesOverlayMutationOptions<
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

export function getSettingsCheckoutUrlQueryKey() {
  return ['settings', '/settings/checkout-url'] as const
}

export function getSettingsCheckoutUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings)['checkout-url']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.settings)['checkout-url']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCheckoutUrlQueryKey>
  >({
    queryKey: getSettingsCheckoutUrlQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings['checkout-url'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsCheckoutUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings)['checkout-url']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['checkout-url']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCheckoutUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSettingsCheckoutUrlQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSettingsCheckoutUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings)['checkout-url']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['checkout-url']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCheckoutUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSettingsCheckoutUrlQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchSettingsCheckoutUrlMutationKey() {
  return ['settings', '/settings/checkout-url', 'PATCH'] as const
}

export function getPatchSettingsCheckoutUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings)['checkout-url']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings)['checkout-url']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSettingsCheckoutUrlMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.settings)['checkout-url']['$patch']>) {
      return parseResponse(client.settings['checkout-url'].$patch(args, options))
    },
  })
}

export function usePatchSettingsCheckoutUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['checkout-url']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings)['checkout-url']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSettingsCheckoutUrlMutationOptions<TError, TOnMutateResult>(
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

export function getClientTokensQueryKey(
  args: InferRequestType<(typeof client)['client-tokens']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['client-tokens', '/client-tokens', keyArgs] as const
}

export function getClientTokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['client-tokens']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['client-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['client-tokens']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientTokensQueryKey>
  >({
    queryKey: getClientTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['client-tokens'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClientTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['client-tokens']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['client-tokens']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['client-tokens']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClientTokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClientTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['client-tokens']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['client-tokens']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['client-tokens']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClientTokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostClientTokensMutationKey() {
  return ['client-tokens', '/client-tokens', 'POST'] as const
}

export function getPostClientTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['client-tokens']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['client-tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClientTokensMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['client-tokens']['$post']>) {
      return parseResponse(client['client-tokens'].$post(args, options))
    },
  })
}

export function usePostClientTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['client-tokens']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['client-tokens']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClientTokensMutationOptions<TError, TOnMutateResult>(
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

export function getClientTokensClientTokenIdQueryKey(
  args: InferRequestType<(typeof client)['client-tokens'][':client_token_id']['$get']>,
) {
  return ['client-tokens', '/client-tokens/:client_token_id', args] as const
}

export function getClientTokensClientTokenIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['client-tokens'][':client_token_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['client-tokens'][':client_token_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['client-tokens'][':client_token_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientTokensClientTokenIdQueryKey>
  >({
    queryKey: getClientTokensClientTokenIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['client-tokens'][':client_token_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClientTokensClientTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['client-tokens'][':client_token_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['client-tokens'][':client_token_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['client-tokens'][':client_token_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientTokensClientTokenIdQueryKey>
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
      ...getClientTokensClientTokenIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClientTokensClientTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['client-tokens'][':client_token_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['client-tokens'][':client_token_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['client-tokens'][':client_token_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientTokensClientTokenIdQueryKey>
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
      ...getClientTokensClientTokenIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchClientTokensClientTokenIdMutationKey() {
  return ['client-tokens', '/client-tokens/:client_token_id', 'PATCH'] as const
}

export function getPatchClientTokensClientTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['client-tokens'][':client_token_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['client-tokens'][':client_token_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchClientTokensClientTokenIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['client-tokens'][':client_token_id']['$patch']>,
    ) {
      return parseResponse(client['client-tokens'][':client_token_id'].$patch(args, options))
    },
  })
}

export function usePatchClientTokensClientTokenId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['client-tokens'][':client_token_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['client-tokens'][':client_token_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchClientTokensClientTokenIdMutationOptions<
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

export function getCountriesQueryKey() {
  return ['countries', '/countries'] as const
}

export function getCountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCountriesQueryKey>
  >({
    queryKey: getCountriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.countries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCountriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCountriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCurrenciesQueryKey() {
  return ['currencies', '/currencies'] as const
}

export function getCurrenciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCurrenciesQueryKey>
  >({
    queryKey: getCurrenciesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.currencies.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCurrenciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCurrenciesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCurrenciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCurrenciesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSettingsCurrencyConversionsQueryKey() {
  return ['settings', '/settings/currency-conversions'] as const
}

export function getSettingsCurrencyConversionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['currency-conversions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings)['currency-conversions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCurrencyConversionsQueryKey>
  >({
    queryKey: getSettingsCurrencyConversionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings['currency-conversions'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsCurrencyConversions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['currency-conversions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['currency-conversions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCurrencyConversionsQueryKey>
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
      ...getSettingsCurrencyConversionsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsCurrencyConversions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['currency-conversions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['currency-conversions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCurrencyConversionsQueryKey>
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
      ...getSettingsCurrencyConversionsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchSettingsCurrencyConversionsMutationKey() {
  return ['settings', '/settings/currency-conversions', 'PATCH'] as const
}

export function getPatchSettingsCurrencyConversionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings)['currency-conversions']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings)['currency-conversions']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSettingsCurrencyConversionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings)['currency-conversions']['$patch']>,
    ) {
      return parseResponse(client.settings['currency-conversions'].$patch(args, options))
    },
  })
}

export function usePatchSettingsCurrencyConversions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['currency-conversions']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings)['currency-conversions']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSettingsCurrencyConversionsMutationOptions<
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

export function getCustomersQueryKey(args: InferRequestType<typeof client.customers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers', keyArgs] as const
}

export function getCustomersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.customers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCustomersQueryKey>
  >({
    queryKey: getCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.customers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCustomersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.customers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCustomersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCustomersMutationKey() {
  return ['customers', '/customers', 'POST'] as const
}

export function getPostCustomersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>>,
    TError,
    InferRequestType<typeof client.customers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.customers.$post>) {
      return parseResponse(client.customers.$post(args, options))
    },
  })
}

export function usePostCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.customers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCustomersCustomerIdQueryKey(
  args: InferRequestType<(typeof client.customers)[':customer_id']['$get']>,
) {
  return ['customers', '/customers/:customer_id', args] as const
}

export function getCustomersCustomerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':customer_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':customer_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdQueryKey>
  >({
    queryKey: getCustomersCustomerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customer_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':customer_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.customers)[':customer_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersCustomerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCustomersCustomerIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':customer_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.customers)[':customer_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersCustomerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCustomersCustomerIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchCustomersCustomerIdMutationKey() {
  return ['customers', '/customers/:customer_id', 'PATCH'] as const
}

export function getPatchCustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers)[':customer_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCustomersCustomerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.customers)[':customer_id']['$patch']>) {
      return parseResponse(client.customers[':customer_id'].$patch(args, options))
    },
  })
}

export function usePatchCustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.customers)[':customer_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.customers)[':customer_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCustomersCustomerIdMutationOptions<TError, TOnMutateResult>(
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

export function getCustomersCustomerIdCreditBalancesQueryKey(
  args: InferRequestType<(typeof client.customers)[':customer_id']['credit-balances']['$get']>,
) {
  return ['customers', '/customers/:customer_id/credit-balances', args] as const
}

export function getCustomersCustomerIdCreditBalancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customer_id']['credit-balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['credit-balances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['credit-balances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdCreditBalancesQueryKey>
  >({
    queryKey: getCustomersCustomerIdCreditBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customer_id']['credit-balances'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCustomersCustomerIdCreditBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customer_id']['credit-balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['credit-balances']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.customers)[':customer_id']['credit-balances']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersCustomerIdCreditBalancesQueryKey>
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
      ...getCustomersCustomerIdCreditBalancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomersCustomerIdCreditBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customer_id']['credit-balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['credit-balances']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.customers)[':customer_id']['credit-balances']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersCustomerIdCreditBalancesQueryKey>
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
      ...getCustomersCustomerIdCreditBalancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCustomersCustomerIdAuthTokenMutationKey() {
  return ['customers', '/customers/:customer_id/auth-token', 'POST'] as const
}

export function getPostCustomersCustomerIdAuthTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['auth-token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers)[':customer_id']['auth-token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomersCustomerIdAuthTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customers)[':customer_id']['auth-token']['$post']>,
    ) {
      return parseResponse(client.customers[':customer_id']['auth-token'].$post(args, options))
    },
  })
}

export function usePostCustomersCustomerIdAuthToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.customers)[':customer_id']['auth-token']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.customers)[':customer_id']['auth-token']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomersCustomerIdAuthTokenMutationOptions<
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

export function getPostCustomersCustomerIdPortalSessionsMutationKey() {
  return ['customers', '/customers/:customer_id/portal-sessions', 'POST'] as const
}

export function getPostCustomersCustomerIdPortalSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['portal-sessions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers)[':customer_id']['portal-sessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomersCustomerIdPortalSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customers)[':customer_id']['portal-sessions']['$post']>,
    ) {
      return parseResponse(client.customers[':customer_id']['portal-sessions'].$post(args, options))
    },
  })
}

export function usePostCustomersCustomerIdPortalSessions<
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
                ReturnType<(typeof client.customers)[':customer_id']['portal-sessions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.customers)[':customer_id']['portal-sessions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomersCustomerIdPortalSessionsMutationOptions<
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

export function getDiscountGroupsQueryKey(
  args: InferRequestType<(typeof client)['discount-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['discount-groups', '/discount-groups', keyArgs] as const
}

export function getDiscountGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['discount-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['discount-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['discount-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscountGroupsQueryKey>
  >({
    queryKey: getDiscountGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['discount-groups'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDiscountGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['discount-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['discount-groups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['discount-groups']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscountGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDiscountGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDiscountGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['discount-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['discount-groups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['discount-groups']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscountGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDiscountGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDiscountGroupsMutationKey() {
  return ['discount-groups', '/discount-groups', 'POST'] as const
}

export function getPostDiscountGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['discount-groups']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['discount-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDiscountGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['discount-groups']['$post']>) {
      return parseResponse(client['discount-groups'].$post(args, options))
    },
  })
}

export function usePostDiscountGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['discount-groups']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['discount-groups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDiscountGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getDiscountGroupsDiscountGroupIdQueryKey(
  args: InferRequestType<(typeof client)['discount-groups'][':discount_group_id']['$get']>,
) {
  return ['discount-groups', '/discount-groups/:discount_group_id', args] as const
}

export function getDiscountGroupsDiscountGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['discount-groups'][':discount_group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['discount-groups'][':discount_group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['discount-groups'][':discount_group_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscountGroupsDiscountGroupIdQueryKey>
  >({
    queryKey: getDiscountGroupsDiscountGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['discount-groups'][':discount_group_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDiscountGroupsDiscountGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['discount-groups'][':discount_group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['discount-groups'][':discount_group_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['discount-groups'][':discount_group_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscountGroupsDiscountGroupIdQueryKey>
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
      ...getDiscountGroupsDiscountGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDiscountGroupsDiscountGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['discount-groups'][':discount_group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['discount-groups'][':discount_group_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['discount-groups'][':discount_group_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscountGroupsDiscountGroupIdQueryKey>
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
      ...getDiscountGroupsDiscountGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchDiscountGroupsDiscountGroupIdMutationKey() {
  return ['discount-groups', '/discount-groups/:discount_group_id', 'PATCH'] as const
}

export function getPatchDiscountGroupsDiscountGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['discount-groups'][':discount_group_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['discount-groups'][':discount_group_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDiscountGroupsDiscountGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['discount-groups'][':discount_group_id']['$patch']>,
    ) {
      return parseResponse(client['discount-groups'][':discount_group_id'].$patch(args, options))
    },
  })
}

export function usePatchDiscountGroupsDiscountGroupId<
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
                ReturnType<(typeof client)['discount-groups'][':discount_group_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['discount-groups'][':discount_group_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDiscountGroupsDiscountGroupIdMutationOptions<
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

export function getDiscountsQueryKey(args: InferRequestType<typeof client.discounts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['discounts', '/discounts', keyArgs] as const
}

export function getDiscountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.discounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDiscountsQueryKey>
  >({
    queryKey: getDiscountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDiscounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.discounts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDiscountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDiscountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDiscounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.discounts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDiscountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDiscountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDiscountsMutationKey() {
  return ['discounts', '/discounts', 'POST'] as const
}

export function getPostDiscountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discounts.$post>>>>>,
    TError,
    InferRequestType<typeof client.discounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDiscountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.discounts.$post>) {
      return parseResponse(client.discounts.$post(args, options))
    },
  })
}

export function usePostDiscounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.discounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDiscountsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDiscountsDiscountIdQueryKey(
  args: InferRequestType<(typeof client.discounts)[':discount_id']['$get']>,
) {
  return ['discounts', '/discounts/:discount_id', args] as const
}

export function getDiscountsDiscountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.discounts)[':discount_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.discounts)[':discount_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.discounts)[':discount_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscountsDiscountIdQueryKey>
  >({
    queryKey: getDiscountsDiscountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discounts[':discount_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDiscountsDiscountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.discounts)[':discount_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.discounts)[':discount_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.discounts)[':discount_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscountsDiscountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDiscountsDiscountIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDiscountsDiscountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.discounts)[':discount_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.discounts)[':discount_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.discounts)[':discount_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscountsDiscountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDiscountsDiscountIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchDiscountsDiscountIdMutationKey() {
  return ['discounts', '/discounts/:discount_id', 'PATCH'] as const
}

export function getPatchDiscountsDiscountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.discounts)[':discount_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.discounts)[':discount_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDiscountsDiscountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.discounts)[':discount_id']['$patch']>) {
      return parseResponse(client.discounts[':discount_id'].$patch(args, options))
    },
  })
}

export function usePatchDiscountsDiscountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.discounts)[':discount_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.discounts)[':discount_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDiscountsDiscountIdMutationOptions<TError, TOnMutateResult>(
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

export function getEventTypesQueryKey() {
  return ['event-types', '/event-types'] as const
}

export function getEventTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['event-types']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['event-types']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventTypesQueryKey>
  >({
    queryKey: getEventTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['event-types'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEventTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['event-types']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['event-types']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['event-types']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['event-types']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventsQueryKey(args: InferRequestType<typeof client.events.$get>) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events', keyArgs] as const
}

export function getEventsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >({
    queryKey: getEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIpsQueryKey() {
  return ['ips', '/ips'] as const
}

export function getIpsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpsQueryKey>
  >({
    queryKey: getIpsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ips.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIpsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIpsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMetricsExploreEntitiesQueryKey(
  args: InferRequestType<typeof client.metrics.explore.entities.$get>,
) {
  return ['metrics', '/metrics/explore/entities', args] as const
}

export function getMetricsExploreEntitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.explore.entities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.explore.entities.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metrics.explore.entities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsExploreEntitiesQueryKey>
  >({
    queryKey: getMetricsExploreEntitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.explore.entities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMetricsExploreEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.explore.entities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.explore.entities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metrics.explore.entities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsExploreEntitiesQueryKey>
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
      ...getMetricsExploreEntitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMetricsExploreEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.explore.entities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.explore.entities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metrics.explore.entities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsExploreEntitiesQueryKey>
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
      ...getMetricsExploreEntitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMetricsExploreMutationKey() {
  return ['metrics', '/metrics/explore', 'POST'] as const
}

export function getPostMetricsExploreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.explore.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.metrics.explore.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMetricsExploreMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.metrics.explore.$post>) {
      return parseResponse(client.metrics.explore.$post(args, options))
    },
  })
}

export function usePostMetricsExplore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.explore.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.metrics.explore.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetricsExploreMutationOptions<TError, TOnMutateResult>(
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

export function getMetricsMonthlyRecurringRevenueQueryKey(
  args: InferRequestType<(typeof client.metrics)['monthly-recurring-revenue']['$get']>,
) {
  return ['metrics', '/metrics/monthly-recurring-revenue', args] as const
}

export function getMetricsMonthlyRecurringRevenueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['monthly-recurring-revenue']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['monthly-recurring-revenue']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics)['monthly-recurring-revenue']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMonthlyRecurringRevenueQueryKey>
  >({
    queryKey: getMetricsMonthlyRecurringRevenueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics['monthly-recurring-revenue'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMetricsMonthlyRecurringRevenue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['monthly-recurring-revenue']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['monthly-recurring-revenue']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics)['monthly-recurring-revenue']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsMonthlyRecurringRevenueQueryKey>
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
      ...getMetricsMonthlyRecurringRevenueQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMetricsMonthlyRecurringRevenue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['monthly-recurring-revenue']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['monthly-recurring-revenue']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics)['monthly-recurring-revenue']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsMonthlyRecurringRevenueQueryKey>
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
      ...getMetricsMonthlyRecurringRevenueQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMetricsActiveSubscribersQueryKey(
  args: InferRequestType<(typeof client.metrics)['active-subscribers']['$get']>,
) {
  return ['metrics', '/metrics/active-subscribers', args] as const
}

export function getMetricsActiveSubscribersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['active-subscribers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['active-subscribers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics)['active-subscribers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsActiveSubscribersQueryKey>
  >({
    queryKey: getMetricsActiveSubscribersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics['active-subscribers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMetricsActiveSubscribers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['active-subscribers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['active-subscribers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics)['active-subscribers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsActiveSubscribersQueryKey>
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
      ...getMetricsActiveSubscribersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMetricsActiveSubscribers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['active-subscribers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['active-subscribers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics)['active-subscribers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsActiveSubscribersQueryKey>
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
      ...getMetricsActiveSubscribersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMetricsMonthlyRecurringRevenueChangeQueryKey(
  args: InferRequestType<(typeof client.metrics)['monthly-recurring-revenue-change']['$get']>,
) {
  return ['metrics', '/metrics/monthly-recurring-revenue-change', args] as const
}

export function getMetricsMonthlyRecurringRevenueChangeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['monthly-recurring-revenue-change']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['monthly-recurring-revenue-change']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics)['monthly-recurring-revenue-change']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMonthlyRecurringRevenueChangeQueryKey>
  >({
    queryKey: getMetricsMonthlyRecurringRevenueChangeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics['monthly-recurring-revenue-change'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMetricsMonthlyRecurringRevenueChange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['monthly-recurring-revenue-change']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['monthly-recurring-revenue-change']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.metrics)['monthly-recurring-revenue-change']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsMonthlyRecurringRevenueChangeQueryKey>
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
      ...getMetricsMonthlyRecurringRevenueChangeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMetricsMonthlyRecurringRevenueChange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['monthly-recurring-revenue-change']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['monthly-recurring-revenue-change']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.metrics)['monthly-recurring-revenue-change']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsMonthlyRecurringRevenueChangeQueryKey>
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
      ...getMetricsMonthlyRecurringRevenueChangeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMetricsRevenueQueryKey(
  args: InferRequestType<typeof client.metrics.revenue.$get>,
) {
  return ['metrics', '/metrics/revenue', args] as const
}

export function getMetricsRevenueQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.revenue.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.revenue.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.revenue.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsRevenueQueryKey>
  >({
    queryKey: getMetricsRevenueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.revenue.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMetricsRevenue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.revenue.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.revenue.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.revenue.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsRevenueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetricsRevenueQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetricsRevenue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.revenue.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.revenue.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.revenue.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsRevenueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetricsRevenueQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMetricsRefundsQueryKey(
  args: InferRequestType<typeof client.metrics.refunds.$get>,
) {
  return ['metrics', '/metrics/refunds', args] as const
}

export function getMetricsRefundsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.refunds.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.refunds.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.refunds.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsRefundsQueryKey>
  >({
    queryKey: getMetricsRefundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.refunds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMetricsRefunds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.refunds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.refunds.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.refunds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsRefundsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetricsRefundsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetricsRefunds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.refunds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.refunds.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.refunds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsRefundsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetricsRefundsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMetricsChargebacksQueryKey(
  args: InferRequestType<typeof client.metrics.chargebacks.$get>,
) {
  return ['metrics', '/metrics/chargebacks', args] as const
}

export function getMetricsChargebacksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.chargebacks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.chargebacks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.chargebacks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsChargebacksQueryKey>
  >({
    queryKey: getMetricsChargebacksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.chargebacks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMetricsChargebacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.chargebacks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.chargebacks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metrics.chargebacks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsChargebacksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetricsChargebacksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetricsChargebacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.chargebacks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.chargebacks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metrics.chargebacks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsChargebacksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetricsChargebacksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMetricsCheckoutConversionQueryKey(
  args: InferRequestType<(typeof client.metrics)['checkout-conversion']['$get']>,
) {
  return ['metrics', '/metrics/checkout-conversion', args] as const
}

export function getMetricsCheckoutConversionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['checkout-conversion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['checkout-conversion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics)['checkout-conversion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsCheckoutConversionQueryKey>
  >({
    queryKey: getMetricsCheckoutConversionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics['checkout-conversion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMetricsCheckoutConversion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['checkout-conversion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['checkout-conversion']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics)['checkout-conversion']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsCheckoutConversionQueryKey>
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
      ...getMetricsCheckoutConversionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMetricsCheckoutConversion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['checkout-conversion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['checkout-conversion']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics)['checkout-conversion']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsCheckoutConversionQueryKey>
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
      ...getMetricsCheckoutConversionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getNotificationSettingsQueryKey(
  args: InferRequestType<(typeof client)['notification-settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notification-settings', '/notification-settings', keyArgs] as const
}

export function getNotificationSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['notification-settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['notification-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['notification-settings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationSettingsQueryKey>
  >({
    queryKey: getNotificationSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['notification-settings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['notification-settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['notification-settings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['notification-settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotificationSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotificationSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['notification-settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['notification-settings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['notification-settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotificationSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNotificationSettingsMutationKey() {
  return ['notification-settings', '/notification-settings', 'POST'] as const
}

export function getPostNotificationSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['notification-settings']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['notification-settings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationSettingsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['notification-settings']['$post']>) {
      return parseResponse(client['notification-settings'].$post(args, options))
    },
  })
}

export function usePostNotificationSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['notification-settings']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['notification-settings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNotificationSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getNotificationSettingsNotificationSettingIdQueryKey(
  args: InferRequestType<
    (typeof client)['notification-settings'][':notification_setting_id']['$get']
  >,
) {
  return ['notification-settings', '/notification-settings/:notification_setting_id', args] as const
}

export function getNotificationSettingsNotificationSettingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['notification-settings'][':notification_setting_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['notification-settings'][':notification_setting_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['notification-settings'][':notification_setting_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationSettingsNotificationSettingIdQueryKey>
  >({
    queryKey: getNotificationSettingsNotificationSettingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['notification-settings'][':notification_setting_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationSettingsNotificationSettingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['notification-settings'][':notification_setting_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['notification-settings'][':notification_setting_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['notification-settings'][':notification_setting_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationSettingsNotificationSettingIdQueryKey>
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
      ...getNotificationSettingsNotificationSettingIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNotificationSettingsNotificationSettingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['notification-settings'][':notification_setting_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['notification-settings'][':notification_setting_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['notification-settings'][':notification_setting_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationSettingsNotificationSettingIdQueryKey>
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
      ...getNotificationSettingsNotificationSettingIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteNotificationSettingsNotificationSettingIdMutationKey() {
  return [
    'notification-settings',
    '/notification-settings/:notification_setting_id',
    'DELETE',
  ] as const
}

export function getDeleteNotificationSettingsNotificationSettingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['notification-settings'][':notification_setting_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['notification-settings'][':notification_setting_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationSettingsNotificationSettingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['notification-settings'][':notification_setting_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['notification-settings'][':notification_setting_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteNotificationSettingsNotificationSettingId<
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
                    (typeof client)['notification-settings'][':notification_setting_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['notification-settings'][':notification_setting_id']['$delete']
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
  const mutationDefaults = getDeleteNotificationSettingsNotificationSettingIdMutationOptions<
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

export function getPatchNotificationSettingsNotificationSettingIdMutationKey() {
  return [
    'notification-settings',
    '/notification-settings/:notification_setting_id',
    'PATCH',
  ] as const
}

export function getPatchNotificationSettingsNotificationSettingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['notification-settings'][':notification_setting_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['notification-settings'][':notification_setting_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchNotificationSettingsNotificationSettingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['notification-settings'][':notification_setting_id']['$patch']
      >,
    ) {
      return parseResponse(
        client['notification-settings'][':notification_setting_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchNotificationSettingsNotificationSettingId<
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
                  (typeof client)['notification-settings'][':notification_setting_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['notification-settings'][':notification_setting_id']['$patch']
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
  const mutationDefaults = getPatchNotificationSettingsNotificationSettingIdMutationOptions<
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

export function getNotificationsQueryKey(args: InferRequestType<typeof client.notifications.$get>) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications', keyArgs] as const
}

export function getNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.notifications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsQueryKey>
  >({
    queryKey: getNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotificationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotificationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNotificationsNotificationIdQueryKey(
  args: InferRequestType<(typeof client.notifications)[':notification_id']['$get']>,
) {
  return ['notifications', '/notifications/:notification_id', args] as const
}

export function getNotificationsNotificationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':notification_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':notification_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)[':notification_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsNotificationIdQueryKey>
  >({
    queryKey: getNotificationsNotificationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':notification_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationsNotificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':notification_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':notification_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':notification_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsNotificationIdQueryKey>
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
      ...getNotificationsNotificationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNotificationsNotificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':notification_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':notification_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':notification_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsNotificationIdQueryKey>
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
      ...getNotificationsNotificationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getNotificationsNotificationIdLogsQueryKey(
  args: InferRequestType<(typeof client.notifications)[':notification_id']['logs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications/:notification_id/logs', keyArgs] as const
}

export function getNotificationsNotificationIdLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':notification_id']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':notification_id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)[':notification_id']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsNotificationIdLogsQueryKey>
  >({
    queryKey: getNotificationsNotificationIdLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':notification_id'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationsNotificationIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':notification_id']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':notification_id']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':notification_id']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsNotificationIdLogsQueryKey>
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
      ...getNotificationsNotificationIdLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNotificationsNotificationIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':notification_id']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':notification_id']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':notification_id']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsNotificationIdLogsQueryKey>
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
      ...getNotificationsNotificationIdLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostNotificationsNotificationIdReplayMutationKey() {
  return ['notifications', '/notifications/:notification_id/replay', 'POST'] as const
}

export function getPostNotificationsNotificationIdReplayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)[':notification_id']['replay']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications)[':notification_id']['replay']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsNotificationIdReplayMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications)[':notification_id']['replay']['$post']>,
    ) {
      return parseResponse(client.notifications[':notification_id'].replay.$post(args, options))
    },
  })
}

export function usePostNotificationsNotificationIdReplay<
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
                ReturnType<(typeof client.notifications)[':notification_id']['replay']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications)[':notification_id']['replay']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNotificationsNotificationIdReplayMutationOptions<
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

export function getCustomersCustomerIdPaymentMethodsQueryKey(
  args: InferRequestType<(typeof client.customers)[':customer_id']['payment-methods']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:customer_id/payment-methods', keyArgs] as const
}

export function getCustomersCustomerIdPaymentMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customer_id']['payment-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['payment-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['payment-methods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdPaymentMethodsQueryKey>
  >({
    queryKey: getCustomersCustomerIdPaymentMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customer_id']['payment-methods'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCustomersCustomerIdPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customer_id']['payment-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['payment-methods']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.customers)[':customer_id']['payment-methods']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersCustomerIdPaymentMethodsQueryKey>
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
      ...getCustomersCustomerIdPaymentMethodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomersCustomerIdPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customer_id']['payment-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['payment-methods']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.customers)[':customer_id']['payment-methods']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersCustomerIdPaymentMethodsQueryKey>
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
      ...getCustomersCustomerIdPaymentMethodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryKey(
  args: InferRequestType<
    (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
  >,
) {
  return ['customers', '/customers/:customer_id/payment-methods/:payment_method_id', args] as const
}

export function getCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryKey>
  >({
    queryKey: getCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customer_id']['payment-methods'][':payment_method_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCustomersCustomerIdPaymentMethodsPaymentMethodId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryKey>
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
      ...getCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomersCustomerIdPaymentMethodsPaymentMethodId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryKey>
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
      ...getCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCustomersCustomerIdPaymentMethodsPaymentMethodIdMutationKey() {
  return [
    'customers',
    '/customers/:customer_id/payment-methods/:payment_method_id',
    'DELETE',
  ] as const
}

export function getDeleteCustomersCustomerIdPaymentMethodsPaymentMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomersCustomerIdPaymentMethodsPaymentMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.customers[':customer_id']['payment-methods'][':payment_method_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteCustomersCustomerIdPaymentMethodsPaymentMethodId<
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
                    (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$delete']
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
  const mutationDefaults = getDeleteCustomersCustomerIdPaymentMethodsPaymentMethodIdMutationOptions<
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

export function getPricesQueryKey(args: InferRequestType<typeof client.prices.$get>) {
  const { header: _, ...keyArgs } = args
  return ['prices', '/prices', keyArgs] as const
}

export function getPricesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prices.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.prices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPricesQueryKey>
  >({
    queryKey: getPricesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePrices<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prices.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.prices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prices.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPricesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPricesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePrices<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prices.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.prices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prices.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPricesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPricesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPricesMutationKey() {
  return ['prices', '/prices', 'POST'] as const
}

export function getPostPricesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prices.$post>>>>>,
    TError,
    InferRequestType<typeof client.prices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPricesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.prices.$post>) {
      return parseResponse(client.prices.$post(args, options))
    },
  })
}

export function usePostPrices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prices.$post>>>>>,
        TError,
        InferRequestType<typeof client.prices.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPricesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPricesPriceIdQueryKey(
  args: InferRequestType<(typeof client.prices)[':price_id']['$get']>,
) {
  return ['prices', '/prices/:price_id', args] as const
}

export function getPricesPriceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.prices)[':price_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prices)[':price_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.prices)[':price_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPricesPriceIdQueryKey>
  >({
    queryKey: getPricesPriceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prices[':price_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePricesPriceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.prices)[':price_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prices)[':price_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.prices)[':price_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPricesPriceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPricesPriceIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePricesPriceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.prices)[':price_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prices)[':price_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.prices)[':price_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPricesPriceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPricesPriceIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchPricesPriceIdMutationKey() {
  return ['prices', '/prices/:price_id', 'PATCH'] as const
}

export function getPatchPricesPriceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.prices)[':price_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.prices)[':price_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPricesPriceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.prices)[':price_id']['$patch']>) {
      return parseResponse(client.prices[':price_id'].$patch(args, options))
    },
  })
}

export function usePatchPricesPriceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.prices)[':price_id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.prices)[':price_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPricesPriceIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostPricingPreviewMutationKey() {
  return ['pricing-preview', '/pricing-preview', 'POST'] as const
}

export function getPostPricingPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['pricing-preview']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['pricing-preview']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPricingPreviewMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['pricing-preview']['$post']>) {
      return parseResponse(client['pricing-preview'].$post(args, options))
    },
  })
}

export function usePostPricingPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['pricing-preview']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['pricing-preview']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPricingPreviewMutationOptions<TError, TOnMutateResult>(
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

export function getProductsQueryKey(args: InferRequestType<typeof client.products.$get>) {
  const { header: _, ...keyArgs } = args
  return ['products', '/products', keyArgs] as const
}

export function getProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.products.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProductsQueryKey>
  >({
    queryKey: getProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.products.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProductsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.products.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProductsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProductsMutationKey() {
  return ['products', '/products', 'POST'] as const
}

export function getPostProductsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$post>>>>>,
    TError,
    InferRequestType<typeof client.products.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProductsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.products.$post>) {
      return parseResponse(client.products.$post(args, options))
    },
  })
}

export function usePostProducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.products.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProductsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProductsProductIdQueryKey(
  args: InferRequestType<(typeof client.products)[':product_id']['$get']>,
) {
  return ['products', '/products/:product_id', args] as const
}

export function getProductsProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':product_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products)[':product_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':product_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsProductIdQueryKey>
  >({
    queryKey: getProductsProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products[':product_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':product_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products)[':product_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.products)[':product_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsProductIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProductsProductIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':product_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products)[':product_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.products)[':product_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsProductIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProductsProductIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchProductsProductIdMutationKey() {
  return ['products', '/products/:product_id', 'PATCH'] as const
}

export function getPatchProductsProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':product_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.products)[':product_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchProductsProductIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.products)[':product_id']['$patch']>) {
      return parseResponse(client.products[':product_id'].$patch(args, options))
    },
  })
}

export function usePatchProductsProductId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.products)[':product_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.products)[':product_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchProductsProductIdMutationOptions<TError, TOnMutateResult>(
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

export function getReportsQueryKey(args: InferRequestType<typeof client.reports.$get>) {
  const { header: _, ...keyArgs } = args
  return ['reports', '/reports', keyArgs] as const
}

export function getReportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportsQueryKey>
  >({
    queryKey: getReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostReportsMutationKey() {
  return ['reports', '/reports', 'POST'] as const
}

export function getPostReportsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$post>>>>>,
    TError,
    InferRequestType<typeof client.reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reports.$post>) {
      return parseResponse(client.reports.$post(args, options))
    },
  })
}

export function usePostReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$post>>>>>,
        TError,
        InferRequestType<typeof client.reports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReportsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getReportsReportIdQueryKey(
  args: InferRequestType<(typeof client.reports)[':report_id']['$get']>,
) {
  return ['reports', '/reports/:report_id', args] as const
}

export function getReportsReportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':report_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports)[':report_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':report_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsReportIdQueryKey>
  >({
    queryKey: getReportsReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports[':report_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':report_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports)[':report_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':report_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsReportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReportsReportIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':report_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports)[':report_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':report_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsReportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReportsReportIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getReportsReportIdDownloadUrlQueryKey(
  args: InferRequestType<(typeof client.reports)[':report_id']['download-url']['$get']>,
) {
  return ['reports', '/reports/:report_id/download-url', args] as const
}

export function getReportsReportIdDownloadUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports)[':report_id']['download-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports)[':report_id']['download-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reports)[':report_id']['download-url']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsReportIdDownloadUrlQueryKey>
  >({
    queryKey: getReportsReportIdDownloadUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports[':report_id']['download-url'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useReportsReportIdDownloadUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports)[':report_id']['download-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports)[':report_id']['download-url']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reports)[':report_id']['download-url']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsReportIdDownloadUrlQueryKey>
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
      ...getReportsReportIdDownloadUrlQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReportsReportIdDownloadUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports)[':report_id']['download-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports)[':report_id']['download-url']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reports)[':report_id']['download-url']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsReportIdDownloadUrlQueryKey>
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
      ...getReportsReportIdDownloadUrlQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSettingsStatementDescriptorQueryKey() {
  return ['settings', '/settings/statement-descriptor'] as const
}

export function getSettingsStatementDescriptorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['statement-descriptor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings)['statement-descriptor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsStatementDescriptorQueryKey>
  >({
    queryKey: getSettingsStatementDescriptorQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings['statement-descriptor'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsStatementDescriptor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['statement-descriptor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['statement-descriptor']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsStatementDescriptorQueryKey>
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
      ...getSettingsStatementDescriptorQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsStatementDescriptor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings)['statement-descriptor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['statement-descriptor']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsStatementDescriptorQueryKey>
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
      ...getSettingsStatementDescriptorQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchSettingsStatementDescriptorMutationKey() {
  return ['settings', '/settings/statement-descriptor', 'PATCH'] as const
}

export function getPatchSettingsStatementDescriptorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings)['statement-descriptor']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings)['statement-descriptor']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSettingsStatementDescriptorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings)['statement-descriptor']['$patch']>,
    ) {
      return parseResponse(client.settings['statement-descriptor'].$patch(args, options))
    },
  })
}

export function usePatchSettingsStatementDescriptor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['statement-descriptor']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings)['statement-descriptor']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSettingsStatementDescriptorMutationOptions<
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

export function getSimulationTypesQueryKey() {
  return ['simulation-types', '/simulation-types'] as const
}

export function getSimulationTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['simulation-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['simulation-types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimulationTypesQueryKey>
  >({
    queryKey: getSimulationTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['simulation-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSimulationTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['simulation-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['simulation-types']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimulationTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSimulationTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSimulationTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['simulation-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['simulation-types']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimulationTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSimulationTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSimulationsQueryKey(args: InferRequestType<typeof client.simulations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['simulations', '/simulations', keyArgs] as const
}

export function getSimulationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.simulations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.simulations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.simulations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSimulationsQueryKey>
  >({
    queryKey: getSimulationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.simulations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSimulations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.simulations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.simulations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.simulations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSimulationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSimulationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSimulations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.simulations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.simulations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.simulations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSimulationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSimulationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSimulationsMutationKey() {
  return ['simulations', '/simulations', 'POST'] as const
}

export function getPostSimulationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.simulations.$post>>>>>,
    TError,
    InferRequestType<typeof client.simulations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.simulations.$post>) {
      return parseResponse(client.simulations.$post(args, options))
    },
  })
}

export function usePostSimulations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.simulations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.simulations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimulationsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSimulationsSimulationIdQueryKey(
  args: InferRequestType<(typeof client.simulations)[':simulation_id']['$get']>,
) {
  return ['simulations', '/simulations/:simulation_id', args] as const
}

export function getSimulationsSimulationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.simulations)[':simulation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimulationsSimulationIdQueryKey>
  >({
    queryKey: getSimulationsSimulationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.simulations[':simulation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSimulationsSimulationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.simulations)[':simulation_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimulationsSimulationIdQueryKey>
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
      ...getSimulationsSimulationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSimulationsSimulationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.simulations)[':simulation_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimulationsSimulationIdQueryKey>
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
      ...getSimulationsSimulationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchSimulationsSimulationIdMutationKey() {
  return ['simulations', '/simulations/:simulation_id', 'PATCH'] as const
}

export function getPatchSimulationsSimulationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.simulations)[':simulation_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSimulationsSimulationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.simulations)[':simulation_id']['$patch']>,
    ) {
      return parseResponse(client.simulations[':simulation_id'].$patch(args, options))
    },
  })
}

export function usePatchSimulationsSimulationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.simulations)[':simulation_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSimulationsSimulationIdMutationOptions<TError, TOnMutateResult>(
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

export function getSimulationsSimulationIdRunsQueryKey(
  args: InferRequestType<(typeof client.simulations)[':simulation_id']['runs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['simulations', '/simulations/:simulation_id/runs', keyArgs] as const
}

export function getSimulationsSimulationIdRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.simulations)[':simulation_id']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['runs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimulationsSimulationIdRunsQueryKey>
  >({
    queryKey: getSimulationsSimulationIdRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.simulations[':simulation_id'].runs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSimulationsSimulationIdRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.simulations)[':simulation_id']['runs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['runs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimulationsSimulationIdRunsQueryKey>
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
      ...getSimulationsSimulationIdRunsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSimulationsSimulationIdRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.simulations)[':simulation_id']['runs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['runs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimulationsSimulationIdRunsQueryKey>
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
      ...getSimulationsSimulationIdRunsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSimulationsSimulationIdRunsMutationKey() {
  return ['simulations', '/simulations/:simulation_id/runs', 'POST'] as const
}

export function getPostSimulationsSimulationIdRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['runs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.simulations)[':simulation_id']['runs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsSimulationIdRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.simulations)[':simulation_id']['runs']['$post']>,
    ) {
      return parseResponse(client.simulations[':simulation_id'].runs.$post(args, options))
    },
  })
}

export function usePostSimulationsSimulationIdRuns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['runs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.simulations)[':simulation_id']['runs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimulationsSimulationIdRunsMutationOptions<
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

export function getSimulationsSimulationIdRunsSimulationRunIdQueryKey(
  args: InferRequestType<
    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['$get']
  >,
) {
  return ['simulations', '/simulations/:simulation_id/runs/:simulation_run_id', args] as const
}

export function getSimulationsSimulationIdRunsSimulationRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimulationsSimulationIdRunsSimulationRunIdQueryKey>
  >({
    queryKey: getSimulationsSimulationIdRunsSimulationRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.simulations[':simulation_id'].runs[':simulation_run_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSimulationsSimulationIdRunsSimulationRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimulationsSimulationIdRunsSimulationRunIdQueryKey>
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
      ...getSimulationsSimulationIdRunsSimulationRunIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSimulationsSimulationIdRunsSimulationRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimulationsSimulationIdRunsSimulationRunIdQueryKey>
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
      ...getSimulationsSimulationIdRunsSimulationRunIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSimulationsSimulationIdRunsSimulationRunIdEventsQueryKey(
  args: InferRequestType<
    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'simulations',
    '/simulations/:simulation_id/runs/:simulation_run_id/events',
    keyArgs,
  ] as const
}

export function getSimulationsSimulationIdRunsSimulationRunIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimulationsSimulationIdRunsSimulationRunIdEventsQueryKey>
  >({
    queryKey: getSimulationsSimulationIdRunsSimulationRunIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.simulations[':simulation_id'].runs[':simulation_run_id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSimulationsSimulationIdRunsSimulationRunIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimulationsSimulationIdRunsSimulationRunIdEventsQueryKey>
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
      ...getSimulationsSimulationIdRunsSimulationRunIdEventsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSimulationsSimulationIdRunsSimulationRunIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimulationsSimulationIdRunsSimulationRunIdEventsQueryKey>
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
      ...getSimulationsSimulationIdRunsSimulationRunIdEventsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdQueryKey(
  args: InferRequestType<
    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['$get']
  >,
) {
  return [
    'simulations',
    '/simulations/:simulation_id/runs/:simulation_run_id/events/:simulation_event_id',
    args,
  ] as const
}

export function getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdQueryKey>
  >({
    queryKey: getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.simulations[':simulation_id'].runs[':simulation_run_id'].events[
          ':simulation_event_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdQueryKey
        >
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
      ...getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdQueryKey
        >
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
      ...getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdReplayMutationKey() {
  return [
    'simulations',
    '/simulations/:simulation_id/runs/:simulation_run_id/events/:simulation_event_id/replay',
    'POST',
  ] as const
}

export function getPostSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdReplayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['replay']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['replay']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdReplayMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['replay']['$post']
      >,
    ) {
      return parseResponse(
        client.simulations[':simulation_id'].runs[':simulation_run_id'].events[
          ':simulation_event_id'
        ].replay.$post(args, options),
      )
    },
  })
}

export function usePostSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdReplay<
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
                  (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['replay']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['replay']['$post']
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
    getPostSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdReplayMutationOptions<
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

export function getSubscriptionsSubscriptionIdHistoryQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['history']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:subscription_id/history', keyArgs] as const
}

export function getSubscriptionsSubscriptionIdHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdHistoryQueryKey>
  >({
    queryKey: getSubscriptionsSubscriptionIdHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':subscription_id'].history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionsSubscriptionIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['history']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.subscriptions)[':subscription_id']['history']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsSubscriptionIdHistoryQueryKey>
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
      ...getSubscriptionsSubscriptionIdHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionsSubscriptionIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['history']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.subscriptions)[':subscription_id']['history']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsSubscriptionIdHistoryQueryKey>
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
      ...getSubscriptionsSubscriptionIdHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSubscriptionsQueryKey(args: InferRequestType<typeof client.subscriptions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions', keyArgs] as const
}

export function getSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.subscriptions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsQueryKey>
  >({
    queryKey: getSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSubscriptionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSubscriptionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:subscription_id', args] as const
}

export function getSubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
  >({
    queryKey: getSubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':subscription_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
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
      ...getSubscriptionsSubscriptionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
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
      ...getSubscriptionsSubscriptionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchSubscriptionsSubscriptionIdMutationKey() {
  return ['subscriptions', '/subscriptions/:subscription_id', 'PATCH'] as const
}

export function getPatchSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['$patch']>,
    ) {
      return parseResponse(client.subscriptions[':subscription_id'].$patch(args, options))
    },
  })
}

export function usePatchSubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':subscription_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSubscriptionsSubscriptionIdMutationOptions<
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

export function getPostSubscriptionsSubscriptionIdCancelMutationKey() {
  return ['subscriptions', '/subscriptions/:subscription_id/cancel', 'POST'] as const
}

export function getPostSubscriptionsSubscriptionIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsSubscriptionIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.subscriptions[':subscription_id'].cancel.$post(args, options))
    },
  })
}

export function usePostSubscriptionsSubscriptionIdCancel<
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
                ReturnType<(typeof client.subscriptions)[':subscription_id']['cancel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':subscription_id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSubscriptionsSubscriptionIdCancelMutationOptions<
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

export function getPostSubscriptionsSubscriptionIdPauseMutationKey() {
  return ['subscriptions', '/subscriptions/:subscription_id/pause', 'POST'] as const
}

export function getPostSubscriptionsSubscriptionIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['pause']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsSubscriptionIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['pause']['$post']>,
    ) {
      return parseResponse(client.subscriptions[':subscription_id'].pause.$post(args, options))
    },
  })
}

export function usePostSubscriptionsSubscriptionIdPause<
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
                ReturnType<(typeof client.subscriptions)[':subscription_id']['pause']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':subscription_id']['pause']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSubscriptionsSubscriptionIdPauseMutationOptions<
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

export function getPostSubscriptionsSubscriptionIdResumeMutationKey() {
  return ['subscriptions', '/subscriptions/:subscription_id/resume', 'POST'] as const
}

export function getPostSubscriptionsSubscriptionIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['resume']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsSubscriptionIdResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['resume']['$post']>,
    ) {
      return parseResponse(client.subscriptions[':subscription_id'].resume.$post(args, options))
    },
  })
}

export function usePostSubscriptionsSubscriptionIdResume<
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
                ReturnType<(typeof client.subscriptions)[':subscription_id']['resume']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':subscription_id']['resume']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSubscriptionsSubscriptionIdResumeMutationOptions<
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

export function getPostSubscriptionsSubscriptionIdActivateMutationKey() {
  return ['subscriptions', '/subscriptions/:subscription_id/activate', 'POST'] as const
}

export function getPostSubscriptionsSubscriptionIdActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.subscriptions)[':subscription_id']['activate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsSubscriptionIdActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':subscription_id']['activate']['$post']
      >,
    ) {
      return parseResponse(client.subscriptions[':subscription_id'].activate.$post(args, options))
    },
  })
}

export function usePostSubscriptionsSubscriptionIdActivate<
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
                ReturnType<(typeof client.subscriptions)[':subscription_id']['activate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':subscription_id']['activate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSubscriptionsSubscriptionIdActivateMutationOptions<
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

export function getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionQueryKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription_id']['update-payment-method-transaction']['$get']
  >,
) {
  return [
    'subscriptions',
    '/subscriptions/:subscription_id/update-payment-method-transaction',
    args,
  ] as const
}

export function getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.subscriptions)[':subscription_id']['update-payment-method-transaction']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription_id']['update-payment-method-transaction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription_id']['update-payment-method-transaction']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionQueryKey>
  >({
    queryKey: getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':subscription_id']['update-payment-method-transaction'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionsSubscriptionIdUpdatePaymentMethodTransaction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.subscriptions)[':subscription_id']['update-payment-method-transaction']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription_id']['update-payment-method-transaction']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.subscriptions)[':subscription_id']['update-payment-method-transaction']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionQueryKey>
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
      ...getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionsSubscriptionIdUpdatePaymentMethodTransaction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.subscriptions)[':subscription_id']['update-payment-method-transaction']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription_id']['update-payment-method-transaction']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.subscriptions)[':subscription_id']['update-payment-method-transaction']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionQueryKey>
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
      ...getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchSubscriptionsSubscriptionIdPreviewMutationKey() {
  return ['subscriptions', '/subscriptions/:subscription_id/preview', 'PATCH'] as const
}

export function getPatchSubscriptionsSubscriptionIdPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.subscriptions)[':subscription_id']['preview']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['preview']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSubscriptionsSubscriptionIdPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':subscription_id']['preview']['$patch']
      >,
    ) {
      return parseResponse(client.subscriptions[':subscription_id'].preview.$patch(args, options))
    },
  })
}

export function usePatchSubscriptionsSubscriptionIdPreview<
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
                ReturnType<(typeof client.subscriptions)[':subscription_id']['preview']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':subscription_id']['preview']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSubscriptionsSubscriptionIdPreviewMutationOptions<
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

export function getPostSubscriptionsSubscriptionIdChargeMutationKey() {
  return ['subscriptions', '/subscriptions/:subscription_id/charge', 'POST'] as const
}

export function getPostSubscriptionsSubscriptionIdChargeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['charge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['charge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsSubscriptionIdChargeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['charge']['$post']>,
    ) {
      return parseResponse(client.subscriptions[':subscription_id'].charge.$post(args, options))
    },
  })
}

export function usePostSubscriptionsSubscriptionIdCharge<
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
                ReturnType<(typeof client.subscriptions)[':subscription_id']['charge']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':subscription_id']['charge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSubscriptionsSubscriptionIdChargeMutationOptions<
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

export function getPostSubscriptionsSubscriptionIdChargePreviewMutationKey() {
  return ['subscriptions', '/subscriptions/:subscription_id/charge/preview', 'POST'] as const
}

export function getPostSubscriptionsSubscriptionIdChargePreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscription_id']['charge']['preview']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.subscriptions)[':subscription_id']['charge']['preview']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsSubscriptionIdChargePreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':subscription_id']['charge']['preview']['$post']
      >,
    ) {
      return parseResponse(
        client.subscriptions[':subscription_id'].charge.preview.$post(args, options),
      )
    },
  })
}

export function usePostSubscriptionsSubscriptionIdChargePreview<
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
                  (typeof client.subscriptions)[':subscription_id']['charge']['preview']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.subscriptions)[':subscription_id']['charge']['preview']['$post']
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
  const mutationDefaults = getPostSubscriptionsSubscriptionIdChargePreviewMutationOptions<
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

export function getSettingsTaxQueryKey() {
  return ['settings', '/settings/tax'] as const
}

export function getSettingsTaxQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tax.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tax.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSettingsTaxQueryKey>
  >({
    queryKey: getSettingsTaxQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.tax.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSettingsTax<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tax.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tax.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsTaxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSettingsTaxQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSettingsTax<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tax.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tax.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsTaxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSettingsTaxQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchSettingsTaxMutationKey() {
  return ['settings', '/settings/tax', 'PATCH'] as const
}

export function getPatchSettingsTaxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tax.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.settings.tax.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchSettingsTaxMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.tax.$patch>) {
      return parseResponse(client.settings.tax.$patch(args, options))
    },
  })
}

export function usePatchSettingsTax<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tax.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.settings.tax.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSettingsTaxMutationOptions<TError, TOnMutateResult>(
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

export function getTransactionsQueryKey(args: InferRequestType<typeof client.transactions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['transactions', '/transactions', keyArgs] as const
}

export function getTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.transactions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransactionsQueryKey>
  >({
    queryKey: getTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTransactionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTransactionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTransactionsMutationKey() {
  return ['transactions', '/transactions', 'POST'] as const
}

export function getPostTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transactions.$post>) {
      return parseResponse(client.transactions.$post(args, options))
    },
  })
}

export function usePostTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.transactions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionsMutationOptions<TError, TOnMutateResult>(
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

export function getTransactionsTransactionIdQueryKey(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>,
) {
  return ['transactions', '/transactions/:transaction_id', args] as const
}

export function getTransactionsTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsTransactionIdQueryKey>
  >({
    queryKey: getTransactionsTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactions[':transaction_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsTransactionIdQueryKey>
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
      ...getTransactionsTransactionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsTransactionIdQueryKey>
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
      ...getTransactionsTransactionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchTransactionsTransactionIdMutationKey() {
  return ['transactions', '/transactions/:transaction_id', 'PATCH'] as const
}

export function getPatchTransactionsTransactionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transactions)[':transaction_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTransactionsTransactionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transactions)[':transaction_id']['$patch']>,
    ) {
      return parseResponse(client.transactions[':transaction_id'].$patch(args, options))
    },
  })
}

export function usePatchTransactionsTransactionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.transactions)[':transaction_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTransactionsTransactionIdMutationOptions<
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

export function getPostTransactionsPreviewMutationKey() {
  return ['transactions', '/transactions/preview', 'POST'] as const
}

export function getPostTransactionsPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactions.preview.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transactions.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsPreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transactions.preview.$post>) {
      return parseResponse(client.transactions.preview.$post(args, options))
    },
  })
}

export function usePostTransactionsPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transactions.preview.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transactions.preview.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionsPreviewMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransactionsTransactionIdReviseMutationKey() {
  return ['transactions', '/transactions/:transaction_id/revise', 'POST'] as const
}

export function getPostTransactionsTransactionIdReviseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['revise']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transactions)[':transaction_id']['revise']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsTransactionIdReviseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transactions)[':transaction_id']['revise']['$post']>,
    ) {
      return parseResponse(client.transactions[':transaction_id'].revise.$post(args, options))
    },
  })
}

export function usePostTransactionsTransactionIdRevise<
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
                ReturnType<(typeof client.transactions)[':transaction_id']['revise']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.transactions)[':transaction_id']['revise']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionsTransactionIdReviseMutationOptions<
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

export function getTransactionsTransactionIdInvoiceQueryKey(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['invoice']['$get']>,
) {
  return ['transactions', '/transactions/:transaction_id/invoice', args] as const
}

export function getTransactionsTransactionIdInvoiceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['invoice']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['invoice']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['invoice']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsTransactionIdInvoiceQueryKey>
  >({
    queryKey: getTransactionsTransactionIdInvoiceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactions[':transaction_id'].invoice.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTransactionsTransactionIdInvoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['invoice']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['invoice']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.transactions)[':transaction_id']['invoice']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsTransactionIdInvoiceQueryKey>
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
      ...getTransactionsTransactionIdInvoiceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTransactionsTransactionIdInvoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['invoice']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['invoice']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.transactions)[':transaction_id']['invoice']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsTransactionIdInvoiceQueryKey>
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
      ...getTransactionsTransactionIdInvoiceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVerificationsQueryKey(args: InferRequestType<typeof client.verifications.$get>) {
  const { header: _, ...keyArgs } = args
  return ['verifications', '/verifications', keyArgs] as const
}

export function getVerificationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.verifications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVerificationsQueryKey>
  >({
    queryKey: getVerificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.verifications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVerifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.verifications.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVerificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVerificationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVerifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.verifications.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVerificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVerificationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVerificationsVerificationIdQueryKey(
  args: InferRequestType<(typeof client.verifications)[':verification_id']['$get']>,
) {
  return ['verifications', '/verifications/:verification_id', args] as const
}

export function getVerificationsVerificationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.verifications)[':verification_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.verifications)[':verification_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.verifications)[':verification_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVerificationsVerificationIdQueryKey>
  >({
    queryKey: getVerificationsVerificationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.verifications[':verification_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVerificationsVerificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.verifications)[':verification_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.verifications)[':verification_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.verifications)[':verification_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVerificationsVerificationIdQueryKey>
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
      ...getVerificationsVerificationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVerificationsVerificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.verifications)[':verification_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.verifications)[':verification_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.verifications)[':verification_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVerificationsVerificationIdQueryKey>
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
      ...getVerificationsVerificationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
