import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createPostAcceptanceRequested<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAcceptanceRequestedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutAttemptedDeliveryQueryResolved<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAttemptedDeliveryQueryResolvedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCheckoutTenantCheckoutIdQueryKey(
  args: InferRequestType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['checkout', '/checkout/:tenant/:checkoutId', keyArgs] as const
}

export function getCheckoutTenantCheckoutIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCheckoutTenantCheckoutIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checkout[':tenant'][':checkoutId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCheckoutTenantCheckoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCheckoutTenantCheckoutIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchCheckoutTenantCheckoutId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCheckoutTenantCheckoutIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCheckoutTenantCheckoutIdFulfilmentAvailabletimesQueryKey(
  args: InferRequestType<
    (typeof client.checkout)[':tenant'][':checkoutId']['fulfilment']['availabletimes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['checkout', '/checkout/:tenant/:checkoutId/fulfilment/availabletimes', keyArgs] as const
}

export function getCheckoutTenantCheckoutIdFulfilmentAvailabletimesQueryOptions<
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
  args: InferRequestType<
    (typeof client.checkout)[':tenant'][':checkoutId']['fulfilment']['availabletimes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCheckoutTenantCheckoutIdFulfilmentAvailabletimesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checkout[':tenant'][':checkoutId'].fulfilment.availabletimes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCheckoutTenantCheckoutIdFulfilmentAvailabletimes<
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
  args: () => InferRequestType<
    (typeof client.checkout)[':tenant'][':checkoutId']['fulfilment']['availabletimes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCheckoutTenantCheckoutIdFulfilmentAvailabletimesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getConsumersTenantQueryKey(
  args: InferRequestType<(typeof client.consumers)[':tenant']['$get']>,
) {
  return ['consumers', '/consumers/:tenant', args] as const
}

export function getConsumersTenantQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.consumers)[':tenant']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.consumers)[':tenant']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.consumers)[':tenant']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumersTenantQueryKey>
  >({
    queryKey: getConsumersTenantQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumers[':tenant'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConsumersTenant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.consumers)[':tenant']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.consumers)[':tenant']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.consumers)[':tenant']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConsumersTenantQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConsumersTenantQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostConsumersTenant<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.consumers)[':tenant']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.consumers)[':tenant']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConsumersTenantMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConsumersTenantMeCommunicationPreferencesQueryKey(
  args: InferRequestType<
    (typeof client.consumers)[':tenant']['me']['communication-preferences']['$get']
  >,
) {
  return ['consumers', '/consumers/:tenant/me/communication-preferences', args] as const
}

