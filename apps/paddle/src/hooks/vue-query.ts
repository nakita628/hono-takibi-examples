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

export function getAccountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          ReturnType<typeof getAccountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.account.$patch>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customer_id']['addresses']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['customers', '/customers/:customer_id/addresses', keyArgs] as const
}

export function getCustomersCustomerIdAddressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customer_id']['addresses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersCustomerIdAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':customer_id'].addresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customer_id']['addresses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customer_id']['addresses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomersCustomerIdAddressesQueryKey>
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
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['addresses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdAddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersCustomerIdAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':customer_id'].addresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customer_id']['addresses'][':address_id']['$get']>
  >,
) {
  return ['customers', '/customers/:customer_id/addresses/:address_id', toValue(args)] as const
}

export function getCustomersCustomerIdAddressesAddressIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customer_id']['addresses'][':address_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersCustomerIdAddressesAddressIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':customer_id'].addresses[':address_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customer_id']['addresses'][':address_id']['$get']>
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
                    (typeof client.customers)[':customer_id']['addresses'][':address_id']['$get']
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
                    (typeof client.customers)[':customer_id']['addresses'][':address_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersCustomerIdAddressesAddressIdQueryKey>
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
              (typeof client.customers)[':customer_id']['addresses'][':address_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdAddressesAddressIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersCustomerIdAddressesAddressIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':customer_id'].addresses[':address_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getAdjustmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.adjustments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['adjustments', '/adjustments', keyArgs] as const
}

export function getAdjustmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.adjustments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdjustmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adjustments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdjustments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adjustments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.adjustments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adjustments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adjustments.$get>>>>
          >,
          ReturnType<typeof getAdjustmentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adjustments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdjustmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdjustmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adjustments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adjustments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.adjustments.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adjustments)[':adjustment_id']['credit-note']['$get']>
  >,
) {
  return ['adjustments', '/adjustments/:adjustment_id/credit-note', toValue(args)] as const
}

export function getAdjustmentsAdjustmentIdCreditNoteQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adjustments)[':adjustment_id']['credit-note']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdjustmentsAdjustmentIdCreditNoteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adjustments[':adjustment_id']['credit-note'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adjustments)[':adjustment_id']['credit-note']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.adjustments)[':adjustment_id']['credit-note']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdjustmentsAdjustmentIdCreditNoteQueryKey>
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
          Awaited<ReturnType<(typeof client.adjustments)[':adjustment_id']['credit-note']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdjustmentsAdjustmentIdCreditNoteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdjustmentsAdjustmentIdCreditNoteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adjustments[':adjustment_id']['credit-note'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsBalanceCurrencyQueryKey() {
  return ['settings', '/settings/balance-currency'] as const
}

export function getSettingsBalanceCurrencyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsBalanceCurrencyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings['balance-currency'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings)['balance-currency']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSettingsBalanceCurrencyQueryKey>
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
          Awaited<ReturnType<(typeof client.settings)['balance-currency']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsBalanceCurrencyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsBalanceCurrencyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings['balance-currency'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customer_id']['businesses']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['customers', '/customers/:customer_id/businesses', keyArgs] as const
}

export function getCustomersCustomerIdBusinessesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customer_id']['businesses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersCustomerIdBusinessesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':customer_id'].businesses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customer_id']['businesses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customer_id']['businesses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomersCustomerIdBusinessesQueryKey>
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
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['businesses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdBusinessesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersCustomerIdBusinessesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':customer_id'].businesses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.customers)[':customer_id']['businesses']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':customer_id']['businesses']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customers)[':customer_id']['businesses'][':business_id']['$get']
    >
  >,
) {
  return ['customers', '/customers/:customer_id/businesses/:business_id', toValue(args)] as const
}

