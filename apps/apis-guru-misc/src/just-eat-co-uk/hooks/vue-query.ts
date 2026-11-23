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

export function getAcceptanceRequestedKey() {
  return ['acceptance-requested'] as const
}

export function getAttemptedDeliveryQueryResolvedKey() {
  return ['attempted-delivery-query-resolved'] as const
}

export function getCheckoutKey() {
  return ['checkout'] as const
}

export function getConsumersKey() {
  return ['consumers'] as const
}

export function getDeliveryKey() {
  return ['delivery'] as const
}

export function getDeliveryFailedKey() {
  return ['delivery-failed'] as const
}

export function getDeliveryFeesKey() {
  return ['delivery-fees'] as const
}

export function getDriverAssignedToDeliveryKey() {
  return ['driver-assigned-to-delivery'] as const
}

export function getDriverAtDeliveryAddressKey() {
  return ['driver-at-delivery-address'] as const
}

export function getDriverAtRestaurantKey() {
  return ['driver-at-restaurant'] as const
}

export function getDriverHasDeliveredOrderKey() {
  return ['driver-has-delivered-order'] as const
}

export function getDriverLocationKey() {
  return ['driver-location'] as const
}

export function getDriverOnTheirWayToDeliveryAddressKey() {
  return ['driver-on-their-way-to-delivery-address'] as const
}

export function getLateOrderCompensationQueryKey() {
  return ['late-order-compensation-query'] as const
}

export function getLateOrderQueryKey() {
  return ['late-order-query'] as const
}

export function getMenuIngestionCompleteKey() {
  return ['menu-ingestion-complete'] as const
}

export function getOrderAcceptedKey() {
  return ['order-accepted'] as const
}

export function getOrderCancelledKey() {
  return ['order-cancelled'] as const
}

export function getOrderEligibleForRestaurantCompensationKey() {
  return ['order-eligible-for-restaurant-compensation'] as const
}

export function getOrderIsReadyForPickupKey() {
  return ['order-is-ready-for-pickup'] as const
}

export function getOrderReadyForPreparationAsyncKey() {
  return ['order-ready-for-preparation-async'] as const
}

export function getOrderReadyForPreparationSyncKey() {
  return ['order-ready-for-preparation-sync'] as const
}

export function getOrderRejectedKey() {
  return ['order-rejected'] as const
}

export function getOrderRequiresDeliveryAcceptanceKey() {
  return ['order-requires-delivery-acceptance'] as const
}

export function getOrderTimeUpdatedKey() {
  return ['order-time-updated'] as const
}

export function getOrdersKey() {
  return ['orders'] as const
}

export function getRedeliveryRequestedKey() {
  return ['redelivery-requested'] as const
}

export function getRestaurantOfflineStatusKey() {
  return ['restaurant-offline-status'] as const
}

export function getRestaurantOnlineStatusKey() {
  return ['restaurant-online-status'] as const
}

export function getRestaurantsKey() {
  return ['restaurants'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSendToPosFailedKey() {
  return ['send-to-pos-failed'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getTenantKey() {
  return ['{tenant}'] as const
}

export function getPostAcceptanceRequestedMutationKey() {
  return ['acceptance-requested', '/acceptance-requested', 'POST'] as const
}

export function getPostAcceptanceRequestedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['acceptance-requested']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['acceptance-requested']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAcceptanceRequestedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['acceptance-requested']['$post']>) {
      return parseResponse(client['acceptance-requested'].$post(args, options))
    },
  })
}

export function usePostAcceptanceRequested<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['acceptance-requested']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['acceptance-requested']['$post']>,
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
  const mutationDefaults = getPostAcceptanceRequestedMutationOptions<TError, TOnMutateResult>(
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

export function getPutAttemptedDeliveryQueryResolvedMutationKey() {
  return ['attempted-delivery-query-resolved', '/attempted-delivery-query-resolved', 'PUT'] as const
}

export function getPutAttemptedDeliveryQueryResolvedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attempted-delivery-query-resolved']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['attempted-delivery-query-resolved']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAttemptedDeliveryQueryResolvedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['attempted-delivery-query-resolved']['$put']>,
    ) {
      return parseResponse(client['attempted-delivery-query-resolved'].$put(args, options))
    },
  })
}

export function usePutAttemptedDeliveryQueryResolved<
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
                Awaited<ReturnType<(typeof client)['attempted-delivery-query-resolved']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['attempted-delivery-query-resolved']['$put']>,
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
  const mutationDefaults = getPutAttemptedDeliveryQueryResolvedMutationOptions<
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

export function getCheckoutTenantCheckoutIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['checkout', '/checkout/:tenant/:checkoutId', keyArgs] as const
}

export function getCheckoutTenantCheckoutIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCheckoutTenantCheckoutIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checkout[':tenant'][':checkoutId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCheckoutTenantCheckoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCheckoutTenantCheckoutIdQueryKey>
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
          Awaited<ReturnType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCheckoutTenantCheckoutIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCheckoutTenantCheckoutIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checkout[':tenant'][':checkoutId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchCheckoutTenantCheckoutIdMutationKey() {
  return ['checkout', '/checkout/:tenant/:checkoutId', 'PATCH'] as const
}

export function getPatchCheckoutTenantCheckoutIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checkout)[':tenant'][':checkoutId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.checkout)[':tenant'][':checkoutId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCheckoutTenantCheckoutIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.checkout)[':tenant'][':checkoutId']['$patch']>,
    ) {
      return parseResponse(client.checkout[':tenant'][':checkoutId'].$patch(args, options))
    },
  })
}

export function usePatchCheckoutTenantCheckoutId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checkout)[':tenant'][':checkoutId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.checkout)[':tenant'][':checkoutId']['$patch']>,
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
  const mutationDefaults = getPatchCheckoutTenantCheckoutIdMutationOptions<TError, TOnMutateResult>(
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

export function getCheckoutTenantCheckoutIdFulfilmentAvailabletimesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.checkout)[':tenant'][':checkoutId']['fulfilment']['availabletimes']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['checkout', '/checkout/:tenant/:checkoutId/fulfilment/availabletimes', keyArgs] as const
}

export function getCheckoutTenantCheckoutIdFulfilmentAvailabletimesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.checkout)[':tenant'][':checkoutId']['fulfilment']['availabletimes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCheckoutTenantCheckoutIdFulfilmentAvailabletimesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checkout[':tenant'][':checkoutId'].fulfilment.availabletimes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCheckoutTenantCheckoutIdFulfilmentAvailabletimes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.checkout)[':tenant'][':checkoutId']['fulfilment']['availabletimes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.checkout)[':tenant'][':checkoutId']['fulfilment']['availabletimes']['$get']
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
                    (typeof client.checkout)[':tenant'][':checkoutId']['fulfilment']['availabletimes']['$get']
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
                    (typeof client.checkout)[':tenant'][':checkoutId']['fulfilment']['availabletimes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCheckoutTenantCheckoutIdFulfilmentAvailabletimesQueryKey>
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
              (typeof client.checkout)[':tenant'][':checkoutId']['fulfilment']['availabletimes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCheckoutTenantCheckoutIdFulfilmentAvailabletimesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCheckoutTenantCheckoutIdFulfilmentAvailabletimesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checkout[':tenant'][':checkoutId'].fulfilment.availabletimes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumersTenantQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.consumers)[':tenant']['$get']>>,
) {
  return ['consumers', '/consumers/:tenant', toValue(args)] as const
}

export function getConsumersTenantQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.consumers)[':tenant']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumersTenantQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumers[':tenant'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumersTenant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.consumers)[':tenant']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.consumers)[':tenant']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumers)[':tenant']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumers)[':tenant']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConsumersTenantQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.consumers)[':tenant']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumersTenantQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumersTenantQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumers[':tenant'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConsumersTenantMutationKey() {
  return ['consumers', '/consumers/:tenant', 'POST'] as const
}

export function getPostConsumersTenantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.consumers)[':tenant']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.consumers)[':tenant']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConsumersTenantMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.consumers)[':tenant']['$post']>) {
      return parseResponse(client.consumers[':tenant'].$post(args, options))
    },
  })
}

export function usePostConsumersTenant<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumers)[':tenant']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumers)[':tenant']['$post']>,
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
  const mutationDefaults = getPostConsumersTenantMutationOptions<TError, TOnMutateResult>(
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

export function getConsumersTenantMeCommunicationPreferencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumers)[':tenant']['me']['communication-preferences']['$get']
    >
  >,
) {
  return ['consumers', '/consumers/:tenant/me/communication-preferences', toValue(args)] as const
}

export function getConsumersTenantMeCommunicationPreferencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumers)[':tenant']['me']['communication-preferences']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumersTenantMeCommunicationPreferencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumers[':tenant'].me['communication-preferences'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumersTenantMeCommunicationPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.consumers)[':tenant']['me']['communication-preferences']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumers)[':tenant']['me']['communication-preferences']['$get']
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
                    (typeof client.consumers)[':tenant']['me']['communication-preferences']['$get']
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
                    (typeof client.consumers)[':tenant']['me']['communication-preferences']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConsumersTenantMeCommunicationPreferencesQueryKey>
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
              (typeof client.consumers)[':tenant']['me']['communication-preferences']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumersTenantMeCommunicationPreferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumersTenantMeCommunicationPreferencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumers[':tenant'].me['communication-preferences'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumersTenantMeCommunicationPreferencesTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$get']
    >
  >,
) {
  return [
    'consumers',
    '/consumers/:tenant/me/communication-preferences/:type',
    toValue(args),
  ] as const
}

export function getConsumersTenantMeCommunicationPreferencesTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumersTenantMeCommunicationPreferencesTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumers[':tenant'].me['communication-preferences'][':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumersTenantMeCommunicationPreferencesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$get']
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
                    (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$get']
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
                    (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConsumersTenantMeCommunicationPreferencesTypeQueryKey>
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
              (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumersTenantMeCommunicationPreferencesTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumersTenantMeCommunicationPreferencesTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumers[':tenant'].me['communication-preferences'][':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConsumersTenantMeCommunicationPreferencesTypeMutationKey() {
  return ['consumers', '/consumers/:tenant/me/communication-preferences/:type', 'PUT'] as const
}

export function getPutConsumersTenantMeCommunicationPreferencesTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutConsumersTenantMeCommunicationPreferencesTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$put']
      >,
    ) {
      return parseResponse(
        client.consumers[':tenant'].me['communication-preferences'][':type'].$put(args, options),
      )
    },
  })
}

export function usePutConsumersTenantMeCommunicationPreferencesType<
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
                      (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$put']
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
  const mutationDefaults = getPutConsumersTenantMeCommunicationPreferencesTypeMutationOptions<
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

export function getPostConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelMutationKey() {
  return [
    'consumers',
    '/consumers/:tenant/me/communication-preferences/:type/subscribedChannels/:channel',
    'POST',
  ] as const
}

export function getPostConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['subscribedChannels'][':channel']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['subscribedChannels'][':channel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['subscribedChannels'][':channel']['$post']
      >,
    ) {
      return parseResponse(
        client.consumers[':tenant'].me['communication-preferences'][':type'].subscribedChannels[
          ':channel'
        ].$post(args, options),
      )
    },
  })
}

export function usePostConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannel<
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
                      (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['subscribedChannels'][':channel']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['subscribedChannels'][':channel']['$post']
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
    getPostConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelMutationOptions<
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

export function getDeleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelMutationKey() {
  return [
    'consumers',
    '/consumers/:tenant/me/communication-preferences/:type/subscribedChannels/:channel',
    'DELETE',
  ] as const
}

export function getDeleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['subscribedChannels'][':channel']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['subscribedChannels'][':channel']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['subscribedChannels'][':channel']['$delete']
      >,
    ) {
      return parseResponse(
        client.consumers[':tenant'].me['communication-preferences'][':type'].subscribedChannels[
          ':channel'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannel<
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
                      (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['subscribedChannels'][':channel']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['subscribedChannels'][':channel']['$delete']
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
    getDeleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelMutationOptions<
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

export function getPutDeliveryFailedMutationKey() {
  return ['delivery-failed', '/delivery-failed', 'PUT'] as const
}

export function getPutDeliveryFailedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-failed']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['delivery-failed']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDeliveryFailedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['delivery-failed']['$put']>) {
      return parseResponse(client['delivery-failed'].$put(args, options))
    },
  })
}

export function usePutDeliveryFailed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-failed']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['delivery-failed']['$put']>,
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
  const mutationDefaults = getPutDeliveryFailedMutationOptions<TError, TOnMutateResult>(
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

export function getDeliveryFeesTenantQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['delivery-fees'][':tenant']['$get']>>,
) {
  return ['delivery-fees', '/delivery-fees/:tenant', toValue(args)] as const
}

export function getDeliveryFeesTenantQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['delivery-fees'][':tenant']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeliveryFeesTenantQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['delivery-fees'][':tenant'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeliveryFeesTenant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-fees'][':tenant']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['delivery-fees'][':tenant']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['delivery-fees'][':tenant']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['delivery-fees'][':tenant']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDeliveryFeesTenantQueryKey>
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
          Awaited<ReturnType<(typeof client)['delivery-fees'][':tenant']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeliveryFeesTenantQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeliveryFeesTenantQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['delivery-fees'][':tenant'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeliveryEstimateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.delivery.estimate.$get>>,
) {
  return ['delivery', '/delivery/estimate', toValue(args)] as const
}

export function getDeliveryEstimateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.delivery.estimate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeliveryEstimateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.delivery.estimate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeliveryEstimate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.estimate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.delivery.estimate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.delivery.estimate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.delivery.estimate.$get>>>
            >
          >,
          ReturnType<typeof getDeliveryEstimateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.estimate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDeliveryEstimateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeliveryEstimateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.delivery.estimate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeliveryPoolsQueryKey() {
  return ['delivery', '/delivery/pools'] as const
}

export function getDeliveryPoolsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDeliveryPoolsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.delivery.pools.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDeliveryPools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.pools.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.pools.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.pools.$get>>>>
          >,
          ReturnType<typeof getDeliveryPoolsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.pools.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDeliveryPoolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDeliveryPoolsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.delivery.pools.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDeliveryPoolsMutationKey() {
  return ['delivery', '/delivery/pools', 'POST'] as const
}

export function getPostDeliveryPoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.pools.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.delivery.pools.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeliveryPoolsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.delivery.pools.$post>) {
      return parseResponse(client.delivery.pools.$post(args, options))
    },
  })
}

export function usePostDeliveryPools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.delivery.pools.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.delivery.pools.$post>,
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
  const mutationDefaults = getPostDeliveryPoolsMutationOptions<TError, TOnMutateResult>(
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

export function getDeliveryPoolsDeliveryPoolIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>
  >,
) {
  return ['delivery', '/delivery/pools/:deliveryPoolId', toValue(args)] as const
}

export function getDeliveryPoolsDeliveryPoolIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeliveryPoolsDeliveryPoolIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.delivery.pools[':deliveryPoolId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeliveryPoolsDeliveryPoolId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDeliveryPoolsDeliveryPoolIdQueryKey>
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
          Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeliveryPoolsDeliveryPoolIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeliveryPoolsDeliveryPoolIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.delivery.pools[':deliveryPoolId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDeliveryPoolsDeliveryPoolIdMutationKey() {
  return ['delivery', '/delivery/pools/:deliveryPoolId', 'PUT'] as const
}

export function getPutDeliveryPoolsDeliveryPoolIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDeliveryPoolsDeliveryPoolIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$put']>,
    ) {
      return parseResponse(client.delivery.pools[':deliveryPoolId'].$put(args, options))
    },
  })
}

export function usePutDeliveryPoolsDeliveryPoolId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$put']>,
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
  const mutationDefaults = getPutDeliveryPoolsDeliveryPoolIdMutationOptions<
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

export function getDeleteDeliveryPoolsDeliveryPoolIdMutationKey() {
  return ['delivery', '/delivery/pools/:deliveryPoolId', 'DELETE'] as const
}

export function getDeleteDeliveryPoolsDeliveryPoolIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeliveryPoolsDeliveryPoolIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$delete']>,
    ) {
      return parseResponse(client.delivery.pools[':deliveryPoolId'].$delete(args, options))
    },
  })
}

export function useDeleteDeliveryPoolsDeliveryPoolId<
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
                Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$delete']>,
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
  const mutationDefaults = getDeleteDeliveryPoolsDeliveryPoolIdMutationOptions<
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

export function getPatchDeliveryPoolsDeliveryPoolIdMutationKey() {
  return ['delivery', '/delivery/pools/:deliveryPoolId', 'PATCH'] as const
}

export function getPatchDeliveryPoolsDeliveryPoolIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDeliveryPoolsDeliveryPoolIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$patch']>,
    ) {
      return parseResponse(client.delivery.pools[':deliveryPoolId'].$patch(args, options))
    },
  })
}

export function usePatchDeliveryPoolsDeliveryPoolId<
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
                Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$patch']>,
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
  const mutationDefaults = getPatchDeliveryPoolsDeliveryPoolIdMutationOptions<
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

export function getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$get']
    >
  >,
) {
  return [
    'delivery',
    '/delivery/pools/:deliveryPoolId/availability/relative',
    toValue(args),
  ] as const
}