export function getConsumersTenantMeCommunicationPreferencesQueryOptions<
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
  args: InferRequestType<
    (typeof client.consumers)[':tenant']['me']['communication-preferences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumersTenantMeCommunicationPreferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumers[':tenant'].me['communication-preferences'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumersTenantMeCommunicationPreferences<
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
  args: () => InferRequestType<
    (typeof client.consumers)[':tenant']['me']['communication-preferences']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConsumersTenantMeCommunicationPreferencesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getConsumersTenantMeCommunicationPreferencesTypeQueryKey(
  args: InferRequestType<
    (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$get']
  >,
) {
  return ['consumers', '/consumers/:tenant/me/communication-preferences/:type', args] as const
}

export function getConsumersTenantMeCommunicationPreferencesTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumersTenantMeCommunicationPreferencesTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumers[':tenant'].me['communication-preferences'][':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumersTenantMeCommunicationPreferencesType<
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
  args: () => InferRequestType<
    (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConsumersTenantMeCommunicationPreferencesTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutConsumersTenantMeCommunicationPreferencesType<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutConsumersTenantMeCommunicationPreferencesTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannel<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannel<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutDeliveryFailed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-failed']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['delivery-failed']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDeliveryFailedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeliveryFeesTenantQueryKey(
  args: InferRequestType<(typeof client)['delivery-fees'][':tenant']['$get']>,
) {
  return ['delivery-fees', '/delivery-fees/:tenant', args] as const
}

export function getDeliveryFeesTenantQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-fees'][':tenant']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['delivery-fees'][':tenant']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDeliveryFeesTenantQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['delivery-fees'][':tenant'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDeliveryFeesTenant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-fees'][':tenant']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['delivery-fees'][':tenant']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeliveryFeesTenantQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeliveryEstimateQueryKey(
  args: InferRequestType<typeof client.delivery.estimate.$get>,
) {
  return ['delivery', '/delivery/estimate', args] as const
}

export function getDeliveryEstimateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.estimate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.delivery.estimate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.estimate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDeliveryEstimateQueryKey>
  >({
    queryKey: getDeliveryEstimateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.delivery.estimate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDeliveryEstimate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.estimate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.delivery.estimate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.delivery.estimate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeliveryEstimateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeliveryEstimateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeliveryPoolsQueryKey() {
  return ['delivery', '/delivery/pools'] as const
}

export function getDeliveryPoolsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.pools.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.pools.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDeliveryPoolsQueryKey>
  >({
    queryKey: getDeliveryPoolsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.delivery.pools.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDeliveryPools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.pools.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.pools.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDeliveryPoolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeliveryPoolsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostDeliveryPools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.pools.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.delivery.pools.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeliveryPoolsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeliveryPoolsDeliveryPoolIdQueryKey(
  args: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>,
) {
  return ['delivery', '/delivery/pools/:deliveryPoolId', args] as const
}

export function getDeliveryPoolsDeliveryPoolIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDeliveryPoolsDeliveryPoolIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.delivery.pools[':deliveryPoolId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDeliveryPoolsDeliveryPoolId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDeliveryPoolsDeliveryPoolIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDeliveryPoolsDeliveryPoolId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDeliveryPoolsDeliveryPoolIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDeliveryPoolsDeliveryPoolId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDeliveryPoolsDeliveryPoolIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchDeliveryPoolsDeliveryPoolId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDeliveryPoolsDeliveryPoolIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeQueryKey(
  args: InferRequestType<
    (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$get']
  >,
) {
  return ['delivery', '/delivery/pools/:deliveryPoolId/availability/relative', args] as const
}

export function getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeQueryOptions<
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
  args: InferRequestType<
    (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.delivery.pools[':deliveryPoolId'].availability.relative.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDeliveryPoolsDeliveryPoolIdAvailabilityRelative<
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
  args: () => InferRequestType<
    (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutDeliveryPoolsDeliveryPoolIdAvailabilityRelative<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDeliveryPoolsDeliveryPoolIdAvailabilityRelativeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutDeliveryPoolsDeliveryPoolIdHours<
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
                ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['hours']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['hours']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDeliveryPoolsDeliveryPoolIdHoursMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutDeliveryPoolsDeliveryPoolIdRestaurants<
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
                ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['restaurants']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['restaurants']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDeliveryPoolsDeliveryPoolIdRestaurantsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDeliveryPoolsDeliveryPoolIdRestaurants<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDeliveryPoolsDeliveryPoolIdRestaurantsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutDriverAssignedToDelivery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDriverAssignedToDeliveryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutDriverAtDeliveryAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDriverAtDeliveryAddressMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutDriverAtRestaurant<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDriverAtRestaurantMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutDriverHasDeliveredOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDriverHasDeliveredOrderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutDriverLocation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['driver-location']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['driver-location']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDriverLocationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutDriverOnTheirWayToDeliveryAddress<
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
                ReturnType<(typeof client)['driver-on-their-way-to-delivery-address']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['driver-on-their-way-to-delivery-address']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDriverOnTheirWayToDeliveryAddressMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostLateOrderCompensationQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLateOrderCompensationQueryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostLateOrderQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['late-order-query']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['late-order-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLateOrderQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMenuIngestionComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMenuIngestionCompleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOrderAccepted<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['order-accepted']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['order-accepted']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrderAcceptedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOrderCancelled<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['order-cancelled']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['order-cancelled']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrderCancelledMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOrderEligibleForRestaurantCompensation<
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
                ReturnType<(typeof client)['order-eligible-for-restaurant-compensation']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['order-eligible-for-restaurant-compensation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrderEligibleForRestaurantCompensationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutOrderIsReadyForPickup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrderIsReadyForPickupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOrderReadyForPreparationAsync<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrderReadyForPreparationAsyncMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOrderReadyForPreparationSync<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrderReadyForPreparationSyncMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOrderRejected<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['order-rejected']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['order-rejected']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrderRejectedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutOrderRequiresDeliveryAcceptance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrderRequiresDeliveryAcceptanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOrderTimeUpdated<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrderTimeUpdatedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$post>>>>>,
        TError,
        InferRequestType<typeof client.orders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrdersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutOrdersDeliverystateDriverlocation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrdersDeliverystateDriverlocationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutOrdersOrderIdAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrdersOrderIdAcceptMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutOrdersOrderIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrdersOrderIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOrdersOrderIdComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrdersOrderIdCompleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutOrdersOrderIdDeliverystateAtdeliveryaddress<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrdersOrderIdDeliverystateAtdeliveryaddressMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutOrdersOrderIdDeliverystateAtrestaurant<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrdersOrderIdDeliverystateAtrestaurantMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutOrdersOrderIdDeliverystateAtrestauranteta<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrdersOrderIdDeliverystateAtrestaurantetaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutOrdersOrderIdDeliverystateDelivered<
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
                ReturnType<(typeof client.orders)[':orderId']['deliverystate']['delivered']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.orders)[':orderId']['deliverystate']['delivered']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrdersOrderIdDeliverystateDeliveredMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutOrdersOrderIdDeliverystateDriverassigned<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrdersOrderIdDeliverystateDriverassignedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutOrdersOrderIdDeliverystateDriverlocation<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrdersOrderIdDeliverystateDriverlocationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutOrdersOrderIdDeliverystateDriverunassigned<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrdersOrderIdDeliverystateDriverunassignedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutOrdersOrderIdDeliverystateOnitsway<
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
                ReturnType<(typeof client.orders)[':orderId']['deliverystate']['onitsway']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.orders)[':orderId']['deliverystate']['onitsway']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrdersOrderIdDeliverystateOnitswayMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutOrdersOrderIdDuedate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrdersOrderIdDuedateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutOrdersOrderIdIgnore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrdersOrderIdIgnoreMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOrdersOrderIdReadyforcollection<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrdersOrderIdReadyforcollectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutOrdersOrderIdReject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrdersOrderIdRejectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponse<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponseMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponse<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponseMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOrdersTenantOrderIdRestaurantqueriesCompensation<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrdersTenantOrderIdRestaurantqueriesCompensationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutRedeliveryRequested<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRedeliveryRequestedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutRestaurantOfflineStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRestaurantOfflineStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutRestaurantOnlineStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRestaurantOnlineStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRestaurantsBylatlongQueryKey(
  args: InferRequestType<typeof client.restaurants.bylatlong.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['restaurants', '/restaurants/bylatlong', keyArgs] as const
}

export function getRestaurantsBylatlongQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restaurants.bylatlong.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.restaurants.bylatlong.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.restaurants.bylatlong.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestaurantsBylatlongQueryKey>
  >({
    queryKey: getRestaurantsBylatlongQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restaurants.bylatlong.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRestaurantsBylatlong<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restaurants.bylatlong.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.restaurants.bylatlong.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.restaurants.bylatlong.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestaurantsBylatlongQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestaurantsBylatlongQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRestaurantsBypostcodePostcodeQueryKey(
  args: InferRequestType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restaurants', '/restaurants/bypostcode/:postcode', keyArgs] as const
}

export function getRestaurantsBypostcodePostcodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestaurantsBypostcodePostcodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restaurants.bypostcode[':postcode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRestaurantsBypostcodePostcode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestaurantsBypostcodePostcodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRestaurantsDriverEta<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.restaurants.driver.eta.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.restaurants.driver.eta.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRestaurantsDriverEtaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRestaurantsTenantRestaurantIdCatalogueQueryKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['$get']
  >,
) {
  return ['restaurants', '/restaurants/:tenant/:restaurantId/catalogue', args] as const
}

export function getRestaurantsTenantRestaurantIdCatalogueQueryOptions<
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
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestaurantsTenantRestaurantIdCatalogueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].catalogue.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRestaurantsTenantRestaurantIdCatalogue<
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
  args: () => InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRestaurantsTenantRestaurantIdCatalogueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestaurantsTenantRestaurantIdCatalogueQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesQueryKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['availabilities']['$get']
  >,
) {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/catalogue/availabilities',
    args,
  ] as const
}

export function getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesQueryOptions<
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
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['availabilities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].catalogue.availabilities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRestaurantsTenantRestaurantIdCatalogueAvailabilities<
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
  args: () => InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['availabilities']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRestaurantsTenantRestaurantIdCatalogueCategoriesQueryKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories']['$get']
  >,
) {
  return ['restaurants', '/restaurants/:tenant/:restaurantId/catalogue/categories', args] as const
}

export function getRestaurantsTenantRestaurantIdCatalogueCategoriesQueryOptions<
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
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestaurantsTenantRestaurantIdCatalogueCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].catalogue.categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRestaurantsTenantRestaurantIdCatalogueCategories<
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
  args: () => InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestaurantsTenantRestaurantIdCatalogueCategoriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsQueryKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories'][':categoryId']['items']['$get']
  >,
) {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/catalogue/categories/:categoryId/items',
    args,
  ] as const
}

export function getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsQueryOptions<
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
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories'][':categoryId']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].catalogue.categories[
          ':categoryId'
        ].items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItems<
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
  args: () => InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories'][':categoryId']['items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<
          typeof getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsQueryKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items']['$get']
  >,
) {
  return ['restaurants', '/restaurants/:tenant/:restaurantId/catalogue/items', args] as const
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsQueryOptions<
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
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestaurantsTenantRestaurantIdCatalogueItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].catalogue.items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRestaurantsTenantRestaurantIdCatalogueItems<
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
  args: () => InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestaurantsTenantRestaurantIdCatalogueItemsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsQueryKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups']['$get']
  >,
) {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/catalogue/items/:itemId/dealgroups',
    args,
  ] as const
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsQueryOptions<
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
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].dealgroups.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroups<
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
  args: () => InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsQueryKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups'][':dealGroupId']['dealitemvariations']['$get']
  >,
) {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/catalogue/items/:itemId/dealgroups/:dealGroupId/dealitemvariations',
    args,
  ] as const
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsQueryOptions<
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
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups'][':dealGroupId']['dealitemvariations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].dealgroups[
          ':dealGroupId'
        ].dealitemvariations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariations<
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
  args: () => InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups'][':dealGroupId']['dealitemvariations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsQueryKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['modifiergroups']['$get']
  >,
) {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/catalogue/items/:itemId/modifiergroups',
    args,
  ] as const
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsQueryOptions<
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
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['modifiergroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].catalogue.items[
          ':itemId'
        ].modifiergroups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroups<
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
  args: () => InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['modifiergroups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<
          typeof getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsQueryKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['variations']['$get']
  >,
) {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/catalogue/items/:itemId/variations',
    args,
  ] as const
}