export function getCustomersCustomerIdBusinessesBusinessIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customers)[':customer_id']['businesses'][':business_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersCustomerIdBusinessesBusinessIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':customer_id'].businesses[':business_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customers)[':customer_id']['businesses'][':business_id']['$get']
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
                    (typeof client.customers)[':customer_id']['businesses'][':business_id']['$get']
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
                    (typeof client.customers)[':customer_id']['businesses'][':business_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersCustomerIdBusinessesBusinessIdQueryKey>
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
              (typeof client.customers)[':customer_id']['businesses'][':business_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdBusinessesBusinessIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersCustomerIdBusinessesBusinessIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':customer_id'].businesses[':business_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['checkout-domains']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['checkout-domains', '/checkout-domains', keyArgs] as const
}

export function getCheckoutDomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['checkout-domains']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCheckoutDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['checkout-domains'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCheckoutDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['checkout-domains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['checkout-domains']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['checkout-domains']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['checkout-domains']['$get']>>>
            >
          >,
          ReturnType<typeof getCheckoutDomainsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['checkout-domains']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCheckoutDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCheckoutDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['checkout-domains'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCheckoutDomainsDomainIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['checkout-domains'][':domain_id']['$get']>
  >,
) {
  return ['checkout-domains', '/checkout-domains/:domain_id', toValue(args)] as const
}

export function getCheckoutDomainsDomainIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['checkout-domains'][':domain_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCheckoutDomainsDomainIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['checkout-domains'][':domain_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['checkout-domains'][':domain_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['checkout-domains'][':domain_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCheckoutDomainsDomainIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['checkout-domains'][':domain_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCheckoutDomainsDomainIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCheckoutDomainsDomainIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['checkout-domains'][':domain_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSettingsCheckoutFeaturesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsCheckoutFeaturesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings['checkout-features'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings)['checkout-features']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSettingsCheckoutFeaturesQueryKey>
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
          Awaited<ReturnType<(typeof client.settings)['checkout-features']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCheckoutFeaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsCheckoutFeaturesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings['checkout-features'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSettingsCheckoutPaymentMethodsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsCheckoutPaymentMethodsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings['checkout-payment-methods'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings)['checkout-payment-methods']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSettingsCheckoutPaymentMethodsQueryKey>
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
          Awaited<ReturnType<(typeof client.settings)['checkout-payment-methods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCheckoutPaymentMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsCheckoutPaymentMethodsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings['checkout-payment-methods'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSettingsCheckoutRecoveryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsCheckoutRecoveryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings['checkout-recovery'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings)['checkout-recovery']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSettingsCheckoutRecoveryQueryKey>
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
          Awaited<ReturnType<(typeof client.settings)['checkout-recovery']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCheckoutRecoveryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsCheckoutRecoveryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings['checkout-recovery'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSettingsCheckoutStylesOverlayQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsCheckoutStylesOverlayQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings['checkout-styles-overlay'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings)['checkout-styles-overlay']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSettingsCheckoutStylesOverlayQueryKey>
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
          Awaited<ReturnType<(typeof client.settings)['checkout-styles-overlay']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCheckoutStylesOverlayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsCheckoutStylesOverlayQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings['checkout-styles-overlay'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSettingsCheckoutUrlQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsCheckoutUrlQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings['checkout-url'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings)['checkout-url']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSettingsCheckoutUrlQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.settings)['checkout-url']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCheckoutUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsCheckoutUrlQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings['checkout-url'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['client-tokens']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['client-tokens', '/client-tokens', keyArgs] as const
}

export function getClientTokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['client-tokens']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['client-tokens'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClientTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['client-tokens']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['client-tokens']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['client-tokens']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['client-tokens']['$get']>>>
            >
          >,
          ReturnType<typeof getClientTokensQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['client-tokens']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['client-tokens'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['client-tokens'][':client_token_id']['$get']>
  >,
) {
  return ['client-tokens', '/client-tokens/:client_token_id', toValue(args)] as const
}

export function getClientTokensClientTokenIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['client-tokens'][':client_token_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientTokensClientTokenIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['client-tokens'][':client_token_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['client-tokens'][':client_token_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['client-tokens'][':client_token_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClientTokensClientTokenIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['client-tokens'][':client_token_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientTokensClientTokenIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientTokensClientTokenIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['client-tokens'][':client_token_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getCountriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCountriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.countries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
          >,
          ReturnType<typeof getCountriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCountriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.countries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCurrenciesQueryKey() {
  return ['currencies', '/currencies'] as const
}

export function getCurrenciesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCurrenciesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.currencies.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.$get>>>>
          >,
          ReturnType<typeof getCurrenciesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCurrenciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCurrenciesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.currencies.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsCurrencyConversionsQueryKey() {
  return ['settings', '/settings/currency-conversions'] as const
}

export function getSettingsCurrencyConversionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsCurrencyConversionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings['currency-conversions'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings)['currency-conversions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSettingsCurrencyConversionsQueryKey>
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
          Awaited<ReturnType<(typeof client.settings)['currency-conversions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCurrencyConversionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsCurrencyConversionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings['currency-conversions'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getCustomersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customers.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['customers', '/customers', keyArgs] as const
}

export function getCustomersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
          >,
          ReturnType<typeof getCustomersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.customers.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers)[':customer_id']['$get']>>,
) {
  return ['customers', '/customers/:customer_id', toValue(args)] as const
}

export function getCustomersCustomerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers)[':customer_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersCustomerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':customer_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':customer_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers)[':customer_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customer_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomersCustomerIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':customer_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersCustomerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':customer_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customer_id']['credit-balances']['$get']>
  >,
) {
  return ['customers', '/customers/:customer_id/credit-balances', toValue(args)] as const
}

export function getCustomersCustomerIdCreditBalancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customer_id']['credit-balances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersCustomerIdCreditBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':customer_id']['credit-balances'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customer_id']['credit-balances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.customers)[':customer_id']['credit-balances']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCustomersCustomerIdCreditBalancesQueryKey>
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
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['credit-balances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdCreditBalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersCustomerIdCreditBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':customer_id']['credit-balances'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.customers)[':customer_id']['auth-token']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':customer_id']['auth-token']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['discount-groups']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['discount-groups', '/discount-groups', keyArgs] as const
}

export function getDiscountGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['discount-groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscountGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['discount-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscountGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['discount-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['discount-groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['discount-groups']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['discount-groups']['$get']>>>
            >
          >,
          ReturnType<typeof getDiscountGroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['discount-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscountGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscountGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['discount-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['discount-groups'][':discount_group_id']['$get']>
  >,
) {
  return ['discount-groups', '/discount-groups/:discount_group_id', toValue(args)] as const
}

export function getDiscountGroupsDiscountGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['discount-groups'][':discount_group_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscountGroupsDiscountGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['discount-groups'][':discount_group_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['discount-groups'][':discount_group_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['discount-groups'][':discount_group_id']['$get']>
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
                  ReturnType<(typeof client)['discount-groups'][':discount_group_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDiscountGroupsDiscountGroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['discount-groups'][':discount_group_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscountGroupsDiscountGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscountGroupsDiscountGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['discount-groups'][':discount_group_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getDiscountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discounts.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['discounts', '/discounts', keyArgs] as const
}

export function getDiscountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discounts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDiscounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discounts.$get>>>>
          >,
          ReturnType<typeof getDiscountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDiscountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discounts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.discounts.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.discounts)[':discount_id']['$get']>>,
) {
  return ['discounts', '/discounts/:discount_id', toValue(args)] as const
}

export function getDiscountsDiscountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.discounts)[':discount_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscountsDiscountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discounts[':discount_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscountsDiscountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.discounts)[':discount_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.discounts)[':discount_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discounts)[':discount_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDiscountsDiscountIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.discounts)[':discount_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscountsDiscountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscountsDiscountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discounts[':discount_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getEventTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEventTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['event-types'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEventTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['event-types']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['event-types']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['event-types']['$get']>>>
            >
          >,
          ReturnType<typeof getEventTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['event-types']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEventTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['event-types'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['events', '/events', keyArgs] as const
}

export function getEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          ReturnType<typeof getEventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIpsQueryKey() {
  return ['ips', '/ips'] as const
}

export function getIpsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIpsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ips.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
          ReturnType<typeof getIpsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIpsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ips.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsExploreEntitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.explore.entities.$get>>,
) {
  return ['metrics', '/metrics/explore/entities', toValue(args)] as const
}

export function getMetricsExploreEntitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.explore.entities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsExploreEntitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.explore.entities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsExploreEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.explore.entities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.explore.entities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.explore.entities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.explore.entities.$get>>>
            >
          >,
          ReturnType<typeof getMetricsExploreEntitiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.metrics.explore.entities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsExploreEntitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsExploreEntitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.explore.entities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.explore.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.metrics.explore.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics)['monthly-recurring-revenue']['$get']>
  >,
) {
  return ['metrics', '/metrics/monthly-recurring-revenue', toValue(args)] as const
}

export function getMetricsMonthlyRecurringRevenueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics)['monthly-recurring-revenue']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsMonthlyRecurringRevenueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics['monthly-recurring-revenue'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics)['monthly-recurring-revenue']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['monthly-recurring-revenue']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsMonthlyRecurringRevenueQueryKey>
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
          Awaited<ReturnType<(typeof client.metrics)['monthly-recurring-revenue']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMonthlyRecurringRevenueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsMonthlyRecurringRevenueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics['monthly-recurring-revenue'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsActiveSubscribersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['active-subscribers']['$get']>>,
) {
  return ['metrics', '/metrics/active-subscribers', toValue(args)] as const
}

export function getMetricsActiveSubscribersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['active-subscribers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsActiveSubscribersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics['active-subscribers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['active-subscribers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['active-subscribers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsActiveSubscribersQueryKey>
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
          Awaited<ReturnType<(typeof client.metrics)['active-subscribers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsActiveSubscribersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsActiveSubscribersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics['active-subscribers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsMonthlyRecurringRevenueChangeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics)['monthly-recurring-revenue-change']['$get']>
  >,
) {
  return ['metrics', '/metrics/monthly-recurring-revenue-change', toValue(args)] as const
}

export function getMetricsMonthlyRecurringRevenueChangeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics)['monthly-recurring-revenue-change']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsMonthlyRecurringRevenueChangeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics['monthly-recurring-revenue-change'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics)['monthly-recurring-revenue-change']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.metrics)['monthly-recurring-revenue-change']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMetricsMonthlyRecurringRevenueChangeQueryKey>
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
          Awaited<ReturnType<(typeof client.metrics)['monthly-recurring-revenue-change']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMonthlyRecurringRevenueChangeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsMonthlyRecurringRevenueChangeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics['monthly-recurring-revenue-change'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsRevenueQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.revenue.$get>>,
) {
  return ['metrics', '/metrics/revenue', toValue(args)] as const
}

export function getMetricsRevenueQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.revenue.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsRevenueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.revenue.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsRevenue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.revenue.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.revenue.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.revenue.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.revenue.$get>>>
            >
          >,
          ReturnType<typeof getMetricsRevenueQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.revenue.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsRevenueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsRevenueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.revenue.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsRefundsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.refunds.$get>>,
) {
  return ['metrics', '/metrics/refunds', toValue(args)] as const
}

export function getMetricsRefundsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.refunds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsRefundsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.refunds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsRefunds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.refunds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.refunds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.refunds.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.refunds.$get>>>
            >
          >,
          ReturnType<typeof getMetricsRefundsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.refunds.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsRefundsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsRefundsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.refunds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsChargebacksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.chargebacks.$get>>,
) {
  return ['metrics', '/metrics/chargebacks', toValue(args)] as const
}

export function getMetricsChargebacksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.chargebacks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsChargebacksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.chargebacks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsChargebacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.chargebacks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.chargebacks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.chargebacks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.chargebacks.$get>>>
            >
          >,
          ReturnType<typeof getMetricsChargebacksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.chargebacks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsChargebacksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsChargebacksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.chargebacks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsCheckoutConversionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['checkout-conversion']['$get']>>,
) {
  return ['metrics', '/metrics/checkout-conversion', toValue(args)] as const
}

export function getMetricsCheckoutConversionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['checkout-conversion']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsCheckoutConversionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics['checkout-conversion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['checkout-conversion']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['checkout-conversion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsCheckoutConversionQueryKey>
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
          Awaited<ReturnType<(typeof client.metrics)['checkout-conversion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsCheckoutConversionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsCheckoutConversionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics['checkout-conversion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['notification-settings']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notification-settings', '/notification-settings', keyArgs] as const
}

export function getNotificationSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['notification-settings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['notification-settings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['notification-settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['notification-settings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['notification-settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationSettingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['notification-settings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['notification-settings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['notification-settings'][':notification_setting_id']['$get']>
  >,
) {
  return [
    'notification-settings',
    '/notification-settings/:notification_setting_id',
    toValue(args),
  ] as const
}

export function getNotificationSettingsNotificationSettingIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['notification-settings'][':notification_setting_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationSettingsNotificationSettingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['notification-settings'][':notification_setting_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['notification-settings'][':notification_setting_id']['$get']>
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
                    (typeof client)['notification-settings'][':notification_setting_id']['$get']
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
                    (typeof client)['notification-settings'][':notification_setting_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNotificationSettingsNotificationSettingIdQueryKey>
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
            ReturnType<(typeof client)['notification-settings'][':notification_setting_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationSettingsNotificationSettingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationSettingsNotificationSettingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['notification-settings'][':notification_setting_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getNotificationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notifications', '/notifications', keyArgs] as const
}

export function getNotificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
          >,
          ReturnType<typeof getNotificationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsNotificationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':notification_id']['$get']>
  >,
) {
  return ['notifications', '/notifications/:notification_id', toValue(args)] as const
}

export function getNotificationsNotificationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':notification_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsNotificationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':notification_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':notification_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':notification_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationsNotificationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.notifications)[':notification_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsNotificationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsNotificationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':notification_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsNotificationIdLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':notification_id']['logs']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notifications', '/notifications/:notification_id/logs', keyArgs] as const
}

export function getNotificationsNotificationIdLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':notification_id']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsNotificationIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':notification_id'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':notification_id']['logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.notifications)[':notification_id']['logs']['$get']>
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
                  ReturnType<(typeof client.notifications)[':notification_id']['logs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsNotificationIdLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.notifications)[':notification_id']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsNotificationIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsNotificationIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':notification_id'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customer_id']['payment-methods']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['customers', '/customers/:customer_id/payment-methods', keyArgs] as const
}

export function getCustomersCustomerIdPaymentMethodsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customer_id']['payment-methods']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersCustomerIdPaymentMethodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':customer_id']['payment-methods'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customer_id']['payment-methods']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.customers)[':customer_id']['payment-methods']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCustomersCustomerIdPaymentMethodsQueryKey>
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
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['payment-methods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdPaymentMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersCustomerIdPaymentMethodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':customer_id']['payment-methods'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
    >
  >,
) {
  return [
    'customers',
    '/customers/:customer_id/payment-methods/:payment_method_id',
    toValue(args),
  ] as const
}

export function getCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':customer_id']['payment-methods'][':payment_method_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
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
                    (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
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
                    (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryKey>
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
              (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':customer_id']['payment-methods'][':payment_method_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getPricesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.prices.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['prices', '/prices', keyArgs] as const
}

export function getPricesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.prices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPricesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.prices.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePrices<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prices.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.prices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prices.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prices.$get>>>>>,
          ReturnType<typeof getPricesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPricesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPricesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.prices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.prices.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.prices)[':price_id']['$get']>>,
) {
  return ['prices', '/prices/:price_id', toValue(args)] as const
}

export function getPricesPriceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.prices)[':price_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPricesPriceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.prices[':price_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePricesPriceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.prices)[':price_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.prices)[':price_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.prices)[':price_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.prices)[':price_id']['$get']>>>
            >
          >,
          ReturnType<typeof getPricesPriceIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.prices)[':price_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPricesPriceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPricesPriceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.prices[':price_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.prices)[':price_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.prices)[':price_id']['$patch']>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getProductsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['products', '/products', keyArgs] as const
}

export function getProductsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
          >,
          ReturnType<typeof getProductsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.products.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':product_id']['$get']>>,
) {
  return ['products', '/products/:product_id', toValue(args)] as const
}

export function getProductsProductIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':product_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products[':product_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':product_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':product_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products)[':product_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductsProductIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':product_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products[':product_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['reports', '/reports', keyArgs] as const
}

export function getReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
          >,
          ReturnType<typeof getReportsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.reports.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reports)[':report_id']['$get']>>,
) {
  return ['reports', '/reports/:report_id', toValue(args)] as const
}