export function getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.delivery.pools[':deliveryPoolId'].availability.relative.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeliveryPoolsDeliveryPoolIdAvailabilityRelative<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$get']
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
                    (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$get']
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
                    (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeQueryKey>
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
              (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.delivery.pools[':deliveryPoolId'].availability.relative.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDeliveryPoolsDeliveryPoolIdAvailabilityRelativeMutationKey() {
  return ['delivery', '/delivery/pools/:deliveryPoolId/availability/relative', 'PUT'] as const
}

export function getPutDeliveryPoolsDeliveryPoolIdAvailabilityRelativeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDeliveryPoolsDeliveryPoolIdAvailabilityRelativeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$put']
      >,
    ) {
      return parseResponse(
        client.delivery.pools[':deliveryPoolId'].availability.relative.$put(args, options),
      )
    },
  })
}

export function usePutDeliveryPoolsDeliveryPoolIdAvailabilityRelative<
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
                    (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$put']
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
  const mutationDefaults = getPutDeliveryPoolsDeliveryPoolIdAvailabilityRelativeMutationOptions<
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

export function getPutDeliveryPoolsDeliveryPoolIdHoursMutationKey() {
  return ['delivery', '/delivery/pools/:deliveryPoolId/hours', 'PUT'] as const
}

export function getPutDeliveryPoolsDeliveryPoolIdHoursMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['hours']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['hours']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDeliveryPoolsDeliveryPoolIdHoursMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['hours']['$put']>,
    ) {
      return parseResponse(client.delivery.pools[':deliveryPoolId'].hours.$put(args, options))
    },
  })
}

export function usePutDeliveryPoolsDeliveryPoolIdHours<
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
                  ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['hours']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['hours']['$put']>,
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
  const mutationDefaults = getPutDeliveryPoolsDeliveryPoolIdHoursMutationOptions<
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

export function getPutDeliveryPoolsDeliveryPoolIdRestaurantsMutationKey() {
  return ['delivery', '/delivery/pools/:deliveryPoolId/restaurants', 'PUT'] as const
}

export function getPutDeliveryPoolsDeliveryPoolIdRestaurantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['restaurants']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['restaurants']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDeliveryPoolsDeliveryPoolIdRestaurantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.delivery.pools)[':deliveryPoolId']['restaurants']['$put']
      >,
    ) {
      return parseResponse(client.delivery.pools[':deliveryPoolId'].restaurants.$put(args, options))
    },
  })
}

export function usePutDeliveryPoolsDeliveryPoolIdRestaurants<
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
                    (typeof client.delivery.pools)[':deliveryPoolId']['restaurants']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.delivery.pools)[':deliveryPoolId']['restaurants']['$put']
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
  const mutationDefaults = getPutDeliveryPoolsDeliveryPoolIdRestaurantsMutationOptions<
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

export function getDeleteDeliveryPoolsDeliveryPoolIdRestaurantsMutationKey() {
  return ['delivery', '/delivery/pools/:deliveryPoolId/restaurants', 'DELETE'] as const
}

export function getDeleteDeliveryPoolsDeliveryPoolIdRestaurantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['restaurants']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['restaurants']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeliveryPoolsDeliveryPoolIdRestaurantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.delivery.pools)[':deliveryPoolId']['restaurants']['$delete']
      >,
    ) {
      return parseResponse(
        client.delivery.pools[':deliveryPoolId'].restaurants.$delete(args, options),
      )
    },
  })
}

export function useDeleteDeliveryPoolsDeliveryPoolIdRestaurants<
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
                    (typeof client.delivery.pools)[':deliveryPoolId']['restaurants']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.delivery.pools)[':deliveryPoolId']['restaurants']['$delete']
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
  const mutationDefaults = getDeleteDeliveryPoolsDeliveryPoolIdRestaurantsMutationOptions<
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

export function getPutDriverAssignedToDeliveryMutationKey() {
  return ['driver-assigned-to-delivery', '/driver-assigned-to-delivery', 'PUT'] as const
}

export function getPutDriverAssignedToDeliveryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['driver-assigned-to-delivery']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['driver-assigned-to-delivery']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDriverAssignedToDeliveryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['driver-assigned-to-delivery']['$put']>,
    ) {
      return parseResponse(client['driver-assigned-to-delivery'].$put(args, options))
    },
  })
}

export function usePutDriverAssignedToDelivery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['driver-assigned-to-delivery']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['driver-assigned-to-delivery']['$put']>,
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
  const mutationDefaults = getPutDriverAssignedToDeliveryMutationOptions<TError, TOnMutateResult>(
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

export function getPutDriverAtDeliveryAddressMutationKey() {
  return ['driver-at-delivery-address', '/driver-at-delivery-address', 'PUT'] as const
}

export function getPutDriverAtDeliveryAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['driver-at-delivery-address']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['driver-at-delivery-address']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDriverAtDeliveryAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['driver-at-delivery-address']['$put']>,
    ) {
      return parseResponse(client['driver-at-delivery-address'].$put(args, options))
    },
  })
}

export function usePutDriverAtDeliveryAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['driver-at-delivery-address']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['driver-at-delivery-address']['$put']>,
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
  const mutationDefaults = getPutDriverAtDeliveryAddressMutationOptions<TError, TOnMutateResult>(
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

export function getPutDriverAtRestaurantMutationKey() {
  return ['driver-at-restaurant', '/driver-at-restaurant', 'PUT'] as const
}

export function getPutDriverAtRestaurantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['driver-at-restaurant']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['driver-at-restaurant']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDriverAtRestaurantMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['driver-at-restaurant']['$put']>) {
      return parseResponse(client['driver-at-restaurant'].$put(args, options))
    },
  })
}

export function usePutDriverAtRestaurant<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['driver-at-restaurant']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['driver-at-restaurant']['$put']>,
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
  const mutationDefaults = getPutDriverAtRestaurantMutationOptions<TError, TOnMutateResult>(
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

export function getPutDriverHasDeliveredOrderMutationKey() {
  return ['driver-has-delivered-order', '/driver-has-delivered-order', 'PUT'] as const
}

export function getPutDriverHasDeliveredOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['driver-has-delivered-order']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['driver-has-delivered-order']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDriverHasDeliveredOrderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['driver-has-delivered-order']['$put']>,
    ) {
      return parseResponse(client['driver-has-delivered-order'].$put(args, options))
    },
  })
}

export function usePutDriverHasDeliveredOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['driver-has-delivered-order']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['driver-has-delivered-order']['$put']>,
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
  const mutationDefaults = getPutDriverHasDeliveredOrderMutationOptions<TError, TOnMutateResult>(
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

export function getPutDriverLocationMutationKey() {
  return ['driver-location', '/driver-location', 'PUT'] as const
}

export function getPutDriverLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['driver-location']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['driver-location']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDriverLocationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['driver-location']['$put']>) {
      return parseResponse(client['driver-location'].$put(args, options))
    },
  })
}

export function usePutDriverLocation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['driver-location']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['driver-location']['$put']>,
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
  const mutationDefaults = getPutDriverLocationMutationOptions<TError, TOnMutateResult>(
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

export function getPutDriverOnTheirWayToDeliveryAddressMutationKey() {
  return [
    'driver-on-their-way-to-delivery-address',
    '/driver-on-their-way-to-delivery-address',
    'PUT',
  ] as const
}

export function getPutDriverOnTheirWayToDeliveryAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['driver-on-their-way-to-delivery-address']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['driver-on-their-way-to-delivery-address']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDriverOnTheirWayToDeliveryAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['driver-on-their-way-to-delivery-address']['$put']>,
    ) {
      return parseResponse(client['driver-on-their-way-to-delivery-address'].$put(args, options))
    },
  })
}

export function usePutDriverOnTheirWayToDeliveryAddress<
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
                  ReturnType<(typeof client)['driver-on-their-way-to-delivery-address']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['driver-on-their-way-to-delivery-address']['$put']>,
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
  const mutationDefaults = getPutDriverOnTheirWayToDeliveryAddressMutationOptions<
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

export function getPostLateOrderCompensationQueryMutationKey() {
  return ['late-order-compensation-query', '/late-order-compensation-query', 'POST'] as const
}

export function getPostLateOrderCompensationQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['late-order-compensation-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['late-order-compensation-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLateOrderCompensationQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['late-order-compensation-query']['$post']>,
    ) {
      return parseResponse(client['late-order-compensation-query'].$post(args, options))
    },
  })
}

export function usePostLateOrderCompensationQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['late-order-compensation-query']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['late-order-compensation-query']['$post']>,
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
  const mutationDefaults = getPostLateOrderCompensationQueryMutationOptions<
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

export function getPostLateOrderQueryMutationKey() {
  return ['late-order-query', '/late-order-query', 'POST'] as const
}

export function getPostLateOrderQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['late-order-query']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['late-order-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLateOrderQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['late-order-query']['$post']>) {
      return parseResponse(client['late-order-query'].$post(args, options))
    },
  })
}