export function getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsQueryOptions<
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
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['variations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].variations.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariations<
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
  args: () => InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['variations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRestaurantsTenantRestaurantIdCustomerclaimsQueryKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restaurants', '/restaurants/:tenant/:restaurantId/customerclaims', keyArgs] as const
}

export function getRestaurantsTenantRestaurantIdCustomerclaimsQueryOptions<
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
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestaurantsTenantRestaurantIdCustomerclaimsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].customerclaims.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRestaurantsTenantRestaurantIdCustomerclaims<
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
  args: () => InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestaurantsTenantRestaurantIdCustomerclaimsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRestaurantsTenantRestaurantIdCustomerclaimsIdQueryKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restaurants', '/restaurants/:tenant/:restaurantId/customerclaims/:id', keyArgs] as const
}

export function getRestaurantsTenantRestaurantIdCustomerclaimsIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestaurantsTenantRestaurantIdCustomerclaimsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].customerclaims[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRestaurantsTenantRestaurantIdCustomerclaimsId<
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
  args: () => InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestaurantsTenantRestaurantIdCustomerclaimsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponse<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustification<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustificationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRestaurantsTenantRestaurantIdFeesQueryKey(
  args: InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restaurants', '/restaurants/:tenant/:restaurantId/fees', keyArgs] as const
}

export function getRestaurantsTenantRestaurantIdFeesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestaurantsTenantRestaurantIdFeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].fees.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRestaurantsTenantRestaurantIdFees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestaurantsTenantRestaurantIdFeesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRestaurantsTenantRestaurantIdFees<
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
                ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRestaurantsTenantRestaurantIdFeesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRestaurantsTenantRestaurantIdMenuQueryKey(
  args: InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restaurants', '/restaurants/:tenant/:restaurantId/menu', keyArgs] as const
}