export function getReportsReportIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reports)[':report_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsReportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports[':report_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':report_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reports)[':report_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports)[':report_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports)[':report_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportsReportIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':report_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsReportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsReportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports[':report_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsReportIdDownloadUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reports)[':report_id']['download-url']['$get']>
  >,
) {
  return ['reports', '/reports/:report_id/download-url', toValue(args)] as const
}

export function getReportsReportIdDownloadUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reports)[':report_id']['download-url']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsReportIdDownloadUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports[':report_id']['download-url'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reports)[':report_id']['download-url']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports)[':report_id']['download-url']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportsReportIdDownloadUrlQueryKey>
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
          Awaited<ReturnType<(typeof client.reports)[':report_id']['download-url']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsReportIdDownloadUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsReportIdDownloadUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports[':report_id']['download-url'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsStatementDescriptorQueryKey() {
  return ['settings', '/settings/statement-descriptor'] as const
}

export function getSettingsStatementDescriptorQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsStatementDescriptorQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings['statement-descriptor'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings)['statement-descriptor']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSettingsStatementDescriptorQueryKey>
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
          Awaited<ReturnType<(typeof client.settings)['statement-descriptor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsStatementDescriptorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsStatementDescriptorQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings['statement-descriptor'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSimulationTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSimulationTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['simulation-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['simulation-types']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['simulation-types']['$get']>>>
            >
          >,
          ReturnType<typeof getSimulationTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['simulation-types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimulationTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSimulationTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['simulation-types'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSimulationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.simulations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['simulations', '/simulations', keyArgs] as const
}

export function getSimulationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.simulations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSimulationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.simulations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSimulations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.simulations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.simulations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.simulations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.simulations.$get>>>>
          >,
          ReturnType<typeof getSimulationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.simulations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSimulationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSimulationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.simulations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.simulations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.simulations.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.simulations)[':simulation_id']['$get']>>,
) {
  return ['simulations', '/simulations/:simulation_id', toValue(args)] as const
}