export function usePostLateOrderQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['late-order-query']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['late-order-query']['$post']>,
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
  const mutationDefaults = getPostLateOrderQueryMutationOptions<TError, TOnMutateResult>(
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

export function getPostMenuIngestionCompleteMutationKey() {
  return ['menu-ingestion-complete', '/menu-ingestion-complete', 'POST'] as const
}

export function getPostMenuIngestionCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['menu-ingestion-complete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['menu-ingestion-complete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMenuIngestionCompleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['menu-ingestion-complete']['$post']>) {
      return parseResponse(client['menu-ingestion-complete'].$post(args, options))
    },
  })
}

export function usePostMenuIngestionComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['menu-ingestion-complete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['menu-ingestion-complete']['$post']>,
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
  const mutationDefaults = getPostMenuIngestionCompleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrderAcceptedMutationKey() {
  return ['order-accepted', '/order-accepted', 'POST'] as const
}

export function getPostOrderAcceptedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order-accepted']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['order-accepted']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrderAcceptedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['order-accepted']['$post']>) {
      return parseResponse(client['order-accepted'].$post(args, options))
    },
  })
}

export function usePostOrderAccepted<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['order-accepted']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['order-accepted']['$post']>,
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
  const mutationDefaults = getPostOrderAcceptedMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrderCancelledMutationKey() {
  return ['order-cancelled', '/order-cancelled', 'POST'] as const
}

export function getPostOrderCancelledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order-cancelled']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['order-cancelled']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrderCancelledMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['order-cancelled']['$post']>) {
      return parseResponse(client['order-cancelled'].$post(args, options))
    },
  })
}

export function usePostOrderCancelled<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['order-cancelled']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['order-cancelled']['$post']>,
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
  const mutationDefaults = getPostOrderCancelledMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrderEligibleForRestaurantCompensationMutationKey() {
  return [
    'order-eligible-for-restaurant-compensation',
    '/order-eligible-for-restaurant-compensation',
    'POST',
  ] as const
}

export function getPostOrderEligibleForRestaurantCompensationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['order-eligible-for-restaurant-compensation']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['order-eligible-for-restaurant-compensation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrderEligibleForRestaurantCompensationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['order-eligible-for-restaurant-compensation']['$post']
      >,
    ) {
      return parseResponse(
        client['order-eligible-for-restaurant-compensation'].$post(args, options),
      )
    },
  })
}

export function usePostOrderEligibleForRestaurantCompensation<
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
                  ReturnType<(typeof client)['order-eligible-for-restaurant-compensation']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['order-eligible-for-restaurant-compensation']['$post']>,
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
  const mutationDefaults = getPostOrderEligibleForRestaurantCompensationMutationOptions<
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

export function getPutOrderIsReadyForPickupMutationKey() {
  return ['order-is-ready-for-pickup', '/order-is-ready-for-pickup', 'PUT'] as const
}

export function getPutOrderIsReadyForPickupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order-is-ready-for-pickup']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['order-is-ready-for-pickup']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrderIsReadyForPickupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['order-is-ready-for-pickup']['$put']>) {
      return parseResponse(client['order-is-ready-for-pickup'].$put(args, options))
    },
  })
}

export function usePutOrderIsReadyForPickup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order-is-ready-for-pickup']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['order-is-ready-for-pickup']['$put']>,
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
  const mutationDefaults = getPutOrderIsReadyForPickupMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrderReadyForPreparationAsyncMutationKey() {
  return [
    'order-ready-for-preparation-async',
    '/order-ready-for-preparation-async',
    'POST',
  ] as const
}

export function getPostOrderReadyForPreparationAsyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order-ready-for-preparation-async']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['order-ready-for-preparation-async']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrderReadyForPreparationAsyncMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['order-ready-for-preparation-async']['$post']>,
    ) {
      return parseResponse(client['order-ready-for-preparation-async'].$post(args, options))
    },
  })
}

export function usePostOrderReadyForPreparationAsync<
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
                Awaited<ReturnType<(typeof client)['order-ready-for-preparation-async']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['order-ready-for-preparation-async']['$post']>,
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
  const mutationDefaults = getPostOrderReadyForPreparationAsyncMutationOptions<
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

export function getPostOrderReadyForPreparationSyncMutationKey() {
  return ['order-ready-for-preparation-sync', '/order-ready-for-preparation-sync', 'POST'] as const
}

export function getPostOrderReadyForPreparationSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order-ready-for-preparation-sync']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['order-ready-for-preparation-sync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrderReadyForPreparationSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['order-ready-for-preparation-sync']['$post']>,
    ) {
      return parseResponse(client['order-ready-for-preparation-sync'].$post(args, options))
    },
  })
}

export function usePostOrderReadyForPreparationSync<
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
                Awaited<ReturnType<(typeof client)['order-ready-for-preparation-sync']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['order-ready-for-preparation-sync']['$post']>,
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
  const mutationDefaults = getPostOrderReadyForPreparationSyncMutationOptions<
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

export function getPostOrderRejectedMutationKey() {
  return ['order-rejected', '/order-rejected', 'POST'] as const
}

export function getPostOrderRejectedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order-rejected']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['order-rejected']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrderRejectedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['order-rejected']['$post']>) {
      return parseResponse(client['order-rejected'].$post(args, options))
    },
  })
}

export function usePostOrderRejected<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['order-rejected']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['order-rejected']['$post']>,
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
  const mutationDefaults = getPostOrderRejectedMutationOptions<TError, TOnMutateResult>(
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

export function getPutOrderRequiresDeliveryAcceptanceMutationKey() {
  return [
    'order-requires-delivery-acceptance',
    '/order-requires-delivery-acceptance',
    'PUT',
  ] as const
}

export function getPutOrderRequiresDeliveryAcceptanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order-requires-delivery-acceptance']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['order-requires-delivery-acceptance']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrderRequiresDeliveryAcceptanceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['order-requires-delivery-acceptance']['$put']>,
    ) {
      return parseResponse(client['order-requires-delivery-acceptance'].$put(args, options))
    },
  })
}

export function usePutOrderRequiresDeliveryAcceptance<
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
                Awaited<ReturnType<(typeof client)['order-requires-delivery-acceptance']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['order-requires-delivery-acceptance']['$put']>,
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
  const mutationDefaults = getPutOrderRequiresDeliveryAcceptanceMutationOptions<
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

export function getPostOrderTimeUpdatedMutationKey() {
  return ['order-time-updated', '/order-time-updated', 'POST'] as const
}

export function getPostOrderTimeUpdatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order-time-updated']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['order-time-updated']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrderTimeUpdatedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['order-time-updated']['$post']>) {
      return parseResponse(client['order-time-updated'].$post(args, options))
    },
  })
}

export function usePostOrderTimeUpdated<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order-time-updated']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['order-time-updated']['$post']>,
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
  const mutationDefaults = getPostOrderTimeUpdatedMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrdersMutationKey() {
  return ['orders', '/orders', 'POST'] as const
}

export function getPostOrdersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$post>>>>>,
    TError,
    InferRequestType<typeof client.orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.orders.$post>) {
      return parseResponse(client.orders.$post(args, options))
    },
  })
}

export function usePostOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.orders.$post>,
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
  const mutationDefaults = getPostOrdersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutOrdersDeliverystateDriverlocationMutationKey() {
  return ['orders', '/orders/deliverystate/driverlocation', 'PUT'] as const
}

export function getPutOrdersDeliverystateDriverlocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.orders.deliverystate.driverlocation.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.orders.deliverystate.driverlocation.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutOrdersDeliverystateDriverlocationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.orders.deliverystate.driverlocation.$put>,
    ) {
      return parseResponse(client.orders.deliverystate.driverlocation.$put(args, options))
    },
  })
}

export function usePutOrdersDeliverystateDriverlocation<
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
                Awaited<ReturnType<typeof client.orders.deliverystate.driverlocation.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.orders.deliverystate.driverlocation.$put>,
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
  const mutationDefaults = getPutOrdersDeliverystateDriverlocationMutationOptions<
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

export function getPutOrdersOrderIdAcceptMutationKey() {
  return ['orders', '/orders/:orderId/accept', 'PUT'] as const
}

export function getPutOrdersOrderIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':orderId']['accept']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':orderId']['accept']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrdersOrderIdAcceptMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.orders)[':orderId']['accept']['$put']>) {
      return parseResponse(client.orders[':orderId'].accept.$put(args, options))
    },
  })
}

export function usePutOrdersOrderIdAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orders)[':orderId']['accept']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.orders)[':orderId']['accept']['$put']>,
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
  const mutationDefaults = getPutOrdersOrderIdAcceptMutationOptions<TError, TOnMutateResult>(
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

export function getPutOrdersOrderIdCancelMutationKey() {
  return ['orders', '/orders/:orderId/cancel', 'PUT'] as const
}

export function getPutOrdersOrderIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':orderId']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':orderId']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrdersOrderIdCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.orders)[':orderId']['cancel']['$put']>) {
      return parseResponse(client.orders[':orderId'].cancel.$put(args, options))
    },
  })
}