export function getRestaurantsTenantRestaurantIdMenuQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestaurantsTenantRestaurantIdMenuQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].menu.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRestaurantsTenantRestaurantIdMenu<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestaurantsTenantRestaurantIdMenuQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRestaurantsTenantRestaurantIdMenu<
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
                ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRestaurantsTenantRestaurantIdMenuMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRestaurantsTenantRestaurantIdOrdertimesQueryKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restaurants', '/restaurants/:tenant/:restaurantId/ordertimes', keyArgs] as const
}

export function getRestaurantsTenantRestaurantIdOrdertimesQueryOptions<
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
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestaurantsTenantRestaurantIdOrdertimesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].ordertimes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRestaurantsTenantRestaurantIdOrdertimes<
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
  args: () => InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestaurantsTenantRestaurantIdOrdertimesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceType<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceTypeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRestaurantsTenantRestaurantIdServicetimesQueryKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$get']
  >,
) {
  return ['restaurants', '/restaurants/:tenant/:restaurantId/servicetimes', args] as const
}

export function getRestaurantsTenantRestaurantIdServicetimesQueryOptions<
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
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestaurantsTenantRestaurantIdServicetimesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restaurants[':tenant'][':restaurantId'].servicetimes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRestaurantsTenantRestaurantIdServicetimes<
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
  args: () => InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestaurantsTenantRestaurantIdServicetimesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutRestaurantsTenantRestaurantIdServicetimes<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRestaurantsTenantRestaurantIdServicetimesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSearchAutocompleteTenantQueryKey(
  args: InferRequestType<(typeof client.search.autocomplete)[':tenant']['$get']>,
) {
  return ['search', '/search/autocomplete/:tenant', args] as const
}

export function getSearchAutocompleteTenantQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.autocomplete)[':tenant']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search.autocomplete)[':tenant']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSearchAutocompleteTenantQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.autocomplete[':tenant'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchAutocompleteTenant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.autocomplete)[':tenant']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search.autocomplete)[':tenant']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchAutocompleteTenantQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSearchRestaurantsTenantQueryKey(
  args: InferRequestType<(typeof client.search.restaurants)[':tenant']['$get']>,
) {
  return ['search', '/search/restaurants/:tenant', args] as const
}

export function getSearchRestaurantsTenantQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.restaurants)[':tenant']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search.restaurants)[':tenant']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSearchRestaurantsTenantQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.restaurants[':tenant'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchRestaurantsTenant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.restaurants)[':tenant']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search.restaurants)[':tenant']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchRestaurantsTenantQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSendToPosFailed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSendToPosFailedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1TenantRestaurantsEventOffline<
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
                  (typeof client.v1)[':tenant']['restaurants']['event']['offline']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':tenant']['restaurants']['event']['offline']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TenantRestaurantsEventOfflineMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1TenantRestaurantsIdEventOffline<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1TenantRestaurantsIdEventOfflineMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTenantOrdersOrderIdQueriesAttempteddelivery<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTenantOrdersOrderIdQueriesAttempteddeliveryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorder<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorderMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