export function getSimulationsSimulationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.simulations)[':simulation_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSimulationsSimulationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.simulations[':simulation_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.simulations)[':simulation_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSimulationsSimulationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimulationsSimulationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSimulationsSimulationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.simulations[':simulation_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.simulations)[':simulation_id']['runs']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['simulations', '/simulations/:simulation_id/runs', keyArgs] as const
}

export function getSimulationsSimulationIdRunsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.simulations)[':simulation_id']['runs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSimulationsSimulationIdRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.simulations[':simulation_id'].runs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.simulations)[':simulation_id']['runs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['runs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSimulationsSimulationIdRunsQueryKey>
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
          Awaited<ReturnType<(typeof client.simulations)[':simulation_id']['runs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimulationsSimulationIdRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSimulationsSimulationIdRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.simulations[':simulation_id'].runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['$get']
    >
  >,
) {
  return [
    'simulations',
    '/simulations/:simulation_id/runs/:simulation_run_id',
    toValue(args),
  ] as const
}

export function getSimulationsSimulationIdRunsSimulationRunIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSimulationsSimulationIdRunsSimulationRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.simulations[':simulation_id'].runs[':simulation_run_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['$get']
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
                    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['$get']
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
                    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSimulationsSimulationIdRunsSimulationRunIdQueryKey>
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
              (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimulationsSimulationIdRunsSimulationRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSimulationsSimulationIdRunsSimulationRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.simulations[':simulation_id'].runs[':simulation_run_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSimulationsSimulationIdRunsSimulationRunIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'simulations',
    '/simulations/:simulation_id/runs/:simulation_run_id/events',
    keyArgs,
  ] as const
}

export function getSimulationsSimulationIdRunsSimulationRunIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSimulationsSimulationIdRunsSimulationRunIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.simulations[':simulation_id'].runs[':simulation_run_id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events']['$get']
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
                    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events']['$get']
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
                    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSimulationsSimulationIdRunsSimulationRunIdEventsQueryKey>
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
              (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimulationsSimulationIdRunsSimulationRunIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSimulationsSimulationIdRunsSimulationRunIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.simulations[':simulation_id'].runs[':simulation_run_id'].events.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['$get']
    >
  >,
) {
  return [
    'simulations',
    '/simulations/:simulation_id/runs/:simulation_run_id/events/:simulation_event_id',
    toValue(args),
  ] as const
}

export function getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.simulations[':simulation_id'].runs[':simulation_run_id'].events[
          ':simulation_event_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['$get']
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
                    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['$get']
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
                    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdQueryKey
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
              (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.simulations[':simulation_id'].runs[':simulation_run_id'].events[
            ':simulation_event_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['history']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions/:subscription_id/history', keyArgs] as const
}

export function getSubscriptionsSubscriptionIdHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsSubscriptionIdHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':subscription_id'].history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['history']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.subscriptions)[':subscription_id']['history']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsSubscriptionIdHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsSubscriptionIdHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':subscription_id'].history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions', keyArgs] as const
}