export function usePutOrdersOrderIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orders)[':orderId']['cancel']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.orders)[':orderId']['cancel']['$put']>,
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
  const mutationDefaults = getPutOrdersOrderIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrdersOrderIdCompleteMutationKey() {
  return ['orders', '/orders/:orderId/complete', 'POST'] as const
}

export function getPostOrdersOrderIdCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orders)[':orderId']['complete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.orders)[':orderId']['complete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersOrderIdCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.orders)[':orderId']['complete']['$post']>,
    ) {
      return parseResponse(client.orders[':orderId'].complete.$post(args, options))
    },
  })
}

export function usePostOrdersOrderIdComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.orders)[':orderId']['complete']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.orders)[':orderId']['complete']['$post']>,
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
  const mutationDefaults = getPostOrdersOrderIdCompleteMutationOptions<TError, TOnMutateResult>(
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

export function getPutOrdersOrderIdDeliverystateAtdeliveryaddressMutationKey() {
  return ['orders', '/orders/:orderId/deliverystate/atdeliveryaddress', 'PUT'] as const
}

export function getPutOrdersOrderIdDeliverystateAtdeliveryaddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.orders)[':orderId']['deliverystate']['atdeliveryaddress']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.orders)[':orderId']['deliverystate']['atdeliveryaddress']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrdersOrderIdDeliverystateAtdeliveryaddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orders)[':orderId']['deliverystate']['atdeliveryaddress']['$put']
      >,
    ) {
      return parseResponse(
        client.orders[':orderId'].deliverystate.atdeliveryaddress.$put(args, options),
      )
    },
  })
}

export function usePutOrdersOrderIdDeliverystateAtdeliveryaddress<
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
                    (typeof client.orders)[':orderId']['deliverystate']['atdeliveryaddress']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.orders)[':orderId']['deliverystate']['atdeliveryaddress']['$put']
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
  const mutationDefaults = getPutOrdersOrderIdDeliverystateAtdeliveryaddressMutationOptions<
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

export function getPutOrdersOrderIdDeliverystateAtrestaurantMutationKey() {
  return ['orders', '/orders/:orderId/deliverystate/atrestaurant', 'PUT'] as const
}

export function getPutOrdersOrderIdDeliverystateAtrestaurantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.orders)[':orderId']['deliverystate']['atrestaurant']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':orderId']['deliverystate']['atrestaurant']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrdersOrderIdDeliverystateAtrestaurantMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orders)[':orderId']['deliverystate']['atrestaurant']['$put']
      >,
    ) {
      return parseResponse(client.orders[':orderId'].deliverystate.atrestaurant.$put(args, options))
    },
  })
}

export function usePutOrdersOrderIdDeliverystateAtrestaurant<
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
                    (typeof client.orders)[':orderId']['deliverystate']['atrestaurant']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.orders)[':orderId']['deliverystate']['atrestaurant']['$put']
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
  const mutationDefaults = getPutOrdersOrderIdDeliverystateAtrestaurantMutationOptions<
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

export function getPutOrdersOrderIdDeliverystateAtrestaurantetaMutationKey() {
  return ['orders', '/orders/:orderId/deliverystate/atrestauranteta', 'PUT'] as const
}

export function getPutOrdersOrderIdDeliverystateAtrestaurantetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.orders)[':orderId']['deliverystate']['atrestauranteta']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.orders)[':orderId']['deliverystate']['atrestauranteta']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrdersOrderIdDeliverystateAtrestaurantetaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orders)[':orderId']['deliverystate']['atrestauranteta']['$put']
      >,
    ) {
      return parseResponse(
        client.orders[':orderId'].deliverystate.atrestauranteta.$put(args, options),
      )
    },
  })
}

export function usePutOrdersOrderIdDeliverystateAtrestauranteta<
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
                    (typeof client.orders)[':orderId']['deliverystate']['atrestauranteta']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.orders)[':orderId']['deliverystate']['atrestauranteta']['$put']
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
  const mutationDefaults = getPutOrdersOrderIdDeliverystateAtrestaurantetaMutationOptions<
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

export function getPutOrdersOrderIdDeliverystateDeliveredMutationKey() {
  return ['orders', '/orders/:orderId/deliverystate/delivered', 'PUT'] as const
}

export function getPutOrdersOrderIdDeliverystateDeliveredMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.orders)[':orderId']['deliverystate']['delivered']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':orderId']['deliverystate']['delivered']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrdersOrderIdDeliverystateDeliveredMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orders)[':orderId']['deliverystate']['delivered']['$put']
      >,
    ) {
      return parseResponse(client.orders[':orderId'].deliverystate.delivered.$put(args, options))
    },
  })
}

export function usePutOrdersOrderIdDeliverystateDelivered<
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
                    (typeof client.orders)[':orderId']['deliverystate']['delivered']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.orders)[':orderId']['deliverystate']['delivered']['$put']
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
  const mutationDefaults = getPutOrdersOrderIdDeliverystateDeliveredMutationOptions<
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

export function getPutOrdersOrderIdDeliverystateDriverassignedMutationKey() {
  return ['orders', '/orders/:orderId/deliverystate/driverassigned', 'PUT'] as const
}

export function getPutOrdersOrderIdDeliverystateDriverassignedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.orders)[':orderId']['deliverystate']['driverassigned']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':orderId']['deliverystate']['driverassigned']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrdersOrderIdDeliverystateDriverassignedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orders)[':orderId']['deliverystate']['driverassigned']['$put']
      >,
    ) {
      return parseResponse(
        client.orders[':orderId'].deliverystate.driverassigned.$put(args, options),
      )
    },
  })
}

export function usePutOrdersOrderIdDeliverystateDriverassigned<
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
                    (typeof client.orders)[':orderId']['deliverystate']['driverassigned']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.orders)[':orderId']['deliverystate']['driverassigned']['$put']
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
  const mutationDefaults = getPutOrdersOrderIdDeliverystateDriverassignedMutationOptions<
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

export function getPutOrdersOrderIdDeliverystateDriverlocationMutationKey() {
  return ['orders', '/orders/:orderId/deliverystate/driverlocation', 'PUT'] as const
}

export function getPutOrdersOrderIdDeliverystateDriverlocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.orders)[':orderId']['deliverystate']['driverlocation']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':orderId']['deliverystate']['driverlocation']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrdersOrderIdDeliverystateDriverlocationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orders)[':orderId']['deliverystate']['driverlocation']['$put']
      >,
    ) {
      return parseResponse(
        client.orders[':orderId'].deliverystate.driverlocation.$put(args, options),
      )
    },
  })
}

export function usePutOrdersOrderIdDeliverystateDriverlocation<
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
                    (typeof client.orders)[':orderId']['deliverystate']['driverlocation']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.orders)[':orderId']['deliverystate']['driverlocation']['$put']
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
  const mutationDefaults = getPutOrdersOrderIdDeliverystateDriverlocationMutationOptions<
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

export function getPutOrdersOrderIdDeliverystateDriverunassignedMutationKey() {
  return ['orders', '/orders/:orderId/deliverystate/driverunassigned', 'PUT'] as const
}

export function getPutOrdersOrderIdDeliverystateDriverunassignedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.orders)[':orderId']['deliverystate']['driverunassigned']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.orders)[':orderId']['deliverystate']['driverunassigned']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrdersOrderIdDeliverystateDriverunassignedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orders)[':orderId']['deliverystate']['driverunassigned']['$put']
      >,
    ) {
      return parseResponse(
        client.orders[':orderId'].deliverystate.driverunassigned.$put(args, options),
      )
    },
  })
}

export function usePutOrdersOrderIdDeliverystateDriverunassigned<
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
                    (typeof client.orders)[':orderId']['deliverystate']['driverunassigned']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.orders)[':orderId']['deliverystate']['driverunassigned']['$put']
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
  const mutationDefaults = getPutOrdersOrderIdDeliverystateDriverunassignedMutationOptions<
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

export function getPutOrdersOrderIdDeliverystateOnitswayMutationKey() {
  return ['orders', '/orders/:orderId/deliverystate/onitsway', 'PUT'] as const
}

export function getPutOrdersOrderIdDeliverystateOnitswayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.orders)[':orderId']['deliverystate']['onitsway']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':orderId']['deliverystate']['onitsway']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrdersOrderIdDeliverystateOnitswayMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orders)[':orderId']['deliverystate']['onitsway']['$put']
      >,
    ) {
      return parseResponse(client.orders[':orderId'].deliverystate.onitsway.$put(args, options))
    },
  })
}

export function usePutOrdersOrderIdDeliverystateOnitsway<
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
                    (typeof client.orders)[':orderId']['deliverystate']['onitsway']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.orders)[':orderId']['deliverystate']['onitsway']['$put']>,
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
  const mutationDefaults = getPutOrdersOrderIdDeliverystateOnitswayMutationOptions<
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

export function getPutOrdersOrderIdDuedateMutationKey() {
  return ['orders', '/orders/:orderId/duedate', 'PUT'] as const
}

export function getPutOrdersOrderIdDuedateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':orderId']['duedate']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':orderId']['duedate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrdersOrderIdDuedateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.orders)[':orderId']['duedate']['$put']>,
    ) {
      return parseResponse(client.orders[':orderId'].duedate.$put(args, options))
    },
  })
}

export function usePutOrdersOrderIdDuedate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orders)[':orderId']['duedate']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.orders)[':orderId']['duedate']['$put']>,
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
  const mutationDefaults = getPutOrdersOrderIdDuedateMutationOptions<TError, TOnMutateResult>(
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

export function getPutOrdersOrderIdIgnoreMutationKey() {
  return ['orders', '/orders/:orderId/ignore', 'PUT'] as const
}

export function getPutOrdersOrderIdIgnoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':orderId']['ignore']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':orderId']['ignore']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrdersOrderIdIgnoreMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.orders)[':orderId']['ignore']['$put']>) {
      return parseResponse(client.orders[':orderId'].ignore.$put(args, options))
    },
  })
}

export function usePutOrdersOrderIdIgnore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orders)[':orderId']['ignore']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.orders)[':orderId']['ignore']['$put']>,
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
  const mutationDefaults = getPutOrdersOrderIdIgnoreMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrdersOrderIdReadyforcollectionMutationKey() {
  return ['orders', '/orders/:orderId/readyforcollection', 'POST'] as const
}

export function getPostOrdersOrderIdReadyforcollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orders)[':orderId']['readyforcollection']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.orders)[':orderId']['readyforcollection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersOrderIdReadyforcollectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.orders)[':orderId']['readyforcollection']['$post']>,
    ) {
      return parseResponse(client.orders[':orderId'].readyforcollection.$post(args, options))
    },
  })
}

export function usePostOrdersOrderIdReadyforcollection<
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
                    ReturnType<(typeof client.orders)[':orderId']['readyforcollection']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.orders)[':orderId']['readyforcollection']['$post']>,
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
  const mutationDefaults = getPostOrdersOrderIdReadyforcollectionMutationOptions<
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

export function getPutOrdersOrderIdRejectMutationKey() {
  return ['orders', '/orders/:orderId/reject', 'PUT'] as const
}

export function getPutOrdersOrderIdRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':orderId']['reject']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':orderId']['reject']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrdersOrderIdRejectMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.orders)[':orderId']['reject']['$put']>) {
      return parseResponse(client.orders[':orderId'].reject.$put(args, options))
    },
  })
}

export function usePutOrdersOrderIdReject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orders)[':orderId']['reject']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.orders)[':orderId']['reject']['$put']>,
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
  const mutationDefaults = getPutOrdersOrderIdRejectMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponseMutationKey() {
  return [
    'orders',
    '/orders/:tenant/:orderId/consumerqueries/lateorder/restaurantresponse',
    'POST',
  ] as const
}

export function getPostOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.orders)[':tenant'][':orderId']['consumerqueries']['lateorder']['restaurantresponse']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.orders)[':tenant'][':orderId']['consumerqueries']['lateorder']['restaurantresponse']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orders)[':tenant'][':orderId']['consumerqueries']['lateorder']['restaurantresponse']['$post']
      >,
    ) {
      return parseResponse(
        client.orders[':tenant'][':orderId'].consumerqueries.lateorder.restaurantresponse.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponse<
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
                    (typeof client.orders)[':tenant'][':orderId']['consumerqueries']['lateorder']['restaurantresponse']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.orders)[':tenant'][':orderId']['consumerqueries']['lateorder']['restaurantresponse']['$post']
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
    getPostOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponseMutationOptions<
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

export function getPostOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponseMutationKey() {
  return [
    'orders',
    '/orders/:tenant/:orderId/consumerqueries/lateordercompensation/restaurantresponse',
    'POST',
  ] as const
}

export function getPostOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.orders)[':tenant'][':orderId']['consumerqueries']['lateordercompensation']['restaurantresponse']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.orders)[':tenant'][':orderId']['consumerqueries']['lateordercompensation']['restaurantresponse']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orders)[':tenant'][':orderId']['consumerqueries']['lateordercompensation']['restaurantresponse']['$post']
      >,
    ) {
      return parseResponse(
        client.orders[':tenant'][
          ':orderId'
        ].consumerqueries.lateordercompensation.restaurantresponse.$post(args, options),
      )
    },
  })
}

export function usePostOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponse<
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
                    (typeof client.orders)[':tenant'][':orderId']['consumerqueries']['lateordercompensation']['restaurantresponse']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.orders)[':tenant'][':orderId']['consumerqueries']['lateordercompensation']['restaurantresponse']['$post']
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
    getPostOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponseMutationOptions<
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

export function getPostOrdersTenantOrderIdRestaurantqueriesCompensationMutationKey() {
  return ['orders', '/orders/:tenant/:orderId/restaurantqueries/compensation', 'POST'] as const
}

export function getPostOrdersTenantOrderIdRestaurantqueriesCompensationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.orders)[':tenant'][':orderId']['restaurantqueries']['compensation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.orders)[':tenant'][':orderId']['restaurantqueries']['compensation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersTenantOrderIdRestaurantqueriesCompensationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orders)[':tenant'][':orderId']['restaurantqueries']['compensation']['$post']
      >,
    ) {
      return parseResponse(
        client.orders[':tenant'][':orderId'].restaurantqueries.compensation.$post(args, options),
      )
    },
  })
}

export function usePostOrdersTenantOrderIdRestaurantqueriesCompensation<
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
                    (typeof client.orders)[':tenant'][':orderId']['restaurantqueries']['compensation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.orders)[':tenant'][':orderId']['restaurantqueries']['compensation']['$post']
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
  const mutationDefaults = getPostOrdersTenantOrderIdRestaurantqueriesCompensationMutationOptions<
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

export function getPutRedeliveryRequestedMutationKey() {
  return ['redelivery-requested', '/redelivery-requested', 'PUT'] as const
}

export function getPutRedeliveryRequestedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['redelivery-requested']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['redelivery-requested']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRedeliveryRequestedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['redelivery-requested']['$put']>) {
      return parseResponse(client['redelivery-requested'].$put(args, options))
    },
  })
}

export function usePutRedeliveryRequested<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['redelivery-requested']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['redelivery-requested']['$put']>,
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
  const mutationDefaults = getPutRedeliveryRequestedMutationOptions<TError, TOnMutateResult>(
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

export function getPutRestaurantOfflineStatusMutationKey() {
  return ['restaurant-offline-status', '/restaurant-offline-status', 'PUT'] as const
}

export function getPutRestaurantOfflineStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['restaurant-offline-status']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['restaurant-offline-status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRestaurantOfflineStatusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['restaurant-offline-status']['$put']>) {
      return parseResponse(client['restaurant-offline-status'].$put(args, options))
    },
  })
}

export function usePutRestaurantOfflineStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['restaurant-offline-status']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['restaurant-offline-status']['$put']>,
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
  const mutationDefaults = getPutRestaurantOfflineStatusMutationOptions<TError, TOnMutateResult>(
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

export function getPutRestaurantOnlineStatusMutationKey() {
  return ['restaurant-online-status', '/restaurant-online-status', 'PUT'] as const
}

export function getPutRestaurantOnlineStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['restaurant-online-status']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['restaurant-online-status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRestaurantOnlineStatusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['restaurant-online-status']['$put']>) {
      return parseResponse(client['restaurant-online-status'].$put(args, options))
    },
  })
}

export function usePutRestaurantOnlineStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['restaurant-online-status']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['restaurant-online-status']['$put']>,
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
  const mutationDefaults = getPutRestaurantOnlineStatusMutationOptions<TError, TOnMutateResult>(
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

export function getRestaurantsBylatlongQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.restaurants.bylatlong.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restaurants', '/restaurants/bylatlong', keyArgs] as const
}

export function getRestaurantsBylatlongQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.restaurants.bylatlong.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestaurantsBylatlongQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restaurants.bylatlong.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestaurantsBylatlong<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restaurants.bylatlong.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.restaurants.bylatlong.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.restaurants.bylatlong.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.restaurants.bylatlong.$get>>>
            >
          >,
          ReturnType<typeof getRestaurantsBylatlongQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.restaurants.bylatlong.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestaurantsBylatlongQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestaurantsBylatlongQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restaurants.bylatlong.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestaurantsBypostcodePostcodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restaurants', '/restaurants/bypostcode/:postcode', keyArgs] as const
}

export function getRestaurantsBypostcodePostcodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestaurantsBypostcodePostcodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restaurants.bypostcode[':postcode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestaurantsBypostcodePostcode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestaurantsBypostcodePostcodeQueryKey>
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
          Awaited<ReturnType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestaurantsBypostcodePostcodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestaurantsBypostcodePostcodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restaurants.bypostcode[':postcode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRestaurantsDriverEtaMutationKey() {
  return ['restaurants', '/restaurants/driver/eta', 'PUT'] as const
}

export function getPutRestaurantsDriverEtaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.restaurants.driver.eta.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.restaurants.driver.eta.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutRestaurantsDriverEtaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.restaurants.driver.eta.$put>) {
      return parseResponse(client.restaurants.driver.eta.$put(args, options))
    },
  })
}

export function usePutRestaurantsDriverEta<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.restaurants.driver.eta.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.restaurants.driver.eta.$put>,
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
  const mutationDefaults = getPutRestaurantsDriverEtaMutationOptions<TError, TOnMutateResult>(
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

export function getRestaurantsTenantRestaurantIdCatalogueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['$get']>
  >,
) {
  return ['restaurants', '/restaurants/:tenant/:restaurantId/catalogue', toValue(args)] as const
}

export function getRestaurantsTenantRestaurantIdCatalogueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestaurantsTenantRestaurantIdCatalogueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].catalogue.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestaurantsTenantRestaurantIdCatalogue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['$get']>
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestaurantsTenantRestaurantIdCatalogueQueryKey>
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
            ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestaurantsTenantRestaurantIdCatalogueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestaurantsTenantRestaurantIdCatalogueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['availabilities']['$get']
    >
  >,
) {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/catalogue/availabilities',
    toValue(args),
  ] as const
}

export function getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['availabilities']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].catalogue.availabilities.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRestaurantsTenantRestaurantIdCatalogueAvailabilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['availabilities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['availabilities']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['availabilities']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['availabilities']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesQueryKey>
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
              (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['availabilities']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.availabilities.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRestaurantsTenantRestaurantIdCatalogueCategoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories']['$get']
    >
  >,
) {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/catalogue/categories',
    toValue(args),
  ] as const
}

export function getRestaurantsTenantRestaurantIdCatalogueCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestaurantsTenantRestaurantIdCatalogueCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].catalogue.categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestaurantsTenantRestaurantIdCatalogueCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestaurantsTenantRestaurantIdCatalogueCategoriesQueryKey>
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
              (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestaurantsTenantRestaurantIdCatalogueCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestaurantsTenantRestaurantIdCatalogueCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories'][':categoryId']['items']['$get']
    >
  >,
) {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/catalogue/categories/:categoryId/items',
    toValue(args),
  ] as const
}

export function getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories'][':categoryId']['items']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].catalogue.categories[
          ':categoryId'
        ].items.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories'][':categoryId']['items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories'][':categoryId']['items']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories'][':categoryId']['items']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories'][':categoryId']['items']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsQueryKey
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
              (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories'][':categoryId']['items']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.categories[
            ':categoryId'
          ].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items']['$get']
    >
  >,
) {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/catalogue/items',
    toValue(args),
  ] as const
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestaurantsTenantRestaurantIdCatalogueItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].catalogue.items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestaurantsTenantRestaurantIdCatalogueItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestaurantsTenantRestaurantIdCatalogueItemsQueryKey>
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
              (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestaurantsTenantRestaurantIdCatalogueItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestaurantsTenantRestaurantIdCatalogueItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups']['$get']
    >
  >,
) {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/catalogue/items/:itemId/dealgroups',
    toValue(args),
  ] as const
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].dealgroups.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsQueryKey>
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
              (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].dealgroups.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups'][':dealGroupId']['dealitemvariations']['$get']
    >
  >,
) {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/catalogue/items/:itemId/dealgroups/:dealGroupId/dealitemvariations',
    toValue(args),
  ] as const
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups'][':dealGroupId']['dealitemvariations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].dealgroups[
          ':dealGroupId'
        ].dealitemvariations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups'][':dealGroupId']['dealitemvariations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups'][':dealGroupId']['dealitemvariations']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups'][':dealGroupId']['dealitemvariations']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups'][':dealGroupId']['dealitemvariations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsQueryKey
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
              (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups'][':dealGroupId']['dealitemvariations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].dealgroups[
            ':dealGroupId'
          ].dealitemvariations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['modifiergroups']['$get']
    >
  >,
) {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/catalogue/items/:itemId/modifiergroups',
    toValue(args),
  ] as const
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['modifiergroups']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].catalogue.items[
          ':itemId'
        ].modifiergroups.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['modifiergroups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['modifiergroups']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['modifiergroups']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['modifiergroups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsQueryKey
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
              (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['modifiergroups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.items[
            ':itemId'
          ].modifiergroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['variations']['$get']
    >
  >,
) {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/catalogue/items/:itemId/variations',
    toValue(args),
  ] as const
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['variations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].variations.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['variations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['variations']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['variations']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['variations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsQueryKey>
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
              (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['variations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].variations.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRestaurantsTenantRestaurantIdCustomerclaimsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restaurants', '/restaurants/:tenant/:restaurantId/customerclaims', keyArgs] as const
}

export function getRestaurantsTenantRestaurantIdCustomerclaimsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestaurantsTenantRestaurantIdCustomerclaimsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].customerclaims.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestaurantsTenantRestaurantIdCustomerclaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestaurantsTenantRestaurantIdCustomerclaimsQueryKey>
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
              (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestaurantsTenantRestaurantIdCustomerclaimsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestaurantsTenantRestaurantIdCustomerclaimsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restaurants[':tenant'][':restaurantId'].customerclaims.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestaurantsTenantRestaurantIdCustomerclaimsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restaurants', '/restaurants/:tenant/:restaurantId/customerclaims/:id', keyArgs] as const
}

export function getRestaurantsTenantRestaurantIdCustomerclaimsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestaurantsTenantRestaurantIdCustomerclaimsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].customerclaims[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestaurantsTenantRestaurantIdCustomerclaimsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestaurantsTenantRestaurantIdCustomerclaimsIdQueryKey>
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
              (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestaurantsTenantRestaurantIdCustomerclaimsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestaurantsTenantRestaurantIdCustomerclaimsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restaurants[':tenant'][':restaurantId'].customerclaims[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseMutationKey() {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/customerclaims/:id/restaurantresponse',
    'POST',
  ] as const
}

export function getPostRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['restaurantresponse']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['restaurantresponse']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['restaurantresponse']['$post']
      >,
    ) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].customerclaims[
          ':id'
        ].restaurantresponse.$post(args, options),
      )
    },
  })
}

export function usePostRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponse<
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['restaurantresponse']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['restaurantresponse']['$post']
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
    getPostRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseMutationOptions<
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

export function getPutRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustificationMutationKey() {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/customerclaims/:id/restaurantresponse/justification',
    'PUT',
  ] as const
}

export function getPutRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['restaurantresponse']['justification']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['restaurantresponse']['justification']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['restaurantresponse']['justification']['$put']
      >,
    ) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].customerclaims[
          ':id'
        ].restaurantresponse.justification.$put(args, options),
      )
    },
  })
}

export function usePutRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustification<
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
                      (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['restaurantresponse']['justification']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['restaurantresponse']['justification']['$put']
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
    getPutRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustificationMutationOptions<
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

export function getRestaurantsTenantRestaurantIdFeesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restaurants', '/restaurants/:tenant/:restaurantId/fees', keyArgs] as const
}

export function getRestaurantsTenantRestaurantIdFeesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestaurantsTenantRestaurantIdFeesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].fees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestaurantsTenantRestaurantIdFees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']>
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestaurantsTenantRestaurantIdFeesQueryKey>
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
            ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestaurantsTenantRestaurantIdFeesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestaurantsTenantRestaurantIdFeesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restaurants[':tenant'][':restaurantId'].fees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRestaurantsTenantRestaurantIdFeesMutationKey() {
  return ['restaurants', '/restaurants/:tenant/:restaurantId/fees', 'PUT'] as const
}

export function getPutRestaurantsTenantRestaurantIdFeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRestaurantsTenantRestaurantIdFeesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$put']
      >,
    ) {
      return parseResponse(client.restaurants[':tenant'][':restaurantId'].fees.$put(args, options))
    },
  })
}

export function usePutRestaurantsTenantRestaurantIdFees<
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$put']>,
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
  const mutationDefaults = getPutRestaurantsTenantRestaurantIdFeesMutationOptions<
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

export function getRestaurantsTenantRestaurantIdMenuQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restaurants', '/restaurants/:tenant/:restaurantId/menu', keyArgs] as const
}

export function getRestaurantsTenantRestaurantIdMenuQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestaurantsTenantRestaurantIdMenuQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].menu.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestaurantsTenantRestaurantIdMenu<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']>
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestaurantsTenantRestaurantIdMenuQueryKey>
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
            ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestaurantsTenantRestaurantIdMenuQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestaurantsTenantRestaurantIdMenuQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restaurants[':tenant'][':restaurantId'].menu.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRestaurantsTenantRestaurantIdMenuMutationKey() {
  return ['restaurants', '/restaurants/:tenant/:restaurantId/menu', 'PUT'] as const
}