export function getSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
          >,
          ReturnType<typeof getSubscriptionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsSubscriptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['$get']>
  >,
) {
  return ['subscriptions', '/subscriptions/:subscription_id', toValue(args)] as const
}

export function getSubscriptionsSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsSubscriptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':subscription_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsSubscriptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':subscription_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.subscriptions)[':subscription_id']['update-payment-method-transaction']['$get']
    >
  >,
) {
  return [
    'subscriptions',
    '/subscriptions/:subscription_id/update-payment-method-transaction',
    toValue(args),
  ] as const
}

export function getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.subscriptions)[':subscription_id']['update-payment-method-transaction']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':subscription_id']['update-payment-method-transaction'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.subscriptions)[':subscription_id']['update-payment-method-transaction']['$get']
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
                    (typeof client.subscriptions)[':subscription_id']['update-payment-method-transaction']['$get']
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
                    (typeof client.subscriptions)[':subscription_id']['update-payment-method-transaction']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionQueryKey>
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
              (typeof client.subscriptions)[':subscription_id']['update-payment-method-transaction']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':subscription_id']['update-payment-method-transaction'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSettingsTaxQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsTaxQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.tax.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSettingsTax<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tax.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tax.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tax.$get>>>>
          >,
          ReturnType<typeof getSettingsTaxQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tax.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSettingsTaxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsTaxQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.tax.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tax.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.settings.tax.$patch>,
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

export function getTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['transactions', '/transactions', keyArgs] as const
}