export function getPutRestaurantsTenantRestaurantIdMenuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRestaurantsTenantRestaurantIdMenuMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$put']
      >,
    ) {
      return parseResponse(client.restaurants[':tenant'][':restaurantId'].menu.$put(args, options))
    },
  })
}

export function usePutRestaurantsTenantRestaurantIdMenu<
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$put']>,
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
  const mutationDefaults = getPutRestaurantsTenantRestaurantIdMenuMutationOptions<
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

export function getRestaurantsTenantRestaurantIdOrdertimesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restaurants', '/restaurants/:tenant/:restaurantId/ordertimes', keyArgs] as const
}

export function getRestaurantsTenantRestaurantIdOrdertimesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestaurantsTenantRestaurantIdOrdertimesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].ordertimes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestaurantsTenantRestaurantIdOrdertimes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes']['$get']>
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestaurantsTenantRestaurantIdOrdertimesQueryKey>
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
              (typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestaurantsTenantRestaurantIdOrdertimesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestaurantsTenantRestaurantIdOrdertimesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restaurants[':tenant'][':restaurantId'].ordertimes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceTypeMutationKey() {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/ordertimes/:dayOfWeek/:serviceType',
    'PUT',
  ] as const
}

export function getPutRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes'][':dayOfWeek'][':serviceType']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes'][':dayOfWeek'][':serviceType']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes'][':dayOfWeek'][':serviceType']['$put']
      >,
    ) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].ordertimes[':dayOfWeek'][
          ':serviceType'
        ].$put(args, options),
      )
    },
  })
}

export function usePutRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceType<
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
                      (typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes'][':dayOfWeek'][':serviceType']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes'][':dayOfWeek'][':serviceType']['$put']
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
    getPutRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceTypeMutationOptions<
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

export function getRestaurantsTenantRestaurantIdServicetimesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$get']
    >
  >,
) {
  return ['restaurants', '/restaurants/:tenant/:restaurantId/servicetimes', toValue(args)] as const
}

export function getRestaurantsTenantRestaurantIdServicetimesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestaurantsTenantRestaurantIdServicetimesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].servicetimes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestaurantsTenantRestaurantIdServicetimes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$get']
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestaurantsTenantRestaurantIdServicetimesQueryKey>
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
              (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestaurantsTenantRestaurantIdServicetimesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestaurantsTenantRestaurantIdServicetimesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restaurants[':tenant'][':restaurantId'].servicetimes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRestaurantsTenantRestaurantIdServicetimesMutationKey() {
  return ['restaurants', '/restaurants/:tenant/:restaurantId/servicetimes', 'PUT'] as const
}

export function getPutRestaurantsTenantRestaurantIdServicetimesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRestaurantsTenantRestaurantIdServicetimesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$put']
      >,
    ) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].servicetimes.$put(args, options),
      )
    },
  })
}

export function usePutRestaurantsTenantRestaurantIdServicetimes<
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
                    (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$put']
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
  const mutationDefaults = getPutRestaurantsTenantRestaurantIdServicetimesMutationOptions<
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

export function getSearchAutocompleteTenantQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search.autocomplete)[':tenant']['$get']>>,
) {
  return ['search', '/search/autocomplete/:tenant', toValue(args)] as const
}

export function getSearchAutocompleteTenantQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search.autocomplete)[':tenant']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchAutocompleteTenantQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.autocomplete[':tenant'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchAutocompleteTenant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.autocomplete)[':tenant']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search.autocomplete)[':tenant']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search.autocomplete)[':tenant']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search.autocomplete)[':tenant']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchAutocompleteTenantQueryKey>
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
          Awaited<ReturnType<(typeof client.search.autocomplete)[':tenant']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchAutocompleteTenantQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchAutocompleteTenantQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.autocomplete[':tenant'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchRestaurantsTenantQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search.restaurants)[':tenant']['$get']>>,
) {
  return ['search', '/search/restaurants/:tenant', toValue(args)] as const
}

export function getSearchRestaurantsTenantQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search.restaurants)[':tenant']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchRestaurantsTenantQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.restaurants[':tenant'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchRestaurantsTenant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.restaurants)[':tenant']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search.restaurants)[':tenant']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search.restaurants)[':tenant']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search.restaurants)[':tenant']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchRestaurantsTenantQueryKey>
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
          Awaited<ReturnType<(typeof client.search.restaurants)[':tenant']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchRestaurantsTenantQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchRestaurantsTenantQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.restaurants[':tenant'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSendToPosFailedMutationKey() {
  return ['send-to-pos-failed', '/send-to-pos-failed', 'POST'] as const
}

export function getPostSendToPosFailedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['send-to-pos-failed']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['send-to-pos-failed']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSendToPosFailedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['send-to-pos-failed']['$post']>) {
      return parseResponse(client['send-to-pos-failed'].$post(args, options))
    },
  })
}

export function usePostSendToPosFailed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['send-to-pos-failed']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['send-to-pos-failed']['$post']>,
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
  const mutationDefaults = getPostSendToPosFailedMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1TenantRestaurantsEventOfflineMutationKey() {
  return ['v1', '/v1/:tenant/restaurants/event/offline', 'POST'] as const
}

export function getPostV1TenantRestaurantsEventOfflineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)[':tenant']['restaurants']['event']['offline']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':tenant']['restaurants']['event']['offline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TenantRestaurantsEventOfflineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':tenant']['restaurants']['event']['offline']['$post']
      >,
    ) {
      return parseResponse(client.v1[':tenant'].restaurants.event.offline.$post(args, options))
    },
  })
}

export function usePostV1TenantRestaurantsEventOffline<
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
                    (typeof client.v1)[':tenant']['restaurants']['event']['offline']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':tenant']['restaurants']['event']['offline']['$post']
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
  const mutationDefaults = getPostV1TenantRestaurantsEventOfflineMutationOptions<
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

export function getDeleteV1TenantRestaurantsIdEventOfflineMutationKey() {
  return ['v1', '/v1/:tenant/restaurants/:id/event/offline', 'DELETE'] as const
}

export function getDeleteV1TenantRestaurantsIdEventOfflineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':tenant']['restaurants'][':id']['event']['offline']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':tenant']['restaurants'][':id']['event']['offline']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TenantRestaurantsIdEventOfflineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':tenant']['restaurants'][':id']['event']['offline']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1[':tenant'].restaurants[':id'].event.offline.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1TenantRestaurantsIdEventOffline<
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
                    (typeof client.v1)[':tenant']['restaurants'][':id']['event']['offline']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':tenant']['restaurants'][':id']['event']['offline']['$delete']
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
  const mutationDefaults = getDeleteV1TenantRestaurantsIdEventOfflineMutationOptions<
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

export function getPostTenantOrdersOrderIdQueriesAttempteddeliveryMutationKey() {
  return [':tenant', '/:tenant/orders/:orderId/queries/attempteddelivery', 'POST'] as const
}

export function getPostTenantOrdersOrderIdQueriesAttempteddeliveryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':tenant']['orders'][':orderId']['queries']['attempteddelivery']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':tenant']['orders'][':orderId']['queries']['attempteddelivery']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTenantOrdersOrderIdQueriesAttempteddeliveryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenant']['orders'][':orderId']['queries']['attempteddelivery']['$post']
      >,
    ) {
      return parseResponse(
        client[':tenant'].orders[':orderId'].queries.attempteddelivery.$post(args, options),
      )
    },
  })
}

export function usePostTenantOrdersOrderIdQueriesAttempteddelivery<
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
                    (typeof client)[':tenant']['orders'][':orderId']['queries']['attempteddelivery']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':tenant']['orders'][':orderId']['queries']['attempteddelivery']['$post']
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
  const mutationDefaults = getPostTenantOrdersOrderIdQueriesAttempteddeliveryMutationOptions<
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

export function getPostTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorderMutationKey() {
  return [
    ':tenant',
    '/:tenant/orders/:orderId/queries/attempteddelivery/resolution/redeliverorder',
    'POST',
  ] as const
}

export function getPostTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':tenant']['orders'][':orderId']['queries']['attempteddelivery']['resolution']['redeliverorder']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':tenant']['orders'][':orderId']['queries']['attempteddelivery']['resolution']['redeliverorder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenant']['orders'][':orderId']['queries']['attempteddelivery']['resolution']['redeliverorder']['$post']
      >,
    ) {
      return parseResponse(
        client[':tenant'].orders[
          ':orderId'
        ].queries.attempteddelivery.resolution.redeliverorder.$post(args, options),
      )
    },
  })
}

export function usePostTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorder<
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
                    (typeof client)[':tenant']['orders'][':orderId']['queries']['attempteddelivery']['resolution']['redeliverorder']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':tenant']['orders'][':orderId']['queries']['attempteddelivery']['resolution']['redeliverorder']['$post']
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
    getPostTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorderMutationOptions<
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