export function getTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
          >,
          ReturnType<typeof getTransactionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.transactions.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>>,
) {
  return ['transactions', '/transactions/:transaction_id', toValue(args)] as const
}

export function getTransactionsTransactionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionsTransactionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions[':transaction_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTransactionsTransactionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsTransactionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionsTransactionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions[':transaction_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transactions)[':transaction_id']['invoice']['$get']>
  >,
) {
  return ['transactions', '/transactions/:transaction_id/invoice', toValue(args)] as const
}

export function getTransactionsTransactionIdInvoiceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transactions)[':transaction_id']['invoice']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionsTransactionIdInvoiceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions[':transaction_id'].invoice.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transactions)[':transaction_id']['invoice']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.transactions)[':transaction_id']['invoice']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTransactionsTransactionIdInvoiceQueryKey>
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
          Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['invoice']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsTransactionIdInvoiceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionsTransactionIdInvoiceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions[':transaction_id'].invoice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVerificationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.verifications.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['verifications', '/verifications', keyArgs] as const
}

export function getVerificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.verifications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVerificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.verifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVerifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.verifications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.$get>>>>
          >,
          ReturnType<typeof getVerificationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVerificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVerificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.verifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVerificationsVerificationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.verifications)[':verification_id']['$get']>
  >,
) {
  return ['verifications', '/verifications/:verification_id', toValue(args)] as const
}

export function getVerificationsVerificationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.verifications)[':verification_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVerificationsVerificationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.verifications[':verification_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.verifications)[':verification_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.verifications)[':verification_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVerificationsVerificationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.verifications)[':verification_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVerificationsVerificationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVerificationsVerificationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.verifications[':verification_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
